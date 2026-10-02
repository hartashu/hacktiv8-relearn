/**
 * Buatlah sebuah object dari hewan, yang memiliki beberapa properti
 * - Nama hewan
 * - Habitat hewan
 * - Jumlah kaki hewan
 * - Jenis kelamin dari hewan
 *
 * Setelah membuat object seperti diatas jawablah pertanyaan dibawah ini
 * - Bagaimana cara mendapatkan nama hewan (console.log nama hewan yang dibuat
 * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan. contoh: menambahkan tipe hewan ( unggas, burung, dll)
 * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
 * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
 * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
 *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
 *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
 */

const dog = {
  name: 'shiro',
  habitat: 'darat',
  legs: 4,
  sex: 'male',
};

// console.log property name dari object dog
// console.log(`Nama hewan: ${dog.name}`);
console.log(`Nama hewan: ${dog['name']}`);

// add new property (type) untuk object dog
// dog.type = 'mammal';
dog['type'] = 'mammal';

// add new property with type of array
// dog.hobbies = ['eat', 'sleep', 'play'];
dog['hobbies'] = ['eat', 'sleep', 'play'];
// dog.children = ['child1', 'child2', 'child3'];
dog['children'] = ['child1', 'child2', 'child3'];

// delete a property
// delete dog.habitat;
delete dog['habitat'];

// add new property with type of object
// dog.vet = {
//   name: 'Dr. Guguk',
//   address: "Indonesia",
//   since: 1900
// };
dog['vet'] = {
  name: 'Dr. Guguk',
  address: 'Indonesia',
  since: 1900,
};

// loop object
for (const key in dog) {
  console.log(key, dog[key], `${dog[key]}`);
}

// built-in method
console.log(Object.hasOwn(dog, 'habitat'));
console.log(dog.hasOwnProperty('habitat'));
console.log(Object.keys(dog));
console.log(Object.values(dog));

// let test = ['a', 'b', 'c'];

// console.log(`Nilai test: ${test}`);

for (const key in dog) {
  console.log(key, dog[key], `${dog[key]}`);
}
