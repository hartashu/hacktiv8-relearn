function getAnimals(arr) {
  const longest = {};

  for (const animal of arr) {
    let name = '';
    for (let i = 0; i < animal.length; i++) {
      const char = animal[i];
      if (char === ':') {
        const type = animal[i + 1];

        if (name.length > (longest[type]?.length ?? 0)) {
          longest[type] = name;
        }

        break;
      }
      name += char;
    }
  }

  const result = [longest.K, longest.H, longest.O];
  return result;
}

// 09:52 - 10:13

// function getAnimals(arr) {
//   // Write your code here

//   const result = [];

//   const karnivora = [];
//   const herbivora = [];
//   const omnivora = [];

//   for (let i = 0; i < arr.length; i++) {
//     let tempStr = '';

//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === ':') {
//         switch (arr[i][j + 1]) {
//           case 'K':
//             karnivora.push(tempStr);
//             tempStr = '';
//             break;
//           case 'H':
//             herbivora.push(tempStr);
//             tempStr = '';
//             break;
//           case 'O':
//             omnivora.push(tempStr);
//             tempStr = '';
//             break;
//         }
//       } else {
//         tempStr += arr[i][j];
//       }
//     }
//   }

//   let theLongest = karnivora[0];
//   for (let i = 1; i < karnivora.length; i++) {
//     if (karnivora[i].length > theLongest.length) {
//       theLongest = karnivora[i];
//     }
//   }
//   result.push(theLongest);

//   theLongest = herbivora[0];
//   for (let i = 1; i < herbivora.length; i++) {
//     if (herbivora[i].length > theLongest.length) {
//       theLongest = herbivora[i];
//     }
//   }
//   result.push(theLongest);

//   theLongest = omnivora[0];
//   for (let i = 1; i < omnivora.length; i++) {
//     if (omnivora[i].length > theLongest.length) {
//       theLongest = omnivora[i];
//     }
//   }
//   result.push(theLongest);

//   return result;

//   // console.log(karnivora);
//   // console.log(herbivora);
//   // console.log(omnivora);

// }

//Test Case

console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']));
// [ 'Singa','Kuda','Monyet' ]

console.log(
  getAnimals([
    'Macan:K',
    'Ayam:O',
    'Gajah:H',
    'Monyet:O',
    'Kerbau:H',
    'Musang:O',
    'Burung:H',
    'Hiu:K',
  ]),
);
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(
  getAnimals([
    'Tikus:O',
    'Merpati:H',
    'Beruang:O',
    'Elang:K',
    'Perkutut:H',
    'Harimau:K',
  ]),
);
// [ 'Harimau', 'Perkutut', 'Beruang' ]
