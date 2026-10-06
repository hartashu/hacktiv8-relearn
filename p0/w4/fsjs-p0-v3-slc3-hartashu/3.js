//database penyakit yang ada di rumah sakit tersebut.
const db_penyakit = {
  flu: {
    ciri: [
      'lemas',
      'sesak nafas',
      'ngilu',
      'tidak enak badan',
      'mual',
      'diare',
      'demam',
      'nyeri otot',
      'batuk kering',
      'gangguan pernafasan akut',
      'cairan di paru-paru',
      'sakit bagian abdominal',
      'tidak nafsu makan',
    ],
    obat: [
      ['kunyit', 10000],
      ['jahe merah', 5000],
      ['jahe kuning', 4000],
    ],
    konsultasi: 1000000,
  },
  antrax: {
    ciri: [
      'Sakit tenggorokan',
      'sulit bernafas',
      'demam',
      'tidak nyaman di dada',
      'nyeri otot',
      'nyeri saat menelan',
      'mual',
      'batuk darah',
      'lemas',
    ],
    obat: [
      ['ciprofloxacin', 45000],
      ['doxycycline', 20000],
      ['penicilin', 35000],
    ],
    konsultasi: 50000,
  },
};

function cariPenyakit(pasien, database) {
  // Your code here
  let totalCiriFlu = 0;
  let totalCiriAntrax = 0;
  const { keluhan } = pasien;

  for (const k of keluhan) {
    for (const c of database.flu.ciri) {
      if (c === k) {
        totalCiriFlu++;
        break;
      }
    }

    for (const c of database.antrax.ciri) {
      if (c === k) {
        totalCiriAntrax++;
        break;
      }
    }
  }

  if (totalCiriAntrax === totalCiriFlu) {
    return 'ambigu';
  }

  return totalCiriFlu > totalCiriAntrax ? 'flu' : 'antrax';
}

function cariObat(penyakit, database) {
  // Your code here
  if (penyakit === 'ambigu') return 'tidak ada obat';

  let obatTermurah;
  let hargaTermurah = Infinity;

  for (const [obat, harga] of database[penyakit].obat) {
    if (harga < hargaTermurah) {
      hargaTermurah = harga;
      obatTermurah = obat;
    }
  }

  return [obatTermurah, hargaTermurah];
}

function cariHargaKonsultasi(penyakit, database) {
  // Your code here
  if (penyakit === 'ambigu') return 'tidak perlu dokter';

  return database[penyakit].konsultasi;
}

function diagnosaSemuaPasien(list_pasien, database) {
  // Your code here
  const result = {};

  for (const pasien of list_pasien) {
    const penyakit = cariPenyakit(pasien, database);
    result[penyakit] ??= [];

    const { nama } = pasien;
    let obat;
    let biaya;

    if (penyakit === 'ambigu') {
      obat = cariObat(penyakit, database);
      biaya = 'tidak ada biaya';
    } else {
      const obatTermurah = cariObat(penyakit, database);
      obat = obatTermurah[0];
      biaya = cariHargaKonsultasi(penyakit, database) + obatTermurah[1];
    }

    result[penyakit].push({
      nama,
      obat,
      biaya,
    });
  }

  return result;
}

// function cariPenyakit(pasien, database) {
//   // Your code here

//   let penyakit;

//   const ciriFlu = database.flu.ciri;
//   const ciriAntrax = database.antrax.ciri;
//   let jumlahCiriFlu = 0;
//   let jumlahCiriAntrax = 0;

//   const keluhan = pasien.keluhan;

//   for (const satuanKeluhan of keluhan) {
//     for (const satuanCiriFlu of ciriFlu) {
//       if (satuanKeluhan === satuanCiriFlu) {
//         jumlahCiriFlu++;
//       }
//     }

//     for (const satuanCiriAntrax of ciriAntrax) {
//       if (satuanKeluhan === satuanCiriAntrax) {
//         jumlahCiriAntrax++;
//       }
//     }
//   }

//   if (jumlahCiriFlu > jumlahCiriAntrax) penyakit = 'flu';
//   else if (jumlahCiriAntrax > jumlahCiriFlu) penyakit = 'antrax';
//   else penyakit = 'ambigu';

