// AdminPanel.tsx (FINAL + WhatsApp tampil + template auto isi WA)
// ✅ Yang DITAMBAH (tanpa menghapus fitur lama):
// 1) Field `whatsapp?: string` di tipe UserDoc (baca dari users/{uid}.whatsapp)
// 2) Tampil nomor WhatsApp di "Daftar User Premium" + "Semua User (Debug)"
// 3) Template "Premium aktif" auto-isi: Email + Kode Akun + WhatsApp
// 4) Tombol opsional: "Chat WA" (muncul kalau nomor WA ada)

import React, { useEffect, useMemo, useState } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

type Props = {
  onLogout: () => void; // logout admin di App.tsx
};

type UserDoc = {
  uid: string;
  email: string;
  role: "user" | "admin";
  isPremium?: boolean;
  activeUntil?: number; // ms timestamp
  whatsapp?: string; // ✅ NEW (diisi dari Premium.tsx)
  createdAt?: any;
  updatedAt?: any;
};

const DEFAULT_DAYS = 365;

const normalizeEmail = (s: string) => s.trim().toLowerCase();
const unique = (arr: string[]) => Array.from(new Set(arr));

const parseBulkInputToEmails = (raw: string): string[] => {
  const lines = raw
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter(Boolean);

  const candidates: string[] = [];

  for (const line of lines) {
    const parts = line.split(/[,\t]+/).map((x) => x.trim());
    for (const p of parts) {
      const m = p.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
      if (m?.[0]) candidates.push(normalizeEmail(m[0]));
    }
  }

  return unique(candidates).filter((e) => e.includes("@"));
};

// ✅ helper tampil WA rapi (tanpa ubah data aslinya)
const formatWA = (wa?: string) => {
  const s = (wa || "").trim();
  if (!s) return "-";
  // kalau sudah 62xxxx, tampilkan dengan +62 biar enak dibaca
  if (/^62\d+$/.test(s)) return `+${s}`;
  return s;
};

// ✅ helper link WA (butuh digits saja, tanpa +)
const waLink = (wa?: string) => {
  const s = (wa || "").trim().replace(/[^\d]/g, "");
  if (!s) return "";
  // minimal sanity: harus angka & panjang wajar
  if (!/^\d{10,15}$/.test(s)) return "";
  return `https://wa.me/${s}`;
};

