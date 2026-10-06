/**
 * =================
 * Box of alphabet
 * =================
 *
 * Terdapat sebuah fungsi yang akan membuat sebuah array multi dimensi dengan jumlah baris dan kolom yang diminta oleh user.
 *
 * Pada setiap elementnya kita akan memasukkan huruf alphabet berurutan dari A hingga Z.
 * Pengisian huruf dimulai dari baris pertama dari kiri ke kanan, ketika baris pertama sudah terisi dengan huruf huruf alfabet,
 * maka pengisian dimulai dari baris kedua paling kiri dan bergerak ke kanan dan seterusnya.
 *
 * Ketika huruf sudah mencapai huruf Z maka element selanjutnya akan diisi oleh huruf A lagi dan seterusnya.
 *
 * Rules:
 * - Hanya boleh menggunakan built in function push()
 *
 */

function boxOfAlphabet(row, col) {
  const result = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let counter = 0;

  for (let i = 0; i < row; i++) {
    const alphabetRow = [];
    for (let j = 0; j < col; j++) {
      alphabetRow.push(alphabet[counter % alphabet.length]);
      counter++;
    }
    result.push(alphabetRow);
  }

  return result;
}

console.log(boxOfAlphabet(2, 2));
/**
 * [
 *  ['a', 'b'],
 *  ['c', 'd']
 * ]
 */

console.log(boxOfAlphabet(3, 4));

/**
 *  [
 *   ['a', 'b', 'c', 'd'],
 *   ['e', 'f', 'g', 'h'],
 *   ['i', 'j', 'k', 'l'],
 * ]
 */

console.log(boxOfAlphabet(6, 5));

/**
 * [
 *   ['a', 'b', 'c', 'd', 'e'],
 *   ['f', 'g', 'h', 'i', 'j'],
 *   ['k', 'l', 'm', 'n', 'o'],
 *   ['p', 'q', 'r', 's', 't'],
 *   ['u', 'v', 'w', 'x', 'y'],
 *   ['z', 'a', 'b', 'c', 'd']
 * ]
 */

// function boxOfAlphabet(row, col) {
//   const alphabet = [
//     'a', 'b', 'c', 'd', 'e',
//     'f', 'g', 'h', 'i', 'j',
//     'k', 'l', 'm', 'n', 'o',
//     'p', 'q', 'r', 's', 't',
//     'u', 'v', 'w', 'x', 'y',
//     'z'
//   ];

//   const result = [];
//   let counterAlphabet = 0;

//   for (let i = 0; i < row; i++) {
//     const rowResult = [];

//     for (let j = 0; j < col; j++) {
//       rowResult.push(alphabet[counterAlphabet]);

//       if (counterAlphabet >= alphabet.length - 1) {
//         counterAlphabet = 0;
//       } else {
//         counterAlphabet++;
//       }

//     }

//     result.push(rowResult);
//   }

//   return result;
// }
