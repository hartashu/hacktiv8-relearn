let animals = [
  'kambing',
  'ayam',
  'ayam',
  'kambing',
  'ayam',
  'ayam',
  'kambing',
  'Ayam',
];

// buatlah sebuah fungsi dengan nama countAnimals yang akan mengembalikan sebuah objek berisikan key value yang dinamis yang tiap valuenya berisi jumlah dari tiap-tiap hewan yang berada di dalam array

/*
output:
{ kambing: 3, ayam: 4, Ayam: 1 }
*/

// function countAnimals(animals) {
//   const result = {};

//   for (let i = 0; i < animals.length; i++) {
//     if (result[animals[i]] === undefined) {
//       result[animals[i]] = 0;
//     }

//     result[animals[i]]++;
//   }

//   return result;
// }

function countAnimals(animals) {
  if (!Array.isArray(animals) || !animals.length) return {};

  const result = {};

  for (const animal of animals) {
    result[animal] = (result[animal] ?? 0) + 1;
  }

  return result;
}

console.log(countAnimals(animals));
