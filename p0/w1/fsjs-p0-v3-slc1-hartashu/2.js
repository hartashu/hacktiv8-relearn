var exercise = '<>^v';
var userInput = '<';

// code here

const totalExercise = exercise.length;
const totalUserInput = userInput.length;

let result = '';

if (totalExercise !== totalUserInput) {
  result = 'Input yang anda masukkan tidak lengkap!';
} else {
  let totalCorrect = 0;

  for (let i = 0; i < totalExercise; i++) {
    const symbolExercise = exercise[i];
    const symbolUser = userInput[i];

    if (symbolUser === symbolExercise) {
      totalCorrect++;
    }
  }

  const point = Math.floor((totalCorrect / totalExercise) * 100);

  let category;
  if (point <= 59) {
    category = 'Bad';
  } else if (point <= 79) {
    category = 'Good';
  } else if (point <= 99) {
    category = 'Great';
  } else {
    category = 'Perfect';
  }

  result = `Anda mendapatkan score ${totalCorrect * 10} / ${totalExercise * 10}. Persentase: ${point}%, Kategori : ${category}`;
}

console.log(result);

// let score = 0;
// let percent = 0;
// let kategori = '';

// if (exercise.length !== userInput.length) {
//   console.log('Input yang anda masukkan tidak lengkap!');
// } else {
//   let playLength = exercise.length;

//   for (let i = 0; i < playLength; i++) {
//     if (exercise[i] === userInput[i]) {
//       score += 10;
//     }
//   }

//   percent = score * 100 / (playLength * 10);

//   if (percent === 100) {
//     kategori = 'Perfect';
//   } else if (percent >= 80 && percent <= 99) {
//     kategori = 'Great';
//   } else if (percent >= 60 && percent <= 79) {
//     kategori = 'Good';
//   } else {
//     kategori = 'Bad';
//   }

//   console.log(`Anda mendapatkan score ${score} / ${playLength * 10}. Persentase: ${Math.floor(percent)}%, Kategori : ${kategori}`);
// }
