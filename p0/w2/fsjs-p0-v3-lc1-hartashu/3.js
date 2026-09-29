let randomTickets = 'YO!#QWEMAN&&ZB';
let money = 0;
// Your code here

const yoman = 'YOMAN';
const specialChar = '!@#$%^&*';
let point = 0;

money = randomTickets.length * 1000;

for (const char of randomTickets) {
  let hasFound = false;

  for (const targetChar of yoman) {
    if (char === targetChar) {
      hasFound = true;
      point += 20;
      break;
    }
  }

  if (hasFound) continue;

  for (const targetChar of specialChar) {
    if (char === targetChar) {
      point += 1;
      break;
    }
  }
}

let prize = 'souvenir permen karet';
if (point > 100) {
  prize = 'hadiah utama';
} else if (point >= 50) {
  prize = 'pleystetion5';
}

console.log(
  `Kamu menghabiskan uang sejumlah ${money} dan kamu mendapat ${prize}!`,
);

// const yomanChar = 'YOMAN';
// const symbolChar = '!@#$%^&*';
// let score = 0;
// let prize = '';

// money = randomTickets.length * 1000;

// for (let i = 0; i < randomTickets.length; i++) {
//   for (let j = 0; j < yomanChar.length; j++) {
//     if (randomTickets[i] === yomanChar[j]) {
//       score += 20;
//       break;
//     }
//   }

//   for (let j = 0; j < symbolChar.length; j++) {
//     if (randomTickets[i] === symbolChar[j]) {
//       score += 1;
//       break;
//     }
//   }
// }

// if (score > 100) {
//   prize = 'hadiah utama';
// } else if (score >= 50 && score <= 100) {
//   prize = 'pleystetion5';
// } else if (score < 50) {
//   prize = 'souvenir permen karet';
// }

// console.log(`Kamu menghabiskan uang sejumlah ${money} dan kamu mendapat ${prize}!`);
