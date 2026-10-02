//Cara kamus
// function urutkanAbjad(str) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let result = '';

//   for (const targetChar of alphabet) {
//     for (const char of str) {
//       if (char === targetChar) {
//         result += char;
//       }
//     }
//   }

//   return result;
// }

//Cara bubble sort
function urutkanAbjad(str) {
  const chars = [];

  for (const char of str) {
    chars.push(char);
  }

  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = 0; j < chars.length - 1 - i; j++) {
      if (chars[j] > chars[j + 1]) {
        const temp = chars[j];
        chars[j] = chars[j + 1];
        chars[j + 1] = temp;
      }
    }
  }

  let result = '';
  for (const char of chars) {
    result += char;
  }

  return result;
}

// function changeStringToArray(str) {
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }

//   return arr;
// }

// function sortArrayAscending(arr) {
//   let newArray = [...arr];

//   for (let i = 0; i < newArray.length; i++) {
//     for (let j = i + 1; j < newArray.length; j++) {
//       let temp = '';
//       if (newArray[i] > newArray[j]) {
//         temp = newArray[i];
//         newArray[i] = newArray[j];
//         newArray[j] = temp;
//       }
//     }
//   }

//   return newArray;
// }

// function changeArrayToString(arr) {
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
//   }

//   return str;
// }

// function urutkanAbjad(str) {
//   // you can only write your code here!

//   let arr = [];
//   let newStr = '';

//   arr = changeStringToArray(str);
//   arr = sortArrayAscending(arr);
//   newStr = changeArrayToString(arr);

//   return newStr;
// }

// TEST CASES

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

//do not change the code below
module.exports = urutkanAbjad;
