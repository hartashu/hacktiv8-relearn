function mergeOrder(data) {
  if (!Array.isArray(data) || !data.length) return [];

  const mergedOrder = [];

  for (const datum of data) {
    const { orders } = datum;
    const temp = [];
    for (const menu of orders) {
      temp.push(menu[0]);
      temp.push(menu[1]);
    }
    mergedOrder.push(temp);
  }

  return mergedOrder;
}

function calculateTotalSales(data) {
  let priceList = [
    { name: 'Burger', price: 25000 },
    { name: 'Kentang', price: 1000 },
    { name: 'Ayam', price: 17000 },
    { name: 'CocaCola', price: 7000 },
    { name: 'IceCream', price: 3000 },
  ];
  // Your code here

  if (!Array.isArray(data) || !data.length) return [];

  const result = [];

  for (const order of data) {
    let totalSales = 0;

    for (let i = 0; i < order.length; i += 2) {
      const food = order[i];
      const totalOrder = order[i + 1];

      for (const { name, price } of priceList) {
        if (name === food) {
          totalSales += price * totalOrder;
          break;
        }
      }
    }

    result.push(totalSales);
  }

  return result;
}

function calculateTotalVote(data) {
  if (!Array.isArray(data) || !data.length) return [];

  const totalVotes = [];

  for (const datum of data) {
    const vote = (datum.reviewers * 25) / 100;
    totalVotes.push(vote);
  }

  return totalVotes;
}

function makanSkuy(data) {
  if (!data) return 'Invalid Data!';
  if (!data.length) return 'Tidak ada order, order dulu ngab!';

  const classification = {};

  const totalSales = calculateTotalSales(mergeOrder(data));
  const totalVote = calculateTotalVote(data);

  for (let i = 0; i < data.length; i++) {
    const datum = data[i];

    if (totalSales[i] > 20_000_000 && totalVote[i] > 100) {
      classification.ThreeStars ??= [];
      classification.ThreeStars.push(datum.restaurant);
    } else if (
      totalSales[i] >= 10_000_000 &&
      totalSales[i] <= 20_000_000 &&
      totalVote[i] >= 50 &&
      totalVote[i] <= 100
    ) {
      classification.TwoStars ??= [];
      classification.TwoStars.push(datum.restaurant);
    } else {
      classification.OneStar ??= [];
      classification.OneStar.push(datum.restaurant);
    }
  }

  return classification;
}

// MAKAN SKUY

// function mergeOrder(data) {
//   // Your code here

//   const orders = [];

//   for (const restaurant of data) {
//     let tempArr = [];
//     for (let i = 0; i < restaurant.orders.length; i++) {
//       let singleMenu = restaurant.orders[i];
//       for (let j = 0; j < singleMenu.length; j++) {
//         tempArr.push(singleMenu[j]);
//       }
//     }
//     orders.push(tempArr);
//   }

//   return orders;
// }

// /*
// console.log(
//   mergeOrder([
//     {
//       restaurant: "MekDun",
//       orders: [
//         ["Burger", 200],
//         ["Kentang", 130],
//         ["CocaCola", 400],
//         ["IceCream", 186],
//       ],
//       reviewers: 140,
//     },
//     {
//       restaurant: "Lawmore",
//       orders: [
//         ["Ayam", 126],
//         ["CocaCola", 206],
//         ["Burger", 368],
//         ["IceCream", 80],
//       ],
//       reviewers: 260,
//     },
//     {
//       restaurant: "Burger Queen",
//       orders: [
//         ["Ayam", 85],
//         ["CocaCola", 150],
//         ["Burger", 450],
//         ["Kentang", 20],
//       ],
//       reviewers: 80,
//     },
//   ])
// );
// */

// function calculateTotalSales(data) {
//   let priceList = [
//     { name: "Burger", price: 25000 },
//     { name: "Kentang", price: 1000 },
//     { name: "Ayam", price: 17000 },
//     { name: "CocaCola", price: 7000 },
//     { name: "IceCream", price: 3000 },
//   ];
//   // Your code here

//   const totalSales = [];

//   for (const singleRestaurant of data) {
//     let totalSalesPerRestaurant = 0;
//     for (let i = 0; i < singleRestaurant.length; i += 2) {
//       let food = singleRestaurant[i];
//       let foodQty = singleRestaurant[i + 1];
//       for (const menu of priceList) {
//         if (food === menu.name) {
//           totalSalesPerRestaurant += foodQty * menu.price;
//         }
//       }
//     }
//     totalSales.push(totalSalesPerRestaurant);
//   }

//   return totalSales;
// }

// /*
// console.log(
//   calculateTotalSales([
//     ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
//     ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
//     ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
//   ])
// );
// */

// function calculateTotalVote(data) {
//   // Your code here

//   const totalVote = [];

//   for (const restaurant of data) {
//     totalVote.push(restaurant.reviewers * 25 / 100);
//   }

//   return totalVote;
// }

// /*
// console.log(
//   calculateTotalVote([
//     {
//       restaurant: "MekDun",
//       orders: [
//         ["Burger", 200],
//         ["Kentang", 130],
//         ["CocaCola", 400],
//         ["IceCream", 186],
//       ],
//       reviewers: 140,
//     },
//     {
//       restaurant: "Lawmore",
//       orders: [
//         ["Ayam", 126],
//         ["CocaCola", 206],
//         ["Burger", 368],
//         ["IceCream", 80],
//       ],
//       reviewers: 260,
//     },
//     {
//       restaurant: "Burger Queen",
//       orders: [
//         ["Ayam", 85],
//         ["CocaCola", 150],
//         ["Burger", 450],
//         ["Kentang", 20],
//       ],
//       reviewers: 80,
//     },
//   ])
// );
// */

