import React, { useEffect, useMemo, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { loginGoogle, logoutGoogle } from "./premiumstore";
import { registerJoiner } from "../firebase/joiner";

const JOIN_CODE_KEY = "tka_smp_joiner_code_v1";
// const JOINER_FORM_URL = "https://forms.gle/qYyT45zT6W8HqvtE7";

const Join: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");

  const [joinCode, setJoinCode] = useState<string>(() => {
    return localStorage.getItem(JOIN_CODE_KEY) || "";
  });

  // ✅ State untuk data joiner
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [recommenderCode, setRecommenderCode] = useState("");

  // ✅ Validasi WhatsApp
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
        // ✅ Register ke Firestore
        const joinerData = await registerJoiner(u.uid, u.email || "");
        
        // Update state & localStorage
        setJoinCode(joinerData.joinCode);
        localStorage.setItem(JOIN_CODE_KEY, joinerData.joinCode);
        
        // ✅ Load data yang sudah tersimpan
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

  // ✅ Simpan data joiner ke Firestore
  const saveJoinerData = async () => {
    if (!uid) return;
    if (!name.trim() || !school.trim() || !whatsappValid || !bankAccount.trim()) {
      setMsg("❌ Pastikan semua field wajib diisi dengan benar.");
      return;
    }

    try {
      const userRef = doc(db, "joiners", uid);
      await updateDoc(userRef, {
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
      "Website: https://tkasmp-latihan.vercel.app",
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
      {/* ✅ Informasi Program Joiner */}
      <div className="mb-8 p-6 bg-blue-900/10 border border-blue-800 rounded-3xl">
        <h2 className="text-2xl font-black text-blue-300 mb-4">🎁 Program Joiner (Cashback) — TKA SMP</h2>
        
        <div className="space-y-4 text-sm text-zinc-300">
          <div>
            <div className="font-bold text-white mb-2">🔹 A. Cashback per User</div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><b>Rp10.000</b> untuk setiap <b>1 user premium yang AKTIF</b></li>
              <li>User premium <b>wajib mengisi Kode Joiner / Kode Diskon</b> saat pembayaran dan Form Konfirmasi</li>
              <li>User premium dianggap <b>AKTIF</b> setelah:
                <ul className="list-none mt-1 space-y-1">
                  <li>• Pembayaran tervalidasi</li>
                  <li>• Premium diaktifkan oleh admin</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white mb-2">🔹 B. Cashback Antar Sekolah</div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><b>Cashback Rp100.000</b> diberikan PER SEKOLAH dengan ketentuan:</li>
              <li>• Joiner merekomendasikan TKA SMP ke sekolah lain</li>
              <li>• Minimal <b>1 orang dari sekolah tersebut mendaftar sebagai joiner</b></li>
              <li>• Joiner dari sekolah tersebut <b>mengisi Kode Joiner Rekomendasi dengan benar</b></li>
              <li>• Dari sekolah tersebut terdapat <b>minimal 20 user premium AKTIF</b></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white mb-2">📌 Ketentuan Penting</div>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cashback antar sekolah diberikan kepada <b>JOINER PERTAMA</b> yang tervalidasi sebagai <b>PIC (penghubung) sekolah</b></li>
              <li>Jika terdapat lebih dari satu joiner dari sekolah yang sama, cashback antar sekolah <b>hanya diberikan kepada joiner pertama</b></li>
              <li>Joiner lainnya tetap mendapatkan cashback per user premium aktif</li>
            </ul>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-800 p-3 rounded-lg">
            <div className="font-bold text-yellow-300 mb-1">✅ Informasi Pencairan Cashback</div>
            <ul className="list-disc list-inside space-y-1 ml-4 text-yellow-200 text-xs">
              <li>Cashback dihitung per user</li>
              <li>Cashback dihitung per sekolah</li>
              <li>Cashback dibayarkan <b>tanggal 1–3 setiap bulan</b> (untuk transaksi bulan sebelumnya)</li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-800 p-3 rounded-lg">
            <div className="font-bold text-red-300 mb-1">⚠️ Catatan Penting</div>
            <ul className="list-disc list-inside space-y-1 ml-4 text-red-200 text-xs">
              <li>Cashback diberikan berdasarkan <b>Kode Joiner / Kode Diskon</b> yang diinput user di Google Form pembayaran</li>
              <li>Keputusan validasi cashback sepenuhnya dilakukan oleh <b>admin TKA SMP</b></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Program <span className="text-blue-500">Joiner Cashback</span>
        </h1>
        <p className="text-zinc-400 mt-3">
          Login Google untuk mendapatkan <b>Kode Diskon</b>. Kode ini dipakai pembeli Premium supaya dapat diskon.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Kartu Login & Data */}
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

          {/* ✅ Form Data Joiner */}
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

              {/* ✅ Bagian Cashback Antar Sekolah */}
              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-800 rounded-lg">
                <div className="text-lg font-bold text-purple-300 mb-3">🎯 Cashback Antar Sekolah (Opsional)</div>
                <p className="text-sm text-purple-200 mb-4">
                  Isi form ini jika kamu <b>direkomendasikan oleh joiner dari sekolah lain</b>.
                  Ini akan membantu admin menentukan PIC sekolah dan menghitung cashback antar sekolah.
                </p>
                
                <div>
                  <div className="text-sm font-bold mb-2 text-white">Kode Joiner yang Merekomendasikan *</div>
                  <input
                    type="text"
                    value={recommenderCode}
                    onChange={(e) => setRecommenderCode(e.target.value)}
                    placeholder="TKA-XXXXXX (kode joiner dari sekolah asal)"
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
            </div>
          )}

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
            <li>Baca <b>Program Joiner</b> di atas untuk memahami skema cashback.</li>
            <li>Isi <b>Data Joiner</b> (nama, sekolah, WA, rekening).</li>
            <li><b>(Opsional)</b> Jika direkomendasikan sekolah lain, isi bagian <b>"Cashback Antar Sekolah"</b>.</li>
            <li>Klik <b>Simpan Data Joiner</b>.</li>
            <li>Screenshot halaman ini (ada kode diskon).</li>
            <li>Bagikan kode diskon ke calon pembeli.</li>
            <li>Pembeli masukkan kode itu di halaman Premium.</li>
          </ol>
          
          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
            <div className="text-sm font-bold text-blue-300 mb-2">💡 Catatan Penting</div>
            <ul className="text-xs text-blue-200 space-y-1">
              <li>• Kode Joiner <b>otomatis</b> — tidak perlu diketik ulang</li>
              <li>• Data rekening akan muncul di <b>Admin Panel Cashback</b></li>
              <li>• Cashback antar sekolah: <b>Rp100.000</b> untuk joiner pemberi & penerima rekomendasi</li>
              <li>• Syarat antar sekolah: <b>minimal 20 user premium aktif</b> dari sekolah tujuan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;