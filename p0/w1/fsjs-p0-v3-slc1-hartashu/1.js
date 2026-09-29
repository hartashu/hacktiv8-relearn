// isi variabel wahana, usia dan saldo tidak boleh dirubah
// variabel tarif tidak boleh langsung di isi, gunakan proses untuk mengisinya

let wahana = 'Wahana Utara';
let usia = 25;
let saldo = 180000;

// code here
let tarif;
let output = '';

const isInvalidAge = typeof usia !== 'number' || isNaN(usia);
const isInvalidWahana =
  wahana.toLowerCase() !== 'wahana utara' &&
  wahana.toLowerCase() !== 'wahana selatan';

if (isInvalidAge || isInvalidWahana) {
  output = 'Tiket tidak ditemukan!';
} else if (usia <= 1) {
  output = 'Dilarang masuk';
} else if (usia >= 2) {
  if (usia <= 12) {
    tarif = wahana.toLowerCase() === 'wahana utara' ? 85000 : 143000;
  } else {
    tarif = wahana.toLowerCase() === 'wahana utara' ? 125000 : 165000;
  }

  const sisaSaldo = saldo - tarif;
  const canEnter = sisaSaldo >= 0;

  if (canEnter) {
    output = `Sisa saldo anda adalah RP ${sisaSaldo},00. Selamat bermain.`;
  } else {
    output = `Saldo anda kurang RP ${Math.abs(sisaSaldo)},00. Tidak cukup untuk membeli tiket.`;
  }
}

console.log(output);

// if (usia <= 1) {
//   console.log('Dilarang Masuk');
// } else {
//   let kategori = '';

//   if (usia >= 2 && usia <= 12) {
//     kategori = 'Anak-anak';
//   } else if (usia >= 13 && usia <= 49) {
//     kategori = 'Dewasa';
//   } else {
//     kategori = 'Lansia';
//   }

//   if (wahana === 'Wahana Utara') {
//     if (kategori === 'Anak-anak') {
//       tarif = 85_000;
//     } else {
//       tarif = 125_000;
//     }
//   } else if (wahana === 'Wahana Selatan') {
//     if (kategori === 'Anak-anak') {
//       tarif = 143_000;
//     } else {
//       tarif = 165_000;
//     }
//   } else {
//     console.log('Tiket tidak ditemukan!');
//   }

//   if (tarif) {
//     if (saldo >= tarif) {
//       console.log(`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`);
//     } else {
//       console.log(`Saldo anda kurang RP ${tarif - saldo},00. Tidak cukup untuk membeli tiket.`);

//     }
//   }
// }

// // if (usia < 2) {
// //   console.log('Dilarang Masuk');
// // } else {
// //   if (usia >= 2 && usia <= 12) { //Anak-anak
// //     if (wahana === 'Wahana Utara') {
// //       if (saldo < 85_000) {
// //         tarif = `Saldo anda kurang RP ${85_000 - saldo},00. Tidak cukup untuk membeli tiket.`;
// //       } else {
// //         tarif = `Sisa saldo anda adalah RP ${saldo - 85_000},00. Selamat bermain.`;
// //       }
// //     } else if (wahana === 'Wahana Selatan') {
// //       if (saldo < 143_000) {
// //         tarif = `Saldo anda kurang RP ${143_000 - saldo},00. Tidak cukup untuk membeli tiket.`;
// //       } else {
// //         tarif = `Sisa saldo anda adalah RP ${saldo - 143_000},00. Selamat bermain.`;
// //       }
// //     } else {
// //       console.log('Tiket tidak ditemukan!');
// //     }
// //   } else if (usia >= 13) { //Dewasa dan Lansia
// //     if (wahana === 'Wahana Utara') {
// //       if (saldo < 125_000) {
// //         tarif = `Saldo anda kurang RP ${125_000 - saldo},00. Tidak cukup untuk membeli tiket.`;
// //       } else {
// //         tarif = `Sisa saldo anda adalah RP ${saldo - 125_000},00. Selamat bermain.`;
// //       }
// //     } else if (wahana === 'Wahana Selatan') {
// //       if (saldo < 165_000) {
// //         tarif = `Saldo anda kurang RP ${165_000 - saldo},00. Tidak cukup untuk membeli tiket.`;
// //       } else {
// //         tarif = `Sisa saldo anda adalah RP ${saldo - 165_000},00. Selamat bermain.`;
// //       }
// //     } else {
// //       console.log('Tiket tidak ditemukan!');
// //     }
// //   }

// //   console.log(tarif);
// // }
