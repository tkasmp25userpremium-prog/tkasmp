// components/Join.tsx
import React, { useEffect, useMemo, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { loginGoogle, logoutGoogle } from "../premiumstore";
import { registerJoiner } from "../firebase/joiner";

const JOIN_CODE_KEY = "tka_smp_joiner_code_v1";

// ✅ Kalau form joiner NONAKTIF, biarkan string kosong
const JOINER_FORM_URL = ""; // "https://forms.gle/xxxxx  "

const Join: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");

  const [joinCode, setJoinCode] = useState<string>(() => {
    return localStorage.getItem(JOIN_CODE_KEY) || "";
  });

  // Data joiner
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [recommenderCode, setRecommenderCode] = useState("");

  const whatsappValid = useMemo(() => {
    const clean = whatsapp.replace(/[^0-9]/g, "");
    return /^(08|628)\d{8,12}$/.test(clean);
  }, [whatsapp]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUid("");
        setEmail("");
        setName("");
        setSchool("");
        setWhatsapp("");
        setBankAccount("");
        setRecommenderCode("");
        return;
      }

      setUid(u.uid);
      setEmail((u.email || "").toLowerCase());

      try {
        const joinerData = await registerJoiner(u.uid, u.email || "");

        setJoinCode(joinerData.joinCode);
        localStorage.setItem(JOIN_CODE_KEY, joinerData.joinCode);

        // load data existing kalau ada
        if (joinerData.name) setName(joinerData.name);
        if (joinerData.school) setSchool(joinerData.school);
        if (joinerData.whatsapp) setWhatsapp(joinerData.whatsapp);
        if (joinerData.bankAccount) setBankAccount(joinerData.bankAccount);
        if (joinerData.recommenderCode) setRecommenderCode(joinerData.recommenderCode);

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

  const saveJoinerData = async () => {
    if (!uid) return;
    if (!name.trim() || !school.trim() || !whatsappValid || !bankAccount.trim()) {
      setMsg("❌ Pastikan semua field wajib diisi dengan benar.");
      return;
    }

    try {
      const joinerRef = doc(db, "joiners", uid);
      await updateDoc(joinerRef, {
        name: name.trim(),
        school: school.trim(),
        whatsapp: whatsapp.trim(),
        bankAccount: bankAccount.trim(),
        recommenderCode: recommenderCode.trim(),
        updatedAt: new Date().toISOString(),
      });

      setMsg("✅ Data joiner berhasil disimpan.");
      setTimeout(() => setMsg(""), 2000);
    } catch (e: any) {
      setMsg(`❌ Gagal menyimpan data: ${e?.message || "Coba lagi"}`);
    }
  };

  const copy = async (text: string, okMsg: string) => {
    setMsg("");
    try {
      await navigator.clipboard.writeText(text);
      setMsg(okMsg);
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
      "Website: https://tkasmp-latihan.vercel.app  ",
      "",
      "Catatan: masukkan kode diskon ini di halaman Premium sebelum bayar ya 🙏",
    ].join("\n");
  }, [joinCode]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Program <span className="text-blue-500">Joiner Cashback</span>
        </h1>
        <p className="text-zinc-400 mt-3">
          Login Google untuk mendapatkan <b>Kode Diskon</b>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
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
              Kode Akun: <span className="text-zinc-500">{uid || "-"}</span>
              <br />
              Kode Diskon Joiner:{" "}
              <b className={uid && joinCode ? "text-green-400" : "text-zinc-500"}>
                {uid && joinCode ? joinCode : "-"}
              </b>
            </div>

            {msg && <div className="mt-3 text-sm text-blue-300 whitespace-pre-line">{msg}</div>}
          </div>

          {uid && joinCode && (
            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm font-bold mb-2 text-white">Nama Lengkap *</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lengkap sesuai KTP/rekening"
                  className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="text-sm font-bold mb-2 text-white">Asal Sekolah *</div>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="Contoh: SMPN 111 Jakarta Selatan"
                  className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <div className="text-sm font-bold mb-2 text-white">Nomor WhatsApp Aktif *</div>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="0812-3456-7890"
                  className={`w-full bg-zinc-800 text-white p-3 rounded-lg border ${
                    whatsappValid ? "border-green-500" : "border-zinc-700"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {whatsapp && !whatsappValid && (
                  <div className="mt-1 text-xs text-red-400">❌ Format nomor tidak valid</div>
                )}
              </div>

              <div>
                <div className="text-sm font-bold mb-2 text-white">Rekening / E-wallet *</div>
                <input
                  type="text"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  placeholder="Contoh: BCA 1234567890 atas nama Budi Santoso"
                  className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mt-2 p-4 bg-purple-900/20 border border-purple-800 rounded-lg">
                <div className="text-lg font-bold text-purple-300 mb-3">🎯 Cashback Antar Sekolah (Opsional)</div>
                <p className="text-sm text-purple-200 mb-4">
                  Isi jika kamu direkomendasikan joiner sekolah lain.
                </p>

                <div>
                  <div className="text-sm font-bold mb-2 text-white">Kode Joiner yang Merekomendasikan</div>
                  <input
                    type="text"
                    value={recommenderCode}
                    onChange={(e) => setRecommenderCode(e.target.value)}
                    placeholder="TKA-XXXXXX"
                    className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <button
                onClick={saveJoinerData}
                disabled={!name.trim() || !school.trim() || !whatsappValid || !bankAccount.trim()}
                className="w-full rounded-xl bg-green-500 text-black font-black py-3 hover:opacity-90 disabled:opacity-50"
              >
                Simpan Data Joiner
              </button>

              <div className="mt-4 grid gap-3">
                <button
                  onClick={() => copy(joinCode, "✅ Kode Diskon berhasil dicopy.")}
                  className="w-full rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90"
                >
                  Copy Kode Diskon
                </button>

                <button
                  onClick={() => copy(shareText, "✅ Teks promo berhasil dicopy.")}
                  className="w-full rounded-xl bg-zinc-800 text-white font-black py-3 hover:bg-zinc-700"
                >
                  Copy Teks Promo (siap kirim)
                </button>

                {/* ✅ FORM JOINER hanya tampil kalau URL ada */}
                {JOINER_FORM_URL ? (
                  <a
                    href={JOINER_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center rounded-xl bg-white text-black font-black py-3 hover:opacity-90"
                  >
                    Isi Form Joiner Cashback
                  </a>
                ) : (
                  <div className="text-xs text-zinc-500">
                    Form Joiner sedang dinonaktifkan oleh admin.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="text-lg font-bold mb-4">Cara Pakai (Singkat)</div>
          <ol className="text-sm text-zinc-300 space-y-2 list-decimal list-inside">
            <li>Login Google untuk ambil <b>Kode Diskon</b>.</li>
            <li>Isi <b>data joiner</b> (nama, sekolah, WA, rekening).</li>
            <li>Klik <b>Simpan Data Joiner</b>.</li>
            <li>Bagikan kode diskon ke calon pembeli premium.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Join;