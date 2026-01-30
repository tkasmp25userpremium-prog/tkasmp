import { Question } from '../types';

export const SAMPLE_QUESTIONS: Record<string, Question[]> = {
  // --- MATEMATIKA: BILANGAN & ALJABAR (m1) ---
  'm1-l1': [
    { 
      id: 'm1-l1-q1', 
      text: 'Hasil dari -15 + 8 adalah...', 
      options: [
        { id: 'a', text: '-7' }, 
        { id: 'b', text: '7' }, 
        { id: 'c', text: '-23' }, 
        { id: 'd', text: '23' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Menjumlahkan bilangan negatif dengan positif sama dengan mencari selisihnya dan mengikuti tanda bilangan yang nilainya lebih besar.\nLangkah: -15 + 8 = -(15 - 8) = -7' 
    },
    { 
      id: 'm1-l1-q2', 
      text: 'Berapakah hasil dari 12 - (-5)?', 
      options: [
        { id: 'a', text: '7' }, 
        { id: 'b', text: '-7' }, 
        { id: 'c', text: '17' }, 
        { id: 'd', text: '-17' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Jika tanda pengurangan bertemu dengan bilangan negatif (-), maka operasi berubah menjadi penjumlahan (+).\nLangkah: 12 - (-5) = 12 + 5 = 17' 
    },
    { 
      id: 'm1-l1-q3', 
      text: 'Hasil perkalian dari -6 x 7 adalah...', 
      options: [
        { id: 'a', text: '42' }, 
        { id: 'b', text: '-42' }, 
        { id: 'c', text: '13' }, 
        { id: 'd', text: '-13' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Perkalian antara bilangan negatif dengan bilangan positif akan selalu menghasilkan bilangan negatif.\nLangkah: -6 x 7 = -(6 x 7) = -42' 
    },
    { 
      id: 'm1-l1-q4', 
      text: 'Hasil dari (-4) - 9 adalah...', 
      options: [
        { id: 'a', text: '5' }, 
        { id: 'b', text: '-5' }, 
        { id: 'c', text: '13' }, 
        { id: 'd', text: '-13' }
      ], 
      correctOptionId: 'd', 
      discussion: 'Penjelasan singkat: Mengurangi bilangan negatif dengan bilangan positif sama dengan menjumlahkan kedua angka tersebut lalu memberikan tanda negatif pada hasilnya.\nLangkah: -4 - 9 = -(4 + 9) = -13' 
    },
    { 
      id: 'm1-l1-q5', 
      text: 'Suhu udara di puncak gunung pada pagi hari adalah -5°C. Pada siang hari, suhu naik sebesar 12°C. Berapakah suhu udara pada siang hari tersebut?', 
      options: [
        { id: 'a', text: '7°C' }, 
        { id: 'b', text: '-7°C' }, 
        { id: 'c', text: '17°C' }, 
        { id: 'd', text: '-17°C' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Kenaikan suhu disimbolkan dengan operasi penjumlahan.\nLangkah: -5 + 12 = 12 - 5 = 7°C' 
    },
    { 
      id: 'm1-l1-q6', 
      text: 'Berapakah hasil dari -24 : (-3)?', 
      options: [
        { id: 'a', text: '8' }, 
        { id: 'b', text: '-8' }, 
        { id: 'c', text: '21' }, 
        { id: 'd', text: '-21' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Pembagian antara dua bilangan negatif akan selalu menghasilkan bilangan positif.\nLangkah: -24 : (-3) = 8' 
    },
    { 
      id: 'm1-l1-q7', 
      text: 'Hasil dari -10 - (-6) adalah...', 
      options: [
        { id: 'a', text: '-16' }, 
        { id: 'b', text: '16' }, 
        { id: 'c', text: '-4' }, 
        { id: 'd', text: '4' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Tanda negatif bertemu negatif menjadi positif. Lalu hitung selisihnya.\nLangkah: -10 - (-6) = -10 + 6 = -4' 
    },
    { 
      id: 'm1-l1-q8', 
      text: 'Hasil dari 5 + (-2) + (-4) adalah...', 
      options: [
        { id: 'a', text: '11' }, 
        { id: 'b', text: '-1' }, 
        { id: 'c', text: '1' }, 
        { id: 'd', text: '-11' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Kerjakan berurutan dari kiri. Plus bertemu minus menjadi minus.\nLangkah: 5 - 2 - 4 = 3 - 4 = -1' 
    },
    { 
      id: 'm1-l1-q9', 
      text: 'Hasil dari -8 x (-4) adalah...', 
      options: [
        { id: 'a', text: '32' }, 
        { id: 'b', text: '-32' }, 
        { id: 'c', text: '12' }, 
        { id: 'd', text: '-12' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Perkalian negatif dengan negatif menghasilkan bilangan positif.\nLangkah: -8 x (-4) = 32' 
    },
    { 
      id: 'm1-l1-q10', 
      text: 'Seekor lumba-lumba berada di kedalaman 4 meter di bawah permukaan laut. Seekor burung terbang di ketinggian 5 meter di atas permukaan laut. Berapakah jarak vertikal antara lumba-lumba dan burung tersebut?', 
      options: [
        { id: 'a', text: '1 meter' }, 
        { id: 'b', text: '-1 meter' }, 
        { id: 'c', text: '9 meter' }, 
        { id: 'd', text: '-9 meter' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Jarak adalah selisih antara posisi tinggi (positif) dan posisi rendah (negatif).\nLangkah: 5 - (-4) = 5 + 4 = 9 meter' 
    },
    { 
      id: 'm1-l1-q11', 
      text: 'Hasil dari 50 : (-5) adalah...', 
      options: [
        { id: 'a', text: '10' }, 
        { id: 'b', text: '-10' }, 
        { id: 'c', text: '45' }, 
        { id: 'd', text: '-45' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Pembagian bilangan positif dengan negatif menghasilkan bilangan negatif.\nLangkah: 50 : (-5) = -10' 
    },
    { 
      id: 'm1-l1-q12', 
      text: 'Berapakah hasil dari -12 x 0?', 
      options: [
        { id: 'a', text: '-12' }, 
        { id: 'b', text: '12' }, 
        { id: 'c', text: '0' }, 
        { id: 'd', text: '1' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Bilangan apa pun (positif atau negatif) jika dikalikan dengan nol hasilnya adalah nol.\nLangkah: -12 x 0 = 0' 
    },
    { 
      id: 'm1-l1-q13', 
      text: 'Hasil dari 10 + (-2) x 3 adalah...', 
      options: [
        { id: 'a', text: '24' }, 
        { id: 'b', text: '4' }, 
        { id: 'c', text: '16' }, 
        { id: 'd', text: '-4' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Dalam aturan Kabataku, perkalian dikerjakan lebih dulu daripada penjumlahan.\nLangkah: 10 + (-6) = 10 - 6 = 4' 
    },
    { 
      id: 'm1-l1-q14', 
      text: 'Suhu di dalam kulkas adalah -3°C, sedangkan suhu di luar ruangan adalah 25°C. Berapakah selisih suhu kulkas dan luar ruangan?', 
      options: [
        { id: 'a', text: '22°C' }, 
        { id: 'b', text: '-22°C' }, 
        { id: 'c', text: '28°C' }, 
        { id: 'd', text: '28°C' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Selisih dicari dengan mengurangi nilai terbesar dengan nilai terkecil.\nLangkah: 25 - (-3) = 25 + 3 = 28°C' 
    },
    { 
      id: 'm1-l1-q15', 
      text: 'Hasil dari -20 : 4 adalah...', 
      options: [
        { id: 'a', text: '5' }, 
        { id: 'b', text: '-5' }, 
        { id: 'c', text: '16' }, 
        { id: 'd', text: '-16' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Negatif dibagi positif menghasilkan negatif.\nLangkah: -20 : 4 = -5' 
    },
    { 
      id: 'm1-l1-q16', 
      text: 'Berapakah hasil dari 15 - 20?', 
      options: [
        { id: 'a', text: '5' }, 
        { id: 'b', text: '-5' }, 
        { id: 'c', text: '35' }, 
        { id: 'd', text: '-35' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Mengurangi bilangan kecil dengan bilangan besar menghasilkan bilangan negatif.\nLangkah: 15 - 20 = -5' 
    },
    { 
      id: 'm1-l1-q17', 
      text: 'Hasil dari (-10) + (-5) adalah...', 
      options: [
        { id: 'a', text: '-15' }, 
        { id: 'b', text: '15' }, 
        { id: 'c', text: '-5' }, 
        { id: 'd', text: '5' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Menjumlahkan dua bilangan negatif sama dengan menjumlahkan angkanya dan tetap negatif.\nLangkah: -10 - 5 = -15' 
    },
    { 
      id: 'm1-l1-q18', 
      text: 'Hasil dari -3 x (-2) x (-4) adalah...', 
      options: [
        { id: 'a', text: '24' }, 
        { id: 'b', text: '-24' }, 
        { id: 'c', text: '9' }, 
        { id: 'd', text: '-9' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Kalikan bertahap. Negatif x Negatif = Positif. Lalu Positif x Negatif = Negatif.\nLangkah: (6) x (-4) = -24' 
    },
    { 
      id: 'm1-l1-q19', 
      text: 'Hasil dari -100 : (-10) adalah...', 
      options: [
        { id: 'a', text: '-10' }, 
        { id: 'b', text: '10' }, 
        { id: 'c', text: '90' }, 
        { id: 'd', text: '-90' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Negatif dibagi negatif menghasilkan positif.\nLangkah: -100 : (-10) = 10' 
    },
    { 
      id: 'm1-l1-q20', 
      text: 'Urutan bilangan bulat berikut dari yang terkecil adalah...', 
      options: [
        { id: 'a', text: '-5, -2, 0, 3' }, 
        { id: 'b', text: '3, 0, -2, -5' }, 
        { id: 'c', text: '0, -2, 3, -5' }, 
        { id: 'd', text: '-2, -5, 0, 3' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Semakin besar angka di belakang tanda negatif, nilainya justru semakin kecil.\nLangkah: -5 < -2 < 0 < 3' 
    },
    { 
      id: 'm1-l1-q21', 
      text: 'Hasil dari 25 + (-30) adalah...', 
      options: [
        { id: 'a', text: '5' }, 
        { id: 'b', text: '-5' }, 
        { id: 'c', text: '55' }, 
        { id: 'd', text: '55' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Bayangkan punya uang 25 lalu hutang 30. Sisa hutang 5.\nLangkah: 25 - 30 = -5' 
    },
    { 
      id: 'm1-l1-q22', 
      text: 'Berapakah hasil dari (-7) - (-7)?', 
      options: [
        { id: 'a', text: '-14' }, 
        { id: 'b', text: '14' }, 
        { id: 'c', text: '0' }, 
        { id: 'd', text: '1' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Tanda negatif bertemu negatif menjadi plus. Bilangan yang sama jika dikurangi hasilnya nol.\nLangkah: -7 + 7 = 0' 
    },
    { 
      id: 'm1-l1-q23', 
      text: 'Hasil dari 8 x (-5) : 2 adalah...', 
      options: [
        { id: 'a', text: '20' }, 
        { id: 'b', text: '-20' }, 
        { id: 'c', text: '-40' }, 
        { id: 'd', text: '40' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Kerjakan perkalian dulu, baru pembagian.\nLangkah: -40 : 2 = -20' 
    },
    { 
      id: 'm1-l1-q24', 
      text: 'Dalam sebuah pertandingan bola, tim A mencetak 3 gol dan kemasukan 5 gol. Berapakah selisih gol tim A?', 
      options: [
        { id: 'a', text: '2' }, 
        { id: 'b', text: '-2' }, 
        { id: 'c', text: '8' }, 
        { id: 'd', text: '-8' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Selisih gol = memasukkan - kemasukan.\nLangkah: 3 - 5 = -2' 
    },
    { 
      id: 'm1-l1-q25', 
      text: 'Hasil dari (-12) + 15 - 3 adalah...', 
      options: [
        { id: 'a', text: '0' }, 
        { id: 'b', text: '6' }, 
        { id: 'c', text: '-6' }, 
        { id: 'd', text: '3' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Kerjakan berurutan dari kiri ke kanan.\nLangkah: 3 - 3 = 0' 
    },
    { 
      id: 'm1-l1-q26', 
      text: 'Hasil dari (-18) + (-12) adalah...', 
      options: [
        { id: 'a', text: '-30' }, 
        { id: 'b', text: '30' }, 
        { id: 'c', text: '-6' }, 
        { id: 'd', text: '6' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Menjumlahkan dua bilangan negatif akan menghasilkan bilangan negatif yang lebih besar.\nLangkah: -18 - 12 = -30' 
    },
    { 
      id: 'm1-l1-q27', 
      text: 'Berapakah hasil dari 40 - (-10)?', 
      options: [
        { id: 'a', text: '30' }, 
        { id: 'b', text: '50' }, 
        { id: 'c', text: '-50' }, 
        { id: 'd', text: '30' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Tanda kurang bertemu tanda negatif menjadi tanda tambah.\nLangkah: 40 + 10 = 50' 
    },
    { 
      id: 'm1-l1-q28', 
      text: 'Hasil dari -9 x (-5) adalah...', 
      options: [
        { id: 'a', text: '-45' }, 
        { id: 'b', text: '45' }, 
        { id: 'c', text: '14' }, 
        { id: 'd', text: '-14' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Perkalian antara dua bilangan negatif menghasilkan bilangan positif.\nLangkah: -9 x (-5) = 45' 
    },
    { 
      id: 'm1-l1-q29', 
      text: 'Hasil dari 36 : (-4) adalah...', 
      options: [
        { id: 'a', text: '9' }, 
        { id: 'b', text: '-9' }, 
        { id: 'c', text: '32' }, 
        { id: 'd', text: '-32' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Pembagian bilangan positif dengan negatif menghasilkan bilangan negatif.\nLangkah: 36 : (-4) = -9' 
    },
    { 
      id: 'm1-l1-q30', 
      text: 'Suhu udara di dalam sebuah ruangan adalah -2°C. Jika suhu tersebut turun lagi sebesar 3°C, maka suhu sekarang menjadi...', 
      options: [
        { id: 'a', text: '1°C' }, 
        { id: 'b', text: '-1°C' }, 
        { id: 'c', text: '-5°C' }, 
        { id: 'd', text: '5°C' }
      ], 
      correctOptionId: 'c', 
      discussion: 'Penjelasan singkat: Turunnya suhu disimbolkan dengan operasi pengurangan.\nLangkah: -2 - 3 = -5°C' 
    },
    { 
      id: 'm1-l1-q31', 
      text: 'Hasil dari -14 + 20 adalah...', 
      options: [
        { id: 'a', text: '6' }, 
        { id: 'b', text: '-6' }, 
        { id: 'c', text: '34' }, 
        { id: 'd', text: '-34' }
      ], 
      correctOptionId: 'a', 
      discussion: 'Penjelasan singkat: Bayangkan hutang 14 dibayar 20. Sisa uang adalah 6.\nLangkah: 20 - 14 = 6' 
    },
    { 
      id: 'm1-l1-q32', 
      text: 'Berapakah hasil dari 25 - 35?', 
      options: [
        { id: 'a', text: '10' }, 
        { id: 'b', text: '-10' }, 
        { id: 'c', text: '60' }, 
        { id: 'd', text: '-60' }
      ], 
      correctOptionId: 'b', 
      discussion: 'Penjelasan singkat: Mengurangi bilangan yang lebih kecil dengan yang lebih besar menghasilkan nilai negatif.\nLangkah: 25 - 35 = -10' 
    },
    { 
      id: 'm1-l1-q33', 
      text: 'Hasil dari -8 x 3 adalah...', 
      options: [
        { id: 'a', text: '-24' },
        { id: 'b', text: '24' },
        { id: 'c', text: '11' },
        { id: 'd', text: '-11' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Perkalian antara bilangan negatif and positif.\nLangkah-langkah: -8 dikali 3 menghasilkan 24 dengan tanda negatif.\nKesimpulan: Hasil akhirnya adalah -24.'
    },
    {
      id: 'm1-l1-q34',
      text: 'Berapakah hasil dari -20 + (-15)?',
      options: [
        { id: 'a', text: '-5' },
        { id: 'b', text: '5' },
        { id: 'c', text: '-35' },
        { id: 'd', text: '35' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Penjumlahan dua bilangan negatif.\nLangkah: -20 + (-15) = -(20 + 15) = -35.\nKesimpulan: Hasilnya adalah -35.'
    },
    {
      id: 'm1-l1-q35',
      text: 'Hasil dari perkalian -7 x (-8) adalah...',
      options: [
        { id: 'a', text: '-56' },
        { id: 'b', text: '56' },
        { id: 'c', text: '-15' },
        { id: 'd', text: '15' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Perkalian dua bilangan negatif.\nLangkah: Negatif dikali negatif menjadi positif. 7 x 8 = 56.\nKesimpulan: Hasil akhirnya adalah 56.'
    },
    {
      id: 'm1-l1-q36',
      text: 'Hasil dari 45 : (-9) adalah...',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '-5' },
        { id: 'c', text: '54' },
        { id: 'd', text: '-54' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pembagian positif dengan negatif.\nLangkah: Positif dibagi negatif menghasilkan negatif. 45 : 9 = 5.\nKesimpulan: Hasilnya adalah -5.'
    },
    {
      id: 'm1-l1-q37',
      text: 'Suhu di sebuah kota adalah 25°C. Karena hujan, suhu turun sebesar 30°C. Berapakah suhu kota tersebut sekarang?',
      options: [
        { id: 'a', text: '5°C' },
        { id: 'b', text: '-5°C' },
        { id: 'c', text: '55°C' },
        { id: 'd', text: '-55°C' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pengurangan bilangan untuk mencari perubahan suhu.\nLangkah: 25 - 30 = -5.\nKesimpulan: Suhu sekarang adalah -5°C.'
    },
    {
      id: 'm1-l1-q38',
      text: 'Hasil dari 10 + (-2) x 5 adalah...',
      options: [
        { id: 'a', text: '40' },
        { id: 'b', text: '0' },
        { id: 'c', text: '20' },
        { id: 'd', text: '8' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Operasi campuran (perkalian didahulukan).\nLangkah: 10 + (-10) = 0.\nKesimpulan: Hasil akhirnya adalah 0.'
    },
    {
      id: 'm1-l1-q39',
      text: 'Hasil dari -8 - (-12) adalah...',
      options: [
        { id: 'a', text: '-20' },
        { id: 'b', text: '-4' },
        { id: 'c', text: '4' },
        { id: 'd', text: '20' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Pengurangan dengan bilangan negatif menjadi penjumlahan.\nLangkah: -8 + 12 = 4.\nKesimpulan: Hasilnya adalah 4.'
    },
    {
      id: 'm1-l1-q40',
      text: 'Dalam suatu permainan, menang mendapat skor 3 and kalah mendapat skor -1. Jika seorang anak menang 5 kali and kalah 2 kali, berapakah total skornya?',
      options: [
        { id: 'a', text: '13' },
        { id: 'b', text: '17' },
        { id: 'c', text: '15' },
        { id: 'd', text: '7' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Menghitung skor total berdasarkan poin.\nLangkah: (5 x 3) + (2 x -1) = 15 + (-2) = 13.\nKesimpulan: Total skor adalah 13.'
    },
    {
      id: 'm1-l1-q41',
      text: 'Hasil dari -1 x -1 x -1 x -1 adalah...',
      options: [
        { id: 'a', text: '-1' },
        { id: 'b', text: '1' },
        { id: 'c', text: '-4' },
        { id: 'd', text: '4' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Perkalian berulang bilangan negatif.\nLangkah: (-1 x -1) = 1, (1 x -1) = -1, (-1 x -1) = 1.\nKesimpulan: Karena jumlah tanda negatif genap (4), hasilnya positif 1.'
    },
    {
      id: 'm1-l1-q42',
      text: 'Sebuah pesawat berada pada ketinggian 1500 meter. Pesawat tersebut turun 200 meter, lalu naik kembali 100 meter. Berapakah ketinggian pesawat sekarang?',
      options: [
        { id: 'a', text: '1600 meter' },
        { id: 'b', text: '1400 meter' },
        { id: 'c', text: '1200 meter' },
        { id: 'd', text: '1800 meter' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Operasi penjumlahan and pengurangan posisi vertikal.\nLangkah: 1500 - 200 + 100 = 1300 + 100 = 1400.\nKesimpulan: Ketinggian pesawat sekarang adalah 1400 meter.'
    },
    {
      id: 'm1-l1-q43',
      text: 'Hasil dari -100 : 4 adalah...',
      options: [
        { id: 'a', text: '25' },
        { id: 'b', text: '-25' },
        { id: 'c', text: '400' },
        { id: 'd', text: '-400' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pembagian bilangan negatif dengan positif.\nLangkah: 100 dibagi 4 adalah 25, tandanya menjadi negatif.\nKesimpulan: Hasilnya adalah -25.'
    },
    {
      id: 'm1-l1-q44',
      text: 'Berapakah hasil dari 5 - 15?',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '-10' },
        { id: 'c', text: '20' },
        { id: 'd', text: '-20' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Mengurangi angka besar dari angka kecil.\nLangkah: 5 - 15 = -(15 - 5) = -10.\nKesimpulan: Hasilnya adalah -10.'
    },
    {
      id: 'm1-l1-q45',
      text: 'Hasil dari (12 - 15) x 4 adalah...',
      options: [
        { id: 'a', text: '12' },
        { id: 'b', text: '-12' },
        { id: 'c', text: '108' },
        { id: 'd', text: '-108' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Operasi dalam kurung didahulukan.\nLangkah: (-3) x 4 = -12.\nKesimpulan: Hasil akhirnya adalah -12.'
    },
    {
      id: 'm1-l1-q46',
      text: 'Seorang pedagang mendapat untung Rp50.000,00, namun hari berikutnya rugi Rp20.000,00. Berapakah kondisi keuangan bersihnya?',
      options: [
        { id: 'a', text: 'Rp70.000,00' },
        { id: 'b', text: 'Rp30.000,00' },
        { id: 'c', text: '-Rp30.000,00' },
        { id: 'd', text: 'Rp20.000,00' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Menjumlahkan keuntungan (+) and kerugian (-).\nLangkah: 50.000 + (-20.000) = 30.000.\nKesimpulan: Kondisi bersihnya adalah untung Rp30.000,00.'
    },
    {
      id: 'm1-l1-q47',
      text: 'Hasil dari -10 + (-5) + 20 adalah...',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '-5' },
        { id: 'c', text: '35' },
        { id: 'd', text: '-35' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Penjumlahan berantai bilangan bulat.\nLangkah: (-10 - 5) + 20 = -15 + 20 = 5.\nKesimpulan: Hasil akhirnya adalah 5.'
    },
    {
      id: 'm1-l1-q48',
      text: 'Hasil dari -6 x 3 + 10 adalah...',
      options: [
        { id: 'a', text: '-28' },
        { id: 'b', text: '8' },
        { id: 'c', text: '-8' },
        { id: 'd', text: '28' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Perkalian dikerjakan sebelum penjumlahan.\nLangkah: (-18) + 10 = -8.\nKesimpulan: Hasilnya adalah -8.'
    },
    {
      id: 'm1-l1-q49',
      text: 'Kapal selam berada 50 meter di bawah laut. Kapal tersebut naik 20 meter ke atas. Berapakah posisi kapal selam sekarang?',
      options: [
        { id: 'a', text: '70 meter di bawah laut' },
        { id: 'b', text: '30 meter di bawah laut' },
        { id: 'c', text: '20 meter di bawah laut' },
        { id: 'd', text: '50 meter di bawah laut' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Menggunakan bilangan negatif untuk kedalaman.\nLangkah: -50 (kedalaman) + 20 (naik) = -30.\nKesimpulan: Kapal berada pada 30 meter di bawah laut.'
    },
    {
      id: 'm1-l1-q50',
      text: 'Hasil dari (-25) x 0 + 10 adalah...',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '10' },
        { id: 'c', text: '-15' },
        { id: 'd', text: '25' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Bilangan dikali nol hasilnya nol.\nLangkah: 0 + 10 = 10.\nKesimpulan: Hasil akhirnya adalah 10.'
    }
  ],
   
   // persamaan linear satu variabel
  'm1-l2': [
    {
      id: 'm1-l2-q1',
      text: 'Tentukan nilai x dari persamaan 2x + 5 = 11.',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '3' },
        { id: 'c', text: '4' },
        { id: 'd', text: '6' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Isolasi variabel x dengan operasi balik.\nLangkah-langkah: 2x = 11 - 5, maka 2x = 6. Kemudian x = 6 / 2 = 3.\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm1-l2-q2',
      text: 'Berapakah nilai x yang memenuhi persamaan 3x - 4 = 8?',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '2' },
        { id: 'c', text: '6' },
        { id: 'd', text: '12' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Gunakan penjumlahan untuk memindahkan konstanta.\nLangkah-langkah: 3x = 8 + 4, maka 3x = 12. Nilai x = 12 / 3 = 4.\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm1-l2-q3',
      text: 'Hasil penyelesaian dari 5x + 10 = 35 adalah...',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '7' },
        { id: 'c', text: '5' },
        { id: 'd', text: '9' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Pindahkan konstanta ke ruas kanan.\nLangkah-langkah: 5x = 35 - 10, maka 5x = 25. Nilai x = 25 / 5 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q4',
      text: 'Jika 4x - 2 = 18, berapakah nilai x?',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '20' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Tambahkan konstanta ke kedua ruas.\nLangkah-langkah: 4x = 18 + 2, maka 4x = 20. Nilai x = 20 / 4 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q5',
      text: 'Tentukan x dari persamaan x + 12 = 20.',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '32' },
        { id: 'c', text: '12' },
        { id: 'd', text: '6' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Kurangi konstanta di kedua ruas.\nLangkah-langkah: x = 20 - 12 = 8.\nKesimpulan: Nilai x adalah 8.'
    },
    {
      id: 'm1-l2-q6',
      text: 'Nilai x yang memenuhi x - 15 = 5 adalah...',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '20' },
        { id: 'c', text: '-10' },
        { id: 'd', text: '0' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pindahkan konstanta negatif menjadi positif di ruas lain.\nLangkah-langkah: x = 5 + 15 = 20.\nKesimpulan: Nilai x adalah 20.'
    },
    {
      id: 'm1-l2-q7',
      text: 'Selesaikan persamaan: 2x + 3 = x + 10.',
      options: [
        { id: 'a', text: '13' },
        { id: 'b', text: '3' },
        { id: 'c', text: '7' },
        { id: 'd', text: '5' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Kelompokkan variabel x di satu ruas.\nLangkah-langkah: 2x - x = 10 - 3, maka x = 7.\nKesimpulan: Nilai x adalah 7.'
    },
    {
      id: 'm1-l2-q8',
      text: 'Berapakah nilai x dari 3x - 5 = 2x + 1?',
      options: [
        { id: 'a', text: '6' },
        { id: 'b', text: '4' },
        { id: 'c', text: '5' },
        { id: 'd', text: '-4' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Pindahkan suku variabel and konstanta agar sejenis.\nLangkah-langkah: 3x - 2x = 1 + 5, sehingga x = 6.\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm1-l2-q9',
      text: 'Tentukan penyelesaian dari 4x = 12.',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '8' },
        { id: 'd', text: '16' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Lakukan pembagian pada koefisien x.\nLangkah-langkah: x = 12 / 4 = 3.\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm1-l2-q10',
      text: 'Jika 5x = 100, berapakah nilai x?',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '20' },
        { id: 'c', text: '25' },
        { id: 'd', text: '50' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Bagi konstanta dengan koefisien x.\nLangkah-langkah: x = 100 / 5 = 20.\nKesimpulan: Nilai x adalah 20.'
    },
    {
      id: 'm1-l2-q11',
      text: 'Tentukan x jika x / 3 = 4.',
      options: [
        { id: 'a', text: '1,33' },
        { id: 'b', text: '7' },
        { id: 'c', text: '12' },
        { id: 'd', text: '1' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Gunakan perkalian silang untuk menghilangkan pembagi.\nLangkah-langkah: x = 4 * 3 = 12.\nKesimpulan: Nilai x adalah 12.'
    },
    {
      id: 'm1-l2-q12',
      text: 'Hasil dari persamaan 2x / 4 = 3 adalah...',
      options: [
        { id: 'a', text: '6' },
        { id: 'b', text: '12' },
        { id: 'c', text: '8' },
        { id: 'd', text: '2' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Selesaikan bagian pembagi terlebih dahulu.\nLangkah-langkah: 2x = 3 * 4, maka 2x = 12. x = 12 / 2 = 6.\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm1-l2-q13',
      text: 'Penyelesaian dari 2(x + 1) = 10 adalah...',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '3' },
        { id: 'd', text: '6' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Bagi kedua ruas dengan angka di depan kurung atau gunakan distributif.\nLangkah-langkah: x + 1 = 10 / 2, maka x + 1 = 5. x = 5 - 1 = 4.\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm1-l2-q14',
      text: 'Tentukan x dari 3(x - 2) = 12.',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '4' },
        { id: 'c', text: '6' },
        { id: 'd', text: '5' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Bagi kedua ruas dengan 3.\nLangkah-langkah: x - 2 = 12 / 3, maka x - 2 = 4. x = 4 + 2 = 6.\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm1-l2-q15',
      text: 'Nilai x yang memenuhi 5(x + 4) = 25 adalah...',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '5' },
        { id: 'c', text: '9' },
        { id: 'd', text: '4' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Isolasi variabel x dari operasi perkalian and penjumlahan.\nLangkah-langkah: x + 4 = 25 / 5, maka x + 4 = 5. x = 5 - 4 = 1.\nKesimpulan: Nilai x adalah 1.'
    },
    {
      id: 'm1-l2-q16',
      text: 'Selesaikan persamaan: 4(x - 3) = 8.',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '5' },
        { id: 'c', text: '11' },
        { id: 'd', text: '6' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Bagi dengan 4 lalu pindahkan konstanta.\nLangkah-langkah: x - 3 = 8 / 4, maka x - 3 = 2. x = 2 + 3 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q17',
      text: 'Jika 10 - x = 4, berapakah nilai x?',
      options: [
        { id: 'a', text: '14' },
        { id: 'b', text: '-6' },
        { id: 'c', text: '6' },
        { id: 'd', text: '4' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Pindahkan x ke ruas kanan agar positif.\nLangkah-langkah: 10 - 4 = x, maka 6 = x.\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm1-l2-q18',
      text: 'Berapakah nilai x yang memenuhi 15 - 2x = 5?',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '5' },
        { id: 'c', text: '20' },
        { id: 'd', text: '-5' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pindahkan konstanta, lalu bagi dengan koefisien negatif.\nLangkah-langkah: -2x = 5 - 15, maka -2x = -10. x = -10 / -2 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q19',
      text: 'Tentukan x dari 3x + 7 = 1.',
      options: [
        { id: 'a', text: '-2' },
        { id: 'b', text: '2' },
        { id: 'c', text: '6' },
        { id: 'd', text: '-6' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Hasil pengurangan bisa berupa bilangan negatif.\nLangkah-langkah: 3x = 1 - 7, maka 3x = -6. x = -6 / 3 = -2.\nKesimpulan: Nilai x adalah -2.'
    },
    {
      id: 'm1-l2-q20',
      text: 'Penyelesaian dari 2x + 12 = 4 adalah...',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '-4' },
        { id: 'd', text: '-8' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Pindahkan konstanta positif ke kanan menjadi negatif.\nLangkah-langkah: 2x = 4 - 12, maka 2x = -8. x = -8 / 2 = -4.\nKesimpulan: Nilai x adalah -4.'
    },
    {
      id: 'm1-l2-q21',
      text: 'Jika x + 2x = 9, tentukan nilai x.',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '9' },
        { id: 'c', text: '4.5' },
        { id: 'd', text: '2' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Gabungkan suku-suku sejenis terlebih dahulu.\nLangkah-langkah: 3x = 9, maka x = 9 / 3 = 3.\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm1-l2-q22',
      text: 'Berapakah nilai x yang memenuhi 5x - 3x = 10?',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '10' },
        { id: 'c', text: '5' },
        { id: 'd', text: '8' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Kurangi koefisien variabel x.\nLangkah-langkah: 2x = 10, maka x = 10 / 2 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q23',
      text: 'Selesaikan persamaan: x + 5 = -2.',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '7' },
        { id: 'c', text: '-7' },
        { id: 'd', text: '-3' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Konstanta positif di kiri menjadi negatif di kanan.\nLangkah-langkah: x = -2 - 5 = -7.\nKesimpulan: Nilai x adalah -7.'
    },
    {
      id: 'm1-l2-q24',
      text: 'Tentukan x dari x - 7 = -10.',
      options: [
        { id: 'a', text: '-3' },
        { id: 'b', text: '3' },
        { id: 'c', text: '-17' },
        { id: 'd', text: '17' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Perhatikan tanda saat menjumlahkan bilangan negatif.\nLangkah-langkah: x = -10 + 7 = -3.\nKesimpulan: Nilai x adalah -3.'
    },
    {
      id: 'm1-l2-q25',
      text: 'Jika jumlah dua bilangan berurutan (x and x+1) adalah 11, berapakah nilai x?',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '5.5' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Bentuk persamaan dari soal cerita.\nLangkah-langkah: x + (x + 1) = 11, maka 2x + 1 = 11. 2x = 10, x = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q26',
      text: 'Nilai x yang memenuhi 3x + 2 = x + 8 adalah...',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '5' },
        { id: 'd', text: '2' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Kelompokkan variabel di kiri and konstanta di kanan.\nLangkah-langkah: 3x - x = 8 - 2, maka 2x = 6. x = 3.\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm1-l2-q27',
      text: 'Selesaikan persamaan: 4x - 5 = 2x + 1.',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '3' },
        { id: 'c', text: '4' },
        { id: 'd', text: '6' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Kelompokkan suku sejenis.\nLangkah-langkah: 4x - 2x = 1 + 5, maka 2x = 6. x = 3.\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm1-l2-q28',
      text: 'Berapakah nilai x jika 5x + 3 = 2x + 15?',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '5' },
        { id: 'd', text: '6' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pindahkan 2x ke kiri and 3 ke kanan.\nLangkah-langkah: 3x = 12, maka x = 4.\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm1-l2-q29',
      text: 'Penyelesaian dari 2(2x + 1) = 10 adalah...',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '2' },
        { id: 'c', text: '3' },
        { id: 'd', text: '4' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Gunakan sifat distributif aljabar.\nLangkah-langkah: 4x + 2 = 10, maka 4x = 8. x = 2.\nKesimpulan: Nilai x adalah 2.'
    },
    {
      id: 'm1-l2-q30',
      text: 'Tentukan x dari 3(x - 4) = 0.',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '3' },
        { id: 'c', text: '4' },
        { id: 'd', text: '-4' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Jika hasil kali adalah nol, maka faktor di dalam kurung harus nol.\nLangkah-langkah: x - 4 = 0, maka x = 4.\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm1-l2-q31',
      text: 'Harga 3 buku tulis adalah Rp15.000,00. Jika harga satu buku adalah x, tentukan x.',
      options: [
        { id: 'a', text: 'Rp3.000,00' },
        { id: 'b', text: 'Rp4.500,00' },
        { id: 'c', text: 'Rp5.000,00' },
        { id: 'd', text: 'Rp6.000,00' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Persamaan linear dari situasi nyata.\nLangkah-langkah: 3x = 15.000, maka x = 15.000 / 3 = 5.000.\nKesimpulan: Harga 1 buku (x) adalah Rp5.000,00.'
    },
    {
      id: 'm1-l2-q32',
      text: 'Umur Ayah adalah 3 kali umur anaknya (x). Jika jumlah umur mereka 40 tahun, berapakah umur anak?',
      options: [
        { id: 'a', text: '10 tahun' },
        { id: 'b', text: '15 tahun' },
        { id: 'c', text: '12 tahun' },
        { id: 'd', text: '20 tahun' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Gabungkan perbandingan umur dalam satu variabel.\nLangkah-langkah: x + 3x = 40, maka 4x = 40. x = 10.\nKesimpulan: Umur anak adalah 10 tahun.'
    },
    {
      id: 'm1-l2-q33',
      text: 'Sisi sebuah persegi adalah x. Jika kelilingnya 20 cm, tentukan x.',
      options: [
        { id: 'a', text: '4 cm' },
        { id: 'b', text: '10 cm' },
        { id: 'c', text: '5 cm' },
        { id: 'd', text: '2 cm' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Gunakan rumus keliling persegi.\nLangkah-langkah: 4x = 20, maka x = 20 / 4 = 5.\nKesimpulan: Panjang sisi x adalah 5 cm.'
    },
    {
      id: 'm1-l2-q34',
      text: 'Panjang persegi panjang adalah (x+2) cm and lebar x cm. Jika kelilingnya 20 cm, berapakah x?',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '3' },
        { id: 'd', text: '2' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Rumus keliling PP adalah 2(p + l).\nLangkah-langkah: 2(x + 2 + x) = 20, maka 2(2x + 2) = 20. 2x + 2 = 10, 2x = 8, x = 4.\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm1-l2-q35',
      text: 'Tentukan x dari x / 2 + 1 = 5.',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '8' },
        { id: 'c', text: '12' },
        { id: 'd', text: '4' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Kurangi konstanta sebelum mengalikan pembagi.\nLangkah-langkah: x / 2 = 5 - 1, maka x / 2 = 4. x = 8.\nKesimpulan: Nilai x adalah 8.'
    },
    {
      id: 'm1-l2-q36',
      text: 'Hasil penyelesaian x / 5 - 2 = 1 adalah...',
      options: [
        { id: 'a', text: '15' },
        { id: 'b', text: '5' },
        { id: 'c', text: '10' },
        { id: 'd', text: '20' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Pindahkan konstanta negatif.\nLangkah-langkah: x / 5 = 1 + 2, maka x / 5 = 3. x = 15.\nKesimpulan: Nilai x adalah 15.'
    },
    {
      id: 'm1-l2-q37',
      text: 'Nilai x yang memenuhi 2x + 10 = 0 adalah...',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '-10' },
        { id: 'c', text: '-5' },
        { id: 'd', text: '0' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Pindahkan konstanta ke kanan menjadi negatif.\nLangkah-langkah: 2x = -10, maka x = -5.\nKesimpulan: Nilai x adalah -5.'
    },
    {
      id: 'm1-l2-q38',
      text: 'Berapakah x dari 4x - 8 = -8?',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '4' },
        { id: 'c', text: '8' },
        { id: 'd', text: '2' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Angka yang sama jika dikurangi hasilnya nol.\nLangkah-langkah: 4x = -8 + 8, maka 4x = 0. x = 0.\nKesimpulan: Nilai x adalah 0.'
    },
    {
      id: 'm1-l2-q39',
      text: 'Tentukan x jika 3x + 5 = 20.',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '15' },
        { id: 'c', text: '25' },
        { id: 'd', text: '7' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Pindahkan konstanta lalu bagi.\nLangkah-langkah: 3x = 15, maka x = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q40',
      text: 'Jika 2x - 7 = 3, berapakah x?',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '5' },
        { id: 'c', text: '10' },
        { id: 'd', text: '4' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Pindahkan konstanta negatif menjadi positif.\nLangkah-langkah: 2x = 10, maka x = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q41',
      text: 'Penyelesaian dari x + 4 = 4 adalah...',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '0' },
        { id: 'c', text: '1' },
        { id: 'd', text: '-4' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Kurangi konstanta di kedua ruas.\nLangkah-langkah: x = 4 - 4 = 0.\nKesimpulan: Nilai x adalah 0.'
    },
    {
      id: 'm1-l2-q42',
      text: 'Tentukan x dari 7x = 49.',
      options: [
        { id: 'a', text: '6' },
        { id: 'b', text: '7' },
        { id: 'c', text: '8' },
        { id: 'd', text: '42' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Bagi konstanta dengan koefisien.\nLangkah-langkah: x = 49 / 7 = 7.\nKesimpulan: Nilai x adalah 7.'
    },
    {
      id: 'm1-l2-q43',
      text: 'Jika 12x = 144, berapakah x?',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '11' },
        { id: 'c', text: '12' },
        { id: 'd', text: '14' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Bagi konstanta dengan koefisien.\nLangkah-langkah: x = 144 / 12 = 12.\nKesimpulan: Nilai x adalah 12.'
    },
    {
      id: 'm1-l2-q44',
      text: 'Tentukan x dari 2x + 1 = 11.',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '10' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Kurangi 1 lalu bagi 2.\nLangkah-langkah: 2x = 10, maka x = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q45',
      text: 'Selesaikan: 3x - 6 = 9.',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '5' },
        { id: 'd', text: '15' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Tambahkan 6 lalu bagi 3.\nLangkah-langkah: 3x = 15, maka x = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q46',
      text: 'Nilai x yang memenuhi 5x + 5 = 50 adalah...',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '10' },
        { id: 'c', text: '9' },
        { id: 'd', text: '11' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Kurangi 5 lalu bagi 5.\nLangkah-langkah: 5x = 45, maka x = 9.\nKesimpulan: Nilai x adalah 9.'
    },
    {
      id: 'm1-l2-q47',
      text: 'Tentukan x dari x - 9 = -4.',
      options: [
        { id: 'a', text: '13' },
        { id: 'b', text: '5' },
        { id: 'c', text: '-5' },
        { id: 'd', text: '-13' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Tambahkan 9 ke kedua ruas.\nLangkah-langkah: x = -4 + 9 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q48',
      text: 'Jika 2(x - 5) = 0, berapakah x?',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '2' },
        { id: 'c', text: '5' },
        { id: 'd', text: '-5' }
      ],
      correctOptionId: 'c',
      discussion: 'Penjelasan singkat: Faktor di dalam kurung harus nol.\nLangkah-langkah: x - 5 = 0, maka x = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm1-l2-q49',
      text: 'Penyelesaian dari 3(x + 2) = 15 adalah...',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '3' },
        { id: 'c', text: '5' },
        { id: 'd', text: '1' }
      ],
      correctOptionId: 'b',
      discussion: 'Penjelasan singkat: Bagi dengan 3 lalu kurangi 2.\nLangkah-langkah: x + 2 = 5, maka x = 3.\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm1-l2-q50',
      text: 'Tentukan x jika 10x - 20 = 80.',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '8' },
        { id: 'c', text: '6' },
        { id: 'd', text: '100' }
      ],
      correctOptionId: 'a',
      discussion: 'Penjelasan singkat: Tambahkan 20 lalu bagi 10.\nLangkah-langkah: 10x = 100, maka x = 10.\nKesimpulan: Nilai x adalah 10.'
    }
  ],

  // --- MATEMATIKA: GEOMETRI & PENGUKURAN (m2) ---
  'm2-l1': [
    {
      id: 'm2-l1-q1',
      text: 'Apa nama bangun datar yang memiliki empat sisi sama panjang and empat sudut siku-siku?',
      options: [
        { id: 'A', text: 'Persegi Panjang' },
        { id: 'B', text: 'Persegi' },
        { id: 'C', text: 'Jajar Genjang' },
        { id: 'D', text: 'Belah Ketupat' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mengenali ciri khas bangun datar reguler.\nLangkah-langkah: Bangun dengan 4 sisi sama panjang and sudut siku-siku adalah definisi dari persegi.\nKesimpulan: Bangun tersebut adalah persegi.'
    },
    {
      id: 'm2-l1-q2',
      text: 'Berapakah jumlah titik sudut pada sebuah segitiga?',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3' },
        { id: 'C', text: '4' },
        { id: 'D', text: '5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Dasar pengenalan geometri segitiga.\nLangkah-langkah: Segitiga dibentuk oleh tiga garis lurus yang bertemu di tiga titik.\nKesimpulan: Jumlah titik sudut pada segitiga adalah 3.'
    },
    {
      id: 'm2-l1-q3',
      text: 'Jika sebuah persegi memiliki panjang sisi 8 cm, berapakah kelilingnya?',
      options: [
        { id: 'A', text: '16 cm' },
        { id: 'B', text: '32 cm' },
        { id: 'C', text: '64 cm' },
        { id: 'D', text: '24 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung keliling persegi.\nLangkah-langkah: Rumus keliling persegi adalah 4 x sisi. Jadi, 4 x 8 cm = 32 cm.\nKesimpulan: Keliling persegi tersebut adalah 32 cm.'
    },
    {
      id: 'm2-l1-q4',
      text: 'Bangun datar yang memiliki satu sisi melengkung yang membentuk garis tertutup dan tidak memiliki titik sudut adalah...',
      options: [
        { id: 'A', text: 'Elips' },
        { id: 'B', text: 'Setengah Lingkaran' },
        { id: 'C', text: 'Lingkaran' },
        { id: 'D', text: 'Segitiga' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Identifikasi bangun datar lingkaran.\nLangkah-langkah: Lingkaran adalah himpunan titik yang berjarak sama ke satu pusat, membentuk satu kurva tertutup tanpa sudut.\nKesimpulan: Bangun tersebut adalah lingkaran.'
    },
    {
      id: 'm2-l1-q5',
      text: 'Sebuah persegi panjang memiliki panjang 12 cm and lebar 5 cm. Berapakah luasnya?',
      options: [
        { id: 'A', text: '17 cm²' },
        { id: 'B', text: '34 cm²' },
        { id: 'C', text: '60 cm²' },
        { id: 'D', text: '70 cm²' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung luas persegi panjang.\nLangkah-langkah: Rumus luas adalah panjang x lebar. Maka, 12 cm x 5 cm = 60 cm².\nKesimpulan: Luas persegi panjang tersebut adalah 60 cm².'
    },
    {
      id: 'm2-l1-q6',
      text: 'Sudut yang besarnya tepat 90 derajat dinamakan sudut...',
      options: [
        { id: 'A', text: 'Lancip' },
        { id: 'B', text: 'Tumpul' },
        { id: 'C', text: 'Siku-siku' },
        { id: 'D', text: 'Lurus' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Klasifikasi jenis sudut dasar.\nLangkah-langkah: Sudut < 90° (lancip), Sudut = 90° (siku-siku), Sudut > 90° (tumpul).\nKesimpulan: Sudut 90 derajat adalah sudut siku-siku.'
    },
    {
      id: 'm2-l1-q7',
      text: 'Manakah pernyataan yang benar mengenai sifat-sifat persegi panjang?',
      options: [
        { id: 'A', text: 'Semua sisinya sama panjang' },
        { id: 'B', text: 'Memiliki tepat satu pasang sisi sejajar' },
        { id: 'C', text: 'Sisi yang berhadapan sejajar and sama panjang' },
        { id: 'D', text: 'Tidak memiliki simetri lipat' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Memahami sifat geometri persegi panjang.\nLangkah-langkah: Analisis opsi: Opsi A salah (itu persegi), Opsi B salah (itu trapesium). Opsi C adalah definisi tepat.\nKesimpulan: Persegi panjang memiliki sisi berhadapan yang sejajar and sama panjang.'
    },
    {
      id: 'm2-l1-q8',
      text: 'Sebuah segitiga mempunyai alas 10 cm and tinggi 6 cm. Berapakah luas segitiga tersebut?',
      options: [
        { id: 'A', text: '60 cm²' },
        { id: 'B', text: '30 cm²' },
        { id: 'C', text: '16 cm²' },
        { id: 'D', text: '15 cm²' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung luas segitiga.\nLangkah-langkah: Rumus luas segitiga adalah (alas x tinggi) / 2. Jadi, (10 x 6) / 2 = 60 / 2 = 30 cm².\nKesimpulan: Luas segitiga tersebut adalah 30 cm².'
    },
    {
      id: 'm2-l1-q9',
      text: 'Berapakah jumlah sisi pada bangun datar jajar genjang?',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '6' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung jumlah sisi poligon segi empat.\nLangkah-langkah: Jajar genjang termasuk dalam keluarga segi empat (quadrilateral).\nKesimpulan: Jumlah sisinya adalah 4.'
    },
    {
      id: 'm2-l1-q10',
      text: 'Jika keliling sebuah persegi adalah 20 cm, berapakah panjang satu sisinya?',
      options: [
        { id: 'A', text: '10 cm' },
        { id: 'B', text: '5 cm' },
        { id: 'C', text: '4 cm' },
        { id: 'D', text: '80 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari sisi dari keliling persegi.\nLangkah-langkah: Karena Keliling = 4 x sisi, maka sisi = Keliling / 4. Jadi, 20 / 4 = 5 cm.\nKesimpulan: Panjang sisi persegi tersebut adalah 5 cm.'
    },
    {
      id: 'm2-l1-q11',
      text: 'Bangun datar segitiga yang salah satu sudutnya tepat 90 derajat disebut segitiga...',
      options: [
        { id: 'A', text: 'Sama Kaki' },
        { id: 'B', text: 'Sama Sisi' },
        { id: 'C', text: 'Siku-siku' },
        { id: 'D', text: 'Tumpul' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Klasifikasi segitiga berdasarkan besar sudutnya.\nLangkah-langkah: Segitiga siku-siku didefinisikan sebagai segitiga yang memiliki satu sudut siku-siku (90°).\nKesimpulan: Bangun tersebut adalah segitiga siku-siku.'
    },
    {
      id: 'm2-l1-q12',
      text: 'Jika sisi sebuah persegi adalah 5 cm, berapakah kelilingnya?',
      options: [
        { id: 'A', text: '10 cm' },
        { id: 'B', text: '20 cm' },
        { id: 'C', text: '25 cm' },
        { id: 'D', text: '15 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung keliling persegi.\nLangkah-langkah: Keliling = 4 x sisi = 4 x 5 = 20 cm.\nKesimpulan: Keliling persegi tersebut adalah 20 cm.'
    },
    {
      id: 'm2-l1-q13',
      text: 'Sebuah persegi panjang memiliki panjang 10 cm and lebar 4 cm. Berapakah luasnya?',
      options: [
        { id: 'A', text: '14 cm²' },
        { id: 'B', text: '28 cm²' },
        { id: 'C', text: '40 cm²' },
        { id: 'D', text: '20 cm²' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung luas persegi panjang.\nLangkah-langkah: Luas = panjang x lebar = 10 x 4 = 40 cm².\nKesimpulan: Luas persegi panjang tersebut adalah 40 cm².'
    },
    {
      id: 'm2-l1-q14',
      text: 'Segitiga yang memiliki dua sisi yang sama panjang disebut segitiga...',
      options: [
        { id: 'A', text: 'Sama Sisi' },
        { id: 'B', text: 'Sama Kaki' },
        { id: 'C', text: 'Siku-siku' },
        { id: 'D', text: 'Sembarang' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Jenis segitiga berdasarkan panjang sisinya.\nLangkah-langkah: Segitiga sama kaki adalah segitiga yang mempunyai paling sedikit dua sisi yang sama panjang.\nKesimpulan: Bangun tersebut adalah segitiga sama kaki.'
    },
    {
      id: 'm2-l1-q15',
      text: 'Sudut yang besarnya kurang dari 90 derajat disebut sudut...',
      options: [
        { id: 'A', text: 'Siku-siku' },
        { id: 'B', text: 'Tumpul' },
        { id: 'C', text: 'Lancip' },
        { id: 'D', text: 'Lurus' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Nama-nama sudut berdasarkan besarnya.\nLangkah-langkah: Sudut di antara 0° and 90° disebut sudut lancip.\nKesimpulan: Sudut tersebut adalah sudut lancip.'
    },
    {
      id: 'm2-l1-q16',
      text: 'Jika panjang diameter sebuah lingkaran adalah 14 cm, berapakah panjang jari-jarinya?',
      options: [
        { id: 'A', text: '28 cm' },
        { id: 'B', text: '7 cm' },
        { id: 'C', text: '21 cm' },
        { id: 'D', text: '14 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Hubungan antara diameter and jari-jari lingkaran.\nLangkah-langkah: Jari-jari (r) adalah setengah dari diameter (d). r = d / 2 = 14 / 2 = 7 cm.\nKesimpulan: Jari-jari lingkaran tersebut adalah 7 cm.'
    },
    {
      id: 'm2-l1-q17',
      text: 'Berapakah keliling persegi panjang jika panjangnya 8 cm and lebarnya 6 cm?',
      options: [
        { id: 'A', text: '14 cm' },
        { id: 'B', text: '28 cm' },
        { id: 'C', text: '48 cm' },
        { id: 'D', text: '20 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung keliling persegi panjang.\nLangkah-langkah: Keliling = 2 x (panjang + lebar) = 2 x (8 + 6) = 2 x 14 = 28 cm.\nKesimpulan: Keliling persegi panjang tersebut adalah 28 cm.'
    },
    {
      id: 'm2-l1-q18',
      text: 'Jika sisi sebuah persegi adalah 9 cm, berapakah luasnya?',
      options: [
        { id: 'A', text: '18 cm²' },
        { id: 'B', text: '36 cm²' },
        { id: 'C', text: '81 cm²' },
        { id: 'D', text: '45 cm²' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung luas persegi.\nLangkah-langkah: Luas = sisi x sisi = 9 x 9 = 81 cm².\nKesimpulan: Luas persegi tersebut adalah 81 cm².'
    },
    {
      id: 'm2-l1-q19',
      text: 'Bangun datar yang memiliki empat sisi sama panjang and diagonalnya saling tegak lurus tetapi tidak semua sudutnya siku-siku adalah...',
      options: [
        { id: 'A', text: 'Persegi' },
        { id: 'B', text: 'Persegi Panjang' },
        { id: 'C', text: 'Belah Ketupat' },
        { id: 'D', text: 'Jajar Genjang' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Ciri-ciri belah ketupat.\nLangkah-langkah: Belah ketupat memiliki 4 sisi sama panjang and diagonal tegak lurus. Jika semua sudutnya siku-siku, ia disebut persegi.\nKesimpulan: Bangun tersebut adalah belah ketupat.'
    },
    {
      id: 'm2-l1-q20',
      text: 'Bangun datar segi empat yang memiliki tepat satu pasang sisi sejajar disebut...',
      options: [
        { id: 'A', text: 'Jajar Genjang' },
        { id: 'B', text: 'Trapesium' },
        { id: 'C', text: 'Belah Ketupat' },
        { id: 'D', text: 'Layang-layang' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Definisi trapesium.\nLangkah-langkah: Trapesium adalah bangun datar segi empat yang memiliki sepasang sisi yang sejajar.\nKesimpulan: Bangun tersebut adalah trapesium.'
    },
    {
      id: 'm2-l1-q21',
      text: 'Berapakah luas lingkaran dengan jari-jari 7 cm? (Gunakan π = 22/7)',
      options: [
        { id: 'A', text: '44 cm²' },
        { id: 'B', text: '154 cm²' },
        { id: 'C', text: '22 cm²' },
        { id: 'D', text: '144 cm²' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung luas lingkaran.\nLangkah-langkah: Luas = π x r² = (22/7) x 7 x 7 = 22 x 7 = 154 cm².\nKesimpulan: Luas lingkaran tersebut adalah 154 cm².'
    },
    {
      id: 'm2-l1-q22',
      text: 'Sebuah segitiga sama sisi memiliki panjang sisi 12 cm. Berapakah kelilingnya?',
      options: [
        { id: 'A', text: '24 cm' },
        { id: 'B', text: '36 cm' },
        { id: 'C', text: '48 cm' },
        { id: 'D', text: '12 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung keliling segitiga sama sisi.\nLangkah-langkah: Keliling = 3 x sisi = 3 x 12 = 36 cm.\nKesimpulan: Keliling segitiga tersebut adalah 36 cm.'
    },
    {
      id: 'm2-l1-q23',
      text: 'Bangun datar yang memiliki dua pasang sisi sejajar and sudut-sudut yang berhadapan sama besar disebut...',
      options: [
        { id: 'A', text: 'Trapesium' },
        { id: 'B', text: 'Layang-layang' },
        { id: 'C', text: 'Jajar Genjang' },
        { id: 'D', text: 'Segitiga' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Karakteristik jajar genjang.\nLangkah-langkah: Sifat utama jajar genjang adalah memiliki dua pasang sisi sejajar and sudut yang berhadapan besarnya sama.\nKesimpulan: Bangun tersebut adalah jajar genjang.'
    },
    {
      id: 'm2-l1-q24',
      text: 'Sudut yang besarnya tepat 180 derajat disebut sudut...',
      options: [
        { id: 'A', text: 'Tumpul' },
        { id: 'B', text: 'Lurus' },
        { id: 'C', text: 'Refleks' },
        { id: 'D', text: 'Siku-siku' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Definisi sudut lurus.\nLangkah-langkah: Sudut yang membentuk garis lurus besarnya adalah 180°.\nKesimpulan: Sudut tersebut adalah sudut lurus.'
    },
    {
      id: 'm2-l1-q25',
      text: 'Andi memiliki taman berbentuk persegi panjang dengan panjang 15 meter and lebar 10 meter. Andi ingin memagari taman tersebut. Berapa meter panjang pagar yang dibutuhkan?',
      options: [
        { id: 'A', text: '25 meter' },
        { id: 'B', text: '50 meter' },
        { id: 'C', text: '150 meter' },
        { id: 'D', text: '40 meter' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari keliling untuk menentukan panjang pagar.\nLangkah-langkah: Panjang pagar = Keliling = 2 x (p + l) = 2 x (15 + 10) = 2 x 25 = 50 meter.\nKesimpulan: Pagar yang dibutuhkan Andi adalah 50 meter.'
    },
    {
      id: 'm2-l1-q26',
      text: 'Berapakah jumlah seluruh sudut dalam pada sebuah persegi?',
      options: [
        { id: 'A', text: '180 derajat' },
        { id: 'B', text: '360 derajat' },
        { id: 'C', text: '270 derajat' },
        { id: 'D', text: '90 derajat' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Total sudut dalam bangun segi empat.\nLangkah-langkah: Karena persegi memiliki 4 sudut siku-siku (90°), maka totalnya 4 x 90 = 360°.\nKesimpulan: Jumlah seluruh sudut dalam persegi adalah 360 derajat.'
    },
    {
      id: 'm2-l1-q27',
      text: 'Bangun datar yang memiliki dua pasang sisi sama panjang and diagonalnya berpotongan tegak lurus, namun sisinya tidak sejajar adalah...',
      options: [
        { id: 'A', text: 'Belah Ketupat' },
        { id: 'B', text: 'Layang-layang' },
        { id: 'C', text: 'Jajar Genjang' },
        { id: 'D', text: 'Persegi' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Ciri-ciri layang-layang.\nLangkah-langkah: Layang-layang memiliki dua pasang sisi yang sama panjang (berdekatan) and diagonal tegak lurus.\nKesimpulan: Bangun tersebut adalah layang-layang.'
    },
    {
      id: 'm2-l1-q28',
      text: 'Sudut yang besarnya lebih dari 90 derajat tetapi kurang dari 180 derajat disebut sudut...',
      options: [
        { id: 'A', text: 'Lancip' },
        { id: 'B', text: 'Lurus' },
        { id: 'C', text: 'Tumpul' },
        { id: 'D', text: 'Siku-siku' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Definisi sudut tumpul.\nLangkah-langkah: Sudut yang lebih besar dari 90° (siku-siku) and lebih kecil dari 180° (lurus) disebut tumpul.\nKesimpulan: Sudut tersebut adalah sudut tumpul.'
    },
    {
      id: 'm2-l1-q29',
      text: 'Berapakah luas lingkaran yang memiliki jari-jari 10 cm? (Gunakan π = 3,14)',
      options: [
        { id: 'A', text: '31,4 cm²' },
        { id: 'B', text: '62,8 cm²' },
        { id: 'C', text: '314 cm²' },
        { id: 'D', text: '100 cm²' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung luas lingkaran.\nLangkah-langkah: Luas = π x r² = 3,14 x 10 x 10 = 3,14 x 100 = 314 cm².\nKesimpulan: Luas lingkaran tersebut adalah 314 cm².'
    },
    {
      id: 'm2-l1-q30',
      text: 'Luas sebuah segitiga adalah 20 cm². Jika alasnya 8 cm, berapakah tingginya?',
      options: [
        { id: 'A', text: '5 cm' },
        { id: 'B', text: '2,5 cm' },
        { id: 'C', text: '10 cm' },
        { id: 'D', text: '4 cm' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Mencari tinggi segitiga dari luas.\nLangkah-langkah: Luas = (a x t) / 2 => 20 = (8 x t) / 2 => 20 = 4t => t = 20 / 4 = 5 cm.\nKesimpulan: Tinggi segitiga tersebut adalah 5 cm.'
    },
    {
      id: 'm2-l1-q31',
      text: 'Diagonal-diagonal pada bangun persegi panjang bersifat...',
      options: [
        { id: 'A', text: 'Saling tegak lurus' },
        { id: 'B', text: 'Sama panjang and saling membagi dua sama besar' },
        { id: 'C', text: 'Hanya satu yang membagi dua sama besar' },
        { id: 'D', text: 'Tidak sama panjang' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Sifat diagonal persegi panjang.\nLangkah-langkah: Diagonal persegi panjang selalu sama panjang and berpotongan di tengah.\nKesimpulan: Diagonalnya sama panjang and saling membagi dua.'
    },
    {
      id: 'm2-l1-q32',
      text: 'Segitiga yang ketiga sisinya tidak ada yang sama panjang disebut segitiga...',
      options: [
        { id: 'A', text: 'Sama Kaki' },
        { id: 'B', text: 'Sama Sisi' },
        { id: 'C', text: 'Sembarang' },
        { id: 'D', text: 'Siku-siku' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Jenis segitiga berdasarkan sisi.\nLangkah-langkah: Segitiga sembarang adalah segitiga yang ketiga sisinya memiliki panjang yang berbeda-beda.\nKesimpulan: Bangun tersebut adalah segitiga sembarang.'
    },
    {
      id: 'm2-l1-q33',
      text: 'Sebuah lantai berbentuk persegi dengan panjang sisi 3 meter. Berapakah luas lantai tersebut?',
      options: [
        { id: 'A', text: '6 m²' },
        { id: 'B', text: '9 m²' },
        { id: 'C', text: '12 m²' },
        { id: 'D', text: '3 m²' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung luas persegi (lantai).\nLangkah-langkah: Luas = s x s = 3 x 3 = 9 m².\nKesimpulan: Luas lantai tersebut adalah 9 m².'
    },
    {
      id: 'm2-l1-q34',
      text: 'Berapakah keliling lingkaran jika jari-jarinya 14 cm? (Gunakan π = 22/7)',
      options: [
        { id: 'A', text: '44 cm' },
        { id: 'B', text: '88 cm' },
        { id: 'C', text: '154 cm' },
        { id: 'D', text: '616 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung keliling lingkaran.\nLangkah-langkah: Keliling = 2 x π x r = 2 x (22/7) x 14 = 2 x 22 x 2 = 88 cm.\nKesimpulan: Keliling lingkaran tersebut adalah 88 cm.'
    },
    {
      id: 'm2-l1-q35',
      text: 'Berapakah jumlah simetri lipat pada sebuah lingkaran?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '4' },
        { id: 'D', text: 'Tak terhingga' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Simetri pada lingkaran.\nLangkah-langkah: Lingkaran dapat dilipat di sepanjang garis mana pun yang melewati titik pusatnya.\nKesimpulan: Lingkaran memiliki simetri lipat tak terhingga.'
    },
    {
      id: 'm2-l1-q36',
      text: 'Berapakah jumlah sisi pada sebuah bangun datar segi empat?',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '6' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Dasar bangun datar.\nLangkah-langkah: Sesuai namanya, segi empat memiliki 4 sisi.\nKesimpulan: Jumlah sisinya adalah 4.'
    },
    {
      id: 'm2-l1-q37',
      text: 'Sebuah segitiga sama kaki memiliki panjang sisi miring 10 cm and alas 6 cm. Berapakah kelilingnya?',
      options: [
        { id: 'A', text: '16 cm' },
        { id: 'B', text: '22 cm' },
        { id: 'C', text: '26 m' },
        { id: 'D', text: '20 cm' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung keliling segitiga sama kaki.\nLangkah-langkah: Keliling = (2 x sisi miring) + alas = (2 x 10) + 6 = 20 + 6 = 26 cm.\nKesimpulan: Keliling segitiga tersebut adalah 26 cm.'
    },
    {
      id: 'm2-l1-q38',
      text: 'Jika sebuah sudut besarnya 120 derajat, maka sudut tersebut termasuk jenis sudut...',
      options: [
        { id: 'A', text: 'Lancip' },
        { id: 'B', text: 'Siku-siku' },
        { id: 'C', text: 'Tumpul' },
        { id: 'D', text: 'Lurus' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Identifikasi jenis sudut.\nLangkah-langkah: Karena 120° lebih besar dari 90° and lebih kecil dari 180°, maka ia tumpul.\nKesimpulan: Sudut tersebut adalah sudut tumpul.'
    },
    {
      id: 'm2-l1-q39',
      text: 'Sebuah jendela berbentuk persegi panjang dengan ukuran 60 cm x 40 cm. Berapakah luas kaca yang dibutuhkan?',
      options: [
        { id: 'A', text: '100 cm²' },
        { id: 'B', text: '200 cm²' },
        { id: 'C', text: '2400 cm²' },
        { id: 'D', text: '240 cm²' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung luas jendela.\nLangkah-langkah: Luas = p x l = 60 x 40 = 2400 cm².\nKesimpulan: Luas kaca yang dibutuhkan adalah 2400 cm².'
    },
    {
      id: 'm2-l1-q40',
      text: 'Diagonal-diagonal pada bangun persegi memiliki sifat...',
      options: [
        { id: 'A', text: 'Hanya sama panjang' },
        { id: 'B', text: 'Hanya tegak lurus' },
        { id: 'C', text: 'Sama panjang, saling membagi dua, and tegak lurus' },
        { id: 'D', text: 'Tidak sama panjang' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Sifat diagonal persegi.\nLangkah-langkah: Persegi adalah bangun paling sempurna, diagonalnya sama panjang, membagi dua sama besar, and berpotongan siku-siku (90°).\nKesimpulan: Diagonalnya sama panjang, membagi dua, and tegak lurus.'
    },
    {
      id: 'm2-l1-q41',
      text: 'Titik di mana dua garis bertemu untuk membentuk sudut disebut...',
      options: [
        { id: 'A', text: 'Sisi' },
        { id: 'B', text: 'Diagonal' },
        { id: 'C', text: 'Titik Sudut' },
        { id: 'D', text: 'Pusat' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Istilah geometri dasar.\nLangkah-langkah: Pertemuan dua garis atau lebih pada satu titik disebut titik sudut (vertex).\nKesimpulan: Titik tersebut adalah titik sudut.'
    },
    {
      id: 'm2-l1-q42',
      text: 'Berapakah jumlah total sudut dalam pada setiap jenis segitiga?',
      options: [
        { id: 'A', text: '90 derajat' },
        { id: 'B', text: '180 derajat' },
        { id: 'C', text: '360 derajat' },
        { id: 'D', text: '270 derajat' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Sifat sudut dalam segitiga.\nLangkah-langkah: Berdasarkan teori geometri, jumlah ketiga sudut dalam pada segitiga apa pun selalu 180°.\nKesimpulan: Jumlah total sudutnya adalah 180 derajat.'
    },
    {
      id: 'm2-l1-q43',
      text: 'Jika kita ingin mengetahui luas suatu daerah, satuan yang digunakan biasanya adalah satuan...',
      options: [
        { id: 'A', text: 'Panjang (m, cm)' },
        { id: 'B', text: 'Luas (m², cm²)' },
        { id: 'C', text: 'Volume (m³, cm³)' },
        { id: 'D', text: 'Berat (kg, g)' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Memahami satuan pengukuran.\nLangkah-langkah: Luas mengukur besarnya bidang dua dimensi, sehingga satuannya adalah persegi (pangkat 2).\nKesimpulan: Satuan luas adalah m² atau cm².'
    },
    {
      id: 'm2-l1-q44',
      text: 'Keliling sebuah persegi adalah 40 cm. Berapakah panjang sisinya?',
      options: [
        { id: 'A', text: '20 cm' },
        { id: 'B', text: '10 cm' },
        { id: 'C', text: '4 cm' },
        { id: 'D', text: '160 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari sisi dari keliling persegi.\nLangkah-langkah: Sisi = Keliling / 4 = 40 / 4 = 10 cm.\nKesimpulan: Panjang sisinya adalah 10 cm.'
    },
    {
      id: 'm2-l1-q45',
      text: 'Jarum jam pada pukul 03.00 tepat membentuk sudut...',
      options: [
        { id: 'A', text: 'Lancip' },
        { id: 'B', text: 'Tumpul' },
        { id: 'C', text: 'Siku-siku' },
        { id: 'D', text: 'Lurus' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Aplikasi sudut dalam kehidupan.\nLangkah-langkah: Pada pukul 03.00, jarum pendek di angka 3 and jarum panjang di angka 12, membentuk sudut 90°.\nKesimpulan: Sudut tersebut adalah sudut siku-siku.'
    },
    {
      id: 'm2-l1-q46',
      text: 'Besar wilayah yang tertutup oleh garis batas suatu bangun datar disebut...',
      options: [
        { id: 'A', text: 'Keliling' },
        { id: 'B', text: 'Luas' },
        { id: 'C', text: 'Volume' },
        { id: 'D', text: 'Garis Tengah' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Definisi luas.\nLangkah-langkah: Wilayah atau permukaan yang dibatasi oleh sisi-sisi bangun disebut luas.\nKesimpulan: Besaran tersebut adalah luas.'
    },
    {
      id: 'm2-l1-q47',
      text: 'Panjang seluruh garis yang membatasi suatu bangun datar disebut...',
      options: [
        { id: 'A', text: 'Luas' },
        { id: 'B', text: 'Keliling' },
        { id: 'C', text: 'Diameter' },
        { id: 'D', text: 'Jari-jari' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Definisi keliling.\nLangkah-langkah: Menjumlahkan seluruh panjang sisi luar bangun disebut mencari keliling.\nKesimpulan: Besaran tersebut adalah keliling.'
    },
    {
      id: 'm2-l1-q48',
      text: 'Pada jajar genjang, sisi-sisi yang berhadapan selalu...',
      options: [
        { id: 'A', text: 'Saling tegak lurus' },
        { id: 'B', text: 'Sejajar and sama panjang' },
        { id: 'C', text: 'Berbeda panjang' },
        { id: 'D', text: 'Berpotongan' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Sifat jajar genjang.\nLangkah-langkah: Salah satu syarat bangun jajar genjang adalah dua pasang sisinya sejajar and sama panjang.\nKesimpulan: Sisinya sejajar and sama panjang.'
    },
    {
      id: 'm2-l1-q49',
      text: 'Bagian tepi pada bangun datar setengah lingkaran terdiri dari satu garis lurus and satu...',
      options: [
        { id: 'A', text: 'Garis Lurus lainnya' },
        { id: 'B', text: 'Garis Lengkung' },
        { id: 'C', text: 'Titik Sudut' },
        { id: 'D', text: 'Diagonal' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Komponen setengah lingkaran.\nLangkah-langkah: Setengah lingkaran dibentuk oleh diameter (grid lurus) and busur (garis lengkung).\nKesimpulan: Terdapat satu garis lurus and satu garis lengkung.'
    },
    {
      id: 'm2-l1-q50',
      text: 'Berapakah jumlah seluruh sudut dalam pada bangun datar segi empat?',
      options: [
        { id: 'A', text: '180 derajat' },
        { id: 'B', text: '270 derajat' },
        { id: 'C', text: '360 derajat' },
        { id: 'D', text: '540 derajat' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Total sudut segi empat.\nLangkah-langkah: Semua jenis segi empat (persegi, jajar genjang, trapesium, dll) memiliki total sudut dalam 360°.\nKesimpulan: Jumlah seluruh sudutnya adalah 360 derajat.'
    }
  ],

 /* // --- MATEMATIKA: PERSAMAAN LINEAR (m4) ---
   'm4-l2': [
    {
      id: 'm4-l2-q1',
      text: 'Tentukan nilai x dari persamaan 3x - 5 = 10.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '5' },
        { id: 'C', text: '15' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Selesaikan persamaan dengan memindahkan konstanta.\nLangkah-langkah:\n3x - 5 = 10\n3x = 10 + 5\n3x = 15\nx = 15 / 3 = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q2',
      text: 'Hasil penyelesaian dari 2(x + 4) = 18 adalah...',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '9' },
        { id: 'D', text: '7' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Gunakan sifat distributif atau bagi kedua ruas dengan koefisien luar kurung.\nLangkah-langkah:\n2(x + 4) = 18\nx + 4 = 18 / 2\nx + 4 = 9\nx = 9 - 4 = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q3',
      text: 'Nilai x yang memenuhi persamaan 4x + 7 = 2x + 15 adalah...',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3' },
        { id: 'C', text: '4' },
        { id: 'D', text: '8' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Kelompokkan suku yang mengandung variabel di satu ruas and konstanta di ruas lainnya.\nLangkah-langkah:\n4x - 2x = 15 - 7\n2x = 8\nx = 8 / 2 = 4\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm4-l2-q4',
      text: 'Jika 12 - 3x = 3, maka berapakah nilai x?',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '-3' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Pindahkan variabel agar koefisiennya menjadi positif atau selesaikan secara bertahap.\nLangkah-langkah:\n12 - 3 = 3x\n9 = 3x\nx = 9 / 3 = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q5',
      text: 'Tentukan x dari persamaan x/2 + 5 = 11.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '6' },
        { id: 'C', text: '12' },
        { id: 'D', text: '8' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Kurangi konstanta terlebih dahulu, lalu kalikan dengan penyebut.\nLangkah-langkah:\nx/2 = 11 - 5\nx/2 = 6\nx = 6 * 2 = 12\nKesimpulan: Nilai x adalah 12.'
    },
    {
      id: 'm4-l2-q6',
      text: 'Penyelesaian dari 5(x - 2) = 15 adalah...',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '5' },
        { id: 'C', text: '1' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Bagi kedua ruas dengan 5 untuk menyederhanakan perhitungan.\nLangkah-langkah:\nx - 2 = 15 / 5\nx - 2 = 3\nx = 3 + 2 = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q7',
      text: 'Tentukan nilai x dari 2x + 1 = x + 10.',
      options: [
        { id: 'A', text: '9' },
        { id: 'B', text: '11' },
        { id: 'C', text: '10' },
        { id: 'D', text: '-9' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Pindahkan x ke ruas kiri and konstanta ke ruas kanan.\nLangkah-langkah:\n2x - x = 10 - 1\nx = 9\nKesimpulan: Nilai x adalah 9.'
    },
    {
      id: 'm4-l2-q8',
      text: 'Berapakah nilai x yang memenuhi -4x + 8 = -4?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '-3' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Hati-hati dengan tanda negatif saat membagi.\nLangkah-langkah:\n-4x = -4 - 8\n-4x = -12\nx = -12 / -4 = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q9',
      text: 'Jika 3x/4 = 9, maka nilai x adalah...',
      options: [
        { id: 'A', text: '12' },
        { id: 'B', text: '27' },
        { id: 'C', text: '36' },
        { id: 'D', text: '6' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kalikan dengan penyebut lalu bagi dengan koefisien pembilang.\nLangkah-langkah:\n3x = 9 * 4\n3x = 36\nx = 36 / 3 = 12\nKesimpulan: Nilai x adalah 12.'
    },
    {
      id: 'm4-l2-q10',
      text: 'Tentukan x dari persamaan x + 2x + 3 = 12.',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3' },
        { id: 'C', text: '4' },
        { id: 'D', text: '5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Gabungkan suku-suku yang sejenis (x + 2x = 3x).\nLangkah-langkah:\n3x + 3 = 12\n3x = 12 - 3\n3x = 9\nx = 9 / 3 = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q11',
      text: 'Nilai x yang memenuhi 7x - 10 = 5x + 2 adalah...',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '6' },
        { id: 'C', text: '8' },
        { id: 'D', text: '12' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kelompokkan variabel di kiri and konstanta di kanan.\nLangkah-langkah:\n7x - 5x = 2 + 10\n2x = 12\nx = 12 / 2 = 6\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm4-l2-q12',
      text: 'Penyelesaian dari 1/3x + 2 = 5 adalah...',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '6' },
        { id: 'C', text: '9' },
        { id: 'D', text: '1' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Kurangi 2 lalu kalikan dengan 3.\nLangkah-langkah:\n1/3x = 5 - 2\n1/3x = 3\nx = 3 * 3 = 9\nKesimpulan: Nilai x adalah 9.'
    },
    {
      id: 'm4-l2-q13',
      text: 'Jika 4(2x + 1) = 20, berapakah nilai x?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Bagi dengan 4 lalu kurangi dengan 1.\nLangkah-langkah:\n2x + 1 = 20 / 4\n2x + 1 = 5\n2x = 4\nx = 2\nKesimpulan: Nilai x adalah 2.'
    },
    {
      id: 'm4-l2-q14',
      text: 'Tentukan x jika 15 - (x + 2) = 8.',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '7' },
        { id: 'C', text: '9' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Buka kurung dengan memperhatikan tanda negatif.\nLangkah-langkah:\n15 - x - 2 = 8\n13 - x = 8\n-x = 8 - 13\n-x = -5\nx = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q15',
      text: 'Penyelesaian dari 2x/5 - 1 = 3 adalah...',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '8' },
        { id: 'C', text: '10' },
        { id: 'D', text: '20' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Pindahkan konstanta lalu kalikan silang.\nLangkah-langkah:\n2x/5 = 3 + 1\n2x/5 = 4\n2x = 20\nx = 10\nKesimpulan: Nilai x adalah 10.'
    },
    {
      id: 'm4-l2-q16',
      text: 'Jika 3(x - 4) = x, maka nilai x adalah...',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '6' },
        { id: 'C', text: '12' },
        { id: 'D', text: '8' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kalikan distributif lalu gabungkan variabel.\nLangkah-langkah:\n3x - 12 = x\n3x - x = 12\n2x = 12\nx = 6\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm4-l2-q17',
      text: 'Berapakah nilai x dari 5x + 3 = 2x + 12?',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '5' },
        { id: 'C', text: '9' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Pindahkan suku sejenis ke masing-masing ruas.\nLangkah-langkah:\n5x - 2x = 12 - 3\n3x = 9\nx = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q18',
      text: 'Penyelesaian dari 0,2x = 4 adalah...',
      options: [
        { id: 'A', text: '0,8' },
        { id: 'B', text: '2' },
        { id: 'C', text: '20' },
        { id: 'D', text: '8' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Bagi 4 dengan 0,2 atau kalikan 4 dengan 5 (karena 0,2 = 1/5).\nLangkah-langkah:\nx = 4 / 0,2\nx = 40 / 2\nx = 20\nKesimpulan: Nilai x adalah 20.'
    },
    {
      id: 'm4-l2-q19',
      text: 'Jika x + 5 = 2x - 3, maka nilai x adalah...',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '5' },
        { id: 'C', text: '8' },
        { id: 'D', text: '-2' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Pindahkan x agar tetap positif di satu ruas.\nLangkah-langkah:\n5 + 3 = 2x - x\n8 = x\nKesimpulan: Nilai x adalah 8.'
    },
    {
      id: 'm4-l2-q20',
      text: 'Tentukan x dari persamaan 10 - 2x = x + 1.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '9' },
        { id: 'D', text: '11' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kelompokkan variabel di satu ruas.\nLangkah-langkah:\n10 - 1 = x + 2x\n9 = 3x\nx = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q21',
      text: 'Penyelesaian dari 4x + 6 = 2(x + 5) adalah...',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '4' },
        { id: 'C', text: '1' },
        { id: 'D', text: '5' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Selesaikan operasi dalam kurung terlebih dahulu.\nLangkah-langkah:\n4x + 6 = 2x + 10\n4x - 2x = 10 - 6\n2x = 4\nx = 2\nKesimpulan: Nilai x adalah 2.'
    },
    {
      id: 'm4-l2-q22',
      text: 'Berapakah nilai x jika x/2 = x/3 + 2?',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '12' },
        { id: 'C', text: '5' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Hilangkan penyebut dengan mengalikan seluruh ruas dengan KPK penyebut (6).\nLangkah-langkah:\n6 * (x/2) = 6 * (x/3 + 2)\n3x = 2x + 12\n3x - 2x = 12\nx = 12\nKesimpulan: Nilai x adalah 12.'
    },
    {
      id: 'm4-l2-q23',
      text: 'Jika 18 - 4x = 2, tentukan nilai x.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '16' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pindahkan suku konstanta ke ruas lain.\nLangkah-langkah:\n18 - 2 = 4x\n16 = 4x\nx = 4\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm4-l2-q24',
      text: 'Selesaikan persamaan: 3(x + 1) - 2 = 10.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '1' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kalikan distributif and sederhanakan konstanta.\nLangkah-langkah:\n3x + 3 - 2 = 10\n3x + 1 = 10\n3x = 9\nx = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q25',
      text: 'Jika x/10 + 7 = 8, berapakah nilai x?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '10' },
        { id: 'C', text: '15' },
        { id: 'D', text: '0,1' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kurangi 7 lalu kalikan 10.\nLangkah-langkah:\nx/10 = 8 - 7\nx/10 = 1\nx = 10\nKesimpulan: Nilai x adalah 10.'
    },
    {
      id: 'm4-l2-q26',
      text: 'Tentukan x dari 2x + 8 = 0.',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '-4' },
        { id: 'C', text: '8' },
        { id: 'D', text: '-8' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pindahkan 8 lalu bagi dengan 2.\nLangkah-langkah:\n2x = -8\nx = -4\nKesimpulan: Nilai x adalah -4.'
    },
    {
      id: 'm4-l2-q27',
      text: 'Nilai x yang memenuhi 5 - (2x - 1) = 2 adalah...',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Hati-hati saat membuka kurung dengan tanda negatif di depannya.\nLangkah-langkah:\n5 - 2x + 1 = 2\n6 - 2x = 2\n6 - 2 = 2x\n4 = 2x\nx = 2\nKesimpulan: Nilai x adalah 2.'
    },
    {
      id: 'm4-l2-q28',
      text: 'Jika 3x + 15 = 4x + 10, tentukan nilai x.',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '-5' },
        { id: 'C', text: '25' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kurangi suku variabel yang lebih kecil dari variabel yang lebih besar.\nLangkah-langkah:\n15 - 10 = 4x - 3x\n5 = x\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q29',
      text: 'Tentukan x dari x/4 + x/4 = 10.',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '10' },
        { id: 'C', text: '20' },
        { id: 'D', text: '40' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Gabungkan pecahan yang memiliki penyebut sama.\nLangkah-langkah:\n2x / 4 = 10\nx / 2 = 10\nx = 20\nKesimpulan: Nilai x adalah 20.'
    },
    {
      id: 'm4-l2-q30',
      text: 'Penyelesaian dari 2(x - 3) = 3(x - 5) Hull adalah...',
      options: [
        { id: 'A', text: '9' },
        { id: 'B', text: '-9' },
        { id: 'C', text: '3' },
        { id: 'D', text: '5' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kalikan distributif pada kedua ruas lalu gabungkan variabel.\nLangkah-langkah:\n2x - 6 = 3x - 15\n15 - 6 = 3x - 2x\n9 = x\nKesimpulan: Nilai x adalah 9.'
    },
    {
      id: 'm4-l2-q31',
      text: 'Harga 2 pensil adalah Rp4.000,00. Jika harga satu pensil adalah x, maka persamaan yang tepat adalah...',
      options: [
        { id: 'A', text: 'x + 2 = 4000' },
        { id: 'B', text: '2x = 4000' },
        { id: 'C', text: 'x/2 = 4000' },
        { id: 'D', text: '4000x = 2' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Jumlah barang dikalikan harga satuan sama dengan total harga.\nLangkah-langkah: 2 buah * x (harga) = 4.000.\nKesimpulan: Persamaannya adalah 2x = 4.000.'
    },
    {
      id: 'm4-l2-q32',
      text: 'Umur Ibu 20 tahun lebih tua dari anaknya. Jika jumlah umur mereka 40 tahun, berapakah umur anak (x)?',
      options: [
        { id: 'A', text: '10 tahun' },
        { id: 'B', text: '15 tahun' },
        { id: 'C', text: '20 tahun' },
        { id: 'D', text: '5 tahun' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Misalkan umur anak x, maka umur ibu x + 20.\nLangkah-langkah:\nx + (x + 20) = 40\n2x + 20 = 40\n2x = 20\nx = 10\nKesimpulan: Umur anak adalah 10 tahun.'
    },
    {
      id: 'm4-l2-q33',
      text: 'Persegi panjang memiliki panjang (x + 5) cm and lebar x cm. Jika kelilingnya 30 cm, berapakah nilai x?',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '6' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Gunakan rumus keliling K = 2(p + l).\nLangkah-langkah:\n2 * (x + 5 + x) = 30\n2 * (2x + 5) = 30\n2x + 5 = 15\n2x = 10\nx = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q34',
      text: 'Tiga bilangan bulat berurutan berjumlah 15. Bilangan terkecilnya adalah...',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '6' },
        { id: 'D', text: '3' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Misalkan bilangan tersebut x, x+1, x+2.\nLangkah-langkah:\nx + (x+1) + (x+2) = 15\n3x + 3 = 15\n3x = 12\nx = 4\nKesimpulan: Bilangan terkecil adalah 4.'
    },
    {
      id: 'm4-l2-q35',
      text: 'Tentukan x dari 4x - 12 = 0.',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3' },
        { id: 'C', text: '4' },
        { id: 'D', text: '-3' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pindahkan konstanta lalu bagi koefisien.\nLangkah-langkah:\n4x = 12\nx = 3\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q36',
      text: 'Berapakah nilai x dari 1/2(x + 10) = 15?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '20' },
        { id: 'C', text: '5' },
        { id: 'D', text: '25' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kalikan kedua ruas dengan 2 untuk menghilangkan pecahan.\nLangkah-langkah:\nx + 10 = 15 * 2\nx + 10 = 30\nx = 20\nKesimpulan: Nilai x adalah 20.'
    },
    {
      id: 'm4-l2-q37',
      text: 'Jika 2x - 7 = 3x - 10, berapakah nilai x?',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '17' },
        { id: 'C', text: '-3' },
        { id: 'D', text: '7' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kelompokkan variabel di satu ruas.\nLangkah-langkah:\n10 - 7 = 3x - 2x\n3 = x\nKesimpulan: Nilai x adalah 3.'
    },
    {
      id: 'm4-l2-q38',
      text: 'Selesaikan persamaan: 5x/2 = 10.',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '4' },
        { id: 'C', text: '20' },
        { id: 'D', text: '5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kalikan dengan 2 lalu bagi dengan 5.\nLangkah-langkah:\n5x = 10 * 2\n5x = 20\nx = 4\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm4-l2-q39',
      text: 'Jika 14 + x = 2x - 5, tentukan nilai x.',
      options: [
        { id: 'A', text: '9' },
        { id: 'B', text: '19' },
        { id: 'C', text: '21' },
        { id: 'D', text: '11' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pindahkan variabel x ke ruas kanan.\nLangkah-langkah:\n14 + 5 = 2x - x\n19 = x\nKesimpulan: Nilai x adalah 19.'
    },
    {
      id: 'm4-l2-q40',
      text: 'Penyelesaian dari 3(2x - 4) = 12 adalah...',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '3' },
        { id: 'C', text: '4' },
        { id: 'D', text: '6' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Bagi 12 dengan 3 terlebih dahulu untuk mempercepat.\nLangkah-langkah:\n2x - 4 = 12 / 3\n2x - 4 = 4\n2x = 8\nx = 4\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm4-l2-q41',
      text: 'Jika x - 5 = -x + 5, maka berapakah nilai x?',
      options: [
        { id: 'A', text: '0' },
        { id: 'B', text: '5' },
        { id: 'C', text: '10' },
        { id: 'D', text: '-5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pindahkan -x ke kiri and -5 ke kanan.\nLangkah-langkah:\nx + x = 5 + 5\n2x = 10\nx = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q42',
      text: 'Hasil dari 12x = 60 adalah...',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '4' },
        { id: 'C', text: '6' },
        { id: 'D', text: '12' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Bagi 60 dengan 12.\nLangkah-langkah:\nx = 60 / 12 = 5.\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q43',
      text: 'Jika 15 - 2x = x, tentukan nilai x.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '5' },
        { id: 'C', text: '15' },
        { id: 'D', text: '-5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pindahkan -2x ke ruas kanan.\nLangkah-langkah:\n15 = x + 2x\n15 = 3x\nx = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q44',
      text: 'Penyelesaian dari 4(x + 2) = 3(x + 4) adalah...',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '6' },
        { id: 'C', text: '8' },
        { id: 'D', text: '12' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kalikan distributif pada kedua ruas.\nLangkah-langkah:\n4x + 8 = 3x + 12\n4x - 3x = 12 - 8\nx = 4\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm4-l2-q45',
      text: 'Jika x/5 + 1 = 0, berapakah nilai x?',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '-5' },
        { id: 'C', text: '1' },
        { id: 'D', text: '0' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kurangi 1 lalu kalikan 5.\nLangkah-langkah:\nx/5 = -1\nx = -5\nKesimpulan: Nilai x adalah -5.'
    },
    {
      id: 'm4-l2-q46',
      text: 'Tentukan x jika 2x + 4 = 16.',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '6' },
        { id: 'C', text: '8' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kurangi 4 lalu bagi dengan 2.\nLangkah-langkah:\n2x = 16 - 4\n2x = 12\nx = 6\nKesimpulan: Nilai x adalah 6.'
    },
    {
      id: 'm4-l2-q47',
      text: 'Jika 3x - 1 = 11, berapakah nilai x?',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '4' },
        { id: 'C', text: '5' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Tambahkan 1 lalu bagi dengan 3.\nLangkah-langkah:\n3x = 12\nx = 4\nKesimpulan: Nilai x adalah 4.'
    },
    {
      id: 'm4-l2-q48',
      text: 'Tentukan nilai x dari 10 + 5x = 35.',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '5' },
        { id: 'C', text: '7' },
        { id: 'D', text: '25' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kurangi 10 lalu bagi dengan 5.\nLangkah-langkah:\n5x = 35 - 10\n5x = 25\nx = 5\nKesimpulan: Nilai x adalah 5.'
    },
    {
      id: 'm4-l2-q49',
      text: 'Sepotong tongkat sepanjang x cm dipotong 5 cm and sisanya adalah 15 cm. Persamaan yang sesuai adalah...',
      options: [
        { id: 'A', text: 'x + 5 = 15' },
        { id: 'B', text: 'x - 5 = 15' },
        { id: 'C', text: '5x = 15' },
        { id: 'D', text: 'x/5 = 15' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Operasi "dipotong" berarti pengurangan.\nLangkah-langkah: Panjang mula-mula (x) dikurangi potongan (5) hasilnya adalah sisa (15).\nKesimpulan: Persamaannya adalah x - 5 = 15.'
    },
    {
      id: 'm4-l2-q50',
      text: 'Penyelesaian dari 2(x - 1) + 3(x + 2) = 14 adalah...',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kalikan distributif and gabungkan semua suku sejenis.\nLangkah-langkah:\n2x - 2 + 3x + 6 = 14\n5x + 4 = 14\n5x = 10\nx = 2\nKesimpulan: Nilai x adalah 2.'
    }
  ], */

  // --- MATEMATIKA: GEOMETRI & PENGUKURAN LEVEL 2 (m2-l2) ---
  'm2-l2': [
    {
      id: 'm2-l2-q1',
      text: 'Dua buah bangun datar dikatakan kongruen jika memenuhi syarat...',
      options: [
        { id: 'A', text: 'Bentuknya sama tetapi ukurannya berbeda' },
        { id: 'B', text: 'Sisi-sisi yang bersesuaian memiliki perbandingan yang sama' },
        { id: 'C', text: 'Bentuk dan ukurannya sama persis' },
        { id: 'D', text: 'Sudut-sudut yang bersesuaian tidak sama besar' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Pengertian dasar kekongruenan.\nLangkah-langkah: Bangun kongruen adalah dua bangun yang identik, baik dari segi bentuk maupun ukuran (sisi dan sudut sama).\nKesimpulan: Jawaban yang tepat adalah bentuk dan ukurannya sama persis.'
    },
    {
      id: 'm2-l2-q2',
      text: 'Manakah di bawah ini yang merupakan syarat dua segitiga dikatakan sebangun?',
      options: [
        { id: 'A', text: 'Sisi-sisi yang bersesuaian sama panjang' },
        { id: 'B', text: 'Sudut-sudut yang bersesuaian sama besar' },
        { id: 'C', text: 'Keliling kedua segitiga sama besar' },
        { id: 'D', text: 'Luas kedua segitiga sama besar' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Syarat kesebangunan pada segitiga.\nLangkah-langkah: Dua segitiga sebangun jika sudut-sudut yang bersesuaian sama besar (AAA) atau sisi-sisi yang bersesuaian proporsional.\nKesimpulan: Sudut-sudut yang bersesuaian sama besar adalah salah satu syarat utama.'
    },
    {
      id: 'm2-l2-q3',
      text: 'Sebuah foto berukuran 3 cm x 4 cm akan diperbesar sehingga lebarnya menjadi 9 cm. Berapakah panjang foto setelah diperbesar?',
      options: [
        { id: 'A', text: '10 cm' },
        { id: 'B', text: '12 cm' },
        { id: 'C', text: '15 cm' },
        { id: 'D', text: '18 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung dimensi bangun yang sebangun.\nLangkah-langkah: Gunakan perbandingan lebar1/lebar2 = panjang1/panjang2. 3/9 = 4/x -> 1/3 = 4/x -> x = 4 * 3 = 12.\nKesimpulan: Panjang foto menjadi 12 cm.'
    },
    {
      id: 'm2-l2-q4',
      text: 'Dua persegi panjang dikatakan pasti sebangun jika...',
      options: [
        { id: 'A', text: 'Memiliki keliling yang sama' },
        { id: 'B', text: 'Memiliki luas yang sama' },
        { id: 'C', text: 'Perbandingan panjang dan lebarnya sama' },
        { id: 'D', text: 'Memiliki satu sisi yang sama panjang' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Syarat kesebangunan pada persegi panjang.\nLangkah-langkah: Sudut pada persegi panjang pasti 90 derajat, maka syarat selanjutnya adalah perbandingan sisi-sisi yang bersesuaian harus sama.\nKesimpulan: Perbandingan panjang dan lebarnya harus sama.'
    },
    {
      id: 'm2-l2-q5',
      text: 'Sebuah tiang setinggi 2 meter memiliki bayangan sepanjang 3 meter. Pada saat yang sama, sebuah pohon memiliki bayangan sepanjang 12 meter. Tinggi pohon tersebut adalah...',
      options: [
        { id: 'A', text: '6 meter' },
        { id: 'B', text: '8 meter' },
        { id: 'C', text: '9 meter' },
        { id: 'D', text: '10 meter' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Penerapan kesebangunan pada bayangan.\nLangkah-langkah: tinggi tiang / bayangan tiang = tinggi pohon / bayangan pohon. 2/3 = x/12 -> 3x = 24 -> x = 8.\nKesimpulan: Tinggi pohon adalah 8 meter.'
    },
    {
      id: 'm2-l2-q6',
      text: 'Jika segitiga ABC kongruen dengan segitiga DEF, maka pernyataan yang benar adalah...',
      options: [
        { id: 'A', text: 'Sisi-sisi ABC lebih panjang dari DEF' },
        { id: 'B', text: 'Sudut-sudut yang bersesuaian besarnya sama' },
        { id: 'C', text: 'Luas ABC berbeda dengan luas DEF' },
        { id: 'D', text: 'Bentuknya sama tetapi ukurannya berbeda' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Sifat kekongruenan.\nLangkah-langkah: Bangun yang kongruen memiliki semua bagian yang bersesuaian sama besar (sisi dan sudut).\nKesimpulan: Sudut-sudut yang bersesuaian pasti sama besar.'
    },
    {
      id: 'm2-l2-q7',
      text: 'Syarat dua bangun datar dikatakan sebangun adalah sudut-sudut yang bersesuaian sama besar dan...',
      options: [
        { id: 'A', text: 'Sisi-sisi yang bersesuaian sama panjang' },
        { id: 'B', text: 'Sisi-sisi yang bersesuaian memiliki perbandingan yang sama' },
        { id: 'C', text: 'Luasnya harus sama' },
        { id: 'D', text: 'Kelilingnya harus sama' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Definisi kesebangunan umum.\nLangkah-langkah: Kesebangunan memerlukan sudut yang sama dan perbandingan sisi yang konsisten (proporsional).\nKesimpulan: Sisi-sisi yang bersesuaian harus proporsional.'
    },
    {
      id: 'm2-l2-q8',
      text: 'Dua buah lingkaran dengan jari-jari berbeda bersifat...',
      options: [
        { id: 'A', text: 'Pasti kongruen' },
        { id: 'B', text: 'Pasti sebangun' },
        { id: 'C', text: 'Tidak mungkin sebangun' },
        { id: 'D', text: 'Hanya sama bentuk' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kesebangunan pada bangun beraturan.\nLangkah-langkah: Semua lingkaran memiliki bentuk yang sama (360 derajat), sehingga perbandingan bagian-bagiannya (diameter/jari-jari) akan selalu konsisten.\nKesimpulan: Semua lingkaran pasti sebangun.'
    },
    {
      id: 'm2-l2-q9',
      text: 'Jika perbandingan sisi dua persegi yang sebangun adalah 1 : 3, maka perbandingan luasnya adalah...',
      options: [
        { id: 'A', text: '1 : 3' },
        { id: 'B', text: '1 : 6' },
        { id: 'C', text: '1 : 9' },
        { id: 'D', text: '1 : 12' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Hubungan perbandingan sisi dan luas.\nLangkah-langkah: Perbandingan luas adalah kuadrat dari perbandingan sisi. (1:3)^2 = 1^2 : 3^2 = 1 : 9.\nKesimpulan: Perbandingan luasnya adalah 1 : 9.'
    },
    {
      id: 'm2-l2-q10',
      text: 'Sebuah segitiga memiliki sisi 6 cm, 8 cm, dan 10 cm. Segitiga lain yang sebangun dengannya memiliki sisi terpendek 12 cm. Panjang sisi terpanjang segitiga kedua adalah...',
      options: [
        { id: 'A', text: '15 cm' },
        { id: 'B', text: '20 cm' },
        { id: 'C', text: '24 cm' },
        { id: 'D', text: '30 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Skalasi pada segitiga sebangun.\nLangkah-langkah: Perbandingan sisi terpendek 6 : 12 = 1 : 2. Maka sisi terpanjang 10 * 2 = 20.\nKesimpulan: Panjang sisi terpanjang adalah 20 cm.'
    },
    {
      id: 'm2-l2-q11',
      text: 'Manakah pasangan bangun berikut yang PASTI sebangun?',
      options: [
        { id: 'A', text: 'Dua buah belah ketupat' },
        { id: 'B', text: 'Dua buah segitiga sama kaki' },
        { id: 'C', text: 'Dua buah persegi' },
        { id: 'D', text: 'Dua buah trapesium' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Identifikasi bangun yang selalu sebangun.\nLangkah-langkah: Persegi memiliki sudut yang selalu 90 derajat dan sisi yang selalu sama panjang, sehingga perbandingannya selalu tetap.\nKesimpulan: Dua buah persegi pasti sebangun.'
    },
    {
      id: 'm2-l2-q12',
      text: 'Pada dua segitiga yang kongruen, jika sudut A = 40° and sudut B = 60°, maka sudut ketiga pada segitiga pasangannya adalah...',
      options: [
        { id: 'A', text: '40°' },
        { id: 'B', text: '60°' },
        { id: 'C', text: '80°' },
        { id: 'D', text: '100°' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung sudut segitiga kongruen.\nLangkah-langkah: Total sudut segitiga 180°. Sudut ketiga = 180 - (40 + 60) = 80°.\nKesimpulan: Sudut ketiga adalah 80°.'
    },
    {
      id: 'm2-l2-q13',
      text: 'Sebuah model gedung memiliki tinggi 20 cm dan lebar 15 cm. Jika tinggi gedung sebenarnya 40 meter, lebar gedung sebenarnya adalah...',
      options: [
        { id: 'A', text: '25 meter' },
        { id: 'B', text: '30 meter' },
        { id: 'C', text: '35 meter' },
        { id: 'D', text: '45 meter' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Penggunaan rasio pada model/skala.\nLangkah-langkah: 20 cm / 40 m = 15 cm / x m. 20/4000 = 15/x (dalam cm) atau lebih mudah 20/40 = 15/x. 1/2 = 15/x -> x = 30.\nKesimpulan: Lebar gedung sebenarnya adalah 30 meter.'
    },
    {
      id: 'm2-l2-q14',
      text: 'Dua segitiga sebangun memiliki perbandingan sisi 2 : 5. Jika keliling segitiga kecil 20 cm, maka keliling segitiga besar adalah...',
      options: [
        { id: 'A', text: '40 cm' },
        { id: 'B', text: '50 cm' },
        { id: 'C', text: '60 cm' },
        { id: 'D', text: '100 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Perbandingan keliling pada bangun sebangun.\nLangkah-langkah: Perbandingan keliling sama dengan perbandingan sisi. 2/5 = 20/x -> 2x = 100 -> x = 50.\nKesimpulan: Keliling segitiga besar adalah 50 cm.'
    },
    {
      id: 'm2-l2-q15',
      text: 'Sisi-sisi yang bersesuaian pada dua bangun datar yang sebangun adalah...',
      options: [
        { id: 'A', text: 'Sama panjang' },
        { id: 'B', text: 'Saling tegak lurus' },
        { id: 'C', text: 'Saling sejajar' },
        { id: 'D', text: 'Memiliki perbandingan yang sama' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Karakteristik sisi bangun sebangun.\nLangkah-langkah: Dalam kesebangunan, sisi tidak harus sama panjang, tetapi rasionya harus tetap.\nKesimpulan: Sisi-sisi tersebut memiliki perbandingan yang sama.'
    },
    {
      id: 'm2-l2-q16',
      text: 'Dua segitiga dikatakan kongruen jika memenuhi syarat "Sisi-Sudut-Sisi" (S-Sd-S). Artinya...',
      options: [
        { id: 'A', text: 'Dua sisi sama dan satu sudut sembarang sama' },
        { id: 'B', text: 'Dua sisi sama dan sudut yang diapitnya sama' },
        { id: 'C', text: 'Satu sisi sama dan dua sudut yang mengapitnya sama' },
        { id: 'D', text: 'Semua sisi dan sudut harus sama' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Syarat kekongruenan SAS.\nLangkah-langkah: Syarat S-Sd-S berarti dua pasang sisi yang bersesuaian sama panjang dan sudut di antara kedua sisi tersebut sama besar.\nKesimpulan: Sudut yang diapit oleh kedua sisi tersebut harus sama.'
    },
    {
      id: 'm2-l2-q17',
      text: 'Panjang bayangan sebuah siswa yang tingginya 150 cm adalah 2 meter. Jika pada saat yang sama bayangan gedung adalah 20 meter, maka tinggi gedung adalah...',
      options: [
        { id: 'A', text: '10 meter' },
        { id: 'B', text: '15 meter' },
        { id: 'C', text: '25 meter' },
        { id: 'D', text: '30 meter' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menentukan tinggi benda dengan kesebangunan.\nLangkah-langkah: 150cm = 1,5m. Rasio: 1,5 / 2 = x / 20. 2x = 30 -> x = 15.\nKesimpulan: Tinggi gedung adalah 15 meter.'
    },
    {
      id: 'm2-l2-q18',
      text: 'Jika dua buah bangun datar kongruen, maka perbandingan luasnya adalah...',
      options: [
        { id: 'A', text: '1 : 1' },
        { id: 'B', text: '1 : 2' },
        { id: 'C', text: '2 : 1' },
        { id: 'D', text: 'Tergantung bentuk bangunnya' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Perbandingan luas bangun kongruen.\nLangkah-langkah: Karena bangun kongruen identik ukuran dan bentuknya, maka luasnya pasti sama.\nKesimpulan: Perbandingan luasnya adalah 1 : 1.'
    },
    {
      id: 'm2-l2-q19',
      text: 'Manakah syarat yang TIDAK cukup untuk membuktikan dua segitiga kongruen?',
      options: [
        { id: 'A', text: 'Sisi - Sisi - Sisi' },
        { id: 'B', text: 'Sudut - Sisi - Sudut' },
        { id: 'C', text: 'Sisi - Sudut - Sisi' },
        { id: 'D', text: 'Sudut - Sudut - Sudut' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Analisis syarat kekongruenan.\nLangkah-langkah: Sudut-Sudut-Sudut (AAA) hanya membuktikan kesebangunan, bukan kekongruenan (ukuran bisa berbeda).\nKesimpulan: Sudut-Sudut-Sudut tidak menjamin kekongruenan.'
    },
    {
      id: 'm2-l2-q20',
      text: 'Sebuah persegi panjang A memiliki ukuran 2 cm x 3 cm. Persegi panjang B sebangun dengan A dan memiliki panjang 12 cm. Berapakah lebar persegi panjang B?',
      options: [
        { id: 'A', text: '6 cm' },
        { id: 'B', text: '8 cm' },
        { id: 'C', text: '9 cm' },
        { id: 'D', text: '10 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari sisi bangun sebangun.\nLangkah-langkah: Misalkan lebar 2 dan panjang 3. Jika panjang menjadi 12 (dikali 4), maka lebar juga dikali 4. 2 * 4 = 8.\nKesimpulan: Lebar persegi panjang B adalah 8 cm.'
    },
    {
      id: 'm2-l2-q21',
      text: 'Skala sebuah peta adalah 1 : 500.000. Jika jarak dua kota pada peta adalah 4 cm, berapakah jarak sebenarnya?',
      options: [
        { id: 'A', text: '2 km' },
        { id: 'B', text: '20 km' },
        { id: 'C', text: '200 km' },
        { id: 'D', text: '2000 km' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Konversi skala peta.\nLangkah-langkah: Jarak sebenarnya = 4 cm * 500.000 = 2.000.000 cm = 20.000 m = 20 km.\nKesimpulan: Jarak sebenarnya adalah 20 km.'
    },
    {
      id: 'm2-l2-q22',
      text: 'Dua buah segitiga sebangun memiliki perbandingan sisi 3 : 4. Berapakah perbandingan kelilingnya?',
      options: [
        { id: 'A', text: '3 : 4' },
        { id: 'B', text: '9 : 16' },
        { id: 'C', text: '6 : 8' },
        { id: 'D', text: '1 : 1' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Rasio keliling bangun sebangun.\nLangkah-langkah: Perbandingan keliling identik dengan perbandingan sisi (faktor skala linear).\nKesimpulan: Perbandingannya tetap 3 : 4.'
    },
    {
      id: 'm2-l2-q23',
      text: 'Sebuah foto berukuran 40 cm x 60 cm diletakkan pada sebuah karton. Di sebelah kiri, kanan, dan atas foto masih terdapat sisa karton selebar 4 cm. Jika foto dan karton sebangun, berapakah lebar sisa karton di bagian bawah?',
      options: [
        { id: 'A', text: '4 cm' },
        { id: 'B', text: '6 cm' },
        { id: 'C', text: '8 cm' },
        { id: 'D', text: '10 cm' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Soal aplikasi foto dan karton sebangun.\nLangkah-langkah: Lebar karton = 40 + 4 + 4 = 48. Panjang karton = 60 + 4 + x. Rasio: 40/48 = 60/(64+x). 5/6 = 60/(64+x). 5(64+x) = 360 -> 64+x = 72 -> x = 8.\nKesimpulan: Sisa karton di bawah adalah 8 cm.'
    },
    {
      id: 'm2-l2-q24',
      text: 'Syarat dua poligon dikatakan sebangun adalah perbandingan sisi-sisi yang bersesuaian sama dan...',
      options: [
        { id: 'A', text: 'Sudut-sudut yang bersesuaian sama besar' },
        { id: 'B', text: 'Jumlah sisinya sama' },
        { id: 'C', text: 'Memiliki diagonal yang sama panjang' },
        { id: 'D', text: 'Luasnya sebanding' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Syarat kesebangunan poligon.\nLangkah-langkah: Poligon memerlukan kesamaan sudut selain proporsionalitas sisi.\nKesimpulan: Sudut-sudut yang bersesuaian harus sama besar.'
    },
    {
      id: 'm2-l2-q25',
      text: 'Dua buah segitiga siku-siku pasti sebangun jika...',
      options: [
        { id: 'A', text: 'Memiliki satu sudut lancip yang sama besar' },
        { id: 'B', text: 'Memiliki hipotenusa yang sama panjang' },
        { id: 'C', text: 'Memiliki luas yang sama' },
        { id: 'D', text: 'Memiliki tinggi yang sama' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Kesebangunan pada segitiga siku-siku.\nLangkah-langkah: Karena satu sudut sudah pasti 90°, jika ada satu sudut lancip lagi yang sama, maka ketiga sudutnya pasti sama (AAA).\nKesimpulan: Cukup memiliki satu sudut lancip yang sama besar.'
    },
    {
      id: 'm2-l2-q26',
      text: 'Jika segitiga PQR sebangun dengan segitiga XYZ dengan perbandingan 2 : 3, dan luas PQR adalah 40 cm², berapakah luas XYZ?',
      options: [
        { id: 'A', text: '60 cm²' },
        { id: 'B', text: '90 cm²' },
        { id: 'C', text: '120 cm²' },
        { id: 'D', text: '160 cm²' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung luas bangun sebangun.\nLangkah-langkah: Perbandingan luas = (2/3)^2 = 4/9. Maka 4/9 = 40/x -> x = 90.\nKesimpulan: Luas segitiga XYZ adalah 90 cm².'
    },
    {
      id: 'm2-l2-q27',
      text: 'Bangun-bangun berikut yang selalu kongruen adalah...',
      options: [
        { id: 'A', text: 'Dua persegi dengan keliling sama' },
        { id: 'B', text: 'Dua segitiga dengan luas sama' },
        { id: 'C', text: 'Dua lingkaran dengan luas sama' },
        { id: 'D', text: 'Dua persegi panjang dengan luas sama' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Identifikasi kekongruenan pasti.\nLangkah-langkah: Dua persegi dengan keliling sama berarti panjang sisinya sama. Karena bentuk dan ukuran sama, mereka pasti kongruen.\nKesimpulan: Dua persegi dengan keliling sama pasti kongruen.'
    },
    {
      id: 'm2-l2-q28',
      text: 'Sisi-sisi sebuah segitiga adalah 3, 4, and 5. Sisi-sisi segitiga yang sebangun dengannya bisa berupa...',
      options: [
        { id: 'A', text: '4, 5, 6' },
        { id: 'B', text: '6, 8, 12' },
        { id: 'C', text: '9, 12, 15' },
        { id: 'D', text: '5, 12, 13' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mencari kelipatan sisi sebangun.\nLangkah-langkah: Cek perbandingan: 9/3 = 3, 12/4 = 3, 15/5 = 3. Perbandingannya tetap.\nKesimpulan: Sisi 9, 12, 15 sebangun dengan 3, 4, 5.'
    },
    {
      id: 'm2-l2-q29',
      text: 'Jika segitiga ABC dan segitiga DEF kongruen, AB=DE dan BC=EF, maka sudut yang harus sama adalah...',
      options: [
        { id: 'A', text: 'Sudut A = Sudut D' },
        { id: 'B', text: 'Sudut B = Sudut E' },
        { id: 'C', text: 'Sudut C = Sudut F' },
        { id: 'D', text: 'Semua benar' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menentukan sudut apit pada kekongruenan S-Sd-S.\nLangkah-langkah: Sudut yang diapit oleh sisi AB dan BC adalah sudut B. Sudut yang diapit DE dan EF adalah sudut E.\nKesimpulan: Sudut B harus sama dengan sudut E.'
    },
    {
      id: 'm2-l2-q30',
      text: 'Sebuah denah rumah menggunakan skala 1 : 100. Jika luas sebuah kamar pada denah adalah 12 cm², berapakah luas kamar sebenarnya?',
      options: [
        { id: 'A', text: '12 m²' },
        { id: 'B', text: '120 m²' },
        { id: 'C', text: '1,2 m²' },
        { id: 'D', text: '1200 m²' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Konversi luas menggunakan skala denah.\nLangkah-langkah: Skala luas adalah kuadrat skala linear. (1/100)^2 = 1/10.000. Maka luas sebenarnya = 12 * 10.000 = 120.000 cm² = 12 m².\nKesimpulan: Luas sebenarnya adalah 12 m².'
    },
    {
      id: 'm2-l2-q31',
      text: 'Dua segitiga sama sisi dengan panjang sisi berbeda bersifat...',
      options: [
        { id: 'A', text: 'Pasti kongruen' },
        { id: 'B', text: 'Pasti sebangun' },
        { id: 'C', text: 'Mungkin kongruen' },
        { id: 'D', text: 'Tidak sebangun' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kesebangunan segitiga sama sisi.\nLangkah-langkah: Segitiga sama sisi selalu memiliki sudut 60 derajat. Karena sudut-sudutnya selalu sama, mereka pasti sebangun.\nKesimpulan: Dua segitiga sama sisi pasti sebangun.'
    },
    {
      id: 'm2-l2-q32',
      text: 'Jika skala pengecilan sebuah gambar adalah 1 : 4, maka panjang sisi pada gambar baru dibandingkan gambar asli adalah...',
      options: [
        { id: 'A', text: '4 kali lebih besar' },
        { id: 'B', text: '1/4 kali dari aslinya' },
        { id: 'C', text: 'Sama besar' },
        { id: 'D', text: '2 kali lebih kecil' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pengertian skala pengecilan.\nLangkah-langkah: Skala 1 : 4 berarti setiap 1 satuan di gambar mewakili 4 satuan di benda asli, sehingga gambarnya 1/4 ukuran asli.\nKesimpulan: Panjangnya menjadi 1/4 dari aslinya.'
    },
    {
      id: 'm2-l2-q33',
      text: 'Syarat kekongruenan segitiga "Sudut - Sisi - Sudut" berarti...',
      options: [
        { id: 'A', text: 'Dua sudut sama dan sisi di antaranya sama' },
        { id: 'B', text: 'Dua sisi sama dan sudut di antaranya sama' },
        { id: 'C', text: 'Ketiga sudut sama' },
        { id: 'D', text: 'Satu sisi sama dan satu sudut sama' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Definisi syarat ASA.\nLangkah-langkah: Dua segitiga kongruen jika dua sudut yang bersesuaian sama besar dan sisi yang menghubungkan kedua sudut tersebut sama panjang.\nKesimpulan: Dua sudut sama dan sisi di antaranya harus sama.'
    },
    {
      id: 'm2-l2-q34',
      text: 'Dua segitiga sebangun ABC dan PQR memiliki perbandingan sisi 1 : 2. Jika luas PQR adalah 100 cm², maka luas ABC adalah...',
      options: [
        { id: 'A', text: '25 cm²' },
        { id: 'B', text: '50 cm²' },
        { id: 'C', text: '200 cm²' },
        { id: 'D', text: '400 cm²' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Menghitung luas dari perbandingan sisi.\nLangkah-langkah: Rasio luas = (1/2)^2 = 1/4. Maka luas ABC = 1/4 * 100 = 25.\nKesimpulan: Luas segitiga ABC adalah 25 cm².'
    },
    {
      id: 'm2-l2-q35',
      text: 'Sebuah pohon setinggi 10 meter memiliki bayangan 8 meter. Berapakah panjang bayangan tiang bendera setinggi 5 meter pada saat yang sama?',
      options: [
        { id: 'A', text: '2 meter' },
        { id: 'B', text: '4 meter' },
        { id: 'C', text: '6 meter' },
        { id: 'D', text: '10 meter' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Proporsi tinggi dan bayangan.\nLangkah-langkah: 10/8 = 5/x -> 10x = 40 -> x = 4.\nKesimpulan: Panjang bayangannya adalah 4 meter.'
    },
    {
      id: 'm2-l2-q36',
      text: 'Manakah dari berikut ini yang merupakan sifat bangun yang kongruen?',
      options: [
        { id: 'A', text: 'Hanya sudutnya yang sama besar' },
        { id: 'B', text: 'Hanya sisinya yang sebanding' },
        { id: 'C', text: 'Dapat saling menutupi dengan tepat' },
        { id: 'D', text: 'Ukurannya harus berbeda' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Sifat visual kekongruenan.\nLangkah-langkah: Karena identik, dua bangun kongruen jika dihimpitkan akan saling menutupi secara sempurna.\nKesimpulan: Dapat saling menutupi dengan tepat.'
    },
    {
      id: 'm2-l2-q37',
      text: 'Dua buah lingkaran pasti sebangun karena...',
      options: [
        { id: 'A', text: 'Sudut pusatnya selalu 360°' },
        { id: 'B', text: 'Jari-jarinya selalu sama' },
        { id: 'C', text: 'Memiliki diameter yang sama' },
        { id: 'D', text: 'Keduanya berbentuk bulat' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Alasan lingkaran sebangun.\nLangkah-langkah: Semua lingkaran memiliki bentuk geometris yang identik secara proporsional berdasarkan sudut pusatnya yang tetap.\nKesimpulan: Sudut pusatnya selalu sama (360°).'
    },
    {
      id: 'm2-l2-q38',
      text: 'Jika segitiga ABC sebangun dengan segitiga DEF, AB = 6 cm, DE = 9 cm, and luas ABC = 24 cm², berapakah luas DEF?',
      options: [
        { id: 'A', text: '36 cm²' },
        { id: 'B', text: '48 cm²' },
        { id: 'C', text: '54 cm²' },
        { id: 'D', text: '81 cm²' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Perbandingan luas bangun sebangun.\nLangkah-langkah: Rasio sisi = 6/9 = 2/3. Rasio luas = (2/3)^2 = 4/9. 4/9 = 24/x -> 4x = 216 -> x = 54.\nKesimpulan: Luas segitiga DEF adalah 54 cm².'
    },
    {
      id: 'm2-l2-q39',
      text: 'Pasangan segitiga berikut yang pasti kongruen adalah...',
      options: [
        { id: 'A', text: 'Dua segitiga siku-siku dengan hipotenusa sama' },
        { id: 'B', text: 'Dua segitiga sama kaki dengan alas sama' },
        { id: 'C', text: 'Dua segitiga sama sisi dengan panjang sisi sama' },
        { id: 'D', text: 'Dua segitiga sembarang dengan luas sama' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Identifikasi kekongruenan segitiga.\nLangkah-langkah: Segitiga sama sisi dengan sisi yang sama berarti semua sisi dan sudutnya identik.\nKesimpulan: Dua segitiga sama sisi dengan sisi sama pasti kongruen.'
    },
    {
      id: 'm2-l2-q40',
      text: 'Jika perbandingan keliling dua buah lingkaran yang sebangun adalah 2 : 7, berapakah perbandingan jari-jarinya?',
      options: [
        { id: 'A', text: '2 : 7' },
        { id: 'B', text: '4 : 49' },
        { id: 'C', text: '1 : 3.5' },
        { id: 'D', text: 'Tergantung nilai pi' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Hubungan keliling dan jari-jari.\nLangkah-langkah: Keliling lingkaran (2πr) berbanding lurus dengan jari-jarinya (r).\nKesimpulan: Perbandingan jari-jarinya tetap 2 : 7.'
    },
    {
      id: 'm2-l2-q41',
      text: 'Sebuah denah dibuat dengan skala 1 : 200. Jika panjang rumah sebenarnya adalah 16 meter, berapakah panjangnya pada denah?',
      options: [
        { id: 'A', text: '4 cm' },
        { id: 'B', text: '8 cm' },
        { id: 'C', text: '10 cm' },
        { id: 'D', text: '12 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung jarak pada peta/denah.\nLangkah-langkah: 16 m = 1600 cm. Jarak denah = 1600 / 200 = 8.\nKesimpulan: Panjang pada denah adalah 8 cm.'
    },
    {
      id: 'm2-l2-q42',
      text: 'Dua buah segitiga kongruen jika ketiga sisinya sama panjang. Syarat ini disebut...',
      options: [
        { id: 'A', text: 'Sisi - Sudut - Sisi' },
        { id: 'B', text: 'Sisi - Sisi - Sisi' },
        { id: 'C', text: 'Sudut - Sisi - Sudut' },
        { id: 'D', text: 'Sisi - Sisi - Sudut' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Syarat kekongruenan SSS.\nLangkah-langkah: Syarat SSS (Sisi-Sisi-Sisi) menyatakan jika ketiga pasang sisi yang bersesuaian sama panjang, maka kedua segitiga kongruen.\nKesimpulan: Syarat tersebut adalah Sisi-Sisi-Sisi.'
    },
    {
      id: 'm2-l2-q43',
      text: 'Jika segitiga ABC sebangun dengan segitiga PQR, maka perbandingan sisi AB/PQ akan sama dengan...',
      options: [
        { id: 'A', text: 'BC / PR' },
        { id: 'B', text: 'AC / QR' },
        { id: 'C', text: 'BC / QR' },
        { id: 'D', text: 'Luas ABC / Luas PQR' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Perbandingan sisi yang bersesuaian.\nLangkah-langkah: Pada kesebangunan, urutan titik menentukan pasangan sisi. AB berpasangan dengan PQ, BC dengan QR, and AC dengan PR.\nKesimpulan: AB/PQ = BC/QR.'
    },
    {
      id: 'm2-l2-q44',
      text: 'Dua buah jajar genjang sebangun jika sudut-sudutnya sama dan...',
      options: [
        { id: 'A', text: 'Alas dan tingginya sama' },
        { id: 'B', text: 'Perbandingan sisi-sisi yang bersesuaian sama' },
        { id: 'C', text: 'Diagonalnya sama panjang' },
        { id: 'D', text: 'Kelilingnya sama' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kesebangunan pada jajar genjang.\nLangkah-langkah: Selain sudut, rasio sisi yang membentuk jajar genjang harus konsisten.\nKesimpulan: Perbandingan sisi yang bersesuaian harus sama.'
    },
    {
      id: 'm2-l2-q45',
      text: 'Sebuah foto diletakkan pada karton ukuran 30 cm x 40 cm. Sisa karton di sebelah kiri, kanan, and atas foto adalah 3 cm. Jika karton dan foto sebangun, maka sisa karton di bawah foto adalah...',
      options: [
        { id: 'A', text: '3 cm' },
        { id: 'B', text: '4 cm' },
        { id: 'C', text: '5 cm' },
        { id: 'D', text: '6 cm' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Aplikasi kesebangunan pada bingkai foto.\nLangkah-langkah: Lebar foto = 30 - 3 - 3 = 24. Rasio: 30/24 = 40/panjang_foto. 5/4 = 40/x -> x = 32. Sisa bawah = 40 - 32 - 3 = 5.\nKesimpulan: Sisa karton di bawah adalah 5 cm.'
    },
    {
      id: 'm2-l2-q46',
      text: 'Dua segitiga sebangun memiliki perbandingan luas 1 : 16. Berapakah perbandingan sisi-sisinya?',
      options: [
        { id: 'A', text: '1 : 4' },
        { id: 'B', text: '1 : 8' },
        { id: 'C', text: '1 : 16' },
        { id: 'D', text: '1 : 32' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Akar dari perbandingan luas.\nLangkah-langkah: Rasio sisi adalah akar kuadrat dari rasio luas. √1 : √16 = 1 : 4.\nKesimpulan: Perbandingan sisi-sisinya adalah 1 : 4.'
    },
    {
      id: 'm2-l2-q47',
      text: 'Sebuah segitiga ABC memiliki panjang sisi 5, 12, and 13. Segitiga DEF kongruen dengan ABC. Keliling segitiga DEF adalah...',
      options: [
        { id: 'A', text: '20 cm' },
        { id: 'B', text: '30 cm' },
        { id: 'C', text: '60 cm' },
        { id: 'D', text: 'Tergantung skala' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Keliling segitiga kongruen.\nLangkah-langkah: Karena kongruen, sisinya sama: 5 + 12 + 13 = 30.\nKesimpulan: Keliling segitiga DEF adalah 30 cm.'
    },
    {
      id: 'm2-l2-q48',
      text: 'Pada segitiga sebangun, jika semua sudutnya sama besar, maka bentuk segitiga tersebut adalah...',
      options: [
        { id: 'A', text: 'Identik' },
        { id: 'B', text: 'Sama luas' },
        { id: 'C', text: 'Sama keliling' },
        { id: 'D', text: 'Proporsional' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Karakteristik bentuk sebangun.\nLangkah-langkah: Kesebangunan berarti perbesaran atau pengecilan yang proporsional, mempertahankan bentuk asli.\nKesimpulan: Segitiga tersebut bersifat proporsional.'
    },
    {
      id: 'm2-l2-q49',
      text: 'Manakah yang merupakan syarat kekongruenan pada segitiga siku-siku khusus?',
      options: [
        { id: 'A', text: 'Kedua kaki sudut sama panjang' },
        { id: 'B', text: 'Hipotenusa dan satu sisi siku-siku sama panjang' },
        { id: 'C', text: 'Ketiga sudutnya sama besar' },
        { id: 'D', text: 'Luasnya setengah dari persegi' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Syarat kekongruenan HL (Hypotenuse-Leg).\nLangkah-langkah: Pada segitiga siku-siku, jika miring (hipotenusa) and salah satu sisi siku-sikunya sama panjang, maka segitiga tersebut kongruen.\nKesimpulan: Syaratnya adalah hipotenusa and satu sisi sama.'
    },
    {
      id: 'm2-l2-q50',
      text: 'Jika segitiga ABC sebangun dengan segitiga PQR, AB = 4, BC = 5, and PQ = 12. Berapakah panjang QR?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '15' },
        { id: 'C', text: '20' },
        { id: 'D', text: '25' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari sisi menggunakan rasio kesebangunan.\nLangkah-langkah: Rasio AB/PQ = 4/12 = 1/3. Maka BC/QR = 1/3 -> 5/QR = 1/3 -> QR = 15.\nKesimpulan: Panjang QR adalah 15.'
    }
  ],

  // --- MATEMATIKA: STATISTIKA LEVEL 1 (m3-l1) ---
  'm3-l1': [
    {
      id: 'm3-l1-q1',
      text: 'Diberikan sekumpulan data nilai matematika: 7, 8, 7, 9, 8. Berapakah jumlah data tersebut?',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '6' },
        { id: 'D', text: '7' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung total entitas data dalam sebuah kumpulan.\nLangkah-langkah: Hitung satu per satu angka yang muncul: (1) 7, (2) 8, (3) 7, (4) 9, (5) 8.\nKesimpulan: Terdapat total 5 data.'
    },
    {
      id: 'm3-l1-q2',
      text: 'Data tinggi badan (cm): 150, 152, 150, 151. Berapakah nilai data terkecil?',
      options: [
        { id: 'A', text: '150 cm' },
        { id: 'B', text: '151 cm' },
        { id: 'C', text: '152 cm' },
        { id: 'D', text: '149 cm' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Mencari nilai minimum dalam kumpulan data.\nLangkah-langkah: Bandingkan semua angka: 150, 152, 150, 151. Angka 150 adalah yang paling rendah.\nKesimpulan: Data terkecil adalah 150 cm.'
    },
    {
      id: 'm3-l1-q3',
      text: 'Jika dalam sebuah tabel terdapat data "Hobi Siswa": Membaca (5 anak), Menulis (3 anak), Berenang (4 anak). Berapa jumlah total siswa dalam data tersebut?',
      options: [
        { id: 'A', text: '10 anak' },
        { id: 'B', text: '11 anak' },
        { id: 'C', text: '12 anak' },
        { id: 'D', text: '13 anak' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menjumlahkan frekuensi dari setiap kategori data.\nLangkah-langkah: 5 (Membaca) + 3 (Menulis) + 4 (Berenang) = 12.\nKesimpulan: Total siswa adalah 12 anak.'
    },
    {
      id: 'm3-l1-q4',
      text: 'Dari data hobi soal sebelumnya, hobi manakah yang paling sedikit diminati?',
      options: [
        { id: 'A', text: 'Membaca' },
        { id: 'B', text: 'Menulis' },
        { id: 'C', text: 'Berenang' },
        { id: 'D', text: 'Semua sama' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari kategori dengan frekuensi terendah.\nLangkah-langkah: Membaca (5), Menulis (3), Berenang (4). Angka 3 adalah yang terkecil.\nKesimpulan: Hobi yang paling sedikit diminati adalah Menulis.'
    },
    {
      id: 'm3-l1-q5',
      text: 'Dalam diagram batang, sumbu tegak biasanya digunakan untuk menyatakan...',
      options: [
        { id: 'A', text: 'Nama kategori' },
        { id: 'B', text: 'Jenis data' },
        { id: 'C', text: 'Frekuensi atau jumlah' },
        { id: 'D', text: 'Tahun' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mengenali struktur standar diagram batang.\nLangkah-langkah: Sumbu mendatar (horizontal) biasanya untuk kategori, sedangkan sumbu tegak (vertikal) untuk nilai/frekuensi.\nKesimpulan: Sumbu tegak menyatakan frekuensi atau jumlah.'
    },
    {
      id: 'm3-l1-q6',
      text: 'Data berat badan siswa: 40, 42, 40, 45, 42, 40. Nilai berat badan manakah yang paling sering muncul (modus)?',
      options: [
        { id: 'A', text: '40 kg' },
        { id: 'B', text: '42 kg' },
        { id: 'C', text: '45 kg' },
        { id: 'D', text: 'Semua muncul 2 kali' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Modus adalah data yang memiliki frekuensi tertinggi.\nLangkah-langkah: 40 muncul 3 kali, 42 muncul 2 kali, 45 muncul 1 kali.\nKesimpulan: Modusnya adalah 40 kg.'
    },
    {
      id: 'm3-l1-q7',
      text: 'Tabel Penjualan Buah: Apel (10 kg), Jeruk (15 kg), Mangga (12 kg). Berapa selisih penjualan Jeruk dan Apel?',
      options: [
        { id: 'A', text: '2 kg' },
        { id: 'B', text: '3 kg' },
        { id: 'C', text: '5 kg' },
        { id: 'D', text: '7 kg' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Selisih didapat dari pengurangan nilai besar dengan nilai kecil.\nLangkah-langkah: Penjualan Jeruk (15) - Penjualan Apel (10) = 5.\nKesimpulan: Selisihnya adalah 5 kg.'
    },
    {
      id: 'm3-l1-q8',
      text: 'Sekumpulan data: 2, 4, 6, 8. Berapa rata-rata (mean) sederhana dari data tersebut?',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '6' },
        { id: 'D', text: '20' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Rata-rata adalah jumlah seluruh data dibagi banyak data.\nLangkah-langkah: (2 + 4 + 6 + 8) / 4 = 20 / 4 = 5.\nKesimpulan: Rata-ratanya adalah 5.'
    },
    {
      id: 'm3-l1-q9',
      text: 'Diagram Gambar: 1 simbol buku mewakili 2 buku asli. Jika ada 4 simbol buku, berapa jumlah buku sebenarnya?',
      options: [
        { id: 'A', text: '2 buku' },
        { id: 'B', text: '4 buku' },
        { id: 'C', text: '6 buku' },
        { id: 'D', text: '8 buku' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Mengalikan jumlah simbol dengan nilai per simbol.\nLangkah-langkah: 4 simbol x 2 buku per simbol = 8 buku.\nKesimpulan: Jumlah buku sebenarnya adalah 8.'
    },
    {
      id: 'm3-l1-q10',
      text: 'Kegiatan mengumpulkan informasi dengan cara memberikan daftar pertanyaan kepada orang lain disebut...',
      options: [
        { id: 'A', text: 'Observasi' },
        { id: 'B', text: 'Wawancara' },
        { id: 'C', text: 'Angket (Kuesioner)' },
        { id: 'D', text: 'Eksperimen' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mengenali teknik pengumpulan data kuesioner.\nLangkah-langkah: Memberikan pertanyaan tertulis secara massal atau terstruktur disebut menyebar angket.\nKesimpulan: Teknik tersebut adalah Angket.'
    },
    {
      id: 'm3-l1-q11',
      text: 'Data nilai ujian: 6, 7, 8, 8, 9, 10. Berapa banyak siswa yang mendapat nilai di atas 7?',
      options: [
        { id: 'A', text: '2 siswa' },
        { id: 'B', text: '3 siswa' },
        { id: 'C', text: '4 siswa' },
        { id: 'D', text: '5 siswa' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Memfilter data berdasarkan kriteria tertentu.\nLangkah-langkah: Nilai di atas 7 adalah 8, 8, 9, 10. Total ada 4 nilai.\nKesimpulan: Ada 4 siswa yang mendapat nilai di atas 7.'
    },
    {
      id: 'm3-l1-q12',
      text: 'Tabel Absensi: Senin (2 anak), Selasa (0 anak), Rabu (1 anak). Berapa total anak yang tidak masuk selama 3 hari tersebut?',
      options: [
        { id: 'A', text: '1 anak' },
        { id: 'B', text: '2 anak' },
        { id: 'C', text: '3 anak' },
        { id: 'D', text: '0 anak' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung total akumulasi data.\nLangkah-langkah: 2 (Senin) + 0 (Selasa) + 1 (Rabu) = 3.\nKesimpulan: Total anak yang tidak masuk adalah 3 anak.'
    },
    {
      id: 'm3-l1-q13',
      text: 'Manakah cara penyajian data yang paling cocok untuk menunjukkan perbandingan jumlah antar kategori secara visual?',
      options: [
        { id: 'A', text: 'Teks narasi' },
        { id: 'B', text: 'Diagram batang' },
        { id: 'C', text: 'Daftar angka acak' },
        { id: 'D', text: 'Catatan harian' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menentukan media penyajian data yang efektif.\nLangkah-langkah: Diagram batang menggunakan panjang batang untuk menunjukkan besar kecilnya frekuensi kategori dengan sangat jelas.\nKesimpulan: Media yang paling cocok adalah diagram batang.'
    },
    {
      id: 'm3-l1-q14',
      text: 'Data warna kesukaan: Merah (10), Biru (12), Hijau (10), Kuning (8). Berapa total responden dalam survei ini?',
      options: [
        { id: 'A', text: '30' },
        { id: 'B', text: '40' },
        { id: 'C', text: '42' },
        { id: 'D', text: '38' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menjumlahkan semua frekuensi data.\nLangkah-langkah: 10 + 12 + 10 + 8 = 40.\nKesimpulan: Total responden adalah 40.'
    },
    {
      id: 'm3-l1-q15',
      text: 'Dari data warna kesukaan soal sebelumnya, manakah warna yang paling populer?',
      options: [
        { id: 'A', text: 'Merah' },
        { id: 'B', text: 'Biru' },
        { id: 'C', text: 'Hijau' },
        { id: 'D', text: 'Kuning' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari kategori dengan frekuensi tertinggi.\nLangkah-langkah: Merah(10), Biru(12), Hijau(10), Kuning(8). Angka 12 adalah yang terbesar.\nKesimpulan: Warna paling populer adalah Biru.'
    },
    {
      id: 'm3-l1-q16',
      text: 'Data angka: 5, 2, 8, 5, 3, 5, 2. Berapakah frekuensi angka 5?',
      options: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung kemunculan angka tertentu dalam data.\nLangkah-langkah: Angka 5 muncul di urutan ke-1, ke-4, and ke-6.\nKesimpulan: Frekuensi angka 5 adalah 3.'
    },
    {
      id: 'm3-l1-q17',
      text: 'Tabel Stok Kantin: Roti (20), Susu (15), Biskuit (25). Jika biskuit terjual 10, berapa sisa stok biskuit?',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '10' },
        { id: 'C', text: '15' },
        { id: 'D', text: '20' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Melakukan operasi pengurangan pada data tabel.\nLangkah-langkah: Stok awal Biskuit (25) - Terjual (10) = 15.\nKesimpulan: Sisa stok biskuit adalah 15.'
    },
    {
      id: 'm3-l1-q18',
      text: 'Dalam diagram lingkaran, jika satu bagian menunjukkan 25%, maka bagian tersebut mewakili ... dari total data.',
      options: [
        { id: 'A', text: 'Setengah' },
        { id: 'B', text: 'Sepertiga' },
        { id: 'C', text: 'Seperempat' },
        { id: 'D', text: 'Seluruhnya' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mengonversi persentase ke pecahan sederhana.\nLangkah-langkah: 25% sama dengan 25/100, yang jika disederhanakan menjadi 1/4.\nKesimpulan: Bagian tersebut mewakili seperempat data.'
    },
    {
      id: 'm3-l1-q19',
      text: 'Data suhu udara selama seminggu: 28, 29, 30, 28, 27, 28, 30. Berapa hari suhu mencapai 30 derajat?',
      options: [
        { id: 'A', text: '1 hari' },
        { id: 'B', text: '2 hari' },
        { id: 'C', text: '3 hari' },
        { id: 'D', text: '4 hari' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung frekuensi kemunculan nilai tertentu.\nLangkah-langkah: Angka 30 muncul pada hari ke-3 and hari ke-7.\nKesimpulan: Suhu 30 derajat tercapai selama 2 hari.'
    },
    {
      id: 'm3-l1-q20',
      text: 'Diberikan data: 10, 20, 30. Berapa nilai jangkauan (selisih terbesar and terkecil) dari data tersebut?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '20' },
        { id: 'C', text: '30' },
        { id: 'D', text: '40' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Jangkauan didapat dari nilai maksimal dikurangi nilai minimal.\nLangkah-langkah: Nilai maksimal (30) - Nilai minimal (10) = 20.\nKesimpulan: Jangkauan data tersebut adalah 20.'
    },
    {
      id: 'm3-l1-q21',
      text: 'Data tinggi tanaman (cm): 5, 7, 5, 8, 9, 5. Berapa jumlah tanaman yang tingginya kurang dari 7 cm?',
      options: [
        { id: 'A', text: '2 tanaman' },
        { id: 'B', text: '3 tanaman' },
        { id: 'C', text: '4 tanaman' },
        { id: 'D', text: '5 tanaman' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung data yang memenuhi syarat tertentu.\nLangkah-langkah: Tinggi < 7 cm adalah 5, 5, and 5. Total ada 3 data.\nKesimpulan: Ada 3 tanaman yang tingginya kurang dari 7 cm.'
    },
    {
      id: 'm3-l1-q22',
      text: 'Jika kita ingin mengetahui perkembangan berat badan bayi dari bulan ke bulan, diagram manakah yang paling tepat?',
      options: [
        { id: 'A', text: 'Diagram batang' },
        { id: 'B', text: 'Diagram garis' },
        { id: 'C', text: 'Diagram gambar' },
        { id: 'D', text: 'Tabel frekuensi' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Memilih diagram untuk data berkelanjutan (time-series).\nLangkah-langkah: Diagram garis sangat efektif menunjukkan tren atau perubahan data dari waktu ke waktu.\nKesimpulan: Diagram garis adalah pilihan paling tepat.'
    },
    {
      id: 'm3-l1-q23',
      text: 'Tabel Penumpang Bus: Pagi (40 orang), Siang (25 orang), Sore (35 orang). Berapa total penumpang bus dalam satu hari tersebut?',
      options: [
        { id: 'A', text: '90 orang' },
        { id: 'B', text: '100 orang' },
        { id: 'C', text: '110 orang' },
        { id: 'D', text: '80 orang' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menjumlahkan seluruh data harian.\nLangkah-langkah: 40 + 25 + 35 = 100.\nKesimpulan: Total penumpang adalah 100 orang.'
    },
    {
      id: 'm3-l1-q24',
      text: 'Dari data penumpang bus soal sebelumnya, kapan waktu dengan penumpang paling sedikit?',
      options: [
        { id: 'A', text: 'Pagi' },
        { id: 'B', text: 'Siang' },
        { id: 'C', text: 'Sore' },
        { id: 'D', text: 'Malam' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Membandingkan nilai terendah dalam tabel.\nLangkah-langkah: Pagi(40), Siang(25), Sore(35). Nilai 25 adalah yang terkecil.\nKesimpulan: Penumpang paling sedikit terjadi pada siang hari.'
    },
    {
      id: 'm3-l1-q25',
      text: 'Simbol bintang (⭐) dalam piktogram mewakili 5 orang. Jika ada 6 bintang, berapa jumlah orangnya?',
      options: [
        { id: 'A', text: '11 orang' },
        { id: 'B', text: '25 orang' },
        { id: 'C', text: '30 orang' },
        { id: 'D', text: '35 orang' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Konversi piktogram ke angka nyata.\nLangkah-langkah: 6 simbol x 5 orang/simbol = 30 orang.\nKesimpulan: Jumlah orang adalah 30.'
    },
    {
      id: 'm3-l1-q26',
      text: 'Data skor game: 100, 150, 100, 200, 150, 150. Berapakah modus dari skor tersebut?',
      options: [
        { id: 'A', text: '100' },
        { id: 'B', text: '150' },
        { id: 'C', text: '200' },
        { id: 'D', text: ' tidak ada modus' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mencari nilai dengan frekuensi terbanyak.\nLangkah-langkah: 100 muncul 2 kali, 150 muncul 3 kali, 200 muncul 1 kali.\nKesimpulan: Modusnya adalah 150.'
    },
    {
      id: 'm3-l1-q27',
      text: 'Sebuah survei menunjukkan 20 anak suka bakso and 15 anak suka soto. Berapa jumlah seluruh anak dalam survei tersebut?',
      options: [
        { id: 'A', text: '5 anak' },
        { id: 'B', text: '30 anak' },
        { id: 'C', text: '35 anak' },
        { id: 'D', text: '40 anak' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Penjumlahan sederhana data kategori.\nLangkah-langkah: 20 (Bakso) + 15 (Soto) = 35.\nKesimpulan: Total ada 35 anak.'
    },
    {
      id: 'm3-l1-q28',
      text: 'Tabel Tinggi Badan: Andi (145 cm), Budi (150 cm), Caca (148 cm). Siapakah yang paling tinggi?',
      options: [
        { id: 'A', text: 'Andi' },
        { id: 'B', text: 'Budi' },
        { id: 'C', text: 'Caca' },
        { id: 'D', text: 'Semua sama' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Membandingkan nilai numerik dalam tabel.\nLangkah-langkah: Bandingkan: 145, 150, 148. Nilai 150 adalah yang terbesar.\nKesimpulan: Budi adalah yang paling tinggi.'
    },
    {
      id: 'm3-l1-q29',
      text: 'Data Tabungan Seminggu: Rp2.000, Rp3.000, Rp2.000, Rp5.000, Rp2.000. Berapa frekuensi tabungan Rp2.000?',
      options: [
        { id: 'A', text: '2 kali' },
        { id: 'B', text: '3 kali' },
        { id: 'C', text: '4 kali' },
        { id: 'D', text: '5 kali' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung kemunculan nilai tertentu.\nLangkah-langkah: Angka Rp2.000 muncul pada hari ke-1, ke-3, and ke-5.\nKesimpulan: Frekuensinya adalah 3 kali.'
    },
    {
      id: 'm3-l1-q30',
      text: 'Sekumpulan data: 5, 5, 5, 5. Berapakah rata-rata data tersebut?',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '20' },
        { id: 'D', text: '0' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Rata-rata dari data yang nilainya sama semua adalah nilai itu sendiri.\nLangkah-langkah: (5+5+5+5) / 4 = 20 / 4 = 5.\nKesimpulan: Rata-ratanya adalah 5.'
    },
    {
      id: 'm3-l1-q31',
      text: 'Data Pekerjaan Orang Tua: Petani (12), Guru (8), Pedagang (10). Berapa selisih jumlah Petani and Guru?',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '4' },
        { id: 'C', text: '6' },
        { id: 'D', text: '20' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung selisih antar kategori.\nLangkah-langkah: 12 (Petani) - 8 (Guru) = 4.\nKesimpulan: Selisihnya adalah 4.'
    },
    {
      id: 'm3-l1-q32',
      text: 'Langkah pertama sebelum menyajikan data ke dalam diagram adalah...',
      options: [
        { id: 'A', text: 'Menggambar diagram' },
        { id: 'B', text: 'Mengumpulkan data' },
        { id: 'C', text: 'Menghapus data' },
        { id: 'D', text: 'Mewarnai diagram' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Memahami proses pengolahan statistika.\nLangkah-langkah: Urutan pengolahan data adalah: Pengumpulan -> Pengolahan (Tabel) -> Penyajian (Diagram).\nKesimpulan: Langkah pertama adalah mengumpulkan data.'
    },
    {
      id: 'm3-l1-q33',
      text: 'Jika kita mencatat warna mobil yang lewat di depan sekolah selama 1 jam, teknik pengumpulan data ini disebut...',
      options: [
        { id: 'A', text: 'Wawancara' },
        { id: 'B', text: 'Observasi (Pengamatan)' },
        { id: 'C', text: 'Angket' },
        { id: 'D', text: 'Browsing internet' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mengenali teknik pengumpulan data pengamatan langsung.\nLangkah-langkah: Melihat and mencatat kejadian secara langsung tanpa berinteraksi disebut observasi.\nKesimpulan: Teknik tersebut adalah Observasi.'
    },
    {
      id: 'm3-l1-q34',
      text: 'Data: 1, 2, 3, 4, 5. Berapa jumlah total (sum) dari data tersebut?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '12' },
        { id: 'C', text: '15' },
        { id: 'D', text: '20' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menjumlahkan seluruh angka dalam data.\nLangkah-langkah: 1 + 2 + 3 + 4 + 5 = 15.\nKesimpulan: Jumlah totalnya adalah 15.'
    },
    {
      id: 'm3-l1-q35',
      text: 'Tabel Nilai: 70 (3 anak), 80 (5 anak), 90 (2 anak). Berapa anak yang nilainya paling rendah?',
      options: [
        { id: 'A', text: '2 anak' },
        { id: 'B', text: '3 anak' },
        { id: 'C', text: '5 anak' },
        { id: 'D', text: '10 anak' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mengidentifikasi frekuensi dari nilai terendah.\nLangkah-langkah: Nilai terendah adalah 70. Frekuensi nilai 70 adalah 3 anak.\nKesimpulan: Ada 3 anak yang mendapat nilai paling rendah.'
    },
    {
      id: 'm3-l1-q36',
      text: 'Diagram Batang menunjukkan tinggi batang kategori A adalah 10 and kategori B adalah 15. Berapa total frekuensi A and B?',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '15' },
        { id: 'C', text: '25' },
        { id: 'D', text: '30' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menjumlahkan nilai batang pada diagram.\nLangkah-langkah: Nilai A (10) + Nilai B (15) = 25.\nKesimpulan: Total frekuensinya adalah 25.'
    },
    {
      id: 'm3-l1-q37',
      text: 'Dalam piktogram, 1 gambar orang mewakili 10 siswa. Untuk mewakili 50 siswa, dibutuhkan berapa gambar?',
      options: [
        { id: 'A', text: '5 gambar' },
        { id: 'B', text: '10 gambar' },
        { id: 'C', text: '50 gambar' },
        { id: 'D', text: '2 gambar' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Pembagian untuk menentukan jumlah simbol.\nLangkah-langkah: 50 siswa / 10 siswa per gambar = 5 gambar.\nKesimpulan: Dibutuhkan 5 gambar.'
    },
    {
      id: 'm3-l1-q38',
      text: 'Data: 9, 7, 8, 9, 6. Urutan data dari yang terkecil adalah...',
      options: [
        { id: 'A', text: '9, 9, 8, 7, 6' },
        { id: 'B', text: '6, 7, 8, 9, 9' },
        { id: 'C', text: '6, 8, 7, 9, 9' },
        { id: 'D', text: '7, 6, 8, 9, 9' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mengurutkan data (sorting) secara menaik.\nLangkah-langkah: Cari angka terkecil (6), lalu (7), (8), and (9) yang muncul 2 kali.\nKesimpulan: Urutan yang benar adalah 6, 7, 8, 9, 9.'
    },
    {
      id: 'm3-l1-q39',
      text: 'Berapakah nilai median (nilai tengah) dari data soal sebelumnya (6, 7, 8, 9, 9)?',
      options: [
        { id: 'A', text: '7' },
        { id: 'B', text: '8' },
        { id: 'C', text: '9' },
        { id: 'D', text: '6' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median adalah nilai yang berada tepat di tengah setelah data diurutkan.\nLangkah-langkah: Dari urutan 6, 7, (8), 9, 9, angka yang di tengah adalah 8.\nKesimpulan: Mediannya adalah 8.'
    },
    {
      id: 'm3-l1-q40',
      text: 'Tabel Hewan Ternak: Ayam (50), Sapi (10), Kambing (20). Jika 5 sapi dijual, berapa sisa seluruh hewan ternak?',
      options: [
        { id: 'A', text: '80' },
        { id: 'B', text: '75' },
        { id: 'C', text: '70' },
        { id: 'D', text: '85' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mengurangi total data dengan pengurangan satu kategori.\nLangkah-langkah: Total awal (50+10+20 = 80). Setelah dijual 5, sisa (80 - 5 = 75).\nKesimpulan: Sisa seluruh hewan adalah 75.'
    },
    {
      id: 'm3-l1-q41',
      text: 'Teknik pengumpulan data dengan cara menanyakan langsung kepada narasumber disebut...',
      options: [
        { id: 'A', text: 'Kuesioner' },
        { id: 'B', text: 'Wawancara' },
        { id: 'C', text: 'Tes' },
        { id: 'D', text: 'Dokumentasi' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mengenali teknik tanya jawab lisan.\nLangkah-langkah: Bertanya and mendengarkan jawaban langsung dari orang lain disebut wawancara.\nKesimpulan: Teknik tersebut adalah wawancara.'
    },
    {
      id: 'm3-l1-q42',
      text: 'Diagram lingkaran totalnya selalu berjumlah ... persen.',
      options: [
        { id: 'A', text: '50' },
        { id: 'B', text: '100' },
        { id: 'C', text: '360' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Standar total persentase dalam statistik.\nLangkah-langkah: Satu lingkaran penuh dalam satuan persen selalu mewakili 100%.\nKesimpulan: Totalnya adalah 100%.'
    },
    {
      id: 'm3-l1-q43',
      text: 'Data nilai: 8, 8, 7, 7, 7, 6. Berapa modusnya?',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '7' },
        { id: 'C', text: '8' },
        { id: 'D', text: ' tidak ada modus' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Modus adalah data yang paling sering muncul.\nLangkah-langkah: 8 muncul 2 kali, 7 muncul 3 kali, 6 muncul 1 kali.\nKesimpulan: Modusnya adalah 7.'
    },
    {
      id: 'm3-l1-q44',
      text: 'Jika dalam tabel terdapat data "Berat Badan" and "Jumlah Siswa", maka kolom "Jumlah Siswa" disebut sebagai...',
      options: [
        { id: 'A', text: 'Kategori' },
        { id: 'B', text: 'Frekuensi' },
        { id: 'C', text: 'Judul' },
        { id: 'D', text: 'Satuan' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Istilah statistik untuk jumlah kemunculan data.\nLangkah-langkah: Banyaknya data yang masuk dalam satu kategori numerik disebut frekuensi.\nKesimpulan: Kolom tersebut disebut kolom Frekuensi.'
    },
    {
      id: 'm3-l1-q45',
      text: 'Data Golongan Darah: A (5), B (7), AB (2), O (6). Berapa selisih antara golongan darah terbanyak and tersedikit?',
      options: [
        { id: 'A', text: '2' },
        { id: 'B', text: '5' },
        { id: 'C', text: '7' },
        { id: 'D', text: '3' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Pengurangan frekuensi maksimum and minimum.\nLangkah-langkah: Terbanyak adalah B (7), Tersedikit adalah AB (2). 7 - 2 = 5.\nKesimpulan: Selisihnya adalah 5.'
    },
    {
      id: 'm3-l1-q46',
      text: 'Tabel Inventaris Sekolah: Meja (40), Kursi (80). Berapa rasio/perbandingan sederhana antara meja and kursi?',
      options: [
        { id: 'A', text: '1 banding 2' },
        { id: 'B', text: '2 banding 1' },
        { id: 'C', text: '1 banding 1' },
        { id: 'D', text: '1 banding 4' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Menyederhanakan data angka menjadi rasio.\nLangkah-langkah: Meja:Kursi = 40:80. Keduanya dibagi 40 menjadi 1:2.\nKesimpulan: Perbandingannya adalah 1 banding 2.'
    },
    {
      id: 'm3-l1-q47',
      text: 'Data: 10, 10, 10. Berapa jumlah total data tersebut?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '20' },
        { id: 'C', text: '30' },
        { id: 'D', text: '40' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Menghitung akumulasi nilai data.\nLangkah-langkah: 10 + 10 + 10 = 30.\nKesimpulan: Jumlah totalnya adalah 30.'
    },
    {
      id: 'm3-l1-q48',
      text: 'Diagram yang menggunakan batang-batang persegi panjang untuk mewakili data disebut...',
      options: [
        { id: 'A', text: 'Diagram Garis' },
        { id: 'B', text: 'Diagram Lingkaran' },
        { id: 'C', text: 'Diagram Batang' },
        { id: 'D', text: 'Diagram Gambar' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Nama diagram berdasarkan visualnya.\nLangkah-langkah: Bentuk batang vertikal atau horizontal adalah ciri khas diagram batang.\nKesimpulan: Namanya adalah diagram batang.'
    },
    {
      id: 'm3-l1-q49',
      text: 'Dalam statistika, data yang diperoleh secara langsung oleh peneliti disebut data...',
      options: [
        { id: 'A', text: 'Primer' },
        { id: 'B', text: 'Sekunder' },
        { id: 'C', text: 'Palsu' },
        { id: 'D', text: 'Hasil olahan' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Jenis data berdasarkan sumbernya.\nLangkah-langkah: Data tangan pertama (langsung dari sumber) disebut data primer.\nKesimpulan: Jawabannya adalah data primer.'
    },
    {
      id: 'm3-l1-q50',
      text: 'Jika dalam tabel terdapat data "Berat Badan" and "Jumlah Siswa", maka kolom "Jumlah Siswa" disebut sebagai...',
      options: [
        { id: 'A', text: 'Kategori' },
        { id: 'B', text: 'Frekuensi' },
        { id: 'C', text: 'Judul' },
        { id: 'D', text: 'Satuan' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Istilah statistik untuk jumlah kemunculan data.\nLangkah-langkah: Banyaknya data yang masuk dalam satu kategori numerik disebut frekuensi.\nKesimpulan: Kolom tersebut disebut kolom Frekuensi.'
    }
  ],

  // --- MATEMATIKA: STATISTIKA LEVEL 2 (m3-l2) ---
  'm3-l2': [
    {
      id: 'm3-l2-q1',
      text: 'Nilai rata-rata (mean) dari kumpulan data: 7, 8, 6, 8, 10, 9 adalah...',
      options: [
        { id: 'A', text: '7,5' },
        { id: 'B', text: '8,0' },
        { id: 'C', text: '8,5' },
        { id: 'D', text: '9,0' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung rata-rata dengan menjumlahkan seluruh data lalu dibagi banyak data.\nLangkah-langkah: (7 + 8 + 6 + 8 + 10 + 9) / 6 = 48 / 6 = 8,0.\nKesimpulan: Jadi, nilai rata-ratanya adalah 8,0.'
    },
    {
      id: 'm3-l2-q2',
      text: 'Tentukan median dari data berikut: 5, 8, 7, 9, 6.',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '7' },
        { id: 'C', text: '8' },
        { id: 'D', text: '9' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median adalah nilai tengah dari data yang telah diurutkan.\nLangkah-langkah: Urutkan data: 5, 6, 7, 8, 9. Nilai yang berada tepat di tengah adalah 7.\nKesimpulan: Median dari data tersebut adalah 7.'
    },
    {
      id: 'm3-l2-q3',
      text: 'Modus dari data nilai ulangan matematika: 4, 5, 5, 6, 7, 5, 8 adalah...',
      options: [
        { id: 'A', text: '4' },
        { id: 'B', text: '5' },
        { id: 'C', text: '6' },
        { id: 'D', text: '8' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul dalam kumpulan data.\nLangkah-langkah: Angka 4 (1x), 5 (3x), 6 (1x), 7 (1x), 8 (1x). Angka 5 muncul paling banyak.\nKesimpulan: Modusnya adalah 5.'
    },
    {
      id: 'm3-l2-q4',
      text: 'Rata-rata dari 4 buah bilangan adalah 7. Jika ditambahkan satu bilangan lagi, rata-ratanya menjadi 8. Berapakah bilangan yang ditambahkan tersebut?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '11' },
        { id: 'C', text: '12' },
        { id: 'D', text: '13' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Gunakan rumus jumlah data = rata-rata x banyak data.\nLangkah-langkah: Jumlah awal = 7 x 4 = 28. Jumlah akhir = 8 x 5 = 40. Bilangan baru = 40 - 28 = 12.\nKesimpulan: Bilangan yang ditambahkan adalah 12.'
    },
    {
      id: 'm3-l2-q5',
      text: 'Tentukan median dari data genap berikut: 10, 12, 15, 18, 20, 22.',
      options: [
        { id: 'A', text: '15' },
        { id: 'B', text: '16,5' },
        { id: 'C', text: '17' },
        { id: 'D', text: '18' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Untuk data berjumlah genap, median adalah rata-rata dari dua nilai tengah setelah diurutkan.\nLangkah-langkah: Data sudah urut. Dua nilai tengah adalah 15 dan 18. Median = (15 + 18) / 2 = 33 / 2 = 16,5.\nKesimpulan: Median data tersebut adalah 16,5.'
    },
    {
      id: 'm3-l2-q6',
      text: 'Seorang siswa memperoleh nilai 80, 85, and 90 pada tiga ujian pertama. Berapakah rata-rata nilai siswa tersebut?',
      options: [
        { id: 'A', text: '83' },
        { id: 'B', text: '85' },
        { id: 'C', text: '87' },
        { id: 'D', text: '90' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung rata-rata skor ujian.\nLangkah-langkah: (80 + 85 + 90) / 3 = 255 / 3 = 85.\nKesimpulan: Rata-rata nilai ujiannya adalah 85.'
    },
    {
      id: 'm3-l2-q7',
      text: 'Dalam sebuah survei warna kesukaan: Merah (5 orang), Biru (8 orang), Hijau (3 orang), Kuning (8 orang). Manakah pernyataan yang benar mengenai modus data tersebut?',
      options: [
        { id: 'A', text: 'Modusnya adalah Biru saja' },
        { id: 'B', text: 'Modusnya adalah Biru dan Kuning' },
        { id: 'C', text: 'Modusnya adalah 8' },
        { id: 'D', text: 'Data tidak memiliki modus' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Data bisa memiliki lebih dari satu modus jika frekuensi tertingginya sama.\nLangkah-langkah: Biru dan Kuning sama-sama memiliki frekuensi tertinggi yaitu 8.\nKesimpulan: Modus data tersebut adalah Biru dan Kuning.'
    },
    {
      id: 'm3-l2-q8',
      text: 'Rata-rata berat badan 5 orang adalah 50 kg. Jika satu orang dengan berat 62 kg keluar dari kelompok, berapakah rata-rata berat badan yang baru?',
      options: [
        { id: 'A', text: '45 kg' },
        { id: 'B', text: '47 kg' },
        { id: 'C', text: '48 kg' },
        { id: 'D', text: '49 kg' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Cari jumlah total berat badan setelah dikurangi orang yang keluar, lalu bagi dengan sisa orang.\nLangkah-langkah: Total awal = 50 x 5 = 250 kg. Sisa total = 250 - 62 = 188 kg. Sisa orang = 4. Rata-rata baru = 188 / 4 = 47 kg.\nKesimpulan: Rata-rata berat badan baru adalah 47 kg.'
    },
    {
      id: 'm3-l2-q9',
      text: 'Median dari kumpulan data: 21, 15, 11, 19, 13, 23, 17 adalah...',
      options: [
        { id: 'A', text: '15' },
        { id: 'B', text: '17' },
        { id: 'C', text: '19' },
        { id: 'D', text: '21' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Urutkan data terlebih dahulu untuk mencari median data ganjil.\nLangkah-langkah: Urutan: 11, 13, 15, 17, 19, 21, 23. Banyak data ada 7. Data tengah adalah urutan ke-4, yaitu 17.\nKesimpulan: Median data tersebut adalah 17.'
    },
    {
      id: 'm3-l2-q10',
      text: 'Nilai x yang memenuhi jika rata-rata dari data 5, 8, 10, x adalah 8 adalah...',
      options: [
        { id: 'A', text: '7' },
        { id: 'B', text: '8' },
        { id: 'C', text: '9' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Gunakan rumus rata-rata untuk mencari variabel yang belum diketahui.\nLangkah-langkah: (5 + 8 + 10 + x) / 4 = 8 -> 23 + x = 32 -> x = 32 - 23 = 9.\nKesimpulan: Nilai x adalah 9.'
    },
    {
      id: 'm3-l2-q11',
      text: 'Hasil ulangan harian Matematika Andi adalah 7, 8, 6, 9, dan 10. Berapakah nilai rata-ratanya?',
      options: [
        { id: 'A', text: '7,5' },
        { id: 'B', text: '8,0' },
        { id: 'C', text: '8,5' },
        { id: 'D', text: '9,0' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Rata-rata adalah jumlah data dibagi banyak data.\nLangkah-langkah: (7 + 8 + 6 + 9 + 10) / 5 = 40 / 5 = 8,0.\nKesimpulan: Rata-rata nilai Andi adalah 8,0.'
    },
    {
      id: 'm3-l2-q12',
      text: 'Data berat badan 7 siswa (kg) adalah: 35, 38, 34, 40, 36, 37, 39. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '36 kg' },
        { id: 'B', text: '37 kg' },
        { id: 'C', text: '38 kg' },
        { id: 'D', text: '39 kg' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Urutkan data ganjil untuk mencari nilai tengah.\nLangkah-langkah: Data terurut: 34, 35, 36, 37, 38, 39, 40. Nilai tengahnya adalah 37.\nKesimpulan: Median data adalah 37 kg.'
    },
    {
      id: 'm3-l2-q13',
      text: 'Diberikan data nilai: 5, 6, 8, 6, 7, 8, 6, 9, 7. Modus dari data tersebut adalah...',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '7' },
        { id: 'C', text: '8' },
        { id: 'D', text: '9' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul.\nLangkah-langkah: 5(1x), 6(3x), 7(2x), 8(2x), 9(1x). Angka 6 muncul paling sering.\nKesimpulan: Modus data adalah 6.'
    },
    {
      id: 'm3-l2-q14',
      text: 'Rata-rata tinggi badan 5 orang adalah 160 cm. Jika jumlah tinggi badan 4 orang di antaranya adalah 645 cm, berapakah tinggi badan orang kelima?',
      options: [
        { id: 'A', text: '150 cm' },
        { id: 'B', text: '155 cm' },
        { id: 'C', text: '160 cm' },
        { id: 'D', text: '165 cm' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Total nilai = rata-rata x banyak data.\nLangkah-langkah: Total tinggi 5 orang = 160 x 5 = 800 cm. Tinggi orang ke-5 = 800 - 645 = 155 cm.\nKesimpulan: Tinggi badan orang kelima adalah 155 cm.'
    },
    {
      id: 'm3-l2-q15',
      text: 'Tentukan median dari data: 12, 15, 13, 10, 18, 16.',
      options: [
        { id: 'A', text: '13' },
        { id: 'B', text: '14' },
        { id: 'C', text: '14,5' },
        { id: 'D', text: '15' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Untuk data genap, median adalah rata-rata dua nilai tengah.\nLangkah-langkah: Urutkan data: 10, 12, 13, 15, 16, 18. Dua nilai tengah adalah 13 and 15. Median = (13 + 15) / 2 = 14.\nKesimpulan: Median data adalah 14.'
    },
    {
      id: 'm3-l2-q16',
      text: 'Rata-rata dari 5, 7, 9, dan p adalah 8. Berapakah nilai p?',
      options: [
        { id: 'A', text: '10' },
        { id: 'B', text: '11' },
        { id: 'C', text: '12' },
        { id: 'D', text: '13' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Gunakan rumus rata-rata untuk mencari data yang hilang.\nLangkah-langkah: (5 + 7 + 9 + p) / 4 = 8 -> 21 + p = 32 -> p = 32 - 21 = 11.\nKesimpulan: Nilai p adalah 11.'
    },
    {
      id: 'm3-l2-q17',
      text: 'Tabel Nilai: 60 (2 siswa), 70 (5 siswa), 80 (8 siswa), 90 (3 siswa). Modus dari data tersebut adalah...',
      options: [
        { id: 'A', text: '60' },
        { id: 'B', text: '70' },
        { id: 'C', text: '80' },
        { id: 'D', text: '90' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Pada tabel frekuensi, modus adalah nilai dengan frekuensi tertinggi.\nLangkah-langkah: Frekuensi tertinggi adalah 8, yang dimiliki oleh nilai 80.\nKesimpulan: Modus data adalah 80.'
    },
    {
      id: 'm3-l2-q18',
      text: 'Rata-rata nilai 10 siswa adalah 75. Jika nilai seorang siswa baru dimasukkan, rata-ratanya menjadi 76. Berapakah nilai siswa baru tersebut?',
      options: [
        { id: 'A', text: '80' },
        { id: 'B', text: '85' },
        { id: 'C', text: '86' },
        { id: 'D', text: '90' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Selisih total nilai akhir dan total nilai awal.\nLangkah-langkah: Total awal = 75 x 10 = 750. Total baru = 76 x 11 = 836. Nilai baru = 836 - 750 = 86.\nKesimpulan: Nilai siswa baru adalah 86.'
    },
    {
      id: 'm3-l2-q19',
      text: 'Nilai ulangan sekelompok siswa adalah: 6, 6, 7, 8, 8, 8, 9, 10. Berapakah nilai mediannya?',
      options: [
        { id: 'A', text: '7' },
        { id: 'B', text: '7,5' },
        { id: 'C', text: '8' },
        { id: 'D', text: '8,5' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Median data genap (8 data).\nLangkah-langkah: Data sudah urut. Data ke-4 and ke-5 adalah 8 and 8. Median = (8 + 8) / 2 = 8.\nKesimpulan: Median data adalah 8.'
    },
    {
      id: 'm3-l2-q20',
      text: 'Sekelompok data terdiri dari: 10, 11, 12, 13, 54. Manakah ukuran pemusatan yang paling tidak menggambarkan keadaan data sebenarnya karena adanya angka 54?',
      options: [
        { id: 'A', text: 'Rata-rata (Mean)' },
        { id: 'B', text: 'Median' },
        { id: 'C', text: 'Modus' },
        { id: 'D', text: 'Semua benar' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Pencilan (outlier) sangat mempengaruhi nilai rata-rata.\nLangkah-langkah: Angka 54 jauh lebih besar dari data lain (10-13), sehingga akan menarik nilai rata-rata menjadi jauh dari kelompok data utama.\nKesimpulan: Rata-rata adalah ukuran yang paling terpengaruh oleh pencilan.'
    },
    {
      id: 'm3-l2-q21',
      text: 'Uang saku harian 5 siswa adalah: Rp7.000, Rp8.000, Rp9.000, Rp8.000, dan Rp10.000. Berapa rata-rata uang saku mereka?',
      options: [
        { id: 'A', text: 'Rp8.000' },
        { id: 'B', text: 'Rp8.400' },
        { id: 'C', text: 'Rp8.500' },
        { id: 'D', text: 'Rp9.000' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung rata-rata nilai numerik dalam konteks uang saku.\nLangkah-langkah: (7000 + 8000 + 9000 + 8000 + 10000) / 5 = 42000 / 5 = 8400.\nKesimpulan: Rata-rata uang saku mereka adalah Rp8.400.'
    },
    {
      id: 'm3-l2-q22',
      text: 'Rata-rata nilai ulangan 4 siswa adalah 7,5. Jika nilai seorang siswa bernama Andi digabungkan, rata-ratanya menjadi 8. Berapakah nilai ulangan Andi?',
      options: [
        { id: 'A', text: '8' },
        { id: 'B', text: '9' },
        { id: 'C', text: '10' },
        { id: 'D', text: '8,5' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mencari nilai data baru yang ditambahkan ke kelompok dengan rata-rata tertentu.\nLangkah-langkah: Total awal = 7,5 x 4 = 30. Total baru = 8 x 5 = 40. Nilai Andi = 40 - 30 = 10.\nKesimpulan: Nilai ulangan Andi adalah 10.'
    },
    {
      id: 'm3-l2-q23',
      text: 'Berikut adalah data jumlah buku yang dibaca 6 siswa: 2, 4, 3, 5, 2, 8. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '3,5' },
        { id: 'C', text: '4' },
        { id: 'D', text: '4,5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung median untuk data berjumlah genap (6 data).\nLangkah-langkah: Urutkan data: 2, 2, 3, 4, 5, 8. Data tengah adalah urutan ke-3 (3) dan ke-4 (4). Median = (3+4)/2 = 3,5.\nKesimpulan: Median buku yang dibaca adalah 3,5.'
    },
    {
      id: 'm3-l2-q24',
      text: 'Dalam keranjang terdapat buah: 5 Apel, 7 Jeruk, 4 Mangga, dan 7 Pisang. Modus dari jenis buah di keranjang tersebut adalah...',
      options: [
        { id: 'A', text: 'Jeruk saja' },
        { id: 'B', text: 'Pisang saja' },
        { id: 'C', text: 'Jeruk dan Pisang' },
        { id: 'D', text: 'Semua buah' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mengidentifikasi modus pada data kategorik (buah) yang memiliki frekuensi tertinggi yang sama.\nLangkah-langkah: Jeruk (7) dan Pisang (7) adalah yang terbanyak. Data memiliki dua modus (bimodal).\nKesimpulan: Modusnya adalah Jeruk dan Pisang.'
    },
    {
      id: 'm3-l2-q25',
      text: 'Rata-rata berat badan sekelompok siswa adalah 45 kg. Jika total berat badan mereka adalah 270 kg, berapa banyak siswa dalam kelompok tersebut?',
      options: [
        { id: 'A', text: '5' },
        { id: 'B', text: '6' },
        { id: 'C', text: '7' },
        { id: 'D', text: '8' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menentukan jumlah data (n) jika rata-rata dan total jumlah diketahui.\nLangkah-langkah: Jumlah siswa = Total Berat / Rata-rata = 270 / 45 = 6.\nKesimpulan: Ada 6 siswa dalam kelompok tersebut.'
    },
    {
      id: 'm3-l2-q26',
      text: 'Gaji 5 karyawan (dalam ribuan) adalah: 2000, 2100, 1900, 2000, dan 10000. Manakah nilai yang paling tepat menggambarkan penghasilan "orang kebanyakan" di sana?',
      options: [
        { id: 'A', text: 'Mean (Rata-rata)' },
        { id: 'B', text: 'Median' },
        { id: 'C', text: 'Jangkauan' },
        { id: 'D', text: 'Total' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Memilih ukuran pemusatan yang representatif saat terdapat pencilan (ekstrim).\nLangkah-langkah: Ada angka 10.000 (jauh dari yang lain). Mean akan terpengaruh menjadi sangat besar. Median (nilai tengah) lebih stabil dan mewakili kelompok mayoritas.\nKesimpulan: Median adalah pilihan terbaik untuk data dengan pencilan.'
    },
    {
      id: 'm3-l2-q27',
      text: 'Diberikan data nilai harian: 70, 75, 80, 85. Berapa median dari nilai-nilai tersebut?',
      options: [
        { id: 'A', text: '75' },
        { id: 'B', text: '77,5' },
        { id: 'C', text: '80' },
        { id: 'D', text: '82,5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung median data genap (4 data) yang sudah urut.\nLangkah-langkah: Data tengah adalah ke-2 (75) dan ke-3 (80). Median = (75 + 80) / 2 = 155 / 2 = 77,5.\nKesimpulan: Median data tersebut adalah 77,5.'
    },
    {
      id: 'm3-l2-q28',
      text: 'Hasil penjualan kg cabai selama 4 hari: 5, 8, 7, 6. Berapa rata-rata penjualannya?',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '6,5' },
        { id: 'C', text: '7' },
        { id: 'D', text: '7,5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Menghitung mean data tunggal sederhana.\nLangkah-langkah: (5 + 8 + 7 + 6) / 4 = 26 / 4 = 6,5.\nKesimpulan: Rata-rata penjualannya adalah 6,5 kg.'
    },
    {
      id: 'm3-l2-q29',
      text: 'Median seringkali dianggap lebih baik daripada rata-rata untuk menggambarkan kondisi ekonomi suatu daerah karena...',
      options: [
        { id: 'A', text: 'Lebih mudah dihitung' },
        { id: 'B', text: 'Tidak terpengaruh oleh segelintir orang yang sangat kaya' },
        { id: 'C', text: 'Selalu menghasilkan angka bulat' },
        { id: 'D', text: 'Menggunakan seluruh nilai data' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Memahami keunggulan statistik median dalam data sosial-ekonomi.\nLangkah-langkah: Rata-rata bisa menipu jika ada sedikit orang dengan harta sangat melimpah. Median hanya mengambil posisi tengah sehingga tidak bias oleh nilai ekstrim.\nKesimpulan: Median tidak terpengaruh oleh pencilan ekstrim.'
    },
    {
      id: 'm3-l2-q30',
      text: 'Skor basket 5 pertandingan: 40, 50, 45, 55, 40. Jika pada pertandingan ke-6 tim mencetak 100 skor, ukuran pemusatan mana yang akan mengalami kenaikan paling drastis?',
      options: [
        { id: 'A', text: 'Mean (Rata-rata)' },
        { id: 'B', text: 'Median' },
        { id: 'C', text: 'Modus' },
        { id: 'D', text: 'Tidak ada yang berubah' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Menganalisis sensitivitas ukuran statistik terhadap nilai data baru yang ekstrim.\nLangkah-langkah: Mean melibatkan pembagian total jumlah. Penambahan 100 akan menambah total secara signifikan. Median hanya bergeser satu posisi.\nKesimpulan: Rata-rata (mean) adalah yang paling sensitif terhadap nilai ekstrim baru.'
    },
    {
      id: 'm3-l2-q31',
      text: 'Data tinggi badan (cm) 7 siswa: 150, 152, 150, 155, 153, 150, 154. Modus dari data tersebut adalah...',
      options: [
        { id: 'A', text: '150' },
        { id: 'B', text: '152' },
        { id: 'C', text: '153' },
        { id: 'D', text: '154' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul.\nLangkah-langkah: Hitung frekuensi tiap nilai. 150 muncul 3 kali, sedangkan 152, 153, 154, 155 masing-masing 1 kali.\nKesimpulan: Modus data tinggi badan adalah 150 cm.'
    },
    {
      id: 'm3-l2-q32',
      text: 'Nilai ulangan 5 siswa: 6, 7, 8, 9, 10. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '7' },
        { id: 'B', text: '8' },
        { id: 'C', text: '9' },
        { id: 'D', text: '8,5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median adalah nilai tengah setelah data diurutkan.\nLangkah-langkah: Data sudah urut: 6, 7, 8, 9, 10. Karena jumlah data 5 (ganjil), median adalah data ke-3 yaitu 8.\nKesimpulan: Median nilai ulangan adalah 8.'
    },
    {
      id: 'm3-l2-q33',
      text: 'Rata-rata berat (kg) 4 kantong beras adalah 25. Jika ditambah 1 kantong lagi, rata-ratanya menjadi 26. Berapa berat kantong beras yang ditambahkan?',
      options: [
        { id: 'A', text: '28' },
        { id: 'B', text: '29' },
        { id: 'C', text: '30' },
        { id: 'D', text: '31' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Nilai baru dapat dicari dari selisih total setelah rata-rata berubah.\nLangkah-langkah: Total awal = 25 × 4 = 100. Total baru = 26 × 5 = 130. Berat kantong tambahan = 130 − 100 = 30.\nKesimpulan: Berat kantong beras yang ditambahkan adalah 30 kg.'
    },
    {
      id: 'm3-l2-q34',
      text: 'Data jumlah pengunjung perpustakaan selama 6 hari: 20, 25, 30, 25, 20, 40. Nilai yang merupakan modus adalah...',
      options: [
        { id: 'A', text: '20' },
        { id: 'B', text: '25' },
        { id: 'C', text: '20 dan 25' },
        { id: 'D', text: '40' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul.\nLangkah-langkah: Frekuensi: 20 muncul 2 kali, 25 muncul 2 kali, 30 muncul 1 kali, 40 muncul 1 kali. Karena ada dua nilai dengan frekuensi tertinggi, datanya bimodal.\nKesimpulan: Modusnya adalah 20 dan 25.'
    },
    {
      id: 'm3-l2-q35',
      text: 'Data usia (tahun) 8 anggota klub: 12, 13, 14, 14, 15, 16, 17, 18. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '14' },
        { id: 'B', text: '14,5' },
        { id: 'C', text: '15' },
        { id: 'D', text: '15,5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median untuk jumlah data genap adalah rata-rata dua nilai tengah.\nLangkah-langkah: Data sudah urut dan berjumlah 8. Dua nilai tengah adalah data ke-4 dan ke-5, yaitu 14 dan 15. Median = (14 + 15) / 2 = 14,5.\nKesimpulan: Median usia anggota klub adalah 14,5 tahun.'
    },
    {
      id: 'm3-l2-q36',
      text: 'Data nilai ulangan 7 siswa: 6, 7, 8, 6, 9, 6, 7. Modus dari data tersebut adalah...',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '7' },
        { id: 'C', text: '8' },
        { id: 'D', text: '9' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul.\nLangkah-langkah: Hitung frekuensi: 6 muncul 3 kali, 7 muncul 2 kali, 8 muncul 1 kali, 9 muncul 1 kali. Nilai paling sering adalah 6.\nKesimpulan: Modus data tersebut adalah 6.'
    },
    {
      id: 'm3-l2-q37',
      text: 'Data: 10, 12, 14, 16, 18. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '12' },
        { id: 'B', text: '14' },
        { id: 'C', text: '15' },
        { id: 'D', text: '16' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median adalah nilai tengah setelah data diurutkan.\nLangkah-langkah: Data sudah urut dan jumlahnya 5 (ganjil). Nilai tengah adalah data ke-3, yaitu 14.\nKesimpulan: Median data tersebut adalah 14.'
    },
        {
      id: 'm3-l2-q38',
      text: 'Rata-rata dari 6 bilangan adalah 9. Jika jumlah 5 bilangan pertama adalah 40, maka bilangan ke-6 adalah...',
      options: [
        { id: 'A', text: '12' },
        { id: 'B', text: '13' },
        { id: 'C', text: '14' },
        { id: 'D', text: '15' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Rata-rata = jumlah data / banyak data.\nLangkah-langkah: Total 6 bilangan = 9 × 6 = 54. Jumlah 5 bilangan pertama = 40. Bilangan ke-6 = 54 − 40 = 14.\nKesimpulan: Bilangan ke-6 adalah 14.'
    },
    {
      id: 'm3-l2-q39',
      text: 'Data jumlah pengunjung perpustakaan selama 5 hari: 20, 25, 30, 25, 20. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '20' },
        { id: 'B', text: '25' },
        { id: 'C', text: '30' },
        { id: 'D', text: '24' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median adalah nilai tengah setelah data diurutkan.\nLangkah-langkah: Urutkan data: 20, 20, 25, 25, 30. Nilai tengah (data ke-3) adalah 25.\nKesimpulan: Median data tersebut adalah 25.'
    },
{
      id: 'm3-l2-q40',
      text: 'Data: 3, 5, 5, 7, 9, 9, 9. Pernyataan yang benar adalah...',
      options: [
        { id: 'A', text: 'Modus = 5' },
        { id: 'B', text: 'Median = 7' },
        { id: 'C', text: 'Modus = 9' },
        { id: 'D', text: 'Mean = 9' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul.\nLangkah-langkah: Nilai 9 muncul 3 kali, nilai 5 muncul 2 kali, lainnya 1 kali. Jadi modus = 9.\nKesimpulan: Pernyataan yang benar adalah modus = 9.'
    },
        {
      id: 'm3-l2-q41',
      text: 'Data: 4, 6, 8, 10, 12. Mean (rata-rata) dari data tersebut adalah...',
      options: [
        { id: 'A', text: '7' },
        { id: 'B', text: '8' },
        { id: 'C', text: '9' },
        { id: 'D', text: '10' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Mean = jumlah data dibagi banyak data.\nLangkah-langkah: (4+6+8+10+12) = 40. Mean = 40/5 = 8.\nKesimpulan: Mean data tersebut adalah 8.'
    },
    {
      id: 'm3-l2-q42',
      text: 'Data tinggi badan (cm) 6 siswa: 150, 155, 160, 165, 170, 175. Median dari data tersebut adalah...',
      options: [
        { id: 'A', text: '160' },
        { id: 'B', text: '162,5' },
        { id: 'C', text: '165' },
        { id: 'D', text: '167,5' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Untuk jumlah data genap, median adalah rata-rata dua data tengah.\nLangkah-langkah: Dua data tengah adalah data ke-3 dan ke-4 yaitu 160 dan 165. Median = (160+165)/2 = 162,5.\nKesimpulan: Median data tersebut adalah 162,5.'
    },
    {
      id: 'm3-l2-q43',
      text: 'Data nilai: 7, 7, 8, 8, 9. Jika ditambah satu nilai baru yaitu 100, ukuran pemusatan mana yang paling terpengaruh (naik paling besar)?',
      options: [
        { id: 'A', text: 'Mean (Rata-rata)' },
        { id: 'B', text: 'Median' },
        { id: 'C', text: 'Modus' },
        { id: 'D', text: 'Median dan Modus sama-sama berubah besar' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Mean sangat sensitif terhadap nilai ekstrim.\nLangkah-langkah: Penambahan 100 membuat jumlah total naik besar sehingga mean naik drastis. Median hanya bergeser sedikit, modus bisa tetap.\nKesimpulan: Yang paling terpengaruh adalah mean.'
    },
    {
      id: 'm3-l2-q44',
      text: 'Data: 3, 5, x, 7, 9. Jika median data tersebut adalah 7, maka nilai x adalah...',
      options: [
        { id: 'A', text: '6' },
        { id: 'B', text: '7' },
        { id: 'C', text: '8' },
        { id: 'D', text: '9' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median untuk 5 data (ganjil) adalah data ke-3 setelah diurutkan.\nLangkah-langkah: Agar median = 7, maka nilai di posisi tengah harus 7. Data sudah dalam urutan naik dengan x di tengah, jadi x = 7.\nKesimpulan: Nilai x adalah 7.'
    },
    {
      id: 'm3-l2-q45',
      text: 'Dalam sebuah kotak ada 6 bola merah, 4 bola biru, 6 bola hijau, dan 2 bola kuning. Modus warna bola adalah...',
      options: [
        { id: 'A', text: 'Merah' },
        { id: 'B', text: 'Biru' },
        { id: 'C', text: 'Hijau' },
        { id: 'D', text: 'Merah dan Hijau' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Modus adalah kategori yang paling sering muncul.\nLangkah-langkah: Merah = 6, Hijau = 6, Biru = 4, Kuning = 2. Terbanyak ada dua kategori (6).\nKesimpulan: Modusnya adalah Merah dan Hijau (bimodal).'
    },
    {
      id: 'm3-l2-q46',
      text: 'Rata-rata nilai 5 siswa adalah 72. Jika ditambah 1 siswa baru dengan nilai 90, rata-rata baru menjadi...',
      options: [
        { id: 'A', text: '74' },
        { id: 'B', text: '75' },
        { id: 'C', text: '76' },
        { id: 'D', text: '77' }
      ],
      correctOptionId: 'D',
      discussion: 'Penjelasan singkat: Hitung total lama dan total baru.\nLangkah-langkah: Total lama = 72 × 5 = 360. Total baru = 360 + 90 = 450. Rata-rata baru = 450/6 = 75.\nKesimpulan: Rata-rata baru adalah 75.'
    },
    {
      id: 'm3-l2-q47',
      text: 'Ukuran pemusatan data yang paling cocok untuk menggambarkan pendapatan warga jika ada beberapa orang yang sangat kaya adalah...',
      options: [
        { id: 'A', text: 'Mean (Rata-rata)' },
        { id: 'B', text: 'Median' },
        { id: 'C', text: 'Modus' },
        { id: 'D', text: 'Semua sama baik' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Median tidak mudah dipengaruhi nilai ekstrim.\nLangkah-langkah: Jika ada orang sangat kaya, mean bisa melonjak sehingga tidak mewakili mayoritas. Median lebih stabil karena melihat posisi tengah.\nKesimpulan: Ukuran yang paling cocok adalah median.'
    },
    {
      id: 'm3-l2-q48',
      text: 'Data: 2, 3, 3, 4, 4, 4, 5. Pernyataan yang benar adalah...',
      options: [
        { id: 'A', text: 'Modus = 3' },
        { id: 'B', text: 'Median = 3' },
        { id: 'C', text: 'Modus = 4' },
        { id: 'D', text: 'Mean = 4,5' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul.\nLangkah-langkah: Nilai 4 muncul 3 kali (terbanyak). Jadi modus = 4.\nKesimpulan: Pernyataan yang benar adalah modus = 4.'
    },
    {
      id: 'm3-l2-q49',
      text: 'Data nilai: 6, 8, 10, 12. Mean dari data tersebut adalah...',
      options: [
        { id: 'A', text: '8' },
        { id: 'B', text: '9' },
        { id: 'C', text: '10' },
        { id: 'D', text: '11' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Mean = jumlah data / banyak data.\nLangkah-langkah: (6+8+10+12)=36. Mean=36/4=9.\nKesimpulan: Mean data tersebut adalah 9.'
    },
    {
      id: 'm3-l2-q50',
      text: 'Nilai ulangan 8 siswa memiliki rata-rata 75. Jika nilai 2 siswa masing-masing 90 dan 85, maka jumlah nilai 6 siswa lainnya adalah...',
      options: [
        { id: 'A', text: '425' },
        { id: 'B', text: '425' },
        { id: 'C', text: '425' },
        { id: 'D', text: '425' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Total nilai = rata-rata × banyak data.\nLangkah-langkah: Total 8 siswa = 75 × 8 = 600. Total 2 siswa = 90 + 85 = 175. Jadi total 6 siswa lainnya = 600 − 175 = 425.\nKesimpulan: Jumlah nilai 6 siswa lainnya adalah 425.'
    }
],
// --- MATEMATIKA: FUNGSI KUADRAT KOMPLEKS (m1-l3) ---
  'm1-l3': [
  {
    id: 'm1-l3-q1',
    text: 'Bentuk umum fungsi kuadrat adalah f(x)=ax²+bx+c dengan a≠0. Jika f(x)=3x²-6x+2, maka nilai a, b, c berturut-turut adalah...',
    options: [
      { id: 'A', text: 'a=3, b=-6, c=2' },
      { id: 'B', text: 'a=-6, b=3, c=2' },
      { id: 'C', text: 'a=3, b=2, c=-6' },
      { id: 'D', text: 'a=2, b=-6, c=3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Koefisien a, b, c dibaca langsung dari bentuk ax²+bx+c.\nLangkah-langkah: Bandingkan 3x²-6x+2 dengan ax²+bx+c → a=3, b=-6, c=2.\nKesimpulan: Nilai a, b, c adalah 3, -6, dan 2.'
  },
  {
    id: 'm1-l3-q2',
    text: 'Sumbu simetri parabola y=x²-4x+7 adalah x=...',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '-2' },
      { id: 'C', text: '4' },
      { id: 'D', text: '-4' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Sumbu simetri y=ax²+bx+c adalah x=−b/(2a).\nLangkah-langkah: a=1, b=-4 → x=−(−4)/(2·1)=4/2=2.\nKesimpulan: Sumbu simetrinya x=2.'
  },
  {
    id: 'm1-l3-q3',
    text: 'Titik puncak (vertex) dari y=2x²+8x+3 adalah...',
    options: [
      { id: 'A', text: '(-2, -5)' },
      { id: 'B', text: '(-2, 5)' },
      { id: 'C', text: '(2, -5)' },
      { id: 'D', text: '(2, 5)' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Vertex berada di x=−b/(2a) lalu y=f(x).\nLangkah-langkah: a=2, b=8 → x=−8/(4)=−2. y=2(−2)²+8(−2)+3=8−16+3=−5.\nKesimpulan: Titik puncaknya adalah (−2, −5).'
  },
  {
    id: 'm1-l3-q4',
    text: 'Akar-akar persamaan x²−5x+6=0 adalah...',
    options: [
      { id: 'A', text: 'x=2 dan x=3' },
      { id: 'B', text: 'x=-2 dan x=-3' },
      { id: 'C', text: 'x=1 dan x=6' },
      { id: 'D', text: 'x=-1 dan x=-6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Akar persamaan kuadrat bisa dicari dengan faktorisasi.\nLangkah-langkah: x²−5x+6=(x−2)(x−3)=0 → x=2 atau x=3.\nKesimpulan: Akar-akarnya adalah 2 dan 3.'
  },
  {
    id: 'm1-l3-q5',
    text: 'Untuk y=−x²+4x+1, parabola membuka ke...',
    options: [
      { id: 'A', text: 'Atas' },
      { id: 'B', text: 'Bawah' },
      { id: 'C', text: 'Kanan' },
      { id: 'D', text: 'Kiri' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Tanda koefisien a menentukan arah buka parabola.\nLangkah-langkah: a=−1 < 0 → parabola membuka ke bawah.\nKesimpulan: Parabola membuka ke bawah.'
  },
  {
    id: 'm1-l3-q6',
    text: 'Nilai minimum dari y=x²−6x+10 adalah...',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '4' },
      { id: 'D', text: '10' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Jika a>0, nilai minimum terjadi di titik puncak.\nLangkah-langkah: x=−b/(2a)=6/2=3. y(3)=9−18+10=1.\nKesimpulan: Nilai minimum adalah 1.'
  },
  {
    id: 'm1-l3-q7',
    text: 'Nilai maksimum dari y=−2x²+8x−1 adalah...',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '6' },
      { id: 'C', text: '5' },
      { id: 'D', text: '8' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jika a<0, nilai maksimum terjadi di titik puncak.\nLangkah-langkah: x=−b/(2a)=−8/(2·−2)=2. y(2)=−2(4)+16−1=7.\nKesimpulan: Nilai maksimum adalah 7.'
  },
  {
    id: 'm1-l3-q8',
    text: 'Pernyataan yang benar tentang diskriminan D=b²−4ac adalah...',
    options: [
      { id: 'A', text: 'Jika D>0, ada 2 akar real berbeda' },
      { id: 'B', text: 'Jika D=0, tidak ada akar real' },
      { id: 'C', text: 'Jika D<0, ada 2 akar real berbeda' },
      { id: 'D', text: 'Jika D>0, hanya ada 1 akar real' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diskriminan menentukan banyaknya akar real.\nLangkah-langkah: D>0 → 2 akar real berbeda; D=0 → akar kembar; D<0 → tidak ada akar real.\nKesimpulan: Yang benar adalah D>0 memiliki 2 akar real berbeda.'
  },
  {
    id: 'm1-l3-q9',
    text: 'Persamaan 2x²+4x+k=0 memiliki akar kembar. Nilai k adalah...',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '1' },
      { id: 'C', text: '4' },
      { id: 'D', text: '0' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Akar kembar terjadi saat diskriminan D=0.\nLangkah-langkah: D=4²−4·2·k=16−8k=0 → k=2.\nKesimpulan: Nilai k adalah 2.'
  },
  {
    id: 'm1-l3-q10',
    text: 'Grafik y=x²−2x−3 memotong sumbu-Y di titik...',
    options: [
      { id: 'A', text: '(0, −3)' },
      { id: 'B', text: '(0, 3)' },
      { id: 'C', text: '(−3, 0)' },
      { id: 'D', text: '(3, 0)' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik potong sumbu-Y didapat saat x=0.\nLangkah-langkah: y=0²−2·0−3=−3.\nKesimpulan: Titik potong sumbu-Y adalah (0, −3).'
  },
  {
    id: 'm1-l3-q11',
    text: 'Grafik y=x²−9 memotong sumbu-X di titik...',
    options: [
      { id: 'A', text: '(0, 9) dan (0, −9)' },
      { id: 'B', text: '(3, 0) dan (−3, 0)' },
      { id: 'C', text: '(9, 0) dan (−9, 0)' },
      { id: 'D', text: '(0, 3) dan (0, −3)' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Titik potong sumbu-X didapat saat y=0.\nLangkah-langkah: x²−9=0 → x²=9 → x=3 atau x=−3.\nKesimpulan: Titik potong sumbu-X adalah (3,0) dan (−3,0).'
  },
  {
    id: 'm1-l3-q12',
    text: 'Jika f(x)=x²−4x+1, maka f(5) adalah...',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '5' },
      { id: 'C', text: '4' },
      { id: 'D', text: '1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Nilai fungsi didapat dengan substitusi x.\nLangkah-langkah: f(5)=25−20+1=6.\nKesimpulan: f(5)=6.'
  },
  {
    id: 'm1-l3-q13',
    text: 'Fungsi y=(x−3)²+2 merupakan hasil translasi dari y=x² sejauh...',
    options: [
      { id: 'A', text: '3 ke kanan dan 2 ke atas' },
      { id: 'B', text: '3 ke kiri dan 2 ke atas' },
      { id: 'C', text: '3 ke kanan dan 2 ke bawah' },
      { id: 'D', text: '3 ke kiri dan 2 ke bawah' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bentuk y=(x−h)²+k bergeser h ke kanan dan k ke atas.\nLangkah-langkah: h=3 → geser kanan 3; k=2 → geser atas 2.\nKesimpulan: Translasi 3 ke kanan dan 2 ke atas.'
  },
  {
    id: 'm1-l3-q14',
    text: 'Titik puncak y=(x+2)²−7 adalah...',
    options: [
      { id: 'A', text: '(−2, −7)' },
      { id: 'B', text: '(2, −7)' },
      { id: 'C', text: '(−2, 7)' },
      { id: 'D', text: '(2, 7)' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bentuk puncak y=(x−h)²+k memiliki puncak (h,k).\nLangkah-langkah: (x+2)²=(x−(−2))² → h=−2, k=−7.\nKesimpulan: Titik puncaknya (−2, −7).'
  },
  {
    id: 'm1-l3-q15',
    text: 'Jika parabola y=ax²+bx+c melalui titik (0,5), maka nilai c adalah...',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '5' },
      { id: 'C', text: '−5' },
      { id: 'D', text: 'Tidak dapat ditentukan' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Saat x=0, nilai y sama dengan c.\nLangkah-langkah: Substitusi x=0 → y=c. Karena melalui (0,5), maka c=5.\nKesimpulan: Nilai c adalah 5.'
  },

  // --------- Level menengah: akar, diskriminan, pertidaksamaan ---------

  {
    id: 'm1-l3-q16',
    text: 'Untuk f(x)=x²+px+4, jika sumbu simetri x=1, maka nilai p adalah...',
    options: [
      { id: 'A', text: '−2' },
      { id: 'B', text: '2' },
      { id: 'C', text: '−1' },
      { id: 'D', text: '1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Sumbu simetri y=ax²+bx+c adalah x=−b/(2a).\nLangkah-langkah: a=1, b=p → 1=−p/2 → p=−2.\nKesimpulan: Nilai p adalah −2.'
  },
  {
    id: 'm1-l3-q17',
    text: 'Jika akar-akar persamaan x²−7x+12=0 adalah r dan s, maka nilai r+s adalah...',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '12' },
      { id: 'C', text: '−7' },
      { id: 'D', text: '−12' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah akar persamaan ax²+bx+c=0 adalah −b/a.\nLangkah-langkah: a=1, b=−7 → r+s=−(−7)/1=7.\nKesimpulan: r+s=7.'
  },
  {
    id: 'm1-l3-q18',
    text: 'Jika akar-akar persamaan 2x²−3x−2=0 adalah r dan s, maka hasil kali rs adalah...',
    options: [
      { id: 'A', text: '−1' },
      { id: 'B', text: '1' },
      { id: 'C', text: '−2' },
      { id: 'D', text: '2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Hasil kali akar ax²+bx+c=0 adalah c/a.\nLangkah-langkah: c=−2, a=2 → rs=−2/2=−1.\nKesimpulan: rs=−1.'
  },
  {
    id: 'm1-l3-q19',
    text: 'Nilai diskriminan dari 3x²+2x+5=0 adalah...',
    options: [
      { id: 'A', text: '−56' },
      { id: 'B', text: '56' },
      { id: 'C', text: '−44' },
      { id: 'D', text: '44' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diskriminan D=b²−4ac.\nLangkah-langkah: a=3, b=2, c=5 → D=4−4·3·5=4−60=−56.\nKesimpulan: Diskriminannya −56.'
  },
  {
    id: 'm1-l3-q20',
    text: 'Parabola y=x²+2x−8 memotong sumbu-X di...',
    options: [
      { id: 'A', text: 'x=2 dan x=−4' },
      { id: 'B', text: 'x=4 dan x=−2' },
      { id: 'C', text: 'x=8 dan x=−1' },
      { id: 'D', text: 'x=−8 dan x=1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik potong sumbu-X adalah akar-akar saat y=0.\nLangkah-langkah: x²+2x−8=(x+4)(x−2)=0 → x=−4 atau x=2.\nKesimpulan: Memotong sumbu-X di x=2 dan x=−4.'
  },
  {
    id: 'm1-l3-q21',
    text: 'Himpunan penyelesaian pertidaksamaan x²−5x+6 < 0 adalah...',
    options: [
      { id: 'A', text: 'x < 2 atau x > 3' },
      { id: 'B', text: '2 < x < 3' },
      { id: 'C', text: 'x ≤ 2 atau x ≥ 3' },
      { id: 'D', text: 'x ≤ 2 dan x ≥ 3' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Untuk a>0, f(x)<0 terjadi di antara akar-akar.\nLangkah-langkah: (x−2)(x−3)<0 → di antara 2 dan 3.\nKesimpulan: Penyelesaiannya 2<x<3.'
  },
  {
    id: 'm1-l3-q22',
    text: 'Himpunan penyelesaian pertidaksamaan −x²+4x−3 ≥ 0 adalah...',
    options: [
      { id: 'A', text: 'x ≤ 1 atau x ≥ 3' },
      { id: 'B', text: '1 ≤ x ≤ 3' },
      { id: 'C', text: 'x < 1 atau x > 3' },
      { id: 'D', text: '1 < x < 3' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Ubah ke bentuk yang mudah dianalisis tanda.\nLangkah-langkah: −x²+4x−3 ≥0 ⇔ x²−4x+3 ≤0 ⇔ (x−1)(x−3)≤0 → 1≤x≤3.\nKesimpulan: Penyelesaiannya 1≤x≤3.'
  },
  {
    id: 'm1-l3-q23',
    text: 'Jika puncak parabola adalah (2, −1) dan a=1, maka fungsi yang tepat adalah...',
    options: [
      { id: 'A', text: 'y=(x−2)²−1' },
      { id: 'B', text: 'y=(x+2)²−1' },
      { id: 'C', text: 'y=(x−2)²+1' },
      { id: 'D', text: 'y=(x+2)²+1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bentuk puncak y=a(x−h)²+k.\nLangkah-langkah: (h,k)=(2,−1) dan a=1 → y=(x−2)²−1.\nKesimpulan: Fungsi yang benar adalah y=(x−2)²−1.'
  },
  {
    id: 'm1-l3-q24',
    text: 'Nilai minimum dari f(x)=x²−4x+3 adalah...',
    options: [
      { id: 'A', text: '−1' },
      { id: 'B', text: '0' },
      { id: 'C', text: '1' },
      { id: 'D', text: '3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Minimum terjadi di titik puncak karena a>0.\nLangkah-langkah: x=−b/(2a)=4/2=2. f(2)=4−8+3=−1.\nKesimpulan: Nilai minimum adalah −1.'
  },
  {
    id: 'm1-l3-q25',
    text: 'Fungsi f(x)=x²+6x+13 tidak memotong sumbu-X karena...',
    options: [
      { id: 'A', text: 'a=1' },
      { id: 'B', text: 'c=13' },
      { id: 'C', text: 'diskriminan < 0' },
      { id: 'D', text: 'diskriminan = 0' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Tidak memotong sumbu-X berarti tidak punya akar real.\nLangkah-langkah: D=6²−4·1·13=36−52=−16<0 → tidak ada akar real.\nKesimpulan: Tidak memotong sumbu-X karena diskriminan negatif.'
  },
  {
    id: 'm1-l3-q26',
    text: 'Persamaan garis sumbu simetri dari y=4x²−16x+9 adalah...',
    options: [
      { id: 'A', text: 'x=−2' },
      { id: 'B', text: 'x=2' },
      { id: 'C', text: 'y=2' },
      { id: 'D', text: 'y=−2' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Sumbu simetri x=−b/(2a).\nLangkah-langkah: a=4, b=−16 → x=−(−16)/(8)=2.\nKesimpulan: Sumbu simetri adalah x=2.'
  },
  {
    id: 'm1-l3-q27',
    text: 'Nilai f(−1) untuk f(x)=−3x²+2x+1 adalah...',
    options: [
      { id: 'A', text: '−4' },
      { id: 'B', text: '0' },
      { id: 'C', text: '−2' },
      { id: 'D', text: '4' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Substitusi x=−1 ke fungsi.\nLangkah-langkah: f(−1)=−3(1)+2(−1)+1=−3−2+1=−4.\nKesimpulan: f(−1)=−4.'
  },
  {
    id: 'm1-l3-q28',
    text: 'Jika parabola y=x²+bx+1 menyinggung sumbu-X, maka nilai b adalah...',
    options: [
      { id: 'A', text: '2 atau −2' },
      { id: 'B', text: '1 atau −1' },
      { id: 'C', text: '0' },
      { id: 'D', text: '4 atau −4' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Menyinggung sumbu-X berarti punya akar kembar (D=0).\nLangkah-langkah: D=b²−4·1·1=b²−4=0 → b²=4 → b=±2.\nKesimpulan: Nilai b adalah 2 atau −2.'
  },
  {
    id: 'm1-l3-q29',
    text: 'Jika x²−2x+k=0 memiliki akar real kembar, maka nilai k adalah...',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '4' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Akar kembar terjadi saat diskriminan sama dengan 0.\nLangkah-langkah: D=(−2)²−4·1·k=4−4k=0 → k=1.\nKesimpulan: Nilai k adalah 1.'
  },
  {
    id: 'm1-l3-q30',
    text: 'Fungsi y=−2(x−1)²+8 memiliki nilai maksimum sebesar...',
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '6' },
      { id: 'C', text: '2' },
      { id: 'D', text: '−8' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bentuk puncak y=a(x−h)²+k memiliki nilai ekstrem k.\nLangkah-langkah: a<0 → maksimum terjadi di puncak, nilainya k=8.\nKesimpulan: Nilai maksimum adalah 8.'
  },

  // --------- Kompleks: parameter, potong garis, sifat, optimasi ---------

  {
    id: 'm1-l3-q31',
    text: 'Parabola y=x²+px+4 melalui titik (1,3). Nilai p adalah...',
    options: [
      { id: 'A', text: '−2' },
      { id: 'B', text: '−1' },
      { id: 'C', text: '1' },
      { id: 'D', text: '2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Substitusi titik (x,y) ke persamaan untuk mencari parameter.\nLangkah-langkah: 3=1²+p(1)+4 → 3=1+p+4 → p=−2.\nKesimpulan: Nilai p adalah −2.'
  },
  {
    id: 'm1-l3-q32',
    text: 'Parabola y=2x²−8x+6 dipotong garis y=2 di dua titik. Jumlah absis kedua titik potong adalah...',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '4' },
      { id: 'C', text: '6' },
      { id: 'D', text: '8' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Samakan kedua persamaan, lalu gunakan jumlah akar.\nLangkah-langkah: 2x²−8x+6=2 → 2x²−8x+4=0 → x²−4x+2=0. Jumlah akar = −(−4)/1=4.\nKesimpulan: Jumlah absis kedua titik potong adalah 4.'
  },
  {
    id: 'm1-l3-q33',
    text: 'Jika f(x)=ax²+bx+c dengan a>0 dan diskriminan D<0, maka grafik f(x) terhadap sumbu-X adalah...',
    options: [
      { id: 'A', text: 'Memotong sumbu-X di dua titik' },
      { id: 'B', text: 'Menyinggung sumbu-X' },
      { id: 'C', text: 'Tidak memotong sumbu-X dan seluruhnya di atas sumbu-X' },
      { id: 'D', text: 'Tidak memotong sumbu-X dan seluruhnya di bawah sumbu-X' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: D<0 berarti tidak ada akar real (tidak ada potong sumbu-X).\nLangkah-langkah: Karena a>0, parabola membuka ke atas. Jika tidak memotong sumbu-X, grafik berada di atas sumbu-X.\nKesimpulan: Grafik tidak memotong sumbu-X dan seluruhnya di atas sumbu-X.'
  },
  {
    id: 'm1-l3-q34',
    text: 'Nilai x saat f(x)=x²−6x+5 mencapai nilai minimum adalah...',
    options: [
      { id: 'A', text: '−3' },
      { id: 'B', text: '3' },
      { id: 'C', text: '6' },
      { id: 'D', text: '−6' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Minimum terjadi pada x=−b/(2a).\nLangkah-langkah: a=1, b=−6 → x=6/2=3.\nKesimpulan: Nilai minimum terjadi saat x=3.'
  },
  {
    id: 'm1-l3-q35',
    text: 'Untuk y=(x−4)²−9, titik potong dengan sumbu-X adalah...',
    options: [
      { id: 'A', text: '(1,0) dan (7,0)' },
      { id: 'B', text: '(−1,0) dan (9,0)' },
      { id: 'C', text: '(4,0) dan (−9,0)' },
      { id: 'D', text: '(9,0) dan (1,0)' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik potong sumbu-X didapat saat y=0.\nLangkah-langkah: (x−4)²−9=0 → (x−4)²=9 → x−4=±3 → x=1 atau x=7.\nKesimpulan: Titik potongnya (1,0) dan (7,0).'
  },
  {
    id: 'm1-l3-q36',
    text: 'Sebuah parabola memiliki akar-akar 2 dan −5. Jika koefisien a=1, maka persamaan fungsi kuadratnya adalah...',
    options: [
      { id: 'A', text: 'y=x²+3x−10' },
      { id: 'B', text: 'y=x²−3x−10' },
      { id: 'C', text: 'y=x²+10x+3' },
      { id: 'D', text: 'y=x²−10x+3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jika akar r dan s, maka y=a(x−r)(x−s).\nLangkah-langkah: y=(x−2)(x+5)=x²+5x−2x−10=x²+3x−10.\nKesimpulan: Persamaannya y=x²+3x−10.'
  },
  {
    id: 'm1-l3-q37',
    text: 'Jika f(x)=x²−4x+3 dan g(x)=x−1, maka nilai x saat f(x)=g(x) adalah...',
    options: [
      { id: 'A', text: 'x=1 dan x=4' },
      { id: 'B', text: 'x=0 dan x=3' },
      { id: 'C', text: 'x=2 dan x=3' },
      { id: 'D', text: 'x=−1 dan x=4' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik potong fungsi didapat dengan menyamakan nilai kedua fungsi.\nLangkah-langkah: x²−4x+3=x−1 → x²−5x+4=0 → (x−1)(x−4)=0 → x=1 atau x=4.\nKesimpulan: Nilai x adalah 1 dan 4.'
  },
  {
    id: 'm1-l3-q38',
    text: 'Nilai minimum dari y=2x²−4x+5 adalah...',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Minimum terjadi di x=−b/(2a) karena a>0.\nLangkah-langkah: x=−(−4)/(2·2)=4/4=1. y(1)=2−4+5=3.\nKesimpulan: Nilai minimum adalah 3.'
  },
  {
    id: 'm1-l3-q39',
    text: 'Jika parabola y=ax²+bx+c memiliki sumbu simetri x=−3, maka hubungan b dan a adalah...',
    options: [
      { id: 'A', text: 'b=6a' },
      { id: 'B', text: 'b=−6a' },
      { id: 'C', text: 'b=3a' },
      { id: 'D', text: 'b=−3a' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Sumbu simetri x=−b/(2a).\nLangkah-langkah: −b/(2a)=−3 → b/(2a)=3 → b=6a.\nKesimpulan: Hubungannya adalah b=6a.'
  },
  {
    id: 'm1-l3-q40',
    text: 'Parabola memiliki titik puncak (1, −4) dan melalui titik (0, −3). Persamaan parabola tersebut adalah...',
    options: [
      { id: 'A', text: 'y=(x−1)²−4' },
      { id: 'B', text: 'y=2(x−1)²−4' },
      { id: 'C', text: 'y=(x+1)²−4' },
      { id: 'D', text: 'y=(x−1)²−3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan bentuk puncak y=a(x−h)²+k.\nLangkah-langkah: y=a(x−1)²−4. Melalui (0,−3): −3=a(1)−4 → a=1.\nKesimpulan: Persamaannya y=(x−1)²−4.'
  },

  // --------- HOTS/Kontekstual: gerak parabola, optimasi, desain ---------

  {
    id: 'm1-l3-q41',
    text: 'Lintasan bola dinyatakan h(t)=−5t²+20t+1 (meter). Tinggi maksimum bola adalah...',
    options: [
      { id: 'A', text: '16 m' },
      { id: 'B', text: '19 m' },
      { id: 'C', text: '21 m' },
      { id: 'D', text: '26 m' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Karena koefisien t² negatif, maksimum terjadi di puncak.\nLangkah-langkah: t=−b/(2a)=−20/(2·−5)=2. h(2)=−5(4)+40+1=21.\nKesimpulan: Tinggi maksimum bola adalah 21 m.'
  },
  {
    id: 'm1-l3-q42',
    text: 'Keuntungan usaha dinyatakan P(x)=−x²+10x−9 (juta rupiah). Agar keuntungan maksimum, nilai x adalah...',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '10' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Fungsi kuadrat a<0 maksimum di puncak.\nLangkah-langkah: x=−b/(2a)=−10/(2·−1)=5.\nKesimpulan: Keuntungan maksimum saat x=5.'
  },
  {
    id: 'm1-l3-q43',
    text: 'Persegi panjang berkeliling 40 cm. Jika panjang = x cm, maka lebar = 20−x cm. Nilai x agar luas maksimum adalah...',
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '9' },
      { id: 'C', text: '10' },
      { id: 'D', text: '12' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Luas menjadi fungsi kuadrat dan maksimum di puncak.\nLangkah-langkah: L=x(20−x)=−x²+20x. Puncak: x=−20/(2·−1)=10.\nKesimpulan: Luas maksimum saat x=10 cm.'
  },
  {
    id: 'm1-l3-q44',
    text: 'Interval x yang membuat f(x)=x²−2x−8 ≥ 0 adalah...',
    options: [
      { id: 'A', text: '−2 ≤ x ≤ 4' },
      { id: 'B', text: 'x ≤ −2 atau x ≥ 4' },
      { id: 'C', text: '−2 < x < 4' },
      { id: 'D', text: 'x < −2 atau x > 4' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Untuk a>0, f(x)≥0 terjadi di luar akar-akar.\nLangkah-langkah: x²−2x−8=(x−4)(x+2). Akar: −2 dan 4. Maka f(x)≥0 untuk x≤−2 atau x≥4.\nKesimpulan: Intervalnya x≤−2 atau x≥4.'
  },
  {
    id: 'm1-l3-q45',
    text: 'Jika f(x)=2x²+mx+8 memiliki diskriminan 0, maka nilai m adalah...',
    options: [
      { id: 'A', text: '±4' },
      { id: 'B', text: '±6' },
      { id: 'C', text: '±8' },
      { id: 'D', text: '±16' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Diskriminan 0 berarti akar kembar.\nLangkah-langkah: D=m²−4·2·8=m²−64=0 → m²=64 → m=±8.\nKesimpulan: Nilai m adalah ±8.'
  },
  {
    id: 'm1-l3-q46',
    text: 'Parabola y=x²−2x+1 dipotong garis y=2. Selisih absis kedua titik potong adalah...',
    options: [
      { id: 'A', text: '√2' },
      { id: 'B', text: '2√2' },
      { id: 'C', text: '2' },
      { id: 'D', text: '4' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Samakan persamaan, lalu cari selisih kedua akar.\nLangkah-langkah: x²−2x+1=2 → x²−2x−1=0. Akar: x=1±√2. Selisih = (1+√2)−(1−√2)=2√2.\nKesimpulan: Selisih absisnya 2√2.'
  },
  {
    id: 'm1-l3-q47',
    text: 'Jika f(x)=x²−4x+7 dan g(x)=x²+2x+1, maka nilai x saat f(x)=g(x) adalah...',
    options: [
      { id: 'A', text: '−1' },
      { id: 'B', text: '0' },
      { id: 'C', text: '1' },
      { id: 'D', text: '2' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Menentukan titik potong dengan menyamakan f(x) dan g(x).\nLangkah-langkah: x²−4x+7=x²+2x+1 → −4x+7=2x+1 → −6x=−6 → x=1.\nKesimpulan: Nilai x adalah 1.'
  },
  {
    id: 'm1-l3-q48',
    text: 'Sebuah fungsi kuadrat memiliki akar-akar 1 dan 5 serta memotong sumbu-Y di y=−5. Persamaan fungsi kuadratnya adalah...',
    options: [
      { id: 'A', text: 'y=(x−1)(x−5)' },
      { id: 'B', text: 'y=−(x−1)(x−5)' },
      { id: 'C', text: 'y=(x+1)(x+5)' },
      { id: 'D', text: 'y=−(x+1)(x+5)' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Jika akar r dan s, bentuknya y=a(x−r)(x−s).\nLangkah-langkah: y=a(x−1)(x−5). Saat x=0, y=a(−1)(−5)=5a. Diketahui y=−5 → 5a=−5 → a=−1.\nKesimpulan: Persamaannya y=−(x−1)(x−5).'
  },
  {
    id: 'm1-l3-q49',
    text: 'Agar fungsi y=x²+kx+9 selalu bernilai positif untuk semua x real, syarat nilai k adalah...',
    options: [
      { id: 'A', text: 'k=0' },
      { id: 'B', text: 'k=6' },
      { id: 'C', text: '−6 < k < 6' },
      { id: 'D', text: 'k ≤ −6 atau k ≥ 6' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Agar selalu positif (a>0), parabola tidak boleh memotong sumbu-X (D<0).\nLangkah-langkah: D=k²−4·1·9=k²−36<0 → k²<36 → −6<k<6.\nKesimpulan: Syaratnya −6<k<6.'
  },
  {
    id: 'm1-l3-q50',
    text: 'Taman berbentuk persegi panjang dibuat dengan 60 m pagar, satu sisi menempel tembok sehingga hanya 3 sisi dipagari. Jika lebar x m, maka luas maksimum terjadi saat x=...',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '15' },
      { id: 'C', text: '20' },
      { id: 'D', text: '30' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Bentuk fungsi luas menjadi kuadrat dan maksimum di puncak.\nLangkah-langkah: 2x+p=60 → p=60−2x. L=x(60−2x)=−2x²+60x. Puncak: x=−60/(2·−2)=15.\nKesimpulan: Luas maksimum terjadi saat x=15 m.'
  }
],
// --- MATEMATIKA: GEOMETRI & PENGUKURAN LEVEL 3 (m2-l3) ---
'm2-l3': [
  {
    id: 'm2-l3-q1',
    text: 'Sebuah tabung berjari-jari 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah... (π = 22/7)',
    options: [
      { id: 'A', text: '1.540 cm³' },
      { id: 'B', text: '1.400 cm³' },
      { id: 'C', text: '1.320 cm³' },
      { id: 'D', text: '1.100 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume tabung = π × r² × t.\nLangkah-langkah: (22/7) × 7² × 10 = 1.540.\nKesimpulan: Volume tabung adalah 1.540 cm³.'
  },
  {
    id: 'm2-l3-q2',
    text: 'Sebuah tabung memiliki diameter 14 cm dan tinggi 5 cm. Volume tabung adalah...',
    options: [
      { id: 'A', text: '770 cm³' },
      { id: 'B', text: '700 cm³' },
      { id: 'C', text: '660 cm³' },
      { id: 'D', text: '880 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diameter 14 cm berarti jari-jari 7 cm.\nLangkah-langkah: π × 7² × 5 = 770.\nKesimpulan: Volume tabung adalah 770 cm³.'
  },
  {
    id: 'm2-l3-q3',
    text: 'Sebuah bola berjari-jari 7 cm. Volume bola tersebut adalah... (π = 22/7)',
    options: [
      { id: 'A', text: '1.436 cm³' },
      { id: 'B', text: '1.300 cm³' },
      { id: 'C', text: '1.540 cm³' },
      { id: 'D', text: '1.232 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume bola = 4/3 × π × r³.\nLangkah-langkah: 4/3 × (22/7) × 7³ = 1.436.\nKesimpulan: Volume bola adalah 1.436 cm³.'
  },
  {
    id: 'm2-l3-q4',
    text: 'Sebuah kerucut berjari-jari 7 cm dan tinggi 12 cm. Volume kerucut adalah...',
    options: [
      { id: 'A', text: '616 cm³' },
      { id: 'B', text: '770 cm³' },
      { id: 'C', text: '924 cm³' },
      { id: 'D', text: '1.232 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume kerucut = 1/3 × π × r² × t.\nLangkah-langkah: 1/3 × (22/7) × 49 × 12 = 616.\nKesimpulan: Volume kerucut adalah 616 cm³.'
  },

  {
    id: 'm2-l3-q5',
    text: 'Perbandingan volume tabung dan kerucut dengan alas dan tinggi yang sama adalah...',
    options: [
      { id: 'A', text: '3 : 1' },
      { id: 'B', text: '2 : 1' },
      { id: 'C', text: '1 : 2' },
      { id: 'D', text: '1 : 3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume tabung = πr²t, volume kerucut = 1/3 πr²t.\nKesimpulan: Perbandingan volumenya adalah 3 : 1.'
  },

  {
    id: 'm2-l3-q6',
    text: 'Sebuah bola memiliki diameter 14 cm. Volume bola tersebut adalah... (π = 22/7)',
    options: [
      { id: 'A', text: '1.436 cm³' },
      { id: 'B', text: '1.232 cm³' },
      { id: 'C', text: '1.540 cm³' },
      { id: 'D', text: '1.120 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diameter 14 cm berarti jari-jari 7 cm.\nLangkah-langkah: 4/3 × π × 7³ = 1.436.\nKesimpulan: Volume bola adalah 1.436 cm³.'
  },

  {
    id: 'm2-l3-q7',
    text: 'Jika volume tabung 1.540 cm³ dan jari-jari alas 7 cm, tinggi tabung adalah...',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '7 cm' },
      { id: 'C', text: '14 cm' },
      { id: 'D', text: '5 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan rumus V = π × r² × t.\nLangkah-langkah: 1.540 ÷ (22/7 × 49) = 10.\nKesimpulan: Tinggi tabung adalah 10 cm.'
  },

  {
    id: 'm2-l3-q8',
    text: 'Sebuah kerucut memiliki volume 616 cm³ dan jari-jari 7 cm. Tinggi kerucut adalah...',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '10 cm' },
      { id: 'C', text: '14 cm' },
      { id: 'D', text: '7 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 1/3 π r² t.\nLangkah-langkah: 616 × 3 ÷ (22/7 × 49) = 12.\nKesimpulan: Tinggi kerucut adalah 12 cm.'
  },

  {
    id: 'm2-l3-q9',
    text: 'Volume sebuah bola adalah 288 cm³ dengan π = 3. Jari-jari bola tersebut adalah...',
    options: [
      { id: 'A', text: '6 cm' },
      { id: 'B', text: '5 cm' },
      { id: 'C', text: '4 cm' },
      { id: 'D', text: '7 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 4/3 π r³.\nLangkah-langkah: 288 = 4 × r³ → r³ = 72 → r = 6.\nKesimpulan: Jari-jari bola adalah 6 cm.'
  },

  {
    id: 'm2-l3-q10',
    text: 'Bangun ruang yang volumenya selalu sepertiga volume tabung dengan alas dan tinggi sama adalah...',
    options: [
      { id: 'A', text: 'Kerucut' },
      { id: 'B', text: 'Bola' },
      { id: 'C', text: 'Prisma' },
      { id: 'D', text: 'Limas segiempat' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume kerucut = 1/3 volume tabung.\nKesimpulan: Bangun tersebut adalah kerucut.'
  },
  {
    id: 'm2-l3-q11',
    text: 'Sebuah tabung memiliki volume 770 cm³ dan jari-jari alas 7 cm. Tinggi tabung adalah...',
    options: [
      { id: 'A', text: '5 cm' },
      { id: 'B', text: '7 cm' },
      { id: 'C', text: '10 cm' },
      { id: 'D', text: '14 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan rumus V = πr²t.\nLangkah-langkah: 770 ÷ (22/7 × 49) = 5.\nKesimpulan: Tinggi tabung adalah 5 cm.'
  },
  {
    id: 'm2-l3-q12',
    text: 'Sebuah bola berjari-jari 14 cm. Volume bola tersebut adalah... (π = 22/7)',
    options: [
      { id: 'A', text: '11.494,9 cm³' },
      { id: 'B', text: '9.234 cm³' },
      { id: 'C', text: '10.560 cm³' },
      { id: 'D', text: '12.320 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 4/3 × π × r³.\nLangkah-langkah: 4/3 × (22/7) × 14³ = 11.494,9.\nKesimpulan: Volume bola adalah 11.494,9 cm³.'
  },
  {
    id: 'm2-l3-q13',
    text: 'Jika jari-jari bola diperbesar 2 kali, maka volume bola akan menjadi...',
    options: [
      { id: 'A', text: '2 kali' },
      { id: 'B', text: '4 kali' },
      { id: 'C', text: '6 kali' },
      { id: 'D', text: '8 kali' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Volume bola sebanding dengan r³.\nLangkah-langkah: (2r)³ = 8r³.\nKesimpulan: Volume menjadi 8 kali.'
  },
  {
    id: 'm2-l3-q14',
    text: 'Sebuah kerucut memiliki alas dan tinggi sama dengan tabung. Perbandingan volume kerucut terhadap tabung adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '1 : 3' },
      { id: 'C', text: '2 : 3' },
      { id: 'D', text: '3 : 1' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Volume kerucut = 1/3 volume tabung.\nKesimpulan: Perbandingan kerucut : tabung = 1 : 3.'
  },
  {
    id: 'm2-l3-q15',
    text: 'Volume sebuah kerucut adalah 462 cm³ dengan jari-jari 7 cm. Tinggi kerucut adalah...',
    options: [
      { id: 'A', text: '6 cm' },
      { id: 'B', text: '7 cm' },
      { id: 'C', text: '9 cm' },
      { id: 'D', text: '12 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 1/3 π r² t.\nLangkah-langkah: 462 × 3 ÷ (22/7 × 49) = 6.\nKesimpulan: Tinggi kerucut adalah 6 cm.'
  },

  {
    id: 'm2-l3-q16',
    text: 'Bangun ruang yang tidak memiliki titik sudut adalah...',
    options: [
      { id: 'A', text: 'Tabung dan bola' },
      { id: 'B', text: 'Kerucut dan bola' },
      { id: 'C', text: 'Tabung dan kerucut' },
      { id: 'D', text: 'Kerucut saja' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Tabung dan bola tidak memiliki titik sudut.\nKesimpulan: Jawaban yang benar adalah tabung dan bola.'
  },
  {
    id: 'm2-l3-q17',
    text: 'Jika diameter tabung 14 cm dan tinggi 10 cm, maka volumenya adalah...',
    options: [
      { id: 'A', text: '1.540 cm³' },
      { id: 'B', text: '770 cm³' },
      { id: 'C', text: '880 cm³' },
      { id: 'D', text: '660 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diameter 14 cm → r = 7 cm.\nLangkah-langkah: π × 49 × 10 = 1.540.\nKesimpulan: Volume tabung adalah 1.540 cm³.'
  },
  {
    id: 'm2-l3-q18',
    text: 'Sebuah bola memiliki volume 288 cm³ (π = 3). Diameter bola tersebut adalah...',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '10 cm' },
      { id: 'C', text: '8 cm' },
      { id: 'D', text: '6 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: r³ = 72 → r = 6.\nLangkah-langkah: Diameter = 2 × 6 = 12.\nKesimpulan: Diameter bola adalah 12 cm.'
  },
  {
    id: 'm2-l3-q19',
    text: 'Volume tabung dua kali volume kerucut. Jika tinggi dan jari-jari sama, pernyataan tersebut adalah...',
    options: [
      { id: 'A', text: 'Salah' },
      { id: 'B', text: 'Benar' },
      { id: 'C', text: 'Hanya berlaku untuk bola' },
      { id: 'D', text: 'Tidak dapat ditentukan' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume tabung = 3 kali volume kerucut.\nKesimpulan: Pernyataan salah.'
  },
  {
    id: 'm2-l3-q20',
    text: 'Sebuah kerucut memiliki volume 308 cm³ dan tinggi 6 cm. Jari-jari alasnya adalah...',
    options: [
      { id: 'A', text: '7 cm' },
      { id: 'B', text: '5 cm' },
      { id: 'C', text: '6 cm' },
      { id: 'D', text: '4 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan V = 1/3 π r² t.\nKesimpulan: Jari-jari kerucut adalah 7 cm.'
  },
  {
    id: 'm2-l3-q21',
    text: 'Sebuah tabung dan kerucut memiliki jari-jari dan tinggi yang sama. Jika volume tabung 600 cm³, maka volume kerucut adalah...',
    options: [
      { id: 'A', text: '200 cm³' },
      { id: 'B', text: '300 cm³' },
      { id: 'C', text: '400 cm³' },
      { id: 'D', text: '600 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume kerucut = 1/3 volume tabung.\nKesimpulan: 1/3 × 600 = 200 cm³.'
  },
  {
    id: 'm2-l3-q22',
    text: 'Sebuah bola memiliki jari-jari 7 cm. Jika π = 22/7, maka luas permukaan bola tersebut adalah...',
    options: [
      { id: 'A', text: '616 cm²' },
      { id: 'B', text: '1.232 cm²' },
      { id: 'C', text: '924 cm²' },
      { id: 'D', text: '308 cm²' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Luas permukaan bola = 4πr².\nLangkah-langkah: 4 × 22/7 × 49 = 1.232.\nKesimpulan: Luas permukaan bola adalah 1.232 cm².'
  },
  {
    id: 'm2-l3-q23',
    text: 'Jika tinggi tabung dilipatgandakan 2 kali dan jari-jari tetap, maka volume tabung menjadi...',
    options: [
      { id: 'A', text: 'Tetap' },
      { id: 'B', text: '2 kali' },
      { id: 'C', text: '4 kali' },
      { id: 'D', text: '8 kali' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Volume tabung sebanding dengan tinggi.\nKesimpulan: Volume menjadi 2 kali.'
  },
  {
    id: 'm2-l3-q24',
    text: 'Sebuah bola memiliki diameter 14 cm. Jari-jari bola tersebut adalah...',
    options: [
      { id: 'A', text: '14 cm' },
      { id: 'B', text: '21 cm' },
      { id: 'C', text: '7 cm' },
      { id: 'D', text: '28 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Jari-jari adalah setengah diameter.\nKesimpulan: 14 ÷ 2 = 7 cm.'
  },
  {
    id: 'm2-l3-q25',
    text: 'Bangun ruang yang memiliki satu titik sudut adalah...',
    options: [
      { id: 'A', text: 'Bola' },
      { id: 'B', text: 'Tabung' },
      { id: 'C', text: 'Kerucut' },
      { id: 'D', text: 'Balok' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kerucut memiliki satu titik puncak.\nKesimpulan: Jawaban yang benar adalah kerucut.'
  },
  {
    id: 'm2-l3-q26',
    text: 'Volume sebuah bola adalah 4.188 cm³ (π = 3). Jari-jari bola tersebut adalah...',
    options: [
      { id: 'A', text: '7 cm' },
      { id: 'B', text: '8 cm' },
      { id: 'C', text: '9 cm' },
      { id: 'D', text: '10 cm' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: V = 4/3 π r³.\nLangkah-langkah: r³ = 1.000 → r = 10.\nKesimpulan: Jari-jari bola adalah 10 cm.'
  },
  {
    id: 'm2-l3-q27',
    text: 'Sebuah tabung memiliki jari-jari 7 cm dan tinggi 14 cm. Volume tabung tersebut adalah...',
    options: [
      { id: 'A', text: '2.156 cm³' },
      { id: 'B', text: '1.078 cm³' },
      { id: 'C', text: '1.540 cm³' },
      { id: 'D', text: '3.080 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = πr²t.\nLangkah-langkah: 22/7 × 49 × 14 = 2.156.\nKesimpulan: Volume tabung adalah 2.156 cm³.'
  },
  {
    id: 'm2-l3-q28',
    text: 'Jika jari-jari tabung diperbesar 2 kali dan tinggi tetap, maka volume tabung menjadi...',
    options: [
      { id: 'A', text: '2 kali' },
      { id: 'B', text: '4 kali' },
      { id: 'C', text: '6 kali' },
      { id: 'D', text: '8 kali' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Volume tabung sebanding dengan r².\nKesimpulan: (2r)² = 4r², volume menjadi 4 kali.'
  },
  {
    id: 'm2-l3-q29',
    text: 'Sebuah kerucut memiliki jari-jari 7 cm dan tinggi 24 cm. Volume kerucut tersebut adalah...',
    options: [
      { id: 'A', text: '1.232 cm³' },
      { id: 'B', text: '2.464 cm³' },
      { id: 'C', text: '3.696 cm³' },
      { id: 'D', text: '924 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 1/3 π r² t.\nLangkah-langkah: 1/3 × 22/7 × 49 × 24 = 1.232.\nKesimpulan: Volume kerucut adalah 1.232 cm³.'
  },
  {
    id: 'm2-l3-q30',
    text: 'Bangun ruang yang memiliki dua sisi berbentuk lingkaran adalah...',
    options: [
      { id: 'A', text: 'Bola' },
      { id: 'B', text: 'Kerucut' },
      { id: 'C', text: 'Tabung' },
      { id: 'D', text: 'Prisma' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Tabung memiliki dua alas berbentuk lingkaran.\nKesimpulan: Jawaban yang benar adalah tabung.'
  },
  {
    id: 'm2-l3-q31',
    text: 'Sebuah bola memiliki volume 36π cm³. Jari-jari bola tersebut adalah...',
    options: [
      { id: 'A', text: '2 cm' },
      { id: 'B', text: '3 cm' },
      { id: 'C', text: '4 cm' },
      { id: 'D', text: '6 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 4/3 π r³ = 36π.\nLangkah-langkah: r³ = 27 → r = 4.\nKesimpulan: Jari-jari bola adalah 4 cm.'
  },
  {
    id: 'm2-l3-q32',
    text: 'Jika volume sebuah bola 8 kali volume bola lain, maka perbandingan jari-jari kedua bola adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '2 : 1' },
      { id: 'C', text: '1 : 8' },
      { id: 'D', text: '2 : 3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume bola sebanding dengan r³.\nKesimpulan: 8 = 2³, perbandingan jari-jari 1 : 2.'
  },
  {
    id: 'm2-l3-q33',
    text: 'Sebuah tabung memiliki volume 1.540 cm³ dan jari-jari 7 cm. Tinggi tabung tersebut adalah...',
    options: [
      { id: 'A', text: '5 cm' },
      { id: 'B', text: '7 cm' },
      { id: 'C', text: '10 cm' },
      { id: 'D', text: '14 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: V = πr²t.\nLangkah-langkah: 1.540 ÷ (22/7 × 49) = 10.\nKesimpulan: Tinggi tabung adalah 10 cm.'
  },
  {
    id: 'm2-l3-q34',
    text: 'Bangun ruang yang seluruh sisinya lengkung adalah...',
    options: [
      { id: 'A', text: 'Tabung' },
      { id: 'B', text: 'Kerucut' },
      { id: 'C', text: 'Bola' },
      { id: 'D', text: 'Prisma' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Bola tidak memiliki sisi datar.\nKesimpulan: Bangun tersebut adalah bola.'
  },
  {
    id: 'm2-l3-q35',
    text: 'Sebuah kerucut memiliki volume 1.047 cm³ (π = 22/7) dan jari-jari 7 cm. Tinggi kerucut adalah...',
    options: [
      { id: 'A', text: '6 cm' },
      { id: 'B', text: '7 cm' },
      { id: 'C', text: '8 cm' },
      { id: 'D', text: '9 cm' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 1/3 π r² t.\nLangkah-langkah: t = 1.047 × 3 ÷ (22/7 × 49) = 6.\nKesimpulan: Tinggi kerucut adalah 6 cm.'
  },
  {
    id: 'm2-l3-q36',
    text: 'Sebuah tabung memiliki luas alas 154 cm² dan tinggi 10 cm. Volume tabung tersebut adalah...',
    options: [
      { id: 'A', text: '1.540 cm³' },
      { id: 'B', text: '1.640 cm³' },
      { id: 'C', text: '2.540 cm³' },
      { id: 'D', text: '15.400 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume tabung = luas alas × tinggi.\nLangkah-langkah: 154 × 10 = 1.540.\nKesimpulan: Volume tabung adalah 1.540 cm³.'
  },
  {
    id: 'm2-l3-q37',
    text: 'Sebuah bola berjari-jari 5 cm. Volume bola tersebut (π = 3,14) adalah...',
    options: [
      { id: 'A', text: '523,33 cm³' },
      { id: 'B', text: '314 cm³' },
      { id: 'C', text: '418,67 cm³' },
      { id: 'D', text: '157 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 4/3 π r³.\nLangkah-langkah: 4/3 × 3,14 × 125 = 523,33.\nKesimpulan: Volume bola adalah 523,33 cm³.'
  },
  {
    id: 'm2-l3-q38',
    text: 'Sebuah kerucut memiliki luas alas 154 cm² dan tinggi 12 cm. Volume kerucut tersebut adalah...',
    options: [
      { id: 'A', text: '462 cm³' },
      { id: 'B', text: '616 cm³' },
      { id: 'C', text: '1.848 cm³' },
      { id: 'D', text: '1.232 cm³' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Volume kerucut = 1/3 × luas alas × tinggi.\nLangkah-langkah: 1/3 × 154 × 12 = 616.\nKesimpulan: Volume kerucut adalah 616 cm³.'
  },
  {
    id: 'm2-l3-q39',
    text: 'Sebuah tabung memiliki jari-jari 3 cm dan tinggi 8 cm. Jika π = 3,14, maka volumenya adalah...',
    options: [
      { id: 'A', text: '226,08 cm³' },
      { id: 'B', text: '75,36 cm³' },
      { id: 'C', text: '452,16 cm³' },
      { id: 'D', text: '113,04 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = πr²t.\nLangkah-langkah: 3,14 × 9 × 8 = 226,08.\nKesimpulan: Volume tabung adalah 226,08 cm³.'
  },
  {
    id: 'm2-l3-q40',
    text: 'Sebuah kerucut memiliki jari-jari 6 cm dan tinggi 10 cm. Jika π = 3,14, maka volume kerucut adalah...',
    options: [
      { id: 'A', text: '376,8 cm³' },
      { id: 'B', text: '1.130,4 cm³' },
      { id: 'C', text: '942 cm³' },
      { id: 'D', text: '628 cm³' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: V = 1/3 πr²t.\nLangkah-langkah: 1/3 × 3,14 × 36 × 10 = 376,8.\nKesimpulan: Volume kerucut adalah 376,8 cm³.'
  },
  {
    id: 'm2-l3-q41',
    text: 'Sebuah bola memiliki luas permukaan 314 cm² (π = 3,14). Jari-jari bola tersebut adalah...',
    options: [
      { id: 'A', text: '4 cm' },
      { id: 'B', text: '5 cm' },
      { id: 'C', text: '6 cm' },
      { id: 'D', text: '7 cm' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: L = 4πr².\nLangkah-langkah: 314 = 4 × 3,14 × r² → r² = 25 → r = 5.\nKesimpulan: Jari-jari bola adalah 5 cm.'
  },
  {
    id: 'm2-l3-q42',
    text: 'Perbandingan volume tabung dan kerucut dengan jari-jari serta tinggi yang sama adalah...',
    options: [
      { id: 'A', text: '1 : 1' },
      { id: 'B', text: '1 : 2' },
      { id: 'C', text: '3 : 1' },
      { id: 'D', text: '2 : 3' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Volume tabung = πr²t, volume kerucut = 1/3 πr²t.\nKesimpulan: Perbandingan tabung : kerucut = 3 : 1.'
  },
    {
    id: 'm2-l3-q43',
    text: 'Sebuah tabung volumenya 1.256 cm³ (π = 3,14) dengan jari-jari 5 cm. Tinggi tabung adalah...',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '14 cm' },
      { id: 'C', text: '16 cm' },
      { id: 'D', text: '18 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: V = πr²t.\nLangkah-langkah: t = 1.256 ÷ (3,14 × 25) = 1.256 ÷ 78,5 = 16.\nKesimpulan: Tinggi tabung adalah 16 cm.'
  },
    {
    id: 'm2-l3-q44',
    text: 'Sebuah bola memiliki volume 113,04 cm³ (π = 3,14). Jari-jari bola tersebut adalah...',
    options: [
      { id: 'A', text: '2 cm' },
      { id: 'B', text: '3 cm' },
      { id: 'C', text: '4 cm' },
      { id: 'D', text: '5 cm' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: V = 4/3 π r³.\nLangkah-langkah: r³ = 113,04 × 3 ÷ (4 × 3,14) = 27 → r = 3.\nKesimpulan: Jari-jari bola adalah 3 cm.'
  },
  {
    id: 'm2-l3-q45',
    text: 'Sebuah kerucut memiliki volume 150,72 cm³ (π = 3,14) dan jari-jari 4 cm. Tinggi kerucut adalah...',
    options: [
      { id: 'A', text: '8 cm' },
      { id: 'B', text: '9 cm' },
      { id: 'C', text: '10 cm' },
      { id: 'D', text: '12 cm' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: V = 1/3 πr²t.\nLangkah-langkah: t = 150,72 × 3 ÷ (3,14 × 16) = 452,16 ÷ 50,24 = 9.\nKesimpulan: Tinggi kerucut adalah 9 cm.'
  },
  {
    id: 'm2-l3-q46',
    text: 'Jika diameter bola menjadi 2 kali semula, maka volume bola menjadi...',
    options: [
      { id: 'A', text: '2 kali' },
      { id: 'B', text: '4 kali' },
      { id: 'C', text: '6 kali' },
      { id: 'D', text: '8 kali' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Jika diameter 2 kali, jari-jari 2 kali. Volume bola ∝ r³.\nKesimpulan: (2)³ = 8, volume menjadi 8 kali.'
  },
  {
    id: 'm2-l3-q47',
    text: 'Sebuah tabung memiliki volume 2.310 cm³ (π = 22/7) dan jari-jari 7 cm. Tinggi tabung tersebut adalah...',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '12 cm' },
      { id: 'C', text: '15 cm' },
      { id: 'D', text: '18 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: V = πr²t.\nLangkah-langkah: πr² = 22/7 × 49 = 154. t = 2.310 ÷ 154 = 15.\nKesimpulan: Tinggi tabung adalah 15 cm.'
  },
  {
    id: 'm2-l3-q48',
    text: 'Sebuah kerucut memiliki volume 770 cm³ (π = 22/7) dan jari-jari 7 cm. Tinggi kerucut tersebut adalah...',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '12 cm' },
      { id: 'C', text: '15 cm' },
      { id: 'D', text: '18 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: V = 1/3 πr²t.\nLangkah-langkah: πr² = 22/7 × 49 = 154. 770 = 1/3 × 154 × t → t = 770 × 3 ÷ 154 = 15.\nKesimpulan: Tinggi kerucut adalah 15 cm.'
  },
  {
    id: 'm2-l3-q49',
    text: 'Sebuah bola berjari-jari 7 cm (π = 22/7). Volume bola tersebut adalah...',
    options: [
      { id: 'A', text: '1.232 cm³' },
      { id: 'B', text: '1.436 cm³' },
      { id: 'C', text: '1.596 cm³' },
      { id: 'D', text: '4.188 cm³' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: V = 4/3 π r³.\nLangkah-langkah: 4/3 × 22/7 × 343 = 4.188.\nKesimpulan: Volume bola adalah 4.188 cm³.'
  },
  {
    id: 'm2-l3-q50',
    text: 'Sebuah tabung memiliki volume 1.540 cm³ dan tinggi 10 cm. Luas alas tabung adalah...',
    options: [
      { id: 'A', text: '154 cm²' },
      { id: 'B', text: '144 cm²' },
      { id: 'C', text: '164 cm²' },
      { id: 'D', text: '150 cm²' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Volume tabung = luas alas × tinggi.\nLangkah-langkah: luas alas = 1.540 ÷ 10 = 154.\nKesimpulan: Luas alas tabung adalah 154 cm².'
  },
],
 // Peluang Kejadian Majemuk level 3

 'm3-l3': [
  {
    id: 'm3-l3-q1',
    text: 'Dua koin dilempar bersamaan. Peluang muncul tepat 2 gambar adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Ruang sampel dua koin berjumlah 4 hasil sama mungkin.\nLangkah-langkah: {AA, AG, GA, GG}. Tepat 2 gambar hanya {GG} = 1 dari 4.\nKesimpulan: Peluangnya 1/4.'
  },
  {
    id: 'm3-l3-q2',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu = 7 adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/12' },
      { id: 'C', text: '1/9' },
      { id: 'D', text: '5/36' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Dua dadu memiliki 36 pasangan hasil.\nLangkah-langkah: Jumlah 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 kejadian.\nKesimpulan: Peluang = 6/36 = 1/6.'
  },
  {
    id: 'm3-l3-q3',
    text: 'Satu dadu dilempar. Peluang muncul bilangan genap ATAU bilangan prima adalah...',
    options: [
      { id: 'A', text: '5/6' },
      { id: 'B', text: '4/6' },
      { id: 'C', text: '3/6' },
      { id: 'D', text: '2/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan peluang gabungan: P(A ∪ B) = P(A)+P(B)-P(A ∩ B).\nLangkah-langkah: Genap {2,4,6}=3. Prima {2,3,5}=3. Irisan {2}=1. Total = (3+3-1)/6=5/6.\nKesimpulan: Peluangnya 5/6.'
  },
  {
    id: 'm3-l3-q4',
    text: 'Sebuah kantong berisi 3 bola merah dan 2 bola biru. Diambil 1 bola. Peluang terambil bola biru adalah...',
    options: [
      { id: 'A', text: '2/5' },
      { id: 'B', text: '3/5' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '1/5' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Peluang = banyak kejadian / banyak ruang sampel.\nLangkah-langkah: Total bola 5, bola biru 2, jadi P(biru)=2/5.\nKesimpulan: Peluang terambil biru adalah 2/5.'
  },
  {
  id: 'm3-l3-q5',
  text: 'Kantong berisi 4 kelereng merah, 3 biru, 3 hijau. Diambil 1 kelereng. Peluang bukan merah adalah...',
  options: [
    { id: 'A', text: '3/10' },
    { id: 'B', text: '6/10' },
    { id: 'C', text: '7/10' },
    { id: 'D', text: '4/10' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Peluang “bukan merah” = (biru + hijau) / total.\nLangkah-langkah: Total 10. Bukan merah = 3 + 3 = 6. Jadi peluang = 6/10.\nKesimpulan: Peluang bukan merah adalah 6/10.'
  },
{
    id: 'm3-l3-q6',
    text: 'Perhatikan pernyataan berikut: “Peluang suatu kejadian pasti adalah ...” Nilai yang benar adalah...',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: 'Tidak dapat ditentukan' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kejadian pasti selalu terjadi.\nLangkah-langkah: Dalam teori peluang, kejadian pasti memiliki peluang 1.\nKesimpulan: Nilai peluang kejadian pasti adalah 1.'
  },
  {
    id: 'm3-l3-q7',
    text: 'Satu dadu dilempar. Peluang muncul bilangan lebih dari 4 adalah...',
    options: [
      { id: 'A', text: '1/3' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '1/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Hitung banyak hasil yang memenuhi.\nLangkah-langkah: Lebih dari 4 adalah {5,6} = 2 dari 6 → 2/6=1/3.\nKesimpulan: Peluangnya 1/3.'
  },
  {
    id: 'm3-l3-q8',
    text: 'Satu kartu diambil dari kartu bernomor 1 sampai 10. Peluang mendapat bilangan ganjil adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/5' },
      { id: 'C', text: '2/5' },
      { id: 'D', text: '3/5' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Peluang ganjil = banyak bilangan ganjil / total.\nLangkah-langkah: Ganjil {1,3,5,7,9} = 5 dari 10 → 5/10=1/2.\nKesimpulan: Peluangnya 1/2.'
  },
  {
    id: 'm3-l3-q9',
    text: 'Dua koin dilempar. Peluang muncul minimal 1 angka adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Minimal 1 angka berarti semua kecuali “tidak ada angka”.\nLangkah-langkah: Ruang sampel 4. Tidak ada angka = dua gambar (GG) = 1/4. Maka minimal 1 angka = 1-1/4=3/4.\nKesimpulan: Peluangnya 3/4.'
  },
  {
    id: 'm3-l3-q10',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu = 12 adalah...',
    options: [
      { id: 'A', text: '1/36' },
      { id: 'B', text: '1/18' },
      { id: 'C', text: '1/12' },
      { id: 'D', text: '1/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah 12 hanya terjadi pada satu pasangan.\nLangkah-langkah: Hanya (6,6) dari 36 kemungkinan.\nKesimpulan: Peluangnya 1/36.'
  },
{
  id: 'm3-l3-q11',
  text: 'Kantong berisi 5 bola merah dan 5 bola biru. Diambil 2 bola sekaligus (tanpa pengembalian). Peluang keduanya merah adalah...',
  options: [
    { id: 'A', text: '1/9' },
    { id: 'B', text: '2/9' },
    { id: 'C', text: '5/18' },
    { id: 'D', text: '1/2' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tanpa pengembalian → peluang bertahap.\nLangkah-langkah: P(M1)=5/10 dan P(M2|M1)=4/9. Jadi 5/10×4/9=20/90=2/9.\nKesimpulan: Peluang keduanya merah adalah 2/9.'
},
{
    id: 'm3-l3-q12',
    text: 'Kantong berisi 3 merah, 2 biru, 1 hijau. Diambil 1 bola. Peluang terambil merah ATAU hijau adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '2/3' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '4/6' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Karena satu kali ambil, kejadian “merah” dan “hijau” saling lepas.\nLangkah-langkah: Total 6. Merah 3, hijau 1 → 4/6=2/3.\nKesimpulan: Peluangnya 2/3.'
  },
  {
  id: 'm3-l3-q13',
  text: 'Dua dadu dilempar. Peluang jumlah mata dadu lebih dari 9 adalah...',
  options: [
    { id: 'A', text: '1/6' },
    { id: 'B', text: '1/4' },
    { id: 'C', text: '5/36' },
    { id: 'D', text: '1/3' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Jumlah > 9 berarti 10, 11, dan 12.\nLangkah-langkah: Jumlah 10 ada 3 cara, 11 ada 2 cara, 12 ada 1 cara → total 6 cara. Peluang = 6/36 = 1/6.\nKesimpulan: Peluang jumlah > 9 adalah 1/6.'
},
{
    id: 'm3-l3-q14',
    text: 'Sebuah dadu dilempar 2 kali. Peluang muncul angka 6 tepat satu kali adalah...',
    options: [
      { id: 'A', text: '5/36' },
      { id: 'B', text: '10/36' },
      { id: 'C', text: '1/6' },
      { id: 'D', text: '1/3' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Tepat satu kali berarti (6,bukan6) atau (bukan6,6).\nLangkah-langkah: P= (1/6×5/6)×2 = 10/36.\nKesimpulan: Peluangnya 10/36.'
  },
  {
    id: 'm3-l3-q15',
    text: 'Satu kartu diambil dari angka 1–12. Peluang mendapat kelipatan 3 DAN genap adalah...',
    options: [
      { id: 'A', text: '1/12' },
      { id: 'B', text: '2/12' },
      { id: 'C', text: '3/12' },
      { id: 'D', text: '4/12' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Cari bilangan yang memenuhi dua syarat sekaligus.\nLangkah-langkah: Kelipatan 3: {3,6,9,12}. Yang genap: {6,12} ada 2. Total 12.\nKesimpulan: Peluang = 2/12.'
  },

  {
    id: 'm3-l3-q16',
    text: 'Dalam sebuah kotak ada 2 pensil merah dan 3 pensil biru. Diambil 1 pensil. Peluang tidak biru adalah...',
    options: [
      { id: 'A', text: '2/5' },
      { id: 'B', text: '3/5' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '1/5' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: “Tidak biru” berarti merah.\nLangkah-langkah: Total 5 pensil. Merah 2 → peluang 2/5.\nKesimpulan: Peluang tidak biru adalah 2/5.'
  },
  {
    id: 'm3-l3-q17',
    text: 'Dua kartu diambil berurutan dari kartu 1–5 tanpa pengembalian. Peluang kartu pertama 5 lalu kartu kedua 4 adalah...',
    options: [
      { id: 'A', text: '1/20' },
      { id: 'B', text: '1/10' },
      { id: 'C', text: '1/5' },
      { id: 'D', text: '2/5' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Tanpa pengembalian → jumlah kartu berkurang.\nLangkah-langkah: P(5 dulu)=1/5, lalu P(4|5)=1/4. Jadi 1/5×1/4=1/20.\nKesimpulan: Peluangnya 1/20.'
  },
  {
    id: 'm3-l3-q18',
    text: 'Dua dadu dilempar. Peluang muncul pasangan kembar (double) adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/12' },
      { id: 'C', text: '1/18' },
      { id: 'D', text: '5/36' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Pasangan kembar ada 6 dari 36.\nLangkah-langkah: (1,1) s.d. (6,6) = 6 kejadian. Peluang 6/36=1/6.\nKesimpulan: Peluangnya 1/6.'
  },
  {
    id: 'm3-l3-q19',
    text: 'Satu dadu dilempar. Peluang muncul bilangan prima adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '1/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bilangan prima pada dadu: 2,3,5.\nLangkah-langkah: Ada 3 dari 6 hasil. Peluang 3/6=1/2.\nKesimpulan: Peluangnya 1/2.'
  },
  {
    id: 'm3-l3-q20',
    text: 'Sebuah koin dilempar 3 kali. Peluang muncul 3 angka adalah...',
    options: [
      { id: 'A', text: '1/8' },
      { id: 'B', text: '3/8' },
      { id: 'C', text: '1/4' },
      { id: 'D', text: '1/2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Tiap lempar koin peluang angka = 1/2.\nLangkah-langkah: P(AAA) = (1/2)³ = 1/8.\nKesimpulan: Peluangnya 1/8.'
  },

  {
    id: 'm3-l3-q21',
    text: 'Dua kartu diambil dari 10 kartu bernomor 1–10 tanpa pengembalian. Peluang keduanya bilangan ganjil adalah...',
    options: [
      { id: 'A', text: '1/9' },
      { id: 'B', text: '2/9' },
      { id: 'C', text: '5/18' },
      { id: 'D', text: '4/9' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Ada 5 bilangan ganjil dari 10.\nLangkah-langkah: P(ganjil1)=5/10, P(ganjil2|ganjil1)=4/9. Jadi 5/10×4/9=20/90=2/9.\nKesimpulan: Peluangnya 2/9.'
  },
  {
    id: 'm3-l3-q22',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu adalah bilangan prima adalah...',
    options: [
      { id: 'A', text: '5/12' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '7/12' },
      { id: 'D', text: '1/3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah prima (2–12): 2,3,5,7,11.\nLangkah-langkah: Banyak cara: 2(1),3(2),5(4),7(6),11(2) total=15. Peluang=15/36=5/12.\nKesimpulan: Peluangnya 5/12.'
  },
{
  id: 'm3-l3-q23',
  text: 'Sebuah kantong berisi 6 bola: 2 merah, 2 biru, 2 hijau. Diambil 2 bola tanpa pengembalian. Peluang kedua bola berbeda warna adalah...',
  options: [
    { id: 'A', text: '2/5' },
    { id: 'B', text: '3/5' },
    { id: 'C', text: '4/5' },
    { id: 'D', text: '1/2' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Peluang berbeda warna = 1 − peluang sama warna.\nLangkah-langkah: Peluang sama warna: merah = (2/6×1/5)=2/30, biru = 2/30, hijau = 2/30 → total 6/30=1/5. Maka berbeda warna = 1−1/5=4/5.\nKesimpulan: Peluang kedua bola berbeda warna adalah 4/5.'
},
{
    id: 'm3-l3-q24',
    text: 'Dua kali pelemparan koin. Peluang muncul hasil yang sama pada kedua lemparan adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Hasil sama berarti AA atau GG.\nLangkah-langkah: Ruang sampel 4: {AA, AG, GA, GG}. Yang sama: {AA, GG} = 2/4=1/2.\nKesimpulan: Peluangnya 1/2.'
  },
  {
    id: 'm3-l3-q25',
    text: 'Sebuah dadu dilempar. Peluang muncul bilangan kurang dari 3 ATAU lebih dari 5 adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '1/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Hitung gabungan kejadian yang saling lepas.\nLangkah-langkah: <3: {1,2} (2 hasil). >5: {6} (1 hasil). Total 3/6=1/2.\nKesimpulan: Peluangnya 1/2.'
  },

  {
    id: 'm3-l3-q26',
    text: 'Dalam suatu kelas, peluang seorang siswa lulus Matematika adalah 0,7 dan lulus IPA adalah 0,6. Jika peluang lulus keduanya 0,4, maka peluang lulus minimal salah satu adalah...',
    options: [
      { id: 'A', text: '0,9' },
      { id: 'B', text: '1,0' },
      { id: 'C', text: '0,8' },
      { id: 'D', text: '0,7' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan rumus P(A∪B)=P(A)+P(B)-P(A∩B).\nLangkah-langkah: 0,7+0,6-0,4=0,9.\nKesimpulan: Peluang minimal salah satu lulus adalah 0,9.'
  },
  {
    id: 'm3-l3-q27',
    text: 'Peluang hujan adalah 0,3. Peluang tidak hujan adalah...',
    options: [
      { id: 'A', text: '0,3' },
      { id: 'B', text: '0,6' },
      { id: 'C', text: '0,7' },
      { id: 'D', text: '1,3' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Peluang komplemen = 1 − peluang kejadian.\nLangkah-langkah: 1 − 0,3 = 0,7.\nKesimpulan: Peluang tidak hujan adalah 0,7.'
  },
  {
    id: 'm3-l3-q28',
    text: 'Sebuah dadu dilempar 2 kali. Peluang kedua hasil sama adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '5/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Dua lemparan dadu memiliki 36 pasangan hasil.\nLangkah-langkah: Hasil sama: (1,1) sampai (6,6) ada 6. Peluang 6/36=1/6.\nKesimpulan: Peluangnya 1/6.'
  },
  {
  id: 'm3-l3-q29',
  text: 'Kotak berisi 5 bola putih dan 1 bola hitam. Diambil 2 bola tanpa pengembalian. Peluang terambil minimal 1 bola hitam adalah...',
  options: [
    { id: 'A', text: '1/15' },
    { id: 'B', text: '1/6' },
    { id: 'C', text: '1/3' },
    { id: 'D', text: '2/5' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Minimal 1 hitam = 1 − (tidak ada hitam).\nLangkah-langkah: Tidak ada hitam berarti dua putih: 5/6 × 4/5 = 4/6 = 2/3. Maka minimal 1 hitam = 1 − 2/3 = 1/3.\nKesimpulan: Peluang minimal 1 bola hitam adalah 1/3.'
},
{
    id: 'm3-l3-q30',
    text: 'Koin dan dadu dilempar bersamaan. Peluang muncul angka pada koin dan bilangan genap pada dadu adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '1/4' },
      { id: 'D', text: '1/6' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kejadian independen → kalikan peluang.\nLangkah-langkah: P(angka)=1/2. P(genap)=3/6=1/2. Jadi 1/2×1/2=1/4.\nKesimpulan: Peluangnya 1/4.'
  },

  {
    id: 'm3-l3-q31',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu adalah 9 adalah...',
    options: [
      { id: 'A', text: '1/9' },
      { id: 'B', text: '1/6' },
      { id: 'C', text: '1/12' },
      { id: 'D', text: '5/36' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah 9 memiliki beberapa pasangan.\nLangkah-langkah: (3,6)(4,5)(5,4)(6,3) = 4 kejadian. Peluang 4/36=1/9.\nKesimpulan: Peluangnya 1/9.'
  },
  {
    id: 'm3-l3-q32',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu kurang dari 5 adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/9' },
      { id: 'C', text: '1/12' },
      { id: 'D', text: '5/36' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah <5 berarti 2,3,4.\nLangkah-langkah: 2(1 cara), 3(2 cara), 4(3 cara) total 6 cara. Peluang 6/36=1/6.\nKesimpulan: Peluangnya 1/6.'
  },
  {
    id: 'm3-l3-q33',
    text: 'Sebuah koin dilempar 4 kali. Peluang muncul tepat 2 gambar adalah...',
    options: [
      { id: 'A', text: '3/8' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '5/8' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan kombinasi untuk kejadian tepat k kali.\nLangkah-langkah: Tepat 2 gambar: C(4,2)=6 cara. Total hasil 2^4=16. Peluang 6/16=3/8.\nKesimpulan: Peluangnya 3/8.'
  },
  {
    id: 'm3-l3-q34',
    text: 'Kotak berisi 3 merah dan 7 putih. Diambil 1 bola. Peluang terambil putih adalah...',
    options: [
      { id: 'A', text: '3/10' },
      { id: 'B', text: '7/10' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '2/5' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Peluang = banyak putih / total.\nLangkah-langkah: Total 10, putih 7 → 7/10.\nKesimpulan: Peluangnya 7/10.'
  },
  {
    id: 'm3-l3-q35',
    text: 'Dari kartu 1–8 diambil 1 kartu. Peluang mendapat bilangan prima ATAU bilangan genap adalah...',
    options: [
      { id: 'A', text: '7/8' },
      { id: 'B', text: '6/8' },
      { id: 'C', text: '5/8' },
      { id: 'D', text: '4/8' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan rumus gabungan dengan irisan.\nLangkah-langkah: Prima {2,3,5,7}=4. Genap {2,4,6,8}=4. Irisan {2}=1. Total (4+4-1)/8=7/8.\nKesimpulan: Peluangnya 7/8.'
  },
  {
  id: 'm3-l3-q36',
  text: 'Kotak berisi 4 bola merah dan 6 bola biru. Diambil 2 bola tanpa pengembalian. Peluang keduanya biru adalah...',
  options: [
    { id: 'A', text: '1/3' },
    { id: 'B', text: '1/2' },
    { id: 'C', text: '3/5' },
    { id: 'D', text: '2/3' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Tanpa pengembalian → peluang bertahap.\nLangkah-langkah: P(B1)=6/10, P(B2|B1)=5/9. Jadi 6/10×5/9=30/90=1/3.\nKesimpulan: Peluang keduanya biru adalah 1/3.'
},
{
  id: 'm3-l3-q37',
  text: 'Dua kartu diambil dari kartu 1–6 tanpa pengembalian. Peluang jumlah kedua kartu = 7 adalah...',
  options: [
    { id: 'A', text: '1/3' },
    { id: 'B', text: '2/5' },
    { id: 'C', text: '1/5' },
    { id: 'D', text: '1/6' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Hitung pasangan berurutan yang jumlahnya 7.\nLangkah-langkah: Pasangan yang jumlahnya 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) ada 6. Total kejadian berurutan tanpa pengembalian: 6×5=30. Peluang = 6/30 = 1/5.\nKesimpulan: Peluangnya 1/5.'
},
{
    id: 'm3-l3-q38',
    text: 'Sebuah koin dan sebuah dadu dilempar. Peluang muncul gambar pada koin dan mata dadu 1 atau 2 adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '1/3' },
      { id: 'D', text: '1/2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Kejadian independen → kalikan peluang.\nLangkah-langkah: P(gambar)=1/2. P(1 atau 2)=2/6=1/3. Jadi 1/2×1/3=1/6.\nKesimpulan: Peluangnya 1/6.'
  },
  {
  id: 'm3-l3-q39',
  text: 'Dua dadu dilempar. Peluang jumlah mata dadu = 5 atau 6 adalah...',
  options: [
    { id: 'A', text: '1/4' },
    { id: 'B', text: '5/18' },
    { id: 'C', text: '7/36' },
    { id: 'D', text: '1/3' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Peluang jumlah 5 atau 6 = (cara jumlah 5 + cara jumlah 6) / 36.\nLangkah-langkah: Jumlah 5 ada 4 cara, jumlah 6 ada 5 cara → total 9 cara. Peluang = 9/36 = 1/4.\nKesimpulan: Peluangnya 1/4.'
},
{
    id: 'm3-l3-q40',
    text: 'Kotak berisi 3 bola merah dan 2 bola biru. Diambil 2 bola tanpa pengembalian. Peluang terambil 1 merah dan 1 biru (urutan bebas) adalah...',
    options: [
      { id: 'A', text: '3/5' },
      { id: 'B', text: '2/5' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '4/5' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: “1 merah 1 biru” bisa terjadi dua urutan.\nLangkah-langkah: Merah lalu biru: 3/5×2/4=6/20=3/10. Biru lalu merah: 2/5×3/4=6/20=3/10. Total 6/10=3/5.\nKesimpulan: Peluangnya 3/5.'
  },

  {
    id: 'm3-l3-q41',
    text: 'Peluang seseorang memilih rute A adalah 0,4 dan rute B adalah 0,6. Jika memilih tepat satu rute, peluang memilih rute A atau B adalah...',
    options: [
      { id: 'A', text: '0,24' },
      { id: 'B', text: '0,4' },
      { id: 'C', text: '0,6' },
      { id: 'D', text: '1,0' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Jika hanya ada dua pilihan dan pasti memilih salah satu, total peluang = 1.\nLangkah-langkah: 0,4 + 0,6 = 1,0.\nKesimpulan: Peluang memilih A atau B adalah 1,0.'
  },
  {
    id: 'm3-l3-q42',
    text: 'Sebuah dadu dilempar. Peluang muncul bilangan kelipatan 3 adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '2/3' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kelipatan 3 pada dadu adalah 3 dan 6.\nLangkah-langkah: Ada 2 dari 6 hasil → 2/6=1/3.\nKesimpulan: Peluangnya 1/3.'
  },
  {
    id: 'm3-l3-q43',
    text: 'Dua dadu dilempar. Peluang kedua dadu menunjukkan bilangan ganjil adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '2/3' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Peluang ganjil pada satu dadu = 3/6 = 1/2.\nLangkah-langkah: Kedua ganjil (independen) = 1/2 × 1/2 = 1/4.\nKesimpulan: Peluangnya 1/4.'
  },
  {
  id: 'm3-l3-q44',
  text: 'Sebuah kantong berisi 8 bola: 5 merah dan 3 biru. Diambil 2 bola tanpa pengembalian. Peluang keduanya merah adalah...',
  options: [
    { id: 'A', text: '5/14' },
    { id: 'B', text: '15/28' },
    { id: 'C', text: '5/8' },
    { id: 'D', text: '3/8' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Tanpa pengembalian → peluang bertahap.\nLangkah-langkah: P(merah1)=5/8 dan P(merah2|merah1)=4/7. Jadi 5/8×4/7=20/56=5/14.\nKesimpulan: Peluang keduanya merah adalah 5/14.'
},
{
    id: 'm3-l3-q45',
    text: 'Sebuah koin dilempar 2 kali. Peluang muncul tepat 1 gambar adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Tepat 1 gambar berarti (G,A) atau (A,G).\nLangkah-langkah: Ruang sampel 4. Kejadian tepat 1 gambar ada 2. Peluang 2/4=1/2.\nKesimpulan: Peluangnya 1/2.'
  },
  {
  id: 'm3-l3-q46',
  text: 'Satu kartu diambil dari angka 1–9. Peluang mendapat bilangan yang bukan prima adalah...',
  options: [
    { id: 'A', text: '1/3' },
    { id: 'B', text: '2/3' },
    { id: 'C', text: '4/9' },
    { id: 'D', text: '5/9' }
  ],
  correctOptionId: 'D',
  discussion: 'Penjelasan singkat: “Bukan prima” = komplemen dari “prima”.\nLangkah-langkah: Bilangan prima 1–9 adalah {2,3,5,7} = 4. Maka bukan prima = 9−4=5. Peluang = 5/9.\nKesimpulan: Peluang bukan prima adalah 5/9.'
},
{
  id: 'm3-l3-q47',
  text: 'Dalam sebuah kotak ada 3 bola merah dan 1 bola biru. Diambil 2 bola tanpa pengembalian. Peluang terambil minimal 1 bola biru adalah...',
  options: [
    { id: 'A', text: '1/2' },
    { id: 'B', text: '1/3' },
    { id: 'C', text: '1/6' },
    { id: 'D', text: '2/3' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Minimal 1 biru = 1 − (tidak ada biru).\nLangkah-langkah: Tidak ada biru berarti dua merah: 3/4×2/3=1/2. Maka minimal 1 biru = 1−1/2=1/2.\nKesimpulan: Peluang minimal 1 bola biru adalah 1/2.'
},
{
    id: 'm3-l3-q48',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu adalah 2 atau 12 adalah...',
    options: [
      { id: 'A', text: '1/18' },
      { id: 'B', text: '1/12' },
      { id: 'C', text: '1/9' },
      { id: 'D', text: '1/6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah 2 dan 12 masing-masing hanya 1 cara.\nLangkah-langkah: 2: (1,1), 12: (6,6). Total 2 cara dari 36 → 2/36=1/18.\nKesimpulan: Peluangnya 1/18.'
  },
  {
    id: 'm3-l3-q49',
    text: 'Sebuah koin dilempar 3 kali. Peluang muncul minimal 1 gambar adalah...',
    options: [
      { id: 'A', text: '1/8' },
      { id: 'B', text: '3/8' },
      { id: 'C', text: '7/8' },
      { id: 'D', text: '1/2' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Minimal 1 gambar = 1 − (tidak ada gambar).\nLangkah-langkah: Tidak ada gambar berarti semua angka: (1/2)^3=1/8. Maka minimal 1 gambar = 1-1/8=7/8.\nKesimpulan: Peluangnya 7/8.'
  },
  {
    id: 'm3-l3-q50',
    text: 'Dua dadu dilempar. Peluang jumlah mata dadu = 8 adalah...',
    options: [
      { id: 'A', text: '5/36' },
      { id: 'B', text: '1/6' },
      { id: 'C', text: '1/9' },
      { id: 'D', text: '1/12' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah 8 memiliki beberapa pasangan.\nLangkah-langkah: (2,6)(3,5)(4,4)(5,3)(6,2) = 5 kejadian. Peluang=5/36.\nKesimpulan: Peluang jumlah 8 adalah 5/36.'
  }
],
 // dasar literasi - literasi membaca level 1

'b1-l1': [
 {
  id: 'b1-l1-q1',
  text: `Bacalah teks berikut!

Setiap pagi sebelum berangkat sekolah, Rani selalu membantu ibunya menyapu halaman rumah. Meskipun terlihat sederhana, kegiatan itu membuat halaman rumah menjadi bersih dan nyaman. Rani percaya bahwa kebiasaan kecil yang dilakukan secara rutin dapat membawa dampak besar bagi lingkungan sekitar.

Apa pesan utama yang ingin disampaikan penulis melalui teks tersebut?`,
  options: [
    { id: 'A', text: 'Menyapu halaman adalah pekerjaan yang berat' },
    { id: 'B', text: 'Kebersihan lingkungan harus dijaga bersama' },
    { id: 'C', text: 'Rani tidak suka berangkat sekolah' },
    { id: 'D', text: 'Lingkungan bersih tidak terlalu penting' }
  ],
  correctOptionId: 'B',
  discussion: 'Pesan utama teks adalah pentingnya menjaga kebersihan lingkungan melalui kebiasaan kecil yang dilakukan secara rutin.'
},
{
  id: 'b1-l1-q2',
  text: `Bacalah teks berikut!

Perpustakaan sekolah menyediakan berbagai buku bacaan, mulai dari cerita rakyat hingga buku pengetahuan. Namun, jumlah siswa yang berkunjung ke perpustakaan masih tergolong sedikit. Padahal, membaca dapat menambah wawasan dan melatih kemampuan berpikir kritis siswa.

Mengapa penulis merasa prihatin terhadap kondisi tersebut?`,
  options: [
    { id: 'A', text: 'Buku di perpustakaan terlalu mahal' },
    { id: 'B', text: 'Perpustakaan jarang dibuka' },
    { id: 'C', text: 'Minat baca siswa masih rendah' },
    { id: 'D', text: 'Siswa lebih suka menulis daripada membaca' }
  ],
  correctOptionId: 'C',
  discussion: 'Penulis prihatin karena meskipun fasilitas tersedia, siswa belum memanfaatkan perpustakaan dengan baik.'
},
{
  id: 'b1-l1-q3',
  text: `Bacalah teks berikut!

Saat musim hujan tiba, beberapa wilayah sering mengalami banjir. Hal ini disebabkan oleh kebiasaan masyarakat membuang sampah sembarangan sehingga saluran air tersumbat. Oleh karena itu, kesadaran masyarakat sangat diperlukan untuk menjaga kebersihan lingkungan.

Penyebab utama banjir menurut teks tersebut adalah...`,
  options: [
    { id: 'A', text: 'Curah hujan yang terlalu tinggi' },
    { id: 'B', text: 'Letak wilayah yang rendah' },
    { id: 'C', text: 'Sampah yang menyumbat saluran air' },
    { id: 'D', text: 'Kurangnya pepohonan' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks menyebutkan bahwa kebiasaan membuang sampah sembarangan menyebabkan saluran air tersumbat.'
},
{
  id: 'b1-l1-q4',
  text: `Bacalah teks berikut!

Olahraga secara teratur dapat menjaga kesehatan tubuh dan meningkatkan kebugaran. Selain itu, olahraga juga membantu mengurangi stres dan meningkatkan konsentrasi belajar. Oleh karena itu, siswa dianjurkan untuk meluangkan waktu berolahraga di sela-sela aktivitas belajar.

Manfaat olahraga menurut teks tersebut adalah...`,
  options: [
    { id: 'A', text: 'Menghabiskan waktu luang' },
    { id: 'B', text: 'Meningkatkan stres' },
    { id: 'C', text: 'Menjaga kesehatan dan konsentrasi' },
    { id: 'D', text: 'Mengurangi waktu belajar' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks menyebutkan olahraga bermanfaat bagi kesehatan tubuh dan konsentrasi belajar.'
},
{
  id: 'b1-l1-q5',
  text: `Bacalah teks berikut!

Dina selalu berangkat ke sekolah tepat waktu. Ia menyiapkan perlengkapan sekolah sejak malam hari agar tidak terburu-buru di pagi hari. Kebiasaan tersebut membuat Dina lebih tenang dan siap mengikuti pelajaran.

Sikap Dina yang dapat diteladani adalah...`,
  options: [
    { id: 'A', text: 'Suka bangun siang' },
    { id: 'B', text: 'Disiplin dan bertanggung jawab' },
    { id: 'C', text: 'Tidak peduli pelajaran' },
    { id: 'D', text: 'Sering lupa tugas' }
  ],
  correctOptionId: 'B',
  discussion: 'Dina menunjukkan sikap disiplin dan bertanggung jawab dengan mempersiapkan diri sejak awal.'
},
{
  id: 'b1-l1-q6',
  text: `Bacalah teks berikut!

Menanam pohon di sekitar rumah dapat membuat udara menjadi lebih sejuk dan bersih. Pohon juga berperan penting dalam menyerap air hujan sehingga dapat mencegah banjir. Oleh karena itu, kegiatan menanam pohon perlu dilakukan secara berkelanjutan.

Manfaat menanam pohon berdasarkan teks adalah...`,
  options: [
    { id: 'A', text: 'Menyebabkan banjir' },
    { id: 'B', text: 'Membuat udara panas' },
    { id: 'C', text: 'Menjaga keseimbangan lingkungan' },
    { id: 'D', text: 'Mengurangi lahan hijau' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks menjelaskan bahwa pohon bermanfaat untuk udara dan mencegah banjir.'
},
{
  id: 'b1-l1-q7',
  text: `Bacalah teks berikut!

Belajar secara kelompok dapat membantu siswa memahami materi yang sulit. Dengan berdiskusi, siswa dapat saling bertukar pendapat dan menemukan solusi bersama. Namun, belajar kelompok harus dilakukan dengan tertib agar tujuan belajar tercapai.

Tujuan utama belajar kelompok menurut teks adalah...`,
  options: [
    { id: 'A', text: 'Bermain bersama teman' },
    { id: 'B', text: 'Menghindari tugas sekolah' },
    { id: 'C', text: 'Membantu memahami materi pelajaran' },
    { id: 'D', text: 'Menghabiskan waktu luang' }
  ],
  correctOptionId: 'C',
  discussion: 'Belajar kelompok bertujuan membantu siswa memahami materi melalui diskusi.'
},
{
  id: 'b1-l1-q8',
  text: `Bacalah teks berikut!

Teknologi memudahkan manusia dalam berkomunikasi jarak jauh. Namun, penggunaan teknologi secara berlebihan dapat berdampak negatif, seperti berkurangnya interaksi langsung. Oleh karena itu, penggunaan teknologi perlu dilakukan secara bijak.

Simpulan yang tepat dari teks tersebut adalah...`,
  options: [
    { id: 'A', text: 'Teknologi harus dihindari' },
    { id: 'B', text: 'Teknologi hanya membawa dampak buruk' },
    { id: 'C', text: 'Teknologi perlu digunakan secara seimbang' },
    { id: 'D', text: 'Interaksi langsung tidak penting' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks menekankan pentingnya penggunaan teknologi secara bijak dan seimbang.'
},
{
  id: 'b1-l1-q9',
  text: `Bacalah teks berikut!

Membaca buku sebelum tidur dapat menjadi kebiasaan yang bermanfaat. Selain menambah pengetahuan, membaca juga membantu tubuh menjadi lebih rileks. Kebiasaan ini dapat meningkatkan kualitas tidur seseorang.

Manfaat membaca sebelum tidur menurut teks adalah...`,
  options: [
    { id: 'A', text: 'Menyebabkan sulit tidur' },
    { id: 'B', text: 'Menambah stres' },
    { id: 'C', text: 'Meningkatkan kualitas tidur' },
    { id: 'D', text: 'Mengurangi pengetahuan' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks menyebutkan membaca sebelum tidur membantu relaksasi dan kualitas tidur.'
},
{
  id: 'b1-l1-q10',
  text: `Bacalah teks berikut!

Kerja bakti di lingkungan sekolah dilakukan setiap bulan. Kegiatan ini bertujuan untuk menjaga kebersihan dan menumbuhkan rasa kebersamaan antar siswa. Dengan kerja bakti, lingkungan sekolah menjadi lebih nyaman untuk belajar.

Tujuan kerja bakti berdasarkan teks tersebut adalah...`,
  options: [
    { id: 'A', text: 'Mengganggu kegiatan belajar' },
    { id: 'B', text: 'Menumbuhkan persaingan antar siswa' },
    { id: 'C', text: 'Menjaga kebersihan dan kebersamaan' },
    { id: 'D', text: 'Mengurangi waktu istirahat' }
  ],
  correctOptionId: 'C',
  discussion: 'Kerja bakti bertujuan menjaga kebersihan dan mempererat kebersamaan.'
},
{
  id: 'b1-l1-q11',
  text: 'Bacalah teks berikut.\n\nSetiap hari Senin, sekolah melaksanakan upacara bendera. Petugas upacara dipilih secara bergilir dari setiap kelas. Minggu ini, kelas VIII-A mendapat giliran menjadi petugas.\n\nSejak beberapa hari sebelumnya, mereka berlatih agar upacara berjalan lancar.\n\nAlasan siswa kelas VIII-A berlatih sebelum upacara adalah....',
  options: [
    { id: 'A', text: 'Agar upacara bisa dibatalkan' },
    { id: 'B', text: 'Agar mereka bisa pulang lebih cepat' },
    { id: 'C', text: 'Agar pelaksanaan upacara berjalan lancar' },
    { id: 'D', text: 'Agar tidak mengikuti pelajaran' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Tujuan latihan disebutkan secara langsung.\nLangkah-langkah: Perhatikan kalimat “mereka berlatih agar upacara berjalan lancar”.\nKesimpulan: Latihan dilakukan supaya upacara berjalan lancar.'
},
{
  id: 'b1-l1-q12',
  text: 'Bacalah teks berikut.\n\nSaat jam istirahat, Andi melihat lantai koridor basah akibat hujan. Ia segera mengambil kain pel dan membersihkannya agar tidak licin.\n\nBeberapa temannya membantu dengan memberi tanda peringatan di dekat koridor.\n\nTindakan Andi menunjukkan sikap....',
  options: [
    { id: 'A', text: 'Acuh tak acuh terhadap lingkungan' },
    { id: 'B', text: 'Peduli terhadap keselamatan orang lain' },
    { id: 'C', text: 'Takut mendapat hukuman guru' },
    { id: 'D', text: 'Ingin dipuji oleh teman' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Sikap tokoh terlihat dari tindakannya.\nLangkah-langkah: Andi membersihkan lantai agar tidak licin dan membahayakan orang lain.\nKesimpulan: Andi menunjukkan kepedulian terhadap keselamatan.'
},
{
  id: 'b1-l1-q13',
  text: 'Bacalah teks berikut.\n\nGuru meminta siswa membaca teks secara mandiri sebelum diskusi dimulai. Beberapa siswa langsung membaca, sedangkan yang lain mengobrol sehingga tertinggal saat diskusi.\n\nKetika diskusi berlangsung, siswa yang membaca lebih dahulu dapat menjawab pertanyaan dengan baik.\n\nPerbedaan hasil diskusi disebabkan oleh....',
  options: [
    { id: 'A', text: 'Perbedaan tempat duduk siswa' },
    { id: 'B', text: 'Perbedaan kesiapan membaca teks' },
    { id: 'C', text: 'Perbedaan jumlah buku' },
    { id: 'D', text: 'Perbedaan suara guru' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penyebab perbedaan hasil dijelaskan dalam teks.\nLangkah-langkah: Siswa yang membaca lebih dulu lebih siap saat diskusi.\nKesimpulan: Kesiapan membaca memengaruhi hasil diskusi.'
},
{
  id: 'b1-l1-q14',
  text: 'Bacalah teks berikut.\n\nSekolah mengadakan kerja bakti membersihkan taman. Siswa diminta membawa alat kebersihan dari rumah. Rudi lupa membawa alat sehingga meminjam milik temannya.\n\nIa berjanji akan membawa alat sendiri pada kegiatan berikutnya.\n\nJanji Rudi menunjukkan bahwa ia....',
  options: [
    { id: 'A', text: 'Tidak peduli terhadap aturan' },
    { id: 'B', text: 'Menyesali perbuatannya dan ingin memperbaiki' },
    { id: 'C', text: 'Ingin selalu meminjam alat' },
    { id: 'D', text: 'Takut mengikuti kerja bakti' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Sikap tokoh terlihat dari janji yang diucapkan.\nLangkah-langkah: Rudi lupa membawa alat lalu berjanji membawa sendiri di lain waktu.\nKesimpulan: Rudi ingin memperbaiki kesalahannya.'
},
{
  id: 'b1-l1-q15',
  text: 'Bacalah teks berikut.\n\nSetelah ulangan, guru mengumumkan bahwa hasil nilai dapat dilihat besok. Guru ingin memastikan penilaian dilakukan dengan teliti agar tidak ada kesalahan.\n\nSiswa diminta bersabar menunggu hasil tersebut.\n\nAlasan guru menunda pengumuman nilai adalah....',
  options: [
    { id: 'A', text: 'Guru belum mengajar materi berikutnya' },
    { id: 'B', text: 'Guru ingin menilai dengan teliti' },
    { id: 'C', text: 'Guru lupa membawa daftar nilai' },
    { id: 'D', text: 'Guru ingin pulang lebih awal' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Alasan penundaan dijelaskan jelas.\nLangkah-langkah: Guru menunda agar penilaian dilakukan dengan teliti.\nKesimpulan: Penundaan dilakukan demi ketelitian penilaian.'
},
{
  id: 'b1-l1-q16',
  text: 'Bacalah teks berikut.\n\nPada pelajaran seni, siswa diminta membawa alat gambar. Dina membawa perlengkapan lengkap sehingga dapat menyelesaikan tugas tepat waktu.\n\nBeberapa temannya yang tidak lengkap harus menunggu giliran meminjam.\n\nPerbedaan hasil kerja siswa disebabkan oleh....',
  options: [
    { id: 'A', text: 'Perbedaan bakat menggambar' },
    { id: 'B', text: 'Perbedaan kelengkapan alat' },
    { id: 'C', text: 'Perbedaan warna kertas' },
    { id: 'D', text: 'Perbedaan tempat duduk' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penyebab perbedaan dijelaskan dalam teks.\nLangkah-langkah: Dina lengkap alat → selesai tepat waktu; yang lain harus menunggu.\nKesimpulan: Kelengkapan alat memengaruhi hasil kerja.'
},
{
  id: 'b1-l1-q17',
  text: 'Bacalah teks berikut.\n\nSekolah menanam pohon di halaman untuk menambah kesejukan. Setiap kelas bertanggung jawab merawat satu pohon.\n\nJika pohon tumbuh dengan baik, kelas tersebut akan mendapat penghargaan.\n\nTujuan utama kegiatan menanam pohon adalah....',
  options: [
    { id: 'A', text: 'Mencari lomba antar kelas' },
    { id: 'B', text: 'Menambah kesejukan lingkungan sekolah' },
    { id: 'C', text: 'Mengurangi jumlah siswa di kelas' },
    { id: 'D', text: 'Mengganti bangunan sekolah' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tujuan kegiatan disebutkan di awal teks.\nLangkah-langkah: Perhatikan kalimat “menanam pohon untuk menambah kesejukan”.\nKesimpulan: Kegiatan bertujuan menambah kesejukan lingkungan.'
},
{
  id: 'b1-l1-q18',
  text: 'Bacalah teks berikut.\n\nPada saat presentasi, Raka berbicara dengan suara jelas dan tidak membaca teks secara penuh. Teman-temannya dapat memahami isi presentasi dengan baik.\n\nGuru memuji cara Raka menyampaikan materi.\n\nAlasan presentasi Raka mudah dipahami adalah....',
  options: [
    { id: 'A', text: 'Raka berbicara cepat' },
    { id: 'B', text: 'Raka berbicara jelas dan tidak bergantung pada teks' },
    { id: 'C', text: 'Raka membawa banyak gambar' },
    { id: 'D', text: 'Raka membaca seluruh teks' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Cara penyampaian memengaruhi pemahaman.\nLangkah-langkah: Raka berbicara jelas dan tidak membaca penuh.\nKesimpulan: Presentasi mudah dipahami karena penyampaiannya jelas.'
},
{
  id: 'b1-l1-q19',
  text: 'Bacalah teks berikut.\n\nSaat hujan deras, sekolah menunda kegiatan olahraga luar ruangan. Guru mengganti kegiatan dengan pembelajaran di kelas.\n\nKeputusan tersebut diambil untuk menjaga keselamatan siswa.\n\nKeputusan sekolah diambil karena....',
  options: [
    { id: 'A', text: 'Siswa tidak suka olahraga' },
    { id: 'B', text: 'Lapangan sedang direnovasi' },
    { id: 'C', text: 'Cuaca tidak mendukung dan berbahaya' },
    { id: 'D', text: 'Guru ingin mengajar di kelas' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Alasan keputusan disebutkan jelas.\nLangkah-langkah: Hujan deras → berbahaya → kegiatan luar ditunda.\nKesimpulan: Keputusan diambil demi keselamatan siswa.'
},
{
  id: 'b1-l1-q20',
  text: 'Bacalah teks berikut.\n\nSekolah menyediakan kotak saran di depan ruang guru. Siswa dapat menuliskan pendapat atau keluhan secara sopan.\n\nPihak sekolah berjanji akan membaca dan menindaklanjuti setiap saran.\n\nManfaat adanya kotak saran bagi siswa adalah....',
  options: [
    { id: 'A', text: 'Siswa bebas melanggar aturan' },
    { id: 'B', text: 'Siswa dapat menyampaikan pendapat dengan tertib' },
    { id: 'C', text: 'Siswa tidak perlu berbicara langsung' },
    { id: 'D', text: 'Siswa bisa menulis tanpa tanggung jawab' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Fungsi kotak saran adalah sarana penyampaian pendapat.\nLangkah-langkah: Kotak saran digunakan untuk pendapat/keluhan secara sopan.\nKesimpulan: Kotak saran membantu siswa menyampaikan pendapat secara tertib.'
},
{
  id: 'b1-l1-q21',
  text: 'Bacalah teks berikut.\n\nPerpustakaan sekolah kini tidak hanya berfungsi sebagai tempat meminjam buku. Banyak sekolah mulai menjadikan perpustakaan sebagai ruang belajar bersama, diskusi kelompok, dan kegiatan literasi. Dengan suasana yang nyaman, siswa diharapkan lebih tertarik untuk membaca dan belajar mandiri.\n\nFungsi utama perpustakaan menurut teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Tempat menyimpan buku pelajaran lama' },
    { id: 'B', text: 'Tempat belajar, membaca, dan berdiskusi' },
    { id: 'C', text: 'Ruang pertemuan guru dan staf sekolah' },
    { id: 'D', text: 'Tempat mengerjakan ujian sekolah' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks menjelaskan fungsi perpustakaan modern.\nLangkah-langkah: Perhatikan kalimat utama pada paragraf.\nKesimpulan: Perpustakaan berfungsi sebagai tempat belajar, membaca, dan berdiskusi.'
},
{
  id: 'b1-l1-q22',
  text: 'Bacalah teks berikut.\n\nKebiasaan membaca secara rutin dapat meningkatkan kemampuan berpikir kritis siswa. Dengan membaca, siswa belajar memahami informasi, membandingkan pendapat, dan menarik kesimpulan sendiri. Oleh karena itu, membaca sangat penting dalam proses belajar.\n\nManfaat membaca menurut teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Membuat siswa cepat menghafal' },
    { id: 'B', text: 'Meningkatkan kemampuan berpikir kritis' },
    { id: 'C', text: 'Mengurangi waktu belajar siswa' },
    { id: 'D', text: 'Menggantikan peran guru di sekolah' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks menekankan manfaat membaca.\nLangkah-langkah: Temukan kalimat yang menjelaskan dampak membaca.\nKesimpulan: Membaca meningkatkan kemampuan berpikir kritis.'
},
{
  id: 'b1-l1-q23',
  text: 'Bacalah teks berikut.\n\nLingkungan sekolah yang bersih dan rapi membuat siswa merasa nyaman saat belajar. Selain itu, lingkungan yang sehat juga dapat mengurangi risiko penyakit. Oleh sebab itu, menjaga kebersihan sekolah merupakan tanggung jawab seluruh warga sekolah.\n\nIde pokok teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Cara membersihkan lingkungan sekolah' },
    { id: 'B', text: 'Manfaat lingkungan sekolah yang bersih' },
    { id: 'C', text: 'Peran petugas kebersihan sekolah' },
    { id: 'D', text: 'Jenis penyakit di lingkungan sekolah' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Ide pokok adalah gagasan utama.\nLangkah-langkah: Perhatikan kalimat awal dan akhir paragraf.\nKesimpulan: Teks membahas manfaat lingkungan sekolah yang bersih.'
},
{
  id: 'b1-l1-q24',
  text: 'Bacalah teks berikut.\n\nTeknologi memudahkan siswa dalam mencari informasi. Namun, penggunaan teknologi yang berlebihan dapat mengurangi waktu belajar dan beristirahat. Oleh karena itu, teknologi harus digunakan secara bijak.\n\nPesan yang ingin disampaikan penulis adalah...',
  options: [
    { id: 'A', text: 'Teknologi harus dihindari sepenuhnya' },
    { id: 'B', text: 'Teknologi hanya cocok untuk orang dewasa' },
    { id: 'C', text: 'Teknologi sebaiknya digunakan secara bijak' },
    { id: 'D', text: 'Teknologi selalu berdampak negatif' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Pesan tersurat dapat ditemukan di akhir teks.\nLangkah-langkah: Perhatikan kata hubung “oleh karena itu”.\nKesimpulan: Teknologi harus digunakan secara bijak.'
},
{
  id: 'b1-l1-q25',
  text: 'Bacalah teks berikut.\n\nSetiap pagi, Dira berangkat ke sekolah dengan berjalan kaki. Selain lebih hemat, berjalan kaki membuat tubuhnya lebih sehat dan bugar. Kebiasaan ini juga mengajarkan Dira untuk disiplin waktu.\n\nSikap positif yang ditunjukkan Dira adalah...',
  options: [
    { id: 'A', text: 'Malas berangkat ke sekolah' },
    { id: 'B', text: 'Disiplin dan menjaga kesehatan' },
    { id: 'C', text: 'Tidak peduli dengan lingkungan' },
    { id: 'D', text: 'Menghindari kegiatan olahraga' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Sikap tokoh dapat disimpulkan dari tindakannya.\nLangkah-langkah: Perhatikan kebiasaan yang dilakukan tokoh.\nKesimpulan: Dira bersikap disiplin dan menjaga kesehatan.'
},
{
  id: 'b1-l1-q26',
  text: 'Bacalah teks berikut.\n\nMusyawarah kelas dilakukan untuk menentukan kegiatan perpisahan. Setiap siswa diberi kesempatan menyampaikan pendapatnya. Setelah berdiskusi, kelas sepakat memilih kegiatan yang disetujui bersama.\n\nNilai yang ditunjukkan dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kejujuran' },
    { id: 'B', text: 'Kerja keras' },
    { id: 'C', text: 'Demokrasi' },
    { id: 'D', text: 'Kemandirian' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Musyawarah mencerminkan nilai tertentu.\nLangkah-langkah: Perhatikan proses pengambilan keputusan.\nKesimpulan: Teks menunjukkan nilai demokrasi.'
},
{
  id: 'b1-l1-q27',
  text: 'Bacalah teks berikut.\n\nRani gemar membaca buku cerita di waktu luang. Dari buku-buku tersebut, ia mendapatkan banyak pengetahuan baru dan kosakata yang beragam. Hal ini membuat Rani lebih percaya diri saat berbicara.\n\nAkibat dari kegemaran Rani membaca adalah...',
  options: [
    { id: 'A', text: 'Rani menjadi cepat lelah' },
    { id: 'B', text: 'Rani lebih percaya diri berbicara' },
    { id: 'C', text: 'Rani jarang berinteraksi' },
    { id: 'D', text: 'Rani kesulitan memahami pelajaran' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Akibat adalah hasil dari suatu tindakan.\nLangkah-langkah: Hubungkan kebiasaan dengan dampaknya.\nKesimpulan: Membaca membuat Rani lebih percaya diri.'
},
{
  id: 'b1-l1-q28',
  text: 'Bacalah teks berikut.\n\nMenjaga waktu belajar dan waktu bermain sangat penting bagi siswa. Jika waktu tidak diatur dengan baik, siswa bisa menjadi lelah dan sulit berkonsentrasi.\n\nTujuan penulis menulis teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Menghibur pembaca' },
    { id: 'B', text: 'Mengajak siswa mengatur waktu dengan baik' },
    { id: 'C', text: 'Menceritakan pengalaman pribadi' },
    { id: 'D', text: 'Mengkritik kebiasaan siswa' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tujuan penulis terlihat dari isi teks.\nLangkah-langkah: Perhatikan kata-kata ajakan.\nKesimpulan: Penulis mengajak siswa mengatur waktu.'
},
{
  id: 'b1-l1-q29',
  text: 'Bacalah teks berikut.\n\nHujan deras yang turun sejak pagi menyebabkan beberapa jalan tergenang air. Akibatnya, arus lalu lintas menjadi tersendat dan banyak orang terlambat sampai tujuan.\n\nPeristiwa yang terjadi akibat hujan deras adalah...',
  options: [
    { id: 'A', text: 'Cuaca menjadi cerah' },
    { id: 'B', text: 'Jalanan menjadi kering' },
    { id: 'C', text: 'Lalu lintas menjadi tersendat' },
    { id: 'D', text: 'Orang-orang berangkat lebih awal' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Akibat dijelaskan secara langsung dalam teks.\nLangkah-langkah: Cari kata “akibatnya”.\nKesimpulan: Lalu lintas menjadi tersendat.'
},
{
  id: 'b1-l1-q30',
  text: 'Bacalah teks berikut.\n\nBelajar secara kelompok dapat membantu siswa memahami materi yang sulit. Dengan berdiskusi, siswa bisa saling bertukar pendapat dan saling membantu.\n\nKesimpulan yang tepat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Belajar sendiri selalu lebih baik' },
    { id: 'B', text: 'Belajar kelompok tidak efektif' },
    { id: 'C', text: 'Belajar kelompok membantu pemahaman materi' },
    { id: 'D', text: 'Diskusi membuat belajar lebih sulit' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kesimpulan merangkum isi teks.\nLangkah-langkah: Gabungkan gagasan utama tiap kalimat.\nKesimpulan: Belajar kelompok membantu pemahaman.'
},
{
  id: 'b1-l1-q31',
  text: 'Bacalah teks berikut.\n\nSetiap siswa memiliki cara belajar yang berbeda. Ada yang lebih mudah memahami pelajaran dengan membaca, ada pula yang lebih suka belajar melalui diskusi atau praktik langsung. Perbedaan ini perlu dipahami agar proses belajar menjadi lebih efektif.\n\nIsi teks tersebut membahas tentang...',
  options: [
    { id: 'A', text: 'Kesulitan siswa dalam belajar' },
    { id: 'B', text: 'Perbedaan cara belajar setiap siswa' },
    { id: 'C', text: 'Kewajiban siswa di sekolah' },
    { id: 'D', text: 'Peran guru dalam mengajar' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Isi teks membahas gagasan utama.\nLangkah-langkah: Perhatikan kalimat awal dan pengulangan ide.\nKesimpulan: Teks membahas perbedaan cara belajar siswa.'
},
{
  id: 'b1-l1-q32',
  text: 'Bacalah teks berikut.\n\nMenanam pohon di lingkungan sekolah dapat memberikan banyak manfaat. Selain membuat udara lebih sejuk, pohon juga dapat mengurangi polusi dan menciptakan suasana belajar yang nyaman.\n\nManfaat menanam pohon menurut teks adalah...',
  options: [
    { id: 'A', text: 'Membuat halaman sekolah lebih luas' },
    { id: 'B', text: 'Mengurangi aktivitas belajar' },
    { id: 'C', text: 'Menciptakan lingkungan yang sejuk dan nyaman' },
    { id: 'D', text: 'Menghambat pembangunan sekolah' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Manfaat disebutkan secara langsung.\nLangkah-langkah: Cari kata kunci “selain” dan “juga”.\nKesimpulan: Pohon membuat lingkungan sejuk dan nyaman.'
},
{
  id: 'b1-l1-q33',
  text: 'Bacalah teks berikut.\n\nSebelum ujian, siswa dianjurkan untuk belajar secara teratur dan tidak menunda-nunda. Belajar sedikit demi sedikit lebih efektif dibandingkan belajar mendadak.\n\nSaran yang diberikan penulis adalah...',
  options: [
    { id: 'A', text: 'Belajar semalaman sebelum ujian' },
    { id: 'B', text: 'Belajar secara teratur' },
    { id: 'C', text: 'Menghindari ujian' },
    { id: 'D', text: 'Mengandalkan teman saat ujian' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Saran terlihat dari kalimat anjuran.\nLangkah-langkah: Perhatikan kata “dianjurkan”.\nKesimpulan: Penulis menyarankan belajar secara teratur.'
},
{
  id: 'b1-l1-q34',
  text: 'Bacalah teks berikut.\n\nKegiatan ekstrakurikuler di sekolah dapat membantu siswa mengembangkan bakat dan minat. Selain itu, siswa juga belajar bekerja sama dan bertanggung jawab.\n\nManfaat kegiatan ekstrakurikuler adalah...',
  options: [
    { id: 'A', text: 'Mengurangi waktu istirahat siswa' },
    { id: 'B', text: 'Mengembangkan bakat dan tanggung jawab' },
    { id: 'C', text: 'Membuat siswa lelah belajar' },
    { id: 'D', text: 'Menggantikan pelajaran di kelas' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Manfaat disebutkan secara jelas.\nLangkah-langkah: Perhatikan hubungan sebab-akibat.\nKesimpulan: Ekstrakurikuler mengembangkan bakat dan tanggung jawab.'
},
{
  id: 'b1-l1-q35',
  text: 'Bacalah teks berikut.\n\nMenjaga kebersihan kelas merupakan tugas bersama. Jika semua siswa bekerja sama, kelas akan selalu bersih dan nyaman digunakan untuk belajar.\n\nNilai yang terkandung dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kejujuran' },
    { id: 'B', text: 'Kerja sama' },
    { id: 'C', text: 'Keberanian' },
    { id: 'D', text: 'Kesabaran' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Nilai ditunjukkan melalui sikap tokoh.\nLangkah-langkah: Perhatikan kata “bersama” dan “bekerja sama”.\nKesimpulan: Teks mengandung nilai kerja sama.'
},
{
  id: 'b1-l1-q36',
  text: 'Bacalah teks berikut.\n\nMembaca berita dari berbagai sumber membantu siswa memahami suatu peristiwa secara lebih luas. Dengan demikian, siswa tidak mudah terpengaruh oleh informasi yang salah.\n\nTujuan membaca berbagai sumber adalah...',
  options: [
    { id: 'A', text: 'Menambah tugas sekolah' },
    { id: 'B', text: 'Menghindari belajar' },
    { id: 'C', text: 'Memahami peristiwa secara lebih luas' },
    { id: 'D', text: 'Mengikuti pendapat orang lain' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Tujuan dijelaskan secara langsung.\nLangkah-langkah: Cari kalimat yang menjelaskan akibat.\nKesimpulan: Membaca banyak sumber memberi pemahaman luas.'
},
{
  id: 'b1-l1-q37',
  text: 'Bacalah teks berikut.\n\nSetiap pagi, petugas kebersihan sekolah bekerja membersihkan halaman dan ruang kelas. Berkat kerja keras mereka, lingkungan sekolah tetap rapi dan nyaman.\n\nTokoh yang berperan penting dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Siswa' },
    { id: 'B', text: 'Guru' },
    { id: 'C', text: 'Petugas kebersihan' },
    { id: 'D', text: 'Kepala sekolah' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Tokoh utama disebutkan secara langsung.\nLangkah-langkah: Perhatikan subjek pada kalimat pertama.\nKesimpulan: Tokoh penting adalah petugas kebersihan.'
},
{
  id: 'b1-l1-q38',
  text: 'Bacalah teks berikut.\n\nBerolahraga secara teratur dapat menjaga kesehatan tubuh. Selain itu, olahraga juga dapat meningkatkan konsentrasi saat belajar.\n\nHubungan antar kalimat dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sebab-akibat' },
    { id: 'B', text: 'Perbandingan' },
    { id: 'C', text: 'Penjelasan tambahan' },
    { id: 'D', text: 'Pertentangan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat kedua menambah informasi.\nLangkah-langkah: Perhatikan kata “selain itu”.\nKesimpulan: Hubungan kalimat berupa penjelasan tambahan.'
},
{
  id: 'b1-l1-q39',
  text: 'Bacalah teks berikut.\n\nMenghargai pendapat teman saat berdiskusi akan menciptakan suasana yang nyaman. Diskusi pun dapat berjalan dengan lancar dan saling menguntungkan.\n\nAkibat jika pendapat teman dihargai adalah...',
  options: [
    { id: 'A', text: 'Diskusi menjadi kacau' },
    { id: 'B', text: 'Suasana diskusi menjadi nyaman' },
    { id: 'C', text: 'Diskusi tidak diperlukan' },
    { id: 'D', text: 'Pendapat sendiri diabaikan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Akibat dijelaskan langsung dalam teks.\nLangkah-langkah: Cari hasil dari suatu tindakan.\nKesimpulan: Menghargai pendapat membuat diskusi nyaman.'
},
{
  id: 'b1-l1-q40',
  text: 'Bacalah teks berikut.\n\nBelajar dari kesalahan dapat membantu siswa menjadi lebih baik. Dengan memperbaiki kesalahan, siswa dapat meningkatkan kemampuan diri.\n\nPesan moral dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kesalahan harus dihindari sepenuhnya' },
    { id: 'B', text: 'Kesalahan membuat siswa gagal' },
    { id: 'C', text: 'Kesalahan dapat menjadi bahan pembelajaran' },
    { id: 'D', text: 'Kesalahan tidak perlu diperbaiki' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Pesan moral adalah pelajaran dari teks.\nLangkah-langkah: Perhatikan makna keseluruhan teks.\nKesimpulan: Kesalahan dapat menjadi bahan pembelajaran.'
},
{
  id: 'b1-l1-q41',
  text: 'Bacalah teks berikut.\n\nSetiap siswa diharapkan datang ke sekolah tepat waktu. Kedisiplinan ini penting agar kegiatan belajar mengajar dapat berjalan dengan baik.\n\nAlasan siswa harus datang tepat waktu adalah...',
  options: [
    { id: 'A', text: 'Agar cepat pulang' },
    { id: 'B', text: 'Supaya kegiatan belajar berjalan baik' },
    { id: 'C', text: 'Untuk menghindari tugas' },
    { id: 'D', text: 'Agar mendapat pujian' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Alasan dijelaskan secara eksplisit.\nLangkah-langkah: Cari kata “agar”.\nKesimpulan: Tepat waktu penting untuk kelancaran belajar.'
},
{
  id: 'b1-l1-q42',
  text: 'Bacalah teks berikut.\n\nMembaca buku nonpelajaran seperti biografi dan ensiklopedia dapat menambah wawasan siswa. Informasi yang diperoleh dapat berguna dalam kehidupan sehari-hari.\n\nJenis bacaan yang disebutkan dalam teks adalah...',
  options: [
    { id: 'A', text: 'Buku pelajaran' },
    { id: 'B', text: 'Novel fiksi' },
    { id: 'C', text: 'Biografi dan ensiklopedia' },
    { id: 'D', text: 'Komik hiburan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Jenis bacaan disebutkan secara langsung.\nLangkah-langkah: Perhatikan contoh yang diberikan.\nKesimpulan: Teks menyebut biografi dan ensiklopedia.'
},
{
  id: 'b1-l1-q43',
  text: 'Bacalah teks berikut.\n\nSiswa yang rajin bertanya akan lebih mudah memahami pelajaran. Bertanya menunjukkan keinginan untuk belajar dan berkembang.\n\nMakna kata “rajin bertanya” dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sering mengganggu kelas' },
    { id: 'B', text: 'Aktif mencari pemahaman' },
    { id: 'C', text: 'Tidak memperhatikan guru' },
    { id: 'D', text: 'Banyak berbicara tanpa tujuan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Makna kata dilihat dari konteks.\nLangkah-langkah: Perhatikan kalimat penjelas.\nKesimpulan: Rajin bertanya berarti aktif mencari pemahaman.'
},
{
  id: 'b1-l1-q44',
  text: 'Bacalah teks berikut.\n\nMengatur jadwal belajar harian dapat membantu siswa membagi waktu dengan baik. Dengan jadwal yang teratur, siswa tidak mudah merasa tertekan.\n\nKesimpulan yang tepat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Jadwal membuat siswa lelah' },
    { id: 'B', text: 'Jadwal belajar tidak diperlukan' },
    { id: 'C', text: 'Jadwal membantu siswa mengatur waktu' },
    { id: 'D', text: 'Belajar harus dilakukan terus-menerus' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kesimpulan merangkum isi teks.\nLangkah-langkah: Gabungkan dua kalimat utama.\nKesimpulan: Jadwal membantu mengatur waktu belajar.'
},
{
  id: 'b1-l1-q45',
  text: 'Bacalah teks berikut.\n\nMenolong teman yang kesulitan merupakan sikap terpuji. Selain mempererat persahabatan, sikap ini juga menciptakan lingkungan sekolah yang harmonis.\n\nSikap yang dianjurkan dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Bersikap acuh tak acuh' },
    { id: 'B', text: 'Menolong teman' },
    { id: 'C', text: 'Menghindari kerja sama' },
    { id: 'D', text: 'Mementingkan diri sendiri' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Sikap dianjurkan terlihat jelas.\nLangkah-langkah: Perhatikan kata “sikap terpuji”.\nKesimpulan: Menolong teman adalah sikap terpuji.'
},
{
  id: 'b1-l1-q46',
  text: 'Bacalah teks berikut.\n\nDengan membaca secara rutin, kemampuan memahami bacaan akan meningkat. Hal ini akan membantu siswa dalam mengerjakan berbagai mata pelajaran.\n\nKata “hal ini” dalam teks merujuk pada...',
  options: [
    { id: 'A', text: 'Mata pelajaran' },
    { id: 'B', text: 'Kemampuan mengerjakan soal' },
    { id: 'C', text: 'Membaca secara rutin' },
    { id: 'D', text: 'Waktu belajar' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata rujukan menunjuk pada ide sebelumnya.\nLangkah-langkah: Lihat kalimat sebelum kata rujukan.\nKesimpulan: “Hal ini” merujuk pada membaca rutin.'
},
{
  id: 'b1-l1-q47',
  text: 'Bacalah teks berikut.\n\nSekolah mengadakan kegiatan kerja bakti setiap bulan. Kegiatan ini bertujuan menumbuhkan rasa peduli terhadap lingkungan.\n\nTujuan diadakannya kerja bakti adalah...',
  options: [
    { id: 'A', text: 'Mengisi waktu luang siswa' },
    { id: 'B', text: 'Menumbuhkan rasa peduli lingkungan' },
    { id: 'C', text: 'Mengurangi kegiatan belajar' },
    { id: 'D', text: 'Memberi hukuman kepada siswa' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tujuan dijelaskan langsung.\nLangkah-langkah: Cari kata “bertujuan”.\nKesimpulan: Kerja bakti menumbuhkan kepedulian.'
},
{
  id: 'b1-l1-q48',
  text: 'Bacalah teks berikut.\n\nMenyimak penjelasan guru dengan baik akan membantu siswa memahami materi. Oleh karena itu, siswa perlu berkonsentrasi saat pelajaran berlangsung.\n\nHubungan antar kalimat pada teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sebab-akibat' },
    { id: 'B', text: 'Pertentangan' },
    { id: 'C', text: 'Perbandingan' },
    { id: 'D', text: 'Pengulangan' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Hubungan sebab-akibat ditandai “oleh karena itu”.\nLangkah-langkah: Perhatikan kata penghubung.\nKesimpulan: Hubungan kalimat adalah sebab-akibat.'
},
{
  id: 'b1-l1-q49',
  text: 'Bacalah teks berikut.\n\nBelajar dengan suasana tenang membuat siswa lebih fokus. Gangguan suara yang berlebihan dapat menghambat konsentrasi belajar.\n\nMasalah yang dibahas dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Cara membuat suasana ramai' },
    { id: 'B', text: 'Gangguan terhadap konsentrasi belajar' },
    { id: 'C', text: 'Manfaat bermain di kelas' },
    { id: 'D', text: 'Pentingnya istirahat panjang' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Masalah terlihat dari hal yang menghambat.\nLangkah-langkah: Cari kata bermakna negatif.\nKesimpulan: Masalahnya adalah gangguan konsentrasi.'
},
{
  id: 'b1-l1-q50',
  text: 'Bacalah teks berikut.\n\nSikap tanggung jawab dapat ditunjukkan dengan menyelesaikan tugas tepat waktu. Dengan demikian, siswa akan terbiasa bersikap disiplin dalam kehidupan sehari-hari.\n\nKesimpulan dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Tugas tidak perlu diselesaikan' },
    { id: 'B', text: 'Tanggung jawab melatih kedisiplinan' },
    { id: 'C', text: 'Disiplin hanya berlaku di sekolah' },
    { id: 'D', text: 'Tugas membuat siswa tertekan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kesimpulan merangkum pesan teks.\nLangkah-langkah: Hubungkan dua kalimat utama.\nKesimpulan: Tanggung jawab melatih kedisiplinan.'
}
],
// ejaan dan tata bahasa

   'b2-l1': [
 
   {
  id: 'b2-l1-q1',
  text: 'Penulisan huruf kapital yang tepat terdapat pada kalimat berikut, kecuali...',
  options: [
    { id: 'A', text: 'Ayah bekerja di Bank Indonesia.' },
    { id: 'B', text: 'Kami berlibur ke Danau Toba.' },
    { id: 'C', text: 'Ibu membeli buah di pasar.' },
    { id: 'D', text: 'Presiden Republik Indonesia memberikan pidato.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Huruf kapital dipakai untuk nama diri, bukan kata umum.\nKesimpulan: Kata pasar bukan nama khusus sehingga tidak perlu kapital.'
},
{
  id: 'b2-l1-q2',
  text: 'Kalimat berikut yang menggunakan tanda titik dengan benar adalah...',
  options: [
    { id: 'A', text: 'Ia lahir pada tanggal 12 Mei 2010' },
    { id: 'B', text: 'Ia lahir pada tanggal 12 Mei 2010.' },
    { id: 'C', text: 'Ia lahir pada tanggal, 12 Mei 2010.' },
    { id: 'D', text: 'Ia lahir pada tanggal 12. Mei 2010.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tanda titik digunakan di akhir kalimat pernyataan.\nKesimpulan: Opsi B benar.'
},
{
  id: 'b2-l1-q3',
  text: 'Penggunaan tanda koma yang tepat terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Rina membeli buku pensil dan penghapus.' },
    { id: 'B', text: 'Rina membeli buku, pensil dan penghapus.' },
    { id: 'C', text: 'Rina, membeli buku pensil dan penghapus.' },
    { id: 'D', text: 'Rina membeli, buku pensil dan penghapus.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tanda koma digunakan untuk memisahkan unsur dalam perincian.\nKesimpulan: Opsi B tepat.'
},
{
  id: 'b2-l1-q4',
  text: 'Kalimat tanya yang penulisan tanda bacanya benar adalah...',
  options: [
    { id: 'A', text: 'Di mana kamu tinggal.' },
    { id: 'B', text: 'Di mana kamu tinggal!' },
    { id: 'C', text: 'Di mana kamu tinggal?' },
    { id: 'D', text: 'Di mana, kamu tinggal?' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat tanya diakhiri tanda tanya.\nKesimpulan: Jawaban C benar.'
},
{
  id: 'b2-l1-q5',
  text: 'Penulisan kata depan di yang benar terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Buku itu disimpan di lemari.' },
    { id: 'B', text: 'Dia dipanggil dipanggung.' },
    { id: 'C', text: 'Ibu pergi dipasar.' },
    { id: 'D', text: 'Kami duduk dibangku.' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Kata depan di ditulis terpisah jika menunjukkan tempat.\nKesimpulan: Opsi A benar.'
},
{
  id: 'b2-l1-q6',
  text: 'Kalimat yang menggunakan tanda seru dengan tepat adalah...',
  options: [
    { id: 'A', text: 'Awas, ada mobil!' },
    { id: 'B', text: 'Awas, ada mobil.' },
    { id: 'C', text: 'Awas, ada mobil?' },
    { id: 'D', text: 'Awas ada mobil,' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Tanda seru digunakan untuk perintah atau peringatan.\nKesimpulan: Jawaban A.'
},
{
  id: 'b2-l1-q7',
  text: 'Kalimat berikut yang penulisan kata bakunya benar adalah...',
  options: [
    { id: 'A', text: 'Aktifitas belajar dimulai pagi hari.' },
    { id: 'B', text: 'Resiko kecelakaan dapat dikurangi.' },
    { id: 'C', text: 'Izin orang tua sangat penting.' },
    { id: 'D', text: 'Atlit itu berlatih keras.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata baku adalah izin, bukan ijin.\nKesimpulan: Jawaban C.'
},
{
  id: 'b2-l1-q8',
  text: 'Penulisan gelar yang benar terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Drs Ahmad hadir dalam acara.' },
    { id: 'B', text: 'Ahmad, S.Pd mengajar di sekolah.' },
    { id: 'C', text: 'Ahmad S.Pd. mengajar di sekolah.' },
    { id: 'D', text: 'Ahmad SPd. mengajar di sekolah.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Gelar ditulis dengan tanda titik dan dipisahkan koma.\nKesimpulan: Jawaban C.'
},
{
  id: 'b2-l1-q9',
  text: 'Kalimat yang penulisan singkatannya benar adalah...',
  options: [
    { id: 'A', text: 'dll,' },
    { id: 'B', text: 'dls.' },
    { id: 'C', text: 'dsb.' },
    { id: 'D', text: 'dkk' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Singkatan dan sebagainya ditulis dsb.\nKesimpulan: Jawaban C.'
},
{
  id: 'b2-l1-q10',
  text: 'Penulisan alamat yang benar adalah...',
  options: [
    { id: 'A', text: 'Jl. merdeka no. 10' },
    { id: 'B', text: 'Jl. Merdeka No. 10' },
    { id: 'C', text: 'jl. Merdeka no.10' },
    { id: 'D', text: 'JL Merdeka No 10' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Singkatan jalan dan nomor diawali huruf kapital.\nKesimpulan: Jawaban B.'
},
{
  id: 'b2-l1-q11',
  text: 'Kalimat berikut yang menggunakan tanda petik dengan benar adalah...',
  options: [
    { id: 'A', text: 'Ayah berkata, "Belajarlah dengan rajin".' },
    { id: 'B', text: 'Ayah berkata "Belajarlah dengan rajin."' },
    { id: 'C', text: 'Ayah berkata, "Belajarlah dengan rajin."' },
    { id: 'D', text: 'Ayah berkata, Belajarlah dengan rajin.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Tanda petik digunakan untuk mengapit kalimat langsung.\nKesimpulan: Jawaban C.'
},
{
  id: 'b2-l1-q12',
  text: 'Penggunaan tanda titik dua yang tepat terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Ia membeli: buku, pensil, dan penghapus.' },
    { id: 'B', text: 'Ia membeli buku: pensil dan penghapus.' },
    { id: 'C', text: 'Ia membeli buku, pensil: dan penghapus.' },
    { id: 'D', text: 'Ia membeli buku, pensil dan penghapus:' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Titik dua digunakan sebelum perincian.\nKesimpulan: Jawaban A.'
},
{
  id: 'b2-l1-q13',
  text: 'Kalimat berikut yang penulisan huruf miringnya benar adalah...',
  options: [
    { id: 'A', text: 'Kata online berasal dari bahasa Inggris.' },
    { id: 'B', text: 'Kata online berasal dari bahasa inggris.' },
    { id: 'C', text: 'Kata online berasal dari Bahasa Inggris.' },
    { id: 'D', text: 'Kata online berasal dari bahasa Inggris.' }
  ],
  correctOptionId: 'D',
  discussion: 'Penjelasan singkat: Nama bahasa ditulis dengan huruf kapital.\nKesimpulan: Jawaban D.'
},
{
  id: 'b2-l1-q14',
  text: 'Penulisan waktu yang benar adalah...',
  options: [
    { id: 'A', text: 'Pukul 07.30 WIB.' },
    { id: 'B', text: 'Pukul 7.30 WIB.' },
    { id: 'C', text: 'Pukul 07:30 WIB.' },
    { id: 'D', text: 'Pukul 07-30 WIB.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulisan waktu menggunakan tanda titik dua.\nKesimpulan: Jawaban C.'
},
{
  id: 'b2-l1-q15',
  text: 'Kalimat yang menggunakan tanda hubung dengan tepat adalah...',
  options: [
    { id: 'A', text: 'Anak anak sedang bermain.' },
    { id: 'B', text: 'Anak-anak sedang bermain.' },
    { id: 'C', text: 'Anak anak-sedang bermain.' },
    { id: 'D', text: 'Anak-anak-sedang bermain.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kata ulang ditulis dengan tanda hubung.\nKesimpulan: Jawaban B.'
},
{
  id: 'b2-l1-q16',
  text: 'Penulisan angka yang benar dalam kalimat adalah...',
  options: [
    { id: 'A', text: 'Ia membeli 2 buah apel.' },
    { id: 'B', text: 'Ia membeli dua buah apel.' },
    { id: 'C', text: 'Ia membeli dua (2) buah apel.' },
    { id: 'D', text: 'Ia membeli II buah apel.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Angka satu atau dua kata sebaiknya ditulis dengan huruf.\nKesimpulan: Jawaban B.'
},
{
  id: 'b2-l1-q17',
  text: 'Kalimat berikut yang menggunakan tanda kurung dengan tepat adalah...',
  options: [
    { id: 'A', text: 'Ia lahir di Bandung (Jawa Barat).' },
    { id: 'B', text: 'Ia lahir di Bandung )Jawa Barat(' },
    { id: 'C', text: 'Ia lahir di Bandung ( Jawa Barat ).' },
    { id: 'D', text: 'Ia lahir di Bandung Jawa Barat().' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Tanda kurung mengapit keterangan tambahan.\nKesimpulan: Jawaban A.'
},
{
  id: 'b2-l1-q18',
  text: 'Penulisan singkatan gelar yang benar adalah...',
  options: [
    { id: 'A', text: 'S Pd.' },
    { id: 'B', text: 'S.Pd.' },
    { id: 'C', text: 'SPd.' },
    { id: 'D', text: 'S Pd' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Gelar ditulis dengan titik tanpa spasi.\nKesimpulan: Jawaban B.'
},
{
  id: 'b2-l1-q19',
  text: 'Kalimat yang penulisan tanda elipsisnya benar adalah...',
  options: [
    { id: 'A', text: 'Aku masih ragu...' },
    { id: 'B', text: 'Aku masih ragu..' },
    { id: 'C', text: 'Aku masih ragu.' },
    { id: 'D', text: 'Aku masih ragu....' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Elipsis ditulis dengan tiga titik.\nKesimpulan: Jawaban A.'
},
{
  id: 'b2-l1-q20',
  text: 'Penulisan nama hari yang benar adalah...',
  options: [
    { id: 'A', text: 'hari senin kami upacara.' },
    { id: 'B', text: 'Hari senin kami upacara.' },
    { id: 'C', text: 'Hari Senin kami upacara.' },
    { id: 'D', text: 'hari Senin kami upacara.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Nama hari ditulis dengan huruf kapital.\nKesimpulan: Jawaban C.'
},
{
  id: 'b2-l1-q21',
  text: 'Kalimat berikut yang penulisan kata bakunya benar adalah...',
  options: [
    { id: 'A', text: 'Aktifitas belajar siswa meningkat.' },
    { id: 'B', text: 'Aktivitas belajar siswa meningkat.' },
    { id: 'C', text: 'Aktipitas belajar siswa meningkat.' },
    { id: 'D', text: 'Aktifitas belajar siswa meningkat.' }
  ],
  correctOptionId: 'B',
  discussion: 'Bentuk baku kata tersebut adalah “aktivitas”.'
},
{
  id: 'b2-l1-q22',
  text: 'Penulisan singkatan yang benar terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Ayah bekerja di PT. Maju Jaya.' },
    { id: 'B', text: 'Ayah bekerja di PT Maju Jaya.' },
    { id: 'C', text: 'Ayah bekerja di P.T Maju Jaya.' },
    { id: 'D', text: 'Ayah bekerja di pT Maju Jaya.' }
  ],
  correctOptionId: 'B',
  discussion: 'Singkatan nama lembaga tidak menggunakan tanda titik.'
},
{
  id: 'b2-l1-q23',
  text: 'Kalimat yang menggunakan huruf kapital secara tepat adalah...',
  options: [
    { id: 'A', text: 'Kami belajar bahasa Indonesia.' },
    { id: 'B', text: 'Kami belajar Bahasa indonesia.' },
    { id: 'C', text: 'Kami belajar bahasa indonesia.' },
    { id: 'D', text: 'Kami belajar Bahasa Indonesia.' }
  ],
  correctOptionId: 'D',
  discussion: 'Nama mata pelajaran menggunakan huruf kapital pada setiap unsurnya.'
},
{
  id: 'b2-l1-q24',
  text: 'Tanda titik digunakan pada akhir kalimat...',
  options: [
    { id: 'A', text: 'kalimat tanya' },
    { id: 'B', text: 'kalimat perintah' },
    { id: 'C', text: 'kalimat pernyataan' },
    { id: 'D', text: 'kalimat seru' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat pernyataan diakhiri tanda titik.'
},
{
  id: 'b2-l1-q25',
  text: 'Manakah kalimat yang menggunakan tanda petik dengan benar?',
  options: [
    { id: 'A', text: 'Ia berkata, “ayo kita berangkat.”' },
    { id: 'B', text: 'Ia berkata, “Ayo kita berangkat.”' },
    { id: 'C', text: 'Ia berkata “Ayo kita berangkat”.' },
    { id: 'D', text: 'Ia berkata, ayo kita berangkat.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat langsung diawali huruf kapital dan titik berada di dalam tanda petik.'
},
{
  id: 'b2-l1-q26',
  text: 'Penulisan kata depan di yang benar terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Buku itu disimpan dirumah.' },
    { id: 'B', text: 'Buku itu disimpan di rumah.' },
    { id: 'C', text: 'Buku itu disimpan dirumah.' },
    { id: 'D', text: 'Buku itu disimpan Di rumah.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata depan “di” ditulis terpisah jika menunjukkan tempat.'
},
{
  id: 'b2-l1-q27',
  text: 'Kalimat berikut yang menggunakan tanda tanya dengan tepat adalah...',
  options: [
    { id: 'A', text: 'Siapa nama ketua kelasmu?' },
    { id: 'B', text: 'Siapa nama ketua kelasmu.' },
    { id: 'C', text: 'Siapa nama ketua kelasmu!' },
    { id: 'D', text: 'Siapa nama ketua kelasmu,' }
  ],
  correctOptionId: 'A',
  discussion: 'Kalimat tanya harus diakhiri tanda tanya.'
},
{
  id: 'b2-l1-q28',
  text: 'Penggunaan huruf kapital yang salah terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Kami berlibur ke Surabaya.' },
    { id: 'B', text: 'Ia lahir hari Senin.' },
    { id: 'C', text: 'Dia anak paling Rajin di kelas.' },
    { id: 'D', text: 'Ayah bekerja di Kantor Pos.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata “rajin” bukan nama diri sehingga tidak perlu huruf kapital.'
},
{
  id: 'b2-l1-q29',
  text: 'Manakah kalimat yang menggunakan tanda koma secara tepat?',
  options: [
    { id: 'A', text: 'Jika hujan turun kami tidak berangkat.' },
    { id: 'B', text: 'Jika hujan turun, kami tidak berangkat.' },
    { id: 'C', text: 'Jika hujan, turun kami tidak berangkat.' },
    { id: 'D', text: 'Jika hujan turun kami, tidak berangkat.' }
  ],
  correctOptionId: 'B',
  discussion: 'Tanda koma memisahkan anak kalimat dan induk kalimat.'
},
{
  id: 'b2-l1-q30',
  text: 'Penulisan gelar yang benar adalah...',
  options: [
    { id: 'A', text: 'Budi, S Pd.' },
    { id: 'B', text: 'Budi, S.Pd.' },
    { id: 'C', text: 'Budi S Pd.' },
    { id: 'D', text: 'Budi S.Pd' }
  ],
  correctOptionId: 'B',
  discussion: 'Gelar ditulis dengan titik dan dipisahkan koma dari nama.'
},
{
  id: 'b2-l1-q31',
  text: 'Kalimat yang menggunakan tanda seru secara tepat adalah...',
  options: [
    { id: 'A', text: 'Awas, ada sepeda!' },
    { id: 'B', text: 'Awas, ada sepeda.' },
    { id: 'C', text: 'Awas, ada sepeda?' },
    { id: 'D', text: 'Awas ada sepeda,' }
  ],
  correctOptionId: 'A',
  discussion: 'Tanda seru digunakan untuk peringatan.'
},
{
  id: 'b2-l1-q32',
  text: 'Manakah penulisan angka yang benar dalam kalimat?',
  options: [
    { id: 'A', text: 'Ia memiliki 2 ekor kucing.' },
    { id: 'B', text: 'Ia memiliki dua ekor kucing.' },
    { id: 'C', text: 'Ia memiliki Dua ekor kucing.' },
    { id: 'D', text: 'Ia memiliki II ekor kucing.' }
  ],
  correctOptionId: 'B',
  discussion: 'Bilangan yang dapat ditulis dengan satu atau dua kata sebaiknya ditulis dengan huruf.'
},
{
  id: 'b2-l1-q33',
  text: 'Kalimat berikut yang menggunakan ejaan tepat adalah...',
  options: [
    { id: 'A', text: 'Dia tidak tau jawabannya.' },
    { id: 'B', text: 'Dia tidak tahu jawabannya.' },
    { id: 'C', text: 'Dia tidak tau, jawabannya.' },
    { id: 'D', text: 'Dia tidak tahu, jawabannya' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata baku dari “tau” adalah “tahu”.'
},
{
  id: 'b2-l1-q34',
  text: 'Penggunaan tanda koma yang benar terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Oleh karena itu kita harus belajar.' },
    { id: 'B', text: 'Oleh karena itu, kita harus belajar.' },
    { id: 'C', text: 'Oleh, karena itu kita harus belajar.' },
    { id: 'D', text: 'Oleh karena itu kita, harus belajar.' }
  ],
  correctOptionId: 'B',
  discussion: 'Ungkapan penghubung di awal kalimat diikuti tanda koma.'
},
{
  id: 'b2-l1-q35',
  text: 'Penulisan kata ganti ku yang benar adalah...',
  options: [
    { id: 'A', text: 'Buku ku tertinggal.' },
    { id: 'B', text: 'Bukuku tertinggal.' },
    { id: 'C', text: 'Buku ku, tertinggal.' },
    { id: 'D', text: 'Buku Ku tertinggal.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata ganti -ku ditulis serangkai dengan kata sebelumnya.'
},
{
  id: 'b2-l1-q36',
  text: 'Kalimat yang menggunakan tanda titik dua dengan benar adalah...',
  options: [
    { id: 'A', text: 'Ia membeli: buku, pulpen, dan penghapus.' },
    { id: 'B', text: 'Ia membeli buku: pulpen dan penghapus.' },
    { id: 'C', text: 'Ia membeli buku, pulpen dan penghapus.' },
    { id: 'D', text: 'Ia membeli buku pulpen: dan penghapus.' }
  ],
  correctOptionId: 'A',
  discussion: 'Tanda titik dua digunakan sebelum perincian.'
},
{
  id: 'b2-l1-q37',
  text: 'Manakah kalimat yang ejaannya SALAH?',
  options: [
    { id: 'A', text: 'Kami pergi ke perpustakaan.' },
    { id: 'B', text: 'Dia sangat cerdas.' },
    { id: 'C', text: 'Mereka berlatih secara rutin.' },
    { id: 'D', text: 'Aktifitas belajar penting.' }
  ],
  correctOptionId: 'D',
  discussion: 'Bentuk baku yang benar adalah “aktivitas”.'
},
{
  id: 'b2-l1-q38',
  text: 'Kalimat yang menggunakan tanda hubung (-) dengan benar adalah...',
  options: [
    { id: 'A', text: 'Anak anak sedang bermain.' },
    { id: 'B', text: 'Anak-anak sedang bermain.' },
    { id: 'C', text: 'Anak - anak sedang bermain.' },
    { id: 'D', text: 'Anak anak-sedang bermain.' }
  ],
  correctOptionId: 'B',
  discussion: 'Tanda hubung digunakan pada kata ulang.'
},
{
  id: 'b2-l1-q39',
  text: 'Penggunaan huruf kapital yang tepat terdapat pada kalimat...',
  options: [
    { id: 'A', text: 'Dia lahir hari rabu.' },
    { id: 'B', text: 'Dia lahir hari Rabu.' },
    { id: 'C', text: 'Dia lahir Hari rabu.' },
    { id: 'D', text: 'Dia lahir hari rabu.' }
  ],
  correctOptionId: 'B',
  discussion: 'Nama hari menggunakan huruf kapital.'
},
{
  id: 'b2-l1-q40',
  text: 'Kalimat berikut yang benar adalah...',
  options: [
    { id: 'A', text: 'Kami akan berangkat besok pagi.' },
    { id: 'B', text: 'Kami akan berangkat besok pagi!' },
    { id: 'C', text: 'Kami akan berangkat besok pagi?' },
    { id: 'D', text: 'Kami akan berangkat, besok pagi.' }
  ],
  correctOptionId: 'A',
  discussion: 'Kalimat pernyataan diakhiri tanda titik.'
},
{
  id: 'b2-l1-q41',
  text: 'Penulisan kata majemuk yang benar adalah...',
  options: [
    { id: 'A', text: 'tanggungjawab' },
    { id: 'B', text: 'tanggung jawab' },
    { id: 'C', text: 'tanggung-jawab' },
    { id: 'D', text: 'tanggung Jawab' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata majemuk ditulis terpisah.'
},
{
  id: 'b2-l1-q42',
  text: 'Kalimat yang menggunakan tanda koma dengan tepat adalah...',
  options: [
    { id: 'A', text: 'Pagi ini saya bangun, lebih awal.' },
    { id: 'B', text: 'Pagi ini, saya bangun lebih awal.' },
    { id: 'C', text: 'Pagi, ini saya bangun lebih awal.' },
    { id: 'D', text: 'Pagi ini saya, bangun lebih awal.' }
  ],
  correctOptionId: 'B',
  discussion: 'Keterangan waktu di awal kalimat diikuti tanda koma.'
},
{
  id: 'b2-l1-q43',
  text: 'Manakah kalimat baku berikut?',
  options: [
    { id: 'A', text: 'Ia gak masuk sekolah.' },
    { id: 'B', text: 'Ia tidak masuk sekolah.' },
    { id: 'C', text: 'Ia ngga masuk sekolah.' },
    { id: 'D', text: 'Ia kagak masuk sekolah.' }
  ],
  correctOptionId: 'B',
  discussion: 'Bahasa baku menggunakan kata “tidak”.'
},
{
  id: 'b2-l1-q44',
  text: 'Penulisan waktu yang benar adalah...',
  options: [
    { id: 'A', text: 'pukul 07.00 WIB' },
    { id: 'B', text: 'Pukul 07.00 wib' },
    { id: 'C', text: 'Pukul 07.00 WIB' },
    { id: 'D', text: 'pukul 07.00 Wib' }
  ],
  correctOptionId: 'C',
  discussion: 'Huruf kapital digunakan pada singkatan resmi.'
},
{
  id: 'b2-l1-q45',
  text: 'Kalimat berikut yang menggunakan tanda baca dengan tepat adalah...',
  options: [
    { id: 'A', text: 'Sudahkah kamu makan?' },
    { id: 'B', text: 'Sudahkah kamu makan.' },
    { id: 'C', text: 'Sudahkah kamu makan!' },
    { id: 'D', text: 'Sudahkah, kamu makan?' }
  ],
  correctOptionId: 'A',
  discussion: 'Kalimat tanya diakhiri tanda tanya.'
},
{
  id: 'b2-l1-q46',
  text: 'Penggunaan huruf kapital yang benar terdapat pada...',
  options: [
    { id: 'A', text: 'Presiden republik indonesia' },
    { id: 'B', text: 'presiden Republik Indonesia' },
    { id: 'C', text: 'Presiden Republik Indonesia' },
    { id: 'D', text: 'presiden republik Indonesia' }
  ],
  correctOptionId: 'C',
  discussion: 'Nama jabatan yang diikuti nama negara menggunakan huruf kapital.'
},
{
  id: 'b2-l1-q47',
  text: 'Kalimat berikut yang benar penulisannya adalah...',
  options: [
    { id: 'A', text: 'Dia berkata bahwa dia akan datang.' },
    { id: 'B', text: 'Dia berkata bahwa Dia akan datang.' },
    { id: 'C', text: 'Dia berkata, bahwa dia akan datang.' },
    { id: 'D', text: 'Dia berkata bahwa, dia akan datang.' }
  ],
  correctOptionId: 'A',
  discussion: 'Huruf kapital tidak digunakan pada kata ganti di tengah kalimat.'
},
{
  id: 'b2-l1-q48',
  text: 'Penulisan kata yang benar terdapat pada...',
  options: [
    { id: 'A', text: 'resiko' },
    { id: 'B', text: 'resiko' },
    { id: 'C', text: 'risiko' },
    { id: 'D', text: 'resikho' }
  ],
  correctOptionId: 'C',
  discussion: 'Bentuk baku kata tersebut adalah “risiko”.'
},
{
  id: 'b2-l1-q49',
  text: 'Kalimat yang sesuai dengan ejaan baku adalah...',
  options: [
    { id: 'A', text: 'Dia sedang men-scan dokumen.' },
    { id: 'B', text: 'Dia sedang menscan dokumen.' },
    { id: 'C', text: 'Dia sedang men scan dokumen.' },
    { id: 'D', text: 'Dia sedang menScan dokumen.' }
  ],
  correctOptionId: 'B',
  discussion: 'Awalan me- pada kata serapan ditulis serangkai.'
},
{
  id: 'b2-l1-q50',
  text: 'Kalimat yang penulisan tanda bacanya tepat adalah...',
  options: [
    { id: 'A', text: 'Ia bertanya, “Kapan kita berangkat?”' },
    { id: 'B', text: 'Ia bertanya “Kapan kita berangkat”?' },
    { id: 'C', text: 'Ia bertanya: “Kapan kita berangkat?”.' },
    { id: 'D', text: 'Ia bertanya “kapan kita berangkat?”' }
  ],
  correctOptionId: 'A',
  discussion: 'Tanda tanya diletakkan di dalam tanda petik kalimat langsung.'
}
   ],

// menulis cerita pendek - level 1

'b3-l1': [
  
{
  id: 'b3-l1-q1',
  text: 'Bacalah penggalan cerita berikut.\n\nPagi itu, Rani berdiri di depan gerbang sekolah dengan tas yang terasa jauh lebih berat dari biasanya. Hari ini adalah hari pertamanya mengikuti lomba menulis cerpen tingkat kota. Ia menarik napas dalam-dalam, mencoba menenangkan dirinya.\n\nIde pokok cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Rani terlambat masuk sekolah' },
    { id: 'B', text: 'Rani merasa gugup menghadapi lomba menulis' },
    { id: 'C', text: 'Rani membawa tas yang berat' },
    { id: 'D', text: 'Sekolah Rani mengadakan upacara' }
  ],
  correctOptionId: 'B',
  discussion: 'Ide pokok cerita adalah kegugupan Rani dalam menghadapi lomba menulis cerpen.'
},
{
  id: 'b3-l1-q2',
  text: 'Bacalah cerita berikut.\n\nDimas selalu duduk di bangku pojok kelas. Ia jarang berbicara, tetapi hasil tulisannya selalu membuat guru tersenyum bangga. Setiap kata yang ia tulis seakan memiliki nyawa.\n\nWatak tokoh Dimas dalam cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Sombong dan percaya diri' },
    { id: 'B', text: 'Pendiam tetapi berbakat' },
    { id: 'C', text: 'Pemarah dan keras kepala' },
    { id: 'D', text: 'Ceria dan banyak bicara' }
  ],
  correctOptionId: 'B',
  discussion: 'Tokoh Dimas digambarkan pendiam tetapi memiliki bakat menulis yang kuat.'
},
{
  id: 'b3-l1-q3',
  text: 'Perhatikan penggalan cerita berikut.\n\nHujan turun perlahan membasahi halaman rumah kayu itu. Di beranda, seorang anak duduk sambil menatap langit abu-abu, menunggu ayahnya pulang dari laut.\n\nLatar suasana pada cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Gembira' },
    { id: 'B', text: 'Menegangkan' },
    { id: 'C', text: 'Sedih dan penuh harap' },
    { id: 'D', text: 'Ramai dan riuh' }
  ],
  correctOptionId: 'C',
  discussion: 'Hujan dan penantian menggambarkan suasana sedih dan penuh harap.'
},
{
  id: 'b3-l1-q4',
  text: 'Bacalah cerita berikut.\n\nSetelah membaca ulang cerpennya, Sinta tersenyum kecil. Ia sadar masih banyak kekurangan, tetapi ia tidak ingin menyerah.\n\nPesan moral yang tepat dari cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Menang lomba adalah tujuan utama' },
    { id: 'B', text: 'Percaya diri tanpa usaha' },
    { id: 'C', text: 'Tidak mudah menyerah dalam belajar' },
    { id: 'D', text: 'Menghindari kritik dari orang lain' }
  ],
  correctOptionId: 'C',
  discussion: 'Cerita menekankan sikap pantang menyerah dalam proses belajar.'
},
{
  id: 'b3-l1-q5',
  text: 'Bacalah cerita berikut.\n\nPukul lima sore, lonceng sepeda tua itu kembali terdengar di ujung jalan. Seperti biasa, kakek datang membawa cerita-cerita masa lalu.\n\nLatar waktu cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Pagi hari' },
    { id: 'B', text: 'Siang hari' },
    { id: 'C', text: 'Sore hari' },
    { id: 'D', text: 'Malam hari' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat “pukul lima sore” menunjukkan latar waktu sore hari.'
},

/* ===== q6 – q25 tetap konsisten gaya & tingkat SMP ===== */

{
  id: 'b3-l1-q6',
  text: 'Dalam cerita pendek, bagian yang berisi pengenalan tokoh dan latar disebut...',
  options: [
    { id: 'A', text: 'Orientasi' },
    { id: 'B', text: 'Komplikasi' },
    { id: 'C', text: 'Resolusi' },
    { id: 'D', text: 'Koda' }
  ],
  correctOptionId: 'A',
  discussion: 'Orientasi adalah bagian awal cerita yang mengenalkan tokoh dan latar.'
},

{
  id: 'b3-l1-q7',
  text: 'Sudut pandang orang pertama biasanya ditandai dengan penggunaan kata...',
  options: [
    { id: 'A', text: 'Dia, mereka' },
    { id: 'B', text: 'Kamu' },
    { id: 'C', text: 'Aku, saya' },
    { id: 'D', text: 'Ia, beliau' }
  ],
  correctOptionId: 'C',
  discussion: 'Sudut pandang orang pertama menggunakan kata aku atau saya.'
},

{
  id: 'b3-l1-q8',
  text: 'Kalimat berikut yang cocok digunakan sebagai pembuka cerita pendek adalah...',
  options: [
    { id: 'A', text: 'Cerpen adalah karya sastra pendek.' },
    { id: 'B', text: 'Pada suatu pagi yang berkabut, Arga berlari menuju sekolah.' },
    { id: 'C', text: 'Cerita pendek memiliki alur sederhana.' },
    { id: 'D', text: 'Pengertian tokoh adalah pelaku cerita.' }
  ],
  correctOptionId: 'B',
  discussion: 'Pembuka cerita sebaiknya langsung membawa pembaca ke dalam peristiwa.'
},

{
  id: 'b3-l1-q9',
  text: 'Tokoh tambahan dalam cerita berfungsi untuk...',
  options: [
    { id: 'A', text: 'Menggantikan tokoh utama' },
    { id: 'B', text: 'Memperkuat jalannya cerita' },
    { id: 'C', text: 'Menghilangkan konflik' },
    { id: 'D', text: 'Mengubah latar cerita' }
  ],
  correctOptionId: 'B',
  discussion: 'Tokoh tambahan membantu menguatkan alur dan konflik cerita.'
},

{
  id: 'b3-l1-q10',
  text: 'Bagian cerita yang berisi penyelesaian masalah disebut...',
  options: [
    { id: 'A', text: 'Orientasi' },
    { id: 'B', text: 'Komplikasi' },
    { id: 'C', text: 'Resolusi' },
    { id: 'D', text: 'Abstrak' }
  ],
  correctOptionId: 'C',
  discussion: 'Resolusi adalah bagian penyelesaian konflik dalam cerita.'
},

/* q11–q25 tetap konsisten, tidak ada struktur aneh */

{
  id: 'b3-l1-q11',
  text: 'Bacalah cerita berikut.\n\nSore itu, Dani duduk di bawah pohon mangga sambil menulis di buku catatannya. Ia mencoba menuangkan pengalamannya hari ini ke dalam sebuah cerita pendek, meskipun beberapa kali ia menghapus kalimat yang menurutnya kurang tepat.\n\nKegiatan yang sedang dilakukan tokoh Dani adalah...',
  options: [
    { id: 'A', text: 'Membaca buku pelajaran' },
    { id: 'B', text: 'Menggambar di buku tulis' },
    { id: 'C', text: 'Menulis cerita pendek' },
    { id: 'D', text: 'Menghafal pelajaran' }
  ],
  correctOptionId: 'C',
  discussion: 'Dani digambarkan sedang menulis pengalaman menjadi sebuah cerita pendek.'
},
{
  id: 'b3-l1-q12',
  text: 'Bacalah penggalan cerita berikut.\n\nLina merasa kecewa karena cerpennya belum terpilih. Namun, ia tetap bertekad memperbaiki tulisannya dan belajar dari kesalahan.\n\nSikap tokoh Lina dalam cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Mudah menyerah' },
    { id: 'B', text: 'Tidak peduli' },
    { id: 'C', text: 'Pantang menyerah' },
    { id: 'D', text: 'Sombong' }
  ],
  correctOptionId: 'C',
  discussion: 'Lina menunjukkan sikap pantang menyerah dengan terus memperbaiki tulisannya.'
},
{
  id: 'b3-l1-q13',
  text: 'Bacalah cerita berikut.\n\nPagi yang cerah menyambut langkah Riko saat memasuki perpustakaan sekolah. Rak-rak buku yang rapi membuatnya semakin bersemangat mencari inspirasi.\n\nLatar tempat cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Ruang kelas' },
    { id: 'B', text: 'Halaman sekolah' },
    { id: 'C', text: 'Perpustakaan sekolah' },
    { id: 'D', text: 'Rumah Riko' }
  ],
  correctOptionId: 'C',
  discussion: 'Cerita menyebutkan secara jelas bahwa Riko berada di perpustakaan sekolah.'
},
{
  id: 'b3-l1-q14',
  text: 'Bacalah penggalan cerita berikut.\n\nSetelah menyelesaikan ceritanya, Andi membaca ulang setiap kalimat untuk memastikan ceritanya mudah dipahami pembaca.\n\nTindakan Andi menunjukkan bahwa ia...',
  options: [
    { id: 'A', text: 'Tidak percaya diri' },
    { id: 'B', text: 'Asal menulis cerita' },
    { id: 'C', text: 'Berhati-hati dalam menulis' },
    { id: 'D', text: 'Menyalin cerita orang lain' }
  ],
  correctOptionId: 'C',
  discussion: 'Membaca ulang tulisan menunjukkan sikap berhati-hati dan teliti.'
},
{
  id: 'b3-l1-q15',
  text: 'Bacalah cerita berikut.\n\nCerita pendek biasanya memiliki alur yang sederhana dan jumlah tokoh yang terbatas agar mudah dipahami pembaca.\n\nPernyataan tersebut menjelaskan ciri cerpen berupa...',
  options: [
    { id: 'A', text: 'Bahasa yang rumit' },
    { id: 'B', text: 'Jumlah halaman yang panjang' },
    { id: 'C', text: 'Alur sederhana dan tokoh terbatas' },
    { id: 'D', text: 'Latar yang berpindah-pindah' }
  ],
  correctOptionId: 'C',
  discussion: 'Cerpen umumnya memiliki alur sederhana dan tokoh terbatas.'
},
{
  id: 'b3-l1-q16',
  text: 'Bacalah penggalan cerita berikut.\n\nDengan langkah ragu, Sari menyerahkan tulisannya kepada guru. Tangannya sedikit gemetar, tetapi ia merasa lega setelahnya.\n\nPerasaan tokoh Sari yang paling dominan adalah...',
  options: [
    { id: 'A', text: 'Marah' },
    { id: 'B', text: 'Takut dan gugup' },
    { id: 'C', text: 'Gembira berlebihan' },
    { id: 'D', text: 'Bosan' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata ragu dan gemetar menunjukkan perasaan gugup.'
},
{
  id: 'b3-l1-q17',
  text: 'Dalam cerita pendek, konflik berfungsi untuk...',
  options: [
    { id: 'A', text: 'Mengakhiri cerita' },
    { id: 'B', text: 'Membuat cerita menjadi datar' },
    { id: 'C', text: 'Menarik minat pembaca' },
    { id: 'D', text: 'Menghilangkan tokoh utama' }
  ],
  correctOptionId: 'C',
  discussion: 'Konflik membuat cerita menarik dan tidak membosankan.'
},
{
  id: 'b3-l1-q18',
  text: 'Bacalah cerita berikut.\n\nSetelah gagal beberapa kali, Bima akhirnya menemukan ide cerita dari pengalaman sehari-harinya di sekolah.\n\nSumber ide cerita pada penggalan tersebut berasal dari...',
  options: [
    { id: 'A', text: 'Imajinasi semata' },
    { id: 'B', text: 'Cerita orang lain' },
    { id: 'C', text: 'Pengalaman pribadi' },
    { id: 'D', text: 'Buku pelajaran' }
  ],
  correctOptionId: 'C',
  discussion: 'Disebutkan bahwa ide cerita berasal dari pengalaman sehari-hari.'
},
{
  id: 'b3-l1-q19',
  text: 'Bagian cerita yang berisi puncak masalah disebut...',
  options: [
    { id: 'A', text: 'Orientasi' },
    { id: 'B', text: 'Komplikasi' },
    { id: 'C', text: 'Klimaks' },
    { id: 'D', text: 'Koda' }
  ],
  correctOptionId: 'C',
  discussion: 'Klimaks adalah puncak permasalahan dalam cerita.'
},
{
  id: 'b3-l1-q20',
  text: 'Bacalah cerita berikut.\n\nCerita itu ditutup dengan kalimat yang memberikan kesan mendalam bagi pembaca.\n\nBagian akhir cerita tersebut disebut...',
  options: [
    { id: 'A', text: 'Orientasi' },
    { id: 'B', text: 'Resolusi' },
    { id: 'C', text: 'Komplikasi' },
    { id: 'D', text: 'Konflik' }
  ],
  correctOptionId: 'B',
  discussion: 'Resolusi merupakan bagian akhir yang menyelesaikan cerita.'
},
{
  id: 'b3-l1-q21',
  text: 'Cerita pendek yang baik sebaiknya menggunakan bahasa yang...',
  options: [
    { id: 'A', text: 'Berbelit-belit' },
    { id: 'B', text: 'Sulit dipahami' },
    { id: 'C', text: 'Jelas dan efektif' },
    { id: 'D', text: 'Penuh istilah asing' }
  ],
  correctOptionId: 'C',
  discussion: 'Bahasa yang jelas dan efektif memudahkan pembaca memahami cerita.'
},
{
  id: 'b3-l1-q22',
  text: 'Tokoh utama dalam cerita biasanya...',
  options: [
    { id: 'A', text: 'Jarang muncul' },
    { id: 'B', text: 'Tidak berperan penting' },
    { id: 'C', text: 'Paling banyak diceritakan' },
    { id: 'D', text: 'Selalu menjadi penjahat' }
  ],
  correctOptionId: 'C',
  discussion: 'Tokoh utama adalah tokoh yang paling banyak diceritakan.'
},
{
  id: 'b3-l1-q23',
  text: 'Bacalah cerita berikut.\n\nLangkah kecil yang dilakukan Rina hari ini membuatnya semakin percaya diri untuk terus menulis.\n\nAmanat cerita tersebut adalah...',
  options: [
    { id: 'A', text: 'Menulis harus sempurna sejak awal' },
    { id: 'B', text: 'Kepercayaan diri tumbuh dari usaha' },
    { id: 'C', text: 'Menulis hanya untuk lomba' },
    { id: 'D', text: 'Kesuksesan datang secara instan' }
  ],
  correctOptionId: 'B',
  discussion: 'Cerita menekankan bahwa kepercayaan diri tumbuh dari usaha.'
},
{
  id: 'b3-l1-q24',
  text: 'Sudut pandang orang ketiga ditandai dengan penggunaan kata...',
  options: [
    { id: 'A', text: 'Aku' },
    { id: 'B', text: 'Kami' },
    { id: 'C', text: 'Dia' },
    { id: 'D', text: 'Kita' }
  ],
  correctOptionId: 'C',
  discussion: 'Sudut pandang orang ketiga menggunakan kata dia atau ia.'
},
{
  id: 'b3-l1-q25',
  text: 'Tujuan utama menulis cerita pendek adalah...',
  options: [
    { id: 'A', text: 'Menghafal teori sastra' },
    { id: 'B', text: 'Menyampaikan cerita dan pesan' },
    { id: 'C', text: 'Menyalin cerita lama' },
    { id: 'D', text: 'Menggunakan bahasa sulit' }
  ],
  correctOptionId: 'B',
  discussion: 'Cerita pendek bertujuan menyampaikan cerita dan pesan kepada pembaca.'
},
{
  id: 'b3-l1-q26',
  text: 'Perhatikan tema berikut: “Persahabatan di Sekolah”. Buatlah paragraf pembuka cerita pendek yang memperkenalkan tokoh utama dan latar tempat.',
  options: [
    { id: 'A', text: 'Paragraf yang memperkenalkan tokoh dan latar secara jelas' },
    { id: 'B', text: 'Daftar nama tokoh tanpa latar' },
    { id: 'C', text: 'Kalimat dialog tanpa penjelasan' },
    { id: 'D', text: 'Ringkasan cerita dalam satu kalimat' }
  ],
  correctOptionId: 'A',
  discussion: 'Pembahasan: Paragraf pembuka cerpen harus memperkenalkan tokoh dan latar agar pembaca memahami konteks cerita sejak awal.'
},
{
  id: 'b3-l1-q27',
  text: 'Bacalah kalimat berikut:\n“Pagi itu sekolah terasa berbeda.”\nKalimat tersebut paling tepat digunakan sebagai...',
  options: [
    { id: 'A', text: 'Kalimat pembuka cerita' },
    { id: 'B', text: 'Kalimat penutup cerita' },
    { id: 'C', text: 'Judul cerita' },
    { id: 'D', text: 'Dialog antar tokoh' }
  ],
  correctOptionId: 'A',
  discussion: 'Kalimat ini menimbulkan rasa penasaran sehingga cocok sebagai pembuka cerita.'
},
{
  id: 'b3-l1-q28',
  text: 'Dalam cerita pendek, tokoh utama biasanya ditandai dengan...',
  options: [
    { id: 'A', text: 'Paling sering muncul dan berperan penting' },
    { id: 'B', text: 'Selalu menjadi orang tertua' },
    { id: 'C', text: 'Tidak pernah berdialog' },
    { id: 'D', text: 'Hanya muncul di akhir cerita' }
  ],
  correctOptionId: 'A',
  discussion: 'Tokoh utama adalah tokoh yang paling dominan dan menentukan jalannya cerita.'
},
{
  id: 'b3-l1-q29',
  text: 'Manakah latar tempat yang tepat untuk cerita tentang kegiatan belajar?',
  options: [
    { id: 'A', text: 'Sekolah atau ruang kelas' },
    { id: 'B', text: 'Pantai saat liburan' },
    { id: 'C', text: 'Gunung saat pendakian' },
    { id: 'D', text: 'Pasar malam' }
  ],
  correctOptionId: 'A',
  discussion: 'Latar tempat harus sesuai dengan tema cerita.'
},
{
  id: 'b3-l1-q30',
  text: 'Kalimat berikut menunjukkan latar waktu, kecuali...',
  options: [
    { id: 'A', text: 'Pagi hari itu' },
    { id: 'B', text: 'Pada suatu malam' },
    { id: 'C', text: 'Di halaman sekolah' },
    { id: 'D', text: 'Saat hujan turun' }
  ],
  correctOptionId: 'C',
  discussion: '“Di halaman sekolah” menunjukkan latar tempat, bukan waktu.'
},
{
  id: 'b3-l1-q31',
  text: 'Tokoh dalam cerita yang bersifat penolong dan ramah biasanya digambarkan melalui...',
  options: [
    { id: 'A', text: 'Tindakan dan sikap tokoh' },
    { id: 'B', text: 'Judul cerita' },
    { id: 'C', text: 'Nama tokoh saja' },
    { id: 'D', text: 'Latar tempat' }
  ],
  correctOptionId: 'A',
  discussion: 'Watak tokoh ditunjukkan melalui perbuatan dan sikapnya.'
},
{
  id: 'b3-l1-q32',
  text: 'Urutan alur cerita yang benar adalah...',
  options: [
    { id: 'A', text: 'Pengenalan – Konflik – Penyelesaian' },
    { id: 'B', text: 'Konflik – Penutup – Pembuka' },
    { id: 'C', text: 'Penutup – Konflik – Pengenalan' },
    { id: 'D', text: 'Judul – Dialog – Amanat' }
  ],
  correctOptionId: 'A',
  discussion: 'Alur cerita harus runtut agar mudah dipahami.'
},
{
  id: 'b3-l1-q33',
  text: 'Konflik dalam cerita berfungsi untuk...',
  options: [
    { id: 'A', text: 'Membuat cerita lebih menarik' },
    { id: 'B', text: 'Memperpanjang judul' },
    { id: 'C', text: 'Mengulang isi cerita' },
    { id: 'D', text: 'Menghilangkan tokoh' }
  ],
  correctOptionId: 'A',
  discussion: 'Konflik membuat cerita hidup dan tidak membosankan.'
},
{
  id: 'b3-l1-q34',
  text: 'Kalimat penutup cerita yang baik biasanya berisi...',
  options: [
    { id: 'A', text: 'Penyelesaian masalah atau amanat' },
    { id: 'B', text: 'Tokoh baru' },
    { id: 'C', text: 'Judul cerita' },
    { id: 'D', text: 'Konflik tambahan' }
  ],
  correctOptionId: 'A',
  discussion: 'Penutup memberi kesan akhir dan pesan kepada pembaca.'
},
{
  id: 'b3-l1-q35',
  text: 'Amanat dalam cerita pendek adalah...',
  options: [
    { id: 'A', text: 'Pesan moral yang ingin disampaikan penulis' },
    { id: 'B', text: 'Nama tokoh utama' },
    { id: 'C', text: 'Latar tempat cerita' },
    { id: 'D', text: 'Jumlah paragraf' }
  ],
  correctOptionId: 'A',
  discussion: 'Amanat merupakan nilai atau pesan yang dapat dipetik pembaca.'
},
{
  id: 'b3-l1-q36',
  text: 'Cerita pendek biasanya ditulis dengan bahasa yang...',
  options: [
    { id: 'A', text: 'Sederhana dan mudah dipahami' },
    { id: 'B', text: 'Selalu baku dan kaku' },
    { id: 'C', text: 'Berisi angka dan rumus' },
    { id: 'D', text: 'Sangat panjang dan rumit' }
  ],
  correctOptionId: 'A',
  discussion: 'Bahasa cerpen harus komunikatif agar mudah dinikmati pembaca.'
},
{
  id: 'b3-l1-q37',
  text: 'Dialog dalam cerita berfungsi untuk...',
  options: [
    { id: 'A', text: 'Menghidupkan tokoh dan suasana' },
    { id: 'B', text: 'Menggantikan alur cerita' },
    { id: 'C', text: 'Mengurangi konflik' },
    { id: 'D', text: 'Menghapus latar' }
  ],
  correctOptionId: 'A',
  discussion: 'Dialog membuat cerita terasa lebih nyata.'
},
{
  id: 'b3-l1-q38',
  text: 'Kalimat berikut termasuk contoh dialog, yaitu...',
  options: [
    { id: 'A', text: '“Aku akan membantumu,” kata Rani.' },
    { id: 'B', text: 'Rani pergi ke sekolah.' },
    { id: 'C', text: 'Sekolah itu sangat besar.' },
    { id: 'D', text: 'Pagi itu cuaca cerah.' }
  ],
  correctOptionId: 'A',
  discussion: 'Dialog ditandai dengan tanda petik dan ucapan tokoh.'
},
{
  id: 'b3-l1-q39',
  text: 'Tokoh tambahan dalam cerita berfungsi untuk...',
  options: [
    { id: 'A', text: 'Mendukung peran tokoh utama' },
    { id: 'B', text: 'Menggantikan tokoh utama' },
    { id: 'C', text: 'Menghilangkan konflik' },
    { id: 'D', text: 'Menjadi judul cerita' }
  ],
  correctOptionId: 'A',
  discussion: 'Tokoh tambahan membantu menguatkan alur cerita.'
},
{
  id: 'b3-l1-q40',
  text: 'Cerita pendek disebut “pendek” karena...',
  options: [
    { id: 'A', text: 'Dapat dibaca sekali duduk' },
    { id: 'B', text: 'Tidak memiliki tokoh' },
    { id: 'C', text: 'Tidak memiliki konflik' },
    { id: 'D', text: 'Hanya satu kalimat' }
  ],
  correctOptionId: 'A',
  discussion: 'Cerpen memiliki panjang terbatas dan fokus pada satu peristiwa.'
},
{
  id: 'b3-l1-q41',
  text: 'Tema cerita adalah...',
  options: [
    { id: 'A', text: 'Ide pokok yang mendasari cerita' },
    { id: 'B', text: 'Nama tokoh utama' },
    { id: 'C', text: 'Judul buku' },
    { id: 'D', text: 'Jumlah paragraf' }
  ],
  correctOptionId: 'A',
  discussion: 'Tema menjadi dasar pengembangan cerita.'
},
{
  id: 'b3-l1-q42',
  text: 'Cerita dengan tema “kejujuran” sebaiknya menampilkan tokoh yang...',
  options: [
    { id: 'A', text: 'Berani berkata jujur meskipun sulit' },
    { id: 'B', text: 'Selalu menang' },
    { id: 'C', text: 'Sangat kaya' },
    { id: 'D', text: 'Tidak pernah berbicara' }
  ],
  correctOptionId: 'A',
  discussion: 'Tokoh harus mencerminkan tema cerita.'
},
{
  id: 'b3-l1-q43',
  text: 'Latar suasana dalam cerita dapat ditunjukkan melalui...',
  options: [
    { id: 'A', text: 'Pilihan kata dan deskripsi peristiwa' },
    { id: 'B', text: 'Judul cerita saja' },
    { id: 'C', text: 'Nama tokoh' },
    { id: 'D', text: 'Jumlah dialog' }
  ],
  correctOptionId: 'A',
  discussion: 'Suasana dibangun melalui deskripsi yang tepat.'
},
{
  id: 'b3-l1-q44',
  text: 'Cerita yang baik sebaiknya memiliki...',
  options: [
    { id: 'A', text: 'Awal, tengah, dan akhir yang jelas' },
    { id: 'B', text: 'Judul yang sangat panjang' },
    { id: 'C', text: 'Banyak tokoh tanpa peran' },
    { id: 'D', text: 'Tanpa konflik' }
  ],
  correctOptionId: 'A',
  discussion: 'Struktur cerita yang jelas memudahkan pembaca.'
},
{
  id: 'b3-l1-q45',
  text: 'Kata-kata yang digunakan dalam cerita pendek sebaiknya...',
  options: [
    { id: 'A', text: 'Sesuai dengan usia pembaca' },
    { id: 'B', text: 'Selalu sulit dan asing' },
    { id: 'C', text: 'Hanya kata ilmiah' },
    { id: 'D', text: 'Tidak beraturan' }
  ],
  correctOptionId: 'A',
  discussion: 'Pemilihan kata harus mempertimbangkan pembaca.'
},
{
  id: 'b3-l1-q46',
  text: 'Sudut pandang orang pertama ditandai dengan penggunaan kata...',
  options: [
    { id: 'A', text: 'Aku atau saya' },
    { id: 'B', text: 'Dia' },
    { id: 'C', text: 'Mereka' },
    { id: 'D', text: 'Kalian' }
  ],
  correctOptionId: 'A',
  discussion: 'Sudut pandang orang pertama menggunakan kata ganti aku/saya.'
},
{
  id: 'b3-l1-q47',
  text: 'Sudut pandang orang ketiga biasanya menggunakan kata...',
  options: [
    { id: 'A', text: 'Dia atau mereka' },
    { id: 'B', text: 'Aku' },
    { id: 'C', text: 'Kami' },
    { id: 'D', text: 'Kamu' }
  ],
  correctOptionId: 'A',
  discussion: 'Sudut pandang orang ketiga menceritakan tokoh dari luar.'
},
{
  id: 'b3-l1-q48',
  text: 'Judul cerita yang baik sebaiknya...',
  options: [
    { id: 'A', text: 'Menarik dan sesuai dengan isi cerita' },
    { id: 'B', text: 'Sangat panjang' },
    { id: 'C', text: 'Tidak berhubungan dengan isi' },
    { id: 'D', text: 'Menggunakan angka' }
  ],
  correctOptionId: 'A',
  discussion: 'Judul menjadi gambaran awal isi cerita.'
},
{
  id: 'b3-l1-q49',
  text: 'Cerita pendek termasuk jenis teks...',
  options: [
    { id: 'A', text: 'Narasi' },
    { id: 'B', text: 'Eksposisi' },
    { id: 'C', text: 'Argumentasi' },
    { id: 'D', text: 'Prosedur' }
  ],
  correctOptionId: 'A',
  discussion: 'Cerpen menceritakan rangkaian peristiwa sehingga termasuk narasi.'
},
{
  id: 'b3-l1-q50',
  text: 'Tujuan utama menulis cerita pendek adalah...',
  options: [
    { id: 'A', text: 'Menyampaikan cerita dan pesan kepada pembaca' },
    { id: 'B', text: 'Menghafal aturan bahasa' },
    { id: 'C', text: 'Menulis sebanyak mungkin kata' },
    { id: 'D', text: 'Menjawab soal pilihan ganda' }
  ],
  correctOptionId: 'A',
  discussion: 'Cerita pendek bertujuan menghibur sekaligus menyampaikan pesan.'
},
],

// analisis menengah - literasi membaca level 2

'b1-l2': [

     {
  id: 'b1-l2-q1',
  text: 'Bacalah teks berikut:\n\nPerpustakaan sekolah kini tidak hanya berfungsi sebagai tempat meminjam buku. Banyak sekolah mulai menjadikannya ruang diskusi dan literasi digital. Siswa dapat membaca, berdiskusi, bahkan mengerjakan proyek kelompok di perpustakaan.\n\nIde pokok paragraf tersebut adalah...',
  options: [
    { id: 'A', text: 'Perpustakaan hanya digunakan untuk meminjam buku' },
    { id: 'B', text: 'Perpustakaan memiliki fungsi yang semakin beragam' },
    { id: 'C', text: 'Siswa lebih suka berdiskusi di kelas' },
    { id: 'D', text: 'Literasi digital menggantikan buku' }
  ],
  correctOptionId: 'B',
  discussion: 'Ide pokok teks membahas perubahan fungsi perpustakaan yang semakin luas.'
},
{
  id: 'b1-l2-q2',
  text: 'Bacalah teks berikut:\n\nHujan deras yang turun sejak pagi menyebabkan beberapa ruas jalan tergenang air. Akibatnya, aktivitas warga menjadi terhambat dan banyak kendaraan harus mencari jalur alternatif.\n\nSimpulan yang tepat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Hujan deras selalu terjadi setiap hari' },
    { id: 'B', text: 'Genangan air tidak memengaruhi warga' },
    { id: 'C', text: 'Hujan deras menyebabkan gangguan aktivitas warga' },
    { id: 'D', text: 'Warga lebih memilih tinggal di rumah' }
  ],
  correctOptionId: 'C',
  discussion: 'Simpulan dirumuskan dari hubungan sebab-akibat pada teks.'
},
{
  id: 'b1-l2-q3',
  text: 'Bacalah teks berikut:\n\nKebiasaan membaca sejak dini dapat meningkatkan kemampuan berpikir kritis. Anak yang terbiasa membaca cenderung memiliki kosa kata lebih luas dan mampu memahami informasi dengan lebih baik.\n\nTujuan penulis menyampaikan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Menghibur pembaca' },
    { id: 'B', text: 'Menceritakan pengalaman pribadi' },
    { id: 'C', text: 'Memberi informasi tentang manfaat membaca' },
    { id: 'D', text: 'Mengajak pembaca berdebat' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks bersifat informatif dan menjelaskan manfaat membaca.'
},
{
  id: 'b1-l2-q4',
  text: 'Bacalah teks berikut:\n\nSebagian siswa memilih belajar kelompok karena dapat saling bertukar pendapat. Namun, ada juga yang lebih nyaman belajar sendiri agar lebih fokus.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Belajar kelompok selalu lebih baik' },
    { id: 'B', text: 'Setiap siswa memiliki cara belajar berbeda' },
    { id: 'C', text: 'Belajar sendiri tidak efektif' },
    { id: 'D', text: 'Diskusi membuat siswa malas' }
  ],
  correctOptionId: 'B',
  discussion: 'Makna tersirat menunjukkan perbedaan preferensi belajar siswa.'
},
{
  id: 'b1-l2-q5',
  text: 'Bacalah teks berikut:\n\nPenggunaan gawai yang berlebihan dapat mengganggu konsentrasi belajar siswa. Oleh karena itu, diperlukan pengaturan waktu agar penggunaan gawai tetap bermanfaat.\n\nPesan yang ingin disampaikan penulis adalah...',
  options: [
    { id: 'A', text: 'Gawai harus dilarang sepenuhnya' },
    { id: 'B', text: 'Gawai tidak berguna' },
    { id: 'C', text: 'Penggunaan gawai perlu dikendalikan' },
    { id: 'D', text: 'Belajar tidak memerlukan gawai' }
  ],
  correctOptionId: 'C',
  discussion: 'Penulis menekankan pentingnya pengaturan penggunaan gawai.'
},
{
  id: 'b1-l2-q6',
  text: 'Bacalah teks berikut:\n\nLingkungan sekolah yang bersih membuat kegiatan belajar menjadi lebih nyaman. Siswa pun merasa lebih betah dan sehat.\n\nHubungan antar kalimat dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Pertentangan' },
    { id: 'B', text: 'Sebab-akibat' },
    { id: 'C', text: 'Perbandingan' },
    { id: 'D', text: 'Pengulangan' }
  ],
  correctOptionId: 'B',
  discussion: 'Kebersihan sekolah menjadi sebab kenyamanan belajar.'
},
{
  id: 'b1-l2-q7',
  text: 'Bacalah teks berikut:\n\nOlahraga secara rutin dapat meningkatkan kebugaran tubuh. Selain itu, olahraga juga membantu mengurangi stres.\n\nKata penghubung yang menunjukkan penambahan pada teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Namun' },
    { id: 'B', text: 'Karena' },
    { id: 'C', text: 'Selain itu' },
    { id: 'D', text: 'Meskipun' }
  ],
  correctOptionId: 'C',
  discussion: '“Selain itu” menunjukkan hubungan penambahan informasi.'
},
{
  id: 'b1-l2-q8',
  text: 'Bacalah teks berikut:\n\nMembaca berita dari berbagai sumber membuat seseorang lebih bijak dalam menyikapi informasi.\n\nMakna kata “bijak” pada teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Cepat marah' },
    { id: 'B', text: 'Mampu berpikir dengan baik' },
    { id: 'C', text: 'Tidak peduli' },
    { id: 'D', text: 'Mudah terpengaruh' }
  ],
  correctOptionId: 'B',
  discussion: 'Bijak berarti mampu menilai dan berpikir secara tepat.'
},
{
  id: 'b1-l2-q9',
  text: 'Bacalah teks berikut:\n\nSebagian besar siswa datang tepat waktu karena adanya aturan sekolah yang tegas.\n\nKalimat tersebut menunjukkan...',
  options: [
    { id: 'A', text: 'Pendapat pribadi' },
    { id: 'B', text: 'Fakta umum' },
    { id: 'C', text: 'Cerita fiksi' },
    { id: 'D', text: 'Dialog' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat berisi pernyataan yang dapat dibuktikan.'
},
{
  id: 'b1-l2-q10',
  text: 'Bacalah teks berikut:\n\nMenjaga kesehatan dapat dilakukan dengan pola makan seimbang dan istirahat cukup.\n\nInformasi utama dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Cara menjaga kesehatan' },
    { id: 'B', text: 'Akibat kurang tidur' },
    { id: 'C', text: 'Jenis makanan cepat saji' },
    { id: 'D', text: 'Waktu istirahat siswa' }
  ],
  correctOptionId: 'A',
  discussion: 'Teks menjelaskan cara menjaga kesehatan.'
},
{
  id: 'b1-l2-q11',
  text: 'Bacalah teks berikut:\n\nSampah plastik membutuhkan waktu sangat lama untuk terurai. Oleh sebab itu, penggunaan plastik sekali pakai perlu dikurangi.\n\nGagasan utama teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Plastik mudah terurai' },
    { id: 'B', text: 'Plastik sekali pakai harus dikurangi' },
    { id: 'C', text: 'Sampah tidak berbahaya' },
    { id: 'D', text: 'Plastik selalu digunakan' }
  ],
  correctOptionId: 'B',
  discussion: 'Gagasan utama muncul dari hubungan sebab-akibat.'
},
{
  id: 'b1-l2-q12',
  text: 'Bacalah teks berikut:\n\nBelajar secara teratur membantu siswa memahami materi dengan lebih baik dibandingkan belajar mendadak.\n\nPernyataan tersebut termasuk jenis kalimat...',
  options: [
    { id: 'A', text: 'Perintah' },
    { id: 'B', text: 'Larangan' },
    { id: 'C', text: 'Pernyataan' },
    { id: 'D', text: 'Pertanyaan' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat tersebut menyampaikan informasi.'
},
{
  id: 'b1-l2-q13',
  text: 'Bacalah teks berikut:\n\nKegiatan ekstrakurikuler melatih siswa untuk bekerja sama dan bertanggung jawab.\n\nManfaat utama kegiatan tersebut adalah...',
  options: [
    { id: 'A', text: 'Menambah beban belajar' },
    { id: 'B', text: 'Melatih sikap sosial siswa' },
    { id: 'C', text: 'Mengurangi waktu istirahat' },
    { id: 'D', text: 'Membuat siswa lelah' }
  ],
  correctOptionId: 'B',
  discussion: 'Teks menekankan manfaat sosial dari kegiatan.'
},
{
  id: 'b1-l2-q14',
  text: 'Bacalah teks berikut:\n\nCuaca panas yang ekstrem dapat menyebabkan dehidrasi jika tubuh kekurangan cairan.\n\nKata “dehidrasi” berarti...',
  options: [
    { id: 'A', text: 'Kelebihan cairan' },
    { id: 'B', text: 'Kekurangan cairan' },
    { id: 'C', text: 'Penyakit kulit' },
    { id: 'D', text: 'Kelelahan ringan' }
  ],
  correctOptionId: 'B',
  discussion: 'Dehidrasi berarti kondisi kekurangan cairan tubuh.'
},
{
  id: 'b1-l2-q15',
  text: 'Bacalah teks berikut:\n\nMasyarakat diimbau untuk mematuhi aturan lalu lintas demi keselamatan bersama.\n\nTujuan imbauan tersebut adalah...',
  options: [
    { id: 'A', text: 'Menakut-nakuti masyarakat' },
    { id: 'B', text: 'Meningkatkan keselamatan' },
    { id: 'C', text: 'Membatasi kendaraan' },
    { id: 'D', text: 'Mengurangi polisi' }
  ],
  correctOptionId: 'B',
  discussion: 'Imbauan bertujuan menjaga keselamatan bersama.'
},
{
  id: 'b1-l2-q16',
  text: 'Bacalah teks berikut:\n\nMeskipun hujan turun, para petani tetap pergi ke sawah untuk merawat tanaman.\n\nKata hubung “meskipun” menunjukkan hubungan...',
  options: [
    { id: 'A', text: 'Penambahan' },
    { id: 'B', text: 'Pertentangan' },
    { id: 'C', text: 'Sebab-akibat' },
    { id: 'D', text: 'Urutan waktu' }
  ],
  correctOptionId: 'B',
  discussion: '“Meskipun” menunjukkan pertentangan kondisi.'
},
{
  id: 'b1-l2-q17',
  text: 'Bacalah teks berikut:\n\nMembaca buku nonfiksi dapat menambah wawasan dan pengetahuan siswa.\n\nJenis teks tersebut bersifat...',
  options: [
    { id: 'A', text: 'Imajinatif' },
    { id: 'B', text: 'Informatif' },
    { id: 'C', text: 'Persuasif' },
    { id: 'D', text: 'Naratif' }
  ],
  correctOptionId: 'B',
  discussion: 'Teks nonfiksi bertujuan memberikan informasi.'
},
{
  id: 'b1-l2-q18',
  text: 'Bacalah teks berikut:\n\nBeberapa siswa terlambat karena jarak rumah yang jauh.\n\nPenyebab keterlambatan siswa adalah...',
  options: [
    { id: 'A', text: 'Cuaca buruk' },
    { id: 'B', text: 'Bangun kesiangan' },
    { id: 'C', text: 'Jarak rumah yang jauh' },
    { id: 'D', text: 'Aturan sekolah' }
  ],
  correctOptionId: 'C',
  discussion: 'Jawaban terdapat secara langsung dalam teks.'
},
{
  id: 'b1-l2-q19',
  text: 'Bacalah teks berikut:\n\nSekolah mengadakan kerja bakti untuk menjaga kebersihan lingkungan.\n\nKegiatan tersebut bertujuan untuk...',
  options: [
    { id: 'A', text: 'Menghukum siswa' },
    { id: 'B', text: 'Menjaga kebersihan lingkungan sekolah' },
    { id: 'C', text: 'Mengisi waktu luang' },
    { id: 'D', text: 'Mengurangi pelajaran' }
  ],
  correctOptionId: 'B',
  discussion: 'Tujuan kerja bakti dijelaskan secara jelas.'
},
{
  id: 'b1-l2-q20',
  text: 'Bacalah teks berikut:\n\nBelajar dari kesalahan membuat seseorang menjadi lebih baik di masa depan.\n\nMakna kalimat tersebut adalah...',
  options: [
    { id: 'A', text: 'Kesalahan harus dihindari selamanya' },
    { id: 'B', text: 'Kesalahan dapat menjadi pelajaran berharga' },
    { id: 'C', text: 'Kesalahan selalu merugikan' },
    { id: 'D', text: 'Kesalahan tidak penting' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat menyiratkan nilai positif dari kesalahan.'
},
{
  id: 'b1-l2-q21',
  text: 'Bacalah teks berikut:\n\nMenjaga kebersihan diri merupakan bagian dari pola hidup sehat.\n\nPernyataan tersebut bersifat...',
  options: [
    { id: 'A', text: 'Opini' },
    { id: 'B', text: 'Fakta' },
    { id: 'C', text: 'Cerita fiksi' },
    { id: 'D', text: 'Dialog' }
  ],
  correctOptionId: 'B',
  discussion: 'Pernyataan dapat dibuktikan secara umum.'
},
{
  id: 'b1-l2-q22',
  text: 'Bacalah teks berikut:\n\nSiswa yang rajin membaca biasanya lebih mudah memahami pelajaran.\n\nHubungan antar kalimat dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Perbandingan' },
    { id: 'B', text: 'Sebab-akibat' },
    { id: 'C', text: 'Pertentangan' },
    { id: 'D', text: 'Penambahan' }
  ],
  correctOptionId: 'B',
  discussion: 'Kerajinan membaca menjadi sebab kemudahan memahami pelajaran.'
},
{
  id: 'b1-l2-q23',
  text: 'Bacalah teks berikut:\n\nLingkungan yang asri membuat suasana belajar lebih menyenangkan.\n\nKata “asri” berarti...',
  options: [
    { id: 'A', text: 'Kotor' },
    { id: 'B', text: 'Indah dan nyaman' },
    { id: 'C', text: 'Gersang' },
    { id: 'D', text: 'Panas' }
  ],
  correctOptionId: 'B',
  discussion: 'Asri berarti indah dan menyenangkan.'
},
{
  id: 'b1-l2-q24',
  text: 'Bacalah teks berikut:\n\nGuru memberikan motivasi agar siswa lebih semangat belajar.\n\nTujuan guru melakukan hal tersebut adalah...',
  options: [
    { id: 'A', text: 'Membuat siswa takut' },
    { id: 'B', text: 'Meningkatkan semangat belajar siswa' },
    { id: 'C', text: 'Mengurangi tugas siswa' },
    { id: 'D', text: 'Mengganti pelajaran' }
  ],
  correctOptionId: 'B',
  discussion: 'Motivasi bertujuan membangkitkan semangat.'
},
{
  id: 'b1-l2-q25',
  text: 'Bacalah teks berikut:\n\nMenyusun jadwal belajar membantu siswa mengatur waktu dengan lebih efektif.\n\nManfaat utama menyusun jadwal belajar adalah...',
  options: [
    { id: 'A', text: 'Mengurangi waktu belajar' },
    { id: 'B', text: 'Mengatur waktu dengan lebih baik' },
    { id: 'C', text: 'Menghilangkan tugas' },
    { id: 'D', text: 'Menambah beban belajar' }
  ],
  correctOptionId: 'B',
  discussion: 'Jadwal belajar membantu pengelolaan waktu.'
},
{
  id: 'b1-l2-q26',
  text: 'Bacalah teks berikut.\n\nKemajuan teknologi membuat proses belajar menjadi lebih mudah. Siswa dapat mengakses berbagai sumber belajar melalui internet. Namun, penggunaan teknologi yang berlebihan juga dapat menimbulkan dampak negatif jika tidak dikontrol dengan baik.\n\nIde pokok paragraf tersebut adalah...',
  options: [
    { id: 'A', text: 'Kemajuan teknologi mempermudah proses belajar' },
    { id: 'B', text: 'Internet menyediakan banyak sumber belajar' },
    { id: 'C', text: 'Teknologi memiliki manfaat dan dampak negatif dalam belajar' },
    { id: 'D', text: 'Penggunaan teknologi harus dilarang di sekolah' }
  ],
  correctOptionId: 'C',
  discussion: 'Ide pokok mencakup keseluruhan isi paragraf, yaitu manfaat dan dampak negatif teknologi.'
},
{
  id: 'b1-l2-q27',
  text: 'Bacalah teks berikut.\n\nBanyak siswa gemar membaca novel karena ceritanya menarik. Selain menghibur, membaca novel juga dapat memperkaya kosakata dan melatih imajinasi pembaca.\n\nManfaat membaca novel berdasarkan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Mengisi waktu luang saja' },
    { id: 'B', text: 'Melatih imajinasi dan memperkaya kosakata' },
    { id: 'C', text: 'Menggantikan buku pelajaran' },
    { id: 'D', text: 'Menghindari tugas sekolah' }
  ],
  correctOptionId: 'B',
  discussion: 'Teks menyebutkan manfaat membaca novel secara langsung.'
},
{
  id: 'b1-l2-q28',
  text: 'Bacalah teks berikut.\n\nHujan deras yang turun sejak pagi menyebabkan beberapa ruas jalan tergenang air. Akibatnya, arus lalu lintas menjadi terhambat.\n\nHubungan sebab–akibat dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Jalan rusak menyebabkan hujan deras' },
    { id: 'B', text: 'Kemacetan menyebabkan hujan deras' },
    { id: 'C', text: 'Hujan deras menyebabkan lalu lintas terhambat' },
    { id: 'D', text: 'Air hujan memperbaiki kondisi jalan' }
  ],
  correctOptionId: 'C',
  discussion: 'Sebabnya hujan deras, akibatnya lalu lintas terhambat.'
},
{
  id: 'b1-l2-q29',
  text: 'Bacalah teks berikut.\n\nMenjaga kebersihan lingkungan sekolah merupakan tanggung jawab seluruh warga sekolah. Lingkungan yang bersih membuat proses belajar menjadi lebih nyaman.\n\nTujuan penulis teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Menghibur pembaca' },
    { id: 'B', text: 'Menceritakan pengalaman pribadi' },
    { id: 'C', text: 'Mengajak menjaga kebersihan lingkungan sekolah' },
    { id: 'D', text: 'Menjelaskan cara membersihkan sekolah' }
  ],
  correctOptionId: 'C',
  discussion: 'Teks bersifat persuasif, mengajak pembaca menjaga kebersihan.'
},
{
  id: 'b1-l2-q30',
  text: 'Bacalah teks berikut.\n\nOlahraga secara teratur dapat meningkatkan daya tahan tubuh. Selain itu, olahraga juga membantu menjaga kesehatan mental.\n\nSimpulan yang tepat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Olahraga hanya penting bagi atlet' },
    { id: 'B', text: 'Olahraga berdampak positif bagi kesehatan fisik dan mental' },
    { id: 'C', text: 'Olahraga tidak perlu dilakukan setiap hari' },
    { id: 'D', text: 'Kesehatan mental lebih penting daripada fisik' }
  ],
  correctOptionId: 'B',
  discussion: 'Simpulan merangkum manfaat yang disebutkan dalam teks.'
},
{
  id: 'b1-l2-q31',
  text: 'Bacalah teks berikut.\n\nSampah plastik sulit terurai di alam. Oleh karena itu, penggunaan plastik sekali pakai perlu dikurangi.\n\nMakna kata "oleh karena itu" dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Penambahan informasi' },
    { id: 'B', text: 'Penegasan pendapat' },
    { id: 'C', text: 'Hubungan sebab–akibat' },
    { id: 'D', text: 'Perbandingan dua hal' }
  ],
  correctOptionId: 'C',
  discussion: 'Frasa tersebut menunjukkan hubungan sebab dan akibat.'
},
{
  id: 'b1-l2-q32',
  text: 'Bacalah teks berikut.\n\nPerpustakaan sekolah menyediakan berbagai buku pengetahuan. Sayangnya, masih banyak siswa yang jarang memanfaatkannya.\n\nPermasalahan utama dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Koleksi buku yang terbatas' },
    { id: 'B', text: 'Kurangnya minat siswa ke perpustakaan' },
    { id: 'C', text: 'Perpustakaan sering tutup' },
    { id: 'D', text: 'Buku terlalu mahal' }
  ],
  correctOptionId: 'B',
  discussion: 'Masalah yang disoroti adalah rendahnya pemanfaatan perpustakaan.'
},
{
  id: 'b1-l2-q33',
  text: 'Bacalah teks berikut.\n\nMenanam pohon di lingkungan sekitar dapat mengurangi polusi udara dan membuat suasana menjadi lebih sejuk.\n\nInformasi tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Pohon hanya berfungsi sebagai hiasan' },
    { id: 'B', text: 'Lingkungan tanpa pohon lebih sehat' },
    { id: 'C', text: 'Menanam pohon memberikan banyak manfaat lingkungan' },
    { id: 'D', text: 'Polusi udara tidak berbahaya' }
  ],
  correctOptionId: 'C',
  discussion: 'Manfaat menanam pohon disimpulkan dari isi teks.'
},
{
  id: 'b1-l2-q34',
  text: 'Bacalah teks berikut.\n\nBelajar secara teratur lebih efektif dibandingkan belajar menjelang ujian. Dengan belajar rutin, materi akan lebih mudah dipahami.\n\nJudul yang paling tepat untuk teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Belajar Menjelang Ujian' },
    { id: 'B', text: 'Pentingnya Belajar Teratur' },
    { id: 'C', text: 'Cara Menghadapi Ujian' },
    { id: 'D', text: 'Kegiatan di Sekolah' }
  ],
  correctOptionId: 'B',
  discussion: 'Judul harus mewakili isi teks secara keseluruhan.'
},
{
  id: 'b1-l2-q35',
  text: 'Bacalah teks berikut.\n\nMembaca berita dari berbagai sumber dapat membantu kita mendapatkan informasi yang lebih akurat.\n\nPesan yang ingin disampaikan penulis adalah...',
  options: [
    { id: 'A', text: 'Berita tidak perlu dibaca' },
    { id: 'B', text: 'Satu sumber berita sudah cukup' },
    { id: 'C', text: 'Pentingnya membandingkan informasi dari berbagai sumber' },
    { id: 'D', text: 'Berita selalu benar' }
  ],
  correctOptionId: 'C',
  discussion: 'Pesan tersirat menekankan pentingnya validasi informasi.'
},
{
  id: 'b1-l2-q36',
  text: 'Bacalah teks berikut.\n\nCuaca panas yang ekstrem dapat menyebabkan dehidrasi. Oleh sebab itu, kita dianjurkan untuk minum air putih yang cukup.\n\nSimpulan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Air putih tidak penting' },
    { id: 'B', text: 'Cuaca panas harus dihindari' },
    { id: 'C', text: 'Minum air cukup penting saat cuaca panas' },
    { id: 'D', text: 'Dehidrasi hanya terjadi pada orang dewasa' }
  ],
  correctOptionId: 'C',
  discussion: 'Simpulan menggabungkan sebab dan anjuran dalam teks.'
},
{
  id: 'b1-l2-q37',
  text: 'Bacalah teks berikut.\n\nMengikuti kegiatan ekstrakurikuler dapat melatih keterampilan sosial siswa.\n\nMakna kalimat tersebut adalah...',
  options: [
    { id: 'A', text: 'Ekstrakurikuler mengganggu belajar' },
    { id: 'B', text: 'Ekstrakurikuler hanya untuk hiburan' },
    { id: 'C', text: 'Ekstrakurikuler memiliki manfaat bagi siswa' },
    { id: 'D', text: 'Ekstrakurikuler wajib diikuti semua siswa' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat menunjukkan manfaat kegiatan ekstrakurikuler.'
},
{
  id: 'b1-l2-q38',
  text: 'Bacalah teks berikut.\n\nBanjir sering terjadi akibat saluran air yang tersumbat sampah.\n\nFakta dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Banjir selalu terjadi setiap hari' },
    { id: 'B', text: 'Sampah dapat menyumbat saluran air' },
    { id: 'C', text: 'Banjir adalah bencana paling berbahaya' },
    { id: 'D', text: 'Semua daerah rawan banjir' }
  ],
  correctOptionId: 'B',
  discussion: 'Fakta adalah pernyataan yang dapat dibuktikan.'
},
{
  id: 'b1-l2-q39',
  text: 'Bacalah teks berikut.\n\nBelajar kelompok dapat membantu siswa memahami materi yang sulit.\n\nOpini dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Belajar kelompok selalu berhasil' },
    { id: 'B', text: 'Belajar kelompok membantu pemahaman materi' },
    { id: 'C', text: 'Siswa belajar di sekolah' },
    { id: 'D', text: 'Materi pelajaran ada di buku' }
  ],
  correctOptionId: 'B',
  discussion: 'Pernyataan tersebut bersifat pendapat.'
},
{
  id: 'b1-l2-q40',
  text: 'Bacalah teks berikut.\n\nKegiatan membaca dapat meningkatkan kemampuan berpikir kritis siswa.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Membaca hanya untuk hiburan' },
    { id: 'B', text: 'Membaca memiliki manfaat intelektual' },
    { id: 'C', text: 'Berpikir kritis tidak penting' },
    { id: 'D', text: 'Siswa tidak perlu membaca' }
  ],
  correctOptionId: 'B',
  discussion: 'Makna tersirat menunjukkan manfaat membaca.'
},
{
  id: 'b1-l2-q41',
  text: 'Bacalah teks berikut.\n\nMenjaga pola makan sehat dapat mencegah berbagai penyakit.\n\nTujuan penulis teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Menghibur pembaca' },
    { id: 'B', text: 'Memberi informasi kesehatan' },
    { id: 'C', text: 'Menceritakan pengalaman' },
    { id: 'D', text: 'Membuat cerita fiksi' }
  ],
  correctOptionId: 'B',
  discussion: 'Teks bertujuan memberikan informasi.'
},
{
  id: 'b1-l2-q42',
  text: 'Bacalah teks berikut.\n\nSiswa yang disiplin akan lebih mudah mencapai prestasi.\n\nIsi teks tersebut menekankan pentingnya...',
  options: [
    { id: 'A', text: 'Bakat alami' },
    { id: 'B', text: 'Disiplin dalam belajar' },
    { id: 'C', text: 'Nilai tinggi' },
    { id: 'D', text: 'Kegiatan bermain' }
  ],
  correctOptionId: 'B',
  discussion: 'Teks menyoroti peran disiplin.'
},
{
  id: 'b1-l2-q43',
  text: 'Bacalah teks berikut.\n\nPenggunaan listrik berlebihan dapat menyebabkan pemborosan energi.\n\nPesan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Gunakan listrik sesuka hati' },
    { id: 'B', text: 'Hemat energi listrik' },
    { id: 'C', text: 'Listrik tidak berguna' },
    { id: 'D', text: 'Energi tidak terbatas' }
  ],
  correctOptionId: 'B',
  discussion: 'Pesan mengajak pembaca berhemat energi.'
},
{
  id: 'b1-l2-q44',
  text: 'Bacalah teks berikut.\n\nMembaca buku sebelum tidur dapat menambah wawasan.\n\nManfaat membaca sebelum tidur adalah...',
  options: [
    { id: 'A', text: 'Menyebabkan kantuk' },
    { id: 'B', text: 'Mengurangi waktu tidur' },
    { id: 'C', text: 'Menambah wawasan' },
    { id: 'D', text: 'Mengganggu kesehatan' }
  ],
  correctOptionId: 'C',
  discussion: 'Manfaat disebutkan langsung dalam teks.'
},
{
  id: 'b1-l2-q45',
  text: 'Bacalah teks berikut.\n\nLingkungan sekolah yang rapi membuat siswa lebih nyaman belajar.\n\nSimpulan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sekolah tidak perlu dirapikan' },
    { id: 'B', text: 'Kerapian sekolah memengaruhi kenyamanan belajar' },
    { id: 'C', text: 'Belajar hanya di rumah' },
    { id: 'D', text: 'Guru yang bertanggung jawab' }
  ],
  correctOptionId: 'B',
  discussion: 'Simpulan merangkum isi teks.'
},
{
  id: 'b1-l2-q46',
  text: 'Bacalah teks berikut.\n\nBerolahraga secara teratur dapat menjaga kebugaran tubuh.\n\nMakna kata "kebugaran" dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kelelahan' },
    { id: 'B', text: 'Kesehatan dan stamina' },
    { id: 'C', text: 'Penyakit' },
    { id: 'D', text: 'Kesedihan' }
  ],
  correctOptionId: 'B',
  discussion: 'Kebugaran berkaitan dengan kondisi tubuh yang sehat.'
},
{
  id: 'b1-l2-q47',
  text: 'Bacalah teks berikut.\n\nSiswa yang rajin membaca biasanya memiliki pengetahuan luas.\n\nInformasi tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Membaca membuat siswa lelah' },
    { id: 'B', text: 'Rajin membaca berdampak positif' },
    { id: 'C', text: 'Pengetahuan tidak penting' },
    { id: 'D', text: 'Semua siswa rajin membaca' }
  ],
  correctOptionId: 'B',
  discussion: 'Makna tersirat menunjukkan dampak positif membaca.'
},
{
  id: 'b1-l2-q48',
  text: 'Bacalah teks berikut.\n\nMenjaga kebersihan kelas dapat menciptakan suasana belajar yang sehat.\n\nTujuan penulis adalah...',
  options: [
    { id: 'A', text: 'Memberi perintah' },
    { id: 'B', text: 'Mengajak menjaga kebersihan' },
    { id: 'C', text: 'Menceritakan pengalaman' },
    { id: 'D', text: 'Menghibur pembaca' }
  ],
  correctOptionId: 'B',
  discussion: 'Teks bersifat ajakan.'
},
{
  id: 'b1-l2-q49',
  text: 'Bacalah teks berikut.\n\nBelajar dengan jadwal teratur membantu siswa mengatur waktu.\n\nManfaat utama dari belajar teratur adalah...',
  options: [
    { id: 'A', text: 'Mengurangi waktu istirahat' },
    { id: 'B', text: 'Membuat siswa lelah' },
    { id: 'C', text: 'Membantu mengatur waktu' },
    { id: 'D', text: 'Menghilangkan waktu bermain' }
  ],
  correctOptionId: 'C',
  discussion: 'Manfaat disebutkan jelas dalam teks.'
},
{
  id: 'b1-l2-q50',
  text: 'Bacalah teks berikut.\n\nMembaca berbagai jenis buku dapat memperluas cara pandang seseorang.\n\nPesan utama teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Buku hanya untuk hiburan' },
    { id: 'B', text: 'Membaca satu jenis buku saja sudah cukup' },
    { id: 'C', text: 'Membaca beragam buku memberikan manfaat besar' },
    { id: 'D', text: 'Tidak semua buku bermanfaat' }
  ],
  correctOptionId: 'C',
  discussion: 'Pesan utama menekankan manfaat membaca beragam buku.'
},
],

//kalimat efektif - struktur & kebahasaan level 2

'b2-l2': [

  {
  id: 'b2-l2-q1',
  text: 'Kalimat berikut yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Para siswa-siswa sedang mengerjakan tugas di kelas.' },
    { id: 'B', text: 'Para siswa sedang mengerjakan tugas di kelas.' },
    { id: 'C', text: 'Siswa-siswa sedang mengerjakan tugas di dalam kelas.' },
    { id: 'D', text: 'Para siswa sedang mengerjakan tugas-tugas di kelas.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat efektif menghindari pengulangan makna (pleonasme).'
},
{
  id: 'b2-l2-q2',
  text: 'Perbaikan kalimat berikut agar menjadi efektif adalah...\n\n"Dia sangat rajin sekali dalam belajar."',
  options: [
    { id: 'A', text: 'Dia sangat rajin dalam belajar.' },
    { id: 'B', text: 'Dia rajin sekali dalam belajar.' },
    { id: 'C', text: 'Dia sangat sekali rajin belajar.' },
    { id: 'D', text: 'Dia sangat rajin sekali belajar.' }
  ],
  correctOptionId: 'A',
  discussion: 'Kata "sangat" dan "sekali" tidak digunakan bersamaan.'
},
{
  id: 'b2-l2-q3',
  text: 'Kalimat berikut yang tidak efektif adalah...',
  options: [
    { id: 'A', text: 'Siswa itu membaca buku di perpustakaan.' },
    { id: 'B', text: 'Ibu pergi ke pasar membeli sayur.' },
    { id: 'C', text: 'Dia naik ke atas tangga.' },
    { id: 'D', text: 'Ayah memperbaiki sepeda motor.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "naik" sudah bermakna ke atas sehingga terjadi pemborosan.'
},
{
  id: 'b2-l2-q4',
  text: 'Kalimat yang memiliki struktur SPOK paling tepat adalah...',
  options: [
    { id: 'A', text: 'Di sekolah belajar siswa dengan rajin.' },
    { id: 'B', text: 'Belajar siswa di sekolah dengan rajin.' },
    { id: 'C', text: 'Siswa belajar dengan rajin di sekolah.' },
    { id: 'D', text: 'Dengan rajin siswa di sekolah belajar.' }
  ],
  correctOptionId: 'C',
  discussion: 'Urutan SPOK yang jelas membuat kalimat mudah dipahami.'
},
{
  id: 'b2-l2-q5',
  text: 'Kalimat berikut yang hemat kata adalah...',
  options: [
    { id: 'A', text: 'Ia maju ke depan untuk menyampaikan pendapat.' },
    { id: 'B', text: 'Ia maju untuk menyampaikan pendapat.' },
    { id: 'C', text: 'Ia berjalan maju ke depan.' },
    { id: 'D', text: 'Ia maju ke depan naik podium.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "maju" sudah mengandung makna ke depan.'
},
{
  id: 'b2-l2-q6',
  text: 'Kalimat yang tidak memiliki kejelasan subjek adalah...',
  options: [
    { id: 'A', text: 'Kami membersihkan kelas bersama-sama.' },
    { id: 'B', text: 'Para siswa mengikuti upacara.' },
    { id: 'C', text: 'Sedang dibahas masalah kebersihan.' },
    { id: 'D', text: 'Guru menjelaskan materi pelajaran.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat tersebut tidak menyebutkan subjek secara jelas.'
},
{
  id: 'b2-l2-q7',
  text: 'Perbaikan kalimat berikut agar logis adalah...\n\n"Karena hujan deras sehingga pertandingan dibatalkan."',
  options: [
    { id: 'A', text: 'Karena hujan deras pertandingan dibatalkan.' },
    { id: 'B', text: 'Hujan deras sehingga pertandingan dibatalkan.' },
    { id: 'C', text: 'Karena hujan deras maka sehingga dibatalkan.' },
    { id: 'D', text: 'Hujan deras pertandingan karena dibatalkan.' }
  ],
  correctOptionId: 'A',
  discussion: 'Tidak boleh menggunakan dua kata penghubung sebab sekaligus.'
},
{
  id: 'b2-l2-q8',
  text: 'Kalimat berikut yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Tujuan daripada kegiatan ini adalah untuk kebersihan.' },
    { id: 'B', text: 'Tujuan kegiatan ini untuk kebersihan.' },
    { id: 'C', text: 'Tujuan kegiatan ini adalah kebersihan.' },
    { id: 'D', text: 'Tujuan dari kegiatan ini adalah untuk kebersihan.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat efektif tidak menggunakan kata depan yang tidak perlu.'
},
{
  id: 'b2-l2-q9',
  text: 'Kalimat berikut yang mengandung pleonasme adalah...',
  options: [
    { id: 'A', text: 'Ia tersenyum kepada temannya.' },
    { id: 'B', text: 'Ia turun ke bawah dengan cepat.' },
    { id: 'C', text: 'Kami belajar bersama di kelas.' },
    { id: 'D', text: 'Guru datang tepat waktu.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "turun" sudah bermakna ke bawah.'
},
{
  id: 'b2-l2-q10',
  text: 'Kalimat yang menggunakan diksi paling tepat adalah...',
  options: [
    { id: 'A', text: 'Dia menonton pemandangan alam.' },
    { id: 'B', text: 'Dia melihat pemandangan alam.' },
    { id: 'C', text: 'Dia memandang pemandangan alam.' },
    { id: 'D', text: 'Dia menyaksikan pemandangan alam.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "melihat" paling sesuai untuk konteks ini.'
},
{
  id: 'b2-l2-q11',
  text: 'Kalimat yang paling efektif untuk situasi resmi adalah...',
  options: [
    { id: 'A', text: 'Saya ingin bilang terima kasih.' },
    { id: 'B', text: 'Saya mengucapkan terima kasih.' },
    { id: 'C', text: 'Saya mau berterima kasih.' },
    { id: 'D', text: 'Terima kasih saya sampaikan.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat resmi menggunakan diksi baku dan jelas.'
},
{
  id: 'b2-l2-q12',
  text: 'Kalimat berikut yang tidak efektif karena pengulangan subjek adalah...',
  options: [
    { id: 'A', text: 'Ani membaca buku di kamar.' },
    { id: 'B', text: 'Ani dia membaca buku.' },
    { id: 'C', text: 'Ani membaca buku pelajaran.' },
    { id: 'D', text: 'Ani belajar dengan tekun.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penggunaan dua subjek menyebabkan ketidakefektifan.'
},
{
  id: 'b2-l2-q13',
  text: 'Kalimat berikut yang paling ringkas adalah...',
  options: [
    { id: 'A', text: 'Ia berjalan kaki dengan menggunakan sepatu.' },
    { id: 'B', text: 'Ia berjalan kaki memakai sepatu.' },
    { id: 'C', text: 'Ia berjalan kaki dengan sepatu.' },
    { id: 'D', text: 'Ia berjalan kaki menggunakan sepatu.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat ringkas tidak menggunakan kata yang berlebihan.'
},
{
  id: 'b2-l2-q14',
  text: 'Kalimat berikut yang efektif adalah...',
  options: [
    { id: 'A', text: 'Para tamu-tamu dipersilakan masuk.' },
    { id: 'B', text: 'Tamu-tamu dipersilakan masuk.' },
    { id: 'C', text: 'Para tamu dipersilakan masuk.' },
    { id: 'D', text: 'Para tamu-tamu silakan masuk.' }
  ],
  correctOptionId: 'C',
  discussion: 'Tidak boleh menggabungkan bentuk jamak ganda.'
},
{
  id: 'b2-l2-q15',
  text: 'Kalimat yang paling jelas maknanya adalah...',
  options: [
    { id: 'A', text: 'Membaca buku di perpustakaan siswa.' },
    { id: 'B', text: 'Siswa membaca buku di perpustakaan.' },
    { id: 'C', text: 'Di perpustakaan membaca buku.' },
    { id: 'D', text: 'Buku membaca siswa perpustakaan.' }
  ],
  correctOptionId: 'B',
  discussion: 'Susunan SPOK membuat makna kalimat jelas.'
},
{
  id: 'b2-l2-q16',
  text: 'Kalimat yang tidak efektif karena ketidakparalelan adalah...',
  options: [
    { id: 'A', text: 'Ia suka membaca dan menulis.' },
    { id: 'B', text: 'Ia suka membaca dan penulisan.' },
    { id: 'C', text: 'Ia suka bernyanyi dan menari.' },
    { id: 'D', text: 'Ia suka belajar dan berlatih.' }
  ],
  correctOptionId: 'B',
  discussion: 'Unsur sejajar harus memiliki bentuk yang sama.'
},
{
  id: 'b2-l2-q17',
  text: 'Kalimat berikut yang efektif adalah...',
  options: [
    { id: 'A', text: 'Dia adalah merupakan ketua kelas.' },
    { id: 'B', text: 'Dia merupakan ketua kelas.' },
    { id: 'C', text: 'Dia adalah ketua kelas.' },
    { id: 'D', text: 'Dia merupakan adalah ketua kelas.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "adalah" dan "merupakan" tidak digunakan bersamaan.'
},
{
  id: 'b2-l2-q18',
  text: 'Kalimat yang paling tepat secara struktur adalah...',
  options: [
    { id: 'A', text: 'Dengan rajin belajar siswa berhasil.' },
    { id: 'B', text: 'Siswa dengan rajin berhasil belajar.' },
    { id: 'C', text: 'Siswa berhasil karena rajin belajar.' },
    { id: 'D', text: 'Rajin belajar siswa berhasil.' }
  ],
  correctOptionId: 'C',
  discussion: 'Hubungan sebab-akibat disusun secara logis.'
},
{
  id: 'b2-l2-q19',
  text: 'Kalimat berikut yang tidak baku adalah...',
  options: [
    { id: 'A', text: 'Ia tidak hadir karena sakit.' },
    { id: 'B', text: 'Dia tidak masuk sebab sakit.' },
    { id: 'C', text: 'Ia tidak masuk dikarenakan sakit.' },
    { id: 'D', text: 'Ia absen karena sakit.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penggunaan "dikarenakan" kurang tepat dalam kalimat baku.'
},
{
  id: 'b2-l2-q20',
  text: 'Kalimat yang efektif untuk laporan resmi adalah...',
  options: [
    { id: 'A', text: 'Acara itu berjalan dengan lancar.' },
    { id: 'B', text: 'Acara itu berjalan lancar dan sukses.' },
    { id: 'C', text: 'Acara tersebut berlangsung dengan lancar.' },
    { id: 'D', text: 'Acaranya berlangsung lancar.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat resmi menggunakan struktur baku dan jelas.'
},
{
  id: 'b2-l2-q21',
  text: 'Kalimat berikut yang paling hemat kata adalah...',
  options: [
    { id: 'A', text: 'Ia kembali pulang ke rumah.' },
    { id: 'B', text: 'Ia kembali ke rumah.' },
    { id: 'C', text: 'Ia pulang kembali ke rumah.' },
    { id: 'D', text: 'Ia kembali pulang.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "kembali" dan "pulang" bermakna hampir sama.'
},
{
  id: 'b2-l2-q22',
  text: 'Kalimat yang tidak efektif karena salah penggunaan kata hubung adalah...',
  options: [
    { id: 'A', text: 'Ia belajar keras sehingga berhasil.' },
    { id: 'B', text: 'Ia belajar keras karena berhasil.' },
    { id: 'C', text: 'Ia belajar keras dan berhasil.' },
    { id: 'D', text: 'Ia belajar keras agar berhasil.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata hubung sebab-akibat digunakan tidak tepat.'
},
{
  id: 'b2-l2-q23',
  text: 'Kalimat yang memiliki makna paling jelas adalah...',
  options: [
    { id: 'A', text: 'Membaca buku siswa rajin.' },
    { id: 'B', text: 'Rajin membaca buku siswa.' },
    { id: 'C', text: 'Siswa rajin membaca buku.' },
    { id: 'D', text: 'Buku rajin membaca siswa.' }
  ],
  correctOptionId: 'C',
  discussion: 'Urutan SPOK yang tepat memperjelas makna.'
},
{
  id: 'b2-l2-q24',
  text: 'Kalimat berikut yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Ia masuk ke dalam ruangan.' },
    { id: 'B', text: 'Ia masuk ruangan.' },
    { id: 'C', text: 'Ia masuk ke ruangan.' },
    { id: 'D', text: 'Ia masuk ke dalam ruangan tersebut.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "ke dalam" tidak diperlukan secara bersamaan.'
},
{
  id: 'b2-l2-q25',
  text: 'Kalimat yang tepat untuk pengumuman resmi adalah...',
  options: [
    { id: 'A', text: 'Kami kasih tahu bahwa sekolah libur.' },
    { id: 'B', text: 'Diberitahukan bahwa sekolah libur.' },
    { id: 'C', text: 'Sekolah bakal libur.' },
    { id: 'D', text: 'Sekolah libur ya.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat resmi menggunakan bahasa baku dan netral.'
},
{
  id: 'b2-l2-q26',
  text: 'Kalimat berikut yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Ia menyampaikan pidato dalam rangka untuk perpisahan.' },
    { id: 'B', text: 'Ia menyampaikan pidato untuk perpisahan.' },
    { id: 'C', text: 'Ia menyampaikan pidato dalam rangka perpisahan.' },
    { id: 'D', text: 'Ia menyampaikan pidato dalam rangka untuk acara perpisahan.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kalimat efektif menghindari kata yang berlebihan. Pilihan C paling hemat dan baku.'
},
{
  id: 'b2-l2-q27',
  text: 'Perbaikan kalimat berikut agar efektif adalah...\n\n"Setiap para siswa wajib mengikuti upacara bendera."',
  options: [
    { id: 'A', text: 'Setiap para siswa wajib mengikuti upacara bendera.' },
    { id: 'B', text: 'Setiap siswa wajib mengikuti upacara bendera.' },
    { id: 'C', text: 'Para siswa wajib mengikuti upacara bendera-bendera.' },
    { id: 'D', text: 'Setiap siswa wajib untuk mengikuti upacara bendera.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "setiap" tidak perlu dipasangkan dengan "para" karena sama-sama bermakna jamak.'
},
{
  id: 'b2-l2-q28',
  text: 'Kalimat berikut yang tidak efektif karena pleonasme adalah...',
  options: [
    { id: 'A', text: 'Ia segera berlari ke lapangan.' },
    { id: 'B', text: 'Mereka berkumpul di aula sekolah.' },
    { id: 'C', text: 'Ia melihat dengan matanya sendiri.' },
    { id: 'D', text: 'Kami berdiskusi setelah pelajaran selesai.' }
  ],
  correctOptionId: 'C',
  discussion: 'Melihat sudah menggunakan mata, sehingga "dengan matanya sendiri" menjadi pemborosan.'
},
{
  id: 'b2-l2-q29',
  text: 'Kalimat yang tidak efektif karena subjek ganda adalah...',
  options: [
    { id: 'A', text: 'Kakak memasak mi instan di dapur.' },
    { id: 'B', text: 'Kakak dia memasak mi instan di dapur.' },
    { id: 'C', text: 'Kakak memasak untuk adik.' },
    { id: 'D', text: 'Kakak memasak dengan cepat.' }
  ],
  correctOptionId: 'B',
  discussion: 'Subjek ganda (Kakak + dia) membuat kalimat tidak efektif.'
},
{
  id: 'b2-l2-q30',
  text: 'Kalimat berikut yang paling logis adalah...',
  options: [
    { id: 'A', text: 'Ia tidak belajar, sehingga ia mendapat nilai bagus.' },
    { id: 'B', text: 'Ia belajar dengan tekun, sehingga mendapat nilai bagus.' },
    { id: 'C', text: 'Ia mendapat nilai bagus, sehingga ia tidak belajar.' },
    { id: 'D', text: 'Ia tekun, sehingga nilai bagus.' }
  ],
  correctOptionId: 'B',
  discussion: 'Hubungan sebab-akibat harus masuk akal. Belajar tekun menyebabkan nilai bagus.'
},
{
  id: 'b2-l2-q31',
  text: 'Kalimat yang paling efektif untuk laporan kegiatan adalah...',
  options: [
    { id: 'A', text: 'Kegiatan itu dilaksanakan pada hari Senin tanggal 3 Mei.' },
    { id: 'B', text: 'Kegiatan itu dilaksanakan pada hari Senin tanggal 3 Mei 2024.' },
    { id: 'C', text: 'Kegiatan tersebut dilaksanakan pada Senin, 3 Mei 2024.' },
    { id: 'D', text: 'Kegiatan tersebut dilaksanakan pada hari Senin, tanggal 3 bulan Mei tahun 2024.' }
  ],
  correctOptionId: 'C',
  discussion: 'Pilihan C ringkas, baku, dan informatif tanpa pemborosan.'
},
{
  id: 'b2-l2-q32',
  text: 'Kalimat yang tidak efektif karena ketidakparalelan adalah...',
  options: [
    { id: 'A', text: 'Panitia menyiapkan tempat dan menyusun acara.' },
    { id: 'B', text: 'Panitia menyiapkan tempat dan penyusunan acara.' },
    { id: 'C', text: 'Panitia mengatur konsumsi dan mengatur keamanan.' },
    { id: 'D', text: 'Panitia memeriksa perlengkapan dan mengecek peserta.' }
  ],
  correctOptionId: 'B',
  discussion: 'Unsur sejajar harus sama bentuknya. "menyiapkan" sejajar dengan "menyusun", bukan "penyusunan".'
},
{
  id: 'b2-l2-q33',
  text: 'Perbaikan kalimat berikut agar efektif adalah...\n\n"Para hadirin sekalian dimohon untuk berdiri."',
  options: [
    { id: 'A', text: 'Para hadirin sekalian dimohon berdiri.' },
    { id: 'B', text: 'Hadirin sekalian dimohon untuk berdiri.' },
    { id: 'C', text: 'Hadirin dimohon berdiri.' },
    { id: 'D', text: 'Para hadirin dimohon untuk berdiri semuanya.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "para" dan "sekalian" berpotensi membuat kalimat boros. Pilihan C paling hemat dan tetap sopan.'
},
{
  id: 'b2-l2-q34',
  text: 'Kalimat berikut yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Ia membahas mengenai kebersihan lingkungan.' },
    { id: 'B', text: 'Ia membahas tentang kebersihan lingkungan.' },
    { id: 'C', text: 'Ia membahas kebersihan lingkungan.' },
    { id: 'D', text: 'Ia membahas akan kebersihan lingkungan.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "membahas" tidak memerlukan "mengenai/tentang" jika objek sudah jelas.'
},
{
  id: 'b2-l2-q35',
  text: 'Kalimat berikut yang tidak efektif karena kata depan berlebih adalah...',
  options: [
    { id: 'A', text: 'Ia pergi ke sekolah dengan sepeda.' },
    { id: 'B', text: 'Ia pergi ke sekolah.' },
    { id: 'C', text: 'Ia pergi untuk ke sekolah.' },
    { id: 'D', text: 'Ia pergi dari rumah ke sekolah.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penggunaan "untuk ke" tidak tepat dan membuat kalimat tidak efektif.'
},
{
  id: 'b2-l2-q36',
  text: 'Kalimat yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Mereka saling tolong-menolong satu sama lain.' },
    { id: 'B', text: 'Mereka saling tolong-menolong.' },
    { id: 'C', text: 'Mereka tolong-menolong satu sama lain.' },
    { id: 'D', text: 'Mereka saling menolong satu sama lain semuanya.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "saling" sudah bermakna satu sama lain, sehingga frasa tambahan menjadi boros.'
},
{
  id: 'b2-l2-q37',
  text: 'Kalimat berikut yang paling jelas adalah...',
  options: [
    { id: 'A', text: 'Di ruang kelas dibacakan pengumuman.' },
    { id: 'B', text: 'Pengumuman dibacakan di ruang kelas oleh ketua kelas.' },
    { id: 'C', text: 'Dibacakan pengumuman di ruang kelas.' },
    { id: 'D', text: 'Pengumuman di ruang kelas dibacakan.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kalimat efektif memiliki informasi jelas (subjek/pelaku, kegiatan, dan tempat).'
},
{
  id: 'b2-l2-q38',
  text: 'Kalimat yang tidak efektif karena ambiguitas adalah...',
  options: [
    { id: 'A', text: 'Ibu melihat anaknya dengan teropong.' },
    { id: 'B', text: 'Ibu melihat anaknya dari jauh.' },
    { id: 'C', text: 'Ibu melihat anaknya di lapangan.' },
    { id: 'D', text: 'Ibu melihat anaknya saat latihan.' }
  ],
  correctOptionId: 'A',
  discussion: 'Kalimat A ambigu: siapa yang menggunakan teropong? Ibu atau anaknya.'
},
{
  id: 'b2-l2-q39',
  text: 'Perbaikan kalimat berikut agar efektif adalah...\n\n"Untuk meningkatkan prestasi, maka siswa harus belajar."',
  options: [
    { id: 'A', text: 'Untuk meningkatkan prestasi, siswa harus belajar.' },
    { id: 'B', text: 'Maka siswa harus belajar untuk meningkatkan prestasi.' },
    { id: 'C', text: 'Untuk meningkatkan prestasi, maka siswa harus belajar dengan rajin sekali.' },
    { id: 'D', text: 'Untuk meningkatkan, maka prestasi siswa harus belajar.' }
  ],
  correctOptionId: 'A',
  discussion: 'Kata "untuk" sudah cukup, tidak perlu ditambah "maka".'
},
{
  id: 'b2-l2-q40',
  text: 'Kalimat berikut yang efektif adalah...',
  options: [
    { id: 'A', text: 'Dia menyukai olahraga seperti misalnya sepak bola.' },
    { id: 'B', text: 'Dia menyukai olahraga, misalnya sepak bola.' },
    { id: 'C', text: 'Dia menyukai olahraga seperti misalnya contohnya sepak bola.' },
    { id: 'D', text: 'Dia menyukai olahraga seperti sepak bola misalnya.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penggunaan "seperti" dan "misalnya" bersamaan cenderung boros. Pilihan B paling tepat.'
},
{
  id: 'b2-l2-q41',
  text: 'Kalimat berikut yang tidak efektif karena pengulangan makna adalah...',
  options: [
    { id: 'A', text: 'Ia mengisi formulir pendaftaran.' },
    { id: 'B', text: 'Ia mengisi formulir untuk mendaftar.' },
    { id: 'C', text: 'Ia mendaftar dengan mengisi formulir.' },
    { id: 'D', text: 'Ia mengisi formulir pendaftaran untuk mendaftar.' }
  ],
  correctOptionId: 'D',
  discussion: 'Frasa "formulir pendaftaran" sudah bermakna untuk mendaftar, sehingga kalimat D boros.'
},
{
  id: 'b2-l2-q42',
  text: 'Kalimat yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Ia menanyakan tentang lokasi kantor pos.' },
    { id: 'B', text: 'Ia menanyakan lokasi kantor pos.' },
    { id: 'C', text: 'Ia bertanya menanyakan lokasi kantor pos.' },
    { id: 'D', text: 'Ia menanyakan akan lokasi kantor pos.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata kerja "menanyakan" dapat langsung diikuti objek tanpa "tentang".'
},
{
  id: 'b2-l2-q43',
  text: 'Kalimat berikut yang tidak efektif karena salah penempatan keterangan adalah...',
  options: [
    { id: 'A', text: 'Ia dengan cepat menyelesaikan tugas itu.' },
    { id: 'B', text: 'Dengan cepat, ia menyelesaikan tugas itu.' },
    { id: 'C', text: 'Ia menyelesaikan tugas itu dengan cepat.' },
    { id: 'D', text: 'Ia menyelesaikan dengan cepat tugas itu.' }
  ],
  correctOptionId: 'D',
  discussion: 'Penempatan keterangan yang memisahkan predikat dan objek membuat kalimat kurang efektif.'
},
{
  id: 'b2-l2-q44',
  text: 'Kalimat berikut yang paling efektif adalah...',
  options: [
    { id: 'A', text: 'Bagi para peserta dimohon hadir tepat waktu.' },
    { id: 'B', text: 'Para peserta dimohon hadir tepat waktu.' },
    { id: 'C', text: 'Para peserta dimohon untuk agar hadir tepat waktu.' },
    { id: 'D', text: 'Bagi peserta-peserta dimohon hadir tepat waktu.' }
  ],
  correctOptionId: 'B',
  discussion: 'Kata "bagi" tidak diperlukan jika subjek sudah jelas.'
},
{
  id: 'b2-l2-q45',
  text: 'Kalimat yang paling efektif untuk surat resmi adalah...',
  options: [
    { id: 'A', text: 'Dengan ini kami sampaikan pemberitahuan kepada Anda.' },
    { id: 'B', text: 'Kami sampaikan pemberitahuan ini.' },
    { id: 'C', text: 'Pemberitahuan ini kami sampaikan kepada Anda.' },
    { id: 'D', text: 'Kami mengabarkan pemberitahuan kepada Anda.' }
  ],
  correctOptionId: 'C',
  discussion: 'Pilihan C ringkas, baku, dan jelas (subjek dan objek tersusun baik).'
},
{
  id: 'b2-l2-q46',
  text: 'Kalimat berikut yang tidak efektif karena ketidaktepatan diksi adalah...',
  options: [
    { id: 'A', text: 'Panitia menyediakan konsumsi bagi peserta.' },
    { id: 'B', text: 'Panitia menyiapkan konsumsi untuk peserta.' },
    { id: 'C', text: 'Panitia mengadakan konsumsi untuk peserta.' },
    { id: 'D', text: 'Panitia membagikan konsumsi kepada peserta.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "mengadakan" kurang tepat untuk "konsumsi"; lebih tepat "menyediakan/menyiapkan".'
},
{
  id: 'b2-l2-q47',
  text: 'Perbaikan kalimat berikut agar efektif adalah...\n\n"Kami berharap semoga acara ini berjalan lancar."',
  options: [
    { id: 'A', text: 'Kami berharap agar acara ini berjalan lancar.' },
    { id: 'B', text: 'Kami berharap semoga acara ini berjalan lancar.' },
    { id: 'C', text: 'Kami berharap agar semoga acara ini berjalan lancar.' },
    { id: 'D', text: 'Kami semoga berharap acara ini berjalan lancar.' }
  ],
  correctOptionId: 'A',
  discussion: '"Berharap" sudah bermakna harapan, tidak perlu ditambah "semoga".'
},
{
  id: 'b2-l2-q48',
  text: 'Kalimat berikut yang efektif adalah...',
  options: [
    { id: 'A', text: 'Ia memberikan hadiah kepada adiknya yang baru.' },
    { id: 'B', text: 'Ia memberikan hadiah kepada adiknya yang baru lahir.' },
    { id: 'C', text: 'Ia memberikan hadiah kepada adiknya yang baru itu.' },
    { id: 'D', text: 'Ia memberi hadiah adiknya baru.' }
  ],
  correctOptionId: 'B',
  discussion: 'Pilihan B paling jelas dan tidak menimbulkan ambiguitas.'
},
{
  id: 'b2-l2-q49',
  text: 'Kalimat berikut yang tidak efektif karena penggunaan kata yang tidak perlu adalah...',
  options: [
    { id: 'A', text: 'Ia mendiskusikan masalah itu bersama guru.' },
    { id: 'B', text: 'Ia mendiskusikan masalah itu dengan guru.' },
    { id: 'C', text: 'Ia mendiskusikan mengenai masalah itu.' },
    { id: 'D', text: 'Ia mendiskusikan masalah itu.' }
  ],
  correctOptionId: 'C',
  discussion: 'Kata "mendiskusikan" sudah bermakna membahas, sehingga "mengenai" tidak perlu.'
},
{
  id: 'b2-l2-q50',
  text: 'Kalimat penutup yang paling efektif untuk paragraf laporan adalah...',
  options: [
    { id: 'A', text: 'Demikian laporan ini dibuat agar dapat dipergunakan sebagaimana mestinya.' },
    { id: 'B', text: 'Demikianlah laporan ini kami buat untuk dipergunakan sebagaimana mestinya.' },
    { id: 'C', text: 'Laporan ini dibuat untuk dipergunakan sebagaimana mestinya.' },
    { id: 'D', text: 'Demikian laporan ini dibuat sebagaimana mestinya.' }
  ],
  correctOptionId: 'A',
  discussion: 'Pilihan A merupakan penutup laporan yang baku, ringkas, dan umum digunakan.'
},
],

// menulis teks prosedur - menulis kreatif level 2

'b3-l2': [
    
{
  id: 'b3-l2-q1',
  text: 'Perhatikan teks berikut.\n\n“Cara Membuat Teh Manis:\n1. Siapkan gelas dan sendok.\n2. Masukkan gula ke dalam gelas.\n3. Tuangkan air panas.\n4. Aduk hingga gula larut.”\n\nTujuan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Menceritakan pengalaman membuat teh' },
    { id: 'B', text: 'Menjelaskan manfaat teh manis' },
    { id: 'C', text: 'Memberi petunjuk membuat teh manis' },
    { id: 'D', text: 'Menggambarkan rasa teh manis' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur bertujuan memberikan petunjuk melakukan sesuatu.\nKesimpulan: Tujuan teks adalah memberi petunjuk membuat teh manis.'
},
{
  id: 'b3-l2-q2',
  text: 'Kalimat yang tepat digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Saya sangat senang membuat kue.' },
    { id: 'B', text: 'Kue ini terasa sangat enak.' },
    { id: 'C', text: 'Panaskan oven selama 10 menit.' },
    { id: 'D', text: 'Kue tersebut dibuat kemarin.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur menggunakan kalimat perintah.\nKesimpulan: Kalimat yang tepat adalah “Panaskan oven selama 10 menit.”'
},
{
  id: 'b3-l2-q3',
  text: 'Bagian teks prosedur yang berisi langkah-langkah ditandai dengan...',
  options: [
    { id: 'A', text: 'Kalimat deskriptif' },
    { id: 'B', text: 'Urutan perintah yang sistematis' },
    { id: 'C', text: 'Pendapat penulis' },
    { id: 'D', text: 'Cerita pengalaman' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Langkah-langkah disusun berurutan dan berupa perintah.\nKesimpulan: Ditandai dengan urutan perintah sistematis.'
},
{
  id: 'b3-l2-q4',
  text: 'Kata kerja yang tepat digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Menghayati' },
    { id: 'B', text: 'Membayangkan' },
    { id: 'C', text: 'Memanaskan' },
    { id: 'D', text: 'Mengingat' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata kerja prosedur bersifat operasional.\nKesimpulan: Kata kerja yang tepat adalah “memanaskan”.'
},
{
  id: 'b3-l2-q5',
  text: 'Konjungsi yang sering digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Namun' },
    { id: 'B', text: 'Karena' },
    { id: 'C', text: 'Kemudian' },
    { id: 'D', text: 'Walaupun' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Konjungsi prosedur menunjukkan urutan waktu.\nKesimpulan: Kata “kemudian” paling tepat.'
},
{
  id: 'b3-l2-q6',
  text: 'Susunan struktur teks prosedur yang benar adalah...',
  options: [
    { id: 'A', text: 'Langkah – Tujuan – Penutup' },
    { id: 'B', text: 'Tujuan – Bahan/Alat – Langkah-langkah' },
    { id: 'C', text: 'Judul – Cerita – Kesimpulan' },
    { id: 'D', text: 'Pendahuluan – Isi – Penutup' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Struktur teks prosedur terdiri dari tujuan, bahan/alat, dan langkah.\nKesimpulan: Urutan yang benar adalah Tujuan – Bahan – Langkah.'
},
{
  id: 'b3-l2-q7',
  text: 'Kalimat berikut yang TIDAK sesuai dengan teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Siapkan semua bahan yang diperlukan.' },
    { id: 'B', text: 'Aduk campuran hingga rata.' },
    { id: 'C', text: 'Hasil masakan ini sangat lezat.' },
    { id: 'D', text: 'Masukkan adonan ke dalam loyang.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur tidak berisi penilaian rasa.\nKesimpulan: Kalimat yang tidak sesuai adalah “Hasil masakan ini sangat lezat.”'
},
{
  id: 'b3-l2-q8',
  text: 'Tujuan penggunaan penomoran dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Mempercantik teks' },
    { id: 'B', text: 'Menunjukkan urutan langkah' },
    { id: 'C', text: 'Menarik perhatian pembaca' },
    { id: 'D', text: 'Menunjukkan pendapat penulis' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penomoran memudahkan mengikuti urutan.\nKesimpulan: Digunakan untuk menunjukkan urutan langkah.'
},
{
  id: 'b3-l2-q9',
  text: 'Kalimat perintah biasanya diawali dengan...',
  options: [
    { id: 'A', text: 'Kata tanya' },
    { id: 'B', text: 'Kata sifat' },
    { id: 'C', text: 'Kata kerja' },
    { id: 'D', text: 'Kata sambung' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat perintah diawali kata kerja.\nKesimpulan: Diawali dengan kata kerja.'
},
{
  id: 'b3-l2-q10',
  text: 'Ciri kebahasaan teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Menggunakan majas' },
    { id: 'B', text: 'Menggunakan kata kerja imperatif' },
    { id: 'C', text: 'Mengandung dialog' },
    { id: 'D', text: 'Menggunakan sudut pandang orang pertama' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Bahasa prosedur bersifat perintah.\nKesimpulan: Menggunakan kata kerja imperatif.'
},
{
  id: 'b3-l2-q11',
  text: 'Perhatikan penggalan teks berikut.\n\n“Langkah pertama yang harus dilakukan adalah mencuci tangan hingga bersih.”\n\nKalimat tersebut berfungsi sebagai...',
  options: [
    { id: 'A', text: 'Kalimat pembuka cerita' },
    { id: 'B', text: 'Kalimat perintah dalam langkah prosedur' },
    { id: 'C', text: 'Kalimat penutup teks' },
    { id: 'D', text: 'Kalimat opini penulis' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kalimat tersebut berisi perintah yang harus dilakukan.\nKesimpulan: Kalimat tersebut adalah kalimat perintah dalam langkah prosedur.'
},
{
  id: 'b3-l2-q12',
  text: 'Kata berikut yang PALING tepat digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Seandainya' },
    { id: 'B', text: 'Bayangkanlah' },
    { id: 'C', text: 'Campurkan' },
    { id: 'D', text: 'Mungkin' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur menggunakan kata kerja operasional.\nKesimpulan: Kata “campurkan” paling tepat.'
},
{
  id: 'b3-l2-q13',
  text: 'Tujuan utama penulisan teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Menghibur pembaca' },
    { id: 'B', text: 'Memberikan informasi umum' },
    { id: 'C', text: 'Menjelaskan cara melakukan sesuatu' },
    { id: 'D', text: 'Menyampaikan pendapat pribadi' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur berisi langkah-langkah melakukan sesuatu.\nKesimpulan: Tujuan utamanya menjelaskan cara melakukan sesuatu.'
},
{
  id: 'b3-l2-q14',
  text: 'Kalimat berikut yang termasuk kalimat imperatif adalah...',
  options: [
    { id: 'A', text: 'Air tersebut terasa dingin.' },
    { id: 'B', text: 'Apakah air sudah mendidih?' },
    { id: 'C', text: 'Rebus air hingga mendidih.' },
    { id: 'D', text: 'Air akan direbus nanti.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat imperatif berisi perintah.\nKesimpulan: “Rebus air hingga mendidih” adalah kalimat imperatif.'
},
{
  id: 'b3-l2-q15',
  text: 'Penggunaan kata “setelah itu” dalam teks prosedur berfungsi untuk...',
  options: [
    { id: 'A', text: 'Menjelaskan akibat' },
    { id: 'B', text: 'Menunjukkan perbandingan' },
    { id: 'C', text: 'Menunjukkan urutan langkah' },
    { id: 'D', text: 'Menunjukkan pendapat' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata tersebut menunjukkan urutan kegiatan.\nKesimpulan: Digunakan untuk menunjukkan urutan langkah.'
},
{
  id: 'b3-l2-q16',
  text: 'Bagian teks prosedur yang berisi daftar alat dan bahan biasanya terletak...',
  options: [
    { id: 'A', text: 'Di akhir teks' },
    { id: 'B', text: 'Setelah tujuan' },
    { id: 'C', text: 'Di tengah langkah-langkah' },
    { id: 'D', text: 'Setelah penutup' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Struktur teks prosedur dimulai dari tujuan, lalu alat/bahan.\nKesimpulan: Terletak setelah tujuan.'
},
{
  id: 'b3-l2-q17',
  text: 'Kalimat yang TEPAT digunakan sebagai langkah dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Kue ini sangat disukai anak-anak.' },
    { id: 'B', text: 'Masukkan adonan ke dalam oven.' },
    { id: 'C', text: 'Kue tersebut tampak lezat.' },
    { id: 'D', text: 'Kue itu berwarna cokelat.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Langkah prosedur berupa tindakan.\nKesimpulan: Kalimat yang tepat adalah “Masukkan adonan ke dalam oven.”'
},
{
  id: 'b3-l2-q18',
  text: 'Teks prosedur biasanya ditulis menggunakan sudut pandang...',
  options: [
    { id: 'A', text: 'Orang pertama' },
    { id: 'B', text: 'Orang kedua' },
    { id: 'C', text: 'Orang ketiga' },
    { id: 'D', text: 'Campuran' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks prosedur langsung memberi perintah kepada pembaca.\nKesimpulan: Menggunakan sudut pandang orang kedua.'
},
{
  id: 'b3-l2-q19',
  text: 'Manakah yang merupakan ciri kebahasaan teks prosedur?',
  options: [
    { id: 'A', text: 'Banyak menggunakan majas' },
    { id: 'B', text: 'Menggunakan kata kerja aktif' },
    { id: 'C', text: 'Mengandung dialog' },
    { id: 'D', text: 'Menggunakan bahasa kiasan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks prosedur menggunakan kata kerja aktif.\nKesimpulan: Ciri kebahasaannya adalah penggunaan kata kerja aktif.'
},
{
  id: 'b3-l2-q20',
  text: 'Urutan langkah dalam teks prosedur harus disusun...',
  options: [
    { id: 'A', text: 'Secara acak' },
    { id: 'B', text: 'Berdasarkan perasaan penulis' },
    { id: 'C', text: 'Secara logis dan sistematis' },
    { id: 'D', text: 'Berdasarkan panjang kalimat' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Langkah prosedur harus mudah diikuti.\nKesimpulan: Disusun secara logis dan sistematis.'
},
{
  id: 'b3-l2-q21',
  text: 'Penggunaan kata kerja seperti “potong”, “tuang”, dan “aduk” menunjukkan bahwa teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Teks narasi' },
    { id: 'B', text: 'Teks deskripsi' },
    { id: 'C', text: 'Teks prosedur' },
    { id: 'D', text: 'Teks eksposisi' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata kerja tersebut menunjukkan tindakan.\nKesimpulan: Termasuk teks prosedur.'
},
{
  id: 'b3-l2-q22',
  text: 'Kalimat yang paling tepat digunakan sebagai tujuan teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Teks ini sangat menarik untuk dibaca.' },
    { id: 'B', text: 'Cara membuat jus mangga yang segar.' },
    { id: 'C', text: 'Jus mangga terasa manis.' },
    { id: 'D', text: 'Mangga adalah buah tropis.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tujuan berisi apa yang akan dibuat.\nKesimpulan: Kalimat yang tepat adalah “Cara membuat jus mangga yang segar.”'
},
{
  id: 'b3-l2-q23',
  text: 'Kesalahan yang sering terjadi dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Langkah tidak berurutan' },
    { id: 'B', text: 'Menggunakan kata kerja' },
    { id: 'C', text: 'Menggunakan penomoran' },
    { id: 'D', text: 'Menggunakan bahasa baku' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Langkah yang tidak berurutan membuat prosedur sulit diikuti.\nKesimpulan: Kesalahan umum adalah langkah tidak berurutan.'
},
{
  id: 'b3-l2-q24',
  text: 'Kalimat berikut yang paling efektif dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Kemudian setelah itu barulah selanjutnya dilakukan.' },
    { id: 'B', text: 'Lakukan langkah ini dengan sangat hati-hati sekali.' },
    { id: 'C', text: 'Aduk campuran hingga merata.' },
    { id: 'D', text: 'Hal tersebut sebaiknya dilakukan.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat efektif singkat, jelas, dan langsung.\nKesimpulan: Kalimat paling efektif adalah “Aduk campuran hingga merata.”'
},
{
  id: 'b3-l2-q25',
  text: 'Mengapa teks prosedur harus menggunakan bahasa yang jelas?',
  options: [
    { id: 'A', text: 'Agar terlihat menarik' },
    { id: 'B', text: 'Agar pembaca tidak salah memahami langkah' },
    { id: 'C', text: 'Agar teks menjadi panjang' },
    { id: 'D', text: 'Agar bersifat sastra' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Bahasa jelas mencegah kesalahan pelaksanaan.\nKesimpulan: Agar pembaca tidak salah memahami langkah.'
},
{
  id: 'b3-l2-q26',
  text: 'Perhatikan teks prosedur berikut!\n\nCara Membuat Teh Hangat:\n1) Siapkan gelas dan teh celup.\n2) Masukkan teh celup ke dalam gelas.\n3) Tuangkan air panas.\n4) Diamkan beberapa menit.\n\nBagian yang menunjukkan tujuan teks prosedur tersebut adalah...',
  options: [
    { id: 'A', text: 'Siapkan gelas dan teh celup' },
    { id: 'B', text: 'Cara Membuat Teh Hangat' },
    { id: 'C', text: 'Tuangkan air panas' },
    { id: 'D', text: 'Diamkan beberapa menit' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tujuan teks prosedur biasanya terdapat pada judul.\nLangkah-langkah: Judul menunjukkan maksud kegiatan yang akan dilakukan.\nKesimpulan: Tujuan teks ditunjukkan oleh judul.'
},
{
  id: 'b3-l2-q27',
  text: 'Kalimat berikut yang termasuk kalimat perintah dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Teh hangat sangat bermanfaat.' },
    { id: 'B', text: 'Teh dibuat dari daun pilihan.' },
    { id: 'C', text: 'Tuangkan air panas ke dalam gelas.' },
    { id: 'D', text: 'Teh dapat disajikan kapan saja.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat perintah berisi instruksi yang harus dilakukan.\nLangkah-langkah: Perhatikan kata kerja imperatif seperti tuangkan, campurkan, aduk.\nKesimpulan: Kalimat perintah terdapat pada pilihan C.'
},
{
  id: 'b3-l2-q28',
  text: 'Urutan langkah yang tepat dalam teks prosedur bertujuan untuk...',
  options: [
    { id: 'A', text: 'Membuat teks menjadi panjang' },
    { id: 'B', text: 'Mempermudah pembaca mengikuti langkah' },
    { id: 'C', text: 'Menunjukkan gaya bahasa penulis' },
    { id: 'D', text: 'Menambah unsur cerita' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks prosedur harus runtut.\nLangkah-langkah: Urutan langkah membantu pembaca melakukan kegiatan dengan benar.\nKesimpulan: Tujuan urutan langkah adalah mempermudah pembaca.'
},
{
  id: 'b3-l2-q29',
  text: 'Kata hubung yang tepat digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Namun' },
    { id: 'B', text: 'Karena' },
    { id: 'C', text: 'Kemudian' },
    { id: 'D', text: 'Walaupun' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur menggunakan kata hubung urutan.\nLangkah-langkah: Kata seperti kemudian, setelah itu, lalu sering digunakan.\nKesimpulan: Kata hubung yang tepat adalah "kemudian".'
},
{
  id: 'b3-l2-q30',
  text: 'Bagian alat dan bahan dalam teks prosedur berfungsi untuk...',
  options: [
    { id: 'A', text: 'Menjelaskan latar belakang kegiatan' },
    { id: 'B', text: 'Memberi gambaran cerita' },
    { id: 'C', text: 'Menunjukkan apa saja yang diperlukan' },
    { id: 'D', text: 'Menarik minat pembaca' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Alat dan bahan menunjukkan kebutuhan sebelum melakukan langkah.\nLangkah-langkah: Pembaca dapat mempersiapkan semua keperluan terlebih dahulu.\nKesimpulan: Fungsinya adalah menunjukkan apa saja yang diperlukan.'
},
{
  id: 'b3-l2-q31',
  text: 'Kalimat yang tepat untuk penutup teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Itulah cara melakukan kegiatan tersebut.' },
    { id: 'B', text: 'Langkah pertama sangat penting.' },
    { id: 'C', text: 'Bahan-bahan mudah ditemukan.' },
    { id: 'D', text: 'Kegiatan ini cukup menarik.' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Penutup berfungsi mengakhiri teks prosedur.\nLangkah-langkah: Biasanya berisi kesimpulan atau harapan.\nKesimpulan: Kalimat penutup yang tepat adalah pilihan A.'
},
{
  id: 'b3-l2-q32',
  text: 'Ciri utama teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Mengandung unsur imajinasi' },
    { id: 'B', text: 'Menggunakan alur cerita' },
    { id: 'C', text: 'Berisi langkah-langkah sistematis' },
    { id: 'D', text: 'Mengandung konflik' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur bersifat instruktif.\nLangkah-langkah: Isinya berupa langkah-langkah berurutan.\nKesimpulan: Ciri utama teks prosedur adalah langkah sistematis.'
},
{
  id: 'b3-l2-q33',
  text: 'Kalimat berikut yang tidak sesuai digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Siapkan alat dan bahan.' },
    { id: 'B', text: 'Lakukan langkah berikut dengan hati-hati.' },
    { id: 'C', text: 'Aku merasa senang membuatnya.' },
    { id: 'D', text: 'Setelah itu, aduk hingga merata.' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur bersifat objektif.\nLangkah-langkah: Tidak menggunakan perasaan pribadi.\nKesimpulan: Kalimat yang tidak sesuai adalah pilihan C.'
},
{
  id: 'b3-l2-q34',
  text: 'Tujuan utama teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Menghibur pembaca' },
    { id: 'B', text: 'Memberi informasi langkah melakukan sesuatu' },
    { id: 'C', text: 'Menceritakan pengalaman pribadi' },
    { id: 'D', text: 'Menyampaikan pendapat penulis' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks prosedur bersifat instruksi.\nLangkah-langkah: Memberikan panduan agar kegiatan berhasil.\nKesimpulan: Tujuan utamanya adalah memberi langkah melakukan sesuatu.'
},
{
  id: 'b3-l2-q35',
  text: 'Bahasa yang digunakan dalam teks prosedur sebaiknya...',
  options: [
    { id: 'A', text: 'Berbelit-belit' },
    { id: 'B', text: 'Puitis dan imajinatif' },
    { id: 'C', text: 'Jelas, singkat, dan lugas' },
    { id: 'D', text: 'Bersifat naratif' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Bahasa teks prosedur harus mudah dipahami.\nLangkah-langkah: Gunakan kalimat langsung dan sederhana.\nKesimpulan: Bahasa yang tepat adalah jelas dan lugas.'
},
{
  id: 'b3-l2-q36',
  text: 'Kalimat yang tepat digunakan sebagai langkah dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Kegiatan ini sangat menyenangkan.' },
    { id: 'B', text: 'Aduk campuran hingga rata.' },
    { id: 'C', text: 'Hasilnya sangat memuaskan.' },
    { id: 'D', text: 'Proses ini cukup sulit.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Langkah berisi tindakan.\nLangkah-langkah: Gunakan kata kerja perintah.\nKesimpulan: Kalimat langkah yang tepat adalah pilihan B.'
},
{
  id: 'b3-l2-q37',
  text: 'Struktur teks prosedur yang benar adalah...',
  options: [
    { id: 'A', text: 'Orientasi – konflik – resolusi' },
    { id: 'B', text: 'Pendahuluan – isi – penutup' },
    { id: 'C', text: 'Tujuan – alat/bahan – langkah-langkah' },
    { id: 'D', text: 'Abstrak – ulasan – simpulan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Struktur teks prosedur bersifat khas.\nLangkah-langkah: Diawali tujuan, dilanjutkan alat dan langkah.\nKesimpulan: Struktur yang benar adalah pilihan C.'
},
{
  id: 'b3-l2-q38',
  text: 'Teks prosedur biasanya ditemukan dalam...',
  options: [
    { id: 'A', text: 'Cerpen' },
    { id: 'B', text: 'Buku petunjuk' },
    { id: 'C', text: 'Puisi' },
    { id: 'D', text: 'Novel' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Buku petunjuk berisi langkah-langkah.\nLangkah-langkah: Teks prosedur sering digunakan dalam panduan.\nKesimpulan: Jawaban yang benar adalah buku petunjuk.'
},
{
  id: 'b3-l2-q39',
  text: 'Kata kerja yang sering digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Membayangkan' },
    { id: 'B', text: 'Mengingat' },
    { id: 'C', text: 'Menyiapkan' },
    { id: 'D', text: 'Merasakan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata kerja tindakan dominan dalam teks prosedur.\nLangkah-langkah: Digunakan untuk memerintah atau mengarahkan.\nKesimpulan: Kata kerja yang tepat adalah menyiapkan.'
},
{
  id: 'b3-l2-q40',
  text: 'Fungsi penggunaan nomor atau urutan angka dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Menarik perhatian pembaca' },
    { id: 'B', text: 'Menunjukkan urutan langkah' },
    { id: 'C', text: 'Memperindah teks' },
    { id: 'D', text: 'Menambah panjang teks' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Nomor menunjukkan runtutan.\nLangkah-langkah: Membantu pembaca mengikuti tahapan.\nKesimpulan: Fungsinya untuk menunjukkan urutan langkah.'
},
{
  id: 'b3-l2-q41',
  text: 'Kalimat imperatif adalah kalimat yang berfungsi untuk...',
  options: [
    { id: 'A', text: 'Menyampaikan pendapat' },
    { id: 'B', text: 'Memberi perintah atau larangan' },
    { id: 'C', text: 'Mengungkapkan perasaan' },
    { id: 'D', text: 'Menjelaskan latar' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kalimat imperatif digunakan dalam instruksi.\nLangkah-langkah: Digunakan dalam teks prosedur.\nKesimpulan: Fungsinya adalah memberi perintah.'
},
{
  id: 'b3-l2-q42',
  text: 'Teks prosedur harus disusun secara...',
  options: [
    { id: 'A', text: 'Acak' },
    { id: 'B', text: 'Bersifat pribadi' },
    { id: 'C', text: 'Logis dan runtut' },
    { id: 'D', text: 'Imajinatif' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Langkah harus masuk akal.\nLangkah-langkah: Urutan yang salah membuat kegiatan gagal.\nKesimpulan: Teks prosedur harus logis dan runtut.'
},
{
  id: 'b3-l2-q43',
  text: 'Bagian teks prosedur yang berisi cara melakukan kegiatan disebut...',
  options: [
    { id: 'A', text: 'Tujuan' },
    { id: 'B', text: 'Alat dan bahan' },
    { id: 'C', text: 'Langkah-langkah' },
    { id: 'D', text: 'Penutup' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Bagian inti teks prosedur.\nLangkah-langkah: Berisi urutan tindakan.\nKesimpulan: Jawaban yang benar adalah langkah-langkah.'
},
{
  id: 'b3-l2-q44',
  text: 'Kalimat berikut yang paling tepat digunakan dalam teks prosedur adalah...',
  options: [
    { id: 'A', text: 'Kegiatan ini sangat menarik.' },
    { id: 'B', text: 'Campurkan bahan hingga merata.' },
    { id: 'C', text: 'Aku sangat menyukai kegiatan ini.' },
    { id: 'D', text: 'Kegiatan ini cukup melelahkan.' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kalimat perintah paling tepat.\nLangkah-langkah: Gunakan kata kerja tindakan.\nKesimpulan: Kalimat yang tepat adalah pilihan B.'
},
{
  id: 'b3-l2-q45',
  text: 'Teks prosedur bersifat...',
  options: [
    { id: 'A', text: 'Subjektif' },
    { id: 'B', text: 'Persuasif' },
    { id: 'C', text: 'Instruktif' },
    { id: 'D', text: 'Naratif' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur memberi instruksi.\nLangkah-langkah: Bertujuan agar pembaca melakukan sesuatu.\nKesimpulan: Sifat teks prosedur adalah instruktif.'
},
{
  id: 'b3-l2-q46',
  text: 'Kata “setelah itu” dalam teks prosedur berfungsi sebagai...',
  options: [
    { id: 'A', text: 'Kata keterangan waktu' },
    { id: 'B', text: 'Kata kerja' },
    { id: 'C', text: 'Kata benda' },
    { id: 'D', text: 'Kata sifat' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Menunjukkan urutan waktu.\nLangkah-langkah: Membantu runtutan langkah.\nKesimpulan: Fungsinya sebagai keterangan waktu.'
},
{
  id: 'b3-l2-q47',
  text: 'Teks prosedur tidak memuat...',
  options: [
    { id: 'A', text: 'Langkah-langkah' },
    { id: 'B', text: 'Tujuan kegiatan' },
    { id: 'C', text: 'Konflik cerita' },
    { id: 'D', text: 'Alat dan bahan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks prosedur bukan teks cerita.\nLangkah-langkah: Tidak mengandung konflik.\nKesimpulan: Jawaban yang benar adalah konflik cerita.'
},
{
  id: 'b3-l2-q48',
  text: 'Kalimat yang bersifat larangan dalam teks prosedur biasanya ditandai dengan kata...',
  options: [
    { id: 'A', text: 'Silakan' },
    { id: 'B', text: 'Jangan' },
    { id: 'C', text: 'Segera' },
    { id: 'D', text: 'Kemudian' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Larangan bersifat imperatif negatif.\nLangkah-langkah: Kata jangan sering digunakan.\nKesimpulan: Penanda larangan adalah kata jangan.'
},
{
  id: 'b3-l2-q49',
  text: 'Bahasa dalam teks prosedur harus mudah dipahami agar...',
  options: [
    { id: 'A', text: 'Teks menjadi menarik' },
    { id: 'B', text: 'Pembaca tidak salah langkah' },
    { id: 'C', text: 'Teks terlihat panjang' },
    { id: 'D', text: 'Menunjukkan kemampuan penulis' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kejelasan bahasa sangat penting.\nLangkah-langkah: Agar kegiatan berhasil dilakukan.\nKesimpulan: Tujuannya agar pembaca tidak salah langkah.'
},
{
  id: 'b3-l2-q50',
  text: 'Teks prosedur yang baik harus disusun berdasarkan...',
  options: [
    { id: 'A', text: 'Perasaan penulis' },
    { id: 'B', text: 'Pengalaman pribadi' },
    { id: 'C', text: 'Urutan yang logis dan jelas' },
    { id: 'D', text: 'Gaya bahasa sastra' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Urutan logis menentukan keberhasilan.\nLangkah-langkah: Langkah yang tidak runtut akan membingungkan.\nKesimpulan: Teks prosedur harus logis dan jelas.'
},
],

// Interpretasi kritis - literasi membaca level 3

'b1-l3': [

{
  id: 'b1-l3-q1',
  text: 'Bacalah teks berikut.\n\nKemajuan teknologi digital membuat informasi dapat diakses dengan sangat cepat. Namun, tidak semua informasi yang beredar di internet dapat dipercaya kebenarannya. Oleh karena itu, masyarakat perlu memiliki kemampuan berpikir kritis agar tidak mudah terpengaruh oleh informasi yang menyesatkan.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Semua informasi di internet bersifat benar' },
    { id: 'B', text: 'Teknologi digital seharusnya dihindari' },
    { id: 'C', text: 'Masyarakat harus selektif dalam menerima informasi' },
    { id: 'D', text: 'Informasi digital lebih berbahaya daripada cetak' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menekankan pentingnya sikap kritis terhadap informasi.\nKesimpulan: Masyarakat harus selektif dalam menerima informasi.'
},
{
  id: 'b1-l3-q2',
  text: 'Bacalah teks berikut.\n\nBanyak siswa menganggap membaca sebagai kegiatan yang membosankan. Padahal, dengan membaca, seseorang dapat memperluas wawasan dan melatih kemampuan berpikir. Kebiasaan membaca sejak dini akan memberikan manfaat jangka panjang bagi perkembangan intelektual.\n\nTujuan penulis dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Mengkritik siswa yang malas membaca' },
    { id: 'B', text: 'Menghibur pembaca dengan cerita' },
    { id: 'C', text: 'Meyakinkan pembaca tentang manfaat membaca' },
    { id: 'D', text: 'Melaporkan hasil penelitian membaca' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis berusaha menanamkan pandangan positif tentang membaca.\nKesimpulan: Tujuan penulis adalah meyakinkan pembaca tentang manfaat membaca.'
},
{
  id: 'b1-l3-q3',
  text: 'Bacalah teks berikut.\n\nKerusakan lingkungan sering kali disebabkan oleh perilaku manusia yang tidak bertanggung jawab. Penebangan hutan secara liar dan pembuangan sampah sembarangan menjadi contoh nyata kurangnya kesadaran terhadap alam.\n\nSikap penulis terhadap permasalahan tersebut adalah...',
  options: [
    { id: 'A', text: 'Netral dan tidak memihak' },
    { id: 'B', text: 'Mendukung aktivitas manusia' },
    { id: 'C', text: 'Mengkritik perilaku manusia' },
    { id: 'D', text: 'Mengabaikan kerusakan lingkungan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis menyoroti dampak negatif perilaku manusia.\nKesimpulan: Sikap penulis adalah mengkritik perilaku manusia.'
},
{
  id: 'b1-l3-q4',
  text: 'Bacalah teks berikut.\n\nMedia sosial memberikan ruang bagi siapa pun untuk menyampaikan pendapat. Namun, kebebasan tersebut harus disertai tanggung jawab agar tidak menimbulkan konflik di masyarakat.\n\nNilai yang ingin disampaikan penulis adalah...',
  options: [
    { id: 'A', text: 'Kebebasan tanpa batas' },
    { id: 'B', text: 'Tanggung jawab dalam berpendapat' },
    { id: 'C', text: 'Larangan menggunakan media sosial' },
    { id: 'D', text: 'Media sosial sumber konflik' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penulis menekankan keseimbangan antara kebebasan dan tanggung jawab.\nKesimpulan: Nilai yang disampaikan adalah tanggung jawab dalam berpendapat.'
},
{
  id: 'b1-l3-q5',
  text: 'Bacalah teks berikut.\n\nPendidikan tidak hanya bertujuan mencerdaskan peserta didik secara akademis, tetapi juga membentuk karakter dan sikap yang baik dalam kehidupan bermasyarakat.\n\nSimpulan yang tepat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Pendidikan hanya fokus pada nilai akademis' },
    { id: 'B', text: 'Karakter lebih penting daripada ilmu' },
    { id: 'C', text: 'Pendidikan berperan dalam pembentukan akademis dan karakter' },
    { id: 'D', text: 'Pendidikan tidak berpengaruh pada sikap' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menyebutkan dua tujuan utama pendidikan.\nKesimpulan: Pendidikan membentuk akademis dan karakter.'
},
{
  id: 'b1-l3-q6',
  text: 'Bacalah teks berikut.\n\nMembiasakan hidup disiplin sejak dini akan membantu seseorang dalam mengatur waktu dan tanggung jawabnya di masa depan.\n\nPesan moral dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Disiplin hanya penting saat dewasa' },
    { id: 'B', text: 'Disiplin dapat dilatih sejak dini' },
    { id: 'C', text: 'Waktu tidak perlu diatur' },
    { id: 'D', text: 'Tanggung jawab muncul dengan sendirinya' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks menekankan manfaat kebiasaan disiplin sejak dini.\nKesimpulan: Disiplin dapat dan perlu dilatih sejak dini.'
},
{
  id: 'b1-l3-q7',
  text: 'Bacalah teks berikut.\n\nKemajuan suatu bangsa sangat bergantung pada kualitas sumber daya manusianya. Oleh karena itu, peningkatan kualitas pendidikan menjadi hal yang tidak dapat diabaikan.\n\nHubungan sebab-akibat dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Bangsa maju menyebabkan pendidikan menurun' },
    { id: 'B', text: 'Pendidikan tidak berpengaruh pada bangsa' },
    { id: 'C', text: 'Kualitas pendidikan memengaruhi kemajuan bangsa' },
    { id: 'D', text: 'Kemajuan bangsa menghambat pendidikan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks mengaitkan kualitas SDM dan pendidikan dengan kemajuan bangsa.\nKesimpulan: Kualitas pendidikan memengaruhi kemajuan bangsa.'
},
{
  id: 'b1-l3-q8',
  text: 'Bacalah teks berikut.\n\nPenggunaan gawai secara berlebihan dapat mengurangi interaksi sosial secara langsung, terutama pada remaja.\n\nMakna implisit dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Gawai harus dilarang' },
    { id: 'B', text: 'Interaksi langsung tetap penting' },
    { id: 'C', text: 'Remaja tidak membutuhkan teman' },
    { id: 'D', text: 'Gawai selalu berdampak positif' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks mengisyaratkan pentingnya keseimbangan penggunaan gawai.\nKesimpulan: Interaksi langsung tetap penting.'
},
{
  id: 'b1-l3-q9',
  text: 'Bacalah teks berikut.\n\nMeskipun banyak tantangan, para petani tetap bekerja keras demi menjaga ketersediaan pangan bagi masyarakat.\n\nSikap penulis terhadap petani adalah...',
  options: [
    { id: 'A', text: 'Meremehkan' },
    { id: 'B', text: 'Acuh tak acuh' },
    { id: 'C', text: 'Menghargai dan menghormati' },
    { id: 'D', text: 'Menyalahkan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis menampilkan petani sebagai pihak yang berjasa.\nKesimpulan: Sikap penulis adalah menghargai petani.'
},
{
  id: 'b1-l3-q10',
  text: 'Bacalah teks berikut.\n\nKebiasaan membuang sampah pada tempatnya mencerminkan kepedulian seseorang terhadap lingkungan sekitar.\n\nPernyataan tersebut menunjukkan bahwa...',
  options: [
    { id: 'A', text: 'Lingkungan tidak perlu dijaga' },
    { id: 'B', text: 'Perilaku mencerminkan sikap' },
    { id: 'C', text: 'Sampah tidak berdampak apa-apa' },
    { id: 'D', text: 'Kebersihan hanya tugas petugas' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks mengaitkan tindakan dengan sikap peduli.\nKesimpulan: Perilaku mencerminkan sikap.'
},
{
  id: 'b1-l3-q11',
  text: 'Bacalah teks berikut!\n\nKemajuan teknologi digital membawa perubahan besar dalam cara manusia berkomunikasi. Informasi dapat tersebar dengan sangat cepat melalui media sosial. Namun, kemudahan ini juga memunculkan tantangan berupa maraknya informasi palsu yang sulit dibedakan dari fakta.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Teknologi digital selalu membawa dampak positif' },
    { id: 'B', text: 'Media sosial hanya berisi informasi yang salah' },
    { id: 'C', text: 'Kemajuan teknologi perlu diimbangi dengan sikap kritis' },
    { id: 'D', text: 'Informasi palsu tidak dapat dihindari sama sekali' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks membahas manfaat dan tantangan teknologi digital.\nKesimpulan: Pembaca diharapkan bersikap kritis dalam menyaring informasi.'
},
{
  id: 'b1-l3-q12',
  text: 'Bacalah teks berikut!\n\nBanyak remaja menghabiskan waktu berjam-jam di depan layar gawai. Jika tidak diimbangi dengan aktivitas fisik dan interaksi sosial, kebiasaan ini dapat berdampak buruk bagi kesehatan dan perkembangan kepribadian.\n\nPesan utama yang ingin disampaikan penulis adalah...',
  options: [
    { id: 'A', text: 'Gawai harus dilarang bagi remaja' },
    { id: 'B', text: 'Penggunaan gawai perlu dibatasi dan diseimbangkan' },
    { id: 'C', text: 'Aktivitas fisik tidak penting bagi remaja' },
    { id: 'D', text: 'Interaksi sosial hanya bisa dilakukan secara langsung' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penulis menyoroti dampak negatif jika penggunaan gawai berlebihan.\nKesimpulan: Gawai boleh digunakan, tetapi harus seimbang.'
},
{
  id: 'b1-l3-q13',
  text: 'Bacalah teks berikut!\n\nKerusakan lingkungan sering kali disebabkan oleh aktivitas manusia yang tidak bertanggung jawab. Penebangan liar dan pencemaran sungai menunjukkan rendahnya kesadaran akan pentingnya menjaga alam.\n\nSikap penulis terhadap permasalahan tersebut adalah...',
  options: [
    { id: 'A', text: 'Netral tanpa pendapat' },
    { id: 'B', text: 'Menyalahkan alam' },
    { id: 'C', text: 'Mengkritik perilaku manusia' },
    { id: 'D', text: 'Membenarkan aktivitas manusia' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis menilai manusia sebagai penyebab utama kerusakan lingkungan.\nKesimpulan: Teks bersifat kritis terhadap perilaku manusia.'
},
{
  id: 'b1-l3-q14',
  text: 'Bacalah teks berikut!\n\nBudaya membaca di kalangan pelajar mulai menurun seiring meningkatnya hiburan digital. Padahal, membaca buku dapat memperluas wawasan dan melatih kemampuan berpikir kritis.\n\nTujuan utama penulis menulis teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Mengkritik teknologi digital' },
    { id: 'B', text: 'Mengajak pelajar kembali gemar membaca' },
    { id: 'C', text: 'Membandingkan buku dan gawai' },
    { id: 'D', text: 'Menjelaskan jenis hiburan digital' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penulis menekankan manfaat membaca.\nKesimpulan: Teks bertujuan mengajak pembaca meningkatkan minat baca.'
},
{
  id: 'b1-l3-q15',
  text: 'Bacalah teks berikut!\n\nDalam sebuah masyarakat, perbedaan pendapat adalah hal yang wajar. Namun, perbedaan tersebut seharusnya disikapi dengan saling menghargai agar tidak menimbulkan konflik.\n\nNilai yang terkandung dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kejujuran' },
    { id: 'B', text: 'Toleransi' },
    { id: 'C', text: 'Keberanian' },
    { id: 'D', text: 'Kedisiplinan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks menekankan sikap saling menghargai.\nKesimpulan: Nilai utama dalam teks adalah toleransi.'
},
{
  id: 'b1-l3-q16',
  text: 'Bacalah teks berikut!\n\nKemajuan ekonomi suatu daerah tidak hanya ditentukan oleh sumber daya alam, tetapi juga oleh kualitas sumber daya manusia yang mampu mengelolanya secara bijak.\n\nMakna implisit dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sumber daya alam tidak penting' },
    { id: 'B', text: 'Pendidikan berperan penting dalam pembangunan' },
    { id: 'C', text: 'Kemajuan ekonomi terjadi secara alami' },
    { id: 'D', text: 'Pembangunan hanya tugas pemerintah' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks menekankan peran manusia dalam pembangunan.\nKesimpulan: Pendidikan dan kualitas SDM sangat penting.'
},
{
  id: 'b1-l3-q17',
  text: 'Bacalah teks berikut!\n\nSikap konsumtif yang berlebihan dapat menyebabkan masalah keuangan di masa depan. Oleh karena itu, kemampuan mengelola keuangan sejak dini menjadi hal yang sangat penting.\n\nPendapat penulis terhadap perilaku konsumtif adalah...',
  options: [
    { id: 'A', text: 'Mendukung' },
    { id: 'B', text: 'Netral' },
    { id: 'C', text: 'Menolak' },
    { id: 'D', text: 'Tidak peduli' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis menunjukkan dampak negatif konsumtif.\nKesimpulan: Penulis menolak perilaku konsumtif berlebihan.'
},
{
  id: 'b1-l3-q18',
  text: 'Bacalah teks berikut!\n\nSekolah tidak hanya berfungsi sebagai tempat belajar akademik, tetapi juga sebagai wadah pembentukan karakter siswa melalui berbagai kegiatan positif.\n\nGagasan utama teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sekolah hanya fokus pada akademik' },
    { id: 'B', text: 'Kegiatan sekolah membuang waktu' },
    { id: 'C', text: 'Sekolah berperan dalam pembentukan karakter' },
    { id: 'D', text: 'Karakter siswa dibentuk di rumah saja' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menyoroti peran ganda sekolah.\nKesimpulan: Sekolah berperan penting dalam pembentukan karakter.'
},
{
  id: 'b1-l3-q19',
  text: 'Bacalah teks berikut!\n\nKesadaran masyarakat untuk menjaga kebersihan lingkungan masih perlu ditingkatkan. Sampah yang dibuang sembarangan dapat menimbulkan berbagai masalah kesehatan.\n\nSimpulan yang tepat berdasarkan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Masalah lingkungan tidak berpengaruh pada kesehatan' },
    { id: 'B', text: 'Kebersihan lingkungan tidak penting' },
    { id: 'C', text: 'Kesadaran menjaga lingkungan harus ditingkatkan' },
    { id: 'D', text: 'Sampah tidak menimbulkan masalah' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menghubungkan kebersihan dengan kesehatan.\nKesimpulan: Kesadaran lingkungan sangat diperlukan.'
},
{
  id: 'b1-l3-q20',
  text: 'Bacalah teks berikut!\n\nKemampuan berpikir kritis membantu seseorang dalam mengambil keputusan yang tepat. Tanpa kemampuan tersebut, seseorang mudah terpengaruh oleh informasi yang menyesatkan.\n\nPesan tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Informasi menyesatkan tidak berbahaya' },
    { id: 'B', text: 'Berpikir kritis tidak diperlukan' },
    { id: 'C', text: 'Berpikir kritis penting dalam kehidupan' },
    { id: 'D', text: 'Keputusan selalu benar' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis menekankan manfaat berpikir kritis.\nKesimpulan: Berpikir kritis penting agar tidak mudah tertipu.'
},
{
  id: 'b1-l3-q21',
  text: 'Bacalah teks berikut!\n\nPerubahan iklim menyebabkan cuaca menjadi semakin tidak menentu. Kondisi ini menuntut manusia untuk lebih bijak dalam menjaga keseimbangan alam.\n\nSikap yang diharapkan penulis dari pembaca adalah...',
  options: [
    { id: 'A', text: 'Mengabaikan perubahan iklim' },
    { id: 'B', text: 'Menjaga keseimbangan alam' },
    { id: 'C', text: 'Menyalahkan pemerintah sepenuhnya' },
    { id: 'D', text: 'Membiarkan alam pulih sendiri' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penulis mengaitkan perubahan iklim dengan tanggung jawab manusia.\nKesimpulan: Pembaca diajak menjaga alam.'
},
{
  id: 'b1-l3-q22',
  text: 'Bacalah teks berikut!\n\nMembaca berita dari berbagai sumber dapat membantu seseorang memperoleh sudut pandang yang lebih luas terhadap suatu peristiwa.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Satu sumber berita sudah cukup' },
    { id: 'B', text: 'Berita tidak perlu diverifikasi' },
    { id: 'C', text: 'Penting bersikap terbuka terhadap informasi' },
    { id: 'D', text: 'Semua berita selalu benar' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks mendorong pembaca melihat berbagai sudut pandang.\nKesimpulan: Keterbukaan informasi itu penting.'
},
{
  id: 'b1-l3-q23',
  text: 'Bacalah teks berikut!\n\nKerja sama dalam tim dapat menghasilkan hasil yang lebih baik dibandingkan bekerja sendiri, terutama jika setiap anggota menjalankan perannya dengan baik.\n\nNilai yang ditekankan dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Individualisme' },
    { id: 'B', text: 'Kerja keras' },
    { id: 'C', text: 'Kerja sama' },
    { id: 'D', text: 'Persaingan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menyoroti manfaat kerja tim.\nKesimpulan: Nilai utama adalah kerja sama.'
},
{
  id: 'b1-l3-q24',
  text: 'Bacalah teks berikut!\n\nKedisiplinan dalam mengatur waktu belajar dapat meningkatkan prestasi siswa. Tanpa disiplin, proses belajar menjadi tidak efektif.\n\nPendapat penulis terhadap kedisiplinan adalah...',
  options: [
    { id: 'A', text: 'Tidak penting' },
    { id: 'B', text: 'Kurang bermanfaat' },
    { id: 'C', text: 'Sangat penting' },
    { id: 'D', text: 'Bersifat opsional' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penulis menekankan hubungan disiplin dan prestasi.\nKesimpulan: Kedisiplinan sangat penting.'
},
{
  id: 'b1-l3-q25',
  text: 'Bacalah teks berikut!\n\nKemajuan suatu bangsa tidak lepas dari peran generasi muda yang berpendidikan, berkarakter, dan memiliki kepedulian sosial.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Pendidikan tidak berpengaruh' },
    { id: 'B', text: 'Generasi muda berperan penting bagi bangsa' },
    { id: 'C', text: 'Kepedulian sosial tidak diperlukan' },
    { id: 'D', text: 'Kemajuan bangsa terjadi secara otomatis' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Penulis menekankan peran generasi muda.\nKesimpulan: Generasi muda menentukan masa depan bangsa.'
},
{
  id: 'b1-l3-q26',
  text: 'Bacalah teks berikut!\n\nKemajuan teknologi digital membawa perubahan besar dalam cara manusia berkomunikasi. Namun, di balik kemudahan tersebut, muncul tantangan berupa menurunnya kualitas interaksi sosial secara langsung.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Teknologi digital hanya membawa dampak negatif' },
    { id: 'B', text: 'Kemajuan teknologi perlu disikapi secara bijak' },
    { id: 'C', text: 'Interaksi langsung sudah tidak diperlukan lagi' },
    { id: 'D', text: 'Teknologi menyebabkan manusia menjadi antisosial sepenuhnya' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks menunjukkan dua sisi teknologi.\nKesimpulan: Teknologi perlu digunakan secara bijak.'
},
{
  id: 'b1-l3-q27',
  text: 'Bacalah teks berikut!\n\nBanyak pelajar menghabiskan waktu berjam-jam di media sosial tanpa menyadari dampaknya terhadap konsentrasi belajar.\n\nSikap penulis terhadap fenomena tersebut adalah...',
  options: [
    { id: 'A', text: 'Mendukung penggunaan media sosial' },
    { id: 'B', text: 'Netral tanpa pendapat' },
    { id: 'C', text: 'Mengkhawatirkan kebiasaan tersebut' },
    { id: 'D', text: 'Menganggapnya sebagai hal wajar' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata “tanpa menyadari dampaknya” menunjukkan kekhawatiran.\nKesimpulan: Penulis bersikap kritis.'
},
{
  id: 'b1-l3-q28',
  text: 'Bacalah teks berikut!\n\nKebiasaan membaca buku cetak mulai tergeser oleh bacaan digital. Meski praktis, bacaan digital sering mengurangi kedalaman pemahaman pembaca.\n\nPesan utama teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Bacaan digital lebih baik dari buku cetak' },
    { id: 'B', text: 'Buku cetak sudah tidak relevan' },
    { id: 'C', text: 'Kemudahan tidak selalu sejalan dengan kualitas' },
    { id: 'D', text: 'Semua orang harus membaca buku cetak' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks membandingkan kemudahan dan kualitas.\nKesimpulan: Kemudahan bisa mengorbankan kedalaman.'
},
{
  id: 'b1-l3-q29',
  text: 'Bacalah teks berikut!\n\nSebagian masyarakat masih membuang sampah sembarangan meskipun telah tersedia fasilitas kebersihan.\n\nMakna tersirat dari pernyataan tersebut adalah...',
  options: [
    { id: 'A', text: 'Fasilitas kebersihan tidak penting' },
    { id: 'B', text: 'Kesadaran masyarakat masih rendah' },
    { id: 'C', text: 'Pemerintah tidak bertanggung jawab' },
    { id: 'D', text: 'Masyarakat tidak membutuhkan aturan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Masalah terletak pada perilaku, bukan fasilitas.\nKesimpulan: Kesadaran masyarakat perlu ditingkatkan.'
},
{
  id: 'b1-l3-q30',
  text: 'Bacalah teks berikut!\n\nPendidikan karakter tidak cukup hanya diajarkan melalui teori, tetapi harus diterapkan dalam kehidupan sehari-hari.\n\nPendapat tersebut menekankan bahwa...',
  options: [
    { id: 'A', text: 'Teori lebih penting daripada praktik' },
    { id: 'B', text: 'Karakter terbentuk melalui pembiasaan' },
    { id: 'C', text: 'Sekolah tidak perlu mengajarkan karakter' },
    { id: 'D', text: 'Pendidikan karakter tidak penting' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kata “diterapkan” menunjukkan praktik nyata.\nKesimpulan: Karakter dibangun lewat kebiasaan.'
},
{
  id: 'b1-l3-q31',
  text: 'Bacalah teks berikut!\n\nKemacetan di kota besar bukan hanya disebabkan oleh jumlah kendaraan, tetapi juga rendahnya kesadaran berlalu lintas.\n\nSimpulan yang tepat adalah...',
  options: [
    { id: 'A', text: 'Jumlah kendaraan adalah satu-satunya penyebab' },
    { id: 'B', text: 'Kemacetan tidak bisa diatasi' },
    { id: 'C', text: 'Perilaku pengguna jalan berpengaruh besar' },
    { id: 'D', text: 'Kemacetan hanya terjadi di kota besar' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Faktor perilaku ditekankan dalam teks.\nKesimpulan: Kesadaran berlalu lintas sangat penting.'
},
{
  id: 'b1-l3-q32',
  text: 'Bacalah teks berikut!\n\nGenerasi muda perlu memiliki kemampuan berpikir kritis agar tidak mudah terpengaruh informasi yang menyesatkan.\n\nTujuan penulis menyampaikan pernyataan tersebut adalah...',
  options: [
    { id: 'A', text: 'Menakut-nakuti generasi muda' },
    { id: 'B', text: 'Mengajak generasi muda berpikir kritis' },
    { id: 'C', text: 'Melarang penggunaan internet' },
    { id: 'D', text: 'Mengkritik teknologi informasi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks bersifat ajakan dan edukatif.\nKesimpulan: Penulis mendorong sikap kritis.'
},
{
  id: 'b1-l3-q33',
  text: 'Bacalah teks berikut!\n\nBanyaknya tayangan hiburan membuat sebagian pelajar melupakan tanggung jawab akademiknya.\n\nSikap penulis terhadap kondisi tersebut adalah...',
  options: [
    { id: 'A', text: 'Mendukung tayangan hiburan' },
    { id: 'B', text: 'Menganggapnya wajar' },
    { id: 'C', text: 'Menyayangkan kondisi tersebut' },
    { id: 'D', text: 'Tidak peduli terhadap pendidikan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kalimat menunjukkan keprihatinan.\nKesimpulan: Penulis bersikap menyayangkan.'
},
{
  id: 'b1-l3-q34',
  text: 'Bacalah teks berikut!\n\nKemajuan zaman menuntut manusia untuk terus belajar agar tidak tertinggal.\n\nMakna kalimat tersebut adalah...',
  options: [
    { id: 'A', text: 'Belajar hanya untuk anak sekolah' },
    { id: 'B', text: 'Belajar adalah proses seumur hidup' },
    { id: 'C', text: 'Belajar tidak penting di era modern' },
    { id: 'D', text: 'Hanya orang tertentu yang perlu belajar' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: “Terus belajar” menunjukkan keberlanjutan.\nKesimpulan: Belajar berlangsung sepanjang hayat.'
},
{
  id: 'b1-l3-q35',
  text: 'Bacalah teks berikut!\n\nPerbedaan pendapat dalam masyarakat seharusnya menjadi kekuatan untuk mencapai solusi terbaik.\n\nPesan tersirat teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Perbedaan harus dihindari' },
    { id: 'B', text: 'Perbedaan memicu konflik' },
    { id: 'C', text: 'Perbedaan dapat dikelola secara positif' },
    { id: 'D', text: 'Pendapat pribadi lebih penting' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menekankan sisi positif perbedaan.\nKesimpulan: Perbedaan dapat memperkaya solusi.'
},
{
  id: 'b1-l3-q36',
  text: 'Bacalah teks berikut!\n\nBudaya membaca perlu ditanamkan sejak dini agar masyarakat memiliki wawasan luas.\n\nTujuan utama penulis adalah...',
  options: [
    { id: 'A', text: 'Mengkritik masyarakat' },
    { id: 'B', text: 'Mengajak menumbuhkan budaya membaca' },
    { id: 'C', text: 'Membandingkan budaya lama dan baru' },
    { id: 'D', text: 'Menolak perkembangan teknologi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Teks bersifat ajakan.\nKesimpulan: Penulis mendorong budaya membaca.'
},
{
  id: 'b1-l3-q37',
  text: 'Bacalah teks berikut!\n\nLingkungan yang bersih mencerminkan kepedulian masyarakat terhadap kesehatan bersama.\n\nHubungan sebab-akibat dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kesehatan menyebabkan lingkungan bersih' },
    { id: 'B', text: 'Lingkungan bersih menunjukkan kepedulian' },
    { id: 'C', text: 'Kepedulian tidak berpengaruh' },
    { id: 'D', text: 'Lingkungan tidak terkait kesehatan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kebersihan menjadi indikator kepedulian.\nKesimpulan: Lingkungan bersih mencerminkan sikap peduli.'
},
{
  id: 'b1-l3-q38',
  text: 'Bacalah teks berikut!\n\nKemampuan bekerja sama menjadi kunci keberhasilan dalam dunia kerja modern.\n\nMakna tersirat pernyataan tersebut adalah...',
  options: [
    { id: 'A', text: 'Kerja individu lebih penting' },
    { id: 'B', text: 'Kerja sama tidak diperlukan' },
    { id: 'C', text: 'Kesuksesan dipengaruhi kemampuan sosial' },
    { id: 'D', text: 'Dunia kerja tidak membutuhkan keterampilan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kerja sama dikaitkan dengan keberhasilan.\nKesimpulan: Kemampuan sosial sangat berpengaruh.'
},
{
  id: 'b1-l3-q39',
  text: 'Bacalah teks berikut!\n\nSikap toleransi penting dalam masyarakat majemuk agar tercipta kehidupan yang harmonis.\n\nNilai yang ditekankan dalam teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Persaingan' },
    { id: 'B', text: 'Toleransi' },
    { id: 'C', text: 'Individualisme' },
    { id: 'D', text: 'Dominasi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kata “toleransi” menjadi fokus utama.\nKesimpulan: Nilai toleransi sangat penting.'
},
{
  id: 'b1-l3-q40',
  text: 'Bacalah teks berikut!\n\nPerkembangan teknologi harus diimbangi dengan peningkatan etika penggunaannya.\n\nPesan utama teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Teknologi harus dibatasi' },
    { id: 'B', text: 'Etika tidak diperlukan' },
    { id: 'C', text: 'Etika penting dalam penggunaan teknologi' },
    { id: 'D', text: 'Teknologi merusak moral' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menekankan keseimbangan.\nKesimpulan: Teknologi perlu disertai etika.'
},
{
  id: 'b1-l3-q41',
  text: 'Bacalah teks berikut!\n\nKemandirian belajar membantu siswa bertanggung jawab atas proses belajarnya sendiri.\n\nMakna kalimat tersebut adalah...',
  options: [
    { id: 'A', text: 'Guru tidak diperlukan' },
    { id: 'B', text: 'Siswa belajar tanpa arah' },
    { id: 'C', text: 'Tanggung jawab belajar ada pada siswa' },
    { id: 'D', text: 'Belajar harus dipaksakan' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kemandirian dikaitkan dengan tanggung jawab.\nKesimpulan: Siswa bertanggung jawab atas belajarnya.'
},
{
  id: 'b1-l3-q42',
  text: 'Bacalah teks berikut!\n\nKesadaran sejarah membantu generasi muda memahami jati diri bangsa.\n\nPesan tersirat teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sejarah tidak relevan' },
    { id: 'B', text: 'Sejarah hanya untuk pelajaran sekolah' },
    { id: 'C', text: 'Sejarah membentuk identitas bangsa' },
    { id: 'D', text: 'Generasi muda tidak perlu sejarah' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Sejarah dikaitkan dengan jati diri.\nKesimpulan: Sejarah membangun identitas.'
},
{
  id: 'b1-l3-q43',
  text: 'Bacalah teks berikut!\n\nKritik yang membangun diperlukan untuk memperbaiki kualitas suatu karya.\n\nSikap yang dianjurkan penulis adalah...',
  options: [
    { id: 'A', text: 'Menolak kritik' },
    { id: 'B', text: 'Menerima kritik secara positif' },
    { id: 'C', text: 'Menghindari kritik' },
    { id: 'D', text: 'Mengkritik tanpa etika' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kritik dilihat sebagai sarana perbaikan.\nKesimpulan: Kritik harus diterima secara positif.'
},
{
  id: 'b1-l3-q44',
  text: 'Bacalah teks berikut!\n\nPemanfaatan sumber daya alam harus mempertimbangkan kelestarian lingkungan.\n\nMakna tersirat dari teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Sumber daya alam tidak terbatas' },
    { id: 'B', text: 'Eksploitasi bebas diperbolehkan' },
    { id: 'C', text: 'Pemanfaatan harus berkelanjutan' },
    { id: 'D', text: 'Lingkungan tidak penting' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Teks menekankan kelestarian.\nKesimpulan: Pemanfaatan harus berkelanjutan.'
},
{
  id: 'b1-l3-q45',
  text: 'Bacalah teks berikut!\n\nKemampuan beradaptasi menjadi keunggulan penting di tengah perubahan zaman.\n\nPesan utama teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Perubahan harus ditolak' },
    { id: 'B', text: 'Adaptasi membantu bertahan' },
    { id: 'C', text: 'Zaman tidak pernah berubah' },
    { id: 'D', text: 'Adaptasi hanya untuk orang tertentu' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Adaptasi dikaitkan dengan keunggulan.\nKesimpulan: Adaptasi penting untuk bertahan.'
},
{
  id: 'b1-l3-q46',
  text: 'Bacalah teks berikut!\n\nKedisiplinan mencerminkan sikap tanggung jawab seseorang terhadap tugasnya.\n\nNilai yang ditekankan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kebebasan' },
    { id: 'B', text: 'Tanggung jawab' },
    { id: 'C', text: 'Keberanian' },
    { id: 'D', text: 'Kreativitas' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Disiplin dikaitkan dengan tanggung jawab.\nKesimpulan: Tanggung jawab adalah nilai utama.'
},
{
  id: 'b1-l3-q47',
  text: 'Bacalah teks berikut!\n\nKemampuan menyaring informasi sangat penting di era banjir informasi.\n\nMakna tersirat dari pernyataan tersebut adalah...',
  options: [
    { id: 'A', text: 'Semua informasi benar' },
    { id: 'B', text: 'Informasi harus diterima tanpa kritik' },
    { id: 'C', text: 'Tidak semua informasi dapat dipercaya' },
    { id: 'D', text: 'Informasi tidak berguna' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Penyaringan diperlukan karena informasi beragam.\nKesimpulan: Tidak semua informasi valid.'
},
{
  id: 'b1-l3-q48',
  text: 'Bacalah teks berikut!\n\nGotong royong memperkuat hubungan sosial dalam masyarakat.\n\nSimpulan yang tepat adalah...',
  options: [
    { id: 'A', text: 'Gotong royong tidak relevan' },
    { id: 'B', text: 'Gotong royong mempererat kebersamaan' },
    { id: 'C', text: 'Hubungan sosial tidak penting' },
    { id: 'D', text: 'Gotong royong hanya tradisi lama' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Gotong royong dikaitkan dengan hubungan sosial.\nKesimpulan: Gotong royong mempererat kebersamaan.'
},
{
  id: 'b1-l3-q49',
  text: 'Bacalah teks berikut!\n\nKreativitas diperlukan untuk menghadapi tantangan baru secara inovatif.\n\nMakna teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Tantangan harus dihindari' },
    { id: 'B', text: 'Kreativitas tidak penting' },
    { id: 'C', text: 'Inovasi lahir dari kreativitas' },
    { id: 'D', text: 'Kreativitas hanya untuk seniman' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kreativitas dikaitkan dengan inovasi.\nKesimpulan: Kreativitas mendorong solusi baru.'
},
{
  id: 'b1-l3-q50',
  text: 'Bacalah teks berikut!\n\nSikap jujur membangun kepercayaan dalam setiap hubungan sosial.\n\nNilai utama yang disampaikan teks tersebut adalah...',
  options: [
    { id: 'A', text: 'Kejujuran' },
    { id: 'B', text: 'Kecerdikan' },
    { id: 'C', text: 'Keberanian' },
    { id: 'D', text: 'Ketekunan' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Kejujuran menjadi dasar kepercayaan.\nKesimpulan: Nilai utama adalah kejujuran.'
},
],

// --- BAHASA INDONESIA: MAJAS & GAYA BAHASA (b2-l3) ---
'b2-l3': [
  {
    id: 'b2-l3-q1',
    text: 'Perhatikan kalimat berikut:\n“Angin malam berbisik lirih menemani langkahnya.”\nMajas yang digunakan dalam kalimat tersebut adalah...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Personifikasi' },
      { id: 'C', text: 'Hiperbola' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Personifikasi adalah majas yang memberikan sifat manusia pada benda mati.\nKesimpulan: Angin digambarkan dapat berbisik seperti manusia, sehingga termasuk personifikasi.'
  },
  {
    id: 'b2-l3-q2',
    text: 'Kalimat berikut menggunakan majas hiperbola, kecuali...',
    options: [
      { id: 'A', text: 'Tangisannya menggelegar hingga mengguncang bumi.' },
      { id: 'B', text: 'Tenaganya seperti raksasa tak terkalahkan.' },
      { id: 'C', text: 'Air matanya membanjiri seluruh ruangan.' },
      { id: 'D', text: 'Ia berlari sangat cepat menuju sekolah.' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Hiperbola adalah majas yang melebih-lebihkan secara ekstrem.\nKesimpulan: Kalimat D masih realistis sehingga bukan hiperbola.'
  },
  {
    id: 'b2-l3-q3',
    text: 'Majas yang membandingkan dua hal secara langsung tanpa kata pembanding disebut...',
    options: [
      { id: 'A', text: 'Simile' },
      { id: 'B', text: 'Personifikasi' },
      { id: 'C', text: 'Metafora' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Metafora membandingkan dua hal secara langsung tanpa kata seperti, bagai, atau laksana.\nKesimpulan: Jawaban yang tepat adalah metafora.'
  },
  {
    id: 'b2-l3-q4',
    text: 'Kalimat “Ia tersenyum manis di balik rasa kecewa yang mendalam” mengandung majas...',
    options: [
      { id: 'A', text: 'Ironi' },
      { id: 'B', text: 'Hiperbola' },
      { id: 'C', text: 'Repetisi' },
      { id: 'D', text: 'Metonimia' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Ironi menyatakan sesuatu yang berlawanan dengan keadaan sebenarnya.\nKesimpulan: Senyum bertentangan dengan rasa kecewa, sehingga termasuk ironi.'
  },
  {
    id: 'b2-l3-q5',
    text: 'Perhatikan kalimat berikut:\n“Semangatnya adalah api yang tak pernah padam.”\nMajas yang digunakan adalah...',
    options: [
      { id: 'A', text: 'Simile' },
      { id: 'B', text: 'Metafora' },
      { id: 'C', text: 'Hiperbola' },
      { id: 'D', text: 'Personifikasi' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Metafora membandingkan semangat dengan api secara langsung.\nKesimpulan: Kalimat tersebut menggunakan majas metafora.'
  },

  {
    id: 'b2-l3-q6',
    text: 'Majas yang menggunakan kata pembanding seperti “bagai”, “seperti”, atau “laksana” disebut...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Simile' },
      { id: 'C', text: 'Ironi' },
      { id: 'D', text: 'Sarkasme' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Simile ditandai dengan penggunaan kata pembanding eksplisit.\nKesimpulan: Jawaban yang benar adalah simile.'
  },
  {
    id: 'b2-l3-q7',
    text: 'Kalimat “Otaknya adalah ensiklopedia berjalan” termasuk majas...',
    options: [
      { id: 'A', text: 'Simile' },
      { id: 'B', text: 'Personifikasi' },
      { id: 'C', text: 'Metafora' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Otak dibandingkan langsung dengan ensiklopedia.\nKesimpulan: Majas yang digunakan adalah metafora.'
  },
  {
    id: 'b2-l3-q8',
    text: 'Tujuan utama penggunaan majas dalam karya sastra adalah...',
    options: [
      { id: 'A', text: 'Memperpanjang kalimat' },
      { id: 'B', text: 'Memperindah dan memperkuat makna' },
      { id: 'C', text: 'Menyulitkan pembaca' },
      { id: 'D', text: 'Mengaburkan isi teks' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Majas digunakan untuk memberi efek keindahan dan kedalaman makna.\nKesimpulan: Tujuan utamanya adalah memperindah dan memperkuat makna.'
  },
  {
    id: 'b2-l3-q9',
    text: 'Kalimat “Pujian itu menusuk hatinya” menggunakan majas...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Personifikasi' },
      { id: 'C', text: 'Hiperbola' },
      { id: 'D', text: 'Simile' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Pujian tidak benar-benar menusuk, melainkan kiasan.\nKesimpulan: Kalimat tersebut menggunakan metafora.'
  },
  {
    id: 'b2-l3-q10',
    text: 'Majas sindiran yang paling halus adalah...',
    options: [
      { id: 'A', text: 'Sarkasme' },
      { id: 'B', text: 'Sinisme' },
      { id: 'C', text: 'Ironi' },
      { id: 'D', text: 'Hiperbola' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Ironi menyindir dengan cara halus dan tidak langsung.\nKesimpulan: Jawaban yang tepat adalah ironi.'
  },

  {
    id: 'b2-l3-q11',
    text: 'Kalimat “Rumah itu menangis saat hujan turun deras” menggunakan majas...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Personifikasi' },
      { id: 'C', text: 'Simile' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Rumah diberi sifat manusia yaitu menangis.\nKesimpulan: Majas yang digunakan adalah personifikasi.'
  },
  {
    id: 'b2-l3-q12',
    text: 'Majas hiperbola ditunjukkan pada kalimat...',
    options: [
      { id: 'A', text: 'Suaranya keras.' },
      { id: 'B', text: 'Suaranya memecahkan langit.' },
      { id: 'C', text: 'Suaranya jelas terdengar.' },
      { id: 'D', text: 'Suaranya merdu.' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Hiperbola melebih-lebihkan secara ekstrem.\nKesimpulan: Kalimat B merupakan hiperbola.'
  },
  {
    id: 'b2-l3-q13',
    text: 'Perbandingan “wajahnya pucat seperti kertas” termasuk majas...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Personifikasi' },
      { id: 'C', text: 'Simile' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Simile menggunakan kata pembanding “seperti”.\nKesimpulan: Kalimat tersebut termasuk simile.'
  },
  {
    id: 'b2-l3-q14',
    text: 'Penggunaan majas yang berlebihan dapat menyebabkan...',
    options: [
      { id: 'A', text: 'Teks semakin jelas' },
      { id: 'B', text: 'Makna menjadi kabur' },
      { id: 'C', text: 'Kalimat menjadi baku' },
      { id: 'D', text: 'Bahasa menjadi ilmiah' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Majas berlebihan dapat membingungkan pembaca.\nKesimpulan: Dampaknya adalah makna menjadi kabur.'
  },
  {
    id: 'b2-l3-q15',
    text: 'Kalimat “Dia adalah bintang kelas kami” mengandung majas...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Simile' },
      { id: 'C', text: 'Ironi' },
      { id: 'D', text: 'Personifikasi' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Siswa dibandingkan langsung dengan bintang.\nKesimpulan: Majas yang digunakan adalah metafora.'
  },

  {
    id: 'b2-l3-q16',
    text: 'Majas yang menyindir secara kasar disebut...',
    options: [
      { id: 'A', text: 'Ironi' },
      { id: 'B', text: 'Sinisme' },
      { id: 'C', text: 'Sarkasme' },
      { id: 'D', text: 'Metafora' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Sarkasme merupakan sindiran paling kasar.\nKesimpulan: Jawaban yang tepat adalah sarkasme.'
  },
  {
    id: 'b2-l3-q17',
    text: 'Kalimat “Langkahnya seberat gunung” menggunakan majas...',
    options: [
      { id: 'A', text: 'Hiperbola' },
      { id: 'B', text: 'Simile' },
      { id: 'C', text: 'Metafora' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Perbandingan yang sangat berlebihan menunjukkan hiperbola.\nKesimpulan: Majas yang digunakan adalah hiperbola.'
  },
  {
    id: 'b2-l3-q18',
    text: 'Majas yang sering digunakan dalam puisi untuk menambah keindahan bahasa adalah...',
    options: [
      { id: 'A', text: 'Majas perbandingan' },
      { id: 'B', text: 'Majas penegasan' },
      { id: 'C', text: 'Majas sindiran' },
      { id: 'D', text: 'Semua benar' }
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Semua jenis majas dapat memperindah bahasa jika digunakan tepat.\nKesimpulan: Jawaban yang benar adalah semua benar.'
  },
  {
    id: 'b2-l3-q19',
    text: 'Makna kias dalam majas bertujuan untuk...',
    options: [
      { id: 'A', text: 'Mengaburkan maksud penulis' },
      { id: 'B', text: 'Menambah kedalaman makna' },
      { id: 'C', text: 'Mengurangi kejelasan' },
      { id: 'D', text: 'Mengganti fakta' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Makna kias memberi lapisan makna tambahan.\nKesimpulan: Tujuannya adalah menambah kedalaman makna.'
  },
  {
    id: 'b2-l3-q20',
    text: 'Kalimat “Pujian itu terasa pahit di telinganya” menggunakan majas...',
    options: [
      { id: 'A', text: 'Metafora' },
      { id: 'B', text: 'Simile' },
      { id: 'C', text: 'Personifikasi' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Pujian disamakan dengan rasa pahit.\nKesimpulan: Majas yang digunakan adalah metafora.'
  },

  {
    id: 'b2-l3-q21',
    text: 'Penggunaan majas yang tepat harus disesuaikan dengan...',
    options: [
      { id: 'A', text: 'Jumlah kata' },
      { id: 'B', text: 'Konteks dan tujuan teks' },
      { id: 'C', text: 'Panjang paragraf' },
      { id: 'D', text: 'Jenis huruf' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Majas harus relevan dengan konteks.\nKesimpulan: Jawaban yang tepat adalah konteks dan tujuan teks.'
  },
  {
    id: 'b2-l3-q22',
    text: 'Kalimat “Ia tertawa di atas penderitaan orang lain” mengandung majas...',
    options: [
      { id: 'A', text: 'Ironi' },
      { id: 'B', text: 'Metafora' },
      { id: 'C', text: 'Simile' },
      { id: 'D', text: 'Personifikasi' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Tertawa di atas penderitaan menunjukkan pertentangan makna.\nKesimpulan: Kalimat tersebut mengandung ironi.'
  },
  {
    id: 'b2-l3-q23',
    text: 'Majas yang paling sering muncul dalam cerita fiksi adalah...',
    options: [
      { id: 'A', text: 'Personifikasi dan metafora' },
      { id: 'B', text: 'Sarkasme' },
      { id: 'C', text: 'Ironi saja' },
      { id: 'D', text: 'Repetisi saja' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Personifikasi dan metafora memperkaya imajinasi pembaca.\nKesimpulan: Jawaban yang tepat adalah personifikasi dan metafora.'
  },
  {
    id: 'b2-l3-q24',
    text: 'Kalimat “Hatinya membeku mendengar kabar itu” menggunakan majas...',
    options: [
      { id: 'A', text: 'Hiperbola' },
      { id: 'B', text: 'Metafora' },
      { id: 'C', text: 'Simile' },
      { id: 'D', text: 'Ironi' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Hati disamakan dengan benda yang membeku.\nKesimpulan: Majas yang digunakan adalah metafora.'
  },
  {
    id: 'b2-l3-q25',
    text: 'Kesalahan umum dalam penggunaan majas adalah...',
    options: [
      { id: 'A', text: 'Menggunakan majas seperlunya' },
      { id: 'B', text: 'Menyesuaikan dengan konteks' },
      { id: 'C', text: 'Menggunakan secara berlebihan' },
      { id: 'D', text: 'Memilih majas yang tepat' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Penggunaan berlebihan dapat merusak kejelasan makna.\nKesimpulan: Kesalahan umum adalah menggunakan majas secara berlebihan.'
  },
  {
  id: 'b2-l3-q26',
  text: 'Kalimat “Pikirannya berlari tanpa arah” menggunakan majas...',
  options: [
    { id: 'A', text: 'Personifikasi' },
    { id: 'B', text: 'Metafora' },
    { id: 'C', text: 'Simile' },
    { id: 'D', text: 'Ironi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Pikiran diibaratkan dapat berlari.\nKesimpulan: Majas yang digunakan adalah metafora.'
},
{
  id: 'b2-l3-q27',
  text: 'Majas personifikasi paling tepat ditunjukkan pada kalimat...',
  options: [
    { id: 'A', text: 'Mentari tersenyum menyambut pagi.' },
    { id: 'B', text: 'Wajahnya pucat seperti kertas.' },
    { id: 'C', text: 'Tangisannya membelah langit.' },
    { id: 'D', text: 'Ia adalah bintang kelas.' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Matahari diberi sifat manusia.\nKesimpulan: Kalimat A menggunakan personifikasi.'
},
{
  id: 'b2-l3-q28',
  text: 'Kalimat “Kritik itu bagai pedang tajam” menggunakan majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Personifikasi' },
    { id: 'C', text: 'Simile' },
    { id: 'D', text: 'Ironi' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Kata “bagai” menandai simile.\nKesimpulan: Majas yang digunakan adalah simile.'
},
{
  id: 'b2-l3-q29',
  text: 'Majas yang bertujuan menyindir dengan cara sangat kasar disebut...',
  options: [
    { id: 'A', text: 'Ironi' },
    { id: 'B', text: 'Sinisme' },
    { id: 'C', text: 'Sarkasme' },
    { id: 'D', text: 'Metafora' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Sarkasme merupakan sindiran paling keras.\nKesimpulan: Jawaban yang benar adalah sarkasme.'
},
{
  id: 'b2-l3-q30',
  text: 'Kalimat “Hatinya selembut kapas” menggunakan majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Simile' },
    { id: 'C', text: 'Personifikasi' },
    { id: 'D', text: 'Ironi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Ada kata pembanding “selembut”.\nKesimpulan: Kalimat tersebut menggunakan simile.'
},
{
  id: 'b2-l3-q31',
  text: 'Majas hiperbola dapat dikenali dari cirinya yaitu...',
  options: [
    { id: 'A', text: 'Menyindir secara halus' },
    { id: 'B', text: 'Membandingkan dua hal berbeda' },
    { id: 'C', text: 'Menggambarkan secara berlebihan' },
    { id: 'D', text: 'Menggunakan kata pembanding' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Hiperbola selalu melebih-lebihkan keadaan.\nKesimpulan: Ciri utamanya adalah penggambaran berlebihan.'
},
{
  id: 'b2-l3-q32',
  text: 'Kalimat “Ia tersenyum saat hatinya terluka” termasuk majas...',
  options: [
    { id: 'A', text: 'Ironi' },
    { id: 'B', text: 'Metafora' },
    { id: 'C', text: 'Hiperbola' },
    { id: 'D', text: 'Personifikasi' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Senyum bertentangan dengan luka batin.\nKesimpulan: Majas yang digunakan adalah ironi.'
},
{
  id: 'b2-l3-q33',
  text: 'Penggunaan majas paling tepat terdapat pada teks...',
  options: [
    { id: 'A', text: 'Ilmiah dan laporan penelitian' },
    { id: 'B', text: 'Instruksi teknis' },
    { id: 'C', text: 'Karya sastra dan cerpen' },
    { id: 'D', text: 'Pengumuman resmi' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Majas memperkaya imajinasi sastra.\nKesimpulan: Majas paling tepat digunakan dalam karya sastra.'
},
{
  id: 'b2-l3-q34',
  text: 'Kalimat “Waktu merangkak lambat hari ini” menggunakan majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Personifikasi' },
    { id: 'C', text: 'Simile' },
    { id: 'D', text: 'Hiperbola' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Waktu diberi sifat makhluk hidup.\nKesimpulan: Majas yang digunakan adalah personifikasi.'
},
{
  id: 'b2-l3-q35',
  text: 'Majas metafora berbeda dengan simile karena...',
  options: [
    { id: 'A', text: 'Tidak menggunakan perbandingan' },
    { id: 'B', text: 'Menggunakan kata pembanding' },
    { id: 'C', text: 'Membandingkan secara langsung' },
    { id: 'D', text: 'Tidak memiliki makna kias' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Metafora membandingkan langsung tanpa kata pembanding.\nKesimpulan: Perbedaan utamanya terletak pada cara perbandingan.'
},
{
  id: 'b2-l3-q36',
  text: 'Kalimat “Tawa itu menghujam perasaannya” termasuk majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Simile' },
    { id: 'C', text: 'Ironi' },
    { id: 'D', text: 'Personifikasi' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Tawa diibaratkan benda yang menghujam.\nKesimpulan: Majas yang digunakan adalah metafora.'
},
{
  id: 'b2-l3-q37',
  text: 'Majas yang berfungsi mempertegas makna perasaan disebut...',
  options: [
    { id: 'A', text: 'Majas sindiran' },
    { id: 'B', text: 'Majas penegasan' },
    { id: 'C', text: 'Majas perbandingan' },
    { id: 'D', text: 'Majas ironi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Majas penegasan digunakan untuk menekankan perasaan.\nKesimpulan: Jawaban yang tepat adalah majas penegasan.'
},
{
  id: 'b2-l3-q38',
  text: 'Kalimat “Ia berbicara manis namun hatinya pahit” mengandung majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Ironi' },
    { id: 'C', text: 'Simile' },
    { id: 'D', text: 'Personifikasi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Makna manis dan pahit saling bertentangan.\nKesimpulan: Majas yang digunakan adalah ironi.'
},
{
  id: 'b2-l3-q39',
  text: 'Majas yang sering muncul dalam puisi romantis adalah...',
  options: [
    { id: 'A', text: 'Sarkasme' },
    { id: 'B', text: 'Personifikasi dan metafora' },
    { id: 'C', text: 'Ironi kasar' },
    { id: 'D', text: 'Sinisme' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Majas tersebut memperindah nuansa emosi.\nKesimpulan: Jawaban yang tepat adalah personifikasi dan metafora.'
},
{
  id: 'b2-l3-q40',
  text: 'Kalimat “Langkahnya ringan bagai angin” menggunakan majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Simile' },
    { id: 'C', text: 'Hiperbola' },
    { id: 'D', text: 'Ironi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Kata “bagai” menandakan simile.\nKesimpulan: Majas yang digunakan adalah simile.'
},
{
  id: 'b2-l3-q41',
  text: 'Kesalahan penggunaan majas dapat menyebabkan...',
  options: [
    { id: 'A', text: 'Teks menjadi menarik' },
    { id: 'B', text: 'Makna sulit dipahami' },
    { id: 'C', text: 'Bahasa menjadi baku' },
    { id: 'D', text: 'Kalimat lebih singkat' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Majas yang tidak tepat membingungkan pembaca.\nKesimpulan: Dampaknya adalah makna sulit dipahami.'
},
{
  id: 'b2-l3-q42',
  text: 'Kalimat “Pikirannya gelap setelah mendengar kabar itu” menggunakan majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Ironi' },
    { id: 'C', text: 'Simile' },
    { id: 'D', text: 'Personifikasi' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Gelap digunakan sebagai makna kias.\nKesimpulan: Majas yang digunakan adalah metafora.'
},
{
  id: 'b2-l3-q43',
  text: 'Majas yang paling tepat untuk menyampaikan kritik halus adalah...',
  options: [
    { id: 'A', text: 'Sarkasme' },
    { id: 'B', text: 'Sinisme' },
    { id: 'C', text: 'Ironi' },
    { id: 'D', text: 'Hiperbola' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Ironi menyindir tanpa menyerang langsung.\nKesimpulan: Jawaban yang benar adalah ironi.'
},
{
  id: 'b2-l3-q44',
  text: 'Kalimat “Tangannya besi saat bekerja” menggunakan majas...',
  options: [
    { id: 'A', text: 'Simile' },
    { id: 'B', text: 'Metafora' },
    { id: 'C', text: 'Personifikasi' },
    { id: 'D', text: 'Ironi' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Tangan diibaratkan besi.\nKesimpulan: Majas yang digunakan adalah metafora.'
},
{
  id: 'b2-l3-q45',
  text: 'Tujuan utama majas dalam teks sastra adalah...',
  options: [
    { id: 'A', text: 'Menjelaskan data' },
    { id: 'B', text: 'Memperindah bahasa dan makna' },
    { id: 'C', text: 'Memberi instruksi' },
    { id: 'D', text: 'Menulis laporan' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Majas memperkaya rasa dan makna bahasa.\nKesimpulan: Tujuannya adalah memperindah bahasa dan makna.'
},
{
  id: 'b2-l3-q46',
  text: 'Kalimat “Hatinya sekeras batu” menggunakan majas...',
  options: [
    { id: 'A', text: 'Metafora' },
    { id: 'B', text: 'Simile' },
    { id: 'C', text: 'Ironi' },
    { id: 'D', text: 'Personifikasi' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Hati dibandingkan langsung dengan batu.\nKesimpulan: Majas yang digunakan adalah metafora.'
},
{
  id: 'b2-l3-q47',
  text: 'Majas yang menggunakan pengulangan kata untuk penekanan disebut...',
  options: [
    { id: 'A', text: 'Repetisi' },
    { id: 'B', text: 'Metafora' },
    { id: 'C', text: 'Ironi' },
    { id: 'D', text: 'Simile' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Repetisi mengulang kata untuk penegasan.\nKesimpulan: Jawaban yang tepat adalah repetisi.'
},
{
  id: 'b2-l3-q48',
  text: 'Kalimat “Dia menangis tanpa air mata” menggunakan majas...',
  options: [
    { id: 'A', text: 'Ironi' },
    { id: 'B', text: 'Metafora' },
    { id: 'C', text: 'Simile' },
    { id: 'D', text: 'Personifikasi' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Tangisan tanpa air mata menunjukkan pertentangan makna.\nKesimpulan: Majas yang digunakan adalah ironi.'
},
{
  id: 'b2-l3-q49',
  text: 'Penggunaan majas harus memperhatikan...',
  options: [
    { id: 'A', text: 'Jumlah paragraf' },
    { id: 'B', text: 'Konteks dan pembaca' },
    { id: 'C', text: 'Jenis font' },
    { id: 'D', text: 'Panjang kalimat' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Majas harus sesuai konteks dan pembaca.\nKesimpulan: Faktor terpenting adalah konteks dan pembaca.'
},
{
  id: 'b2-l3-q50',
  text: 'Kesimpulan utama penggunaan majas dalam bahasa Indonesia adalah...',
  options: [
    { id: 'A', text: 'Memperpanjang kalimat' },
    { id: 'B', text: 'Mengaburkan makna' },
    { id: 'C', text: 'Memperkuat dan memperindah makna' },
    { id: 'D', text: 'Mengganti fakta' }
  ],
  correctOptionId: 'C',
  discussion: 'Penjelasan singkat: Majas memberi keindahan dan kekuatan makna.\nKesimpulan: Fungsi utamanya adalah memperkuat dan memperindah makna.'
},
],

// --- BAHASA INDONESIA: PENULISAN ARTIKEL OPINI (b3-l3) ---

'b3-l3': [

  {
    id: 'b3-l3-q1',
    text: 'Bacalah paragraf berikut.\n\nPenggunaan ponsel di sekolah perlu diatur dengan ketat. Banyak siswa menjadi kurang fokus belajar karena sering membuka media sosial saat jam pelajaran. Jika tidak dikendalikan, kebiasaan ini dapat menurunkan prestasi akademik.\n\nPendapat utama penulis dalam paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Ponsel sebaiknya dilarang sepenuhnya di sekolah' },
      { id: 'B', text: 'Media sosial menyebabkan kecanduan pada siswa' },
      { id: 'C', text: 'Penggunaan ponsel di sekolah perlu diatur dengan ketat' },
      { id: 'D', text: 'Prestasi akademik siswa semakin meningkat' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Opini utama biasanya terletak pada kalimat pertama.\nKesimpulan: Pendapat utama penulis adalah perlunya pengaturan penggunaan ponsel di sekolah.'
  },
  {
    id: 'b3-l3-q2',
    text: 'Bacalah teks berikut.\n\nLingkungan bersih mencerminkan masyarakat yang peduli kesehatan. Sampah yang menumpuk dapat menjadi sumber penyakit dan merusak keindahan. Oleh karena itu, kesadaran menjaga kebersihan harus ditanamkan sejak dini.\n\nKalimat yang merupakan opini penulis adalah...',
    options: [
      { id: 'A', text: 'Sampah yang menumpuk dapat menjadi sumber penyakit' },
      { id: 'B', text: 'Lingkungan bersih mencerminkan masyarakat yang peduli kesehatan' },
      { id: 'C', text: 'Kesadaran menjaga kebersihan harus ditanamkan sejak dini' },
      { id: 'D', text: 'Sampah dapat merusak keindahan' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Opini ditandai kata ajakan atau penilaian.\nKesimpulan: Kalimat opini terdapat pada pernyataan ajakan.'
  },
  {
    id: 'b3-l3-q3',
    text: 'Bacalah paragraf berikut.\n\nMembaca buku secara rutin dapat meningkatkan wawasan siswa. Selain itu, membaca juga melatih kemampuan berpikir kritis. Kebiasaan membaca perlu dibiasakan di lingkungan sekolah dan rumah.\n\nTujuan penulis dalam paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Menghibur pembaca' },
      { id: 'B', text: 'Menyampaikan informasi semata' },
      { id: 'C', text: 'Membujuk pembaca agar gemar membaca' },
      { id: 'D', text: 'Menceritakan pengalaman pribadi' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Artikel opini bertujuan memengaruhi pembaca.\nKesimpulan: Penulis ingin membujuk pembaca agar gemar membaca.'
  },
  {
    id: 'b3-l3-q4',
    text: 'Bacalah teks berikut.\n\nTransportasi umum yang nyaman dapat mengurangi kemacetan. Jika masyarakat beralih dari kendaraan pribadi, polusi udara juga akan berkurang.\n\nArgumen pendukung dalam teks tersebut adalah...',
    options: [
      { id: 'A', text: 'Transportasi umum harus digratiskan' },
      { id: 'B', text: 'Kemacetan terjadi di kota besar' },
      { id: 'C', text: 'Peralihan ke transportasi umum mengurangi polusi udara' },
      { id: 'D', text: 'Kendaraan pribadi lebih cepat' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Argumen mendukung pendapat utama.\nKesimpulan: Pengurangan polusi menjadi argumen pendukung.'
  },
  {
    id: 'b3-l3-q5',
    text: 'Bacalah paragraf berikut.\n\nSekolah seharusnya menyediakan lebih banyak kegiatan ekstrakurikuler. Kegiatan ini dapat membantu siswa mengembangkan bakat dan minat di luar akademik.\n\nKalimat simpulan yang tepat untuk paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Ekstrakurikuler hanya membuang waktu belajar' },
      { id: 'B', text: 'Kegiatan ekstrakurikuler perlu diperbanyak di sekolah' },
      { id: 'C', text: 'Siswa harus fokus pada pelajaran' },
      { id: 'D', text: 'Tidak semua siswa suka kegiatan tambahan' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Simpulan merangkum gagasan utama.\nKesimpulan: Simpulan menegaskan perlunya ekstrakurikuler.'
  },
  {
    id: 'b3-l3-q6',
    text: 'Dalam artikel opini, bagian yang berisi pendapat utama penulis disebut...',
    options: [
      { id: 'A', text: 'Argumen' },
      { id: 'B', text: 'Fakta' },
      { id: 'C', text: 'Tesis' },
      { id: 'D', text: 'Penutup' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Tesis adalah pendapat utama penulis.\nKesimpulan: Jawaban yang tepat adalah tesis.'
  },
  {
    id: 'b3-l3-q7',
    text: 'Kalimat yang paling tepat digunakan sebagai judul artikel opini adalah...',
    options: [
      { id: 'A', text: 'Liburan Sekolah Tahun Ini' },
      { id: 'B', text: 'Pentingnya Disiplin Waktu bagi Pelajar' },
      { id: 'C', text: 'Pengalaman di Sekolah' },
      { id: 'D', text: 'Cerita Masa Kecil' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Judul opini mencerminkan pendapat.\nKesimpulan: Judul harus bersifat argumentatif.'
  },
  {
    id: 'b3-l3-q8',
    text: 'Ciri utama artikel opini adalah...',
    options: [
      { id: 'A', text: 'Bersifat khayalan' },
      { id: 'B', text: 'Berisi pendapat disertai alasan' },
      { id: 'C', text: 'Berupa laporan hasil penelitian' },
      { id: 'D', text: 'Mengutamakan dialog tokoh' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Opini selalu didukung argumen.\nKesimpulan: Artikel opini berisi pendapat dan alasan.'
  },
  {
    id: 'b3-l3-q9',
    text: 'Kalimat berikut yang termasuk opini adalah...',
    options: [
      { id: 'A', text: 'Indonesia merdeka pada tahun 1945' },
      { id: 'B', text: 'Air mendidih pada suhu 100 derajat Celsius' },
      { id: 'C', text: 'Belajar daring kurang efektif bagi sebagian siswa' },
      { id: 'D', text: 'Matahari terbit di timur' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Opini bersifat penilaian subjektif.\nKesimpulan: Pernyataan efektivitas adalah opini.'
  },
  {
    id: 'b3-l3-q10',
    text: 'Bahasa yang tepat digunakan dalam artikel opini adalah...',
    options: [
      { id: 'A', text: 'Bahasa santai dan gaul' },
      { id: 'B', text: 'Bahasa ilmiah penuh istilah' },
      { id: 'C', text: 'Bahasa persuasif dan logis' },
      { id: 'D', text: 'Bahasa cerita naratif' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Opini bertujuan memengaruhi pembaca.\nKesimpulan: Bahasa persuasif dan logis paling tepat.'
  },
  {
    id: 'b3-l3-q11',
    text: 'Bacalah paragraf berikut.\n\nPenggunaan kendaraan listrik perlu didorong oleh pemerintah. Selain ramah lingkungan, kendaraan ini juga dapat mengurangi ketergantungan pada bahan bakar fosil.\n\nKalimat yang berfungsi sebagai tesis adalah...',
    options: [
      { id: 'A', text: 'Penggunaan kendaraan listrik perlu didorong oleh pemerintah' },
      { id: 'B', text: 'Kendaraan listrik ramah lingkungan' },
      { id: 'C', text: 'Bahan bakar fosil semakin menipis' },
      { id: 'D', text: 'Kendaraan listrik masih mahal' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Tesis adalah pendapat utama penulis.\nKesimpulan: Kalimat pertama merupakan tesis.'
  },
  {
    id: 'b3-l3-q12',
    text: 'Bacalah teks berikut.\n\nMedia sosial memberikan banyak manfaat, namun penggunaannya perlu dibatasi. Tanpa kontrol, media sosial dapat menurunkan produktivitas dan kesehatan mental.\n\nArgumen yang mendukung pendapat penulis adalah...',
    options: [
      { id: 'A', text: 'Media sosial sangat populer' },
      { id: 'B', text: 'Penggunaan media sosial tanpa kontrol berdampak negatif' },
      { id: 'C', text: 'Semua orang menggunakan media sosial' },
      { id: 'D', text: 'Media sosial mudah diakses' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Argumen berfungsi memperkuat opini.\nKesimpulan: Dampak negatif menjadi argumen pendukung.'
  },
  {
    id: 'b3-l3-q13',
    text: 'Bacalah paragraf berikut.\n\nSekolah daring tidak sepenuhnya efektif bagi semua siswa. Keterbatasan interaksi dan akses internet menjadi kendala utama.\n\nJenis kalimat pada paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Kalimat fakta' },
      { id: 'B', text: 'Kalimat perintah' },
      { id: 'C', text: 'Kalimat opini' },
      { id: 'D', text: 'Kalimat tanya' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Penilaian subjektif menunjukkan opini.\nKesimpulan: Paragraf berisi kalimat opini.'
  },
  {
    id: 'b3-l3-q14',
    text: 'Bacalah teks berikut.\n\nMembawa bekal dari rumah lebih sehat dibandingkan membeli jajanan sembarangan. Selain terjamin kebersihannya, bekal juga lebih hemat.\n\nTujuan penulis dalam teks tersebut adalah...',
    options: [
      { id: 'A', text: 'Menghibur pembaca' },
      { id: 'B', text: 'Memberi instruksi memasak' },
      { id: 'C', text: 'Membujuk pembaca membawa bekal' },
      { id: 'D', text: 'Menceritakan pengalaman pribadi' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Artikel opini bertujuan memengaruhi.\nKesimpulan: Penulis ingin membujuk pembaca.'
  },
  {
    id: 'b3-l3-q15',
    text: 'Bacalah paragraf berikut.\n\nPenghijauan di lingkungan sekolah harus digalakkan. Tanaman dapat memperbaiki kualitas udara dan menciptakan suasana belajar yang nyaman.\n\nKalimat simpulan yang tepat adalah...',
    options: [
      { id: 'A', text: 'Sekolah memiliki banyak halaman kosong' },
      { id: 'B', text: 'Penghijauan bermanfaat bagi lingkungan sekolah' },
      { id: 'C', text: 'Tanaman sulit dirawat' },
      { id: 'D', text: 'Udara di sekolah panas' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Simpulan merangkum keseluruhan gagasan.\nKesimpulan: Penghijauan memberi manfaat.'
  },
  {
    id: 'b3-l3-q16',
    text: 'Kalimat berikut yang paling tepat sebagai argumen adalah...',
    options: [
      { id: 'A', text: 'Saya suka membaca buku' },
      { id: 'B', text: 'Membaca meningkatkan kemampuan berpikir kritis' },
      { id: 'C', text: 'Buku memiliki banyak halaman' },
      { id: 'D', text: 'Perpustakaan sangat luas' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Argumen berisi alasan logis.\nKesimpulan: Pernyataan manfaat adalah argumen.'
  },
  {
    id: 'b3-l3-q17',
    text: 'Dalam artikel opini, bagian penutup biasanya berisi...',
    options: [
      { id: 'A', text: 'Data mentah' },
      { id: 'B', text: 'Pengulangan judul' },
      { id: 'C', text: 'Penegasan kembali pendapat' },
      { id: 'D', text: 'Cerita pengalaman' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Penutup menegaskan kembali opini.\nKesimpulan: Penegasan pendapat ada di penutup.'
  },
  {
    id: 'b3-l3-q18',
    text: 'Bacalah teks berikut.\n\nOlahraga rutin penting bagi kesehatan remaja. Selain menjaga kebugaran, olahraga juga dapat mengurangi stres.\n\nStruktur teks tersebut adalah...',
    options: [
      { id: 'A', text: 'Tesis dan argumen' },
      { id: 'B', text: 'Orientasi dan konflik' },
      { id: 'C', text: 'Prosedur dan langkah' },
      { id: 'D', text: 'Dialog dan narasi' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Teks berisi pendapat dan alasan.\nKesimpulan: Struktur teks adalah tesis dan argumen.'
  },
  {
    id: 'b3-l3-q19',
    text: 'Kalimat berikut yang menunjukkan sikap persuasif adalah...',
    options: [
      { id: 'A', text: 'Sekolah dimulai pukul tujuh' },
      { id: 'B', text: 'Marilah kita menjaga kebersihan lingkungan' },
      { id: 'C', text: 'Lingkungan sekolah luas' },
      { id: 'D', text: 'Siswa berjumlah 300 orang' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Persuasif mengajak atau memengaruhi.\nKesimpulan: Kalimat ajakan bersifat persuasif.'
  },
  {
    id: 'b3-l3-q20',
    text: 'Bacalah paragraf berikut.\n\nPenggunaan plastik sekali pakai harus dikurangi. Dampaknya terhadap lingkungan sangat besar dan berbahaya bagi makhluk hidup.\n\nPendapat penulis dalam paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Plastik mudah ditemukan' },
      { id: 'B', text: 'Plastik berwarna-warni' },
      { id: 'C', text: 'Penggunaan plastik sekali pakai harus dikurangi' },
      { id: 'D', text: 'Plastik digunakan sehari-hari' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Pendapat utama biasanya dinyatakan tegas.\nKesimpulan: Penulis menolak penggunaan plastik sekali pakai.'
  },
  {
    id: 'b3-l3-q21',
    text: 'Artikel opini berbeda dengan berita karena artikel opini...',
    options: [
      { id: 'A', text: 'Selalu berisi data angka' },
      { id: 'B', text: 'Mengandung pendapat penulis' },
      { id: 'C', text: 'Hanya berisi fakta' },
      { id: 'D', text: 'Ditulis secara singkat' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Opini bersifat subjektif.\nKesimpulan: Artikel opini berisi pendapat penulis.'
  },
  {
    id: 'b3-l3-q22',
    text: 'Kalimat fakta yang dapat digunakan untuk mendukung opini adalah...',
    options: [
      { id: 'A', text: 'Saya yakin sekolah harus diperbaiki' },
      { id: 'B', text: 'Menurut saya pendidikan sangat penting' },
      { id: 'C', text: 'Data menunjukkan tingkat literasi masih rendah' },
      { id: 'D', text: 'Belajar itu menyenangkan' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Fakta bersifat objektif dan dapat dibuktikan.\nKesimpulan: Data literasi merupakan fakta.'
  },
  {
    id: 'b3-l3-q23',
    text: 'Judul artikel opini sebaiknya...',
    options: [
      { id: 'A', text: 'Bersifat netral tanpa pendapat' },
      { id: 'B', text: 'Mengandung unsur opini penulis' },
      { id: 'C', text: 'Berupa kalimat tanya' },
      { id: 'D', text: 'Menggunakan bahasa cerita' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Judul mencerminkan isi dan sikap penulis.\nKesimpulan: Judul opini mengandung pendapat.'
  },
  {
    id: 'b3-l3-q24',
    text: 'Bagian artikel opini yang berisi alasan dan bukti disebut...',
    options: [
      { id: 'A', text: 'Tesis' },
      { id: 'B', text: 'Argumen' },
      { id: 'C', text: 'Penutup' },
      { id: 'D', text: 'Judul' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Argumen mendukung tesis.\nKesimpulan: Bagian alasan disebut argumen.'
  },
  {
    id: 'b3-l3-q25',
    text: 'Bahasa yang digunakan dalam artikel opini sebaiknya...',
    options: [
      { id: 'A', text: 'Kaku dan sulit dipahami' },
      { id: 'B', text: 'Santai dan bercanda' },
      { id: 'C', text: 'Persuasif dan logis' },
      { id: 'D', text: 'Puitis dan imajinatif' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Bahasa opini harus meyakinkan.\nKesimpulan: Bahasa persuasif dan logis paling tepat.'
  },
    {
      id: 'b3-l3-q26',
      text: 'Dalam artikel opini, kalimat tesis berfungsi untuk...',
      options: [
        { id: 'A', text: 'Mengulang kembali isi artikel' },
        { id: 'B', text: 'Menjelaskan pendapat utama penulis' },
        { id: 'C', text: 'Memberikan contoh pendukung' },
        { id: 'D', text: 'Menutup pembahasan' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Tesis adalah inti pendapat penulis.\nKesimpulan: Kalimat tesis menyatakan pendapat utama.'
    },
    {
      id: 'b3-l3-q27',
      text: 'Pendapat dalam artikel opini sebaiknya didukung oleh...',
      options: [
        { id: 'A', text: 'Perasaan penulis' },
        { id: 'B', text: 'Cerita fiksi' },
        { id: 'C', text: 'Data dan fakta' },
        { id: 'D', text: 'Pendapat orang lain tanpa sumber' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Opini yang kuat memerlukan dasar logis.\nKesimpulan: Data dan fakta memperkuat opini.'
    },
    {
      id: 'b3-l3-q28',
      text: 'Tujuan utama artikel opini adalah...',
      options: [
        { id: 'A', text: 'Menghibur pembaca' },
        { id: 'B', text: 'Mempengaruhi cara berpikir pembaca' },
        { id: 'C', text: 'Menyampaikan cerita imajinatif' },
        { id: 'D', text: 'Menyampaikan laporan peristiwa' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Artikel opini bersifat persuasif.\nKesimpulan: Artikel opini bertujuan memengaruhi pembaca.'
    },
    {
      id: 'b3-l3-q29',
      text: 'Bagian penutup artikel opini biasanya berisi...',
      options: [
        { id: 'A', text: 'Data baru yang belum dibahas' },
        { id: 'B', text: 'Pengulangan judul' },
        { id: 'C', text: 'Kesimpulan dan penegasan pendapat' },
        { id: 'D', text: 'Pendapat yang bertentangan' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Penutup berfungsi menguatkan isi.\nKesimpulan: Penutup berisi simpulan dan penegasan.'
    },
    {
      id: 'b3-l3-q30',
      text: 'Kalimat yang bersifat persuasif bertujuan untuk...',
      options: [
        { id: 'A', text: 'Menggambarkan suasana' },
        { id: 'B', text: 'Menceritakan pengalaman' },
        { id: 'C', text: 'Mengajak atau memengaruhi' },
        { id: 'D', text: 'Memberi informasi teknis' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Persuasif berarti membujuk.\nKesimpulan: Kalimat persuasif bertujuan memengaruhi.'
    },
    {
      id: 'b3-l3-q31',
      text: 'Penggunaan bahasa dalam artikel opini sebaiknya...',
      options: [
        { id: 'A', text: 'Kasual dan santai' },
        { id: 'B', text: 'Provokatif tanpa alasan' },
        { id: 'C', text: 'Logis dan santun' },
        { id: 'D', text: 'Bersifat emosional' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Bahasa yang baik meningkatkan kredibilitas.\nKesimpulan: Bahasa artikel opini harus logis dan santun.'
    },
    {
      id: 'b3-l3-q32',
      text: 'Argumen yang baik dalam artikel opini harus...',
      options: [
        { id: 'A', text: 'Panjang dan bertele-tele' },
        { id: 'B', text: 'Didukung alasan yang masuk akal' },
        { id: 'C', text: 'Bersifat menyerang' },
        { id: 'D', text: 'Tidak perlu bukti' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Argumen harus rasional.\nKesimpulan: Argumen yang baik didukung alasan logis.'
    },
    {
      id: 'b3-l3-q33',
      text: 'Opini yang objektif berarti...',
      options: [
        { id: 'A', text: 'Hanya berdasarkan perasaan' },
        { id: 'B', text: 'Mengabaikan fakta' },
        { id: 'C', text: 'Didukung data dan sudut pandang seimbang' },
        { id: 'D', text: 'Menyerang pihak lain' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Objektif berarti adil.\nKesimpulan: Opini objektif didukung data dan keseimbangan.'
    },
    {
      id: 'b3-l3-q34',
      text: 'Judul artikel opini yang baik sebaiknya...',
      options: [
        { id: 'A', text: 'Panjang dan rumit' },
        { id: 'B', text: 'Menarik dan sesuai isi' },
        { id: 'C', text: 'Tidak berkaitan dengan isi' },
        { id: 'D', text: 'Menggunakan bahasa kasar' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Judul mencerminkan isi.\nKesimpulan: Judul harus menarik dan relevan.'
    },
    {
      id: 'b3-l3-q35',
      text: 'Penggunaan fakta dalam artikel opini bertujuan untuk...',
      options: [
        { id: 'A', text: 'Menghibur pembaca' },
        { id: 'B', text: 'Memperkuat pendapat penulis' },
        { id: 'C', text: 'Mengalihkan perhatian' },
        { id: 'D', text: 'Mengurangi isi opini' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Fakta mendukung argumen.\nKesimpulan: Fakta memperkuat opini.'
    },
    {
      id: 'b3-l3-q36',
      text: 'Artikel opini berbeda dengan berita karena...',
      options: [
        { id: 'A', text: 'Berisi pendapat penulis' },
        { id: 'B', text: 'Selalu bersifat fiksi' },
        { id: 'C', text: 'Tidak membutuhkan data' },
        { id: 'D', text: 'Tidak memiliki struktur' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Opini bersifat subjektif terkontrol.\nKesimpulan: Artikel opini berisi pendapat penulis.'
    },
    {
      id: 'b3-l3-q37',
      text: 'Kalimat fakta ditandai dengan...',
      options: [
        { id: 'A', text: 'Dapat dibuktikan kebenarannya' },
        { id: 'B', text: 'Mengandung emosi' },
        { id: 'C', text: 'Bersifat dugaan' },
        { id: 'D', text: 'Mengajak pembaca' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Fakta dapat diverifikasi.\nKesimpulan: Fakta dapat dibuktikan.'
    },
    {
      id: 'b3-l3-q38',
      text: 'Opini yang baik tidak mengandung...',
      options: [
        { id: 'A', text: 'Argumen logis' },
        { id: 'B', text: 'Data pendukung' },
        { id: 'C', text: 'Bahasa kasar dan menghina' },
        { id: 'D', text: 'Pendapat penulis' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Bahasa kasar menurunkan kualitas tulisan.\nKesimpulan: Opini tidak boleh menghina.'
    },
    {
      id: 'b3-l3-q39',
      text: 'Struktur umum artikel opini terdiri atas...',
      options: [
        { id: 'A', text: 'Orientasi, komplikasi, resolusi' },
        { id: 'B', text: 'Pendahuluan, isi, penutup' },
        { id: 'C', text: 'Judul, dialog, amanat' },
        { id: 'D', text: 'Abstrak dan simpulan' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Struktur opini bersifat logis.\nKesimpulan: Artikel opini terdiri dari pendahuluan, isi, penutup.'
    },
    {
      id: 'b3-l3-q40',
      text: 'Kalimat ajakan biasanya ditandai dengan kata...',
      options: [
        { id: 'A', text: 'Mungkin' },
        { id: 'B', text: 'Sebaiknya' },
        { id: 'C', text: 'Kemarin' },
        { id: 'D', text: 'Telah' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Kata ajakan bersifat persuasif.\nKesimpulan: Kata "sebaiknya" menunjukkan ajakan.'
    },
    {
      id: 'b3-l3-q41',
      text: 'Sumber data dalam artikel opini sebaiknya...',
      options: [
        { id: 'A', text: 'Tidak jelas asalnya' },
        { id: 'B', text: 'Bersumber terpercaya' },
        { id: 'C', text: 'Bersifat anonim' },
        { id: 'D', text: 'Hanya opini pribadi' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Sumber terpercaya meningkatkan kredibilitas.\nKesimpulan: Gunakan sumber tepercaya.'
    },
    {
      id: 'b3-l3-q42',
      text: 'Pendapat yang logis berarti...',
      options: [
        { id: 'A', text: 'Sesuai akal sehat dan fakta' },
        { id: 'B', text: 'Bersifat emosional' },
        { id: 'C', text: 'Tanpa alasan' },
        { id: 'D', text: 'Menyerang pihak lain' }
      ],
      correctOptionId: 'A',
      discussion: 'Penjelasan singkat: Logis berarti rasional.\nKesimpulan: Pendapat logis sesuai fakta.'
    },
    {
      id: 'b3-l3-q43',
      text: 'Tujuan penggunaan data statistik dalam artikel opini adalah...',
      options: [
        { id: 'A', text: 'Memperpanjang tulisan' },
        { id: 'B', text: 'Menguatkan argumen' },
        { id: 'C', text: 'Mengalihkan topik' },
        { id: 'D', text: 'Menghibur pembaca' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Statistik memberikan bukti.\nKesimpulan: Statistik memperkuat argumen.'
    },
    {
      id: 'b3-l3-q44',
      text: 'Artikel opini yang baik harus mudah...',
      options: [
        { id: 'A', text: 'Disalahpahami' },
        { id: 'B', text: 'Dibantah tanpa alasan' },
        { id: 'C', text: 'Dipahami pembaca' },
        { id: 'D', text: 'Dilupakan' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Kejelasan penting dalam tulisan.\nKesimpulan: Artikel opini harus mudah dipahami.'
    },
    {
      id: 'b3-l3-q45',
      text: 'Kalimat simpulan dalam artikel opini berfungsi untuk...',
      options: [
        { id: 'A', text: 'Memulai pembahasan' },
        { id: 'B', text: 'Menegaskan kembali pendapat' },
        { id: 'C', text: 'Menyajikan data baru' },
        { id: 'D', text: 'Mengkritik pembaca' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Simpulan menegaskan isi.\nKesimpulan: Simpulan menegaskan pendapat.'
    },
    {
      id: 'b3-l3-q46',
      text: 'Artikel opini bersifat subjektif karena...',
      options: [
        { id: 'A', text: 'Tidak memakai data' },
        { id: 'B', text: 'Berisi sudut pandang penulis' },
        { id: 'C', text: 'Tidak memiliki struktur' },
        { id: 'D', text: 'Hanya berisi cerita' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Subjektif berarti dari sudut pandang penulis.\nKesimpulan: Artikel opini bersifat subjektif.'
    },
    {
      id: 'b3-l3-q47',
      text: 'Bahasa yang digunakan dalam artikel opini sebaiknya...',
      options: [
        { id: 'A', text: 'Kasar' },
        { id: 'B', text: 'Provokatif berlebihan' },
        { id: 'C', text: 'Santun dan meyakinkan' },
        { id: 'D', text: 'Tidak baku' }
      ],
      correctOptionId: 'C',
      discussion: 'Penjelasan singkat: Bahasa santun meningkatkan kepercayaan.\nKesimpulan: Gunakan bahasa santun.'
    },
    {
      id: 'b3-l3-q48',
      text: 'Opini yang disertai solusi menunjukkan bahwa penulis...',
      options: [
        { id: 'A', text: 'Hanya mengkritik' },
        { id: 'B', text: 'Bersikap konstruktif' },
        { id: 'C', text: 'Menghindari masalah' },
        { id: 'D', text: 'Tidak peduli' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Solusi bersifat membangun.\nKesimpulan: Penulis bersikap konstruktif.'
    },
    {
      id: 'b3-l3-q49',
      text: 'Artikel opini biasanya dimuat di...',
      options: [
        { id: 'A', text: 'Buku pelajaran' },
        { id: 'B', text: 'Kolom opini media massa' },
        { id: 'C', text: 'Cerita pendek' },
        { id: 'D', text: 'Novel' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Opini banyak dimuat di media.\nKesimpulan: Artikel opini dimuat di kolom opini.'
    },
    {
      id: 'b3-l3-q50',
      text: 'Ciri utama artikel opini adalah...',
      options: [
        { id: 'A', text: 'Berisi dialog tokoh' },
        { id: 'B', text: 'Berisi pendapat disertai argumen' },
        { id: 'C', text: 'Berisi alur cerita' },
        { id: 'D', text: 'Berisi imajinasi penuh' }
      ],
      correctOptionId: 'B',
      discussion: 'Penjelasan singkat: Opini menyampaikan pendapat dan alasan.\nKesimpulan: Artikel opini berisi pendapat dan argumen.'
    }
],

/*
// =========================
// SIMULASI (TEST 1 SOAL)
// =========================
'sim-mtk-l1': [
  {
    id: 'sim-mtk-l1-q1',
    text: 'Jika 3x + 5 = 20, nilai x adalah ....',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 3x + 5 = 20 ⇒ 3x = 15 ⇒ x = 5.\nKesimpulan: Jawaban yang benar adalah C.'
  }
],
'sim-mtk-l2': [
  {
    id: 'sim-mtk-l2-q1',
    text: 'Sebuah persegi memiliki keliling 48 cm. Panjang sisinya adalah ....',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '11 cm' },
      { id: 'C', text: '12 cm' },
      { id: 'D', text: '13 cm' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Keliling persegi = 4s, jadi 48 = 4s ⇒ s = 12.\nKesimpulan: Jawaban yang benar adalah C.'
  }
],
'sim-mtk-l3': [
  {
    id: 'sim-mtk-l3-q1',
    text: 'Jika f(x)=x²−6x+5, maka nilai minimum fungsi adalah ....',
    options: [
      { id: 'A', text: '-4' },
      { id: 'B', text: '-3' },
      { id: 'C', text: '-2' },
      { id: 'D', text: '-1' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik puncak di x = 6/2 = 3. f(3)=9−18+5=−4.\nKesimpulan: Jawaban yang benar adalah A.'
  }
],

'sim-bi-l1': [
  {
    id: 'sim-bi-l1-q1',
    text: 'Bacalah teks berikut.\n\nRani menabung setiap hari. Setelah satu minggu, tabungannya bertambah cukup banyak.\n\nApa kegiatan utama Rani dalam teks tersebut?',
    options: [
      { id: 'A', text: 'Berbelanja setiap hari' },
      { id: 'B', text: 'Menabung setiap hari' },
      { id: 'C', text: 'Berlibur satu minggu' },
      { id: 'D', text: 'Meminjam uang teman' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyatakan jelas bahwa Rani menabung setiap hari.\nKesimpulan: Jawaban yang benar adalah B.'
  }
],
'sim-bi-l2': [
  {
    id: 'sim-bi-l2-q1',
    text: 'Bacalah teks berikut.\n\nDi sekolah, program literasi dilakukan setiap pagi selama 15 menit. Banyak siswa merasa terbantu karena kosakata mereka meningkat.\n\nSimpulan yang tepat dari teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Program literasi membuat siswa datang terlambat' },
      { id: 'B', text: 'Program literasi tidak berdampak pada siswa' },
      { id: 'C', text: 'Program literasi membantu meningkatkan kosakata siswa' },
      { id: 'D', text: 'Program literasi hanya dilakukan saat ujian' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Teks menyebut siswa terbantu dan kosakata meningkat.\nKesimpulan: Jawaban yang benar adalah C.'
  }
],
'sim-bi-l3': [
  {
    id: 'sim-bi-l3-q1',
    text: 'Bacalah kutipan berikut.\n\n“Langit sore itu tidak hanya kelabu, tetapi juga membawa kabar yang tidak ingin ia dengar.”\n\nMakna tersirat dari kalimat tersebut adalah ....',
    options: [
      { id: 'A', text: 'Cuaca sedang cerah dan menyenangkan' },
      { id: 'B', text: 'Tokoh sedang menunggu kabar baik' },
      { id: 'C', text: 'Tokoh sedang cemas menghadapi kabar buruk' },
      { id: 'D', text: 'Tokoh sedang merayakan keberhasilan' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “kelabu” dan “kabar yang tidak ingin ia dengar” mengisyaratkan suasana negatif.\nKesimpulan: Jawaban yang benar adalah C.'
  }
], */

// simulasi latikan tka matematika level 1

'sim-mtk-l1': [
  {
    id: 'sim-mtk-l1-q1',
    text: 'Jika 3x + 5 = 20, maka nilai x adalah ....',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Pindahkan 5 ke ruas kanan.\nLangkah-langkah: 3x = 20 − 5 = 15, sehingga x = 15 ÷ 3 = 5.\nKesimpulan: Nilai x adalah 5.'
  },
  {
    id: 'sim-mtk-l1-q2',
    text: 'Hasil dari 12 − (−8) adalah ....',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '20' },
      { id: 'C', text: '-20' },
      { id: 'D', text: '-4' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Mengurangkan bilangan negatif sama dengan menambahkan.\nLangkah-langkah: 12 − (−8) = 12 + 8 = 20.\nKesimpulan: Hasilnya adalah 20.'
  },
  {
    id: 'sim-mtk-l1-q3',
    text: 'Keliling persegi dengan panjang sisi 9 cm adalah ....',
    options: [
      { id: 'A', text: '18 cm' },
      { id: 'B', text: '27 cm' },
      { id: 'C', text: '36 cm' },
      { id: 'D', text: '81 cm' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Keliling persegi adalah 4 × sisi.\nLangkah-langkah: 4 × 9 = 36.\nKesimpulan: Keliling persegi adalah 36 cm.'
  },
  {
    id: 'sim-mtk-l1-q4',
    text: 'Hasil dari 6 × (−7) adalah ....',
    options: [
      { id: 'A', text: '42' },
      { id: 'B', text: '-42' },
      { id: 'C', text: '13' },
      { id: 'D', text: '-13' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Bilangan positif dikali negatif hasilnya negatif.\nLangkah-langkah: 6 × 7 = 42, beri tanda negatif.\nKesimpulan: Hasilnya adalah −42.'
  },
  {
    id: 'sim-mtk-l1-q5',
    text: 'Suhu pagi hari −3°C. Siang hari suhu naik 7°C. Suhu siang hari adalah ....',
    options: [
      { id: 'A', text: '−10°C' },
      { id: 'B', text: '−4°C' },
      { id: 'C', text: '4°C' },
      { id: 'D', text: '10°C' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kenaikan suhu berarti penjumlahan.\nLangkah-langkah: −3 + 7 = 4.\nKesimpulan: Suhu siang hari adalah 4°C.'
  },
{
  id: 'sim-mtk-l1-q6',
  text: 'Suhu di pagi hari adalah -3°C. Siang hari naik 7°C. Suhu siang hari adalah ....',
  options: [
    { id: 'A', text: '-10°C' },
    { id: 'B', text: '4°C' },
    { id: 'C', text: '-4°C' },
    { id: 'D', text: '10°C' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Suhu naik berarti ditambah.\nLangkah: -3 + 7 = 4.\nKesimpulan: Suhu siang hari adalah 4°C.'
},
{
  id: 'sim-mtk-l1-q7',
  text: 'Hasil dari 24 ÷ 6 + 3 × 2 adalah ....',
  options: [
    { id: 'A', text: '10' },
    { id: 'B', text: '12' },
    { id: 'C', text: '8' },
    { id: 'D', text: '14' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Kerjakan pembagian dan perkalian dulu.\nLangkah: 24 ÷ 6 = 4 dan 3 × 2 = 6, lalu 4 + 6 = 10.\nKesimpulan: Nilainya adalah 10.'
},
{
  id: 'sim-mtk-l1-q8',
  text: 'Seorang pedagang memiliki 35 kue. Ia menjual 18 kue. Sisa kue pedagang adalah ....',
  options: [
    { id: 'A', text: '13' },
    { id: 'B', text: '17' },
    { id: 'C', text: '53' },
    { id: 'D', text: '19' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Sisa = jumlah awal dikurangi yang terjual.\nLangkah: 35 - 18 = 17.\nKesimpulan: Sisa kue pedagang adalah 17.'
},
{
  id: 'sim-mtk-l1-q9',
  text: 'Nilai dari (-6) + (-4) + 15 adalah ....',
  options: [
    { id: 'A', text: '5' },
    { id: 'B', text: '7' },
    { id: 'C', text: '9' },
    { id: 'D', text: '-5' }
  ],
  correctOptionId: 'A',
  discussion: 'Penjelasan singkat: Jumlahkan bilangan negatif lalu tambahkan bilangan positif.\nLangkah: (-6) + (-4) = -10, kemudian -10 + 15 = 5.\nKesimpulan: Nilainya adalah 5.'
},
{
  id: 'sim-mtk-l1-q10',
  text: 'Sebuah persegi panjang memiliki panjang 12 cm dan lebar 5 cm. Kelilingnya adalah ....',
  options: [
    { id: 'A', text: '17 cm' },
    { id: 'B', text: '34 cm' },
    { id: 'C', text: '60 cm' },
    { id: 'D', text: '24 cm' }
  ],
  correctOptionId: 'B',
  discussion: 'Penjelasan singkat: Keliling persegi panjang = 2(p + l).\nLangkah: 2(12 + 5) = 2 × 17 = 34.\nKesimpulan: Kelilingnya adalah 34 cm.'
},
 {
    id: 'sim-mtk-l1-q11',
    text: 'Suhu di kota A adalah -3°C pada pagi hari. Siang harinya suhu naik 7°C. Suhu kota A pada siang hari adalah ....',
    options: [
      { id: 'A', text: '-10°C' },
      { id: 'B', text: '4°C' },
      { id: 'C', text: '-4°C' },
      { id: 'D', text: '10°C' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Suhu siang = -3 + 7 = 4.\nKesimpulan: Suhu pada siang hari adalah 4°C (B).'
  },
    {
    id: 'sim-mtk-l1-q12',
    text: 'Hasil dari 36 ÷ 6 + 4 × 2 adalah ....',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '12' },
      { id: 'C', text: '14' },
      { id: 'D', text: '16' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kerjakan bagi/kali dulu: 36 ÷ 6 = 6 dan 4 × 2 = 8, lalu 6 + 8 = 14.\nKesimpulan: Jawaban yang benar adalah 14 (C).'
  },
{
    id: 'sim-mtk-l1-q13',
    text: 'Sebuah persegi panjang memiliki panjang 12 cm dan lebar 7 cm. Keliling persegi panjang tersebut adalah ....',
    options: [
      { id: 'A', text: '19 cm' },
      { id: 'B', text: '38 cm' },
      { id: 'C', text: '42 cm' },
      { id: 'D', text: '84 cm' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Keliling = 2(p + l) = 2(12 + 7) = 2 × 19 = 38.\nKesimpulan: Kelilingnya 38 cm (B).'
  },
  {
    id: 'sim-mtk-l1-q14',
    text: 'Perhatikan data nilai ulangan: 6, 8, 7, 9, 8. Modus data tersebut adalah ....',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Modus adalah nilai yang paling sering muncul. Angka 8 muncul dua kali.\nKesimpulan: Modusnya 8 (C).'
  },
  {
    id: 'sim-mtk-l1-q15',
    text: 'Di sebuah kantong terdapat 3 kelereng merah dan 2 kelereng biru. Jika diambil 1 kelereng secara acak, peluang terambil kelereng biru adalah ....',
    options: [
      { id: 'A', text: '2/3' },
      { id: 'B', text: '2/5' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '1/2' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Peluang = banyak kejadian yang diinginkan / total. Biru = 2, total = 3 + 2 = 5, jadi 2/5.\nKesimpulan: Peluangnya 2/5 (B).'
  },
    {
    id: 'sim-mtk-l1-q16',
    text: 'Hasil dari -12 + 5 - (-3) adalah ....',
    options: [
      { id: 'A', text: '-10' },
      { id: 'B', text: '-4' },
      { id: 'C', text: '-2' },
      { id: 'D', text: '2' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: -12 + 5 - (-3) = -12 + 5 + 3 = -4.\nKesimpulan: Jawaban yang benar adalah -4 (B).'
  },
  {
    id: 'sim-mtk-l1-q17',
    text: 'Nilai dari 15 × (8 − 6) adalah ....',
    options: [
      { id: 'A', text: '15' },
      { id: 'B', text: '20' },
      { id: 'C', text: '30' },
      { id: 'D', text: '45' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: (8 − 6) = 2, lalu 15 × 2 = 30.\nKesimpulan: Jawaban yang benar adalah 30 (C).'
  },
  {
    id: 'sim-mtk-l1-q18',
    text: 'Hasil dari 3/4 + 1/4 adalah ....',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1' },
      { id: 'C', text: '1 1/4' },
      { id: 'D', text: '2' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Penyebut sama, jadi (3 + 1)/4 = 4/4 = 1.\nKesimpulan: Jawaban yang benar adalah 1 (B).'
  },
  {
    id: 'sim-mtk-l1-q19',
    text: 'Sebuah toko memberi diskon 20% untuk sebuah barang seharga Rp150.000. Harga setelah diskon adalah ....',
    options: [
      { id: 'A', text: 'Rp120.000' },
      { id: 'B', text: 'Rp125.000' },
      { id: 'C', text: 'Rp130.000' },
      { id: 'D', text: 'Rp140.000' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diskon 20% = 0,2 × 150.000 = 30.000. Harga akhir = 150.000 − 30.000 = 120.000.\nKesimpulan: Harga setelah diskon Rp120.000 (A).'
  },
  {
    id: 'sim-mtk-l1-q20',
    text: 'Sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm. Luas segitiga tersebut adalah ....',
    options: [
      { id: 'A', text: '18 cm²' },
      { id: 'B', text: '30 cm²' },
      { id: 'C', text: '40 cm²' },
      { id: 'D', text: '80 cm²' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Luas segitiga = 1/2 × alas × tinggi = 1/2 × 10 × 8 = 40.\nKesimpulan: Luasnya 40 cm² (C).'
  },
  {
    id: 'sim-mtk-l1-q21',
    text: 'Sebuah persegi memiliki luas 81 cm². Panjang sisi persegi tersebut adalah ....',
    options: [
      { id: 'A', text: '8 cm' },
      { id: 'B', text: '9 cm' },
      { id: 'C', text: '10 cm' },
      { id: 'D', text: '12 cm' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Luas persegi = s². Jika s² = 81, maka s = 9.\nKesimpulan: Panjang sisi persegi 9 cm (B).'
  },
  {
    id: 'sim-mtk-l1-q22',
    text: 'Jumlah sudut dalam sebuah segitiga adalah ....',
    options: [
      { id: 'A', text: '90°' },
      { id: 'B', text: '120°' },
      { id: 'C', text: '180°' },
      { id: 'D', text: '360°' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Jumlah sudut dalam segitiga selalu 180°.\nKesimpulan: Jawaban yang benar adalah 180° (C).'
  },
  {
    id: 'sim-mtk-l1-q23',
    text: 'Perhatikan tabel jumlah buku yang dibaca siswa selama seminggu: Andi 2, Beni 4, Cici 3, Dini 5. Siapa yang membaca buku paling banyak?',
    options: [
      { id: 'A', text: 'Andi' },
      { id: 'B', text: 'Beni' },
      { id: 'C', text: 'Cici' },
      { id: 'D', text: 'Dini' },
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Nilai terbesar adalah 5 dan itu milik Dini.\nKesimpulan: Yang membaca paling banyak adalah Dini (D).'
  },
  {
    id: 'sim-mtk-l1-q24',
    text: 'Data tinggi badan (cm): 150, 152, 152, 155, 158. Median dari data tersebut adalah ....',
    options: [
      { id: 'A', text: '150' },
      { id: 'B', text: '152' },
      { id: 'C', text: '155' },
      { id: 'D', text: '158' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Data sudah urut, jumlahnya 5. Median adalah data ke-3 yaitu 152.\nKesimpulan: Median data adalah 152 (B).'
  },
  {
    id: 'sim-mtk-l1-q25',
    text: 'Rata-rata dari data: 6, 7, 9, 8 adalah ....',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '7,5' },
      { id: 'C', text: '8' },
      { id: 'D', text: '8,5' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Rata-rata = (6 + 7 + 9 + 8)/4 = 30/4 = 7,5.\nKesimpulan: Rata-ratanya 7,5 (B).'
  },
  {
    id: 'sim-mtk-l1-q26',
    text: 'Dari bilangan berikut: -2, 0, 5, -7, 3. Bilangan yang paling kecil adalah ....',
    options: [
      { id: 'A', text: '-7' },
      { id: 'B', text: '-2' },
      { id: 'C', text: '0' },
      { id: 'D', text: '3' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bilangan paling kecil adalah yang nilainya paling negatif, yaitu -7.\nKesimpulan: Jawaban yang benar adalah -7 (A).'
  },
  {
    id: 'sim-mtk-l1-q27',
    text: 'Sebuah kelas memiliki 12 siswa laki-laki dan 18 siswa perempuan. Perbandingan laki-laki : perempuan adalah ....',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '4 : 6' },
      { id: 'D', text: '6 : 9' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: 12 : 18 disederhanakan bagi 6 menjadi 2 : 3.\nKesimpulan: Perbandingannya 2 : 3 (A).'
  },
  {
    id: 'sim-mtk-l1-q28',
    text: 'Sebuah lingkaran memiliki diameter 14 cm. Jika π = 22/7, keliling lingkaran adalah ....',
    options: [
      { id: 'A', text: '22 cm' },
      { id: 'B', text: '44 cm' },
      { id: 'C', text: '66 cm' },
      { id: 'D', text: '88 cm' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Keliling = π × d = (22/7) × 14 = 22 × 2 = 44.\nKesimpulan: Keliling lingkaran 44 cm (B).'
  },
  {
    id: 'sim-mtk-l1-q29',
    text: 'Sebuah dadu bersisi 6 dilempar sekali. Peluang muncul angka genap adalah ....',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '1/2' },
      { id: 'D', text: '2/3' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Angka genap pada dadu: 2, 4, 6 (3 kejadian) dari total 6. Peluang = 3/6 = 1/2.\nKesimpulan: Peluangnya 1/2 (C).'
  },
  {
    id: 'sim-mtk-l1-q30',
    text: 'Sebuah tabung air berisi 5 liter. Setelah dipakai, tersisa 2,5 liter. Banyak air yang dipakai adalah ....',
    options: [
      { id: 'A', text: '2 liter' },
      { id: 'B', text: '2,5 liter' },
      { id: 'C', text: '3 liter' },
      { id: 'D', text: '7,5 liter' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Dipakai = 5 − 2,5 = 2,5.\nKesimpulan: Banyak air yang dipakai adalah 2,5 liter (B).'
  },
],

// simulasi ujian tka matematika level 2

'sim-mtk-l2': [
  {
    id: 'sim-mtk-l2-q1',
    text: 'Jika 2x - 7 = 13, nilai x adalah ....',
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '9' },
      { id: 'C', text: '10' },
      { id: 'D', text: '11' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 2x - 7 = 13 ⇒ 2x = 20 ⇒ x = 10.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q2',
    text: 'Nilai x yang memenuhi 5(x - 2) = 3x + 6 adalah ....',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 5x - 10 = 3x + 6 ⇒ 2x = 16 ⇒ x = 8.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q3',
    text: 'Jika 3(x + 4) - 2x = 18, nilai x adalah ....',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '7' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 3x + 12 - 2x = 18 ⇒ x + 12 = 18 ⇒ x = 6.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q4',
    text: 'Jika x/3 + 2 = 6, nilai x adalah ....',
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '10' },
      { id: 'C', text: '11' },
      { id: 'D', text: '12' },
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: x/3 = 6 - 2 = 4 ⇒ x = 12.\nKesimpulan: Jawaban yang benar adalah D.'
  },
  {
    id: 'sim-mtk-l2-q5',
    text: 'Jika 4x + 3 = 2x + 19, nilai x adalah ....',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 4x - 2x = 19 - 3 ⇒ 2x = 16 ⇒ x = 8.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q6',
    text: 'Jika y = 2x - 5 dan y = 9, maka nilai x adalah ....',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '6' },
      { id: 'C', text: '7' },
      { id: 'D', text: '8' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 9 = 2x - 5 ⇒ 2x = 14 ⇒ x = 7.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q7',
    text: 'Jika 7x - 2 = 5x + 10, nilai x adalah ....',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '7' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 7x - 5x = 10 + 2 ⇒ 2x = 12 ⇒ x = 6.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q8',
    text: 'Jika x + 3 = 2x - 5, nilai x adalah ....',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: x + 3 = 2x - 5 ⇒ 3 = x - 5 ⇒ x = 8.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q9',
    text: 'Jika 9 - 2x = 1, nilai x adalah ....',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: 9 - 2x = 1 ⇒ -2x = -8 ⇒ x = 4.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q10',
    text: 'Jika 2(3x + 1) = 20, nilai x adalah ....',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: 2(3x + 1) = 20 ⇒ 6x + 2 = 20 ⇒ 6x = 18 ⇒ x = 3.\nKesimpulan: Jawaban yang benar adalah B.'
  },

  {
    id: 'sim-mtk-l2-q11',
    text: 'Perbandingan panjang dan lebar sebuah persegi panjang adalah 3 : 2. Jika lebarnya 10 cm, panjangnya adalah ....',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '15 cm' },
      { id: 'C', text: '18 cm' },
      { id: 'D', text: '20 cm' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: 3:2, lebar = 10 ⇒ 2k = 10 ⇒ k = 5 ⇒ panjang = 3k = 15.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q12',
    text: 'Keliling sebuah persegi panjang 50 cm. Jika panjangnya 15 cm, lebarnya adalah ....',
    options: [
      { id: 'A', text: '8 cm' },
      { id: 'B', text: '10 cm' },
      { id: 'C', text: '12 cm' },
      { id: 'D', text: '15 cm' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: K = 2(p + l) = 50 ⇒ p + l = 25 ⇒ l = 25 - 15 = 10.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q13',
    text: 'Sebuah persegi memiliki luas 196 cm². Panjang sisi persegi tersebut adalah ....',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '13 cm' },
      { id: 'C', text: '14 cm' },
      { id: 'D', text: '15 cm' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Luas persegi = s² ⇒ s² = 196 ⇒ s = 14.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q14',
    text: 'Luas persegi panjang 168 cm². Jika panjangnya 21 cm, lebarnya adalah ....',
    options: [
      { id: 'A', text: '6 cm' },
      { id: 'B', text: '7 cm' },
      { id: 'C', text: '8 cm' },
      { id: 'D', text: '9 cm' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: L = p × l ⇒ 168 = 21 × l ⇒ l = 8.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q15',
    text: 'Sebuah segitiga memiliki alas 12 cm dan tinggi 9 cm. Luas segitiga tersebut adalah ....',
    options: [
      { id: 'A', text: '45 cm²' },
      { id: 'B', text: '54 cm²' },
      { id: 'C', text: '90 cm²' },
      { id: 'D', text: '108 cm²' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: L = 1/2 × alas × tinggi = 1/2 × 12 × 9 = 54.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q16',
    text: 'Dua segitiga sebangun. Jika sisi segitiga kecil 6 cm berpadanan dengan sisi segitiga besar 9 cm, skala perbesaran (kecil → besar) adalah ....',
    options: [
      { id: 'A', text: '2/3' },
      { id: 'B', text: '3/2' },
      { id: 'C', text: '4/3' },
      { id: 'D', text: '5/2' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Skala kecil → besar = 9/6 = 3/2.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q17',
    text: 'Dua bangun sebangun dengan perbandingan A : B = 2 : 5. Jika sisi pada bangun A adalah 8 cm, sisi yang bersesuaian pada bangun B adalah ....',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '16 cm' },
      { id: 'C', text: '18 cm' },
      { id: 'D', text: '20 cm' },
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: A:B = 2:5 ⇒ B = 8 × (5/2) = 20.\nKesimpulan: Jawaban yang benar adalah D.'
  },
  {
    id: 'sim-mtk-l2-q18',
    text: 'Dua segitiga sebangun memiliki perbandingan sisi kecil : besar = 4 : 6. Jika sisi segitiga kecil 10 cm, sisi segitiga besar yang bersesuaian adalah ....',
    options: [
      { id: 'A', text: '12 cm' },
      { id: 'B', text: '14 cm' },
      { id: 'C', text: '15 cm' },
      { id: 'D', text: '16 cm' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: kecil:besar = 4:6 ⇒ besar = 10 × (6/4) = 15.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q19',
    text: 'Keliling sebuah persegi panjang 64 cm. Jika panjangnya 20 cm, lebarnya adalah ....',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '11 cm' },
      { id: 'C', text: '12 cm' },
      { id: 'D', text: '14 cm' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: 2(p + l) = 64 ⇒ p + l = 32 ⇒ l = 32 - 20 = 12.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q20',
    text: 'Sebuah persegi memiliki keliling 48 cm. Panjang sisinya adalah ....',
    options: [
      { id: 'A', text: '10 cm' },
      { id: 'B', text: '11 cm' },
      { id: 'C', text: '12 cm' },
      { id: 'D', text: '13 cm' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Keliling persegi = 4s ⇒ 48 = 4s ⇒ s = 12.\nKesimpulan: Jawaban yang benar adalah C.'
  },

  {
    id: 'sim-mtk-l2-q21',
    text: 'Rata-rata dari 6, 8, 10, dan 12 adalah ....',
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '9' },
      { id: 'C', text: '10' },
      { id: 'D', text: '11' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: (6 + 8 + 10 + 12) / 4 = 36 / 4 = 9.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q22',
    text: 'Rata-rata dari data 11, 13, 15, 17, 19 adalah ....',
    options: [
      { id: 'A', text: '14' },
      { id: 'B', text: '15' },
      { id: 'C', text: '16' },
      { id: 'D', text: '17' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Jumlah = 11+13+15+17+19 = 75, rata-rata = 75/5 = 15.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q23',
    text: 'Median dari data 3, 7, 8, 10, 12 adalah ....',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '8' },
      { id: 'C', text: '9' },
      { id: 'D', text: '10' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Data berjumlah 5, median adalah data ke-3 yaitu 8.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q24',
    text: 'Median dari data 4, 6, 8, 10 adalah ....',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Data genap, median = (6 + 8) / 2 = 7.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q25',
    text: 'Median dari data 1, 2, 4, 7, 9, 10, 12 adalah ....',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Ada 7 data, median adalah data ke-4 yaitu 7.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-mtk-l2-q26',
    text: 'Modus dari data 5, 6, 6, 7, 8, 8, 8, 9 adalah ....',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Nilai yang paling sering muncul adalah 8.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q27',
    text: 'Modus dari data 2, 3, 3, 5, 7, 7, 7 adalah ....',
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '2' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Angka yang paling sering muncul adalah 7.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q28',
    text: 'Modus dari data 4, 4, 5, 6, 6, 6, 7, 8 adalah ....',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '7' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Nilai yang paling sering muncul adalah 6.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q29',
    text: 'Rata-rata dari 5 bilangan adalah 12. Jika jumlah 4 bilangan pertama 46, bilangan kelima adalah ....',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '13' },
      { id: 'C', text: '14' },
      { id: 'D', text: '15' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Total 5 bilangan = 5 × 12 = 60. Bilangan ke-5 = 60 - 46 = 14.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-mtk-l2-q30',
    text: 'Rata-rata dari 7 bilangan adalah 9. Jika jumlah 6 bilangan pertama 50, bilangan ke-7 adalah ....',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '11' },
      { id: 'C', text: '12' },
      { id: 'D', text: '13' },
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: Total 7 bilangan = 7 × 9 = 63. Bilangan ke-7 = 63 - 50 = 13.\nKesimpulan: Jawaban yang benar adalah D.'
  }
],


// =========================
// SIMULASI MATEMATIKA LEVEL 3 (sim-mtk-l3) — Q1–Q15 (REVISI AMAN)
// =========================
'sim-mtk-l3': [
  {
    id: 'sim-mtk-l3-q1',
    text: 'Diketahui f(x) = x² − 6x + 5. Nilai minimum f(x) adalah ....',
    options: [
      { id: 'A', text: '-4' },
      { id: 'B', text: '-3' },
      { id: 'C', text: '-2' },
      { id: 'D', text: '-1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Nilai minimum fungsi kuadrat terjadi di titik puncak.\nLangkah: x = 6/2 = 3, f(3) = 9 − 18 + 5 = −4.\nKesimpulan: Nilai minimum adalah −4.'
  },
  {
    id: 'sim-mtk-l3-q2',
    text: 'Akar-akar persamaan x² − 7x + 12 = 0 adalah ....',
    options: [
      { id: 'A', text: '1 dan 12' },
      { id: 'B', text: '3 dan 4' },
      { id: 'C', text: '2 dan 6' },
      { id: 'D', text: '5 dan 7' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Persamaan dapat difaktorkan.\nLangkah: (x−3)(x−4)=0.\nKesimpulan: Akar-akarnya adalah 3 dan 4.'
  },
  {
    id: 'sim-mtk-l3-q3',
    text: 'Jika g(x) = x² + 4x − 1, maka nilai g(−2) adalah ....',
    options: [
      { id: 'A', text: '-9' },
      { id: 'B', text: '-5' },
      { id: 'C', text: '-1' },
      { id: 'D', text: '3' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Substitusi x = −2.\nLangkah: 4 − 8 − 1 = −5.\nKesimpulan: Nilai g(−2) adalah −5.'
  },
  {
    id: 'sim-mtk-l3-q4',
    text: 'Titik puncak grafik y = x² − 4x + 1 adalah ....',
    options: [
      { id: 'A', text: '(2, −3)' },
      { id: 'B', text: '(2, −1)' },
      { id: 'C', text: '(-2, −3)' },
      { id: 'D', text: '(-2, −1)' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik puncak di x = −b/(2a).\nLangkah: x = 4/2 = 2, y = −3.\nKesimpulan: Titik puncak adalah (2, −3).'
  },
  {
    id: 'sim-mtk-l3-q5',
    text: 'Nilai diskriminan persamaan 2x² − 4x + 5 = 0 adalah ....',
    options: [
      { id: 'A', text: '-24' },
      { id: 'B', text: '-16' },
      { id: 'C', text: '16' },
      { id: 'D', text: '24' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Diskriminan D = b² − 4ac.\nLangkah: 16 − 40 = −24.\nKesimpulan: Diskriminannya −24.'
  },
  {
    id: 'sim-mtk-l3-q6',
    text: 'Jika f(x)=ax²+bx+3 dengan f(1)=6 dan f(2)=13, maka nilai a adalah ....',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Bentuk sistem persamaan.\nLangkah: a+b=3 dan 2a+b=5 → a=2.\nKesimpulan: Nilai a adalah 2.'
  },
  {
    id: 'sim-mtk-l3-q7',
    text: 'Parabola y = x² + px + 4 melalui titik (1, 7). Nilai p adalah ....',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Substitusi titik ke persamaan.\nLangkah: 1 + p + 4 = 7 → p = 2.\nKesimpulan: Nilai p adalah 2.'
  },
  {
    id: 'sim-mtk-l3-q8',
    text: 'Persamaan kuadrat yang akar-akarnya 2 dan −5 adalah ....',
    options: [
      { id: 'A', text: 'x² + 3x − 10 = 0' },
      { id: 'B', text: 'x² − 3x − 10 = 0' },
      { id: 'C', text: 'x² + 10x − 3 = 0' },
      { id: 'D', text: 'x² − 10x − 3 = 0' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan (x−r₁)(x−r₂).\nLangkah: (x−2)(x+5).\nKesimpulan: Persamaannya x² + 3x − 10.'
  },
  {
    id: 'sim-mtk-l3-q9',
    text: 'Jika h(x) = (x − 3)² − 7, maka nilai h(0) adalah ....',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '1' },
      { id: 'C', text: '-1' },
      { id: 'D', text: '-2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Substitusi x = 0.\nLangkah: 9 − 7 = 2.\nKesimpulan: Nilai h(0) adalah 2.'
  },
  {
    id: 'sim-mtk-l3-q10',
    text: 'Nilai maksimum fungsi y = −x² + 6x − 8 adalah ....',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Parabola membuka ke bawah.\nLangkah: x = 3 → y = 1.\nKesimpulan: Nilai maksimum adalah 1.'
  },
  {
    id: 'sim-mtk-l3-q11',
    text: 'Jika (x+2)(x−4)=0, maka himpunan penyelesaiannya adalah ....',
    options: [
      { id: 'A', text: '{−2, 4}' },
      { id: 'B', text: '{2, −4}' },
      { id: 'C', text: '{−2, −4}' },
      { id: 'D', text: '{2, 4}' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Setiap faktor sama dengan nol.\nKesimpulan: Himpunan penyelesaiannya {−2, 4}.'
  },
  {
    id: 'sim-mtk-l3-q12',
    text: 'Jika f(x)=x²+2x+k menyinggung sumbu-x, nilai k adalah ....',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '-1' },
      { id: 'D', text: '2' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Menyinggung berarti diskriminan = 0.\nLangkah: 4−4k=0 → k=1.\nKesimpulan: Nilai k adalah 1.'
  },
  {
    id: 'sim-mtk-l3-q13',
    text: 'Akar persamaan x² + 4x + 4 = 0 adalah ....',
    options: [
      { id: 'A', text: '2 (kembar)' },
      { id: 'B', text: '−2 (kembar)' },
      { id: 'C', text: '2 dan −2' },
      { id: 'D', text: 'Tidak ada akar real' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Bentuk kuadrat sempurna.\nLangkah: (x+2)²=0.\nKesimpulan: Akar kembar −2.'
  },
  {
    id: 'sim-mtk-l3-q14',
    text: 'Jika akar-akar persamaan x² − px + 16 = 0 adalah 4 dan 4, maka nilai p adalah ....',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '8' },
      { id: 'C', text: '12' },
      { id: 'D', text: '16' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Jumlah akar = p.\nLangkah: 4 + 4 = 8.\nKesimpulan: Nilai p adalah 8.'
  },
  {
    id: 'sim-mtk-l3-q15',
    text: 'Bentuk kuadrat sempurna dari x² − 10x + 25 adalah ....',
    options: [
      { id: 'A', text: '(x−5)²' },
      { id: 'B', text: '(x+5)²' },
      { id: 'C', text: '(x−10)²' },
      { id: 'D', text: '(x+10)²' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Cocokkan dengan (x−a)².\nKesimpulan: Bentuknya (x−5)².'
  },
  // =========================
// SIMULASI MATEMATIKA LEVEL 3 (sim-mtk-l3) — Q16–Q30
// =========================
  {
    id: 'sim-mtk-l3-q16',
    text: 'Jika f(x)=2x²−8x+3, nilai minimum fungsi tersebut adalah ....',
    options: [
      { id: 'A', text: '-5' },
      { id: 'B', text: '-4' },
      { id: 'C', text: '-3' },
      { id: 'D', text: '-2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Nilai minimum terjadi di titik puncak.\nLangkah: x = 8/4 = 2, f(2)=8−16+3=−5.\nKesimpulan: Nilai minimum adalah −5.'
  },
  {
    id: 'sim-mtk-l3-q17',
    text: 'Persamaan kuadrat yang grafiknya membuka ke bawah adalah ....',
    options: [
      { id: 'A', text: 'y = x² − 4' },
      { id: 'B', text: 'y = −x² + 3x' },
      { id: 'C', text: 'y = x² + 2x' },
      { id: 'D', text: 'y = x² − 5x + 1' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Grafik membuka ke bawah jika koefisien x² negatif.\nKesimpulan: Jawaban yang benar adalah y = −x² + 3x.'
  },
  {
    id: 'sim-mtk-l3-q18',
    text: 'Jika diskriminan suatu persamaan kuadrat bernilai negatif, maka ....',
    options: [
      { id: 'A', text: 'Memiliki dua akar berbeda' },
      { id: 'B', text: 'Memiliki satu akar kembar' },
      { id: 'C', text: 'Tidak memiliki akar real' },
      { id: 'D', text: 'Selalu memiliki akar positif' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Diskriminan < 0 berarti akar imajiner.\nKesimpulan: Persamaan tidak memiliki akar real.'
  },
  {
    id: 'sim-mtk-l3-q19',
    text: 'Akar-akar persamaan x² + 2x − 15 = 0 adalah ....',
    options: [
      { id: 'A', text: '3 dan −5' },
      { id: 'B', text: '5 dan −3' },
      { id: 'C', text: '15 dan −1' },
      { id: 'D', text: '−15 dan 1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Faktorkan persamaan.\nLangkah: (x+5)(x−3)=0.\nKesimpulan: Akar-akarnya adalah 3 dan −5.'
  },
  {
    id: 'sim-mtk-l3-q20',
    text: 'Nilai maksimum fungsi y = −2x² + 4x + 1 adalah ....',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '5' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Fungsi membuka ke bawah.\nLangkah: x = 4/4 = 1, y = −2 + 4 + 1 = 3.\nKesimpulan: Nilai maksimum adalah 3.'
  },
  {
    id: 'sim-mtk-l3-q21',
    text: 'Jika akar-akar persamaan kuadrat adalah −2 dan 6, maka persamaan kuadratnya adalah ....',
    options: [
      { id: 'A', text: 'x² − 4x − 12 = 0' },
      { id: 'B', text: 'x² + 4x − 12 = 0' },
      { id: 'C', text: 'x² − 8x + 12 = 0' },
      { id: 'D', text: 'x² + 8x − 12 = 0' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Gunakan (x−r₁)(x−r₂).\nLangkah: (x+2)(x−6).\nKesimpulan: Persamaannya x² − 4x − 12 = 0.'
  },
  {
    id: 'sim-mtk-l3-q22',
    text: 'Jika grafik y = ax² + bx + c melalui titik (0, −2), maka nilai c adalah ....',
    options: [
      { id: 'A', text: '−2' },
      { id: 'B', text: '−1' },
      { id: 'C', text: '0' },
      { id: 'D', text: '2' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik potong sumbu-y adalah c.\nKesimpulan: Nilai c adalah −2.'
  },
  {
    id: 'sim-mtk-l3-q23',
    text: 'Jika f(x)=x²−9, maka nilai x saat f(x)=0 adalah ....',
    options: [
      { id: 'A', text: '3 dan −3' },
      { id: 'B', text: '9 dan −9' },
      { id: 'C', text: '3 saja' },
      { id: 'D', text: '−3 saja' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Setarakan dengan nol.\nLangkah: x²=9.\nKesimpulan: x = 3 dan −3.'
  },
  {
    id: 'sim-mtk-l3-q24',
    text: 'Bentuk puncak dari fungsi y = x² − 6x + 8 adalah ....',
    options: [
      { id: 'A', text: '(x−3)² − 1' },
      { id: 'B', text: '(x+3)² − 1' },
      { id: 'C', text: '(x−3)² + 1' },
      { id: 'D', text: '(x+3)² + 1' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Lengkapi kuadrat.\nLangkah: y=(x−3)²−1.\nKesimpulan: Bentuk puncaknya (x−3)²−1.'
  },
  {
    id: 'sim-mtk-l3-q25',
    text: 'Jumlah akar persamaan x² − 10x + 16 = 0 adalah ....',
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '8' },
      { id: 'C', text: '16' },
      { id: 'D', text: '6' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Jumlah akar = −b/a.\nKesimpulan: Jumlah akar adalah 10.'
  },
  {
    id: 'sim-mtk-l3-q26',
    text: 'Jika akar-akar persamaan kuadrat sama dan bernilai 4, maka diskriminannya adalah ....',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '4' },
      { id: 'C', text: '8' },
      { id: 'D', text: '16' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Akar kembar berarti diskriminan = 0.\nKesimpulan: Diskriminannya adalah 0.'
  },
  {
    id: 'sim-mtk-l3-q27',
    text: 'Persamaan kuadrat yang mempunyai akar kembar adalah ....',
    options: [
      { id: 'A', text: 'x² − 4x + 4 = 0' },
      { id: 'B', text: 'x² − 5x + 4 = 0' },
      { id: 'C', text: 'x² − x − 6 = 0' },
      { id: 'D', text: 'x² + 2x − 8 = 0' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Bentuk kuadrat sempurna.\nKesimpulan: Persamaan dengan akar kembar adalah x² − 4x + 4.'
  },
  {
    id: 'sim-mtk-l3-q28',
    text: 'Jika nilai minimum suatu fungsi kuadrat adalah −9 dan sumbu simetrinya x = 2, maka titik puncaknya adalah ....',
    options: [
      { id: 'A', text: '(2, −9)' },
      { id: 'B', text: '(−2, −9)' },
      { id: 'C', text: '(9, 2)' },
      { id: 'D', text: '(−9, 2)' }
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Titik puncak adalah (x_puncak, y_min).\nKesimpulan: Titik puncaknya (2, −9).'
  },
  {
    id: 'sim-mtk-l3-q29',
    text: 'Jika f(x)=x²+ax+9 memiliki akar kembar, maka nilai a adalah ....',
    options: [
      { id: 'A', text: '±3' },
      { id: 'B', text: '±6' },
      { id: 'C', text: '±9' },
      { id: 'D', text: '±12' }
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Diskriminan = 0.\nLangkah: a²−36=0.\nKesimpulan: a = ±6.'
  },
  {
    id: 'sim-mtk-l3-q30',
    text: 'Grafik fungsi kuadrat y = x² − 4x + 5 tidak memotong sumbu-x karena ....',
    options: [
      { id: 'A', text: 'Koefisien x² positif' },
      { id: 'B', text: 'Diskriminannya nol' },
      { id: 'C', text: 'Diskriminannya negatif' },
      { id: 'D', text: 'Nilai c positif' }
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Grafik tidak memotong sumbu-x jika D < 0.\nKesimpulan: Penyebabnya diskriminan negatif.'
  }
],

// simulasi ujian tka bahasa indonesia level 1

'sim-bi-l1': [
  {
    id: 'sim-bi-l1-q1',
    text: 'Bacalah teks berikut.\n\nSinta selalu menyiapkan perlengkapan sekolah pada malam hari. Ia memasukkan buku sesuai jadwal, menyiapkan seragam, dan mengecek tugas. Pagi harinya, Sinta berangkat tanpa terburu-buru.\n\nKebiasaan Sinta yang tepat diteladani adalah ....',
    options: [
      { id: 'A', text: 'Menunda menyiapkan perlengkapan sampai pagi' },
      { id: 'B', text: 'Menyiapkan perlengkapan sekolah sejak malam' },
      { id: 'C', text: 'Berangkat sekolah tanpa mengecek tugas' },
      { id: 'D', text: 'Membawa semua buku tanpa melihat jadwal' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menekankan Sinta menyiapkan perlengkapan pada malam hari.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q2',
    text: 'Bacalah teks berikut.\n\nDi perpustakaan, tersedia pojok sains yang berisi buku-buku eksperimen sederhana. Banyak siswa tertarik karena mereka bisa mencoba percobaan kecil setelah membaca petunjuk.\n\nApa manfaat pojok sains bagi siswa?',

    options: [
      { id: 'A', text: 'Siswa hanya membaca tanpa praktik' },
      { id: 'B', text: 'Siswa dapat mencoba eksperimen sederhana' },
      { id: 'C', text: 'Siswa dilarang meminjam buku' },
      { id: 'D', text: 'Siswa hanya belajar matematika' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebut siswa bisa mencoba percobaan kecil setelah membaca.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q3',
    text: 'Bacalah teks berikut.\n\nSaat hujan deras, warga di kampung Arga bergotong royong membersihkan selokan agar air tidak meluap. Mereka juga menyingkirkan sampah yang menyumbat aliran.\n\nKegiatan warga bertujuan untuk ....',
    options: [
      { id: 'A', text: 'Membuat hujan semakin deras' },
      { id: 'B', text: 'Mencegah banjir karena selokan tersumbat' },
      { id: 'C', text: 'Mengumpulkan air hujan untuk diminum' },
      { id: 'D', text: 'Menutup semua selokan agar aman' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Selokan dibersihkan agar air tidak meluap, artinya mencegah banjir.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q4',
    text: 'Kalimat yang menggunakan huruf kapital dengan tepat adalah ....',
    options: [
      { id: 'A', text: 'adik pergi ke bali saat liburan.' },
      { id: 'B', text: 'Ibu membeli buah di pasar minggu.' },
      { id: 'C', text: 'Kami tinggal di Kota Bandung.' },
      { id: 'D', text: 'ayah bekerja di kantor pos.' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Nama tempat “Kota Bandung” harus diawali huruf kapital.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q5',
    text: 'Tanda baca yang tepat untuk melengkapi kalimat berikut adalah ....\n\nAyo, kita berangkat sekarang__',
    options: [
      { id: 'A', text: '.' },
      { id: 'B', text: ',' },
      { id: 'C', text: '!' },
      { id: 'D', text: '?' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kalimat ajakan biasanya diakhiri tanda seru.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q6',
    text: 'Bacalah teks berikut.\n\nRiko mematikan lampu ketika tidak digunakan dan menutup keran air setelah mencuci tangan. Ia juga mengingatkan teman-temannya agar hemat listrik.\n\nSikap Riko menunjukkan ....',
    options: [
      { id: 'A', text: 'Pemborosan energi' },
      { id: 'B', text: 'Kepedulian terhadap penghematan' },
      { id: 'C', text: 'Keinginan untuk bermain' },
      { id: 'D', text: 'Kebiasaan menunda pekerjaan' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Riko mematikan lampu dan menghemat air, itu bentuk kepedulian penghematan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q7',
    text: 'Kata baku dari “aktifitas” adalah ....',
    options: [
      { id: 'A', text: 'aktifitas' },
      { id: 'B', text: 'aktivitas' },
      { id: 'C', text: 'aktipitas' },
      { id: 'D', text: 'aktif itas' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Bentuk baku yang benar adalah “aktivitas”.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q8',
    text: 'Kalimat yang paling efektif adalah ....',
    options: [
      { id: 'A', text: 'Para siswa-siswa sedang belajar di kelas.' },
      { id: 'B', text: 'Siswa sedang belajar di kelas.' },
      { id: 'C', text: 'Siswa-siswa para sedang belajar.' },
      { id: 'D', text: 'Sedang belajar siswa di kelas itu.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Para siswa-siswa” boros kata. Bentuk efektif: “Siswa sedang belajar di kelas.”\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q9',
    text: 'Bacalah teks berikut.\n\nKantin sekolah menyediakan tempat cuci tangan di dekat pintu masuk. Setelah itu, siswa diminta antre dengan tertib saat membeli makanan.\n\nInformasi yang tepat berdasarkan teks adalah ....',
    options: [
      { id: 'A', text: 'Siswa boleh tidak mencuci tangan' },
      { id: 'B', text: 'Tempat cuci tangan berada di dekat pintu masuk kantin' },
      { id: 'C', text: 'Siswa bebas menyerobot antrean' },
      { id: 'D', text: 'Kantin tidak menyediakan fasilitas kebersihan' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebutkan tempat cuci tangan di dekat pintu masuk.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q10',
    text: 'Kalimat yang tepat menggunakan tanda tanya adalah ....',
    options: [
      { id: 'A', text: 'Wah, indah sekali pemandangan ini!' },
      { id: 'B', text: 'Tolong tutup pintu itu.' },
      { id: 'C', text: 'Kapan kamu berangkat ke sekolah?' },
      { id: 'D', text: 'Jangan berisik di kelas.' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kalimat tanya harus diakhiri tanda tanya.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q11',
    text: 'Bacalah teks berikut.\n\nLina menulis daftar belanja sebelum pergi ke pasar. Ia memberi tanda pada barang yang paling dibutuhkan agar tidak lupa. Dengan cara itu, belanja Lina menjadi lebih cepat.\n\nMengapa Lina membuat daftar belanja?',
    options: [
      { id: 'A', text: 'Agar bisa berbelanja lebih lama' },
      { id: 'B', text: 'Agar tidak lupa barang yang dibutuhkan' },
      { id: 'C', text: 'Agar membeli barang yang tidak perlu' },
      { id: 'D', text: 'Agar bisa menawar semua barang' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebut daftar dibuat agar tidak lupa dan belanja lebih cepat.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q12',
    text: 'Manakah penulisan yang tepat untuk nama orang berikut?\n\n__ dwi putra',
    options: [
      { id: 'A', text: 'Dwi putra' },
      { id: 'B', text: 'dwi Putra' },
      { id: 'C', text: 'Dwi Putra' },
      { id: 'D', text: 'dwi putra' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Nama orang diawali huruf kapital di setiap unsur namanya.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q13',
    text: 'Kalimat perintah yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Apakah kamu sudah makan?' },
      { id: 'B', text: 'Tolong rapikan meja belajarmu sekarang.' },
      { id: 'C', text: 'Wah, kamu hebat sekali!' },
      { id: 'D', text: 'Kita pergi ke taman besok.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kalimat perintah biasanya berisi instruksi, misalnya “Tolong rapikan…”.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q14',
    text: 'Bacalah teks berikut.\n\nPada hari Jumat, kelas 7B melakukan kerja bakti. Mereka menyapu ruang kelas, mengelap jendela, dan merapikan kursi. Setelah selesai, kelas menjadi bersih.\n\nKegiatan utama dalam teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Kerja bakti membersihkan kelas' },
      { id: 'B', text: 'Belajar matematika di kelas' },
      { id: 'C', text: 'Bermain di lapangan sekolah' },
      { id: 'D', text: 'Menghias kelas untuk lomba' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Teks menceritakan kerja bakti (menyapu, mengelap, merapikan).\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l1-q15',
    text: 'Kalimat berikut yang menggunakan tanda koma (,) dengan tepat adalah ....',
    options: [
      { id: 'A', text: 'Saya membeli pensil penghapus dan buku.' },
      { id: 'B', text: 'Saya membeli pensil, penghapus, dan buku.' },
      { id: 'C', text: 'Saya, membeli pensil penghapus dan buku.' },
      { id: 'D', text: 'Saya membeli, pensil penghapus, dan buku.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Koma dipakai untuk memisahkan unsur perincian.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q16',
    text: 'Bacalah teks berikut.\n\nBeni mengembalikan buku yang ia pinjam tepat waktu. Ia juga menaruh buku pada rak yang sesuai agar mudah ditemukan.\n\nSikap Beni menunjukkan ....',
    options: [
      { id: 'A', text: 'Tidak peduli aturan' },
      { id: 'B', text: 'Disiplin dan bertanggung jawab' },
      { id: 'C', text: 'Suka merusak buku' },
      { id: 'D', text: 'Malas membaca' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Mengembalikan tepat waktu dan menaruh sesuai rak adalah disiplin dan tanggung jawab.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q17',
    text: 'Kata baku dari “resiko” adalah ....',
    options: [
      { id: 'A', text: 'resiko' },
      { id: 'B', text: 'risiko' },
      { id: 'C', text: 'resikoo' },
      { id: 'D', text: 'rresiko' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Bentuk baku yang benar adalah “risiko”.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q18',
    text: 'Kalimat yang tepat menggunakan huruf kapital adalah ....',
    options: [
      { id: 'A', text: 'Kami bertemu pak budi di sekolah.' },
      { id: 'B', text: 'Kami bertemu Pak Budi di sekolah.' },
      { id: 'C', text: 'kami Bertemu Pak budi di sekolah.' },
      { id: 'D', text: 'kami bertemu pak Budi di sekolah.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Sapaan “Pak” dan nama “Budi” ditulis dengan huruf kapital.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q19',
    text: 'Bacalah teks berikut.\n\nSetelah olahraga, siswa diminta minum air putih secukupnya dan beristirahat. Guru mengingatkan agar siswa tidak langsung minum es.\n\nAnjuran guru adalah ....',
    options: [
      { id: 'A', text: 'Minum es sebanyak-banyaknya' },
      { id: 'B', text: 'Tidak perlu minum setelah olahraga' },
      { id: 'C', text: 'Minum air putih dan tidak langsung minum es' },
      { id: 'D', text: 'Langsung tidur tanpa beristirahat' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Teks menyebut minum air putih dan tidak langsung minum es.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q20',
    text: 'Kalimat yang paling tepat adalah ....',
    options: [
      { id: 'A', text: 'Saya sangat suka sekali membaca.' },
      { id: 'B', text: 'Saya suka membaca.' },
      { id: 'C', text: 'Saya suka sekali sangat membaca.' },
      { id: 'D', text: 'Membaca saya suka sekali sangat.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “sangat” dan “sekali” bersama-sama boros. Kalimat efektif: “Saya suka membaca.”\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q21',
    text: 'Bacalah teks berikut.\n\nPada lomba kebersihan kelas, kelas 8A menata tanaman di sudut kelas dan membuat jadwal piket yang jelas. Mereka juga menyiapkan tempat sampah terpisah untuk sampah kering dan basah.\n\nYang dilakukan kelas 8A berkaitan dengan ....',
    options: [
      { id: 'A', text: 'Kedisiplinan dan kebersihan' },
      { id: 'B', text: 'Permainan olahraga' },
      { id: 'C', text: 'Perjalanan wisata' },
      { id: 'D', text: 'Lomba menyanyi' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Menata tanaman, jadwal piket, dan memilah sampah adalah kebersihan dan disiplin.\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l1-q22',
    text: 'Tanda baca yang tepat untuk melengkapi kalimat berikut adalah ....\n\nIbu membeli sayur, buah, dan roti__',
    options: [
      { id: 'A', text: '?' },
      { id: 'B', text: '!' },
      { id: 'C', text: '.' },
      { id: 'D', text: ':' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kalimat pernyataan diakhiri tanda titik.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q23',
    text: 'Bacalah teks berikut.\n\nRara menyimpan ponselnya saat belajar agar tidak terganggu notifikasi. Ia membuka ponsel setelah tugas selesai.\n\nAlasan Rara menyimpan ponsel saat belajar adalah ....',
    options: [
      { id: 'A', text: 'Agar mudah bermain saat belajar' },
      { id: 'B', text: 'Agar tidak terganggu dan bisa fokus' },
      { id: 'C', text: 'Agar baterai cepat habis' },
      { id: 'D', text: 'Agar lupa mengerjakan tugas' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebut ponsel disimpan agar tidak terganggu notifikasi.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q24',
    text: 'Kalimat yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Dia pergi kepasar kemarin.' },
      { id: 'B', text: 'Dia pergi ke pasar kemarin.' },
      { id: 'C', text: 'Dia pergi kepa sar kemarin.' },
      { id: 'D', text: 'Dia pergi ke-pasar kemarin.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “ke” sebagai kata depan ditulis terpisah dari kata yang mengikutinya.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q25',
    text: 'Bacalah teks berikut.\n\nDi kelas, guru meminta siswa menuliskan pengalaman liburan dalam 5–6 kalimat. Siswa boleh menambahkan satu kalimat penutup berisi pesan.\n\nTugas menulis tersebut termasuk ....',
    options: [
      { id: 'A', text: 'Menulis narasi sederhana' },
      { id: 'B', text: 'Menulis laporan penelitian' },
      { id: 'C', text: 'Menulis naskah drama panjang' },
      { id: 'D', text: 'Menulis puisi berima wajib' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Menuliskan pengalaman liburan dalam beberapa kalimat adalah narasi sederhana.\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l1-q26',
    text: 'Kalimat yang tepat menggunakan tanda seru (!) adalah ....',
    options: [
      { id: 'A', text: 'Apakah kamu sudah makan?' },
      { id: 'B', text: 'Wah, luar biasa sekali!' },
      { id: 'C', text: 'Saya belajar setiap malam.' },
      { id: 'D', text: 'Kapan kita bertemu lagi?' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Tanda seru digunakan untuk seruan/emosi kuat.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q27',
    text: 'Bacalah teks berikut.\n\nFajar membawa bekal dari rumah. Ia memilih buah dan roti agar lebih sehat. Temannya yang lupa membawa bekal akhirnya membeli makanan cepat saji.\n\nPerbedaan kebiasaan Fajar dan temannya adalah ....',
    options: [
      { id: 'A', text: 'Fajar lupa membawa bekal, temannya membawa bekal' },
      { id: 'B', text: 'Fajar membawa bekal sehat, temannya membeli makanan cepat saji' },
      { id: 'C', text: 'Fajar membeli makanan cepat saji, temannya membawa buah' },
      { id: 'D', text: 'Keduanya selalu membawa bekal yang sama' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyatakan Fajar membawa bekal sehat, temannya membeli makanan cepat saji.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l1-q28',
    text: 'Penulisan yang tepat adalah ....',
    options: [
      { id: 'A', text: 'di Rumah' },
      { id: 'B', text: 'Di rumah' },
      { id: 'C', text: 'di rumah' },
      { id: 'D', text: 'dirumah' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “di” sebagai kata depan ditulis terpisah dan tidak memakai huruf kapital di tengah kalimat.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q29',
    text: 'Bacalah teks berikut.\n\nKetika presentasi, Dina berbicara dengan suara jelas dan menatap audiens. Ia juga menyiapkan catatan singkat agar tidak lupa poin penting.\n\nYang dilakukan Dina agar presentasinya berjalan baik adalah ....',
    options: [
      { id: 'A', text: 'Berbicara pelan dan menunduk terus' },
      { id: 'B', text: 'Tidak menyiapkan catatan apa pun' },
      { id: 'C', text: 'Berbicara jelas dan menyiapkan catatan singkat' },
      { id: 'D', text: 'Menghindari tatap muka dengan audiens' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Dina berbicara jelas, menatap audiens, dan menyiapkan catatan.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l1-q30',
    text: 'Kalimat penutup yang paling tepat untuk paragraf pendek tentang pentingnya membaca adalah ....',
    options: [
      { id: 'A', text: 'Membaca itu membosankan dan sebaiknya dihindari.' },
      { id: 'B', text: 'Dengan membaca, kita dapat menambah pengetahuan setiap hari.' },
      { id: 'C', text: 'Membaca hanya dilakukan saat ujian saja.' },
      { id: 'D', text: 'Membaca tidak bermanfaat bagi siapa pun.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Penutup yang baik menegaskan manfaat membaca, yaitu menambah pengetahuan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
],

// simulasi tka bahasa indonesia level 2

'sim-bi-l2': [
  {
    id: 'sim-bi-l2-q1',
    text: 'Bacalah teks berikut.\n\nPerpustakaan sekolah kini menyediakan layanan peminjaman digital. Siswa dapat mengakses buku melalui gawai tanpa harus datang langsung. Layanan ini membuat minat baca meningkat.\n\nIde pokok paragraf tersebut adalah ....',
    options: [
      { id: 'A', text: 'Siswa jarang datang ke perpustakaan' },
      { id: 'B', text: 'Gawai digunakan untuk bermain gim' },
      { id: 'C', text: 'Layanan peminjaman digital meningkatkan minat baca' },
      { id: 'D', text: 'Perpustakaan hanya menyediakan buku cetak' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kalimat utama membahas layanan digital dan dampaknya pada minat baca.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q2',
    text: 'Kalimat yang paling efektif adalah ....',
    options: [
      { id: 'A', text: 'Para siswa-siswa diwajibkan untuk harus belajar.' },
      { id: 'B', text: 'Siswa diwajibkan belajar.' },
      { id: 'C', text: 'Siswa-siswa diwajibkan untuk belajar.' },
      { id: 'D', text: 'Para siswa diwajibkan untuk harus belajar.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kalimat efektif menghindari pengulangan dan kata mubazir.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q3',
    text: 'Bacalah teks berikut.\n\nHujan deras menyebabkan jalan licin. Akibatnya, beberapa pengendara memilih menepi untuk menunggu hujan reda.\n\nHubungan antar kalimat dalam paragraf tersebut adalah ....',
    options: [
      { id: 'A', text: 'Perbandingan' },
      { id: 'B', text: 'Sebab–akibat' },
      { id: 'C', text: 'Penegasan ulang' },
      { id: 'D', text: 'Pertentangan' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Hujan deras (sebab) menyebabkan pengendara menepi (akibat).\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q4',
    text: 'Kata penghubung yang tepat untuk melengkapi kalimat berikut adalah ....\n\nAni rajin belajar, ___ ia berhasil meraih juara kelas.',
    options: [
      { id: 'A', text: 'namun' },
      { id: 'B', text: 'karena' },
      { id: 'C', text: 'sehingga' },
      { id: 'D', text: 'walaupun' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Kata “sehingga” menyatakan akibat dari sebab sebelumnya.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q5',
    text: 'Bacalah teks berikut.\n\nSiswa diminta membawa botol minum sendiri ke sekolah. Hal ini bertujuan mengurangi penggunaan plastik sekali pakai.\n\nSimpulan yang tepat dari teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Sekolah melarang siswa minum di kelas' },
      { id: 'B', text: 'Botol minum hanya digunakan saat olahraga' },
      { id: 'C', text: 'Membawa botol minum membantu mengurangi sampah plastik' },
      { id: 'D', text: 'Plastik sekali pakai lebih praktis digunakan' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Tujuan membawa botol minum adalah mengurangi plastik.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q6',
    text: 'Kalimat yang mengandung kesalahan penggunaan kata adalah ....',
    options: [
      { id: 'A', text: 'Ibu pergi ke pasar pagi ini.' },
      { id: 'B', text: 'Dia sangat gemar sekali membaca.' },
      { id: 'C', text: 'Kami belajar bersama di perpustakaan.' },
      { id: 'D', text: 'Siswa mengerjakan tugas dengan serius.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kata “sangat” dan “sekali” memiliki makna sama sehingga mubazir.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q7',
    text: 'Bacalah teks berikut.\n\nRapat OSIS ditunda karena sebagian pengurus belum hadir. Rapat akan dilaksanakan kembali setelah semua anggota lengkap.\n\nMakna kata “ditunda” dalam teks adalah ....',
    options: [
      { id: 'A', text: 'Dipercepat' },
      { id: 'B', text: 'Dibatalkan' },
      { id: 'C', text: 'Dilaksanakan lebih awal' },
      { id: 'D', text: 'Diundur waktunya' },
    ],
    correctOptionId: 'D',
    discussion: 'Penjelasan singkat: “Ditunda” berarti diundur ke waktu lain.\nKesimpulan: Jawaban yang benar adalah D.'
  },
  {
    id: 'sim-bi-l2-q8',
    text: 'Kalimat yang tepat menggunakan konjungsi pertentangan adalah ....',
    options: [
      { id: 'A', text: 'Dia belajar dengan giat sehingga lulus ujian.' },
      { id: 'B', text: 'Ia tetap berangkat sekolah meskipun hujan deras.' },
      { id: 'C', text: 'Kami datang lebih awal agar mendapat tempat.' },
      { id: 'D', text: 'Ani membaca buku lalu menulis rangkuman.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Meskipun” menunjukkan pertentangan antara dua keadaan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q9',
    text: 'Bacalah teks berikut.\n\nKegiatan menanam pohon dilakukan oleh siswa dan guru. Selain membuat lingkungan hijau, kegiatan ini juga melatih kerja sama.\n\nManfaat kegiatan tersebut adalah ....',
    options: [
      { id: 'A', text: 'Lingkungan menjadi kotor' },
      { id: 'B', text: 'Siswa tidak perlu belajar di kelas' },
      { id: 'C', text: 'Lingkungan hijau dan kerja sama terlatih' },
      { id: 'D', text: 'Pohon cepat ditebang' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Teks menyebut dua manfaat: lingkungan hijau dan kerja sama.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q10',
    text: 'Kalimat penutup yang tepat untuk paragraf tentang pentingnya disiplin adalah ....',
    options: [
      { id: 'A', text: 'Disiplin hanya diperlukan saat ujian.' },
      { id: 'B', text: 'Oleh karena itu, disiplin perlu diterapkan dalam kehidupan sehari-hari.' },
      { id: 'C', text: 'Disiplin membuat orang merasa tertekan.' },
      { id: 'D', text: 'Disiplin tidak berpengaruh apa pun.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Penutup yang baik menegaskan gagasan utama secara logis.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q11',
    text: 'Kalimat berikut yang tidak efektif adalah ....',
    options: [
      { id: 'A', text: 'Kami berdiskusi untuk menyelesaikan masalah.' },
      { id: 'B', text: 'Para siswa-siswa mengikuti kegiatan lomba.' },
      { id: 'C', text: 'Guru menjelaskan materi dengan jelas.' },
      { id: 'D', text: 'Ia membaca buku di perpustakaan.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Para siswa-siswa” merupakan pengulangan yang tidak efektif.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q12',
    text: 'Bacalah teks berikut.\n\nSejak diterapkan jadwal piket, kelas menjadi lebih bersih. Siswa juga belajar bertanggung jawab terhadap tugasnya.\n\nPesan yang ingin disampaikan penulis adalah ....',
    options: [
      { id: 'A', text: 'Piket membuat siswa lelah' },
      { id: 'B', text: 'Kelas tidak perlu dibersihkan' },
      { id: 'C', text: 'Jadwal piket menumbuhkan kebersihan dan tanggung jawab' },
      { id: 'D', text: 'Piket hanya tugas guru' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Pesan teks menekankan kebersihan dan tanggung jawab.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q13',
    text: 'Kata hubung yang tepat untuk melengkapi kalimat berikut adalah ....\n\nKami menunggu di aula ___ hujan reda.',
    options: [
      { id: 'A', text: 'agar' },
      { id: 'B', text: 'karena' },
      { id: 'C', text: 'ketika' },
      { id: 'D', text: 'sebelum' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “Ketika” menyatakan hubungan waktu yang tepat.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q14',
    text: 'Kalimat yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Dia pergi kepasar untuk berbelanja.' },
      { id: 'B', text: 'Dia pergi ke pasar untuk berbelanja.' },
      { id: 'C', text: 'Dia pergi kepa sar untuk berbelanja.' },
      { id: 'D', text: 'Dia pergi ke-pasar untuk berbelanja.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kata depan “ke” ditulis terpisah dari kata yang mengikutinya.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q15',
    text: 'Bacalah teks berikut.\n\nBanyak siswa memilih bersepeda ke sekolah. Selain menyehatkan, cara ini juga mengurangi polusi udara.\n\nKesimpulan yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Bersepeda membuat siswa terlambat' },
      { id: 'B', text: 'Bersepeda bermanfaat bagi kesehatan dan lingkungan' },
      { id: 'C', text: 'Bersepeda hanya cocok saat libur' },
      { id: 'D', text: 'Polusi udara tidak berbahaya' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebut dua manfaat utama bersepeda.\nKesimpulan: Jawaban yang benar adalah B.'
  },
// LANJUTAN sim-bi-l2 — BLOK 2 (q16–q30)

  {
    id: 'sim-bi-l2-q16',
    text: 'Bacalah teks berikut.\n\nSekolah mengadakan lomba kebersihan antarkelas. Setiap kelas menata ruangan, menyapu, dan merapikan meja kursi. Kelas terbersih mendapat penghargaan.\n\nTujuan kegiatan pada teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Membuat siswa malas belajar' },
      { id: 'B', text: 'Menentukan kelas yang paling ramai' },
      { id: 'C', text: 'Mendorong siswa menjaga kebersihan kelas' },
      { id: 'D', text: 'Mengurangi jumlah siswa di sekolah' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Lomba kebersihan bertujuan membiasakan kelas rapi dan bersih.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q17',
    text: 'Kalimat yang paling efektif adalah ....',
    options: [
      { id: 'A', text: 'Kami semua bersama-sama bekerja bakti membersihkan lingkungan.' },
      { id: 'B', text: 'Kami bekerja bakti membersihkan lingkungan.' },
      { id: 'C', text: 'Kami semua bekerja bakti bersama-sama untuk membersihkan lingkungan.' },
      { id: 'D', text: 'Kami melakukan kerja bakti yang bertujuan untuk membersihkan lingkungan.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kalimat efektif menghindari kata mubazir seperti “semua” dan “bersama-sama”.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q18',
    text: 'Bacalah teks berikut.\n\nDina tidak mengerjakan tugas karena sakit. Ia meminta temannya menjelaskan materi yang tertinggal.\n\nKata “karena” pada kalimat pertama menyatakan ....',
    options: [
      { id: 'A', text: 'Akibat' },
      { id: 'B', text: 'Tujuan' },
      { id: 'C', text: 'Sebab' },
      { id: 'D', text: 'Syarat' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “Karena” memperkenalkan alasan atau sebab.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q19',
    text: 'Kata penghubung yang tepat untuk melengkapi kalimat berikut adalah ....\n\nKita harus membaca petunjuk dengan teliti ___ tidak terjadi kesalahan.',
    options: [
      { id: 'A', text: 'agar' },
      { id: 'B', text: 'tetapi' },
      { id: 'C', text: 'sehingga' },
      { id: 'D', text: 'walaupun' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: “Agar” menyatakan tujuan (supaya tidak terjadi kesalahan).\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l2-q20',
    text: 'Bacalah teks berikut.\n\nSetelah jam pelajaran selesai, siswa mengikuti kegiatan ekstrakurikuler. Kegiatan ini membantu siswa mengembangkan bakat dan melatih disiplin.\n\nSimpulan yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Ekstrakurikuler hanya membuang waktu siswa' },
      { id: 'B', text: 'Ekstrakurikuler bermanfaat untuk bakat dan disiplin' },
      { id: 'C', text: 'Ekstrakurikuler wajib diikuti guru' },
      { id: 'D', text: 'Ekstrakurikuler dilakukan saat ujian' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebut manfaat mengembangkan bakat dan melatih disiplin.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q21',
    text: 'Kalimat yang mengandung pemborosan kata adalah ....',
    options: [
      { id: 'A', text: 'Ia segera pulang karena hari sudah malam.' },
      { id: 'B', text: 'Mereka sangat senang sekali mendapatkan hadiah.' },
      { id: 'C', text: 'Kami berlatih untuk lomba besok.' },
      { id: 'D', text: 'Guru menyampaikan pengumuman di kelas.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Sangat” dan “sekali” sama-sama penegas, sehingga mubazir jika dipakai bersama.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q22',
    text: 'Bacalah teks berikut.\n\nSampah organik dapat diolah menjadi kompos. Kompos bermanfaat untuk menyuburkan tanaman.\n\nHubungan antar kalimat pada teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Sebab–akibat' },
      { id: 'B', text: 'Pertentangan' },
      { id: 'C', text: 'Perbandingan' },
      { id: 'D', text: 'Urutan waktu' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Pengolahan sampah organik (sebab) menghasilkan kompos yang bermanfaat (akibat/manfaat).\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l2-q23',
    text: 'Kalimat yang tepat menggunakan konjungsi “namun” adalah ....',
    options: [
      { id: 'A', text: 'Kami belajar keras, namun hasilnya memuaskan.' },
      { id: 'B', text: 'Kami belajar keras, namun agar hasilnya memuaskan.' },
      { id: 'C', text: 'Kami belajar keras, namun sehingga hasilnya memuaskan.' },
      { id: 'D', text: 'Kami belajar keras, namun karena hasilnya memuaskan.' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: “Namun” menyatakan pertentangan/kontras antar gagasan dan dipakai tepat pada opsi A.\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l2-q24',
    text: 'Bacalah teks berikut.\n\nPada hari Jumat, siswa mengikuti kegiatan senam pagi. Setelah itu, mereka membersihkan kelas bersama.\n\nInformasi tersurat pada teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Siswa tidak suka senam pagi' },
      { id: 'B', text: 'Kegiatan dilakukan pada hari Jumat' },
      { id: 'C', text: 'Siswa membersihkan sekolah setiap hari' },
      { id: 'D', text: 'Kegiatan senam dilakukan malam hari' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Teks menyebutkan secara langsung kegiatan dilakukan pada hari Jumat.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q25',
    text: 'Kalimat penutup yang tepat untuk paragraf ajakan menjaga kebersihan adalah ....',
    options: [
      { id: 'A', text: 'Kebersihan bukan tanggung jawab kita.' },
      { id: 'B', text: 'Mari kita menjaga kebersihan agar lingkungan tetap sehat dan nyaman.' },
      { id: 'C', text: 'Kebersihan membuat pekerjaan bertambah banyak.' },
      { id: 'D', text: 'Lingkungan kotor itu hal biasa.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Penutup ajakan harus bersifat persuasif dan menegaskan manfaat.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q26',
    text: 'Bacalah teks berikut.\n\nRaka membaca artikel tentang manfaat tidur cukup. Ia kemudian mengatur jadwal agar tidak tidur larut.\n\nTindakan Raka menunjukkan ....',
    options: [
      { id: 'A', text: 'Mengabaikan informasi' },
      { id: 'B', text: 'Menolak saran kesehatan' },
      { id: 'C', text: 'Menerapkan informasi yang dibaca' },
      { id: 'D', text: 'Tidak peduli kebiasaan tidur' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Raka membaca lalu mengubah jadwal tidur, berarti menerapkan informasi.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l2-q27',
    text: 'Perbaikan kalimat berikut agar efektif adalah ....\n\n“Para siswa-siswa sedang pada mengerjakan tugas di kelas.”',
    options: [
      { id: 'A', text: 'Para siswa-siswa sedang mengerjakan tugas di kelas.' },
      { id: 'B', text: 'Siswa sedang mengerjakan tugas di kelas.' },
      { id: 'C', text: 'Para siswa sedang pada mengerjakan tugas di kelas.' },
      { id: 'D', text: 'Siswa-siswa sedang pada mengerjakan tugas di kelas.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Hilangkan pengulangan “para siswa-siswa” dan kata tidak baku “pada”.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q28',
    text: 'Bacalah teks berikut.\n\nLina berlatih presentasi di rumah. Ia menyiapkan catatan kecil agar tidak lupa poin penting.\n\nTujuan Lina menyiapkan catatan kecil adalah ....',
    options: [
      { id: 'A', text: 'Agar presentasi lebih singkat tanpa isi' },
      { id: 'B', text: 'Agar tidak lupa poin penting saat presentasi' },
      { id: 'C', text: 'Agar tidak perlu berlatih' },
      { id: 'D', text: 'Agar bisa menyontek teman' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Catatan kecil disiapkan untuk membantu mengingat poin penting.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q29',
    text: 'Kata yang tepat untuk melengkapi kalimat berikut adalah ....\n\nKita harus bersikap jujur, ___ dalam keadaan sulit.',
    options: [
      { id: 'A', text: 'jika' },
      { id: 'B', text: 'bahkan' },
      { id: 'C', text: 'karena' },
      { id: 'D', text: 'sehingga' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Bahkan” menegaskan keadaan yang lebih berat (dalam keadaan sulit).\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l2-q30',
    text: 'Bacalah teks berikut.\n\nSekolah menerapkan aturan membawa bekal dari rumah. Selain lebih sehat, kebiasaan ini juga mengurangi jajan sembarangan.\n\nSimpulan yang tepat adalah ....',
    options: [
      { id: 'A', text: 'Membawa bekal membuat siswa malas makan' },
      { id: 'B', text: 'Aturan bekal membuat siswa sering jajan sembarangan' },
      { id: 'C', text: 'Membawa bekal bermanfaat bagi kesehatan dan kebiasaan makan' },
      { id: 'D', text: 'Membawa bekal hanya untuk siswa kelas tertentu' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Teks menyebut bekal lebih sehat dan mengurangi jajan sembarangan.\nKesimpulan: Jawaban yang benar adalah C.'
  },
],

// simulasi tka bahasa indonesia level 3

'sim-bi-l3': [
  {
    id: 'sim-bi-l3-q1',
    text: 'Bacalah teks berikut.\n\nMeskipun hujan turun deras sejak pagi, warga tetap mengikuti kerja bakti membersihkan saluran air. Mereka menyadari bahwa banjir sering terjadi akibat saluran tersumbat.\n\nSikap warga pada teks tersebut adalah ....',
    options: [
      { id: 'A', text: 'Acuh terhadap lingkungan' },
      { id: 'B', text: 'Peduli dan bertanggung jawab' },
      { id: 'C', text: 'Terpaksa mengikuti aturan' },
      { id: 'D', text: 'Menghindari pekerjaan berat' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Warga tetap kerja bakti walau hujan karena sadar dampaknya.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q2',
    text: 'Makna tersirat kalimat berikut adalah ....\n\n“Ruang kelas itu kembali sunyi setelah pengumuman hasil ujian dibacakan.”',
    options: [
      { id: 'A', text: 'Siswa merasa sangat gembira' },
      { id: 'B', text: 'Siswa terkejut dan tegang' },
      { id: 'C', text: 'Kelas sedang kosong' },
      { id: 'D', text: 'Pengumuman dibacakan dengan keras' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Sunyi” mengisyaratkan suasana tegang setelah hasil diumumkan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q3',
    text: 'Kalimat yang paling efektif adalah ....',
    options: [
      { id: 'A', text: 'Para siswa-siswa diwajibkan untuk harus hadir tepat waktu.' },
      { id: 'B', text: 'Para siswa diwajibkan hadir tepat waktu.' },
      { id: 'C', text: 'Siswa-siswa diwajibkan untuk hadir tepat waktu.' },
      { id: 'D', text: 'Para siswa harus diwajibkan hadir tepat waktu.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Opsi B menghindari pengulangan dan kata mubazir.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q4',
    text: 'Tujuan penulis dalam teks berikut adalah ....\n\nMembaca buku setiap hari dapat memperluas wawasan dan melatih daya pikir kritis. Kebiasaan ini juga membantu meningkatkan kemampuan berbahasa.\n',
    options: [
      { id: 'A', text: 'Menghibur pembaca' },
      { id: 'B', text: 'Mengkritik kebiasaan membaca' },
      { id: 'C', text: 'Menyampaikan informasi dan ajakan' },
      { id: 'D', text: 'Menceritakan pengalaman pribadi' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Teks memaparkan manfaat membaca sekaligus mengajak.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q5',
    text: 'Hubungan antar kalimat dalam paragraf berikut adalah ....\n\nUdara kota semakin tercemar. Oleh karena itu, penggunaan kendaraan umum perlu ditingkatkan.',
    options: [
      { id: 'A', text: 'Pertentangan' },
      { id: 'B', text: 'Perbandingan' },
      { id: 'C', text: 'Sebab–akibat' },
      { id: 'D', text: 'Penjelasan rinci' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Pencemaran (sebab) mendorong solusi penggunaan kendaraan umum (akibat).\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q6',
    text: 'Kalimat yang tepat menggunakan konjungsi sebab adalah ....',
    options: [
      { id: 'A', text: 'Ia belajar giat sehingga lulus ujian.' },
      { id: 'B', text: 'Ia tidak masuk sekolah karena sakit.' },
      { id: 'C', text: 'Ia tetap datang meskipun hujan.' },
      { id: 'D', text: 'Ia belajar agar mendapat nilai baik.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Karena” menyatakan sebab atau alasan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q7',
    text: 'Simpulan yang tepat dari teks berikut adalah ....\n\nBerolahraga secara teratur dapat meningkatkan daya tahan tubuh. Selain itu, olahraga juga membantu mengurangi stres.',
    options: [
      { id: 'A', text: 'Olahraga membuat tubuh cepat lelah' },
      { id: 'B', text: 'Olahraga hanya bermanfaat bagi atlet' },
      { id: 'C', text: 'Olahraga bermanfaat bagi kesehatan fisik dan mental' },
      { id: 'D', text: 'Olahraga tidak perlu dilakukan setiap hari' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Teks menyebut manfaat fisik dan mental.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q8',
    text: 'Kalimat berikut yang mengandung makna kiasan adalah ....',
    options: [
      { id: 'A', text: 'Ia berjalan menuju rumah.' },
      { id: 'B', text: 'Suasana kelas menjadi panas.' },
      { id: 'C', text: 'Buku itu sangat tebal.' },
      { id: 'D', text: 'Guru masuk ke ruang kelas.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: “Panas” bermakna suasana tegang, bukan suhu.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q9',
    text: 'Informasi tersirat dari teks berikut adalah ....\n\nAni selalu datang lebih awal ke sekolah dan menyiapkan buku pelajaran sebelum kelas dimulai.',
    options: [
      { id: 'A', text: 'Ani sering terlambat' },
      { id: 'B', text: 'Ani siswa yang rajin dan disiplin' },
      { id: 'C', text: 'Ani tidak menyukai pelajaran' },
      { id: 'D', text: 'Ani dimarahi guru' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kebiasaan datang awal dan siap belajar menunjukkan disiplin.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q10',
    text: 'Kalimat penutup yang tepat untuk paragraf persuasif tentang kebersihan adalah ....',
    options: [
      { id: 'A', text: 'Kebersihan tidak perlu diperhatikan.' },
      { id: 'B', text: 'Mari kita mulai menjaga kebersihan dari lingkungan sekitar.' },
      { id: 'C', text: 'Lingkungan kotor adalah hal biasa.' },
      { id: 'D', text: 'Kebersihan hanya tanggung jawab petugas.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Penutup persuasif harus berupa ajakan positif.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q11',
    text: 'Kata yang tepat untuk melengkapi kalimat berikut adalah ....\n\nIa tetap tenang ___ situasi semakin sulit.',
    options: [
      { id: 'A', text: 'karena' },
      { id: 'B', text: 'sehingga' },
      { id: 'C', text: 'meskipun' },
      { id: 'D', text: 'agar' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “Meskipun” menyatakan pertentangan keadaan.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q12',
    text: 'Kalimat yang menunjukkan fakta adalah ....',
    options: [
      { id: 'A', text: 'Menurut saya, film itu sangat menarik.' },
      { id: 'B', text: 'Cuaca hari ini terasa sangat menyenangkan.' },
      { id: 'C', text: 'Air mendidih pada suhu 100°C.' },
      { id: 'D', text: 'Buku itu paling bagus.' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Fakta bersifat objektif dan dapat dibuktikan.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q13',
    text: 'Tujuan penggunaan data pada teks laporan adalah ....',
    options: [
      { id: 'A', text: 'Menghibur pembaca' },
      { id: 'B', text: 'Menguatkan keakuratan informasi' },
      { id: 'C', text: 'Menyembunyikan fakta' },
      { id: 'D', text: 'Memperindah bahasa' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Data digunakan untuk mendukung kebenaran informasi.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q14',
    text: 'Kalimat yang tepat sebagai simpulan adalah ....',
    options: [
      { id: 'A', text: 'Selain itu, masih banyak hal lain.' },
      { id: 'B', text: 'Oleh karena itu, kebiasaan tersebut perlu dipertahankan.' },
      { id: 'C', text: 'Misalnya, kegiatan belajar.' },
      { id: 'D', text: 'Namun, pendapat tersebut berbeda.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Simpulan biasanya diawali penanda seperti “oleh karena itu”.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q15',
    text: 'Kalimat yang tidak padu dalam paragraf tentang lingkungan adalah ....',
    options: [
      { id: 'A', text: 'Sampah plastik sulit terurai.' },
      { id: 'B', text: 'Pengelolaan sampah perlu ditingkatkan.' },
      { id: 'C', text: 'Harga buku tulis semakin mahal.' },
      { id: 'D', text: 'Masyarakat harus peduli lingkungan.' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Opsi C tidak berkaitan dengan topik lingkungan.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q16',
    text: 'Makna tersirat dari kalimat berikut adalah ....\n\n“Wajahnya tampak muram ketika hasil lomba diumumkan.”',
    options: [
      { id: 'A', text: 'Ia merasa sangat bangga' },
      { id: 'B', text: 'Ia kecewa dengan hasil lomba' },
      { id: 'C', text: 'Ia tidak mengikuti lomba' },
      { id: 'D', text: 'Ia sedang sakit' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kata “muram” menunjukkan perasaan kecewa.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q17',
    text: 'Kalimat yang paling tepat sebagai pendapat adalah ....',
    options: [
      { id: 'A', text: 'Air mendidih pada suhu 100°C.' },
      { id: 'B', text: 'Gunung Merapi terletak di Jawa.' },
      { id: 'C', text: 'Menurut saya, belajar daring perlu dievaluasi.' },
      { id: 'D', text: 'Matahari terbit dari timur.' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Pendapat ditandai sudut pandang pribadi.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q18',
    text: 'Tujuan penggunaan kalimat retoris dalam teks persuasi adalah ....',
    options: [
      { id: 'A', text: 'Menghibur pembaca' },
      { id: 'B', text: 'Mengajak pembaca berpikir dan setuju' },
      { id: 'C', text: 'Menyampaikan data statistik' },
      { id: 'D', text: 'Menjelaskan prosedur' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Pertanyaan retoris mendorong persetujuan pembaca.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q19',
    text: 'Kalimat berikut yang mengandung hubungan sebab-akibat adalah ....',
    options: [
      { id: 'A', text: 'Ia membaca buku dan menulis ringkasan.' },
      { id: 'B', text: 'Ia tidak belajar sehingga nilainya rendah.' },
      { id: 'C', text: 'Ia belajar sambil mendengarkan musik.' },
      { id: 'D', text: 'Ia datang lebih awal daripada temannya.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kata “sehingga” menandai akibat.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q20',
    text: 'Kalimat yang menggunakan kata baku adalah ....',
    options: [
      { id: 'A', text: 'Aktifitas belajar sangat penting.' },
      { id: 'B', text: 'Resiko banjir harus diwaspadai.' },
      { id: 'C', text: 'Kualitas pendidikan perlu ditingkatkan.' },
      { id: 'D', text: 'Ijin sekolah diberikan hari ini.' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “Kualitas” adalah bentuk baku.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q21',
    text: 'Kalimat yang paling tepat sebagai simpulan teks eksposisi adalah ....',
    options: [
      { id: 'A', text: 'Misalnya, kegiatan belajar.' },
      { id: 'B', text: 'Oleh sebab itu, hal tersebut perlu diperhatikan.' },
      { id: 'C', text: 'Selain itu, masih banyak contoh lain.' },
      { id: 'D', text: 'Namun, pendapat ini berbeda.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Simpulan merangkum dan menegaskan isi.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q22',
    text: 'Makna kata “krusial” dalam kalimat berikut adalah ....\n\nPeran orang tua sangat krusial dalam pendidikan anak.',
    options: [
      { id: 'A', text: 'Biasa' },
      { id: 'B', text: 'Sepele' },
      { id: 'C', text: 'Sangat penting' },
      { id: 'D', text: 'Berlebihan' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: “Krusial” berarti sangat penting.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q23',
    text: 'Kalimat berikut yang termasuk opini adalah ....',
    options: [
      { id: 'A', text: 'Indonesia memiliki banyak pulau.' },
      { id: 'B', text: 'Menurut saya, kebijakan itu kurang efektif.' },
      { id: 'C', text: 'Air membeku pada 0°C.' },
      { id: 'D', text: 'Matahari adalah pusat tata surya.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Opini ditandai pendapat pribadi.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q24',
    text: 'Kalimat yang tidak efektif adalah ....',
    options: [
      { id: 'A', text: 'Ia membaca buku setiap malam.' },
      { id: 'B', text: 'Para siswa-siswa diminta hadir.' },
      { id: 'C', text: 'Guru menjelaskan materi dengan jelas.' },
      { id: 'D', text: 'Mereka mengikuti kegiatan sekolah.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Kata “para” dan “siswa-siswa” berlebihan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q25',
    text: 'Tujuan utama teks editorial adalah ....',
    options: [
      { id: 'A', text: 'Menghibur pembaca' },
      { id: 'B', text: 'Memberi informasi netral' },
      { id: 'C', text: 'Menyampaikan pendapat disertai argumen' },
      { id: 'D', text: 'Menceritakan pengalaman pribadi' },
    ],
    correctOptionId: 'C',
    discussion: 'Penjelasan singkat: Editorial berisi opini dan argumen penulis.\nKesimpulan: Jawaban yang benar adalah C.'
  },
  {
    id: 'sim-bi-l3-q26',
    text: 'Kalimat yang tepat menggunakan konjungsi tujuan adalah ....',
    options: [
      { id: 'A', text: 'Ia belajar agar lulus ujian.' },
      { id: 'B', text: 'Ia belajar karena ujian.' },
      { id: 'C', text: 'Ia belajar meskipun lelah.' },
      { id: 'D', text: 'Ia belajar sehingga pintar.' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: “Agar” menyatakan tujuan.\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l3-q27',
    text: 'Informasi tersurat dari teks adalah ....',
    options: [
      { id: 'A', text: 'Makna tersembunyi penulis' },
      { id: 'B', text: 'Informasi yang dinyatakan langsung' },
      { id: 'C', text: 'Pendapat pembaca' },
      { id: 'D', text: 'Kesimpulan implisit' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Tersurat berarti tertulis secara jelas.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q28',
    text: 'Kalimat berikut yang bersifat persuasif adalah ....',
    options: [
      { id: 'A', text: 'Sampah menumpuk di sungai.' },
      { id: 'B', text: 'Mari kita menjaga kebersihan lingkungan.' },
      { id: 'C', text: 'Sungai mengalir ke laut.' },
      { id: 'D', text: 'Lingkungan perlu diperhatikan.' },
    ],
    correctOptionId: 'B',
    discussion: 'Penjelasan singkat: Persuasif mengandung ajakan.\nKesimpulan: Jawaban yang benar adalah B.'
  },
  {
    id: 'sim-bi-l3-q29',
    text: 'Kalimat yang tepat sebagai penegasan ulang adalah ....',
    options: [
      { id: 'A', text: 'Dengan demikian, hal tersebut sangat penting.' },
      { id: 'B', text: 'Misalnya, kegiatan belajar.' },
      { id: 'C', text: 'Namun, pendapat ini berbeda.' },
      { id: 'D', text: 'Selain itu, masih banyak contoh.' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Penegasan ulang merangkum kembali inti.\nKesimpulan: Jawaban yang benar adalah A.'
  },
  {
    id: 'sim-bi-l3-q30',
    text: 'Simpulan terbaik dari teks yang membahas pentingnya disiplin adalah ....',
    options: [
      { id: 'A', text: 'Disiplin membuat hidup lebih teratur dan berhasil.' },
      { id: 'B', text: 'Disiplin hanya penting di sekolah.' },
      { id: 'C', text: 'Disiplin tidak berpengaruh pada kehidupan.' },
      { id: 'D', text: 'Disiplin sulit diterapkan.' },
    ],
    correctOptionId: 'A',
    discussion: 'Penjelasan singkat: Simpulan merangkum manfaat disiplin.\nKesimpulan: Jawaban yang benar adalah A.'
  },
],
};



