function changeMe(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    console.log('');
    return;
  }

  const currentYear = 2023;

  for (let i = 0; i < arr.length; i++) {
    const [firstName, lastName, gender, bornYear] = arr[i];

    const age =
      !bornYear || bornYear > currentYear
        ? 'Invalid Birth Year'
        : currentYear - bornYear;

    const actorObj = {
      firstName,
      lastName,
      gender,
      age,
    };

    console.log(`${i + 1}. ${firstName} ${lastName}:`, actorObj);
  }
}

// Cara 1
// function changeMe(arr) {
//   // write your code here
//   const currentYear = 2019;

//   for (let i = 0; i < arr.length; i++) {
//     const person = {
//       firstName: '',
//       lastName: '',
//       gender: '',
//       age: 0
//     };

//     let row = arr[i];
//     let j = 0;

//     for (const key in person) {
//       if (key === 'age') {
//         person[key] = isNaN(row[j]) ? 'Invalid Birth Year' : currentYear - row[j];

//         continue;
//       }
//       person[key] = row[j];
//       j++;
//     }

//     console.log(`${i + 1}. ${person['firstName']} ${person['lastName']}:`);
//     console.log(person);
//   }
// }

// Cara 2
/*
function changeMe(arr) {
  const currentYear = 2019;

  for (let i = 0; i < arr.length; i++) {
    const person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: isNaN(arr[i][3]) ? 'Invalid Birth Year' : currentYear - arr[i][3]
    };

    console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
    console.log(person);
  }
}
*/

// ==========================================
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male'],
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// ==========================================
changeMe([]); // ""

module.exports = changeMe;
