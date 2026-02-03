// components/Join.tsx (FINAL)
import React, { useEffect, useMemo, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { loginGoogle, logoutGoogle } from "./premiumstore";
import { registerJoiner } from "../firebase/joiner";

const JOIN_CODE_KEY = "tka_smp_joiner_code_v1";

// ✅ Kalau form joiner NONAKTIF, biarkan string kosong
const JOINER_FORM_URL = ""; // "https://forms.gle/xxxxx"

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

  // ✅ State untuk menampilkan penjelasan
  const [showExplanation, setShowExplanation] = useState(false);

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
        recommenderCode: recommenderCode.trim(), // ✅ SUDAH DITAMBAHKAN
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
      "Website: https://tkasmp-latihan.vercel.app",
      "",
      "Catatan: masukkan kode diskon ini di halaman Premium sebelum bayar ya 🙏",
    ].join("\n");
  }, [joinCode]);

  // ✅ Render Penjelasan Program
  const renderExplanation = () => (
    <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-blue-400">🎁 Program Joiner (Cashback) — TKA SMP</h2>
        <p className="text-zinc-400 mt-2">Skema Cashback Joiner TKA SMP</p>
      </div>

      <div className="space-y-6 text-sm text-zinc-300">
        <div>
          <h3 className="text-lg font-bold text-green-400 mb-3">🔹 A. Cashback per User</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Rp10.000 untuk setiap 1 user premium AKTIF</li>
            <li>User premium WAJIB mengisi Kode Joiner / Kode Diskon Joiner pada saat pembayaran dan Form Konfirmasi Pembayaran</li>
            <li>User premium dinyatakan AKTIF setelah:
              <ul className="list-circle list-inside mt-1 ml-4">
                <li>Pembayaran tervalidasi</li>
                <li>Premium diaktifkan oleh admin TKA SMP</li>
              </ul>
            </li>
            <li>Cashback dihitung berdasarkan data validasi internal admin TKA SMP</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-3">🔹 B. Cashback Antar Sekolah (Khusus rekomendasi lintas sekolah)</h3>
          <p className="mb-3">Cashback antar sekolah diberikan apabila terjadi rekomendasi dari satu sekolah ke sekolah lain dengan ketentuan:</p>
          
          <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-purple-300 mb-2">✅ Syarat Umum</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Joiner dari Sekolah A merekomendasikan TKA SMP ke Sekolah B</li>
              <li>Dari Sekolah B terdapat minimal 1 orang mendaftar sebagai joiner</li>
              <li>Joiner Sekolah B menggunakan Kode Joiner Sekolah A saat pendaftaran</li>
              <li>Sekolah B menghasilkan minimal 20 user premium AKTIF</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-purple-300 mb-2">🔹 B1. Penerima Cashback Antar Sekolah (2 Orang)</h4>
            
            <div className="ml-4 space-y-3">
              <div className="bg-purple-900/10 border border-purple-700 rounded-lg p-3">
                <h5 className="font-bold text-purple-200">🎯 Orang ke-1 — JOINER SEKOLAH A (Pemberi Rekomendasi)</h5>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Cashback antar sekolah diberikan kepada JOINER dari SEKOLAH ASAL (Sekolah A) yang kodenya digunakan oleh minimal 1 joiner dari Sekolah B</li>
                  <li>Sekolah B menghasilkan minimal 20 user premium AKTIF</li>
                  <li>Besaran cashback: Rp100.000</li>
                </ul>
              </div>

              <div className="bg-purple-900/10 border border-purple-700 rounded-lg p-3">
                <h5 className="font-bold text-purple-200">🎯 Orang ke-2 — JOINER SEKOLAH B (PIC Sekolah)</h5>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Cashback antar sekolah juga diberikan kepada JOINER dari SEKOLAH YANG DIREKOMENDASIKAN (Sekolah B) yang mendaftar Program Joiner menggunakan Kode Joiner Sekolah A</li>
                  <li>Sekolah B menghasilkan minimal 20 user premium AKTIF</li>
                  <li>Joiner ini ditetapkan sebagai PIC Sekolah B</li>
                  <li>Besaran cashback: Rp100.000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4">
            <h4 className="font-bold text-purple-300 mb-2">📌 Ketentuan Tambahan</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cashback antar sekolah diberikan setelah Sekolah B menghasilkan minimal 20 user premium AKTIF</li>
              <li>Jika terdapat lebih dari satu joiner dari sekolah yang sama:
                <ul className="list-circle list-inside mt-1 ml-4">
                  <li>Penetapan PIC Sekolah</li>
                  <li>Penentuan penerima cashback antar sekolah sepenuhnya ditentukan oleh admin TKA SMP berdasarkan data tervalidasi (kode joiner yang pertama kali terdaftar di sekolah B)</li>
                  <li>Joiner lainnya tetap mendapatkan cashback per user premium aktif sesuai ketentuan</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
          <h3 className="text-lg font-bold text-blue-400 mb-3">✅ Informasi Pencairan Cashback</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Cashback dihitung per user</li>
            <li>Cashback dihitung per sekolah</li>
            <li>Cashback dihitung per tanggal 1–5 setiap bulan</li>
            <li>Cashback dibayarkan tanggal 1–5 setiap bulan (untuk transaksi bulan sebelumnya)</li>
          </ul>
        </div>

        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-400 mb-3">⚠️ Catatan Penting</h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Cashback diberikan berdasarkan Kode Joiner / Kode Diskon Joiner yang diinput pada Google Form Konfirmasi Pembayaran</li>
            <li>Data cashback yang digunakan adalah data internal admin TKA SMP, bukan hanya berdasarkan isian form</li>
            <li>Keputusan validasi cashback sepenuhnya dilakukan oleh admin TKA SMP</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">❓ FAQ & Contoh Kasus</h3>
          <div className="space-y-4">
            <div className="bg-yellow-900/10 border border-yellow-700 rounded-lg p-3">
              <h4 className="font-bold text-yellow-300">📌 Contoh Kasus 1 (REKOMENDASI ANTAR SEKOLAH)</h4>
              <p className="mt-2">Sekolah A → Sekolah B</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Joiner A (Sekolah A) punya kode: TKA-A111</li>
                <li>Joiner A merekomendasikan TKA SMP ke Sekolah B</li>
                <li>Joiner B (Sekolah B) mendaftar joiner dan mengisi kode: TKA-A111</li>
                <li>Sekolah B menghasilkan 20 user premium AKTIF</li>
              </ul>
              <p className="mt-3 font-bold text-green-400">➡️ Hasil:</p>
              <ul className="list-disc list-inside mt-1 space-y-1 ml-4">
                <li>Joiner A → Rp100.000 cashback antar sekolah</li>
                <li>Joiner B (PIC Sekolah B) → Rp100.000 cashback antar sekolah</li>
              </ul>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-700 rounded-lg p-3">
              <h4 className="font-bold text-yellow-300">❓ Kalau Sekolah B tidak mencapai 20 user premium?</h4>
              <p className="font-bold text-red-400">➡️ Cashback antar sekolah TIDAK dibayarkan ➡️ Cashback per user tetap berjalan</p>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-700 rounded-lg p-3">
              <h4 className="font-bold text-yellow-300">❓ Kalau ada 2 joiner dari Sekolah A merekomendasikan Sekolah B?</h4>
              <p className="font-bold text-blue-400">➡️ Joiner Sekolah A penerima cashback ditentukan oleh admin berdasarkan kode joiner yang pertama kali ditulis</p>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-700 rounded-lg p-3">
              <h4 className="font-bold text-yellow-300">❓ Kalau ada 2 joiner dari Sekolah B yang di rekomendasikan Sekolah A?</h4>
              <p className="font-bold text-blue-400">➡️ PIC Sekolah B ditentukan oleh admin berdasarkan kode joiner yang pertama kali ditulis</p>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-700 rounded-lg p-3">
              <h4 className="font-bold text-yellow-300">❓ Apakah user premium menentukan PIC?</h4>
              <p className="font-bold text-blue-400">➡️ TIDAK, PIC ditentukan dari data joiner, bukan user premium</p>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-700 rounded-lg p-3">
              <h4 className="font-bold text-yellow-300">❓ Apakah joiner lain tetap dapat cashback?</h4>
              <p className="font-bold text-green-400">➡️ YA, Cashback per user premium tetap berjalan normal</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-300 mb-3">🔒 Penentuan PIC dan penerima cashback antar sekolah sepenuhnya ditentukan oleh admin TKA SMP berdasarkan data tervalidasi (kode joiner yang pertama kali ditulis)</h3>
          <p className="font-bold text-red-400">🔒 TKA SMP berhak menunda atau membatalkan cashback apabila ditemukan indikasi manipulasi data, duplikasi kode, atau aktivitas tidak wajar.</p>
          <p className="font-bold text-green-400">🔒 Dengan mengisi formulir ini, joiner dianggap telah membaca dan menyetujui seluruh ketentuan Program Joiner (Cashback) TKA SMP.</p>
        </div>
      </div>
    </div>
  );

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

      {/* ✅ Navbar untuk penjelasan program */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="px-6 py-3 rounded-xl font-black bg-blue-500 text-black hover:opacity-90"
        >
          {showExplanation ? "Tutup Penjelasan" : "Lihat Penjelasan Program"}
        </button>
      </div>

      {/* ✅ Tampilkan penjelasan jika showExplanation true */}
      {showExplanation && renderExplanation()}

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
                ) : null} {/* ✅ TELAH DIHAPUS: teks "dinonaktifkan oleh admin" */}
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