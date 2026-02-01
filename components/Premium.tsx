// src/components/Premium.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Page, User } from "../types";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

import {
  loginGoogle,
  logoutGoogle,
  loadPremiumState,
  refreshMyPremiumState,
  subscribeMyPremiumState,
  getOrCreateDeviceId,
} from "./premiumstore";

import { validateJoinCode } from "../firebase/joiner";

type Props = {
  onLogin: (wa: string, pass: string) => boolean;
  currentUser: User | null;
  onLogout: () => void;
  setCurrentPage: (p: Page) => void;

  onAdminLogin: (email: string) => boolean;
  adminEmails: string[];

  premiumState?: any;
};

// === KONFIG MANUAL PAYMENT ===
const LYNK_URL = "http://lynk.id/juarapintar/9x93l3r8zj7k";
const FORM_URL = "https://forms.gle/aqaVUgyY36edj89G7";
const ADMIN_WA_E164 = "628981091600";

// ✅ KONFIG DISKON
const DISCOUNT_AMOUNT = 10000; // Rp10.000
const ORIGINAL_PRICE = 129000; // Rp129.000
const DISCOUNTED_PRICE = ORIGINAL_PRICE - DISCOUNT_AMOUNT; // Rp119.000

const Premium: React.FC<Props> = ({
  currentUser,
  onLogout,
  setCurrentPage,
  onAdminLogin,
  adminEmails,
}) => {
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [uid, setUid] = useState<string>("");
  const [authEmail, setAuthEmail] = useState<string>("");

  const [st, setSt] = useState(() => loadPremiumState());

  // ✅ STATE: Nomor WhatsApp user
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [whatsappValid, setWhatsappValid] = useState<boolean>(false);

  // ✅ STATE: Kode Diskon Joiner
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountValid, setDiscountValid] = useState<boolean>(false);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);

  // ✅ email stabil (fallback)
  const displayEmail = useMemo(() => {
    return (authEmail || auth.currentUser?.email || "").trim();
  }, [authEmail]);

  const isAdminEmail = useMemo(() => {
    const e = (displayEmail || "").trim().toLowerCase();
    return adminEmails.map((x) => x.toLowerCase()).includes(e);
  }, [displayEmail, adminEmails]);

  const premiumActive = useMemo(() => {
    return !!st.isPremium && (st.activeUntil || 0) > Date.now();
  }, [st]);

  // ✅ Harga final (dengan/ tanpa diskon)
  const finalPrice = useMemo(() => {
    return discountApplied ? DISCOUNTED_PRICE : ORIGINAL_PRICE;
  }, [discountApplied]);

  // ====== AUTH LISTENER + LAST-LOGIN-WINS DEVICE LOCK ======
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUid("");
        setAuthEmail("");
        setSt(loadPremiumState());
        return;
      }

      const uidNow = u.uid;
      const emailNow = (u.email || "").toLowerCase();
      setUid(uidNow);
      setAuthEmail(emailNow);

      // ✅ device id lokal
      const deviceId = getOrCreateDeviceId();
      const userRef = doc(db, "users", uidNow);

      // ✅ LAST LOGIN WINS: selalu set deviceId ke device yg sedang login
      // (ini yang bikin device lain auto logout via snapshot)
      const now = new Date().toISOString();
      await setDoc(
        userRef,
        {
          uid: uidNow,
          email: emailNow,
          deviceId,
          lastLogin: now,
          updatedAt: now,
          createdAt: now, // merge aman, kalau sudah ada tidak masalah
        },
        { merge: true }
      );

      // ✅ load whatsapp/joinCode kalau mau tampil (optional)
      try {
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          const data = snap.data() as any;
          if (data?.whatsapp) setWhatsapp(String(data.whatsapp));
          if (data?.joinCode && !discountApplied) {
            // hanya isi input, tidak auto apply
            setDiscountCode(String(data.joinCode));
          }
        }
      } catch {}

      try {
        const latest = await refreshMyPremiumState();
        setSt(latest);
      } catch (e: any) {
        setMsg(`❌ ${e?.message || String(e)}`);
      }

      const unsubUser = subscribeMyPremiumState(
        (next) => setSt(next),
        (err) => setMsg(`❌ Firestore listen error: ${err?.message || String(err)}`)
      );

      return () => unsubUser();
    });

    return () => unsubAuth();
  }, [discountApplied]);

  // ✅ notifikasi kalau device mismatch
  useEffect(() => {
    if (st.deviceMismatch) {
      setMsg(
        "⚠️ Akun ini sedang digunakan di perangkat lain.\n\n" +
          "1 akun hanya bisa digunakan di 1 perangkat aktif.\n\n" +
          "Jika kamu ingin memakai akun ini di perangkat ini, silakan login ulang.\n" +
          "Perangkat lain akan otomatis logout."
      );
    }
  }, [st.deviceMismatch]);

  // ✅ Validasi nomor WhatsApp
  useEffect(() => {
    const clean = whatsapp.replace(/[^0-9]/g, "");
    const validIndonesia = /^(08|628)\d{8,12}$/.test(clean);
    setWhatsappValid(validIndonesia);
  }, [whatsapp]);

  const doGoogleLogin = async () => {
    setMsg("");
    setLoading(true);
    try {
      await loginGoogle();
      setMsg("✅ Login Google berhasil.");
    } catch (e: any) {
      setMsg(`❌ Login Google gagal: ${e?.message || String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  const doGoogleLogout = async () => {
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

  const doAdminLogin = () => {
    const email = (displayEmail || "").trim().toLowerCase();
    if (!email) {
      setMsg("❌ Kamu belum login Google.");
      return;
    }
    const ok = onAdminLogin(email);
    if (!ok) setMsg("❌ Email ini tidak ada di whitelist admin.");
  };

  // ✅ Simpan nomor WhatsApp ke Firestore
  const saveWhatsapp = async () => {
    if (!uid || !whatsappValid) return;

    try {
      const cleanWa = whatsapp.replace(/[^0-9]/g, "");
      const formattedWa = cleanWa.startsWith("08") ? `62${cleanWa.substring(1)}` : cleanWa;

      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        whatsapp: formattedWa,
        email: displayEmail.toLowerCase(),
        updatedAt: new Date().toISOString(),
      });

      setMsg("✅ Nomor WhatsApp tersimpan.");
      setTimeout(() => setMsg(""), 2000);
    } catch (e: any) {
      setMsg(`❌ Gagal menyimpan WhatsApp: ${e?.message || "Coba lagi"}`);
    }
  };

  // ✅ Apply kode diskon + simpan ke user doc
  const applyDiscountCode = async () => {
    const cleanCode = discountCode.trim();
    if (!cleanCode) {
      setMsg("❌ Masukkan kode diskon terlebih dahulu.");
      return;
    }

    setLoading(true);
    try {
      const validation = await validateJoinCode(cleanCode);

      if (!validation.isValid) {
        setMsg(`❌ ${validation.message}`);
        return;
      }

      if (uid) {
        const userRef = doc(db, "users", uid);
        await setDoc(
          userRef,
          {
            joinCode: validation.joinCode,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }

      setDiscountApplied(true);
      setDiscountValid(true);
      setMsg(`✅ Kode diskon ${validation.joinCode} berhasil! Diskon Rp10.000`);
    } catch (e: any) {
      setMsg(`❌ Error: ${e?.message || "Coba lagi"}`);
    } finally {
      setLoading(false);
    }
  };

  const resetDiscountCode = () => {
    setDiscountCode("");
    setDiscountApplied(false);
    setDiscountValid(false);
  };

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const formatWhatsapp = (wa: string) => {
    const clean = wa.replace(/[^0-9]/g, "");
    if (!clean) return "";
    return clean.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  // ✅ WhatsApp template admin
  const waText = useMemo(() => {
    const email = (displayEmail || "").trim();
    const kodeAkun = (uid || "").trim();
    const waUser = whatsapp.replace(/[^0-9]/g, "").trim();
    const kodeDiskon = discountApplied ? discountCode.trim().toUpperCase() : "";

    if (!email) {
      return [
        "Halo kak 👋",
        "",
        "Untuk aktivasi Premium, kakak wajib login Google dulu di halaman Premium.",
        "",
        "Langkah:",
        "1) Login Google",
        "2) Input Nomor WhatsApp + Simpan",
        "3) (Opsional) Input Kode Diskon Joiner",
        "4) Klik Bayar Sekarang",
        "5) Isi Form Konfirmasi Pembayaran (Wajib)",
        "",
        "Kalau sudah isi form, balas chat ini: “Sudah isi form” ✅",
        "",
        "Terima kasih 🙏",
      ].join("\n");
    }

    const lines: string[] = [
      "Halo Admin TKA SMP 👋",
      "",
      "Saya mau aktivasi Premium. Saya sudah isi Form Konfirmasi ✅",
      "",
      `Email Google: ${email}`,
      `Kode Akun: ${kodeAkun || "-"}`,
      `Nomor WhatsApp: ${waUser || "-"}`,
    ];

    if (kodeDiskon) {
      lines.push(`Kode Diskon Joiner: ${kodeDiskon}`);
      lines.push(`Harga Bayar: ${formatRupiah(finalPrice)}`);
    } else {
      lines.push(`Harga Bayar: ${formatRupiah(finalPrice)}`);
    }

    lines.push("");
    lines.push("Bukti bayar: (saya kirim setelah chat ini, jika diperlukan)");
    lines.push("");
    lines.push("Mohon dibantu aktivasi ya 🙏");
    lines.push("Terima kasih.");

    return lines.join("\n");
  }, [displayEmail, uid, whatsapp, discountCode, discountApplied, finalPrice]);

  const waHref = useMemo(() => {
    return `https://wa.me/${ADMIN_WA_E164}?text=${encodeURIComponent(waText)}`;
  }, [waText]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMsg("✅ Disalin.");
      setTimeout(() => setMsg(""), 1200);
    } catch {
      setMsg("❌ Gagal menyalin. (Browser tidak mendukung clipboard)");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Akses Premium <span className="text-blue-500">TKA SMP</span>
        </h1>
        <p className="text-zinc-400 mt-3">
          Premium membuka latihan yang terkunci. Masa aktif <b>1 tahun</b> sejak admin mengaktifkan akun kamu.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Kartu Paket / Pembayaran */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold">Paket Premium TKA SMP</div>
            <div className="text-xs font-black bg-blue-500 text-black px-3 py-1 rounded-full">AKSES PENUH</div>
          </div>

          <div className="mb-3">
            <div className="text-sm text-zinc-400 line-through font-semibold">Harga normal Rp199.000</div>
            <div className="text-5xl font-black text-white leading-tight">{formatRupiah(finalPrice)}</div>
          </div>

          {/* ✅ INPUT KODE DISKON JOINER */}
          <div className="mb-6">
            {!uid && (
              <div className="text-sm text-yellow-400 bg-yellow-900/30 p-3 rounded-lg mb-3">
                ⚠️ Login Google dulu sebelum input kode diskon!
              </div>
            )}

            <div className="text-sm font-bold mb-2 text-white">Kode Diskon Joiner (Opsional)</div>
            <div className="flex gap-2">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => {
                  setDiscountCode(e.target.value);
                  if (discountApplied) setDiscountApplied(false);
                }}
                placeholder="TKA-ABC123"
                disabled={!uid}
                className={`flex-1 bg-zinc-800 text-white p-3 rounded-lg border ${
                  discountValid ? "border-green-500" : "border-zinc-700"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />

              {!discountApplied ? (
                <button
                  onClick={applyDiscountCode}
                  disabled={!uid || !discountCode.trim() || loading}
                  className={`px-4 rounded-lg font-black ${
                    uid && discountCode.trim() && !loading
                      ? "bg-green-500 text-black hover:opacity-90"
                      : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Loading..." : "Apply"}
                </button>
              ) : (
                <button
                  onClick={resetDiscountCode}
                  className="px-4 bg-red-500 text-white rounded-lg font-black hover:bg-red-600"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* ✅ INPUT WHATSAPP */}
          <div className="mb-6">
            <div className="text-sm font-bold mb-2 text-white">Nomor WhatsApp (Wajib)</div>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="0812-3456-7890"
              className={`w-full bg-zinc-800 text-white p-3 rounded-lg border ${
                whatsappValid ? "border-green-500" : "border-zinc-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {whatsapp && !whatsappValid && <div className="mt-2 text-xs text-red-400">❌ Format nomor tidak valid</div>}
            {whatsappValid && <div className="mt-2 text-xs text-green-400">✅ Nomor valid</div>}
          </div>

          <div className="grid gap-3">
            <button
              onClick={saveWhatsapp}
              disabled={!whatsappValid || !uid}
              className="block w-full text-center rounded-xl font-black py-3 bg-blue-500 text-black hover:opacity-90 disabled:opacity-50"
            >
              Simpan Nomor WhatsApp
            </button>

            <a
              className={`block w-full text-center rounded-xl font-black py-3 ${
                whatsappValid && uid ? "bg-white text-black hover:opacity-90" : "bg-zinc-700 text-zinc-400 pointer-events-none"
              }`}
              href={LYNK_URL}
              target="_blank"
              rel="noreferrer"
            >
              Bayar Sekarang ({formatRupiah(finalPrice)})
            </a>

            <a
              className="block w-full text-center rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90"
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Isi Form Konfirmasi Pembayaran
            </a>

            <a
              className="block w-full text-center rounded-xl bg-green-500 text-black font-black py-3 hover:opacity-90"
              href={waHref}
              target="_blank"
              rel="noreferrer"
            >
              Chat Admin via WhatsApp
            </a>
          </div>
        </div>

        {/* Kartu Login */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="text-lg font-bold mb-4">Login Google (Wajib)</div>
          <div className="text-sm text-zinc-400 mb-4">
            Login sebelum bayar supaya sistem bisa mengenali akun kamu dan admin bisa mengaktifkan Premium.
          </div>

          <div className="mt-2 flex gap-3">
            {!uid ? (
              <button
                onClick={doGoogleLogin}
                disabled={loading}
                className="flex-1 rounded-xl bg-white text-black font-black py-3 hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Login Google"}
              </button>
            ) : (
              <button
                onClick={doGoogleLogout}
                disabled={loading}
                className="flex-1 rounded-xl bg-zinc-800 text-white font-black py-3 hover:bg-zinc-700 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Logout"}
              </button>
            )}
          </div>

          <div className="mt-5 rounded-2xl bg-black/30 border border-zinc-800 p-4">
            <div className="text-sm font-bold mb-2">Informasi Akun Kamu</div>

            <div className="flex items-start justify-between gap-3">
              <div className="text-sm text-zinc-300">
                Email Google: <b>{displayEmail || "-"}</b>
                <br />
                Kode Akun: <span className="text-zinc-400">{uid || "-"}</span>
                <br />
                Nomor WhatsApp:{" "}
                <b className={whatsappValid ? "text-green-400" : "text-zinc-400"}>
                  {whatsapp ? formatWhatsapp(whatsapp) : "-"}
                </b>
                <br />
                Harga Bayar:{" "}
                <b className={discountApplied ? "text-yellow-400" : "text-white"}>
                  {formatRupiah(finalPrice)}
                </b>
                <br />
                Status Premium:{" "}
                <b className={premiumActive ? "text-green-400" : "text-zinc-400"}>
                  {premiumActive ? "AKTIF" : "BELUM AKTIF"}
                </b>
              </div>

              <div className="flex flex-col gap-2">
                <button onClick={() => copy(displayEmail || "")} disabled={!displayEmail} className="rounded-xl px-3 py-2 text-xs font-black bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50">
                  Copy Email
                </button>
                <button onClick={() => copy(uid || "")} disabled={!uid} className="rounded-xl px-3 py-2 text-xs font-black bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50">
                  Copy Kode
                </button>
                <button onClick={() => copy(whatsapp || "")} disabled={!whatsapp} className="rounded-xl px-3 py-2 text-xs font-black bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50">
                  Copy WA
                </button>
              </div>
            </div>

            {msg && <div className="mt-3 text-sm text-yellow-300 whitespace-pre-line">{msg}</div>}
          </div>

          {/* Tombol Admin */}
          {isAdminEmail && (
            <div className="mt-6">
              <button
                onClick={doAdminLogin}
                className="w-full rounded-xl font-black py-3 bg-blue-500 text-black hover:opacity-90"
              >
                Masuk Admin Panel
              </button>
            </div>
          )}

          {currentUser?.role === "admin" && (
            <div className="mt-6">
              <button
                onClick={() => {
                  onLogout();
                  setCurrentPage(Page.HOME);
                }}
                className="w-full rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 font-black py-3"
              >
                Logout Admin (App)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Premium;
