import React from 'react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const waBase = 'https://wa.me/628981091600';

  const waLinkWithMessage = (message: string) => {
    return `${waBase}?text=${encodeURIComponent(message)}`;
  };

  // Email ditampilkan aman (anti-spam sederhana)
  const emailDisplay = 'tkasmp25@gmail.com';

  const templateLogin = [
    'Halo Admin TKA SMP, saya butuh bantuan (LOGIN / PREMIUM / PEMBAYARAN).',
    '',
    'Email akun (Google): ',
    'Nomor WhatsApp: ',
    'Kendala: (salah email / premium belum aktif / konfirmasi pembayaran)',
    'Waktu kejadian: ',
    'Bukti bayar (jika ada): ',
    '',
    'Mohon bantu cek dan aktifkan ya. Terima kasih.'
  ].join('\n');

  const templateSoal = [
    'Halo Admin TKA SMP, saya ingin lapor kendala (SOAL / APLIKASI).',
    '',
    'Email akun (Google): ',
    'Nomor WhatsApp: ',
    'Materi/Modul/Level: (contoh: Operasi Bilangan Bulat Level 1 / Simulasi B. Indo Level 3)',
    'Kendala: ',
    'Perangkat: (HP Android / iPhone / Laptop)',
    'Browser: (Chrome / Safari / dll)',
    'Screenshot (jika ada): ',
    '',
    'Terima kasih.'
  ].join('\n');

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in duration-500">
      <button
        onClick={onBack}
        type="button"
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

        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Kontak</h1>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            Pilih jenis kendala di bawah ini supaya respon lebih cepat.
            Nomor WhatsApp tidak ditampilkan untuk menghindari spam—cukup klik tombol.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1) Kendala Login / Premium / Pembayaran */}
            <div className="p-6 rounded-3xl bg-black/40 border border-zinc-800">
              <div className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-2">
                Kendala Login / Premium
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Untuk kasus tidak bisa login, premium belum aktif, atau konfirmasi pembayaran.
              </p>

              <a
                href={waLinkWithMessage(templateLogin)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl bg-green-600 text-white font-black hover:bg-green-500 transition-colors"
              >
                Chat WA (Login/Premium)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <p className="text-zinc-500 text-xs mt-4">Jam respon: 09.00 - 21.00 WIB.</p>
            </div>

            {/* 2) Kendala Soal / Aplikasi */}
            <div className="p-6 rounded-3xl bg-black/40 border border-zinc-800">
              <div className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-2">
                Kendala Soal / Aplikasi
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Untuk kasus soal tidak muncul, error saat mulai, level terkunci padahal premium, atau bug tampilan.
              </p>

              <a
                href={waLinkWithMessage(templateSoal)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl bg-green-600 text-white font-black hover:bg-green-500 transition-colors"
              >
                Chat WA (Kendala Soal)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <p className="text-zinc-500 text-xs mt-4">Tips: lebih cepat kalau kirim screenshot.</p>
            </div>
          </div>

          {/* Email cadangan + template ditampilkan (manual copy) */}
          <div className="mt-10 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
            <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">
              Email (Cadangan)
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-2">
              Jika WhatsApp tidak bisa digunakan, kirim email ke:
            </p>
            <div className="text-white font-black text-lg mb-6 select-text">
              {emailDisplay}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-3xl bg-black/40 border border-zinc-800">
                <div className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-3">
                  Template Email — Login/Premium
                </div>
                <pre className="text-zinc-300 text-xs whitespace-pre-wrap leading-relaxed select-text">
                  {templateLogin}
                </pre>
                <p className="text-zinc-500 text-xs mt-3">
                  Cara pakai: blok teks → copy → paste ke email.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-black/40 border border-zinc-800">
                <div className="text-xs font-black text-zinc-600 uppercase tracking-widest mb-3">
                  Template Email — Kendala Soal
                </div>
                <pre className="text-zinc-300 text-xs whitespace-pre-wrap leading-relaxed select-text">
                  {templateSoal}
                </pre>
                <p className="text-zinc-500 text-xs mt-3">
                  Tips: sertakan screenshot bila ada.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-zinc-500 text-xs">
            Catatan: Fitur “salin otomatis” bisa tidak jalan di mode preview/iframe. Karena itu template ditampilkan agar bisa dicopy manual.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