const AdminPanel: React.FC<Props> = ({ onLogout }) => {
  const [email, setEmail] = useState("");
  const [days, setDays] = useState<number>(DEFAULT_DAYS);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [allUsers, setAllUsers] = useState<UserDoc[]>([]);

  // BULK
  const [bulkText, setBulkText] = useState("");
  const [bulkDays, setBulkDays] = useState<number>(DEFAULT_DAYS);
  const [bulkResult, setBulkResult] = useState<{
    total: number;
    ok: number;
    notFound: string[];
    errors: { email: string; err: string }[];
  } | null>(null);

  // UI helper: SOP open/close
  const [showSop, setShowSop] = useState(true);
  const [showTemplates, setShowTemplates] = useState(true);

  const copyToClipboard = async (text: string, okMsg = "✅ Disalin ke clipboard.") => {
    try {
      await navigator.clipboard.writeText(text);
      setMsg(okMsg);
    } catch {
      setMsg("❌ Gagal copy clipboard (browser menolak).");
    }
  };

  // ===== TEMPLATE WA ADMIN (COPY-PASTE) =====
  const TEMPLATE_BELUM_LOGIN = [
    "Halo kak 👋",
    "Untuk aktivasi Premium, kakak perlu login Google dulu di halaman Premium (tombol “Login Google”).",
    "",
    "Setelah login, kirim ke aku:",
    "1) Email Google yang tampil di web",
    "2) Kode Akun (yang tampil di web)",
    "",
    "Lalu isi Form Konfirmasi ya (link di halaman Premium).",
    "Kalau sudah, aku aktifkan Premium ✅",
    "Terima kasih 🙏",
  ].join("\n");

  const TEMPLATE_KONFIRMASI_DITERIMA = [
    "Halo kak 👋",
    "Terima kasih, konfirmasi pembayaran sudah kami terima ✅",
    "",
    "Kami cek dulu ya (maksimal 1×24 jam, biasanya lebih cepat).",
    "Pastikan email Google yang di form sama dengan yang dipakai login di web.",
    "",
    "Nanti kalau sudah aktif, kakak akan bisa akses premium tanpa bayar lagi.",
    "Terima kasih 🙏",
  ].join("\n");

  const TEMPLATE_DATA_KURANG = [
    "Halo kak 👋",
    "Kami sudah terima konfirmasi, tapi data ini belum lengkap/kurang cocok:",
    "",
    "- Email Google / Kode Akun belum sesuai, atau",
    "- Bukti pembayaran kurang jelas",
    "",
    "Tolong kirim ulang:",
    "1) Email Google yang dipakai login di web",
    "2) Kode Akun (di halaman Premium setelah login)",
    "3) Bukti pembayaran yang jelas",
    "",
    "Nanti langsung kami aktifkan ya ✅",
  ].join("\n");

  // ✅ UPDATED: templatePremiumAktif auto-isi WhatsApp juga
  const templatePremiumAktif = (emailUser?: string, kodeAkun?: string, wa?: string) =>
    [
      "Halo kak 👋",
      "Premium sudah kami aktifkan ✅",
      "",
      "Silakan:",
      "1) Buka website TKA SMP",
      "2) Login Google (pakai email yang sama)",
      "3) Refresh halaman Premium",
      "",
      "Status premium akan berubah jadi AKTIF dan latihan premium langsung terbuka.",
      "",
      `Email Google: ${emailUser || "-"}`,
      `Kode Akun: ${kodeAkun || "-"}`,
      `WhatsApp: ${formatWA(wa)}`,
      "",
      "Terima kasih 🙏",
    ].join("\n");

  // realtime list users (admin view)
  useEffect(() => {
    const q = query(collection(db, "users"), orderBy("email", "asc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const rows: UserDoc[] = [];
        snap.forEach((d) => rows.push(d.data() as UserDoc));
        setAllUsers(rows);
      },
      (err) => setMsg(`❌ Firestore listen error: ${err?.message || String(err)}`)
    );
    return () => unsub();
  }, []);

  const premiumUsers = useMemo(() => {
    const now = Date.now();
    return allUsers
      .filter((u) => !!u.isPremium && Number(u.activeUntil || 0) > 0)
      .sort((a, b) => Number(b.activeUntil || 0) - Number(a.activeUntil || 0))
      .map((u) => ({ ...u, _active: Number(u.activeUntil || 0) > now }));
  }, [allUsers]);

  const findUserByEmail = async (emailLower: string): Promise<UserDoc | null> => {
    const q = query(collection(db, "users"), where("email", "==", emailLower), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return snap.docs[0].data() as UserDoc;
  };

  const activatePremiumForUser = async (u: UserDoc, d: number) => {
    const now = Date.now();
    const addMs = d * 24 * 60 * 60 * 1000;
    const base = Math.max(Number(u.activeUntil || 0), now);
    const nextUntil = base + addMs;

    await updateDoc(doc(db, "users", u.uid), {
      isPremium: true,
      activeUntil: nextUntil,
      updatedAt: serverTimestamp(),
    });

    return nextUntil;
  };

  const activatePremiumByEmail = async () => {
    setMsg("");
    const e = normalizeEmail(email);
    const d = Number(days) || DEFAULT_DAYS;

    if (!e || !e.includes("@")) {
      setMsg("❌ Email tidak valid.");
      return;
    }
    if (d < 1) {
      setMsg("❌ Durasi hari minimal 1.");
      return;
    }

    setLoading(true);
    try {
      const u = await findUserByEmail(e);
      if (!u || !u.uid) {
        setMsg("❌ User belum pernah login Google (doc belum ada). Suruh user login dulu.");
        return;
      }

      const nextUntil = await activatePremiumForUser(u, d);

      setEmail("");
      setMsg(`✅ Premium aktif untuk ${e}. (sampai: ${new Date(nextUntil).toLocaleString()})`);
    } catch (err: any) {
      setMsg("❌ Gagal aktifkan premium: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  };

  const revokePremiumByEmail = async (emailLower: string) => {
    setMsg("");
    setLoading(true);
    try {
      const u = await findUserByEmail(emailLower);
      if (!u?.uid) {
        setMsg("❌ Email tidak ditemukan di users.");
        return;
      }

      await updateDoc(doc(db, "users", u.uid), {
        isPremium: false,
        activeUntil: 0,
        updatedAt: serverTimestamp(),
      });

      setMsg(`✅ Premium dicabut: ${emailLower}`);
    } catch (err: any) {
      setMsg("❌ Gagal cabut premium: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
    }
  };

  const doBulkActivate = async () => {
    setMsg("");
    setBulkResult(null);

    const emails = parseBulkInputToEmails(bulkText);
    const d = Number(bulkDays) || DEFAULT_DAYS;

    if (emails.length === 0) {
      setMsg("❌ Tidak ada email yang terbaca. Paste daftar email dulu.");
      return;
    }
    if (d < 1) {
      setMsg("❌ Durasi hari minimal 1.");
      return;
    }

    setLoading(true);

    const result = {
      total: emails.length,
      ok: 0,
      notFound: [] as string[],
      errors: [] as { email: string; err: string }[],
    };

    try {
      for (const e of emails) {
        try {
          const u = await findUserByEmail(e);
          if (!u?.uid) {
            result.notFound.push(e);
            continue;
          }
          await activatePremiumForUser(u, d);
          result.ok += 1;
        } catch (err: any) {
          result.errors.push({ email: e, err: err?.message || String(err) });
        }
      }

      setBulkResult(result);

      if (result.notFound.length > 0) {
        setMsg(
          `✅ Bulk selesai. Berhasil: ${result.ok}/${result.total}. ` +
            `Tidak ditemukan (belum login): ${result.notFound.length}.`
        );
      } else {
        setMsg(`✅ Bulk selesai. Berhasil: ${result.ok}/${result.total}.`);
      }
    } finally {
      setLoading(false);
    }
  };

  const copyNotFound = async () => {
    if (!bulkResult?.notFound?.length) return;
    await copyToClipboard(bulkResult.notFound.join("\n"), "✅ Daftar 'belum login' disalin.");
  };

  const doLogoutAll = async () => {
    setMsg("");
    setLoading(true);
    try {
      await signOut(auth);
    } catch {
      // ignore
    } finally {
      onLogout();
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black">Admin Panel</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Aktifkan premium berdasarkan <b>email</b> dari Google Form. (User wajib sudah login Google dulu)
          </p>
        </div>

        <button
          onClick={doLogoutAll}
          disabled={loading}
          className="rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 font-black px-5 py-3 disabled:opacity-60"
        >
          Logout
        </button>
      </div>

      {/* SOP ADMIN */}
      <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-bold">SOP Admin (Cepat)</div>
          <button
            onClick={() => setShowSop((v) => !v)}
            className="text-xs font-black px-3 py-2 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700"
          >
            {showSop ? "Tutup" : "Buka"}
          </button>
        </div>

        {showSop && (
          <div className="mt-4 text-sm text-zinc-300 space-y-3">
            <div className="rounded-2xl bg-black/25 border border-zinc-800 p-4">
              <div className="text-xs font-black tracking-widest text-zinc-500 mb-2">ALUR CEPAT</div>
              <ol className="list-decimal list-inside space-y-1">
                <li>Buka Google Form → tab <b>Responses</b> → klik ikon <b>Google Sheets</b>.</li>
                <li>Di Sheets, copy kolom <b>Email Google</b> (bisa banyak baris).</li>
                <li>Paste ke menu <b>Bulk</b> di bawah → klik <b>Bulk Aktifkan Premium</b>.</li>
                <li>
                  Kalau ada yang <b>Belum login</b>, kirim template “Belum Login” ke mereka (biar login dulu).
                </li>
                <li>Balas user “Premium aktif” setelah diaktifkan.</li>
              </ol>
            </div>

            <div className="text-xs text-zinc-500">
              Catatan: Premium <b>otomatis expired</b> kalau tanggal sudah lewat (karena cek pakai <b>activeUntil</b>).
              Kamu tidak perlu ubah status manual kalau 1 tahun sudah lewat.
            </div>
          </div>
        )}
      </div>

      {/* TEMPLATE WA ADMIN */}
      <div className="mt-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-bold">Template WA Admin (Copy-Paste)</div>
          <button
            onClick={() => setShowTemplates((v) => !v)}
            className="text-xs font-black px-3 py-2 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700"
          >
            {showTemplates ? "Tutup" : "Buka"}
          </button>
        </div>

        {showTemplates && (
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black/25 border border-zinc-800 p-4">
              <div className="text-sm font-black mb-2">A) Belum Login (Wajib)</div>
              <pre className="text-xs whitespace-pre-wrap text-zinc-300 bg-black/30 border border-zinc-800 rounded-xl p-3">
                {TEMPLATE_BELUM_LOGIN}
              </pre>
              <button
                onClick={() => copyToClipboard(TEMPLATE_BELUM_LOGIN, "✅ Template 'Belum Login' disalin.")}
                className="mt-3 w-full rounded-xl bg-blue-500 text-black font-black py-2 hover:opacity-90"
              >
                Copy Template
              </button>
            </div>

            <div className="rounded-2xl bg-black/25 border border-zinc-800 p-4">
              <div className="text-sm font-black mb-2">B) Konfirmasi diterima</div>
              <pre className="text-xs whitespace-pre-wrap text-zinc-300 bg-black/30 border border-zinc-800 rounded-xl p-3">
                {TEMPLATE_KONFIRMASI_DITERIMA}
              </pre>
              <button
                onClick={() =>
                  copyToClipboard(TEMPLATE_KONFIRMASI_DITERIMA, "✅ Template 'Konfirmasi diterima' disalin.")
                }
                className="mt-3 w-full rounded-xl bg-blue-500 text-black font-black py-2 hover:opacity-90"
              >
                Copy Template
              </button>
            </div>

            <div className="rounded-2xl bg-black/25 border border-zinc-800 p-4">
              <div className="text-sm font-black mb-2">C) Data kurang</div>
              <pre className="text-xs whitespace-pre-wrap text-zinc-300 bg-black/30 border border-zinc-800 rounded-xl p-3">
                {TEMPLATE_DATA_KURANG}
              </pre>
              <button
                onClick={() => copyToClipboard(TEMPLATE_DATA_KURANG, "✅ Template 'Data kurang' disalin.")}
                className="mt-3 w-full rounded-xl bg-blue-500 text-black font-black py-2 hover:opacity-90"
              >
                Copy Template
              </button>
            </div>

            <div className="rounded-2xl bg-black/25 border border-zinc-800 p-4">
              <div className="text-sm font-black mb-2">D) Premium aktif (manual)</div>
              <pre className="text-xs whitespace-pre-wrap text-zinc-300 bg-black/30 border border-zinc-800 rounded-xl p-3">
                {templatePremiumAktif("-", "-", "-")}
              </pre>
              <button
                onClick={() =>
                  copyToClipboard(templatePremiumAktif("-", "-", "-"), "✅ Template 'Premium aktif' disalin.")
                }
                className="mt-3 w-full rounded-xl bg-blue-500 text-black font-black py-2 hover:opacity-90"
              >
                Copy Template
              </button>
              <div className="text-xs text-zinc-500 mt-2">
                Tips: yang <b>auto isi email + kode akun + whatsapp</b> ada tombolnya di daftar user premium (di bawah).
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SINGLE */}
      <div className="mt-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
        <div className="text-lg font-bold mb-4">Aktifkan Premium (Satu Email)</div>

        <div className="grid md:grid-cols-3 gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email user (harus sudah login Google)"
            className="rounded-xl bg-black/40 border border-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
          />
          <input
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            type="number"
            min={1}
            placeholder="durasi (hari)"
            className="rounded-xl bg-black/40 border border-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
          />
          <button
            onClick={activatePremiumByEmail}
            disabled={loading}
            className="rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Loading..." : "Aktifkan"}
          </button>
        </div>

        <div className="mt-4 text-xs text-zinc-500">
          Kalau email belum ditemukan, berarti user itu <b>belum pernah login Google</b> → suruh login dulu.
        </div>
      </div>

      {/* BULK */}
      <div className="mt-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
        <div className="text-lg font-bold mb-2">Bulk Aktifkan Premium (Banyak Email Sekaligus)</div>
        <div className="text-sm text-zinc-400 mb-4">
          Paste list email dari Google Form / Sheet. Bisa dipisah baris, koma, atau hasil copy dari tabel.
        </div>

        <textarea
          value={bulkText}
          onChange={(e) => setBulkText(e.target.value)}
          rows={7}
          placeholder={`Contoh:\nuser1@gmail.com\nuser2@gmail.com\nuser3@gmail.com`}
          className="w-full rounded-2xl bg-black/30 border border-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="mt-3 flex flex-col md:flex-row gap-3">
          <input
            value={bulkDays}
            onChange={(e) => setBulkDays(Number(e.target.value))}
            type="number"
            min={1}
            className="md:w-52 rounded-xl bg-black/40 border border-zinc-800 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="durasi (hari)"
          />

          <button
            onClick={doBulkActivate}
            disabled={loading}
            className="flex-1 rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Bulk Aktifkan Premium"}
          </button>
        </div>

        {bulkResult && (
          <div className="mt-4 rounded-2xl bg-black/25 border border-zinc-800 p-4">
            <div className="text-sm font-bold mb-2">Hasil Bulk</div>
            <div className="text-sm text-zinc-300">
              Total: <b>{bulkResult.total}</b> • Berhasil:{" "}
              <b className="text-green-400">{bulkResult.ok}</b> • Tidak ditemukan:{" "}
              <b className="text-yellow-300">{bulkResult.notFound.length}</b> • Error:{" "}
              <b className="text-red-300">{bulkResult.errors.length}</b>
            </div>

            {bulkResult.notFound.length > 0 && (
              <div className="mt-3">
                <div className="text-xs text-zinc-500 mb-2">
                  Tidak ditemukan = user belum login Google (belum ada doc di Firestore).
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <button
                    onClick={copyNotFound}
                    className="rounded-xl bg-zinc-800 text-white font-black px-4 py-2 hover:bg-zinc-700"
                  >
                    Copy daftar belum login
                  </button>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        TEMPLATE_BELUM_LOGIN,
                        "✅ Template 'Belum Login' disalin (tinggal paste ke WA user)."
                      )
                    }
                    className="rounded-xl bg-blue-500 text-black font-black px-4 py-2 hover:opacity-90"
                  >
                    Copy template “Belum Login”
                  </button>
                </div>
              </div>
            )}

            {bulkResult.errors.length > 0 && (
              <div className="mt-3 text-xs text-red-200 whitespace-pre-line">
                {bulkResult.errors.slice(0, 8).map((x, i) => `• ${x.email}: ${x.err}`).join("\n")}
                {bulkResult.errors.length > 8 ? `\n(+${bulkResult.errors.length - 8} lainnya)` : ""}
              </div>
            )}
          </div>
        )}

        {msg && <div className="mt-4 text-sm text-blue-300 whitespace-pre-line">{msg}</div>}
      </div>

      {/* PREMIUM USERS */}
      <div className="mt-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
        <div className="text-lg font-bold mb-4">Daftar User Premium</div>

        {premiumUsers.length === 0 ? (
          <div className="text-zinc-500 text-sm">Belum ada user premium.</div>
        ) : (
          <div className="space-y-3">
            {premiumUsers.map((u: any) => {
              const until = Number(u.activeUntil || 0);
              const active = !!u._active;
              const wa = (u.whatsapp || "").toString().trim();
              const waHref = waLink(wa);

              return (
                <div
                  key={u.uid}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-2xl bg-black/30 border border-zinc-800 p-4"
                >
                  <div>
                    <div className="font-bold">{u.email}</div>
                    <div className="text-xs text-zinc-400">
                      Status:{" "}
                      <b className={active ? "text-green-400" : "text-zinc-500"}>
                        {active ? "AKTIF" : "EXPIRED"}
                      </b>{" "}
                      • Until: {until ? new Date(until).toLocaleString() : "-"}
                    </div>
                    <div className="text-[11px] text-zinc-600">Kode Akun: {u.uid}</div>

                    {/* ✅ NEW: tampil WhatsApp */}
                    <div className="text-[11px] text-zinc-600">
                      WhatsApp: <span className="text-zinc-300">{formatWA(wa)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          templatePremiumAktif(u.email, u.uid, wa),
                          "✅ Template 'Premium aktif' (auto) disalin."
                        )
                      }
                      className="rounded-xl bg-blue-500 text-black font-black px-4 py-2 hover:opacity-90"
                    >
                      Copy template “Premium aktif”
                    </button>

                    {/* ✅ NEW: tombol chat WA jika ada */}
                    {waHref && (
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-green-500 text-black font-black px-4 py-2 hover:opacity-90 text-center"
                      >
                        Chat WA
                      </a>
                    )}

                    <button
                      onClick={() => revokePremiumByEmail(String(u.email || "").toLowerCase())}
                      disabled={loading}
                      className="rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 font-black px-4 py-2 disabled:opacity-60"
                    >
                      Cabut
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* DEBUG USERS */}
      <div className="mt-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-6">
        <div className="text-lg font-bold mb-2">Semua User (Debug)</div>
        <div className="text-xs text-zinc-500 mb-4">
          Untuk memastikan user yang sudah login benar-benar masuk ke Firestore.
        </div>

        {allUsers.length === 0 ? (
          <div className="text-zinc-500 text-sm">Belum ada user di koleksi users.</div>
        ) : (
          <div className="space-y-2">
            {allUsers.slice(0, 80).map((u) => (
              <div
                key={u.uid}
                className="flex items-center justify-between rounded-2xl bg-black/20 border border-zinc-800 px-4 py-3"
              >
                <div>
                  <div className="text-sm font-bold">{u.email}</div>
                  <div className="text-xs text-zinc-500">
                    role: {u.role || "user"} • premium: {String(!!u.isPremium)} • until:{" "}
                    {u.activeUntil ? new Date(Number(u.activeUntil)).toLocaleString() : "-"}
                  </div>

                  {/* ✅ NEW: tampil WhatsApp di debug */}
                  <div className="text-[11px] text-zinc-600">
                    WhatsApp: <span className="text-zinc-300">{formatWA(u.whatsapp)}</span>
                  </div>
                </div>
                <div className="text-[11px] text-zinc-600">{u.uid}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
