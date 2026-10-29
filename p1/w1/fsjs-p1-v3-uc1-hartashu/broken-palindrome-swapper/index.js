/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * m a k a n
 * a m k a n
 * m k a a n
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */

// function palindromeSwapper(str) {
//   let newStr = '';
//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < str.length; i++) {
//       if (i === j) {
//         newStr += str[j++]; //j0
//         newStr += str[j];   //j1
//         console.log(newStr, j);
//         j++;                //j2
//       } else {
//         newStr += str[j];
//       }
//     }
//     if (isPalindrome(newStr)) return true;
//   }
//   return false;
// }

function palindromeSwapper(str) {
  if (isPalindrome(str)) return true;

  for (let left = 0; left < str.length - 1; left++) {
    const arr = str.split('');
    const right = left + 1;
    [arr[left], arr[right]] = [arr[right], arr[left]];

    if (isPalindrome(arr.join(''))) return true;
  }

  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
// function isPalindrome(str) {
//   console.log(str);
//   if (str.split('').reverse().join() === str) return true;
//   return false;
// }

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

console.log(palindromeSwapper('arcecar')); // true
console.log(palindromeSwapper('racecar')); // true
console.log(palindromeSwapper('recacar')); // false
console.log(palindromeSwapper('icvic')); // true
console.log(palindromeSwapper('makan')); // false
