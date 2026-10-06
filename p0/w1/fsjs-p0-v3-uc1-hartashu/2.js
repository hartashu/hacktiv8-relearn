/*

Algoritma
---------
1. Buat variable dengan nama 'nama' dan assign isi nya dengan nama si murid
2. Buat variable dengan nama 'nilai' dan assign isi nya dengan nilai si murid
3. Buat variable dengan nama 'absen' dan assign isi nya dengan jumlah absen si murid
4. Lakukan pengecekan apakah murid lulus atau tidak nya dengan ketentuan sebagai berikut:
  - Nilai harus lebih besar dari 70
  - Absen harus kurang dari 5 kali
5. Setelah selesai pengecekan dan mendapatkan hasil berupa lulus atau tidak, tampilkan nama murid dan status lulus nya

Pseudocode
----------
STORE nama AS STRING WITH 'Jisoo'
STORE nilai AS NUMBER WITH 70
STORE absen AS NUMBER WITH 3

IF nilai MORE THAN 70 AND absen LESS THAN 5
  DISPLAY nama CONCAT 'lulus'
ELSE
  DISPLAY nama CONCAT 'tidak lulus'

*/

var nama = "Jisoo";
var nilai = 70;
var absen = 3;

// code here
if (nilai > 70 && absen < 5) {
  console.log(`${nama} lulus`);
} else {
  console.log(`${nama} tidak lulus`);
}