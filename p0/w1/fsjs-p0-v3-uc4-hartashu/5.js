let angka = 175;

while (true) {
  angka++;
  let isPalindrome = true;
  const angkaString = String(angka);

  for (let left = 0; left < angkaString.length / 2; left++) {
    const right = angkaString.length - 1 - left;
    if (angkaString[left] !== angkaString[right]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) break;
}

console.log(angka);

// let angka = 10819230819283;
// // code here

// let isFound = false;

// while (!isFound) {
//   angka++;
//   let angkaInString = String(angka);

//   let i = 0;
//   let iBackward = angkaInString.length - 1;

//   while (i < iBackward) {
//     if (angkaInString[i] !== angkaInString[iBackward]) {
//       break;
//     }

//     i++;
//     iBackward--;
//   }

//   if (i >= iBackward) {
//     isFound = true;
//     break;
//   }
// }

// console.log(angka);
