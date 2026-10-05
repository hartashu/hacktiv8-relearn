// cara dengan object
function cariModus(arr) {
  if (!Array.isArray(arr) || !arr.length) return -1;

  const bucket = {};

  for (const number of arr) {
    bucket[number] = (bucket[number] ?? 0) + 1;
  }

  const keys = Object.keys(bucket);
  if (keys.length === 1) {
    return -1;
  }

  let maxFreq = 1;
  let modus = -1;

  for (const number of arr) {
    const freq = bucket[number];
    if (freq > maxFreq) {
      maxFreq = freq;
      modus = number;
    }
  }

  if (maxFreq === 1) {
    return -1;
  }

  return modus;
}

// cara tanpa object
// function cariModus(arr) {
//   if (!Array.isArray(arr) || !arr.length) return -1;

//   let mod;
//   let prevFreq = 0;
//   let currFreq = 1;

//   for (let i = 0; i < arr.length; i++) {
//     currFreq = 1;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         currFreq++;
//       }
//     }

//     if (currFreq > prevFreq) {
//       mod = arr[i];
//       prevFreq = currFreq;
//     }
//   }

//   if (prevFreq <= 1 || prevFreq === arr.length) {
//     return -1;
//   }

//   return mod;
// }

// cara 1
// function cariModus(arr) {
// 	// write your code here

// 	const obj = {};

// 	for (let i = 0; i < arr['length']; i++) {
// 		if (obj[arr[i]] === undefined) {
// 			obj[arr[i]] = 0;
// 		}

// 		obj[arr[i]]++;
// 	}

// 	const keyArr = Object.keys(obj);

// 	if (keyArr.length === 0 || keyArr.length === 1) return -1;

// 	let modus = -Infinity;

// 	for (let i = 0; i < keyArr.length - 1; i++) {
// 		if (obj[keyArr[i]] > obj[keyArr[i + 1]]) {
// 			modus = keyArr[i];
// 		}
// 	}

// 	if (modus === -Infinity) return -1;

// 	return modus;

// }

// TEST CASES

// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
// console.log(cariModus([5, 1, 5, 1, 1]));
// console.log(cariModus([2, 5, 2, 5, 5, 2, 2]));
// console.log(cariModus([1, 2, 2, 1]));
// console.log(cariModus([9, 2, 5, 2, 5]));
// console.log(cariModus([1, 2, 1, 2, 2]));
// console.log(cariModus([4, 4, 3, 4, 3, 3, 3]));
console.log(cariModus([4, 4, 4, 1, 2, 3, 1, 3, 1]));

//do not change the code below
module.exports = cariModus;
