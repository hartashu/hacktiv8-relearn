function vocalSeeker(board) {
  if (!board || board.length === 0) {
    return 'vokal ditemukan 0 dan kumpulan vokal adalah ';
  }

  const vocal = 'aiueoAIUEO';
  let vocalFound = '';

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const char = board[i][j];

      for (const v of vocal) {
        if (char === v) {
          vocalFound += char;
          break;
        }
      }
    }
  }

  return `vokal ditemukan ${vocalFound.length} dan kumpulan vokal adalah ${vocalFound}`;
}

//DRIVER CODE

let board = [
  ['*', '*', '*', 10],
  ['*', '*', -5, -10, '*', 100],
  ['a', 'A', 'o', 'b'],
];

console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo

module.exports = vocalSeeker;

// function vocalSeeker(board) {
//   // Write your code here
//   const vocal = 'aAiIuUeEoO';

//   let result = '';

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       for (let k = 0; k < vocal.length; k++) {
//         if (board[i][j] === vocal[k]) {
//           result += board[i][j];
//         }
//       }
//     }
//   }

//   return `vokal ditemukan ${result.length} dan kumpulan vokal adalah ${result}`;
// }
