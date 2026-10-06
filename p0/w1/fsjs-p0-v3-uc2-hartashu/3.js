var detik = 231;

console.log(
  `${Math.floor(detik / 60)}:${detik % 60 < 10 ? '0' : ''}${detik % 60}`,
);

// // code here
// let detik2 = detik % 60;
// let menit = (detik - detik2) / 60;

// console.log(`${menit}:${detik2 < 10 ? '0' : ''}${detik2}`);
