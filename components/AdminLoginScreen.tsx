import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

type Props = {
  message?: string;
};

const AdminLoginScreen: React.FC<Props> = ({ message }) => {
  const [error, setError] = useState<string>("");

  const loginGoogle = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // auth state akan ditangani App.tsx
    } catch (e: any) {
      setError(e?.message || "Login gagal");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 text-center">
        <h1 className="text-2xl font-black mb-2">Admin Area</h1>
        <p className="text-zinc-400 text-sm mb-6">
          Halaman ini hanya untuk administrator.
        </p>

        {message && (
          <div className="mb-3 text-sm text-zinc-400">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-3 text-sm text-red-400 font-semibold">
            {error}
          </div>
        )}

        <button
          onClick={loginGoogle}
          className="w-full rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90"
        >
          Login Google (Admin)
        </button>
      </div>
    </div>
  );
};

export default AdminLoginScreen;
