// jangan ubah isi variabel dibawah
let row = 1;
let coordinate = '11';

// write your code here

let col = 5;

for (let i = 1; i <= row; i++) {
  let result = '';

  for (let j = 1; j <= col; j++) {
    if (i === Number(coordinate[0]) && j === Number(coordinate[1])) {
      result += '* ';
    } else {
      result += '# ';
    }
  }

  console.log(result);
}

// let coorRow = coordinate[0];
// let coorColumn = coordinate[1];

// for (let i = 1; i <= row; i++) {
//   let result = '';

//   for (let j = 1; j <= 5; j++) {
//     if (i === Number(coorRow) && j === Number(coorColumn)) {
//       result += '*';
//     } else {
//       result += '#';
//     }
//   }

//   console.log(result);
// }
