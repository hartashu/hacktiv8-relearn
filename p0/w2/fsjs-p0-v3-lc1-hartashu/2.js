let name = 'Misk Spasela';
let id = 'Si021rTSz';

//your code here

let result = '';

let totalR = 0;
let totalS = 0;

for (const char of id) {
  if (char === 'R') totalR++;
  else if (char === 'S') totalS++;
}

let memberStatus;
let since;
let medali = '';

if (totalR > 0) {
  memberStatus = 'anggota biasa';
  since = totalR;
  medali = totalR >= 5 ? ' dan berhak mendapatkan medali gold' : '';
} else if (totalS > 0) {
  memberStatus = 'pengurus sekte';
  since = totalS;
  medali = totalS >= 3 ? ' dan berhak mendapatkan medali platinum' : '';
}

result = `${name} sudah menjadi ${memberStatus} selama ${since} tahun${medali || '.'}`;

console.log(result);

// let position = '';
// let year = 0;
// let output = '';

// for (let i = 0; i < id.length; i++) {
//   if (id[i] === 'R') {
//     position = 'anggota biasa';
//     year++;
//   } else if (id[i] === 'S') {
//     position = 'pengurus sekte';
//     year++;
//   }
// }

// if (position === 'anggota biasa') {
//   if (year >= 5) {
//     console.log(`${name} sudah menjadi ${position} selama ${year} tahun dan berhak mendapatkan medali gold`);
//   } else {
//     console.log(`${name} sudah menjadi ${position} selama ${year} tahun.`);
//   }
// } else if (position === 'pengurus sekte') {
//   if (year >= 3) {
//     console.log(`${name} sudah menjadi ${position} selama ${year} tahun dan berhak mendapatkan medali platinum`);
//   } else {
//     console.log(`${name} sudah menjadi ${position} selama ${year} tahun.`);
//   }
// }
