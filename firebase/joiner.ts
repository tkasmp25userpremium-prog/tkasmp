import { db } from "./index";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  getDoc,
  limit,
} from "firebase/firestore";

// ✅ Generate kode unik format TKA-XXXXXX
const makeJoinCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "TKA-";
  for (let i = 0; i < 6; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return s;
};

// ✅ Cek apakah kode sudah ada
const isCodeExists = async (code: string): Promise<boolean> => {
  const q = query(collection(db, "joiners"), where("joinCode", "==", code), limit(1));
  const snap = await getDocs(q);
  return !snap.empty;
};

// ✅ Generate kode unik
const generateUniqueJoinCode = async (): Promise<string> => {
  let code;
  let attempts = 0;
  do {
    code = makeJoinCode();
    attempts++;
    if (attempts > 10) throw new Error("Gagal generate kode unik");
  } while (await isCodeExists(code));
  return code;
};

// ✅ FIX: Cek apakah joiner sudah terdaftar & punya kode
export const registerJoiner = async (uid: string, email: string) => {
  const joinerRef = doc(db, "joiners", uid);
  const joinerSnap = await getDoc(joinerRef);

  // ✅ Jika sudah ada → return kode lama (TIDAK GENERATE BARU!)
  if (joinerSnap.exists()) {
    const data = joinerSnap.data();
    return {
      uid,
      email: data?.email || email,
      joinCode: data?.joinCode || "",
      totalUsed: data?.totalUsed || 0, // ✅ Tetap ada field, tapi tidak auto-update
      cashbackForm: data?.cashbackForm || "",
      createdAt: data?.createdAt || new Date().toISOString(),
    };
  }

  // ✅ Jika belum ada → generate kode baru & simpan
  const joinCode = await generateUniqueJoinCode();

  const joinerData = {
    uid,
    email,
    joinCode,
    totalUsed: 0, // ✅ Selalu 0 (tidak auto-increment)
    cashbackForm: "",
    createdAt: new Date().toISOString(),
  };

  await setDoc(joinerRef, joinerData);

  return joinerData;
};

// ✅ Validasi kode diskon — diperbaiki regex & logika
export const validateJoinCode = async (code: string): Promise<{
  isValid: boolean;
  joinCode?: string;
  message?: string;
}> => {
  const upperCode = code.trim().toUpperCase();

  // ✅ Regex valid: TKA-XXXXXX (6 karakter alfanumerik)
  if (!/^TKA-[A-Z0-9]{6}$/.test(upperCode)) {
    return {
      isValid: false,
      message: "Format kode tidak valid. Gunakan format: TKA-XXXXXX (contoh: TKA-ABC123)",
    };
  }

  const q = query(collection(db, "joiners"), where("joinCode", "==", upperCode), limit(1));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return {
      isValid: false,
      message: "Kode diskon tidak ditemukan.",
    };
  }

  return {
    isValid: true,
    joinCode: upperCode,
    message: "Kode diskon valid!",
  };
};

// ❌ FUNGSI INI DIHAPUS (tracking cashback manual dari admin)
// export const incrementJoinCodeUsage = async (joinCode: string): Promise<void> => {
//   ... (dihapus)
// };