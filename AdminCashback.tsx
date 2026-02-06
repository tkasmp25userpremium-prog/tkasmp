// AdminCashback.tsx (FINAL - With Admin WA Note)
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { auth, onAuthStateChanged } from "./firebase";

const AdminCashback: React.FC = () => {
  const [joinCode, setJoinCode] = useState("");
  const [allJoiners, setAllJoiners] = useState<any[]>([]);
  const [result, setResult] = useState<{
    totalUsers: number;
    premiumActive: number;
    premiumInactive: number;
    joinerData: any;
    joinerDocId: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [waMessage, setWaMessage] = useState("");
  
  // ✅ State untuk SOP
  const [activeTab, setActiveTab] = useState<"cashback" | "sop">("cashback");

  // ✅ Cek apakah user adalah admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === "tkasmp25.monitoringpremium@gmail.com") {
        setIsAdmin(true);
        loadAllJoiners();
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ Load semua joiner
  const loadAllJoiners = async () => {
    try {
      const q = query(collection(db, "joiners"));
      const snapshot = await getDocs(q);
      const joiners = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAllJoiners(joiners);
    } catch (error) {
      console.error("Error loading joiners:", error);
    }
  };

  const hitungCashback = async () => {
    if (!joinCode.trim()) {
      setMessage("❌ Masukkan kode joiner!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Query user yang pakai kode joiner
      const usersQuery = query(
        collection(db, "users"),
        where("joinCode", "==", joinCode.trim())
      );
      const usersSnapshot = await getDocs(usersQuery);
      const totalUsers = usersSnapshot.size;

      // Filter user yang premium aktif
      const premiumActive = usersSnapshot.docs.filter(doc => {
        const data = doc.data();
        return data.isPremium === true && (data.activeUntil || 0) > Date.now();
      }).length;

      // Cari data joiner (termasuk rekening) - ambil dokumen pertama
      const joinersQuery = query(
        collection(db, "joiners"),
        where("joinCode", "==", joinCode.trim())
      );
      const joinersSnapshot = await getDocs(joinersQuery);
      const joinerDoc = joinersSnapshot.docs[0]; // Ambil dokumen pertama
      const joinerData = joinerDoc ? { id: joinerDoc.id, ...joinerDoc.data() } : {};

      setResult({
        totalUsers,
        premiumActive,
        premiumInactive: totalUsers - premiumActive,
        joinerData,
        joinerDocId: joinerDoc?.id || ""
      });

      setMessage(`✅ Ditemukan ${totalUsers} user dengan kode ${joinCode}`);
      
      // Generate pesan WA
      generateWaMessage(joinerData, premiumActive);
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : "Gagal menghitung"}`);
    } finally {
      setLoading(false);
    }
  };

  const generateWaMessage = (joinerData: any, premiumActive: number) => {
    const nama = joinerData?.name || joinerData?.email?.split('@')[0] || "Joiner";
    const kode = joinerData?.joinCode || joinCode;
    const totalCashback = premiumActive * 10000;
    
    const message = `Halo ${nama} 👋\n\nCashback kamu sudah siap! 💰\n\n📊 Rincian:\n• Kode Joiner: ${kode}\n• User Premium Aktif: ${premiumActive} orang\n• Cashback Per User: Rp10.000\n• Total Cashback: Rp${totalCashback.toLocaleString('id-ID')}\n\n💰 Total yang akan dibayarkan: Rp${totalCashback.toLocaleString('id-ID')}\n\nSilakan konfirmasi nomor rekening/e-wallet ya!\nTerima kasih sudah menjadi joiner TKA SMP! 🙏`;
    
    setWaMessage(message);
  };

  // ✅ Update totalUsed - FIXED VERSION
  const updateTotalUsed = async () => {
    if (!result || !result.joinerDocId) {
      setMessage("❌ Tidak ada data joiner untuk diupdate.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const joinerRef = doc(db, "joiners", result.joinerDocId);
      await updateDoc(joinerRef, {
        totalUsed: result.premiumActive,
      });

      setMessage(`✅ totalUsed berhasil diupdate menjadi ${result.premiumActive}`);

      // Refresh data joiner
      const updatedJoinerDoc = await getDocs(query(collection(db, "joiners"), where("joinCode", "==", joinCode.trim())));
      if (!updatedJoinerDoc.empty) {
        const updatedData = { id: updatedJoinerDoc.docs[0].id, ...updatedJoinerDoc.docs[0].data() };
        setResult(prev => prev ? {
          ...prev,
          joinerData: updatedData,
          joinerDocId: updatedJoinerDoc.docs[0].id
        } : null);
      }
    } catch (error) {
      console.error("Update error:", error);
      setMessage(`❌ Error: ${error instanceof Error ? error.message : "Gagal update data"}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Reset totalUsed dan update status pembayaran
  const resetTotalUsed = async (joinerId: string, joinerName: string) => {
    setLoading(true);
    setMessage("");

    try {
      const joinerRef = doc(db, "joiners", joinerId);
      await updateDoc(joinerRef, {
        totalUsed: 0,
        paymentStatus: "Sudah Dibayar", // ✅ Status baru
        lastPaymentDate: new Date().toISOString() // ✅ Tanggal pembayaran
      });

      setMessage(`✅ totalUsed ${joinerName} berhasil direset ke 0. Status: Sudah Dibayar.`);
      loadAllJoiners(); // Refresh tabel
    } catch (error) {
      console.error("Reset error:", error);
      setMessage(`❌ Gagal reset  ${(error as Error).message || "Terjadi kesalahan"}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Kirim WA Otomatis
  const sendWaAutomatically = (phoneNumber: string, message: string) => {
    if (!phoneNumber) {
      setMessage("❌ Nomor WhatsApp tidak ditemukan untuk joiner ini.");
      return;
    }

    // Bersihkan nomor HP
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
    if (!cleanPhone.startsWith("62")) {
      setMessage("❌ Format nomor WA tidak valid. Harus dimulai dengan 62.");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Buka di tab baru
    window.open(waUrl, '_blank');
  };

  const copyWaMessage = async () => {
    if (!waMessage) return;
    try {
      await navigator.clipboard.writeText(waMessage);
      setMessage("✅ Pesan WhatsApp berhasil dicopy!");
      setTimeout(() => setMessage(""), 2000);
    } catch (error) {
      setMessage("❌ Gagal copy pesan WhatsApp");
    }
  };

  // ✅ Render SOP Content
  const renderSOPContent = () => {
    if (activeTab === "cashback") {
      return (
        <div className="space-y-6">
          {/* Input Kode Joiner */}
          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
            <div className="text-lg font-bold mb-4">Cari Kode Joiner</div>
            <div className="flex gap-3">
              <input
                type="text"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                placeholder="TKA-ABC123"
                className="flex-1 bg-zinc-800 text-white p-4 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={hitungCashback}
                disabled={loading}
                className="px-6 py-4 rounded-lg font-black bg-blue-500 text-black hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Loading..." : "Cari"}
              </button>
            </div>
            {message && <div className="mt-4 text-sm text-yellow-300">{message}</div>}
          </div>

          {/* Daftar Semua Kode Joiner */}
          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
            <div className="text-lg font-bold mb-4">Daftar Semua Kode Joiner</div>
            <div className="text-sm text-zinc-400 mb-4">
              ⚠️ <strong>Catatan:</strong> Klik tombol "Reset Total Used" untuk mengatur totalUsed ke 0 dan menandai joiner sudah dibayar.
            </div>
            {/* ✅ CATATAN WA ADMIN DITAMBAHKAN DI SINI */}
            <div className="text-sm text-yellow-400 mb-4 bg-yellow-900/20 p-3 rounded-lg border border-yellow-800">
              ⚠️ <strong>Penting:</strong> Pastikan kamu <b>login ke WA admin (08981091600)</b> di browser sebelum klik tombol <b>"Kirim WA"</b> agar pesan dikirim dari nomor admin.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-zinc-300">
                <thead className="text-xs uppercase bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3">Nama</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Kode Joiner</th>
                    <th className="px-4 py-3">Rekomendasi</th>
                    <th className="px-4 py-3">Sekolah</th>
                    <th className="px-4 py-3">Rekening</th>
                    <th className="px-4 py-3">WA</th>
                    <th className="px-4 py-3">Total Used</th>
                    <th className="px-4 py-3">Status Pembayaran</th>
                    <th className="px-4 py-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {allJoiners.map((joiner, index) => (
                    <tr key={index} className="border-b border-zinc-700 hover:bg-zinc-800">
                      <td className="px-4 py-3">{joiner.name || "-"}</td>
                      <td className="px-4 py-3">{joiner.email}</td>
                      <td className="px-4 py-3 font-mono">{joiner.joinCode || "-"}</td>
                      <td className="px-4 py-3 font-mono">{joiner.recommenderCode || "-"}</td>
                      <td className="px-4 py-3">{joiner.school || "-"}</td>
                      <td className="px-4 py-3">{joiner.bankAccount || "-"}</td>
                      <td className="px-4 py-3">
                        {joiner.whatsapp ? (
                          <button
                            onClick={() => sendWaAutomatically(joiner.whatsapp, `Halo ${joiner.name || 'Joiner'}, terima kasih atas kontribusi Anda sebagai joiner TKA SMP!`)}
                            className="text-green-400 hover:underline"
                          >
                            {joiner.whatsapp}
                          </button>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-4 py-3">{joiner.totalUsed || 0}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          joiner.paymentStatus === "Sudah Dibayar"
                            ? "bg-green-900 text-green-300"
                            : "bg-yellow-900 text-yellow-300"
                        }`}>
                          {joiner.paymentStatus || "Belum Dibayar"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => resetTotalUsed(joiner.id, joiner.name || joiner.email || "Joiner")}
                            disabled={loading}
                            className="text-xs px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
                          >
                            Reset Total Used
                          </button>
                          {joiner.whatsapp && (
                            <button
                              onClick={() => sendWaAutomatically(joiner.whatsapp, `Halo ${joiner.name || 'Joiner'}, terima kasih atas kontribusi Anda sebagai joiner TKA SMP!`)}
                              className="text-xs px-2 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                            >
                              Kirim WA (Admin)
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Hasil Hitung + Data Rekening */}
          {result && (
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
              <div className="text-lg font-bold mb-4">Hasil Hitung & Data Rekening</div>
              
              {/* Data Joiner */}
              <div className="mb-6 p-4 bg-black/30 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📋 Data Joiner</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div><span className="text-zinc-400">Nama:</span> <span className="text-white">{result.joinerData?.name || "-"}</span></div>
                  <div><span className="text-zinc-400">Email:</span> <span className="text-white">{result.joinerData?.email || "-"}</span></div>
                  <div><span className="text-zinc-400">Kode Joiner:</span> <span className="text-white font-mono">{result.joinerData?.joinCode || "-"}</span></div>
                  <div><span className="text-zinc-400">Kode Rekomendasi:</span> <span className="text-white font-mono">{result.joinerData?.recommenderCode || "-"}</span></div>
                  <div><span className="text-zinc-400">Sekolah:</span> <span className="text-white">{result.joinerData?.school || "-"}</span></div>
                  <div><span className="text-zinc-400">WhatsApp:</span> <span className="text-white">{result.joinerData?.whatsapp || "-"}</span></div>
                  <div><span className="text-zinc-400">Rekening/E-wallet:</span> <span className="text-white">{result.joinerData?.bankAccount || "-"}</span></div>
                </div>
              </div>

              {/* Hasil Hitung */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total user pakai kode:</span>
                  <span className="text-white font-bold">{result.totalUsers} orang</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">User premium aktif:</span>
                  <span className="text-green-400 font-bold">{result.premiumActive} orang ✅</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">User belum bayar/tidak aktif:</span>
                  <span className="text-red-400 font-bold">{result.premiumInactive} orang ❌</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Cashback:</span>
                  <span className="text-yellow-400 font-bold">Rp{(result.premiumActive * 10000).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={updateTotalUsed}
                  disabled={loading}
                  className="w-full py-4 rounded-lg font-black bg-green-500 text-black hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Loading..." : `Update totalUsed = ${result.premiumActive}`}
                </button>
                
                <button
                  onClick={copyWaMessage}
                  disabled={!waMessage}
                  className="w-full py-4 rounded-lg font-black bg-blue-500 text-black hover:opacity-90 disabled:opacity-50"
                >
                  Copy Pesan WA
                </button>
              </div>

              {waMessage && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg">
                  <div className="text-sm text-zinc-300 whitespace-pre-line">{waMessage}</div>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // ✅ SOP Content
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-black text-blue-400 mb-4">📋 SOP Admin Cashback</h2>
          <p className="text-zinc-400">Panduan lengkap untuk proses pembayaran cashback</p>
        </div>

        {/* Tabs SOP */}
        <div className="flex gap-4 border-b border-zinc-700 pb-4">
          <button
            onClick={() => setActiveTab("sop")}
            className={`px-4 py-2 rounded-t-lg font-bold ${
              activeTab === "sop" 
                ? "bg-blue-500 text-black" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            SOP Lengkap
          </button>
          <button
            onClick={() => setActiveTab("template")}
            className={`px-4 py-2 rounded-t-lg font-bold ${
              activeTab === "template" 
                ? "bg-purple-500 text-black" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Template Validasi
          </button>
        </div>

        {activeTab === "sop" && (
          <div className="space-y-6">
            {/* Cashback Per User */}
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">💰 Cashback Per User</h3>
              <ol className="text-sm text-zinc-300 space-y-3 list-decimal list-inside">
                <li>
                  <b>Buka Admin Panel:</b> Login di <code className="bg-zinc-800 px-2 py-1 rounded">/admin-cashback</code>
                </li>
                <li>
                  <b>Input Kode Joiner:</b> Masukkan kode joiner (contoh: TKA-ABC123)
                </li>
                <li>
                  <b>Verifikasi Data:</b>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Nama joiner sesuai data</li>
                    <li>Rekening/e-wallet valid</li>
                    <li>User premium aktif ≥1 orang</li>
                  </ul>
                </li>
                <li>
                  <b>Hitung Cashback:</b> Jumlah user × Rp10.000
                </li>
                <li>
                  <b>Proses Pembayaran:</b>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Klik "Update totalUsed"</li>
                    <li>Klik "Copy Pesan WA"</li>
                    <li>Transfer sesuai rekening yang muncul</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Cashback Antar Sekolah */}
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🏫 Cashback Antar Sekolah</h3>
              <div className="text-sm text-zinc-300 space-y-3">
                <div>
                  <b>Syarat Wajib:</b>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Joiner A merekomendasikan ke Sekolah B</li>
                    <li>Minimal 1 joiner dari Sekolah B mendaftar</li>
                    <li>Joiner B isi kode rekomendasi dengan benar</li>
                    <li><b>Sekolah B punya ≥20 user premium AKTIF</b></li>
                  </ul>
                </div>
                
                <div>
                  <b>Langkah Validasi:</b>
                  <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
                    <li>Cari joiner dengan <code className="bg-zinc-800 px-2 py-1 rounded">recommenderCode</code> ≠ kosong</li>
                    <li>Buka Firestore Console → filter user by sekolah</li>
                    <li>Hitung manual user premium aktif dari sekolah tersebut</li>
                    <li>Pastikan jumlah ≥20 sebelum berikan cashback</li>
                  </ol>
                </div>

                <div>
                  <b>Cashback:</b>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li><b>Joiner A</b> (pemberi rekomendasi): Rp100.000</li>
                    <li><b>Joiner B</b> (PIC Sekolah B): Rp100.000</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aturan Penting */}
            <div className="rounded-3xl bg-red-900/20 border border-red-800 p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ Aturan Penting Saat Pembayaran</h3>
              <div className="text-sm text-red-200 space-y-2">
                <div><b>✅ WAJIB Diverifikasi:</b></div>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Rekening aktif & nama sesuai data joiner</li>
                  <li>User benar-benar premium aktif (bukan hanya input kode)</li>
                  <li>Tidak ada duplikasi klaim</li>
                  <li>Pembayaran hanya tanggal 1–5 setiap bulan</li>
                </ul>
                
                <div className="mt-3"><b>❌ JANGAN Bayar Jika:</b></div>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>User belum bayar (hanya input kode diskon)</li>
                  <li>Rekening tidak valid/tidak aktif</li>
                  <li>Ada indikasi manipulasi data</li>
                  <li>Syarat antar sekolah belum terpenuhi</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "template" && (
          <div className="space-y-6">
            {/* Template Cashback Per User */}
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">📝 Template Validasi: Cashback Per User</h3>
              <div className="bg-black/30 p-4 rounded-lg text-sm text-zinc-300 font-mono">
                [ ] Kode joiner: _________<br/>
                [ ] Nama: _________<br/>
                [ ] Rekening: _________<br/>
                [ ] User premium aktif: ___ orang<br/>
                [ ] Total cashback: Rp_________<br/>
                [ ] Sudah transfer? [ ] Ya [ ] Belum
              </div>
            </div>

            {/* Template Cashback Antar Sekolah */}
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📝 Template Validasi: Cashback Antar Sekolah</h3>
              <div className="bg-black/30 p-4 rounded-lg text-sm text-zinc-300 font-mono">
                [ ] Joiner A (pemberi): _________<br/>
                [ ] Joiner B (PIC): _________<br/>
                [ ] Sekolah tujuan: _________<br/>
                [ ] User premium aktif: ___ orang (≥20?)<br/>
                [ ] Cashback Joiner A: Rp100.000 ✓<br/>
                [ ] Cashback Joiner B: Rp100.000 ✓<br/>
                [ ] Sudah transfer keduanya? [ ] Ya [ ] Belum
              </div>
            </div>

            {/* Tips Efisiensi */}
            <div className="rounded-3xl bg-blue-900/20 border border-blue-800 p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">💡 Tips Efisiensi</h3>
              <ul className="text-sm text-blue-200 space-y-2 list-disc list-inside">
                <li>Gunakan fitur "Daftar Semua Kode Joiner" untuk prioritaskan cashback besar</li>
                <li>Buat spreadsheet sederhana untuk track pembayaran bulanan</li>
                <li>Simpan screenshot data joiner sebagai bukti dokumentasi</li>
                <li>Komunikasi jelas dengan joiner via WhatsApp template</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black tracking-tight">
          Admin Cashback Tracker
        </h1>
        <p className="text-zinc-400 mt-3">
          Hitung cashback untuk joiner berdasarkan user premium aktif
        </p>
      </div>

      {!isAdmin ? (
        <div className="rounded-3xl bg-red-900/50 border border-red-800 p-8 text-center">
          <h2 className="text-2xl font-bold text-red-300 mb-4">⚠️ Akses Ditolak</h2>
          <p className="text-red-200">
            Hanya admin yang bisa mengakses halaman ini.
          </p>
          <p className="text-red-100 mt-2">
            Login dengan email: tkasmp25.monitoringpremium@gmail.com
          </p>
        </div>
      ) : (
        <>
          {/* Navbar SOP */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-zinc-800 rounded-full p-1">
              <button
                onClick={() => setActiveTab("cashback")}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeTab === "cashback"
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Hitung Cashback
              </button>
              <button
                onClick={() => setActiveTab("sop")}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeTab === "sop"
                    ? "bg-blue-500 text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                SOP Admin Cashback
              </button>
            </div>
          </div>

          {/* Konten Utama */}
          {renderSOPContent()}
        </>
      )}
    </div>
  );
};

export default AdminCashback;