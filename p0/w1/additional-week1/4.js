/*
 * =============================
 *  HITUNG NILAI JUAL KENA PAJAK
 * ==============================
 *
 * Dasar perhitungan NJKP (Nilai Jual Kena Pajak) adalah 20% dari nilai tanah ditambah nilai bangunan.
 *
 * Nilai tanah dihitung berdasarkan kategori lokasinya, apakah terletak di desa, pinggiran kota, atau pusat kota dengan perhitungan berikut:
 * 1. Nilai tanah di desa adalah 5.000 dollar per meter persegi.
 * 2. Nilai tanah di pinggiran kota adalah 10.000 dollar per meter persegi.
 * 3. Nilai tanah di pusat kota adalah 20.000 dollar per meter persegi.
 *
 * Sementara nilai bangunan dihitung berdasarkan jenis bangunannya, apakah merupakan rumah, pertokoan, atau perkantoran.
 * 1. Nilai bangunan rumah adalah 1.000 dollar per meter persegi.
 * 2. Nilai bangunan pertokoan atau perkantoran adalah 2.000 dollar per meter persegi.
 *
 * CONTOH 1:
 * Diminta menentukan NJKP dari pertokoan seluas 1.000 meter persegi di pusat kota
 *
 * var lokasiTanah = 'pusat kota'
 * var bangunan = 'pertokoan'
 * var luas = 1000
 *
 * PROSES:
 * Nilai tanah = 20.000 * 1000 = 20.000.000
 * Nilai bangunan = 2.000 * 1.000 = 2.000.000
 * Total harga = Nilai bangunan + Nilai tanah = 22.000.000
 * NJKP = 20/100 * total harga = 20/100 * 22.000.000 = 4.400.000
 *
 * OUTPUT:
 * Nilai Jual Kena Pajak adalah 4400000 dollar
 *
 * CONTOH 2:
 * Diminta menentukan NJKP dari rumah seluas 2000 meter persegi di desa
 *
 * var lokasiTanah = 'desa'
 * var bangunan = 'rumah'
 * var luas = 2000
 *
 * PROSES:
 * Nilai bangunan = 1.000 * 2.000 = 2.000.000
 * Nilai tanah = 5.000 * 2.000 = 10.000.000
 * Total harga = Nilai bangunan + Nilai tanah = 12.000.000
 * NJKP = 20/100 * total harga = 20/100 * 12.000.000 = 2.400.000
 *
 * OUTPUT:
 * Nilai Jual Kena Pajak adalah 2400000 dollar
 *
 *
 * RULES:
 * - ASUMSI inputan user selalu benar, tidak pernah ada kasus invalid input
 * - ASUMSI luas tanah dan luas bangunan selalu sama
 * - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN!
 */

const lokasiTanah = 'desa';
const bangunan = 'rumah';
const luas = 2000;
let nilaiTanah = 0;
let nilaiBangunan = 0;

let tarifTanah = 20000;
if (lokasiTanah === 'desa') tarifTanah = 5000;
else if (lokasiTanah === 'pinggiran kota') tarifTanah = 10000;

let tarifBangunan = 2000;
if (bangunan === 'rumah') tarifBangunan = 1000;

nilaiTanah = luas * tarifTanah;
nilaiBangunan = luas * tarifBangunan;
let totalHarga = nilaiTanah + nilaiBangunan;
let njkp = 0.2 * totalHarga;

console.log(`Nilai Jual Kena Pajak adalah ${njkp} dollar`);

// let lokasiTanah = 'desa';   //desa, pinggiran kota, pusat kota
// let bangunan = 'rumah';      //rumah, pertokoan / perkantoran
// let luas = 2000;

// let nilaiTanah = 0;
// let nilaiBangunan = 0;

// if (lokasiTanah === 'desa') nilaiTanah = luas * 5000;
// else if (lokasiTanah === 'pinggiran kota') nilaiTanah = luas * 10_000;
// else if (lokasiTanah === 'pusat kota') nilaiTanah = luas * 20_000;

// if (bangunan === 'rumah') nilaiBangunan = luas * 1000;
// else if (bangunan === 'pertokoan' || bangunan === 'perkantoran') nilaiBangunan = luas * 2000;

// let totalHarga = nilaiTanah + nilaiBangunan;
// let njkp = 20 / 100 * totalHarga;

// console.log(`Nilai Jual Kena Pajak adalah ${njkp} dollar`);