// function makanSkuy(data) {
//   // Your code here

//   if (!data) return 'Invalid Data!';
//   if (data.length === 0) return 'Tidak ada order, order dulu ngab!';

//   const objRestaurant = {};
//   const oneStar = [];
//   const twoStars = [];
//   const threeStars = [];

//   const orders = mergeOrder(data);
//   const totalSales = calculateTotalSales(orders);
//   const totalVote = calculateTotalVote(data);

//   for (let i = 0; i < data.length; i++) {
//     if (totalSales[i] > 20_000_000 && totalVote[i] > 100) {
//       threeStars.push(data[i].restaurant);
//     } else if (
//       (totalSales[i] >= 10_000_000 && totalSales[i] <= 20_000_000) &&
//       (totalVote[i] >= 50 && totalVote[i] <= 100)
//     ) {
//       twoStars.push(data[i].restaurant);
//     } else {
//       oneStar.push(data[i].restaurant);
//     }
//   }

//   if (oneStar.length) objRestaurant.OneStar = oneStar;
//   if (twoStars.length) objRestaurant.TwoStars = twoStars;
//   if (threeStars.length) objRestaurant.ThreeStars = threeStars;

//   return objRestaurant;
// }

// TEST CASES

console.log(makanSkuy()); // Invalid Data!
console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

let order1 = [
  {
    restaurant: 'MekDun',
    orders: [
      ['Burger', 200],
      ['Kentang', 130],
      ['CocaCola', 400],
      ['IceCream', 186],
    ],
    reviewers: 140,
  },
  {
    restaurant: 'Lawmore',
    orders: [
      ['Ayam', 126],
      ['CocaCola', 206],
      ['Burger', 368],
      ['IceCream', 80],
    ],
    reviewers: 260,
  },
  {
    restaurant: 'Burger Queen',
    orders: [
      ['Ayam', 85],
      ['CocaCola', 150],
      ['Burger', 450],
      ['Kentang', 20],
    ],
    reviewers: 80,
  },
  {
    restaurant: 'Pendys',
    orders: [
      ['Ayam', 380],
      ['CocaCola', 246],
      ['Burger', 166],
      ['Kentang', 190],
    ],
    reviewers: 292,
  },
  {
    restaurant: 'Karl Sr',
    orders: [
      ['Ayam', 65],
      ['CocaCola', 510],
      ['Burger', 699],
      ['Kentang', 274],
    ],
    reviewers: 412,
  },
];

console.log(makanSkuy(order1));
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],
  TwoStars: [ 'Lawmore', 'Pendys' ],
  ThreeStars: [ 'Karl Sr' ]
}
*/

let order2 = [
  {
    restaurant: 'MekDun',
    orders: [
      ['Burger', 200],
      ['Kentang', 130],
      ['CocaCola', 400],
      ['IceCream', 186],
    ],
    reviewers: 140,
  },
  {
    restaurant: 'Lawmore',
    orders: [
      ['Ayam', 326],
      ['CocaCola', 306],
      ['Burger', 468],
      ['IceCream', 280],
    ],
    reviewers: 460,
  },
  {
    restaurant: 'Burger Queen',
    orders: [
      ['Ayam', 85],
      ['CocaCola', 150],
      ['Burger', 450],
      ['Kentang', 20],
    ],
    reviewers: 80,
  },
  {
    restaurant: 'Pendys',
    orders: [
      ['Ayam', 580],
      ['CocaCola', 246],
      ['Burger', 366],
      ['Kentang', 290],
    ],
    reviewers: 432,
  },
  {
    restaurant: 'Karl Sr',
    orders: [
      ['Ayam', 65],
      ['CocaCola', 510],
      ['Burger', 699],
      ['Kentang', 274],
    ],
    reviewers: 412,
  },
];

console.log(makanSkuy(order2));
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],        
  ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ]
}
*/
let order3 = [
  {
    restaurant: 'MekDun',
    orders: [
      ['Burger', 200],
      ['Kentang', 13],
      ['CocaCola', 40],
      ['IceCream', 186],
    ],
    reviewers: 140,
  },
  {
    restaurant: 'Lawmore',
    orders: [
      ['Ayam', 326],
      ['CocaCola', 306],
      ['Burger', 68],
      ['IceCream', 280],
    ],
    reviewers: 84,
  },
  {
    restaurant: 'Burger Queen',
    orders: [
      ['Ayam', 80],
      ['CocaCola', 10],
      ['Burger', 450],
      ['Kentang', 20],
    ],
    reviewers: 80,
  },
  {
    restaurant: 'Pendys',
    orders: [
      ['Ayam', 58],
      ['CocaCola', 26],
      ['Burger', 36],
      ['Kentang', 20],
    ],
    reviewers: 20,
  },
  {
    restaurant: 'Karl Sr',
    orders: [
      ['Ayam', 65],
      ['CocaCola', 51],
      ['Burger', 69],
      ['Kentang', 74],
    ],
    reviewers: 120,
  },
];

console.log(makanSkuy(order3));
/*
{
  OneStar: [ 'MekDun', 'Lawmore', 'Burger Queen', 'Pendys', 'Karl Sr' ]
}
*/

module.exports = {
  mergeOrder,
  calculateTotalSales,
  calculateTotalVote,
  makanSkuy,
};
