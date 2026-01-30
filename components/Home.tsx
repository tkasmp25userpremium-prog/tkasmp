
import React from 'react';

interface HomeProps {
  onStartFree: () => void;
  onGoPremium: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartFree, onGoPremium }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
          Edisi Persiapan 
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Latihan TKA SMP <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Terstruktur.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Berdasarkan kisi-kisi resmi & pembahasan lengkap. Tingkatkan skor akademismu dengan ribuan soal terkurasi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onStartFree}
            className="px-10 py-4 bg-white text-black font-bold text-lg rounded-2xl hover:bg-zinc-200 transition-all transform hover:scale-105"
          >
            Mulai Latihan Soal
          </button>
          <button 
            onClick={onGoPremium}
            className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Akses Premium
          </button>
        </div>
      </div>

      {/* Kisi-Kisi Section */}
      <div className="space-y-12 mb-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Kisi-Kisi Resmi TKA SMP & Latihan Terstruktur</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* SEKSI 1 & 3 — Pengantar & Metodologi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 hover:border-blue-500/20 transition-all">
            <h3 className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4">SEKSI 1 — Apa itu TKA SMP</h3>
            <p className="text-white text-lg font-bold mb-4">Tes Kompetensi Akademik untuk SMP</p>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                Mengukur kemampuan berpikir & pemahaman konsep mendasar.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                Fokus pada kemampuan bernalar secara logis.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                Menguji kecakapan dalam memahami bacaan kompleks & memecahkan masalah.
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 hover:border-purple-500/20 transition-all">
            <h3 className="text-purple-400 font-black text-xs uppercase tracking-widest mb-4">SEKSI 3 — Cara soal dirancang</h3>
            <p className="text-white text-lg font-bold mb-4">Metodologi Berbasis Konteks</p>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">•</span>
                Soal dirancang berbasis konteks kehidupan sehari-hari (Real-world scenarios).
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">•</span>
                Menguji proses berpikir kritis, bukan sekadar hafalan rumus.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">•</span>
                Satu soal integratif dapat menguji beberapa kompetensi sekaligus.
              </li>
            </ul>
          </div>
        </div>

        {/* SEKSI 2 — Detail Kisi-kisi */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800">
          <h3 className="text-zinc-500 font-black text-xs uppercase tracking-[0.3em] mb-8 text-center">SEKSI 2 — Kisi-kisi TKA SMP</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center font-bold">🧮</div>
                <h4 className="text-xl font-black text-white">MATEMATIKA</h4>
              </div>
              <ul className="space-y-4">
                {['Bilangan & Operasi', 'Pemecahan masalah kontekstual', 'Penalaran logis', 'Interpretasi tabel & grafik', 'Aljabar & Geometri dasar'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-400 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-all"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center font-bold">📖</div>
                <h4 className="text-xl font-black text-white">BAHASA INDONESIA</h4>
              </div>
              <ul className="space-y-4">
                {['Membaca pemahaman', 'Ide pokok & simpulan', 'Makna kata & kalimat', 'Informasi tersurat & tersirat'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-400 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-150 transition-all"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SEKSI 4 — Manfaat */}
        <div className="bg-blue-600/5 border border-blue-500/10 p-8 rounded-[2rem]">
          <h3 className="text-blue-500 font-black text-xs uppercase tracking-widest mb-6 text-center">SEKSI 4 — Manfaat memahami kisi-kisi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Fokus belajar lebih efektif dan efisien.',
              'Menghindari belajar secara acak/tidak terarah.',
              'Memudahkan orang tua dalam mendampingi.',
              'Membangun rasa percaya diri & kurangi cemas.'
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mb-3 text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-8">
          <button 
            onClick={onStartFree}
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-4 mx-auto"
          >
            Mulai Latihan Soal
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-900 pt-16">
        {[
          { title: 'Terupdate', desc: 'Materi sesuai kurikulum terbaru SMP.', icon: '📚' },
          { title: 'Pembahasan', desc: 'Setiap soal dilengkapi penjelasan logis.', icon: '💡' },
          { title: 'Simulasi', desc: 'Timer dan antarmuka mirip ujian asli.', icon: '⏱️' },
        ].map((feat, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-left hover:bg-zinc-800/50 transition-colors">
            <div className="text-3xl mb-4">{feat.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
