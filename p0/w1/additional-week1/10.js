/*
==================
PETERNAKAN STARDOO
==================
Peternakan Stardoo memiliki 3 jenis hewan: ayam, domba, dan sapi. Tiap jenis hewan bisa berjenis kelamin jantan maupun betina dan memiliki karakteristik yang berbeda-beda.
Karakteristik domba:
1. Domba jantan menghasilkan 0.1 kg wol setiap harinya.
2. Domba betina menghasilkan 0.15 kg wol setiap harinya.
Karakteristik sapi:
1. Sapi jantan beratnya naik 0.5 kg setiap harinya.
2. Sapi betina menghasilkan 20 liter susu setiap hari.
Karakteristik ayam:
1. Ayam jantan beratnya naik 0.2 kg setiap harinya.
2. Ayam betina bertelur setiap 2 hari sekali.
Tugasmu adalah untuk menampilkan hasil sesuai dengan karakteristik tiap-tiap hewan berdasarkan jenis kelamin dan berapa hari yang telah berlalu.
--------
CONTOH 1
--------
hewan = 'Domba'
jenisKelamin = 'betina'
hari = 2
OUTPUT:
Domba betina menghasilkan 0.3 kg wol setelah 2 hari
--------
CONTOH 2
--------
hewan = 'Sapi'
jenisKelamin = 'jantan'
hari = 4
OUTPUT:
Sapi jantan beratnya naik 2 kg setelah 4 hari
--------
CONTOH 3
--------
hewan = 'Sapi'
jenisKelamin = 'betina'
hari = 5
OUTPUT:
Sapi betina menghasilkan 100 liter susu setelah 5 hari
--------
CONTOH 4
--------
hewan = 'Ayam'
jenisKelamin = 'jantan'
hari = 5
OUTPUT:
Ayam jantan beratnya naik 1 kg setelah 5 hari
--------
CONTOH 5
--------
hewan = 'Ayam'
jenisKelamin = 'betina'
hari = 5
OUTPUT:
Ayam betina bertelur sebanyak 2 butir setelah 5 hari
RULE:
- Hanya boleh menggunakan built in function Math
*/

// isi variabel yang tersedia boleh diubah-ubah sesuai kebutuhan

let hewan = 'Domba';
let jenisKelamin = 'jantan';
let hari = 10;

// Tulis code di sini...
let isJantan = jenisKelamin.toLowerCase() === 'jantan' ? true : false;
let printedText = '';

switch (hewan.toLowerCase()) {
  case 'ayam':
    if (isJantan) {
      printedText = `Ayam ${jenisKelamin} beratnya naik ${0.2 * hari} kg setelah ${hari} hari`;
    } else {
      printedText = `Ayam ${jenisKelamin} bertelur sebanyak ${Math.floor(hari / 2)} butir setelah ${hari} hari`;
    }
    break;
  case 'domba':
    printedText = `Domba ${jenisKelamin} menghasilkan ${(isJantan ? 0.1 : 0.15) * hari} kg wol setelah ${hari} hari`;
    break;
  case 'sapi':
    if (isJantan) {
      printedText = `Sapi ${jenisKelamin} beratnya naik ${0.5 * hari} kg setelah ${hari} hari`;
    } else {
      printedText = `Sapi ${jenisKelamin} menghasilkan ${20 * hari} liter susu setelah ${hari} hari`;
    }
    break;
}

console.log(printedText);

// let output = '';

// output += `${hewan} ${jenisKelamin} `;

// if (hewan === 'Ayam') {
//   if (jenisKelamin === 'jantan') {
//     // console.log(`Ayam jantan beratnya naik ${(0.2 * hari).toFixed(1)} kg setelah ${hari} hari`);
//     output += `beratnya naik ${(0.2 * hari).toFixed(1)} kg `;
//   } else if (jenisKelamin === 'betina') {
//     output += `bertelur sebanyak ${Math.floor(hari / 2)} butir `;
//   }
// } else if (hewan === 'Domba') {
//   if (jenisKelamin === 'jantan') {
//     output += `menghasilkan ${0.1 * hari} kg wol `;
//   } else if (jenisKelamin === 'betina') {
//     output += `menghasilkan ${0.15 * hari} kg wol `;
//   }
// } else if (hewan === 'Sapi') {
//   if (jenisKelamin === 'jantan') {
//     output += `beratnya naik ${0.5 * hari} kg `;
//   } else if (jenisKelamin === 'betina') {
//     output += `menghasilkan ${20 * hari} liter susu `;
//   }
// }

// output += `setelah ${hari} hari`;

// console.log(output);
