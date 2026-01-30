// src/firebase/joiner.ts
import { db } from "./index";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
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

// ✅ Register joiner
export const registerJoiner = async (uid: string, email: string) => {
  const joinCode = await generateUniqueJoinCode();

  const joinerData = {
    uid,
    email,
    joinCode,
    totalUsed: 0,
    cashbackForm: "",
    createdAt: new Date().toISOString(),
  };

  const joinerRef = doc(db, "joiners", uid);
  await setDoc(joinerRef, joinerData, { merge: false });

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