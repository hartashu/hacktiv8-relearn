[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19214226&assignment_repo_type=AssignmentRepo)
# Number Repeater

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION
- Diperbolehkan menggunakan built-in function isNaN() dan built-in function konversi data bertipe string ke number atau sebaliknya, seperti toString(), Number(), dll.
  
### HINTS

- Variable `word` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.
- Implementasikan nested looping di soal ini ya, untuk mempermudah kode kalian ;)

---
### Objectives

- Mampu mengubah tipe data number menjadi string, maupun sebaliknya
- Mengerti logika `looping` dan `nested looping`
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah


### Directions

Diberikan sebuah variable word bertipe **string** yang di dalamnya terdapat sebuah angka. Buatlah sebuah program yang akan mengganti angka tersebut dengan huruf di index sebelumnya sebanyak angka tersebut ( Lihat contoh untuk lebih jelasnya ). Dengan ketentuan sebagai berikut:

1. Jika variable `word` berisi string kosong maka outputnya adalah `Tidak ada kata yang bisa di proses`

### Notes
1. Range angka pada soal adalah 1 sampai 9
2. Tidak mungkin ada angka yang bersebelahan
3. Tidak mungkin ada angka di awal kata

### Examples

```js
// Contoh ketika word diisi string kosong
let word = ''
// maka outputnya adalah Tidak ada kata yang bisa di proses

// CONTOH 1
let word = 'hackt1iv8'
// maka output nya adalah hackttivvvvvvvvv

// proses
// Terdapat angka 1 pada variable word tersebut, maka angka 1 tersebut
// digantikan huruf sebelum angka 1 yaitu "t" sebanyak satu kali.
//
// Terdapat angka 8 pada variable word tersebut, maka angka 8 tersebut
// digantikan huruf sebelum angka 8 yaitu "v" sebanyak delapan kali.

let word = 'I Lo1ve Co4ding'
// maka outputnya adalah I Loove Coooooding
```

Gantilah value pada variable `word` dalam file `index.js` dengan beberapa test case dibawah ini:

```js
let word = 'pha4se pre3parat2ion'
// phaaaaase preeeeparatttion

let word = 'Ja4va4scri1pt'
// Jaaaaavaaaaascriipt
```
