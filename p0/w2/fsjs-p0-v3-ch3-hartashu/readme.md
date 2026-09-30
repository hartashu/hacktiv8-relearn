[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19272128&assignment_repo_type=AssignmentRepo)
# Fill

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function `.fill()`

### HINTS


- Wajib menggunakan `While loop`
---

## Objectives

- Mampu menggunakan built in function pada Array
- Mampu melakukan manipulasi pada sebuah Array
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Diberikan sebuah function `fill` yang memiliki 4 parameter yaitu `data` (mandatory) dengan tipe Array, `value` (mandatory), `start` (optional) dengan tipe integer dan `end` (optional) dengan tipe integer.

Buatlah algoritma di dalam function `fill` sehingga bisa menghasilkan output seperti contoh berikut:

```js
function fill(data, value, start, end) {
  // your code here
}


//Test Case
console.log(fill()); 
// Invalid input

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"])); 
// Invalid input

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4)); 
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3)); 
// [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20)); 
// [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1)); 
// [ 'Golf', 'Beta', 'Charlie', 'Delta' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1)); 
// [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India")); 
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]
```
