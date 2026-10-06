// ============== 4 ===============

const nama = 'Mikael';
const peran = 'KSatria';
let result;

if (!nama) {
  result = 'Nama harus diisi!';
} else if (!peran) {
  result = `Halo ${nama}, Pilih peranmu untuk memulai game!`;
} else {
  result = `Selamat datang di Dunia Proxytia, ${nama} \n`;

  switch (peran.toLowerCase()) {
    case 'ksatria':
      result += `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`;
      break;
    case 'tabib':
      result += `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`;
      break;
    case 'penyihir':
      result += `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`;
      break;
    default:
      result += 'Tidak ada peran seperti itu!';
  }
}

console.log(result);

// let nama = 'Mikael';
// let peran = 'Penyihir';

// if (nama) {
//   if (!peran) {
//     console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
//   } else {
//     console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
//     switch (peran) {
//       case 'Ksatria':
//         console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
//         break;
//       case 'Tabib':
//         console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
//         break;
//       case 'Penyihir':
//         console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`);
//         break;
//       default:
//         console.log('Tidak ada peran seperti itu!');
//     }
//   }
// } else {
//   console.log('Nama harus diisi!');
// }
