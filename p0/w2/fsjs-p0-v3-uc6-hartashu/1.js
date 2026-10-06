function ladder(word) {
  if (!word || typeof word !== 'string') return [];

  const result = [];

  for (let i = 0; i < word.length; i++) {
    const row = [];

    for (let j = 0; j < word.length - i; j++) {
      row.push(word[j]);
    }

    result.push(row);
  }

  return result;
}

// function ladder(word) {
//   //your code here

//   if (!word) return;

//   const result = [];
//   let wordLengthDecrease = word.length;

//   for (let i = 0; i < word.length; i++) {
//     const rowResult = [];

//     for (let j = 0; j < wordLengthDecrease; j++) {
//       rowResult.push(word[j]);
//     }

//     result.push(rowResult);
//     wordLengthDecrease--;
//   }

//   return result;
// }

// DRIVER CODE
console.log(ladder('hacktiv8'));
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]

module.exports = ladder;
