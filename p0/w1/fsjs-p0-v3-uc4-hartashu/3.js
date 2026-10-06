let kalimat = 'I havE 8 & a dream';
let totalKata = 0;
let hasAlphabet = false;

for (const huruf of kalimat) {
  const isAlphabet =
    (huruf >= 'a' && huruf <= 'z') || (huruf >= 'A' && huruf <= 'Z');

  if (huruf === ' ') {
    if (hasAlphabet) {
      totalKata++;
      hasAlphabet = false;
    }
  } else {
    if (isAlphabet) {
      hasAlphabet = true;
    }
  }
}

if (hasAlphabet) totalKata++;

console.log(totalKata);

// let kalimat = '    ';

// // code here

// let nWord = 0;

// for (let i = 0; i < kalimat.length; i++) {
//   if (
//     kalimat[i - 1] !== ' ' &&
//     kalimat[i - 1] !== undefined &&
//     kalimat[i] === ' ' &&
//     kalimat[i + 1] !== ' ' &&
//     kalimat[i + 1] !== undefined
//   ) {
//         nWord++;
//   }

//   if (i === kalimat.length - 1 && kalimat[i - 1] !== ' ') {
//     nWord++;
//   }
// }

// console.log(nWord);
