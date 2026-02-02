// AdminCashback.tsx
import React, { useEffect, useMemo, useState } from "react";
import { db, auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  limit,
} from "firebase/firestore";

type JoinerRow = {
  id: string;
  name?: string;
  email?: string;
  joinCode?: string;
  school?: string;
  whatsapp?: string;
  bankAccount?: string;
  totalUsed?: number;
};

type Result = {
  totalUsers: number;
  premiumActive: number;
  premiumInactive: number;
  joinerData: JoinerRow | null;
};

const ADMIN_EMAILS = ["tkasmp25.monitoringpremium@gmail.com"]; // <- kalau mau tambah admin: ["a@gmail.com","b@gmail.com"]

const CASHBACK_PER_USER = 10000;

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

const AdminCashback: React.FC = () => {
  const [joinCode, setJoinCode] = useState("");
  const [allJoiners, setAllJoiners] = useState<JoinerRow[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");

  const [waMessage, setWaMessage] = useState("");
  const [tab, setTab] = useState<"cashback" | "sop">("cashback");

  const totalCashback = useMemo(
    () => (result ? result.premiumActive * CASHBACK_PER_USER : 0),
    [result]
  );

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const email = (user?.email || "").toLowerCase().trim();
      setAdminEmail(email);
      const ok = !!email && ADMIN_EMAILS.includes(email);
      setIsAdmin(ok);
      if (ok) loadAllJoiners().catch(() => {});
      if (!ok) {
        setAllJoiners([]);
        setResult(null);
      }
    });
    return () => unsub();
  }, []);

  const loadAllJoiners = async () => {
    try {
      setMessage("");
      // Ambil joiners (kalau koleksi banyak, ini masih aman; bisa dioptimasi nanti)
      const q = query(collection(db, "joiners"), orderBy("joinCode"), limit(5000));
      const snapshot = await getDocs(q);
      const joiners: JoinerRow[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as any),
      }));
      setAllJoiners(joiners);
    } catch (e) {
      console.error(e);
      setMessage("❌ Gagal load joiners. Cek Firestore Rules / koneksi.");
    }
  };

  const findJoinerByCode = async (code: string): Promise<JoinerRow | null> => {
    const qj = query(collection(db, "joiners"), where("joinCode", "==", code));
    const snap = await getDocs(qj);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...(d.data() as any) };
  };

  const countUsersByJoinCode = async (code: string) => {
    const qu = query(collection(db, "users"), where("joinCode", "==", code));
    const snap = await getDocs(qu);

    const totalUsers = snap.size;

    const premiumActive = snap.docs.filter((d) => {
      const data: any = d.data();
      const isPremium = data.isPremium === true;
      const activeUntil = data.activeUntil ? Number(data.activeUntil) : 0;
      return isPremium && activeUntil > Date.now();
    }).length;

    return { totalUsers, premiumActive, premiumInactive: totalUsers - premiumActive };
  };

  const generateWaMessage = (joinerData: JoinerRow | null, code: string, activeCount: number) => {
    const nama =
      joinerData?.name ||
      (joinerData?.email ? joinerData.email.split("@")[0] : "") ||
      "Joiner";

    const total = activeCount * CASHBACK_PER_USER;

    const msg = [
      `Halo ${nama} 👋`,
      ``,
      `Cashback kamu sudah siap! 💰`,
      ``,
      `📊 Rincian:`,
      `• Kode Joiner: ${joinerData?.joinCode || code}`,
      `• User Premium Aktif: ${activeCount} orang`,
      `• Cashback per user: ${rupiah(CASHBACK_PER_USER)}`,
      `• Total Cashback: ${rupiah(total)}`,
      ``,
      `📌 Data rekening/e-wallet kamu yang tercatat:`,
      `${joinerData?.bankAccount ? `• ${joinerData.bankAccount}` : "• (Belum ada, kirim ya)"} `,
      ``,
      `Kalau sudah benar, admin akan transfer hari ini/ jadwal batch pembayaran. 🙏`,
      `Terima kasih sudah jadi joiner TKA SMP!`,
    ].join("\n");

    setWaMessage(msg);
  };

  const hitungCashback = async () => {
    const code = joinCode.trim().toUpperCase();
    if (!code) {
      setMessage("❌ Masukkan kode joiner dulu.");
      return;
    }

    setLoading(true);
    setMessage("");
    setResult(null);
    setWaMessage("");

    try {
      const joinerData = await findJoinerByCode(code);
      const { totalUsers, premiumActive, premiumInactive } = await countUsersByJoinCode(code);

      setResult({ totalUsers, premiumActive, premiumInactive, joinerData });
      setMessage(`✅ Ditemukan ${totalUsers} user dengan kode ${code}. Premium aktif: ${premiumActive}.`);

      generateWaMessage(joinerData, code, premiumActive);
    } catch (e: any) {
      console.error(e);
      setMessage(`❌ Error: ${e?.message || "Gagal menghitung cashback"}`);
    } finally {
      setLoading(false);
    }
  };

  const updateTotalUsed = async () => {
    const code = joinCode.trim().toUpperCase();
    if (!result) return;

    setLoading(true);
    setMessage("");

    try {
      const joinerData = await findJoinerByCode(code);
      if (!joinerData?.id) {
        setMessage("❌ Joiner tidak ditemukan (joinCode tidak ada di koleksi joiners).");
        return;
      }

      const joinerRef = doc(db, "joiners", joinerData.id);
      await updateDoc(joinerRef, { totalUsed: result.premiumActive });

      setMessage(`✅ totalUsed berhasil diupdate menjadi ${result.premiumActive}`);
      // refresh list biar tabel ikut update
      loadAllJoiners().catch(() => {});
    } catch (e: any) {
      console.error(e);
      setMessage(`❌ Error update totalUsed: ${e?.message || "Gagal update"}`);
    } finally {
      setLoading(false);
    }
  };

  const copyText = async (text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setMessage("✅ Berhasil dicopy.");
      setTimeout(() => setMessage(""), 1800);
    } catch {
      setMessage("❌ Gagal copy (browser tidak mendukung clipboard).");
    }
  };

  if (!isAdmin) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tight">Admin Cashback Tracker</h1>
          <p className="text-zinc-400 mt-3">Hanya admin yang bisa akses halaman ini.</p>
        </div>

        <div className="rounded-3xl bg-red-900/40 border border-red-800 p-8 text-center">
          <h2 className="text-2xl font-bold text-red-200 mb-3">⚠️ Akses Ditolak</h2>
          <p className="text-red-100">
            Login Google dulu dengan email admin.
          </p>
          <p className="text-red-100 mt-2">
            Email kamu sekarang: <b>{adminEmail || "-"}</b>
          </p>
          <p className="text-red-100 mt-2">
            Admin whitelist: <b>{ADMIN_EMAILS.join(", ")}</b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black tracking-tight">Admin Cashback Tracker</h1>
        <p className="text-zinc-400 mt-3">Hitung cashback joiner berdasarkan user premium aktif</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-zinc-800 rounded-full p-1">
          <button
            onClick={() => setTab("cashback")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              tab === "cashback" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
            }`}
          >
            Hitung Cashback
          </button>
          <button
            onClick={() => setTab("sop")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              tab === "sop" ? "bg-blue-500 text-black" : "text-zinc-400 hover:text-white"
            }`}
          >
            SOP Admin
          </button>
        </div>
      </div>

      {tab === "cashback" && (
        <div className="space-y-6">
          {/* Input */}
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
            {message && <div className="mt-4 text-sm text-yellow-300 whitespace-pre-line">{message}</div>}
          </div>

          {/* Table */}
          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold">Daftar Semua Kode Joiner</div>
              <button
                onClick={() => loadAllJoiners()}
                className="text-xs font-black px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700"
              >
                Refresh
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-zinc-300">
                <thead className="text-xs uppercase bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3">Nama</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Kode</th>
                    <th className="px-4 py-3">Sekolah</th>
                    <th className="px-4 py-3">Rekening</th>
                    <th className="px-4 py-3">totalUsed</th>
                  </tr>
                </thead>
                <tbody>
                  {allJoiners.map((j) => (
                    <tr key={j.id} className="border-b border-zinc-700 hover:bg-zinc-800">
                      <td className="px-4 py-3">{j.name || "-"}</td>
                      <td className="px-4 py-3">{j.email || "-"}</td>
                      <td className="px-4 py-3 font-mono">{j.joinCode || "-"}</td>
                      <td className="px-4 py-3">{j.school || "-"}</td>
                      <td className="px-4 py-3">{j.bankAccount || "-"}</td>
                      <td className="px-4 py-3">{j.totalUsed || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {allJoiners.length === 0 && (
                <div className="text-center text-zinc-500 py-6">Belum ada data joiner.</div>
              )}
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
              <div className="text-lg font-bold mb-4">Hasil Hitung</div>

              <div className="mb-6 p-4 bg-black/30 rounded-lg">
                <h3 className="text-lg font-bold mb-2">📋 Data Joiner</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-zinc-400">Nama:</span>{" "}
                    <span className="text-white">{result.joinerData?.name || "-"}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">Email:</span>{" "}
                    <span className="text-white">{result.joinerData?.email || "-"}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">Kode:</span>{" "}
                    <span className="text-white font-mono">
                      {result.joinerData?.joinCode || joinCode.trim().toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-400">Sekolah:</span>{" "}
                    <span className="text-white">{result.joinerData?.school || "-"}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">WhatsApp:</span>{" "}
                    <span className="text-white">{result.joinerData?.whatsapp || "-"}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">Rekening/E-wallet:</span>{" "}
                    <span className="text-white">{result.joinerData?.bankAccount || "-"}</span>
                  </div>
                </div>
              </div>

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
                  <span className="text-zinc-400">User belum aktif:</span>
                  <span className="text-red-400 font-bold">{result.premiumInactive} orang ❌</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Cashback:</span>
                  <span className="text-yellow-400 font-bold">{rupiah(totalCashback)}</span>
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
                  onClick={() => copyText(waMessage)}
                  disabled={!waMessage}
                  className="w-full py-4 rounded-lg font-black bg-blue-500 text-black hover:opacity-90 disabled:opacity-50"
                >
                  Copy Pesan WA
                </button>
              </div>

              {waMessage && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-bold">Template WA</div>
                    <button
                      onClick={() => copyText(waMessage)}
                      className="text-xs font-black px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="text-sm text-zinc-300 whitespace-pre-line">{waMessage}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {tab === "sop" && (
        <div className="space-y-6">
          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
            <h2 className="text-2xl font-black text-blue-400 mb-2">📋 SOP Admin Cashback</h2>
            <p className="text-zinc-400">Panduan ringkas & aman untuk pembayaran cashback joiner</p>
          </div>

          <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">💰 Cashback Per User</h3>
            <ol className="text-sm text-zinc-300 space-y-3 list-decimal list-inside">
              <li><b>Login admin</b> dengan email whitelist.</li>
              <li><b>Input kode joiner</b> → klik <b>Cari</b>.</li>
              <li><b>Pastikan premium aktif</b> (bukan cuma input join code).</li>
              <li><b>Total cashback</b> = premium aktif × {rupiah(CASHBACK_PER_USER)}.</li>
              <li>Klik <b>Update totalUsed</b> → sebagai catatan pembayaran.</li>
              <li>Klik <b>Copy Pesan WA</b> → kirim ke joiner + transfer.</li>
            </ol>
          </div>

          <div className="rounded-3xl bg-red-900/20 border border-red-800 p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ Jangan Bayar Jika</h3>
            <ul className="text-sm text-red-200 space-y-2 list-disc list-inside">
              <li>Rekening/e-wallet kosong / tidak valid.</li>
              <li>Premium aktif = 0 (belum ada user premium aktif).</li>
              <li>Ada indikasi manipulasi / duplikasi klaim.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCashback;
