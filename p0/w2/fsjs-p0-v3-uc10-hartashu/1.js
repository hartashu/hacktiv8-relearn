function graduates(students) {
  if (!Array.isArray(students) || !students.length) {
    return {};
  }

  const result = {};

  for (const student of students) {
    const { name, score, class: className } = student;

    const classBucket = (result[className] ??= []);

    if (score > 75) {
      classBucket.push({ name, score });
    }
  }

  return result;
}

// function graduates(students) {
//   // you can only write your code here!

//   const result = {};
//   let tempObj;

//   for (let i = 0; i < students['length']; i++) {
//     currentObj = students[i];
//     currentClass = students[i]['class'];

//     if (!result.hasOwnProperty(currentClass)) {
//       result[currentClass] = [];
//     }

//     delete currentObj['class'];

//     if (currentObj['score'] > 75) {
//       result[currentClass].push(currentObj);
//     }
//   }

//   return result;
// }

// TEST CASE 1

let input1 = [
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' },
];
console.log(graduates(input1));

// TEST CASE 2
let input2 = [
  { name: 'Rin', score: 100, class: 'foxes' },
  { name: 'Saber', score: 80, class: 'wolves' },
  { name: 'Gilgamesh', score: 30, class: 'foxes' },
  { name: 'Ishtar', score: 50, class: 'wolves' },
];
console.log(graduates(input2));

// TEST CASE 3
let input3 = [
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 80, class: 'tigers' },
];
console.log(graduates(input3));

// TEST CASE 4
console.log(graduates([]));

//do not change the code below
module.exports = graduates;
