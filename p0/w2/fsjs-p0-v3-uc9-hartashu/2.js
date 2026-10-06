function countMe(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return {};
  }

  const result = {};

  for (const element of arr) {
    result[element] = (result[element] ?? 0) + 1;
  }

  return result;
}

// function countMe(arr) {
//   // write your code here

//   const result = {};

//   for (const element of arr) {
//     if (result[element] === undefined) {
//       result[element] = 0;
//     }
//     result[element]++;
//   }

//   return result;

// }

console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }

module.exports = countMe;
