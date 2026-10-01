function mengelompokkanAngka(arr) {
  // if (!Array.isArray(arr) || arr.length === 0) return [];

  const genap = [];
  const ganjil = [];
  const kelipatan3 = [];

  for (const digit of arr) {
    if (digit % 3 === 0) {
      kelipatan3.push(digit);
    } else if (digit % 2 === 0) {
      genap.push(digit);
    } else {
      ganjil.push(digit);
    }
  }

  return [genap, ganjil, kelipatan3];
}

// function mengelompokkanAngka(arr) {
//   // write your code here

//   const evenArr = [];
//   const oddArr = [];
//   const multipleByThreeArr = [];

//   for (let element of arr) {
//     if (element % 3 === 0) {
//       multipleByThreeArr.push(element);
//     } else {
//       if (element % 2 === 0) {
//         evenArr.push(element);
//       } else {
//         oddArr.push(element);
//       }
//     }
//   }

//   let result = [];

//   result.push(evenArr);
//   result.push(oddArr);
//   result.push(multipleByThreeArr);

//   return result;
// }

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

module.exports = mengelompokkanAngka;
