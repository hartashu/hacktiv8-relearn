/**
 * Instruksi
 *
 * ==========
 * Fix Data
 * ==========
 *
 * Diberikan sebuah string `line`. Isi dari string ini adalah sebuah gabungan dari sembarang
 * karakter. Tugas kamu adalah mengubah karakter yang merupakan virus menjadi konsonan atau vokal sesuai dengan
 * requirement berikut:
 *
 * 1. Jika di dalam 'line' jumlah karakter konsonan lebih banyak dari jumlah karakter vokal, maka ubahlah
 *    semua karakter yang merupakan virus menjadi 'a'.
 * 2. Jika di dalam 'line' jumlah karakter vokal lebih banyak dari jumlah karakter konsonan, maka ubah
 *    semua karakter yang merupakan virus menjadi 'b'.
 * 3. Jika di dalam 'line' jumlah karakter vokal dan konsonan sama, maka hilangkan virusnya jika terdapat virus di dalamnya.
 * 4. Jika tidak ada virus sama sekali, maka line tidak perlu diubah.
 * 5. Program akan menampilkan 'line' yang telah diubah sesuai dengan requirement diatas
 *
 * Berikut ini adalah contoh karakter vokal dan konsonan.
 * Vokal = a i u e o
 * Virus = #
 * Konsonan = selain Vokal & Virus
 *
 * Ketentuan:
 * -Diberikan variable 'line'
 * -TIDAK BOLEH menggunakan built-in function!
 *
 *
 * contoh 1:
 *
 * let line = 'abc#ab#ueo'
 *
 * maka output yang diharapkan adalah:
 * 'abcbabbueo'
 * karena jumlah vokal adalah 5, jumlah konsonan adalah 3. Lalu, untuk kedua virus
 * yang ditemukan, maka semua karakter virus diubah menjadi 'b'.
 *
 *
 * contoh 2:
 *
 *
 * let line = 'abcabdueobbb'
 *
 * Karena tidak terdapat virus, maka output yang diharapkan adalah
 * 'abcabdueobbb'
 *
 * contoh 3:
 *
 * let line = 'bcd#aiu'
 * karena jumlah konsonan dan vokal seimbang, maka output yang diharapkan adalah:
 * 'bcdaiu'
 *
 *
 *
 */

let line = 'abc#ab#ueo'; //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya

const vokal = 'aiueo';
const virus = '#';
let totalVokal = 0;
let totalKonsonan = 0;
let totalVirus = 0;
let result = '';

for (const huruf of line) {
  let isVokal = false;

  if (huruf === virus) {
    totalVirus++;
    continue;
  }

  for (const hurufVokal of vokal) {
    if (huruf === hurufVokal) {
      isVokal = true;
      break;
    }
  }

  isVokal ? totalVokal++ : totalKonsonan++;
}

if (!totalVirus) {
  result = line;
} else {
  let replacement = '';

  if (totalVokal > totalKonsonan) {
    replacement = 'b';
  } else if (totalVokal < totalKonsonan) {
    replacement = 'a';
  }

  for (const huruf of line) {
    if (huruf === virus) result += replacement;
    else result += huruf;
  }
}

console.log(result);

// let virus = '#';
// let totalVocal = 0;
// let totalConsonant = 0;
// let totalVirus = 0;
// let result = '';

// for (let i = 0; i < line.length; i++) {
//   if (
//     line[i] === 'a' ||
//     line[i] === 'i' ||
//     line[i] === 'u' ||
//     line[i] === 'e' ||
//     line[i] === 'o'
//   ) {
//     totalVocal++;
//   } else if (line[i] === virus) {
//     totalVirus++;
//   } else {
//     totalConsonant++;
//   }
// }

// if (totalVirus === 0) {
//   result = line;
// } else if (totalVocal === totalConsonant) {
//   for (let i = 0; i < line.length; i++) {
//     if (line[i] === virus) {
//       continue;
//     }

//     result += line[i];
//   }
// } else if (totalVocal > totalConsonant) {
//   for (let i = 0; i < line.length; i++) {
//     if (line[i] === virus) {
//       result += 'b';
//       continue;
//     }

//     result += line[i];
//   }
// } else if (totalVocal < totalConsonant) {
//   for (let i = 0; i < line.length; i++) {
//     if (line[i] === virus) {
//       result += 'a';
//       continue;
//     }

//     result += line[i];
//   }
// }

// console.log(`Total vocal: ${totalVocal}`);
// console.log(`Total consonant: ${totalConsonant}`);
// console.log(`Total virus: ${totalVirus}`);

// console.log(result);
