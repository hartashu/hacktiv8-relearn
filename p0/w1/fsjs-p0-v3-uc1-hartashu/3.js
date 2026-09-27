var nama = "Jennie";
var nilai = 70;

// code here

if (nilai < 0 || nilai > 100) {
  console.log('Nilai Invalid');
} else {
  let score;
  let result;

  if (nilai >= 80 && nilai <=100) {
    score = 'A';
  } else if (nilai >= 65 && nilai <= 79) {
    score = 'B';
  } else if (nilai >= 50 && nilai <= 64) {
    score = 'C';
  } else if (nilai >= 35 && nilai <= 49) {
    score = 'D';
  } else if (nilai >= 0 && nilai <= 34){
    score = 'E';
  }

  result = `nama: ${nama}; score: ${score}`;
  console.log(result);
}