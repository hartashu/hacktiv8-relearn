// function targetTerdekat(arr) {
//   let distance = 0;
//   let coorO;
//   let coorX;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'o') {
//       coorO = i;
//     } else if (arr[i] === 'x') {
//       coorX = (coorX ?? '') + i;
//     }
//   }

//   if (coorX && coorX.length > 0) {
//     distance = Math.abs(coorO - coorX[0]);
//     for (let i = 0; i < coorX.length; i++) {
//       const diff = Math.abs(Number(coorO) - Number(coorX[i]));
//       if (diff < distance) {
//         distance = diff;
//       }
//     }
//   }

//   return distance;
// }

function targetTerdekat(arr) {
  let minDistance = Infinity;
  let lastO = -1;
  let lastX = -1;

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (char === 'o') {
      lastO = i;
    } else if (char === 'x') {
      lastX = i;
    } else {
      continue;
    }

    if (lastO !== -1 && lastX !== -1) {
      minDistance = Math.min(minDistance, Math.abs(lastO - lastX));
    }
  }

  return minDistance === Infinity ? 0 : minDistance;
}

// Cara 1
// function targetTerdekat(arr) {
//   // you can only write your code here!

//   let ix = [];
//   let io;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'x') {
//       ix.push(i);
//     } else if (arr[i] === 'o') {
//       io = i;
//     }
//   }

//   let current;
//   let nearest = Infinity;

//   for (let i = 0; i < ix.length; i++) {
//     current = io - ix[i];

//     if (current < 0) current = -current;

//     if (current < nearest) nearest = current;
//   }

//   if (nearest === Infinity) return 0;

//   return nearest;
// }

// Cara 2
/*
function targetTerdekat(arr) {
  // you can only write your code here!

  let ix;
  let io;

  let current;
  let nearest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      ix = i;

    } else if (arr[i] === 'o') {
      io = i;
    }

    if (io || io === 0 && ix) {
      current = io - ix;
      if (current < 0) current = -current;
      if (current < nearest) nearest = current;
    }
  }

  if (nearest === Infinity) return 0; 

  return nearest;
}
  */

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

module.exports = targetTerdekat;
