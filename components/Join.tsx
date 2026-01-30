import React, { useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { loginGoogle, logoutGoogle } from "./premiumstore";

// ✅ Import fungsi registerJoiner dari firebase/joiner.ts
import { registerJoiner } from "../firebase/joiner";

const JOIN_CODE_KEY = "tka_smp_joiner_code_v1";

// ✅ Link Google Form Joiner (REAL)
const JOINER_FORM_URL = "https://forms.gle/qYyT45zT6W8HqvtE7";

const Join: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");

  const [joinCode, setJoinCode] = useState<string>(() => {
    return localStorage.getItem(JOIN_CODE_KEY) || "";
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUid("");
        setEmail("");
        return;
      }
      
      setUid(u.uid);
      setEmail((u.email || "").toLowerCase());

      try {
        // ✅ Register ke Firestore
        const joinerData = await registerJoiner(u.uid, u.email || "");
        
        // Update state & localStorage
        setJoinCode(joinerData.joinCode);
        localStorage.setItem(JOIN_CODE_KEY, joinerData.joinCode);
        
        setMsg("✅ Kode Diskon Joiner berhasil dibuat dan disimpan ke database.");
      } catch (e: any) {
        console.error("Error registering joiner:", e);
        setMsg(`❌ Error: ${e?.message || "Gagal membuat kode. Coba lagi."}`);
      }
    });

    return () => unsub();
  }, []);

  const doLogin = async () => {
    setMsg("");
    setLoading(true);
    try {
      await loginGoogle();
    } catch (e: any) {
      setMsg(`❌ Login gagal: ${e?.message || String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  const doLogout = async () => {
    setMsg("");
    setLoading(true);
    try {
      await logoutGoogle();
      setMsg("✅ Logout berhasil.");
    } catch (e: any) {
      setMsg(`❌ Logout gagal: ${e?.message || String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  const copyCode = async () => {
    setMsg("");
    try {
      await navigator.clipboard.writeText(joinCode);
      setMsg("✅ Kode Diskon berhasil dicopy.");
    } catch {
      setMsg("❌ Gagal copy. Coba blok lalu copy manual.");
    }
  };

  const shareText = useMemo(() => {
    if (!joinCode) return "";
    return [
      "Aku rekomendasiin web latihan TKA SMP 👍",
      "Coba dulu yang gratis. Kalau mau Premium bisa pakai kode diskon ini:",
      "",
      `Kode Diskon: ${joinCode}`,
      "",
      "Website: https://tkasmp.netlify.app",
      "",
      "Catatan: masukkan kode diskon ini di halaman Premium sebelum bayar ya 🙏",
    ].join("\n");
  }, [joinCode]);

  const copyShareText = async () => {
    setMsg("");
    try {
      await navigator.clipboard.writeText(shareText);
      setMsg("✅ Teks promo berhasil dicopy.");
    } catch {
      setMsg("❌ Gagal copy teks promo.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight">
          Program <span className="text-blue-500">Joiner Cashback</span>
        </h1>
        <p className="text-zinc-400 mt-3">
          Login Google untuk mendapatkan <b>Kode Diskon</b>. Kode ini dipakai pembeli Premium supaya dapat diskon.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Kartu Login */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="text-lg font-bold mb-4">Login Joiner</div>

          <div className="flex gap-3">
            {!uid ? (
              <button
                onClick={doLogin}
                disabled={loading}
                className="flex-1 rounded-xl bg-white text-black font-black py-3 hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Login Google"}
              </button>
            ) : (
              <button
                onClick={doLogout}
                disabled={loading}
                className="flex-1 rounded-xl bg-zinc-800 text-white font-black py-3 hover:bg-zinc-700 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Logout"}
              </button>
            )}
          </div>

          <div className="mt-5 rounded-2xl bg-black/30 border border-zinc-800 p-4">
            <div className="text-sm font-bold mb-1">Status Joiner</div>
            <div className="text-sm text-zinc-300">
              Email: <b>{email || "-"}</b>
              <br />
              Kode Akun: <span className="text-zinc-500">{uid ? uid : "-"}</span>
              <br />
              Kode Diskon Joiner:{" "}
              <b className={uid && joinCode ? "text-green-400" : "text-zinc-500"}>
                {uid && joinCode ? joinCode : "-"}
              </b>
            </div>

            {msg && <div className="mt-3 text-sm text-blue-300 whitespace-pre-line">{msg}</div>}
          </div>

          {/* ✅ CTA setelah login */}
          {uid && joinCode && (
            <div className="mt-4 grid gap-3">
              <button
                onClick={copyCode}
                className="w-full rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90"
              >
                Copy Kode Diskon
              </button>

              <button
                onClick={copyShareText}
                className="w-full rounded-xl bg-zinc-800 text-white font-black py-3 hover:bg-zinc-700"
              >
                Copy Teks Promo (siap kirim)
              </button>

              {/* ✅ FIX: Ganti </button> jadi </a> */}
              <a
                href={JOINER_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center rounded-xl bg-white text-black font-black py-3 hover:opacity-90"
              >
                Isi Form Joiner Cashback
              </a>

              <div className="text-xs text-zinc-500">
                📌 <b>Wajib:</b> Screenshot halaman ini (yang ada <b>Kode Diskon</b>). Kode Diskon ini yang akan dipakai user Premium untuk dapat diskon.
              </div>
            </div>
          )}
        </div>

        {/* Kartu Cara Pakai */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="text-lg font-bold mb-4">Cara Pakai (Simple)</div>
          <ol className="text-sm text-zinc-300 space-y-2 list-decimal list-inside">
            <li>Login Google untuk ambil <b>Kode Diskon</b>.</li>
            <li>Screenshot halaman ini (ada kode diskon).</li>
            <li>Isi <b>Form Joiner Cashback</b>.</li>
            <li>Bagikan kode diskon ke calon pembeli.</li>
            <li>Pembeli masukkan kode itu di halaman Premium.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Join;