/**
 * Ada sebuah Kerajaan yang sedang diserang oleh Penyihir, Kerajaan tersebut menyewa kalian
 * untuk membangun sebuah tembok yang tingginya melebihi batas dari para Penyihir tersebut terbang.
 * Temboknya harus dibikin selang - seling dengan material batu - bata @, besi # dan dibagian
 * paling atas ada menara ! untuk Pemanah. Contoh:
 *
 * batasTerbang = 4
 *
 * @@@@
 * ####
 * @@@@
 * ####
 * !!!!
 *
 * batasTerbang = 5
 *
 * @@@@@
 * #####
 * @@@@@
 * #####
 * @@@@@
 * !!!!!
 *
 * batasTerbang = 6
 *
 * @@@@@@
 * ######
 * @@@@@@
 * ######
 * @@@@@@
 * ######
 * !!!!!!
 */

let batasTerbang = 3;
let lastRow = '';

for (let i = 0; i < batasTerbang; i++) {
  const symbol = i % 2 ? '#' : '@';
  let row = '';

  for (let j = 0; j < batasTerbang; j++) {
    row += symbol;
  }

  lastRow += '!';
  console.log(row);
}

console.log(lastRow);

// for (let i = 0; i < batasTerbang; i++) {
//   let line = '';

//   for (let j = 0; j < batasTerbang; j++) {
//     if ((i + 1) % 2 === 0) {
//       line += '#';
//     } else {
//       line += '@';
//     }
//   }

//   console.log(line);
// }

// let lastLine = '';

// for (let i = 0; i < batasTerbang; i++) {
//   lastLine += '!';
// }

// console.log(lastLine);
