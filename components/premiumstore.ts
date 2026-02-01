// src/components/premiumstore.ts
import { auth } from "../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { signOut } from "firebase/auth";

// === STATE PREMIUM ===
export type PremiumState = {
  isPremium: boolean;
  activeUntil: number; // timestamp ms
  deviceMismatch?: boolean; // ✅ untuk notifikasi di UI
};

const emptyState = (): PremiumState => ({
  isPremium: false,
  activeUntil: 0,
  deviceMismatch: false,
});

// === DEVICE ID (anti sharing) ===
const DEVICE_ID_KEY = "tka_smp_device_id_v1";

export const getOrCreateDeviceId = (): string => {
  if (typeof window === "undefined") return "ssr";
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
};

// === LOGIN GOOGLE ===
export const loginGoogle = async () => {
  const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// === LOGOUT GOOGLE ===
export const logoutGoogle = async () => {
  try {
    localStorage.removeItem("tka_smp_current_user");
    localStorage.removeItem("tka_smp_premium_state_v1");
  } catch {}
  return signOut(auth);
};

// === LOAD STATE DARI LOCAL STORAGE ===
export const loadPremiumState = (): PremiumState => {
  if (typeof window === "undefined") return emptyState();
  const saved = localStorage.getItem("tka_smp_premium_state_v1");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (
        parsed &&
        typeof parsed.isPremium === "boolean" &&
        typeof parsed.activeUntil === "number"
      ) {
        return { ...parsed, deviceMismatch: false };
      }
    } catch {}
  }
  return emptyState();
};

// === SIMPAN STATE KE LOCAL STORAGE ===
const savePremiumState = (st: PremiumState) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("tka_smp_premium_state_v1", JSON.stringify(st));
};

// === REFRESH STATE DARI FIRESTORE ===
export const refreshMyPremiumState = async (): Promise<PremiumState> => {
  const u = auth.currentUser;
  if (!u) return emptyState();

  const ref = doc(db, "users", u.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return emptyState();

  const data = snap.data() || {};
  const st: PremiumState = {
    isPremium: !!data.isPremium,
    activeUntil: data.activeUntil ? Number(data.activeUntil) : 0,
    deviceMismatch: false,
  };

  savePremiumState(st);
  return st;
};

// ===== Subscribe realtime (auto logout kalau device mismatch) =====
export const subscribeMyPremiumState = (
  onNext: (st: PremiumState) => void,
  onError?: (err: any) => void
) => {
  const u = auth.currentUser;
  if (!u) {
    onNext(emptyState());
    return () => {};
  }

  const localDeviceId = getOrCreateDeviceId();
  const ref = doc(db, "users", u.uid);

  const unsub = onSnapshot(
    ref,
    (docSnap) => {
      if (!docSnap.exists()) {
        onNext(emptyState());
        return;
      }

      const data = docSnap.data() || {};
      const lockedDeviceId = String(data.deviceId || "");

      // ✅ DEVICE MISMATCH → auto logout + bersihkan cache premium
      if (lockedDeviceId && lockedDeviceId !== localDeviceId) {
        try {
          localStorage.removeItem("tka_smp_premium_state_v1");
        } catch {}

        signOut(auth).catch(() => {});

        onNext({
          isPremium: false,
          activeUntil: 0,
          deviceMismatch: true,
        });
        return;
      }

      const st: PremiumState = {
        isPremium: !!data.isPremium,
        activeUntil: data.activeUntil ? Number(data.activeUntil) : 0,
        deviceMismatch: false,
      };

      savePremiumState(st);
      onNext(st);
    },
    (err) => {
      if (onError) onError(err);
    }
  );

  return unsub;
};
