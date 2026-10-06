/*
  Pseudocode
  ----------
  STORE nama AS STRING WITH ANY VALUE
  STORE umur AS NUMBER WITH ANY VALUE
  STORE uang AS NUMBER WITH ANY VALUE
  STORE tinggi AS NUMBER WITH ANY VALUE

  IF umur MORE THAN EQUAL 18
    IF uang MORE THAN EQUAL 50_000
      IF tinggi LESS THAN 166
        DISPLAY `Tinggi kamu kurang ${166 - tinggi}cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!`
      ELSE
        DISPLAY 'Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!'
      END IF
    ELSE
      IF tinggi LESS THAN 166
        DISPLAY `Tinggi kamu kurang ${166 - tinggi}cm dan kamu kurang uang sebanyak ${50_000 - uang} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`
      ELSE
        DISPLAY `Kamu kurang uang sebanyak ${50_000 - uang} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`
      END IF
    END IF
  ELSE
    DISPLAY `Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`
  END IF
*/

var nama = 'Fajrin';
var tinggi = 180;
var umur = 20;
var uang = 80000;

// write your code
if (umur < 18) {
  console.log(`Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`);
} else {
  const selisihUang = 50000 - uang;
  const selisihTinggi = 166 - tinggi;

  if (uang < 50000 && tinggi < 166) {
    console.log(
      `Tinggi kamu kurang ${selisihTinggi}cm dan kamu kurang uang sebanyak ${50000 - uang} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`,
    );
  } else if (uang < 50000) {
    console.log(
      `Kamu kurang uang sebanyak ${selisihUang} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`,
    );
  } else if (tinggi < 166) {
    console.log(
      `Tinggi kamu kurang ${selisihTinggi}cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!`,
    );
  } else {
    console.log('Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!');
  }
}

// if (umur >= 18) {
//   if (uang >= 50_000) {
//     if (tinggi < 166) {
//       console.log(`Tinggi kamu kurang ${166 - tinggi}cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!`);
//     } else { // tinggi >= 166
//       console.log('Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!');
//     }
//   } else { // uang < 50_000
//     if (tinggi < 166) {
//       console.log(`Tinggi kamu kurang ${166 - tinggi}cm dan kamu kurang uang sebanyak ${50_000 - uang} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`);
//     } else { // tinggi >= 166
//       console.log(`Kamu kurang uang sebanyak ${50_000 - uang} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`);
//     }
//   }
// } else {
//   console.log(`Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`);
// }
