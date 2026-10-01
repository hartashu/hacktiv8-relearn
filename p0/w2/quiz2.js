/*
    =========
    sumColumn
    =========

    [INSTRUCTION]

    program sumRow adalah program yang dapat menjumlahkan angka per column
    pada array multidimensi. masing - masing row bisa memiliki jumlah row yang 
    berbeda

    [EXAMPLE]

    input: 
    [
     [5],
     [2,  5, 12, 8],
     [4, 56,  3]
    ]

    cara menjumlahkannya, jumlahkan angka - angka tersebut dengan column yang sama.
    maka yang di jumlahkan adalah 

    column 1 => 5 + 2 + 4 = 11 
    column 2 => 5 + 56 = 61
    column 3 => 12 + 3 = 15 
    column 4 => 8 = 8

    hasil masing - masing penjumlahan disetiap column di masukkan kedalam 1 array
    
    output :

    [11, 61, 15, 8]
*/

function sumColumn(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result[j] = (result[j] ?? 0) + arr[i][j];
    }
  }

  return result;
}

// function sumColumn(arr) {
//     // Code Here
//     let result = [];

//     // console.log(result[0]);

//     for (let x = 0; x < arr.length; x++) {
//         let kotak = arr[x];

//         for (let y = 0; y < kotak.length; y++) {
//             let isi = kotak[y];

//             // console.log(isi, y);

//             // console.log(result, "STEP 1");

//             // Karena masalahnya adalah nilai awal Undefined
//             // Kita cek terlebih dahulu sebelum di tambahkan
//             if (result[y] === undefined) {
//                 result[y] = 0;
//             }

//             // console.log(result, "STEP 2");

//             // Array itu mutable
//             result[y] += isi; // undefined + 5 = NaN

//             // console.log(result, "STEP 3");
//         }
//     }

//     return result;
// }

// function sumColumn(arr) {
//     // Code Here
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (result[j] === undefined) {
//                 result[j] = 0;
//             }
//             result[j] += arr[i][j];
//         }
//     }

//     return result;
// }

console.log(sumColumn([[5], [2, 5, 12, 8, 1], [4, 56, 3]])); // [11, 61, 15, 8 ]

console.log(
  sumColumn([
    [3, 5, 12, 6],
    [1, 7, 4, 3, 8, 4, 9],
    [8, 5, 8],
    [4, 7, 8, 2, 8, 3],
  ]),
);
// [16, 24, 32, 11, 16, 7, 9]
