/**
 Hapus Karakter Terlarang (Implementasi nested loop)
-------------------------
Diberikan sebuah kata. 
Tugas Anda adalah memfilter agar kata tidak mengandung karakter terlarang, yaitu karakter s,r,a,9,8.
contoh:
input: 'hayo andi'
output: 'hyo ndi'
input: '17 agustus 1945'
output: '17 gutu 145'
RULES:
- DILARANG MENGGUNAKAN built in function apapun.
*/
// let input = '17 agustus 1945';
let input = 'hayo andi';
let hurufTerlarang = 'sra98';
let output = '';

for (const huruf of input) {
  let isForbidden = false;
  for (const forbidden of hurufTerlarang) {
    if (huruf === forbidden) {
      isForbidden = true;
      break;
    }
  }

  if (!isForbidden) output += huruf;
}

console.log(output);

// for (let i = 0; i < input.length; i++) {
//   let isContained = false;

//   for (let j = 0; j < hurufTerlarang.length; j++) {
//     if (input[i] === hurufTerlarang[j]) {
//       isContained = true;
//       break;
//     }
//   }

//   if (!isContained) {
//     output += input[i];
//   }
// }

// console.log(output);
