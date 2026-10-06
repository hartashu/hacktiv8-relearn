/*
Untuk soal nomor 2, dilarang menjalankan kode di code editor. Kalian hanya boleh membaca dan menganalisa apa output dari sintaks berikut

function groupingAnimals(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i][0]] === undefined) {
            result[arr[i][0]] = [];
        }
        result[arr[i][0]].push(arr[i]);
    }
}

let animals = ['kambing', 'ayam', 'badak', 'kucing', 'angsa', 'kuda', 'bebek'];
console.log(groupingAnimals(animals));
*/

// Jawaban :

/*
    undefined

    Alasan:
    Karena function balikin undefined apabila tidak ada return

    Apabila return result di function nya, maka output nya:
    {
        k: ['kambing', 'kucing', 'kuda'],
        a: ['ayam', 'angsa'],
        b: ['badak', 'bebek']
    }

*/

function groupAnimals(arr) {
  if (!Array.isArray(arr) || !arr.length) return [];

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const result = [];

  for (let i = 0; i < alphabet.length; i++) {
    const grouping = [];

    for (const animal of arr) {
      const firstLetter = animal[0];
      if (firstLetter === alphabet[i]) {
        grouping.push(animal);
      }
    }

    if (grouping.length) {
      result.push(grouping);
    }
  }

  return result;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['kambing', 'ayam', 'bebek', 'angsa']));
// [ ['ayam', 'angsa'], ['bebek'], ['kambing'] ]

console.log(groupAnimals([]));
// []
