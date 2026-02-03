import { auth } from "./firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { signOut } from "firebase/auth";

// === STATE PREMIUM ===
export type PremiumState = {
  isPremium: boolean;
  activeUntil: number; // timestamp ms
  deviceMismatch?: boolean; // ✅ untuk notifikasi di UI
  lockedEmail?: string; // ✅ email perangkat lain yang sedang login
};

const emptyState = (): PremiumState => ({
  isPremium: false,
  activeUntil: 0,
  deviceMismatch: false,
  lockedEmail: undefined,
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

// ✅ FIX: Reset device ID saat logout
export const resetDeviceId = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(DEVICE_ID_KEY);
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
    // ✅ FIX: Reset semua state termasuk device ID
    localStorage.removeItem("tka_smp_current_user");
    localStorage.removeItem("tka_smp_premium_state_v1");
    resetDeviceId(); // ✅ Reset device ID
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
        return { ...parsed, deviceMismatch: false, lockedEmail: undefined };
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
    lockedEmail: undefined,
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

  // ✅ Track unsubscribe untuk cleanup
  let unsubSnapshot: (() => void) | null = null;

  const handleDeviceMismatch = async (lockedEmail?: string) => {
    try {
      // ✅ Cleanup semua state
      localStorage.removeItem("tka_smp_premium_state_v1");
      resetDeviceId(); // ✅ Reset device ID

      // ✅ Unsubscribe listener sebelum logout
      if (unsubSnapshot) {
        unsubSnapshot();
        unsubSnapshot = null;
      }

      // ✅ Force logout
      await signOut(auth);

      // ✅ Update state UI dengan info email perangkat lain
      onNext({
        isPremium: false,
        activeUntil: 0,
        deviceMismatch: true,
        lockedEmail: lockedEmail || "perangkat lain",
      });

      // ✅ Force refresh halaman setelah 2 detik
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      if (onError) onError(err);
    }
  };

  unsubSnapshot = onSnapshot(
    ref,
    (docSnap) => {
      if (!docSnap.exists()) {
        onNext(emptyState());
        return;
      }

      const data = docSnap.data() || {};
      const lockedDeviceId = String(data.deviceId || "");
      const lockedEmail = String(data.email || "");

      // ✅ DEVICE MISMATCH → auto logout + bersihkan cache premium
      if (lockedDeviceId && lockedDeviceId !== localDeviceId) {
        handleDeviceMismatch(lockedEmail);
        return;
      }

      const st: PremiumState = {
        isPremium: !!data.isPremium,
        activeUntil: data.activeUntil ? Number(data.activeUntil) : 0,
        deviceMismatch: false,
        lockedEmail: undefined,
      };

      savePremiumState(st);
      onNext(st);
    },
    (err) => {
      // ✅ Handle error auth/user-token-expired (setelah logout)
      if (err.code === "permission-denied" || err.code === "unauthenticated") {
        // User sudah logout, biarkan state kosong
        onNext(emptyState());
        if (unsubSnapshot) {
          unsubSnapshot();
          unsubSnapshot = null;
        }
        return;
      }
      if (onError) onError(err);
    }
  );

  // ✅ Return cleanup function
  return () => {
    if (unsubSnapshot) {
      unsubSnapshot();
      unsubSnapshot = null;
    }
  };
};