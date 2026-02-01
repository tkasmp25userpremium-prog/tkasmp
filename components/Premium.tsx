// Premium.tsx FINAL 100% JSX UI + Anti-Sharing
import React, { useEffect, useMemo, useState } from "react";
import { Page, User } from "../types";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  loginGoogle,
  logoutGoogle,
  loadPremiumState,
  refreshMyPremiumState,
  subscribeMyPremiumState,
} from "./premiumstore";
import { validateJoinCode } from "../firebase/joiner";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

// CONFIG PAYMENT / DISCOUNT
const LYNK_URL = "http://lynk.id/juarapintar/9x93l3r8zj7";
const FORM_URL = "https://forms.gle/aqaVUgyY36edj89G7";
const ADMIN_WA_E164 = "628981091600";
const DISCOUNT_AMOUNT = 10000; // Rp10.000
const ORIGINAL_PRICE = 129000; // Rp129.000
const DISCOUNTED_PRICE = ORIGINAL_PRICE - DISCOUNT_AMOUNT; // Rp119.000

const generateDeviceId = () => ${navigator.userAgent}-${Date.now()};

type Props = {
  onLogin: (wa: string, pass: string) => boolean;
  currentUser: User | null;
  onLogout: () => void;
  setCurrentPage: (p: Page) => void;
  onAdminLogin: (email: string) => boolean;
  adminEmails: string[];
  premiumState?: any;
};

