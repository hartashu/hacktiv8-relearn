const numbers = [1, 4, 2, 1, 51, 67, 8, 32, 21, 65];
// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari kumpulan angka diatas dan sesuaikan kebutuhan parameternya


// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 67

function getMax(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(`Nilai maksimum adalah ${getMax(numbers)}`);
