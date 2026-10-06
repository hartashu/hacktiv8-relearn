// TASK 1
function shoutOut() {
  // you can only write your code here!
  return 'Halo Function!';
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console


// TASK 2
function calculateMultiply(num1, num2) {
  // you can only write your code here!
  return num1 * num2;
}

let hasilPerkalian = calculateMultiply(5, 6);
console.log(hasilPerkalian);



// TASK 3
function processSentence(name, age, address, hobby) {
  // you can only write your code here!
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let fullSentence = processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming");
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"








// do not change this code
module.exports =  { shoutOut, calculateMultiply, processSentence }


