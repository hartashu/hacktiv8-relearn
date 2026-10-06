let age = 19;
let canSwim = true;
let haveLicense = true;

let result = '';

if (age < 10) {
  result = 'Mohon maaf, kamu belum cukup umur!';
} else if (!canSwim) {
  result = 'Mohon maaf, kamu tidak bisa berenang!';
} else {
  let activity = 'snorkling';

  if (age > 15) {
    activity = haveLicense ? 'diving' : 'diving, dan ditemani oleh buddy';
  }

  result = `Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan ${activity}`;
}

console.log(result);

// let age = 19;
// let canSwim = false;
// let haveLicense = true;

// if (age < 10) {
//   console.log('Mohon maaf, kamu belum cukup umur!');
// } else {  // age >= 10
//   if (!canSwim) {
//     console.log('Mohon maaf, kamu tidak bisa berenang!');
//   } else {  //canSwim
//     if (age <= 15) {  // age 10 - 15 tahun
//       console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan snorkling`);
//     } else {  // age > 15
//       if (haveLicense) {
//         console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving`);
//       } else {  // !haveLicense
//         console.log(`Selamat dengan umur ${age} tahun, Kamu sudah bisa menikmati keindahan laut dengan diving, dan ditemani oleh buddy`);
//       }
//     }
//   }
// }
