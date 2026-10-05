function convertSymbol(arr) {
  if (!Array.isArray(arr) || !arr.length) return [];

  const syms = ')!@#$%^&*(';
  const result = [];

  for (const symbols of arr) {
    let numStr = '';
    for (const char of symbols) {
      const digit = syms.indexOf(char);
      if (digit !== -1) {
        numStr += digit;
      }
    }
    result.push(Number(numStr));
  }

  return result;
}

function decrementOdd(arr) {
  if (!Array.isArray(arr) || !arr.length) return [];

  const result = [];

  for (const num of arr) {
    result.push(num % 2 !== 0 ? num - arr.length : num);
  }

  return result;
}

function splitNumber(arr) {
  if (!Array.isArray(arr) || !arr.length) return [];

  const result = [];
  let row = [];

  for (const num of arr) {
    if (num > 26) {
      if (row.length) {
        result.push(row);
        row = [];
      }
      continue;
    }

    row.push(num);
  }

  if (row.length) {
    result.push(row);
  }

  return result;
}

function convertNumber(arr) {
  if (!Array.isArray(arr) || !arr.length) return '';

  let result = '';

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result += String.fromCharCode(arr[i][j] + 96);
    }
    if (i !== arr.length - 1) result += ' ';
  }

  return result;
}

function result(arr) {
  if (!Array.isArray(arr) || !arr.length) return '';

  const convertedSymbol = convertSymbol(arr);
  const decremented = decrementOdd(convertedSymbol);
  const splitted = splitNumber(decremented);
  const convertedNumber = convertNumber(splitted);

  return convertedNumber;
}

// Cara 1
/*
function convertSymbol(arr) {
  // code here

  const symbol = ')!@#$%^&*(';
  //              0123456789

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = '';
    for (let j = 0; j < symbol.length; j++) {
      if (arr[i][0] === symbol[j]) {
        temp += j;
      }
    }

    for (let j = 0; j < symbol.length; j++) {
      if (arr[i][1] === symbol[j]) {
        temp += j;
      }
    }

    temp = Number(temp);
    result.push(temp);
  }

  return result;
}
*/

// Cara 2
// function convertSymbol(arr) {
//   // code here

//   const symbol = ')!@#$%^&*(';
//   //              0123456789

//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let temp = '';
//     for (let j = 0; j < arr[i].length; j++) {
//       for (let k = 0; k < symbol.length; k++) {
//         if (arr[i][j] === symbol[k]) {
//           temp += k;
//         }
//       }
//     }
//     temp = Number(temp);
//     result.push(temp);
//   }

//   return result;
// }

// // console.log(convertSymbol(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']));

// function decrementOdd(arr) {
//   // code here

//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i] - arr.length);
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// // console.log(decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]));

// function splitNumber(arr) {
//   // code here

//   const result = [];
//   let row = [];

//   for (let i = 0; i < arr.length + 1; i++) {
//     if (arr[i] > 26 || arr[i] === undefined) {
//       result.push(row);
//       row = [];
//       continue;
//     }

//     row.push(arr[i]);
//   }

//   return result;
// }

// // console.log(splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]));

// function convertNumber(arr) {
//   // code here

//   const alphabets = 'abcdefghijklmnopqrstuvwxyz';

//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       let indexAlphabets = arr[i][j] - 1;
//       str += alphabets[indexAlphabets];
//     }

//     if (i !== arr.length - 1) {
//       str += ' ';
//     }
//   }

//   return str;
// }

// // console.log(convertNumber([[9], [12, 15, 22, 5], [25, 15, 21]]));

// function result(arr) {
//   // code here

//   let str;
//   let fromConvertSymbol;
//   let fromDecrementOdd;
//   let fromSplitNumber;

//   fromConvertSymbol = convertSymbol(arr);
//   fromDecrementOdd = decrementOdd(fromConvertSymbol);
//   fromSplitNumber = splitNumber(fromDecrementOdd);
//   str = convertNumber(fromSplitNumber);

//   return str;
// }

console.log(
  result([
    '!@',
    '!&',
    '@)',
    '#!',
    '&#',
    '!(',
    '@&',
    '%%',
    '!(',
    '##',
    '#&',
    '@^',
  ]), // lets go guyz
);
console.log(
  result(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!']), // i love you
);

console.log(
  result([
    '!%',
    '@&',
    '$',
    '!&',
    '$#',
    '*',
    '!#',
    '!%',
    '@#',
    '@)',
    '@!',
    '@@',
  ]), // code hacktiv
);

module.exports = {
  convertSymbol,
  decrementOdd,
  splitNumber,
  convertNumber,
  result,
};
