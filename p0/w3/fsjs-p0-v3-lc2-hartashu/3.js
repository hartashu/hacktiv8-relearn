function getArcadeResult(history) {
  let arcadeTickets = {
    'Circus Ball Drop': 200,
    'Lucky Chicken': 100,
    'Street Basketball': 50,
    'Gold Rush': 20,
  };
  // write your code here

  if (!Array.isArray(history) || !history.length) return null;

  let totalTicket = 0;
  const gameReport = {};

  for (const game of history) {
    if (arcadeTickets[game] === undefined) {
      return null;
    }

    totalTicket += arcadeTickets[game];
    gameReport[game] = (gameReport[game] ?? 0) + 1;
  }

  return { totalTicket, gameReport };
}

function getPrizes(ticket) {
  let listPrize = [
    [200, 'Rautan', 'Pensil', 'Penghapus'],
    [500, 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut'],
    [1000, 'Boneka', 'Tas'],
  ];
  // write your code here

  if (!ticket) return [];

  const prizes = [];

  for (const [point, ...items] of listPrize) {
    for (const item of items) {
      if (ticket < point) {
        return prizes;
      }

      ticket -= point;
      prizes.push(item);
    }
  }

  return prizes;
}

function gamezone(user) {
  // write your code here
  if (!user || !Array.isArray(user.histories)) {
    return 'Tidak ada pemain yang bermain';
  }

  const { name, histories } = user;
  const ticketData = getArcadeResult(histories);

  if (!ticketData) {
    return 'Terdapat permainan yang tidak tersedia di gamezone';
  }

  const { totalTicket, gameReport } = ticketData;
  const prizes = getPrizes(totalTicket);

  return { name, gameReport, prizes };
}

// function getArcadeResult(history) {
//   let arcadeTickets = {
//     'Circus Ball Drop': 200,
//     'Lucky Chicken': 100,
//     'Street Basketball': 50,
//     'Gold Rush': 20,
//   };
//   // write your code here

//   let totalTicket = 0;
//   const gameReport = {};

//   for (let i = 0; i < history.length; i++) {
//     totalTicket += arcadeTickets[history[i]];

//     if (gameReport[history[i]] === undefined) {
//       gameReport[history[i]] = 0;
//     }

//     gameReport[history[i]]++;
//   }

//   return {
//     totalTicket,
//     gameReport,
//   };
// }

// function getPrizes(ticket) {
//   let listPrize = [
//     [200, 'Rautan', 'Pensil', 'Penghapus'],
//     [500, 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut'],
//     [1000, 'Boneka', 'Tas'],
//   ];
//   // write your code here

//   const result = [];

//   for (let i = 0; i < listPrize.length; i++) {
//     for (let j = 1; j < listPrize[i].length; j++) {
//       if (ticket >= listPrize[i][0]) {
//         ticket -= listPrize[i][0];
//         result.push(listPrize[i][j]);
//       }
//     }
//   }

//   return result;
// }

// function gamezone(user) {
//   if (!user) return 'Tidak ada pemain yang bermain';

//   const { name, histories } = user;
//   const arcadeResult = getArcadeResult(histories);
//   const gameReport = arcadeResult.gameReport;
//   const prizes = getPrizes(arcadeResult.totalTicket);

//   for (const history of histories) {
//     if (
//       history !== 'Circus Ball Drop' &&
//       history !== 'Lucky Chicken' &&
//       history !== 'Street Basketball' &&
//       history !== 'Gold Rush'
//     ) {
//       return 'Terdapat permainan yang tidak tersedia di gamezone';
//     }
//   }

//   return {
//     name,
//     gameReport,
//     prizes,
//   };
// }

console.log(
  gamezone({
    name: 'Ihsan',
    histories: [
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Lucky Chicken',
      'Circus Ball Drop',
      'Street Basketball',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Circus Ball Drop',
    ],
  }),
);
/**
 * {
  name: 'Ihsan',
  gameReport: {
    'Circus Ball Drop': 6,
    'Lucky Chicken': 4,
    'Street Basketball': 4,
    'Gold Rush': 5
  },
  prizes: [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]
}
 */

console.log(
  gamezone({
    name: 'Kosasih',
    histories: [
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Street Basketball',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Lucky Chicken',
      'Circus Ball Drop',
      'Street Basketball',
      'Street Basketball',
      'Street Basketball',
      'Gold Rush',
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Gold Rush',
      'Gold Rush',
      'Lucky Chicken',
      'Lucky Chicken',
      'Street Basketball',
      'Street Basketball',
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Circus Ball Drop',
    ],
  }),
);
/**
 * {
    name: 'Kosasih',
    gameReport: {
      'Circus Ball Drop': 11,
      'Street Basketball': 7,
      'Lucky Chicken': 5,
      'Gold Rush': 6
    },
    prizes: [
      'Rautan',
      'Pensil',
      'Penghapus',
      'Tempat Pensil',
      'Celengan',
      'Buku Tulis',
      'Penjepit Rambut'
    ]
  }
 */

console.log(
  gamezone({
    name: 'Minnie',
    histories: ['Circus Ball Drop', 'Circus Ball Drop'],
  }),
);

/**
 * {
  name: 'Minnie',
  gameReport: { 'Circus Ball Drop': 2 },
  prizes: [ 'Rautan', 'Pensil' ]
}
 */

console.log(
  gamezone({
    name: 'Marry',
    histories: [
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Race to Witch Mountain',
    ],
  }),
);
// Terdapat permainan yang tidak tersedia di gamezone

console.log(gamezone());
// Tidak ada pemain yang bermain

module.exports = {
  getArcadeResult,
  getPrizes,
  gamezone,
};