//   return penyakit;
// }

// function cariObat(penyakit, database) {
//   // Your code here

//   if (penyakit === 'ambigu') return 'tidak ada obat';

//   const dbObat = database[penyakit].obat;
//   let termurah = dbObat[0];

//   for (const satuanObat of dbObat) {
//     if (satuanObat[1] < termurah[1]) {
//       termurah = satuanObat;
//     }
//   }

//   return termurah;
// }

// function cariHargaKonsultasi(penyakit, database) {
//   // Your code here
//   if (penyakit === 'ambigu') return 'tidak perlu dokter';

//   return database[penyakit].konsultasi;
// }

// function diagnosaSemuaPasien(list_pasien, database) {
//   // Your code here

//   const result = {};

//   for (const pasien of list_pasien) {
//     const { nama, keluhan } = pasien;

//     const penyakit = cariPenyakit(pasien, database);

//     let obat;
//     let biaya;
//     if (penyakit === 'ambigu') {
//       obat = cariObat(penyakit, database);
//       biaya = 'tidak ada biaya';
//     } else {
//       obat = cariObat(penyakit, database)[0];
//       biaya = cariHargaKonsultasi(penyakit, database) + cariObat(penyakit, database)[1]
//     }

//     const newObject = {
//       nama,
//       obat,
//       biaya
//     };

//     if (result[penyakit] === undefined) {
//       result[penyakit] = [];
//       result[penyakit].push(newObject);
//     } else {
//       result[penyakit].push(newObject);
//     }
//   }

//   return result;
// }

//Test case

console.log(
  diagnosaSemuaPasien(
    [
      {
        nama: 'heri wahyudianto',
        keluhan: ['mata berair', 'berkunang kunang'],
      },
      {
        nama: 'joker',
        keluhan: ['nyeri otot', 'lemas', 'mual', 'batuk kering'],
      },
      {
        nama: 'thanos',
        keluhan: ['sulit bernafas', 'lemas', 'demam', 'batuk darah'],
      },
      {
        nama: 'bad boy',
        keluhan: ['cairan di paru-paru', 'sakit bagian abdominal'],
      },
    ],
    db_penyakit,
  ),
);

/*
  {
      ambigu : [
          {
              nama: 'heri wahyudianto',
              obat: 'tidak ada obat',
              biaya: 'tidak ada biaya'
            }
      ],
      flu : [
          {
              nama: 'joker',
              obat: 'jahe kuning',
              biaya: 1004000
            },
            {
              nama: 'bad boy',
              obat: 'jahe kuning',
              biaya: 1004000
            }
      ],
      antrax : [
          {
              nama: 'thanos',
              obat: 'doxycycline',
              biaya: 70000
            }
      ]
  }
  */

console.log(
  diagnosaSemuaPasien(
    [
      {
        nama: 'andi',
        keluhan: ['batuk kering', 'demam', 'batuk darah'],
      },
      {
        nama: 'budi',
        keluhan: ['tidak nyaman di dada', 'lemas', 'nyeri saat menelan'],
      },
      {
        nama: 'charlie',
        keluhan: ['lemas', 'demam'],
      },
      {
        nama: 'delta',
        keluhan: ['Sakit tenggorokan', 'tidak nyaman di dada', 'ngilu'],
      },
      {
        nama: 'echo',
        keluhan: ['tidak enak badan', 'nyeri otot', 'sulit bernafas'],
      },
    ],
    db_penyakit,
  ),
);
/*
  {
    ambigu: [
      { nama: 'andi', obat: 'tidak ada obat', biaya: 'tidak ada biaya' },
      {
        nama: 'charlie',
        obat: 'tidak ada obat',
        biaya: 'tidak ada biaya'
      },
      { nama: 'echo', obat: 'tidak ada obat', biaya: 'tidak ada biaya' }
    ],
    antrax: [
      { nama: 'budi', obat: 'doxycycline', biaya: 70000 },
      { nama: 'delta', obat: 'doxycycline', biaya: 70000 }
    ]
  }
  */

module.exports = {
  cariPenyakit,
  cariObat,
  cariHargaKonsultasi,
  diagnosaSemuaPasien,
};
