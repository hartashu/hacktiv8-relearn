// insert your code here
console.log('========== 1 ==========');
for (let i = 1; i <= 100; i += 3) {
  // if (i % 2 === 0) {
  //   console.log(`${i} - genap`);
  // } else {
  //   console.log(`${i} - ganjil`);
  // }

  console.log(`${i} - ${i % 2 ? 'genap' : 'ganjil'}`);
}

console.log('========== 2 ==========');
for (let i = 50; i <= 200; i += 5) {
  if (i % 3 === 0) {
    console.log(`${i} - faktor 3`);
  } else {
    console.log(`${i} - tidak bisa dibagi 3`);
  }
}

console.log('========== 3 ==========');
for (let i = 100; i <= 200; i += 7) {
  if (i % 8 === 0) {
    console.log(i);
  }
}
