// function printFitnessSchedule() {
//   const arr = Array.from({ length: 25 }, (_, index) => index + 7);

//   arr.forEach((date) => {
//     let who = [];

//     if (date % 2 !== 0) {
//       who.push('Tono');
//     }

//     if (date === 7 || (date - 7) % 4 === 0) {
//       who.push('Anton');
//     }

//     if (date === 7 || (date - 7) % 5 === 0) {
//       who.push('Budi');
//     }

//     console.log(
//       `Tanggal ${date}: `,
//       date % 5 === 0 ? 'Tempat Fitness Tutup' : who.join(', '),
//     );
//   });
// }

function printFitnessSchedule() {
  const arr = Array.from({ length: 25 }, (_, index) => index + 7);

  arr.forEach((date) => {
    if (date % 5 === 0) {
      console.log(`Tanggal ${date}: Tempat Fitness Tutup`);
      return;
    }

    let who = [];

    if (date % 2 !== 0) {
      who.push('Tono');
    }

    if ((date - 7) % 4 === 0) {
      who.push('Anton');
    }

    if ((date - 7) % 5 === 0) {
      who.push('Budi');
    }

    const result = who.length > 0 ? ` ${who.join(', ')}` : '';
    console.log(`Tanggal ${date}:${result}`);
  });
}

printFitnessSchedule();
