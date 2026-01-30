// src/components/premiumstore.ts
import { auth } from "../firebase";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { signOut } from "firebase/auth";

// === STATE PREMIUM ===
export type PremiumState = {
  isPremium: boolean;
  activeUntil: number; // timestamp
};

const emptyState = (): PremiumState => ({
  isPremium: false,
  activeUntil: 0,
});

// === DEVICE ID (anti sharing) ===
const DEVICE_ID_KEY = "tka_smp_device_id_v1";

const getOrCreateDeviceId = (): string => {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
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
  // Hapus session lokal
  localStorage.removeItem("tka_smp_current_user");
  localStorage.removeItem("tka_smp_premium_state_v1");
  
  // Logout Firebase
  return signOut(auth);
};

// === LOAD STATE DARI LOCAL STORAGE ===
export const loadPremiumState = (): PremiumState => {
  const saved = localStorage.getItem("tka_smp_premium_state_v1");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed.isPremium === "boolean" && typeof parsed.activeUntil === "number") {
        return parsed;
      }
    } catch {}
  }
  return emptyState();
};

// === SIMPAN STATE KE LOCAL STORAGE ===
const savePremiumState = (st: PremiumState) => {
  localStorage.setItem("tka_smp_premium_state_v1", JSON.stringify(st));
};

// === REFRESH STATE DARI FIRESTORE ===
export const refreshMyPremiumState = async (): Promise<PremiumState> => {
  const u = auth.currentUser;
  if (!u) return emptyState();

  const ref = doc(db, "users", u.uid);
  const snap = await getDoc(ref);
  
  if (!snap.exists()) return emptyState();

  const data = snap.data();
  const st: PremiumState = {
    isPremium: !!data.isPremium,
    activeUntil: data.activeUntil ? Number(data.activeUntil) : 0,
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
    return () => {}; // ← TIDAK subscribe jika belum login
  }

  const deviceId = getOrCreateDeviceId();
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

      // Jika device ID di Firestore ≠ device lokal → auto logout
      if (lockedDeviceId && lockedDeviceId !== deviceId) {
        signOut(auth).catch(() => {});
        onNext(emptyState());
        return;
      }

      const st: PremiumState = {
        isPremium: !!data.isPremium,
        activeUntil: data.activeUntil ? Number(data.activeUntil) : 0,
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