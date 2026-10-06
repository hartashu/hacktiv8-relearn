const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari ke-3 angka diatas dan sesuaikan kebutuhan parameternya

// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 189

// Langsung return value
// function getMax(number1, number2, number3) {
//   if (number2 > number1 && number2 > number3) {
//     return number2;
//   } else if (number3 > number1 && number3 > number2) {
//     return number3;
//   }

//   return number1;
// }

// Tampung ke variable dulu, dan return variable nya
/*
function getMax(number1, number2, number3) {
  let max = number1;

  if (number2 > number1 && number2 > number3) {
    max = number2;
  } else if (number3 > number1 && number3 > number2) {
    max = number3;
  }

  return max;
}
*/

function getMax(...number) {
  let max = -Infinity;

  for (const num of number) {
    if (num > max) max = num;
  }

  return max;
}

console.log(`Nilai maksimum adalah ${getMax(number1, number2, number3)}`);
