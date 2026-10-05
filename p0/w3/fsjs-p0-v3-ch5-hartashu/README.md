[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19346449&assignment_repo_type=AssignmentRepo)
# Symbol Translate

## Objectives

- Mampu memecahkan masalah yang diberikan.
- Mampu mengubah tipe data string menjadi number.
- Mampu menggunakan operator aritmatika dan perbandingan.
- Mampu menggabungkan konsep looping / iteration dan conditional.
- Mampu membuat mengubah array of numbers menjadi string.
- Mengerti keterhubungan satu function dengan function lainnya.
- Mengerti cara melemparkan data yang dikembalikan dari satu function kemudian digunakan sebagai parameter function lain.

## Notes

- Jalankan npm install terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test, untuk memastikan solusi kamu sudah benar, jalankan command **npm test**

## Restriction

- Tidak boleh menggunakan built-in function

## Hints

- Nama function haruslah convertSymbol, sortingEven, decrementOdd, convertNumber, dan result dan tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah

## Directions

Pada soal kali ini kamu akan berperan menjadi seorang detektif 🕵️‍♂️. Tugas kamu adalah untuk menerjemahkan sebuah teka-teki berupa kumpulan simbol menjadi sebuah kalimat. Tugas ini, di kerjakan dengan cara modular function, dengan **function result()** sebagai function utamanya.

```js
function result(arr) {}

console.log(
  result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^']) // lets go guyz
)
console.log(
  result(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']) // i love you
)

console.log(
  result(['!%', '@&', '@@', '!&', '$#', '@)', '!#', '!%', '@#', '*', '@!', '$']) // code hacktiv
)
```

<br>

Terdapat beberapa **function helper()** yang akan dipanggil didalam function **function result()**, diantaranya :

### convertSymbol

Diberikan sebuah function **convertSymbol**, function ini menerima array of string sebagai parameternya dan berfungsi untuk mengubah array yang elementnya berupa symbol menjadi angka.
Symbol diubah menjadi angka dengan ketentuan :

```
1.   '!' => 1               6.   '^' => 6
2.   '@' => 2               7.   '&' => 7
3.   '#' => 3               8.   '*' => 8
4.   '$' => 4               9.   '(' => 9
5.   '%' => 5               10.  ')' => 0
```

```js
function convertSymbol(arr) {
  //code here
}

console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']))
/*
[
  19, 37, 12, 25, 22,
  15, 73, 35, 25, 31
]
*/
```

<br>

### decrementOdd

Diberikan sebuah function **decrementOdd**, function ini menerima array of numbers, dan berfungsi untuk merubah setiap element yang ganjil, nilainya di kurangi dengan _length_ dari array tersebut.

```js
function decrementOdd(arr) {
  //code here
}

console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]))
/*
[
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]
*/
```

<br>

### splitNumber

Diberikan sebuah function **splitNumber**, function ini menerima array of numbers sebagai parameternya dan akan mengembalikan array multi dimensi dengan aturan:

- Angka-angka akan dipisahkan setiap kali bertemu dengan angka lebih dari `26`

contoh:

```js
/**
input: [
  9, 27, 12, 15, 22,
  5, 63, 25, 15, 21
]

output: [
  [9], 
  [12, 15, 22, 5],
  [25, 15, 21]
]

proses:

 - Ketika bertemu dengan angka 27 maka angka angka sebelumnya dianggap satu buah group
 - Dan angka-angka selanjutnya akan dianggap group yang baru.
 - Ketika bertemu dengan angka 63 maka angka angka sebelumnya dianggap satu buah group
 - Dan angka-angka selanjutnya akan dianggap group yang baru.
 **/
```

```js
function splitNumber(arr) {
  //code here
}

console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]))

/*
 [
   [9], 
   [12, 15, 22, 5],
   [25, 15, 21]
 ]
*/
```

<br>

### convertNumber

Diberikan sebuah function **convertNumber**, function ini menerima array multi dimensi sebagai parameternya dan berfungsi untuk mengembalikan sebuah string, dengan ketentuan:

- Urutan angka antara 1 sampai 26, maka :

```
  1 => 'a'
  2 => 'b'
  3 => 'c'
  4 => 'd'
  .
  .
  .
  26 => 'z'
```

```js
function convertNumber(arr) {
  //code here
}

console.log(convertNumber([[9], [12, 15, 22, 5], [25, 15, 21]]))

/*
i love you
*/
```

### result

Diberikan sebuah function **result**, function ini merupakan **main function** yang akan menggabungkan seluruh fungsi yang sudah kita buat sebelumnya.

```js
function result(arr) {
  // Your code here
}

console.log(
  result(['!@', '!&', '@)', '#!', '&#', '!(', '@&', '%%', '!(', '##', '#&', '@^']) // lets go guyz
)
```
