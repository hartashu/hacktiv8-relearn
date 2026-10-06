let kata = 'xoxoxoo';
// insert your coding here

let balance = 0;

for (let huruf of kata) {
  if (huruf === 'x') balance++;
  else if (huruf === 'o') balance--;
}

console.log(balance === 0);

// let jumlahX = 0;
// let jumlahO = 0;

// for (let i = 0; i < kata.length; i++) {
//   if (kata[i] === 'x') {
//     jumlahX++;
//   } else if (kata[i] === 'o') {
//     jumlahO++;
//   }
// }

// if (jumlahX === jumlahO) {
//   console.log(true);
// } else {
//   console.log(false);
// }
