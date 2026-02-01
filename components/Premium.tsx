import React, { useEffect, useMemo, useState } from "react";
import { Page, User } from "../types";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {
  loginGoogle,
  logoutGoogle,
  loadPremiumState,
  refreshMyPremiumState,
  subscribeMyPremiumState,
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

const LYNK_URL = "http://lynk.id/juarapintar/9x93l3r8zj7k";
const FORM_URL = "https://forms.gle/aqaVUgyY36edj89G7";
const ADMIN_WA_E164 = "628981091600";
const DISCOUNT_AMOUNT = 10000; 
const ORIGINAL_PRICE = 129000; 
const DISCOUNTED_PRICE = ORIGINAL_PRICE - DISCOUNT_AMOUNT; 

const Premium: React.FC<Props> = ({ currentUser, onLogout, setCurrentPage, onAdminLogin, adminEmails }) => {
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [uid, setUid] = useState<string>("");
  const [authEmail, setAuthEmail] = useState<string>("");
  const [st, setSt] = useState(() => loadPremiumState());
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [whatsappValid, setWhatsappValid] = useState<boolean>(false);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountValid, setDiscountValid] = useState<boolean>(false);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [currentDevice, setCurrentDevice] = useState<string>("");

  const isAdminEmail = useMemo(() => {
    const e = (authEmail || "").trim().toLowerCase();
    return adminEmails.map((x) => x.toLowerCase()).includes(e);
  }, [authEmail, adminEmails]);

  const premiumActive = useMemo(() => {
    return !!st.isPremium && (st.activeUntil || 0) > Date.now();
  }, [st]);

  // DETEKSI DEVICE
  useEffect(() => {
    const deviceId = ${navigator.userAgent}-${Math.random().toString(36).substring(2, 7)};
    setCurrentDevice(deviceId);
  }, []);

  // LOGIN & ANTI-SHARING
  useEffect(() => {
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
          devices: [currentDevice],
          createdAt: new Date().toISOString(),
        }, { merge: true });
      } else {
        const data = userSnap.data() as any;
        const devices: string[] = data.devices || [];
        if (!devices.includes(currentDevice)) {
          // Tambahkan device baru & auto logout device lama
          await updateDoc(userRef, { devices: [currentDevice], updatedAt: new Date().toISOString() });
        }
      }

      try {
        const latest = await refreshMyPremiumState();
        setSt(latest);
      } catch (e: any) {
        setMsg(❌ ${e?.message || String(e)});
      }

      const unsubUser = subscribeMyPremiumState(
        (next) => setSt(next),
        (err) => setMsg(❌ Firestore listen error: ${err?.message || String(err)})
      );

      return () => unsubUser();
    });

    return () => unsubAuth();
  }, [currentDevice]);

  // VALIDASI WHATSAPP
  useEffect(() => {
    const clean = whatsapp.replace(/[^0-9]/g, "");
    const validIndonesia = /^(08|628)\d{8,12}$/.test(clean);
    setWhatsappValid(validIndonesia);
  }, [whatsapp]);

  const finalPrice = useMemo(() => discountApplied ? DISCOUNTED_PRICE : ORIGINAL_PRICE, [discountApplied]);

  const doGoogleLogin = async () => {
    setMsg(""); setLoading(true);
    try { await loginGoogle(); setMsg("✅ Login Google berhasil."); } 
    catch (e: any) { setMsg(❌ Login Google gagal: ${e?.message || String(e)}); } 
    finally { setLoading(false); }
  };

  const doGoogleLogout = async () => {
    setMsg(""); setLoading(true);
    try { await logoutGoogle(); setMsg("✅ Logout berhasil."); } 
    catch (e: any) { setMsg(❌ Logout gagal: ${e?.message || String(e)}); } 
    finally { setLoading(false); }
  };

  const doAdminLogin = () => {
    const email = (authEmail || "").trim().toLowerCase();
    if (!email) { setMsg("❌ Kamu belum login Google."); return; }
    const ok = onAdminLogin(email);
    if (!ok) setMsg("❌ Email ini tidak ada di whitelist admin.");
  };

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

  const applyDiscountCode = async () => {
    const cleanCode = discountCode.trim();
    if (!cleanCode) { setMsg("❌ Masukkan kode diskon terlebih dahulu."); return; }
    setLoading(true);
    try {
      const validation = await validateJoinCode(cleanCode);
      if (!validation.isValid) { setMsg(❌ ${validation.message}); return; }
      if (uid) { const userRef = doc(db, "users", uid); await setDoc(userRef, { joinCode: validation.joinCode, updatedAt: new Date().toISOString() }, { merge: true }); }
      setDiscountApplied(true); setDiscountValid(true); setMsg(✅ Kode diskon ${validation.joinCode} berhasil! Diskon Rp10.000);
    } catch (e: any) { setMsg(❌ Error: ${e?.message || "Coba lagi"}); } finally { setLoading(false); }
  };

  const resetDiscountCode = () => { setDiscountCode(""); setDiscountApplied(false); setDiscountValid(false); };

  const formatRupiah = (angka: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);

  const waText = useMemo(() => {
    const email = (authEmail || "").trim();
    const kodeAkun = (uid || "").trim();
    const waUser = whatsapp.replace(/[^0-9]/g, "").trim();
    const kodeDiskon = discountApplied ? discountCode.trim().toUpperCase() : "";
    if (!email) {
      return ["Halo kak 👋","Login Google dulu","Input WA & kode diskon","Isi form konfirmasi pembayaran","Admin akan aktifkan premium"].join("\n");
    }
    const lines = [Halo Admin 👋,Email: ${email} , Kode Akun: ${kodeAkun || "-"}, Nomor WA: ${waUser || "-"}];
    if (kodeDiskon) { lines.push(Kode Diskon: ${kodeDiskon}); lines.push(Harga Bayar: ${formatRupiah(finalPrice)}); }
    return lines.join("\n");
  }, [authEmail, uid, whatsapp, discountCode, discountApplied, finalPrice]);

  const waHref = useMemo(() => https://wa.me/${ADMIN_WA_E164}?text=${encodeURIComponent(waText)}, [waText]);
  const copy = async (text: string) => { try { await navigator.clipboard.writeText(text); setMsg("✅ Disalin."); setTimeout(() => setMsg(""), 1200); } catch { setMsg("❌ Gagal menyalin"); } };
  const formatWhatsapp = (wa: string) => { const clean = wa.replace(/[^0-9]/g, ""); if (!clean) return ""; return clean.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3"); };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-10"><h1 className="text-4xl md:text-6xl font-black tracking-tight">Akses Premium <span className="text-blue-500">TKA SMP</span></h1></div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Paket */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="mb-3 text-sm text-zinc-400 line-through font-semibold">Harga normal Rp199.000</div>
          <div className="text-5xl font-black text-white leading-tight">{formatRupiah(finalPrice)}</div>
          <input type="text" placeholder="TKA-XXXXXX" value={discountCode} onChange={(e)=>{setDiscountCode(e.target.value); if(discountApplied) setDiscountApplied(false)}} className={flex-1 bg-zinc-800 text-white p-3 rounded-lg border ${discountValid ? "border-green-500":"border-zinc-700"} focus:outline-none focus:ring-2 focus:ring-blue-500} disabled={!uid}/>
          <button onClick={applyDiscountCode} disabled={!uid||!discountCode.trim()||loading} className="mt-2 px-4 py-2 bg-green-500 text-black font-black rounded-lg">{loading?"Loading...":"Apply"}</button>
          <button onClick={resetDiscountCode} className="mt-2 px-4 py-2 bg-red-500 text-white font-black rounded-lg">Reset</button>
          <input type="tel" value={whatsapp} onChange={(e)=>setWhatsapp(e.target.value)} placeholder="0812-3456-7890" className={w-full bg-zinc-800 text-white p-3 rounded-lg border ${whatsappValid ? "border-green-500":"border-zinc-700"} focus:outline-none focus:ring-2 focus:ring-blue-500} />
          <button onClick={saveWhatsapp} disabled={!whatsappValid||!uid} className="mt-2 w-full bg-blue-500 text-black font-black py-3 rounded-xl">Simpan Nomor WhatsApp</button>
          <a className="block mt-2 w-full text-center rounded-xl bg-white text-black font-black py-3 hover:opacity-90" href={LYNK_URL} target="_blank" rel="noreferrer">Bayar Sekarang ({formatRupiah(finalPrice)})</a>
          <a className="block mt-2 w-full text-center rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90" href={FORM_URL} target="_blank" rel="noreferrer">Isi Form Konfirmasi Pembayaran</a>
          <a className="block mt-2 w-full text-center rounded-xl bg-green-500 text-black font-black py-3 hover:opacity-90" href={waHref} target="_blank" rel="noreferrer">Chat Admin WA</a>
        </div>

        {/* Login */}
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          {!uid ? <button onClick={doGoogleLogin} disabled={loading} className="w-full py-3 bg-white text-black font-black rounded-xl">{loading?"Loading...":"Login Google"}</button> :
          <button onClick={doGoogleLogout} disabled={loading} className="w-full py-3 bg-zinc-800 text-white font-black rounded-xl">{loading?"Loading...":"Logout"}</button>}

          {isAdminEmail && <button onClick={doAdminLogin} className="mt-4 w-full py-3 bg-blue-500 text-black font-black rounded-xl">Masuk Admin Panel</button>}
        </div>
      </div>

      {msg && <div className="mt-3 text-sm text-blue-300 whitespace-pre-line">{msg}</div>}
    </div>
  );
};

export default Premium;