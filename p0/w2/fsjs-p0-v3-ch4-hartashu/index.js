// Cara dengan built-in function
function startUpCompetition(startUpList) {
  if (!Array.isArray(startUpList) || startUpList.length === 0) {
    return 'Invalid Data';
  }

  const result = [];

  for (let startUp of startUpList) {
    const [name, valStr, sector] = startUp.split('-');

    const val = Number(valStr);

    if (val >= 14) {
      let sectorFull = '';

      if (sector === 'E') {
        sectorFull = 'Ecommerce';
      } else if (sector === 'T') {
        sectorFull = 'Technology';
      } else if (sector === 'H') {
        sectorFull = 'Healthcare';
      } else {
        sectorFull = 'Agrotech';
      }

      result.push([name, val, sectorFull]);
    }
  }

  return result;
}

// Cara tanpa built-in function
// function startUpCompetition(startUpList) {
//   if (!Array.isArray(startUpList) || startUpList.length === 0) {
//     return 'Invalid Data';
//   }

//   const result = [];

//   for (let startUp of startUpList) {
//     let name = '';
//     let valStr = '';
//     let sector = '';
//     let part = 0;

//     for (const char of startUp) {
//       if (char === '-') {
//         part++;
//       } else if (part === 0) {
//         name += char;
//       } else if (part === 1) {
//         valStr += char;
//       } else if (part === 2) {
//         sector += char;
//       }
//     }

//     const val = Number(valStr);

//     if (val >= 14) {
//       let sectorFull = '';

//       if (sector === 'E') {
//         sectorFull = 'Ecommerce';
//       } else if (sector === 'T') {
//         sectorFull = 'Technology';
//       } else if (sector === 'H') {
//         sectorFull = 'Healthcare';
//       } else {
//         sectorFull = 'Agrotech';
//       }

//       result.push([name, val, sectorFull]);
//     }
//   }

//   return result;
// }

// function startUpCompetition(startUpList) {
//   // Write your code here

//   if (!startUpList || !startUpList.length) return 'Invalid Data';

//   const startUps = [];

//   for (let i = 0; i < startUpList.length; i++) {
//     let startUp = startUpList[i];
//     let temp = '';
//     let startUpRow = [];

//     for (let j = 0; j < startUp.length; j++) {

//       if (startUp[j] === '-') {
//         startUpRow.push(temp);
//         temp = '';
//       } else { // if huruf
//         temp += startUp[j];
//       }

//       if (j === startUp.length - 1) {
//         switch (startUp[j]) {
//           case 'E':
//             startUpRow.push('Ecommerce');
//             break;
//           case 'T':
//             startUpRow.push('Technology');
//             break;
//           case 'H':
//             startUpRow.push('Healthcare');
//             break;
//           case 'A':
//             startUpRow.push('Agrotech');
//             break;
//         }
//       }
//     }

//     if (Number(startUpRow[1]) >= 14) {
//       startUpRow[1] = Number(startUpRow[1]);
//       startUps.push(startUpRow);
//     }
//   }

//   return startUps;
// }

console.log(startUpCompetition());
// 'Invalid Data'

console.log(startUpCompetition([]));
// Invalid Data

let indonesia = [
  'Tikipidia-17-E',
  'Bikilipik-08-E',
  'Bhinniki-07-E',
  'BleBle.cim-15-E',
  'Triviliki-16-T',
  'Tikit.cim-12-T',
  'Hilidic-15-H',
  'Siyirbix-17-A',
  'TikingSiyir.ci-16-A',
];

console.log(startUpCompetition(indonesia));
// [
//   [ 'Tikipidia', 17, 'Ecommerce' ],
//   [ 'BleBle.cim', 15, 'Ecommerce' ],
//   [ 'Triviliki', 16, 'Technology' ],
//   [ 'Hilidic', 15, 'Healthcare' ],
//   [ 'Siyirbix', 17, 'Agrotech' ],
//   [ 'TikingSiyir.ci', 16, 'Agrotech' ]
// ]

let singapore = [
  'Shipee-18-E',
  'Lizidi-19-E',
  'HalalTrip-07-T',
  'verylocaltrip.com-12-T',
  'Doctor Anywhere-14-H',
  'Healint-13-H',
  'SINGROW-19-A',
  'Simplyfresh-09-A',
  'eFeedLink-18-A',
];
console.log(startUpCompetition(singapore));
// [
//   [ 'Shipee', 18, 'Ecommerce' ],
//   [ 'Lizidi', 19, 'Ecommerce' ],
//   [ 'Doctor Anywhere', 14, 'Healthcare' ],
//   [ 'SINGROW', 19, 'Agrotech' ],
//   [ 'eFeedLink', 18, 'Agrotech' ],
// ]

let malaysia = ['Dropee-17-E', 'BookDoc-18-H', 'dahmakan-19-A'];
console.log(startUpCompetition(malaysia));
// [
//   [ 'Dropee', 17, 'Ecommerce' ],
//   [ 'BookDoc', 18, 'Healthcare' ],
//   [ 'dahmakan', 19, 'Agrotech' ],
// ]

module.exports = startUpCompetition;
