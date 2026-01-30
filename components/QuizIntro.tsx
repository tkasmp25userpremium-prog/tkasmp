import React, { useEffect, useMemo, useState } from "react";
import { Topic } from "../types";
import { loadPremiumState } from "./premiumstore";

interface QuizIntroProps {
  topic: Topic;
  level: number;
  isPremiumUser: boolean;
  onStart: () => void;
  onBack: () => void;
  onUpgrade: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({
  topic,
  level,
  isPremiumUser,
  onStart,
  onBack,
  onUpgrade,
}) => {
  const levelNames = ["Mudah", "Sedang", "Sulit"];

  // ✅ pastikan aman walaupun level/levels tidak sesuai
  const module = (topic as any)?.levels?.[level] || (topic as any)?.levels?.[level - 1] || null;

  // ✅ fallback premium dari localStorage
  const [localPremium, setLocalPremium] = useState(false);
  useEffect(() => {
    const s = loadPremiumState();
    setLocalPremium(!!(s as any)?.isPremium);
  }, []);

  const premiumOK = isPremiumUser || localPremium;

  // ✅ HANYA 2 YANG GRATIS BOLEH MULAI LATIHAN:
  // - Matematika: mtk-1 level 1
  // - Bahasa Indonesia: bi-1 level 1
  const isFreeAllowed =
    ((topic as any)?.id === "mtk-1" && level === 1) ||
    ((topic as any)?.id === "bi-1" && level === 1);

  const isLocked = !premiumOK && !isFreeAllowed;

  const handleStartAction = () => {
    if (isLocked) onUpgrade();
    else onStart();
  };

  // ✅ ANTI-UNCAUGHT: semua yang dipakai .map harus dipastikan array
  const safeBenefits: string[] = useMemo(() => {
    const b = (topic as any)?.benefits;
    return Array.isArray(b) ? b.filter((x: any) => typeof x === "string") : [];
  }, [topic]);

  const safeCoverage: string[] = useMemo(() => {
    const c = (topic as any)?.coverage;
    return Array.isArray(c) ? c.filter((x: any) => typeof x === "string") : [];
  }, [topic]);

  const safePurpose: string = typeof (topic as any)?.purpose === "string" ? (topic as any).purpose : "";
  const safeName: string = typeof (topic as any)?.name === "string" ? (topic as any).name : "Materi";
  const safeIcon = (topic as any)?.icon ?? "📘";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in zoom-in duration-500">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali ke Daftar Materi
      </button>

      <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="text-5xl mb-6">{safeIcon}</div>
              <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight">
                {safeName.toUpperCase()}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-black tracking-widest text-sm uppercase">TKA SMP</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="text-zinc-500 font-bold text-sm">Persiapan Intensif TKA SMP</span>
              </div>

              <div className="mt-4 text-xs text-zinc-500">
                Status akses:{" "}
                <b className={premiumOK ? "text-green-400" : "text-yellow-400"}>
                  {premiumOK ? "PREMIUM" : "GRATIS"}
                </b>
              </div>
            </div>

            <div className="bg-black/40 border border-zinc-800 p-6 rounded-3xl min-w-[200px] text-center md:text-left">
              <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">
                Status Latihan
              </div>
              <div className="text-2xl font-black text-white">{levelNames[level - 1] || "Level"}</div>
              <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-2">
                {(module?.questionCount ?? 0) as any} Soal Tersedia
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              {!!safePurpose && (
                <section>
                  <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-blue-500"></span> Tujuan Materi
                  </h3>
                  <p className="text-zinc-400 leading-relaxed italic text-sm">"{safePurpose}"</p>
                </section>
              )}

              {safeBenefits.length > 0 && (
                <section>
                  <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-green-500"></span> Manfaat Mempelajari
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {safeBenefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                      >
                        <span className="text-green-500 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-zinc-300 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-purple-500"></span> Cakupan Ujian
                </h3>

                {safeCoverage.length > 0 ? (
                  <ul className="grid grid-cols-1 gap-y-3">
                    {safeCoverage.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-zinc-400 text-xs group">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-xs text-zinc-500 italic">Cakupan belum tersedia.</div>
                )}
              </section>

              <section className="p-6 bg-black/40 rounded-3xl border border-zinc-800">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  Aturan Latihan
                </h3>
                <ul className="space-y-3 text-xs text-zinc-500">
                  <li className="flex gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    Siswa wajib menjawab benar untuk lanjut ke soal berikutnya.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 font-bold">•</span>
                    Setiap soal memiliki pembahasan logis.
                  </li>
                  {isLocked && (
                    <li className="flex gap-3 text-yellow-500 font-bold animate-pulse">
                      <span className="text-yellow-500 font-bold">!</span>
                      Akses Premium diperlukan untuk latihan ini.
                    </li>
                  )}
                </ul>
              </section>
            </div>
          </div>

          <button
            onClick={handleStartAction}
            className={`w-full py-6 font-black text-xl rounded-[1.5rem] transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-2xl flex items-center justify-center gap-4 ${
              isLocked
                ? "bg-zinc-800 text-zinc-500 hover:bg-zinc-700"
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-blue-500/20"
            }`}
          >
            {isLocked ? "Upgrade Premium untuk Mulai" : "Mulai Latihan Sekarang"}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;
