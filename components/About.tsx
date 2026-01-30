import React from 'react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in zoom-in duration-500">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-bold"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </button>

      <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Tentang Kami
          </h1>

          <p className="text-zinc-400 leading-relaxed mb-8">
            Platform <span className="text-white font-bold">Latihan TKA SMP Terstruktur</span> dibuat untuk membantu siswa
            belajar lebih terarah melalui materi yang ringkas, latihan bertahap, dan simulasi yang menyerupai ujian.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-3xl bg-black/40 border border-zinc-800">
              <h2 className="text-white font-black mb-2 text-lg">Misi</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Membantu siswa SMP meningkatkan kesiapan menghadapi TKA melalui latihan yang terstruktur, jelas, dan mudah dipahami.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-black/40 border border-zinc-800">
              <h2 className="text-white font-black mb-2 text-lg">Cara Belajar</h2>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc pl-5">
                <li>Baca pengantar materi (cakupan ujian) dulu.</li>
                <li>Kerjakan latihan bertahap sesuai level.</li>
                <li>Baca pembahasan singkat untuk memahami konsep.</li>
                <li>Lakukan simulasi untuk evaluasi kesiapan.</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
            <h3 className="text-white font-black mb-2">Masa Aktif Premium</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Akses premium berlaku <span className="text-white font-bold">1 tahun</span> sejak pembayaran berhasil
              dan memberikan akses latihan terkunci sesuai paket.
            </p>
          </div>

          <div className="mt-10 text-zinc-500 text-xs">
            Catatan: Konten disusun berdasarkan kisi-kisi TKA SMP dan dibuat untuk latihan pembelajaran.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
