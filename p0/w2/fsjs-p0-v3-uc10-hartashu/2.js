function cariMedian(arr) {
  if (!Array.isArray(arr) || !arr.length) return null;

  const length = arr.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  }

  return arr[mid];
}

// function cariMedian(arr) {
//     // you can only write your code here!
//     if (arr['length'] % 2 === 0) {
//         let iLeft = arr['length'] / 2 - 1;
//         let iRight = arr['length'] / 2;

//         return (arr[iLeft] + arr[iRight]) / 2;
//     }

//     return arr[(arr.length - 1) / 2];
// }

// TEST CASES

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

//do not change the code below
module.exports = cariMedian;
