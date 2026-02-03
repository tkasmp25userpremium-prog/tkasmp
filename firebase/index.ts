// firebase/index.ts (FINAL)
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";  // ✅ Tambahkan onAuthStateChanged
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFdDCkJQIBzsNE4td1bhgnYXApxf9w0nQ",
  authDomain: "tkasmp25-fafed.firebaseapp.com",
  projectId: "tkasmp25-fafed",
  storageBucket: "tkasmp25-fafed.firebasestorage.app",
  messagingSenderId: "159870269390",
  appId: "1:159870269390:web:96919700fd3ef6cadc1d9f",
};

// ✅ ANTI DOUBLE INIT (WAJIB)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ EXPORT FUNGSI YANG DIGUNAKAN DI COMPONENT
export { onAuthStateChanged };  // ✅ Tambahkan ini