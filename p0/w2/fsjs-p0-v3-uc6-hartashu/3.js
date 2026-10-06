function sittingArrangement(person, column) {
  if (column < 1 || !Number.isFinite(column)) {
    return 'Invalid number';
  }

  const seat = [];
  let pointer = 0;

  while (pointer < person.length) {
    const singleSeat = [];

    for (let i = 0; i < column; i++) {
      const occupant =
        pointer < person.length ? person[pointer] : 'Kursi Kosong';
      singleSeat.push(occupant);
      pointer++;
    }

    seat.push(singleSeat);
  }

  return seat;
}

//DRIVER CODE

console.log(sittingArrangement(['A', 'B', 'C'], 0)); //Invalid number
console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(
  sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4),
);
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]

module.exports = sittingArrangement;

// Cara 1
// function sittingArrangement(person, column) {
//   // Your code here

//   if (!column) return 'Invalid number';

//   const result = [];

//   let indexPerson = 0;

//   while (indexPerson < person.length) {
//     let rowResult = [];

//     for (let i = 0; i < column; i++) {
//       if (person[indexPerson]) {
//         rowResult.push(person[indexPerson]);
//       } else {
//         rowResult.push('Kursi Kosong');
//       }

//       indexPerson++;
//     }

//     result.push(rowResult);
//   }

//   return result;
// }

// Cara 2
/*
function sittingArrangement(person, column) {
  // Your code here

  if (!column) return 'Invalid number';
  
  const result = [];
  
  let indexPerson = 0;
  let seat = column;
  let rowResult = [];
  
  while (indexPerson < person.length || rowResult.length !== 0) {
    if (seat) {
      if (person[indexPerson]) {
        rowResult.push(person[indexPerson]);
      } else {
       rowResult.push('Kursi Kosong');
      }
      indexPerson++;
      seat--;
    } else {  // seat === 0
      // console.log(rowResult);
      result.push(rowResult);
      seat = column;
      rowResult = [];
    }
  }
  
  return result;
}
*/
