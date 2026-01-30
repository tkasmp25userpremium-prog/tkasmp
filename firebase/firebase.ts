// firebase.ts (FINAL)
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFdDCkJQIBzsNE4td1bhgnYXApxf9w0nQ",
  authDomain: "tkasmp25-fafed.firebaseapp.com",
  projectId: "tkasmp25-fafed",
  storageBucket: "tkasmp25-fafed.firebasestorage.app",
  messagingSenderId: "159870269390",
  appId: "1:159870269390:web:96919700fd3ef6cadc1d9f",
};

// ✅ anti “Firebase App named '[DEFAULT]' already exists”
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
