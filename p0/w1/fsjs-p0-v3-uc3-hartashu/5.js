const rows1 = 5;

for (let i = 0; i < 5; i++) {
  console.log('*');
}

const rows2 = 5;

for (let i = 0; i < rows2; i++) {
  // console.log('*'.repeat(rows2));

  let row = '';
  for (let j = 0; j < rows2; j++) {
    row += '*';
  }

  console.log(row);
}

const rows3 = 5;

for (let i = 0; i < rows3; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }

  console.log(row);
}

const rows4 = 5;

for (let i = rows4; i > 0; i--) {
  let row = '';
  for (let j = 0; j < i; j++) {
    row += '*';
  }

  console.log(row);
}

// let rows1 = 5;
// // do loops using rows1 variable to display asterisks in the console.
// // insert your code here
// console.log('========== 1 ==========');

// for (let i = 0; i < rows1; i++) {
//   console.log('*');
// }

// let rows2 = 5;
// // do loops using rows2 variable to display asterisks in the console.
// // insert your code here
// console.log('========== 2 ==========');

// let jumlahBintangKolom;
// for (let i = 0; i < rows2; i++) {
//   jumlahBintangKolom = '';
//   for (let j = 0; j < rows2; j++) {
//     jumlahBintangKolom += '*';
//   }
//   console.log(jumlahBintangKolom);
// }

// let rows3 = 5;
// // do loops using rows3 variable to display asterisks in the console.
// // insert your code here
// console.log('========== 3 ==========');

// for (let i = 0; i < rows3; i++) {
//   jumlahBintangKolom = '';
//   for (let j = 0; j <= i; j++) {
//     jumlahBintangKolom += '*';
//   }
//   console.log(jumlahBintangKolom);
// }

// let rows4 = 5;
// // do loops using rows4 variable to display asterisks in the console.
// // insert your code here
// console.log('========== 4 ==========');

// for (let i = rows4; i > 0; i--) {
//   jumlahBintangKolom = '';
//   for (let j = 0; j < i; j++) {
//     jumlahBintangKolom += '*';
//   }
//   console.log(jumlahBintangKolom);
// }
