// Premium.tsx
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
import { v4 as uuidv4 } from "uuid";

type Props = {
  onLogin: (wa: string, pass: string) => boolean;
  currentUser: User | null;
  onLogout: () => void;
  setCurrentPage: (p: Page) => void;
  onAdminLogin: (email: string) => boolean;
  adminEmails: string[];
  premiumState?: any;
};

const LYNK_URL = "http://lynk.id/juarapintar/9x93l3r8zj7";
const FORM_URL = "https://forms.gle/aqaVUgyY36edj89G7";
const ADMIN_WA_E164 = "628981091600";
const DISCOUNT_AMOUNT = 10000;
const ORIGINAL_PRICE = 129000;
const DISCOUNTED_PRICE = ORIGINAL_PRICE - DISCOUNT_AMOUNT;

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
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [whatsappValid, setWhatsappValid] = useState<boolean>(false);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);

  const isAdminEmail = useMemo(() => {
    const e = (authEmail || "").trim().toLowerCase();
    return adminEmails.map((x) => x.toLowerCase()).includes(e);
  }, [authEmail, adminEmails]);

  const premiumActive = useMemo(() => !!st.isPremium && (st.activeUntil || 0) > Date.now(), [st]);

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
      let deviceId = uuidv4();

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid,
          email,
          createdAt: new Date().toISOString(),
          currentDeviceId: deviceId,
          lastLogin: new Date().toISOString(),
        });
      } else {
        const data = userSnap.data() as any;
        if (data.currentDeviceId && data.currentDeviceId !== deviceId) {
          await updateDoc(userRef, {
            currentDeviceId: deviceId,
            lastLogin: new Date().toISOString(),
          });
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
  }, []);

  useEffect(() => {
    const clean = whatsapp.replace(/[^0-9]/g, "");
    setWhatsappValid(/^(08|628)\d{8,12}$/.test(clean));
  }, [whatsapp]);

  const finalPrice = useMemo(() => (discountApplied ? DISCOUNTED_PRICE : ORIGINAL_PRICE), [discountApplied]);

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
    if (!onAdminLogin(email)) setMsg("❌ Email ini tidak ada di whitelist admin.");
  };

  const saveWhatsapp = async () => {
    if (!uid || !whatsappValid) return;
    try {
      const cleanWa = whatsapp.replace(/[^0-9]/g, "");
      const formattedWa = cleanWa.startsWith("08") ? 62${cleanWa.substring(1)} : cleanWa;
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        whatsapp: formattedWa,
        email: authEmail,
        updatedAt: new Date().toISOString(),
      });
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
      if (uid) {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, { joinCode: validation.joinCode, updatedAt: new Date().toISOString() }, { merge: true });
      }
      setDiscountApplied(true); setMsg(✅ Kode diskon ${validation.joinCode} berhasil!);
    } catch (e: any) { setMsg(❌ Error: ${e?.message || "Coba lagi"}); }
    finally { setLoading(false); }
  };

  const resetDiscountCode = () => { setDiscountCode(""); setDiscountApplied(false); };

  const formatRupiah = (angka: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);

  const formatWhatsapp = (wa: string) => { const clean = wa.replace(/[^0-9]/g, ""); return clean ? clean.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3") : ""; };

  const waText = useMemo(() => {
    const email = (authEmail || "").trim();
    const kodeAkun = (uid || "").trim();
    const waUser = whatsapp.replace(/[^0-9]/g, "").trim();
    const kodeDiskon = discountApplied ? discountCode.trim().toUpperCase() : "";
    if (!email) {
      return [
        "Halo kak 👋",
        "",
        "Login Google dulu, input WA, dan isi form konfirmasi pembayaran",
      ].join("\n");
    }
    const lines = [
      "Halo Admin TKA SMP 👋",
      Email Google: ${email},
      Kode Akun: ${kodeAkun || "-"},
      Nomor WhatsApp: ${waUser || "-"},
    ];
    if (kodeDiskon) { lines.push(Kode Diskon Joiner: ${kodeDiskon}); lines.push(Harga Bayar: ${formatRupiah(finalPrice)}); }
    lines.push("Bukti bayar: (saya kirim setelah chat ini jika diperlukan)");
    return lines.join("\n");
  }, [authEmail, uid, whatsapp, discountCode, discountApplied, finalPrice]);

  const waHref = useMemo(() => https://wa.me/${ADMIN_WA_E164}?text=${encodeURIComponent(waText)}, [waText]);

  const copy = async (text: string) => { try { await navigator.clipboard.writeText(text); setMsg("✅ Disalin."); setTimeout(() => setMsg(""), 1200); } catch { setMsg("❌ Gagal menyalin."); } };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Akses Premium TKA SMP</h1>
        <p className="text-zinc-400 mt-3">Premium membuka latihan yang terkunci. Masa aktif 1 tahun sejak admin mengaktifkan akun.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold">Paket Premium TKA SMP</div>
            <div className="text-xs font-black bg-blue-500 text-black px-3 py-1 rounded-full">AKSES PENUH</div>
          </div>
          <div className="mb-3">
            <div className="text-sm text-zinc-400 line-through font-semibold">Harga normal Rp199.000</div>
            <div className="text-5xl font-black text-white leading-tight">{formatRupiah(finalPrice)}</div>
          </div>
          <div className="mb-6">
            <input type="text" value={discountCode} onChange={(e) => { setDiscountCode(e.target.value); if(discountApplied) setDiscountApplied(false); }} placeholder="TKA-ABC123" className="flex-1 bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={applyDiscountCode} disabled={!uid || !discountCode.trim() || loading} className="px-4 rounded-lg font-black bg-green-500 text-black hover:opacity-90">{loading ? "Loading..." : "Apply"}</button>
          </div>
          <div className="mb-6">
            <input type="tel" value={whatsapp} onChange={(e)=>setWhatsapp(e.target.value)} placeholder="0812-3456-7890" className="w-full bg-zinc-800 text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {whatsapp && !whatsappValid && <div className="mt-2 text-xs text-red-400">❌ Format nomor tidak valid</div>}
            {whatsappValid && <div className="mt-2 text-xs text-green-400">✅ Nomor valid</div>}
          </div>
          <div className="grid gap-3">
            <button onClick={saveWhatsapp} disabled={!whatsappValid || !uid} className="block w-full text-center rounded-xl font-black py-3 bg-blue-500 text-black hover:opacity-90">Simpan Nomor WhatsApp</button>
            <a className="block w-full text-center rounded-xl font-black py-3 bg-white text-black hover:opacity-90" href={LYNK_URL} target="_blank" rel="noreferrer">Bayar Sekarang ({formatRupiah(finalPrice)})</a>
            <a className="block w-full text-center rounded-xl bg-blue-500 text-black font-black py-3 hover:opacity-90" href={FORM_URL} target="_blank" rel="noreferrer">Isi Form Konfirmasi Pembayaran</a>
            <a className="block w-full text-center rounded-xl bg-green-500 text-black font-black py-3 hover:opacity-90" href={waHref} target="_blank" rel="noreferrer">Chat Admin via WhatsApp</a>
          </div>
        </div>

        <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8">
          <div className="text-lg font-bold mb-4">Login Google (Wajib)</div>
          <div className="text-sm text-zinc-400 mb-4">Login sebelum bayar supaya sistem mengenali akun kamu dan admin bisa aktifkan Premium.</div>
          {!uid ? (
            <button onClick={doGoogleLogin} disabled={loading} className="flex-1 rounded-xl bg-white text-black font-black py-3 hover:opacity-90">{loading ? "Loading..." : "Login Google"}</button>
          ) : (
            <button onClick={doGoogleLogout} disabled={loading} className="flex-1 rounded-xl bg-zinc-800 text-white font-black py-3 hover:bg-zinc-700">{loading ? "Loading..." : "Logout"}</button>
          )}
          <div className="mt-5 rounded-2xl bg-black/30 border border-zinc-800 p-4">
            <div className="text-sm font-bold mb-2">Informasi Akun Kamu</div>
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm text-zinc-300">
                Email Google: <b>{authEmail || "-"}</b><br/>
                Kode Akun: <b>{uid || "-"}</b><br/>
                Nomor WhatsApp: <b className={whatsappValid ? "text-green-400":"text-zinc-400"}>{whatsapp ? formatWhatsapp(whatsapp) : "-"}</b><br/>
                Harga Bayar: <b>{discountApplied ? "Rp"+DISCOUNTED_PRICE : "Rp"+ORIGINAL_PRICE}</b><br/>
                Status Premium: <b className={premiumActive ? "text-green-400":"text-zinc-400"}>{premiumActive ? "AKTIF" : "BELUM AKTIF"}</b>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={()=>copy(authEmail||"")} disabled={!authEmail} className="rounded-xl px-3 py-2 text-xs font-black bg-zinc-800 hover:bg-zinc-700">Copy Email</button>
                <button onClick={()=>copy(uid||"")} disabled={!uid} className="rounded-xl px-3 py-2 text-xs font-black bg-zinc-800 hover:bg-zinc-700">Copy Kode</button>
                <button onClick={()=>copy(whatsapp||"")} disabled={!whatsapp} className="rounded-xl px-3 py-2 text-xs font-black bg-zinc-800 hover:bg-zinc-700">Copy WA</button>
              </div>
            </div>
            {msg && <div className="mt-3 text-sm text-blue-300 whitespace-pre-line">{msg}</div>}
          </div>
          {isAdminEmail && (
            <div className="mt-6">
              <button onClick={doAdminLogin} className="w-full rounded-xl font-black py-3 bg-blue-500 text-black hover:opacity-90">Masuk Admin Panel</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Premium;