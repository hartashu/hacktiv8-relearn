function tentukanDeretGeometri(arr) {
  const multiplier = arr[1] / arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] * multiplier !== arr[i + 1]) {
      return false;
    }
  }

  return true;
}

// function tentukanDeretGeometri(arr) {
//   // write your code here

//   const multiplier = arr[2] / arr[1];

//   // while (arr.length) {

//   // }

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] * multiplier !== arr[i + 1]) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
module.exports = tentukanDeretGeometri;
