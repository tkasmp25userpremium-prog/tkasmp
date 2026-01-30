
import React, { useState, useMemo } from 'react';
import { Topic } from '../types';

interface SubjectPageProps {
  title: string;
  isPremiumUser: boolean;
  onUpgrade: () => void;
  onStartQuiz: (topic: Topic, level: number) => void;
}

const SubjectPage: React.FC<SubjectPageProps> = ({ title, isPremiumUser, onUpgrade, onStartQuiz }) => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  const subjectData: Record<string, Topic[]> = useMemo(() => {
    // Definisi data untuk Matematika
    const mathTopics: Topic[] = [
      {
        id: 'mtk-1',
        name: 'Bilangan & Aljabar',
        icon: '🔢',
        purpose: selectedLevel === 1 
          ? 'Membiasakan siswa memahami konsep bilangan bulat, Melatih ketelitian dalam operasi hitung dasar, serta Mempersiapkan dasar numerasi sebelum masuk materi aljabar.'
          : selectedLevel === 2
          ? 'Melatih kemampuan berpikir aljabar, Membiasakan siswa menyusun dan menyelesaikan persamaan, serta Menghubungkan matematika dengan masalah sehari-hari.'
          : 'Mengembangkan pemahaman aljabar tingkat lanjut, Melatih analisis grafik dan persamaan, serta Persiapan menghadapi soal HOTS TKA SMP.',
        benefits: selectedLevel === 1
          ? [
              'Membantu siswa menguasai soal hitung dasar TKA SMP.',
              'Menjadi fondasi penting untuk materi persamaan dan fungsi.',
              'Meningkatkan kepercayaan diri siswa saat ujian.'
            ]
          : selectedLevel === 2
          ? [
              'Membantu siswa menghadapi soal aljabar TKA SMP.',
              'Meningkatkan logika dan analisis.',
              'Persiapan menuju fungsi dan aljabar tingkat lanjut.'
            ]
          : [
              'Membantu siswa menghadapi soal sulit TKA.',
              'Meningkatkan kemampuan analisis dan penalaran.',
              'Membekali siswa untuk jenjang berikutnya.'
            ],
        coverage: selectedLevel === 1
          ? [
              'Bilangan bulat positif and negatif',
              'Operasi penjumlahan and pengurangan bilangan bulat',
              'Operasi perkalian and pembagian bilangan bulat',
              'Sifat operasi hitung sederhana',
              'Soal cerita bilangan bulat tingkat dasar'
            ]
          : selectedLevel === 2
          ? [
              'Bentuk persamaan linear satu variabel',
              'Menyelesaikan persamaan linear',
              'Substitusi and penyederhanaan',
              'Soal cerita persamaan linear',
              'Menentukan nilai variabel',
              'Operasi aljabar tingkat menengah'
            ]
          : [
              'Bentuk umum fungsi kuadrat',
              'Grafik fungsi kuadrat',
              'Menentukan akar and titik puncak',
              'Analisis masalah fungsi kuadrat',
              'Menentukan sifat fungsi kuadrat',
              'Soal kontekstual tingkat tinggi'
            ],
        levels: {
          1: { 
            id: 'm1-l1', 
            title: 'Operasi Bilangan Bulat', 
            description: 'Level ini difokuskan untuk membangun dasar numerasi yang kuat. Konsep aljabar (variabel & persamaan) akan dipelajari bertahap pada Level 2 dan Level 3.', 
            questionCount: 50 
          },
          2: { 
            id: 'm1-l2', 
            title: 'Persamaan Linear Satu Variabel', 
            description: 'Mempelajari cara menyusun dan menyelesaikan persamaan untuk mencari nilai variabel yang tidak diketahui.', 
            questionCount: 50 
          },
          3: { 
            id: 'm1-l3', 
            title: 'Fungsi Kuadrat Kompleks', 
            description: 'Analisis mendalam mengenai grafik fungsi kuadrat, titik optimum, dan penyelesaian masalah kontekstual tingkat tinggi.', 
            questionCount: 50 
          },
        }
      },
      {
        id: 'mtk-2',
        name: 'Geometri & Pengukuran',
        icon: '📐',
        purpose: selectedLevel === 1
          ? 'Mengenal berbagai bentuk bangun datar, Memahami konsep keliling dan luas, serta Melatih kemampuan visual dan perhitungan dasar.'
          : selectedLevel === 2
          ? 'Memahami hubungan perbandingan dalam geometri, Melatih analisis bentuk dan ukuran, serta Menghubungkan konsep geometri dengan aljabar sederhana.'
          : 'Menguasai perhitungan volume bangun ruang, Melatih kemampuan analisis spasial, serta Mengembangkan pemahaman geometri lanjutan.',
        benefits: selectedLevel === 1
          ? [
              'Membantu siswa memahami bentuk geometri di sekitar.',
              'Menjadi dasar untuk geometri tingkat lanjut.',
              'Mempermudah siswa mengerjakan soal TKA SMP dasar.'
            ]
          : selectedLevel === 2
          ? [
              'Membantu siswa menyelesaikan soal geometri menengah.',
              'Meningkatkan kemampuan berpikir logis.',
              'Persiapan menghadapi soal TKA SMP tingkat sedang.'
            ]
          : [
              'Membantu siswa menghadapi soal sulit TKA SMP.',
              'Meningkatkan kemampuan pemecahan masalah.',
              'Membekali siswa untuk jenjang pendidikan berikutnya.'
            ],
        coverage: selectedLevel === 1
          ? [
              'Pengenalan bangun datar (persegi, persegi panjang, segitiga, lingkaran)',
              'Sifat-sifat bangun datar',
              'Keliling bangun datar sederhana',
              'Luas bangun datar sederhana',
              'Pengenalan sudut dasar',
              'Mengidentifikasi bangun datar',
              'Menghitung keliling and luas sederhana',
              'Soal geometri dasar'
            ]
          : selectedLevel === 2
          ? [
              'Konsep kesebangunan bangun datar',
              'Konsep kekongruenan bangun datar',
              'Perbandingan sisi dan sudut',
              'Menentukan ukuran menggunakan rasio',
              'Soal cerita kesebangunan',
              'Menentukan bangun sebangun dan kongruen',
              'Menghitung panjang sisi dengan perbandingan',
              'Soal kontekstual geometri'
            ]
          : [
              'Tabung, kerucut, dan bola',
              'Rumus volume bangun ruang sisi lengkung',
              'Hubungan jari-jari, diameter, dan tinggi',
              'Soal kontekstual volume',
              'Analisis masalah geometri tingkat lanjut',
              'Menghitung volume tabung, kerucut, dan bola',
              'Soal cerita bangun ruang sisi lengkung',
              'Soal HOTS geometri'
            ],
        levels: {
          1: { id: 'm2-l1', title: 'Bangun Datar Dasar', description: 'Pengenalan berbagai bentuk bangun datar, keliling, and luas dasar untuk persiapan TKA SMP.', questionCount: 50 },
          2: { id: 'm2-l2', title: 'Kesebangunan dan Kekongruenan', description: 'Mempelajari syarat dua bangun dikatakan sebangun atau kongruen serta aplikasinya dalam menghitung panjang sisi yang belum diketahui.', questionCount: 50 },
          3: { id: 'm2-l3', title: 'Volume Bangun Ruang Sisi Lengkung', description: 'Analisis mendalam mengenai volume tabung, kerucut, and bola dalam konteks masalah geometri kompleks.', questionCount: 50 },
        }
      },
      {
        id: 'mtk-3',
        name: 'Statistika & Peluang',
        icon: '📊',
        purpose: selectedLevel === 1
          ? 'Membiasakan siswa membaca and memahami data, Melatih ketelitian dalam mengamati informasi, serta Mengenalkan konsep dasar statistika.'
          : selectedLevel === 2
          ? 'Memahami cara mengolah data, Melatih kemampuan analisis data, serta Menghubungkan data dengan pemecahan masalah.'
          : 'Memahami konsep ketidakpastian and peluang, Melatih penalaran logis and sistematis, serta Mengembangkan kemampuan analisis tingkat lanjut.',
        benefits: selectedLevel === 1
          ? [
              'Membantu siswa memahami informasi berbasis data.',
              'Menjadi dasar untuk pengolahan data di level berikutnya.',
              'Mempermudah mengerjakan soal TKA SMP dasar.'
            ]
          : selectedLevel === 2
          ? [
              'Membantu siswa menyelesaikan soal statistika menengah.',
              'Meningkatkan kemampuan berpikir logis.',
              'Persiapan menghadapi soal TKA SMP tingkat sedang.'
            ]
          : [
              'Membantu siswa menghadapi soal sulit TKA SMP.',
              'Meningkatkan kemampuan berpikir probabilistik.',
              'Membekali siswa untuk materi lanjutan.'
            ],
        coverage: selectedLevel === 1
          ? [
              'Data tunggal',
              'Mengumpulkan and membaca data',
              'Tabel data sederhana',
              'Diagram batang and diagram gambar',
              'Menafsirkan data sederhana',
              'Membaca tabel and diagram',
              'Menentukan informasi dari data',
              'Soal statistika dasar'
            ]
          : selectedLevel === 2
          ? [
              'Rata-rata (mean)',
              'Median',
              'Modus',
              'Menentukan ukuran pemusatan dari data tunggal',
              'Soal cerita statistika',
              'Menghitung mean, median, and modus',
              'Menafsirkan hasil pengolahan data',
              'Soal kontekstual statistika'
            ]
          : [
              'Konsep peluang',
              'Peluang kejadian tunggal and majemuk',
              'Ruang sampel',
              'Peluang dua kejadian',
              'Soal kontekstual peluang',
              'Menentukan peluang kejadian majemuk',
              'Menghitung peluang dari ruang sampel',
              'Soal HOTS peluang'
            ],
        levels: {
          1: { 
            id: 'm3-l1', 
            title: 'Penyajian Data', 
            description: 'Mempelajari cara mengumpulkan, membaca, and menafsirkan data melalui tabel and berbagai jenis diagram.', 
            questionCount: 50
          },
          2: { id: 'm3-l2', title: 'Ukuran Pemusatan Data', description: 'Mempelajari cara menentukan rata-rata (mean), nilai tengah (median), and nilai yang sering muncul (modus) pada data tunggal serta aplikasinya dalam soal cerita.', questionCount: 50 },
          3: { id: 'm3-l3', title: 'Peluang Kejadian Majemuk', description: 'Mempelajari konsep peluang kejadian majemuk, penentuan ruang sampel, and analisis probabilitas dalam berbagai skenario logis tingkat tinggi.', questionCount: 50 },
        }
      },

// ✅ TAMBAH DI SINI (Simulasi Ujian Matematika)
      {
        id: 'mtk-sim',
        name: 'Simulasi Ujian TKA Matematika',
        icon: '🧾',
        purpose: 'Latihan simulasi 30 soal campuran seperti ujian TKA SMP.',
        benefits: [
          'Melatih manajemen waktu dan strategi mengerjakan ujian.',
          'Soal campuran sesuai level untuk menguji kesiapan.',
          'Cocok untuk evaluasi sebelum ujian.'
        ],
        coverage: [
          'Campuran Bilangan & Aljabar',
          'Campuran Geometri & Pengukuran',
          'Campuran Statistika & Peluang'
        ],
        levels: {
          1: { id: 'sim-mtk-l1', title: 'Simulasi Matematika Level 1', description: '30 soal campuran level 1 (mudah).', questionCount: 30 },
          2: { id: 'sim-mtk-l2', title: 'Simulasi Matematika Level 2', description: '30 soal campuran level 2 (sedang).', questionCount: 30 },
          3: { id: 'sim-mtk-l3', title: 'Simulasi Matematika Level 3', description: '30 soal campuran level 3 (sulit).', questionCount: 30 },
        }
      }
    ];


    const indonesianTopics: Topic[] = [
      {
        id: 'bi-1',
        name: 'Literasi Membaca',
        icon: '📖',
        purpose: selectedLevel === 1
          ? 'Memahami teks pendek secara akurat dan melatih kemampuan dalam menemukan informasi tersurat yang ada di dalam bacaan.'
          : selectedLevel === 2
          ? 'Mengasah kemampuan untuk menganalisis teks naratif, menentukan ide pokok paragraf, serta menyusun simpulan yang logis.'
          : 'Melatih kemampuan interpretasi kritis terhadap makna tersirat (implisit) dan pesan moral mendalam pada teks sastra kompleks.',
        benefits: selectedLevel === 1
          ? [
              'Meningkatkan ketelitian saat membaca teks informasi.',
              'Mampu menjawab pertanyaan literal (siapa, apa, di mana).',
              'Membangun fondasi literasi membaca yang kokoh.'
            ]
          : selectedLevel === 2
          ? [
              'Mahir menentukan inti atau gagasan utama bacaan.',
              'Melatih logika dalam mengambil kesimpulan sederhana.',
              'Persiapan menghadapi soal penalaran menengah TKA SMP.'
            ]
          : [
              'Mampu memahami pesan tersembunyi di balik tulisan.',
              'Menganalisis sudut pandang dan niat penulis.',
              'Mengasah kepekaan terhadap nilai-nilai moral kehidupan.'
            ],
        coverage: selectedLevel === 1
          ? ['Teks deskripsi pendek', 'Informasi tersurat', 'Menjawab pertanyaan literal', 'Kosakata dasar']
          : selectedLevel === 2
          ? ['Menentukan ide pokok paragraf', 'Menentukan gagasan pendukung', 'Menarik simpulan logis dari teks', 'Menentukan tujuan penulis','Menentukan makna kata/frasa dalam konteks','Membedakan fakta dan opini','Menentukan informasi tersurat dan tersirat','Menentukan hubungan sebab–akibat','Menilai kesesuaian judul dengan isi teks','Menafsirkan pesan/makna teks']
          : ['Menafsirkan makna tersirat (implisit) dalam teks', 'Mengidentifikasi sikap, sudut pandang, dan tujuan penulis', 'Menarik simpulan kritis dari paragraf bacaan', 'Membedakan fakta, opini, dan penilaian','Menganalisis pesan moral dan nilai dalam teks','Menghubungkan isi teks dengan konteks kehidupan nyata'],
        levels: {
          1: { id: 'b1-l1', title: 'Dasar Literasi', description: 'Memahami teks pendek and menentukan informasi tersurat.', questionCount: 50 },
          2: { id: 'b1-l2', title: 'Analisis Menengah', description: 'Menentukan ide pokok and simpulan pada teks naratif.', questionCount: 50 },
          3: { id: 'b1-l3', title: 'Interpretasi Kritis', description: 'Menganalisis makna tersirat and pesan moral yang mendalam.', questionCount: 50 },
        }
      },
      {
        id: 'bi-2',
        name: 'Struktur & Kebahasaan',
        icon: '✍️',
        purpose: selectedLevel === 1
          ? 'Memahami aturan baku penggunaan ejaan, huruf kapital, dan tanda baca dasar sesuai pedoman umum Bahasa Indonesia.'
          : selectedLevel === 2
          ? 'Mempelajari susunan kalimat efektif serta cara memperbaiki kalimat yang rancu agar menjadi kalimat baku yang komunikatif.'
          : 'Mengenal dan menganalisis penggunaan berbagai jenis majas serta gaya bahasa kreatif dalam teks sastra maupun prosa.',
        benefits: selectedLevel === 1
          ? [
              'Menghindari kesalahan penulisan nama dan tempat.',
              'Membuat tulisan menjadi lebih rapi dan profesional.',
              'Menguasai standar dasar komunikasi tertulis.'
            ]
          : selectedLevel === 2
          ? [
              'Mampu menulis kalimat yang jelas dan tidak berbelit.',
              'Menguasai struktur SPOK dalam kalimat formal.',
              'Meningkatkan efisiensi dalam menyampaikan pesan tertulis.'
            ]
          : [
              'Mengapresiasi keindahan dan estetika dalam bahasa.',
              'Memahami nuansa emosi yang terkandung dalam teks.',
              'Melatih kemampuan ekspresi diri secara kreatif.'
            ],
        coverage: selectedLevel === 1
          ? ['Huruf kapital', 'Penggunaan titik dan koma', 'Kata baku dasar', 'Tanda seru dan tanya','Penulisan nama orang, tempat, hari, judul','Kalimat baku sederhana','Konteks paragraf pendek']
          : selectedLevel === 2
          ? ['Mengidentifikasi kalimat efektif vs tidak efektif', 'Menentukan perbaikan kalimat tidak efektif', 'Menghindari pemborosan kata', 'Menghindari pleonasme','Ketepatan struktur SPOK','Kejelasan subjek dan predikat','Ketepatan pilihan kata (diksi)','Kesepadanan dan keparalelan','Kehematan dan kelogisan kalimat','Kalimat baku dalam konteks formal']
          : ['Pengertian dan fungsi majas', 'Majas perbandingan (metafora, personifikasi, simile)', 'Majas penegasan (hiperbola, repetisi)', 'Majas sindiran (ironi, sarkasme, sinisme)','Makna kias dalam kalimat dan paragraf','Dampak penggunaan majas terhadap makna teks','Analisis gaya bahasa dalam teks sastra pendek','Penentuan jenis majas yang tepat dalam konteks'],
        levels: {
          1: { id: 'b2-l1', title: 'Ejaan & Tanda Baca', description: 'Penggunaan huruf kapital and titik koma yang benar.', questionCount: 50 },
          2: { id: 'b2-l2', title: 'Kalimat Efektif', description: 'Memperbaiki kalimat rancu menjadi baku.', questionCount: 50 },
          3: { id: 'b2-l3', title: 'Majas & Gaya Bahasa', description: 'Analisis perangkat puitis dalam berbagai teks.', questionCount: 50 },
        }
      },
      {
        id: 'bi-3',
        name: 'Menulis Kreatif',
        icon: '📝',
        purpose: selectedLevel === 1
          ? 'Mengembangkan kemampuan imajinasi dan struktur naratif dalam menyusun cerita pendek yang padu berdasarkan stimulus visual.'
          : selectedLevel === 2
          ? 'Menyusun urutan instruksi teknis yang logis dan sistematis dalam bentuk teks prosedur untuk membantu pembaca.'
          : 'Membangun argumen yang kuat, kritis, dan tertata secara sistematis dalam penulisan artikel opini atau eksposisi.'
        ,
        benefits: selectedLevel === 1
          ? [
              'Melatih kemampuan deskripsi latar dan tokoh.',
              'Meningkatkan daya imajinasi siswa.',
              'Mengasah kemampuan menyusun plot cerita yang logis.'
            ]
          : selectedLevel === 2
          ? [
              'Melatih cara berpikir yang runtut dan berurutan.',
              'Mampu memberikan panduan yang mudah diikuti.',
              'Menguasai keterampilan menulis fungsional sehari-hari.'
            ]
          : [
              'Mampu menyampaikan aspirasi secara logis dan santun.',
              'Meningkatkan daya kritis terhadap isu-isu terkini.',
              'Melatih kemampuan meyakinkan orang lain melalui data.'
            ],
        coverage: selectedLevel === 1
          ? ['Deskripsi latar tempat','ide pokok cerita','tokoh & watak','latar (waktu, tempat, suasana)','sudut pandang','pesan moral','kelanjutan cerita logis','kalimat efektif narasi' ,'Penokohan sederhana', 'Alur cerita (awal-tengah-akhir)', 'Dialog and narasi']
          : selectedLevel === 2
          ? ['Memahami struktur teks prosedur (tujuan, bahan/alat, langkah-langkah)', 'Mengidentifikasi urutan langkah yang logis dan sistematis', 'Menggunakan kalimat perintah (imperatif) dengan tepat', 'Menggunakan kata kerja operasional dan konjungsi temporal','Menyusun langkah yang efektif dan tidak ambigu','Menilai kelengkapan dan kejelasan teks prosedur']
          : ['Mengidentifikasi tesis/opini penulis', 'Menentukan argumen pendukung', 'Membedakan fakta dan opini', 'Menentukan kalimat opini yang kuat','Menilai koherensi dan kelogisan argumen','Menentukan simpulan yang tepat','Mengidentifikasi struktur artikel opini','Menilai efektivitas bahasa persuasif','Menentukan judul yang sesuai isi opini','Menilai kekuatan sudut pandang penulis'],
        levels: {
          1: { id: 'b3-l1', title: 'Menulis Cerita Pendek', description: 'Menyusun paragraf narasi berdasarkan stimulus visual.', questionCount: 50 },
          2: { id: 'b3-l2', title: 'Menyusun Teks Prosedur', description: 'Urutan logis dalam instruksi teknis.', questionCount: 50 },
          3: { id: 'b3-l3', title: 'Penulisan Artikel Opini', description: 'Membangun argumen yang kuat and sistematis.', questionCount: 50 },
        }
      },


{
  id: 'bi-sim',
  name: 'Simulasi Ujian TKA Bahasa Indonesia',
  icon: '🧾',
  purpose: 'Latihan simulasi 30 soal campuran seperti ujian TKA SMP.',
  benefits: [
    'Melatih pemahaman bacaan, kebahasaan, dan penalaran bahasa.',
    'Simulasi format campuran sesuai level.',
    'Cocok untuk evaluasi sebelum ujian.'
  ],
  coverage: [
    'Campuran Literasi Membaca',
    'Campuran Struktur & Kebahasaan',
    'Campuran Menulis Kreatif (analisis sederhana)'
  ],
  levels: {
    1: { id: 'sim-bi-l1', title: 'Simulasi B. Indo Level 1', description: '30 soal campuran level 1 (mudah).', questionCount: 30 },
    2: { id: 'sim-bi-l2', title: 'Simulasi B. Indo Level 2', description: '30 soal campuran level 2 (sedang).', questionCount: 30 },
    3: { id: 'sim-bi-l3', title: 'Simulasi B. Indo Level 3', description: '30 soal campuran level 3 (sulit).', questionCount: 30 },
  }
}
    ];


    return {
      'Matematika': mathTopics,
      'Bahasa Indonesia': indonesianTopics
    };
  }, [selectedLevel]);

  const currentTopics = subjectData[title] || [];

  const levels = [
    { num: 1, label: 'Mudah', isPremium: false },
    { num: 2, label: 'Sedang', isPremium: true },
    { num: 3, label: 'Sulit', isPremium: true },
  ];

  const handleLevelSelect = (levelNum: number) => {
    setSelectedLevel(levelNum);
  };

  const handleStartQuiz = (topic: Topic, level: number) => {
    // Navigasi ke Halaman Materi (Intro) diperbolehkan untuk semua user
    onStartQuiz(topic, level);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 animate-in fade-in duration-500">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-2xl border border-blue-600/30">
            {title === 'Matematika' ? '🧮' : '📚'}
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">{title}</h2>
        </div>
        <p className="text-zinc-500 text-lg max-w-2xl">
          Tingkatkan penguasaan materi {title} Anda secara bertahap melalui sistem level yang terstruktur.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {levels.map((lvl) => {
          const isActive = selectedLevel === lvl.num;
          const isLocked = lvl.isPremium && !isPremiumUser;
          
          return (
            <button
              key={lvl.num}
              onClick={() => handleLevelSelect(lvl.num)}
              className={`flex-grow md:flex-none min-w-[140px] p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                isActive 
                ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-600/20 scale-105 z-10' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800'
              }`}
            >
              <div className="flex flex-col items-start text-left">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isActive ? 'text-blue-100' : 'text-zinc-600'}`}>
                  Level {lvl.num}
                </span>
                <span className="text-xl font-extrabold">{lvl.label}</span>
              </div>
              
              {isLocked && (
                <div className="absolute top-3 right-3 text-yellow-500 opacity-60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentTopics.map((topic) => {
          const module = topic.levels[selectedLevel as keyof typeof topic.levels];
          return (
            <div 
              key={topic.id}
              className="group p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 transition-all duration-500 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] bg-black/40 px-3 py-1 rounded-full">
                  {module.questionCount} SOAL
                </span>
              </div>
              
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">
                {topic.name}
              </h3>
              <h4 className="text-xl font-extrabold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {module.title}
              </h4>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed flex-grow">
                {module.description}
              </p>
              
              <button 
                onClick={() => handleStartQuiz(topic, selectedLevel)}
                className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:translate-y-[-4px] active:scale-95 shadow-lg"
              >
                Lihat Materi
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-16 p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl text-center">
        <p className="text-zinc-400 text-sm">
          Semua materi disusun berdasarkan <span className="text-blue-400 font-bold italic">Kisi-Kisi Resmi TKA SMP </span>.
        </p>
      </div>
    </div>
  );
};

export default SubjectPage;
