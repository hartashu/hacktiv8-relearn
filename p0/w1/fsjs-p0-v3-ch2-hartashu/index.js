const word = 'Ja4va4scri1pt';
let result = '';

if (!word) {
  result = 'Tidak ada kata yang bisa di proses';
} else {
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (char >= '1' && char <= '9') {
      const prevChar = word[i - 1];
      const repeat = Number(char);

      for (let j = 0; j < repeat; j++) {
        result += prevChar;
      }
    } else {
      result += char;
    }
  }
}

console.log(result);

// let word = '';
// // write your code

// let result = '';

// if (!word) {
//   console.log('Tidak ada kata yang bisa di proses');
// } else {
//   for (let i = 0; i < word.length; i++) {
//     let previousWord = word[i - 1];
//     let wordInNumber = Number(word[i]);

//     if (isNaN(wordInNumber) || word[i] === ' ') {
//       result += word[i];
//     } else {
//       //if (wordInNumber >= 1 && wordInNumber <= 9) {
//         for (let j = 0; j < wordInNumber; j++) {
//           result += previousWord;
//         }
//       //}
//     }
//   }
//   console.log(result);
// }
