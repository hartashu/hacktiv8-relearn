const kata = 'i love javascript';
const vokal = 'aiueoAIUEO';
let result = '';

// for (const huruf of kata) {
//   result += vokal.includes(huruf) ? '$' : huruf;
// }

for (const huruf of kata) {
  let charToAdd = huruf;
  for (const hurufVokal of vokal) {
    if (huruf === hurufVokal) {
      charToAdd = '$';
      break;
    }
  }
  result += charToAdd;
}

console.log(result);

// var kata = "I love Javascript";

// // code here

// let result = '';

// for (let i = 0; i < kata.length; i++) {
//   if (
//     kata[i] === 'a' ||
//     kata[i] === 'i' ||
//     kata[i] === 'u' ||
//     kata[i] === 'e' ||
//     kata[i] === 'o'
//   ) {
//     result += '$';
//   } else {
//     result += kata[i];
//   }
// }

// console.log(result);
