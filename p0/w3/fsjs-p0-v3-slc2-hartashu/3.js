function getPoints(history) {
  let itemPoint = {
    Moonlight: 120,
    Goldqueen: 550,
    'Beras Parist': 1200,
    'Minyak Fatma': 2500,
  };
  // write your code here

  if (!Array.isArray(history) || !history.length) return null;

  const belanjaanReport = {};
  let totalPoint = 0;

  for (const product of history) {
    if (itemPoint[product] === undefined) {
      return null;
    }

    totalPoint += itemPoint[product];
    belanjaanReport[product] = (belanjaanReport[product] ?? 0) + 1;
  }

  return { totalPoint, belanjaanReport };
}

function getPrizes(point) {
  let listPrize = [
    [2000, 'Voucher 10k', 'Sticker', 'Penggaris'],
    [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
    [10000, 'Payung', 'Panci'],
  ];

  const lowestCost = listPrize[0][0];
  if (!point || point < lowestCost) return [];

  const prizes = [];

  for (const [cost, ...items] of listPrize) {
    for (const item of items) {
      if (point < cost) {
        return prizes;
      }

      point -= cost;
      prizes.push(item);
    }
  }

  return prizes;
}

function betamart(pembeli) {
  if (!pembeli) return 'Tidak ada pembeli yang belanja';

  const availableProduct = [
    'Moonlight',
    'Goldqueen',
    'Beras Parist',
    'Minyak Fatma',
  ];

  const { name, histories } = pembeli;
  const pointsData = getPoints(histories);

  if (!pointsData) {
    return 'Terdapat barang yang tidak tersedia';
  }

  const { totalPoint, belanjaanReport } = pointsData;
  const prizes = getPrizes(totalPoint);

  return {
    name,
    belanjaanReport,
    prizes,
  };
}

// 10:25 - 11:02

// function getPoints(history) { // return obj
// 	let itemPoint = {
// 			'Moonlight': 120,
// 			'Goldqueen': 550,
// 			'Beras Parist': 1200,
// 			'Minyak Fatma': 2500
// 	}
// 	// write your code here

// 	const result = {
// 		totalPoint: 0,
// 		belanjaanReport: {}
// 	};

// 	for (let i = 0; i < history.length; i++) {
// 		for (const key in itemPoint) {
// 			if (history[i] === key) {
// 				result.totalPoint += itemPoint[history[i]];
// 				break;
// 			}
// 		}

// 		if (result.belanjaanReport[history[i]] === undefined) {
// 			result.belanjaanReport[history[i]] = 0;
// 		}

// 		result['belanjaanReport'][history[i]]++;
// 	}

// 	return result;
// }

// function getPrizes(point) {	// return array
// 	let listPrize = [
// 			[2000, 'Voucher 10k', 'Sticker', 'Penggaris'],
// 			[5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
// 			[10000, 'Payung', 'Panci']
// 	]
// 	// write your code here

// 	const result = [];

// 	for (let i = 0; i < listPrize.length; i++) {
// 		// for (let j = 1; j < listPrize[i].length; j++) {
// 		// 	if (point < listPrize[i][0]) {
// 		// 		break;
// 		// 	}
// 		// }

// 		let j = 1;

// 		while (point >= listPrize[i][0] && j < listPrize[i].length) {
// 			result.push(listPrize[i][j]);
// 			point -= listPrize[i][0];
// 			j++;
// 		}
// 	}

// 	return result;

// }

// function betamart(pembeli) {
// 	// write your code here

// 	if (pembeli === undefined) return 'Tidak ada pembeli yang belanja';

// 	const result = {
// 		name: pembeli['name'],
// 		belanjaanReport: {},
// 		prizes: []
// 	};

// 	const histories = Object.values(pembeli['histories']);

// 	result.belanjaanReport = getPoints(histories).belanjaanReport;

// 	result.prizes = getPrizes(getPoints(histories).totalPoint);

// 	return result;
// }

console.log(
  betamart({
    name: 'Ilham',
    histories: [
      'Moonlight',
      'Goldqueen',
      'Beras Parist',
      'Moonlight',
      'Goldqueen',
      'Beras Parist',
      'Minyak Fatma',
      'Minyak Fatma',
      'Minyak Fatma',
      'Moonlight',
      'Goldqueen',
      'Goldqueen',
      'Moonlight',
      'Beras Parist',
      'Beras Parist',
      'Minyak Fatma',
      'Minyak Fatma',
      'Moonlight',
      'Moonlight',
    ],
  }),
);

/*
{
name: 'Ilham',
belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
  betamart({
    name: 'Kosasih',
    histories: [
      'Moonlight',
      'Moonlight',
      'Goldqueen',
      'Moonlight',
      'Minyak Fatma',
      'Goldqueen',
      'Beras Parist',
      'Beras Parist',
      'Beras Parist',
      'Moonlight',
      'Minyak Fatma',
      'Minyak Fatma',
      'Moonlight',
      'Goldqueen',
      'Goldqueen',
      'Goldqueen',
      'Beras Parist',
      'Moonlight',
      'Moonlight',
      'Beras Parist',
      'Beras Parist',
      'Minyak Fatma',
      'Minyak Fatma',
      'Goldqueen',
      'Goldqueen',
      'Moonlight',
      'Moonlight',
      'Moonlight',
      'Moonlight',
    ],
  }),
);

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja
