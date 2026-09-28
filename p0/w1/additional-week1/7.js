/*
=============================
Menerjemahkan angka ke simbol
=============================
Kamu diberikan input yang berisikan angka-angka, tugasmu adalah menerjemahkan angka-angka tersebut ke barisan simbol.
Jumlah baris yang muncul sesuai dengan panjang input dan jumlah simbol yang ditampilkan di tiap baris sesuai dengan angka-angka di dalam input. Simbol yang ditampilkan di baris ganjil adalah '$' dan simbol yang ditampilkan di baris genap adalah '|'.
Contoh 1
--------
let input = '123'
output:
$
||
$$$
penjelasan:
$   -> $ ditampilkan 1 kali
||  -> | ditampilkan 2 kali
$$$ -> $ ditampilkan 3 kali 
Contoh 2
--------
let input = '4212'
output:
$$$$
||
$
||
penjelasan:
$$$$    -> $ ditampilkan 4 kali
||      -> | ditampilkan 2 kali
$       -> $ ditampilkan 1 kali
||      -> | ditampilkan 2 kali
Rule:
- Hanya gunakan built in function yang diperbolehkan (cek readme).
*/

let input = '67984213';

// Tulis code di sini...

for (let i = 0; i < input.length; i++) {
  const symbol = i % 2 === 0 ? '$' : '|';

  let printRow = '';
  for (let j = 0; j < Number(input[i]); j++) {
    printRow += symbol;
  }
  console.log(printRow);
}

// for (let i = 0; i < input.length; i++) {
//   let result = '';
//   let singleNumber = Number(input[i]);

//   for (let j = 0; j < singleNumber; j++) {
//     if ((i + 1) % 2 === 0) {
//       result += '|';
//     } else {
//       result += '$';
//     }
//   }

//   console.log(result);
// }
