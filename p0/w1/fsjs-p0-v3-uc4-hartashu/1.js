let kata = 'makan';
let isPalindrome = true;

for (let left = 0; left < kata.length / 2; left++) {
  const right = kata.length - 1 - left;
  if (kata[left] !== kata[right]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);

// let kata = 'data';
// // code here

// // let kataReverse = '';

// // for (let i = kata.length - 1; i >= 0; i--) {
// //   kataReverse += kata[i];
// // }

// // if (kata === kataReverse) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// let i = 0;
// let iBackward = kata.length - 1;

// while (i < iBackward) {
//   if (kata[i] !== kata[iBackward]) {
//     break;
//   }

//   i++;
//   iBackward--;
// }

// if (i >= iBackward) {
//   console.log(true);
// } else {
//   console.log(false);
// }
