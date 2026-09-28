let kata = '0';
let tipeKata = typeof kata;
let result = '';

if (!kata && kata !== false) {
  result = 'Invalid data';
} else if (tipeKata === 'string') {
  result = `username ${kata}`;
} else if (tipeKata === 'number') {
  result = `age ${kata}`;
} else if (tipeKata === 'boolean') {
  result = kata ? 'thank you for agreeing' : 'cannot proceed without agreement';
}

console.log(result);

// var kata = undefined - 5;

// // code here

// if (
//   kata === 0 ||
//   kata === '' ||
//   kata === undefined ||
//   kata === null ||
//   isNaN(kata)
// ) {
//   console.log("Invalid data");
// } else if (typeof kata === 'string') {
//   console.log(`username ${kata}`);
// } else if (typeof kata === 'number') {
//   console.log(`age ${kata}`);
// } else if (typeof kata === 'boolean') {
//   if (kata === true) {
//     console.log('thank you for agreeing');
//   } else {
//     console.log('cannot proceed without agreement');
//   }
// }
