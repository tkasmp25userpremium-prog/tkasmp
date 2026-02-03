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

const makeJoinCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "TKA-";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
};

const isCodeExists = async (code: string): Promise<boolean> => {
  const q = query(collection(db, "joiners"), where("joinCode", "==", code), limit(1));
  const snap = await getDocs(q);
  return !snap.empty;
};

const generateUniqueJoinCode = async (): Promise<string> => {
  let code = "";
  for (let i = 0; i < 12; i++) {
    code = makeJoinCode();
    const exists = await isCodeExists(code);
    if (!exists) return code;
  }
  throw new Error("Gagal generate kode unik");
};

export const registerJoiner = async (uid: string, email: string) => {
  const joinerRef = doc(db, "joiners", uid);
  const joinerSnap = await getDoc(joinerRef);

  if (joinerSnap.exists()) {
    const data: any = joinerSnap.data();
    return {
      uid,
      email: data?.email || email,
      joinCode: data?.joinCode || "",
      totalUsed: data?.totalUsed || 0,
      cashbackForm: data?.cashbackForm || "",
      createdAt: data?.createdAt || new Date().toISOString(),
      name: data?.name || "",
      school: data?.school || "",
      whatsapp: data?.whatsapp || "",
      bankAccount: data?.bankAccount || "",
      recommenderCode: data?.recommenderCode || "",
    };
  }

  const joinCode = await generateUniqueJoinCode();

  const joinerData: any = {
    uid,
    email,
    joinCode,
    totalUsed: 0,
    cashbackForm: "",
    createdAt: new Date().toISOString(),
    name: "",
    school: "",
    whatsapp: "",
    bankAccount: "",
    recommenderCode: "",
  };

  await setDoc(joinerRef, joinerData);
  return joinerData;
};

export const validateJoinCode = async (
  code: string
): Promise<{ isValid: boolean; joinCode?: string; message?: string }> => {
  const upperCode = code.trim().toUpperCase();

  if (!/^TKA-[A-Z0-9]{6}$/.test(upperCode)) {
    return {
      isValid: false,
      message: "Format kode tidak valid. Gunakan format: TKA-XXXXXX (contoh: TKA-ABC123)",
    };
  }

  const q = query(collection(db, "joiners"), where("joinCode", "==", upperCode), limit(1));
  const snap = await getDocs(q);

  if (snap.empty) {
    return { isValid: false, message: "Kode diskon tidak ditemukan." };
  }

  return { isValid: true, joinCode: upperCode, message: "Kode diskon valid!" };
};