const Premium: React.FC<Props> = ({ currentUser, onLogout, setCurrentPage, onAdminLogin, adminEmails }) => {
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [uid, setUid] = useState<string>("");
  const [authEmail, setAuthEmail] = useState<string>("");
  const [st, setSt] = useState(() => loadPremiumState());
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [whatsappValid, setWhatsappValid] = useState<boolean>(false);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [discountValid, setDiscountValid] = useState<boolean>(false);
  const [deviceId, setDeviceId] = useState<string>("");

  const isAdminEmail = useMemo(() => {
    const e = (authEmail || "").trim().toLowerCase();
    return adminEmails.map((x) => x.toLowerCase()).includes(e);
  }, [authEmail, adminEmails]);

  const premiumActive = useMemo(() => !!st.isPremium && (st.activeUntil || 0) > Date.now() && st.currentDevice === deviceId, [st, deviceId]);

  // =========================
  // AUTH & ANTI-SHARING
  // =========================
  useEffect(() => {
    const currentDeviceId = generateDeviceId();
    setDeviceId(currentDeviceId);

    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUid("");
        setAuthEmail("");
        setSt(loadPremiumState());
        return;
      }

      const uid = u.uid;
      const email = (u.email || "").toLowerCase();
      setUid(uid);
      setAuthEmail(email);

      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid,
          email,
          createdAt: new Date().toISOString(),
          currentDevice: currentDeviceId,
          lastLogin: serverTimestamp(),
        });
      } else {
        const userData = userSnap.data();
        const previousDevice = userData?.currentDevice || null;

        if (previousDevice !== currentDeviceId) {
          // Device baru login → update currentDevice
          await updateDoc(userRef, { currentDevice: currentDeviceId, lastLogin: serverTimestamp() });
        } else {
          await updateDoc(userRef, { lastLogin: serverTimestamp() });
        }
      }

      try {
        const latest = await refreshMyPremiumState();
        setSt({ ...latest, currentDevice: currentDeviceId });
      } catch (e: any) {
        setMsg(❌ ${e?.message || String(e)});
      }

      const unsubUser = subscribeMyPremiumState(
        (next) => setSt({ ...next, currentDevice: currentDeviceId }),
        (err) => setMsg(❌ Firestore listen error: ${err?.message || String(err)})
      );

      return () => unsubUser();
    });

    return () => unsubAuth();
  }, []);

  // =========================
  // WHATSAPP VALIDATION
  // =========================
  useEffect(() => {
    const clean = whatsapp.replace(/[^0-9]/g, "");
    setWhatsappValid(/^(08|628)\d{8,12}$/.test(clean));
  }, [whatsapp]);

  // =========================
  // DISCOUNT LOGIC
  // =========================
  const finalPrice = useMemo(() => (discountApplied ? DISCOUNTED_PRICE : ORIGINAL_PRICE), [discountApplied]);

  const applyDiscountCode = async () => {
    const cleanCode = discountCode.trim();
    if (!cleanCode) { setMsg("❌ Masukkan kode diskon terlebih dahulu."); return; }
    setLoading(true);
    try {
      const validation = await validateJoinCode(cleanCode);
      if (!validation.isValid) { setMsg(❌ ${validation.message}); return; }
      if (uid) {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, { joinCode: validation.joinCode, updatedAt: new Date().toISOString() }, { merge: true });
      }
      setDiscountApplied(true); setDiscountValid(true); setMsg(✅ Kode diskon ${validation.joinCode} berhasil! Diskon Rp10.000);
    } catch (e: any) {
      setMsg(❌ Error: ${e?.message || "Coba lagi"});
    } finally { setLoading(false); }
  };

  const resetDiscountCode = () => { setDiscountCode(""); setDiscountApplied(false); setDiscountValid(false); };

  const saveWhatsapp = async () => {
    if (!uid || !whatsappValid) return;
    try {
      const cleanWa = whatsapp.replace(/[^0-9]/g, "");
      const formattedWa = cleanWa.startsWith("08") ? 62${cleanWa.substring(1)} : cleanWa;
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, { whatsapp: formattedWa, email: authEmail, updatedAt: new Date().toISOString() });
      setMsg("✅ Nomor WhatsApp tersimpan."); setTimeout(() => setMsg(""), 2000);
    } catch (e: any) { setMsg(❌ Gagal menyimpan WhatsApp: ${e?.message || "Coba lagi"}); }
  };

  const doGoogleLogin = async () => { setMsg(""); setLoading(true); try { await loginGoogle(); setMsg("✅ Login Google berhasil."); } catch (e: any) { setMsg(❌ Login Google gagal: ${e?.message || String(e)}); } finally { setLoading(false); } };
  const doGoogleLogout = async () => { setMsg(""); setLoading(true); try { await logoutGoogle(); setMsg("✅ Logout berhasil."); } catch (e: any) { setMsg(❌ Logout gagal: ${e?.message || String(e)}); } finally { setLoading(false); } };
  const doAdminLogin = () => { const email = (authEmail || "").trim().toLowerCase(); if (!email) { setMsg("❌ Kamu belum login Google."); return; } const ok = onAdminLogin(email); if (!ok) setMsg("❌ Email ini tidak ada di whitelist admin."); };

  const formatRupiah = (angka: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);
  const formatWhatsapp = (wa: string) => { const clean = wa.replace(/[^0-9]/g, ""); if (!clean) return ""; return clean.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3"); };
  const copy = async (text: string) => { try { await navigator.clipboard.writeText(text); setMsg("✅ Disalin."); setTimeout(() => setMsg(""), 1200); } catch { setMsg("❌ Gagal menyalin. Browser tidak mendukung clipboard"); } };

  const waText = useMemo(() => {
    const email = (authEmail || "").trim();
    const kodeAkun = uid || "";
    const waUser = whatsapp.replace(/[^0-9]/g, "").trim();
    const kodeDiskon = discountApplied ? discountCode.trim().toUpperCase() : "";
    if (!email) return ["Halo kak 👋", "Login Google dulu sebelum aktivasi premium.", "1) Input Nomor WhatsApp", "2) Input Kode Diskon (Opsional)", "3) Isi Form Konfirmasi Pembayaran", "4) Tunggu admin aktifkan premium"].join("\n");
    const lines = ["Halo Admin TKA SMP 👋", "", "Saya mau aktivasi Premium. Sudah isi Form Konfirmasi ✅", Email Google: ${email}, Kode Akun: ${kodeAkun || "-"}, Nomor WhatsApp: ${waUser || "-"}];
    if (kodeDiskon) { lines.push(Kode Diskon Joiner: ${kodeDiskon}); lines.push(Harga Bayar: ${formatRupiah(finalPrice)}); }
    lines.push("", "Bukti bayar: (saya kirim setelah chat ini, jika diperlukan)", "");
    return lines.join("\n");
  }, [authEmail, uid, whatsapp, discountCode, discountApplied, finalPrice]);

  const waHref = useMemo(() => https://wa.me/${ADMIN_WA_E164}?text=${encodeURIComponent(waText)}, [waText]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Akses Premium <span className="text-blue-500">TKA SMP</span></h1>
        <p className="text-zinc-400 mt-3">Premium membuka latihan yang terkunci. Masa aktif <b>1 tahun</b> sejak admin mengaktifkan akun kamu.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Paket Pembayaran */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          {/* Input Diskon */}
          <div className="mb-6">
            <div className="text-sm font-bold mb-2 text-white">Kode Diskon Joiner (Opsional)</div>
            <div className="flex gap-2">
              <input type="text" value={discountCode} onChange={(e)=>{setDiscountCode(e.target.value); if(discountApplied) setDiscountApplied(false);}} placeholder="TKA-ABC123" className={flex-1 bg-zinc-800 text-white p-3 rounded-lg border ${discountValid?"border-green-500":"border-zinc-700"}} />
              {!discountApplied ? <button onClick={applyDiscountCode} disabled={!discountCode.trim() || !uid || loading} className={px-4 rounded-lg font-black ${uid&&!loading?"bg-green-500 text-black hover:opacity-90":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}}>{loading?"Loading...":"Apply"}</button> : <button onClick={resetDiscountCode} className="px-4 bg-red-500 text-white rounded-lg font-black hover:bg-red-600">Reset</button>}
            </div>
            {discountApplied && <div className="mt-2 text-xs text-green-400">✅ Diskon berhasil! Harga menjadi {formatRupiah(finalPrice)}</div>}
          </div>

          {/* Input WA */}
          <div className="mb-6">
            <div className="text-sm font-bold mb-2 text-white">Nomor WhatsApp (Wajib)</div>
            <input type="tel" value={whatsapp} onChange={(e)=>setWhatsapp(e.target.value)} placeholder="0812-3456-7890" className={w-full bg-zinc-800 text-white p-3 rounded-lg border ${whatsappValid?"border-green-500":"border-zinc-700"}} />
            {whatsapp && !whatsappValid && <div className="mt-2 text-xs text-red-400">❌ Format nomor tidak valid</div>}
            {whatsappValid && <div className="mt-2 text-xs text-green-400">✅ Nomor valid</div>}
          </div>

          {/* Tombol Bayar & Form */}
          <div className="grid gap-3">
            <button onClick={saveWhatsapp} disabled={!whatsappValid || !uid} className={block w-full text-center rounded-xl font-black py-3 ${whatsappValid&&uid?"bg-blue-500 text-black hover:opacity-90":"bg-zinc-700 text-zinc-400 cursor-not-allowed"}}>Simpan Nomor WhatsApp</button>
            <a className={block w-full text-center rounded-xl font-black py-3 ${whatsappValid&&uid?"bg-white text-black hover:opacity-90":"bg-zinc-700 text-zinc-400 pointer-events-none"}} href={LYNK_URL} target="_blank" rel="noreferrer">Bayar Sekarang ({formatRupiah(finalPrice)})</a>
            <a className="block w-full text-center rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90" href={FORM_URL} target="_blank" rel="noreferrer">Isi Form Konfirmasi Pembayaran</a>
            <a className="block w-full text-center rounded-xl bg-green-500 text-black font-black py-3 hover:opacity-90" href={waHref} target="_blank" rel="noreferrer">Chat Admin via WhatsApp</a>
            {msg && <div className="mt-3 text-sm text-blue-300 whitespace-pre-line">{msg}</div>}
          </div>
        </div>

        {/* Login & Info */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="text-lg font-bold mb-4">Login Google (Wajib)</div>
          {!uid ? <button onClick={doGoogleLogin} disabled={loading} className="flex-1 rounded-xl bg-white text-black font-black py-3 hover:opacity-90 disabled:opacity-60">{loading?"Loading...":"Login Google"}</button> : <button onClick={doGoogleLogout} disabled={loading} className="flex-1 rounded-xl bg-zinc-800 text-white font-black py-3 hover:bg-zinc-700 disabled:opacity-60">{loading?"Loading...":"Logout"}</button>}
          <div className="mt-5 rounded-2xl bg-black/30 border border-zinc-800 p-4 text-sm">
            Email: <b>{authEmail||"-"}</b><br/>
            Kode Akun: <b>{uid||"-"}</b><br/>
            Nomor WA: <b className={whatsappValid?"text-green-400":"text-zinc-400"}>{whatsapp?formatWhatsapp(whatsapp):"-"}</b><br/>
            Diskon: <b>{discountApplied?discountCode.toUpperCase():"-"}</b><br/>
            Harga Bayar: <b>{formatRupiah(finalPrice)}</b><br/>
            Status Premium: <b className={premiumActive?"text-green-400":"text-zinc-400"}>{premiumActive?"AKTIF":"BELUM AKTIF"}</b>
          </div>

          {isAdminEmail && <button onClick={doAdminLogin} className="mt-6 w-full rounded-xl font-black py-3 bg-blue-500 text-black hover:opacity-90">Masuk Admin Panel</button>}
          {currentUser?.role==="admin" && <button onClick={()=>{onLogout(); setCurrentPage(Page.HOME);}} className="mt-6 w-full rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 font-black py-3">Logout Admin (App)</button>}
        </div>
      </div>
    </div>
  );
};

export default Premium;