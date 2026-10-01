/*
    ==========================
    Find Character Coordinate
    ==========================

    [INSTRUCTION]

    Terdapat function findCharacterCoordinate, function ini menerima 2 parameter,
    parameter pertama merupakan array multidimensi,
    parameter kedua merupakan character yang akan di cari dari parameter pertama.
    Fungsi ini akan mengembalikan array multidimensi seperti contoh dibawah ini

    [EXAMPLE]

    input 1: 

    [
        ["F","$","#","*"],
        ["$","A","@","O"],
        ["%","&","#","@"],
        ["A","*","&","%"]
    ]

    input 2: '$'
    proses: mencari $ di dalam array multidimensi yang diberikan
    output : ["$",[0,1],[1,0]]
*/

function groupCharacterCoordinate(arr, character) {
  if (!Array.isArray(arr) || !character) return [];

  const output = [character];

  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];

    for (let j = 0; j < row.length; j++) {
      const char = row[j];

      if (char === character) {
        output.push([i, j]);
      }
    }
  }

  return output;
}

// function groupCharacterCoordinate(arr, character) {
//     // Code Here

//     const result = [character];
//     let coordinate = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === character) {
//                 coordinate.push(i);
//                 coordinate.push(j);
//                 result.push(coordinate);
//                 coordinate = [];
//             }
//         }
//     }

//     return result;
// }

console.log(
  groupCharacterCoordinate(
    [
      ['F', '$', '#', '*'],
      ['$', 'A', '@', 'O'],
      ['%', '&', '#', '@'],
      ['A', '*', '&', '%'],
    ],
    '$',
  ),
);
/* output : 
   ["$",[0,1],[1,0]]
*/

console.log(
  groupCharacterCoordinate(
    [
      ['F', '$', '#', '*', 'B', '^', 'P', '%'],
      ['$', 'A', '@', 'O', 'O', 'G', '$', '?'],
      ['%', '&', '#', '@', 'A', '*', '#', 'F'],
      ['A', '*', '&', '%', 'B', 'O', '?', 'N'],
      ['F', '$', '#', '*', '$', '%', '&', 'B'],
      ['$', 'A', '@', 'O', 'N', 'F', 'O', 'P'],
      ['%', '&', '#', '@', '!', '%', '*', '#'],
      ['A', '*', '&', '%', '^', 'M', '@', 'P'],
    ],
    '@',
  ),
);
/* output:
    [ '@', [ 1, 2 ], [ 2, 3 ], [ 5, 2 ], [ 6, 3 ], [ 7, 6 ] ]
*/
