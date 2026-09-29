function ganjilGenap(plat) {
  if (plat === undefined) return 'invalid data';
  if (plat === '') return 'plat tidak ditemukan';

  const formattedPlat = plat + ';';

  let totalGanjil = 0;
  let totalGenap = 0;
  let singlePlat = '';

  for (const char of formattedPlat) {
    if (char === ';') {
      Number(singlePlat) % 2 === 0 ? totalGenap++ : totalGanjil++;
      singlePlat = '';
    } else {
      singlePlat += char;
    }
  }

  if (totalGanjil > 0 && totalGenap > 0) {
    return `plat genap sebanyak ${totalGenap} dan plat ganjil sebanyak ${totalGanjil}`;
  } else if (totalGanjil > 0) {
    return `plat ganjil sebanyak ${totalGanjil} dan plat genap tidak ditemukan`;
  } else if (totalGenap > 0) {
    return `plat genap sebanyak ${totalGenap} dan plat ganjil tidak ditemukan`;
  } else {
    return 'plat tidak ditemukan';
  }
}

console.log(ganjilGenap('2341;3429;864;1309;1276')); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data

// // cara sebelum lecture
// /*
// function ganjilGenap(plat) {
//   // your code here

//   if (plat === undefined) return 'invalid data';
//   if (!plat) return 'plat tidak ditemukan';

//   const platArray = [];
//   let singlePlat = '';

//   let nGenap = 0;
//   let nGanjil = 0;

//   for (let i = 0; i < plat.length; i++) {
//     if (plat[i] === ';' || i === plat.length - 1) {
//       if (i === plat.length - 1) {
//         singlePlat += plat[i];
//       }

//       platArray.push(singlePlat);
//       singlePlat = '';
//       continue;
//     }

//     singlePlat += plat[i];
//   }

//   console.log(platArray);

//   while (platArray.length) {
//     let singlePlat = Number(platArray.pop());

//     if (singlePlat % 2 === 0) {
//       nGenap++;
//     } else {
//       nGanjil++;
//     }
//   }

//   if (nGenap && nGanjil) {
//     return `plat genap sebanyak ${nGenap} dan plat ganjil sebanyak ${nGanjil}`;
//   } else if (nGanjil) {
//     return `plat ganjil sebanyak ${nGanjil} dan plat genap tidak ditemukan`;
//   } else if (nGenap) {
//     return `plat genap sebanyak ${nGenap} dan plat ganjil tidak ditemukan`;
//   }
// }
// */

// // cara setelah lecture
// function ganjilGenap(plat) {
//   if (plat === '') return 'plat tidak ditemukan';
//   if (!plat) return 'invalid data';

//   const platArray = [];
//   let singlePlat = '';
//   let nGenap = 0;
//   let nGanjil = 0;

//   for (let i = 0; i < plat.length + 1; i++) {
//     if (plat[i] === ';' || plat[i] === undefined) {
//       platArray.push(singlePlat);
//       singlePlat = '';
//     } else {
//       singlePlat += plat[i];
//     }
//   }

//   // console.log(platArray);

//   while (platArray.length) {
//     let singlePlat = Number(platArray.pop());

//     if (singlePlat % 2) {
//       nGanjil++;
//     } else {
//       nGenap++;
//     }
//   }

//   if (nGenap && nGanjil) {
//     return `plat genap sebanyak ${nGenap} dan plat ganjil sebanyak ${nGanjil}`;
//   } else if (nGanjil) {
//     return `plat ganjil sebanyak ${nGanjil} dan plat genap tidak ditemukan`;
//   } else if (nGenap) {
//     return `plat genap sebanyak ${nGenap} dan plat ganjil tidak ditemukan`;
//   }
// }

// console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
// console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
// console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap('')) //plat tidak ditemukan
// console.log(ganjilGenap()) //invalid data

// //do not change the code below
// module.exports = {
//   ganjilGenap
// }
