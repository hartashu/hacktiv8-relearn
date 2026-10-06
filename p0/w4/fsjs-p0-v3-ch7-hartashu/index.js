function generateIngredients(ingredientsRaw) {
  if (!Array.isArray(ingredientsRaw) || !ingredientsRaw.length) {
    return [];
  }

  const result = [];

  for (const data of ingredientsRaw) {
    result.push({
      menu: data[0],
      ratio: data[1],
      ingredients: data[2],
      cost: data[3],
    });
  }

  return result;
}

function calculateRawCost(ingredientsData) {
  // Your code here
  if (!Array.isArray(ingredientsData) || !ingredientsData.length) {
    return [];
  }

  const result = [];

  for (const data of ingredientsData) {
    const { menu, ratio, ingredients, cost } = data;
    const stock = (ingredients * 1000) / ratio;
    const investment = cost * ingredients;

    result.push({
      menu,
      stock,
      investment,
    });
  }

  return result;
}

function calculateROI(costData, ordersData) {
  // Your code here
  if (
    !Array.isArray(costData) ||
    !costData.length ||
    !Array.isArray(ordersData) ||
    !ordersData.length
  ) {
    return [];
  }

  const result = [];

  for (const item of costData) {
    let currentStock = item.stock;
    let sales = 0;

    for (const order of ordersData) {
      if (item.menu === order.menuItem && order.amount <= currentStock) {
        currentStock -= order.amount;
        sales += order.price * order.amount;
      }
    }

    const profit = sales - item.investment;
    const roiVal = ((profit / item.investment) * 100).toFixed(2);

    result.push({
      menu: item.menu,
      stock: currentStock,
      investment: item.investment,
      sales,
      profit,
      roi: `${roiVal}%`,
    });
  }

  return result;
}

function incomeStatement(rawIngredients, orders) {
  // Your code here
  if (!rawIngredients || !orders) return 'Invalid data';
  if (!rawIngredients.length || !orders.length) return 'Data is empty';

  return calculateROI(calculateRawCost(generateIngredients(rawData)), orders);
}

// function generateIngredients(ingredientsRaw) {
//   // Your code here

//   const result = [];

//   for (const singleRawData of ingredientsRaw) {
//     const newObject = {
//       menu: singleRawData[0],
//       ratio: singleRawData[1],
//       ingredients: singleRawData[2],
//       cost: singleRawData[3]
//     };

//     result.push(newObject);
//   }

//   return result;
// }

// function calculateRawCost(ingredientsData) {
//   // Your code here

//   const result = [];

//   for (const singleIngredientsData of ingredientsData) {
//     const { menu, ratio, ingredients, cost } = singleIngredientsData;
//     let stock = ingredients * 1000 / ratio;
//     let investment = cost * ingredients;

//     const newObject = {
//       menu,
//       stock,
//       investment
//     };

//     result.push(newObject);
//   }

//   return result;
// }

// function calculateROI(costData, ordersData) {
//   // Your code here

//   const result = [];

//   for (const singleCostData of costData) {

//     const { menu, stock, investment } = singleCostData;

//     const newObject = {
//       menu,
//       stock,
//       investment,
//     };

//     for (const order of ordersData) {
//       if (
//         order.menuItem === newObject.menu &&
//         order.amount <= newObject.stock
//       ) {

//         if (newObject.sales === undefined) newObject.sales = 0;
//         if (newObject.profit === undefined) newObject.profit = 0;
//         if (newObject.roi === undefined) newObject.roi = 0;

//         newObject.stock -= order.amount;
//         newObject.sales += order.price * order.amount;
//         newObject.profit = newObject.sales - newObject.investment;
//       }
//     }

//     newObject.roi = String((newObject.profit / newObject.investment * 100).toFixed(2)) + '%';

//     result.push(newObject);
//   }

//   return result;
// }

// function incomeStatement(rawIngredients, orders) {
//   // Your code here

//   if (!rawIngredients || !orders) return 'Invalid data';
//   if (rawIngredients.length === 0 || orders.length === 0) return 'Data is empty';

//   const ingredients = generateIngredients(rawIngredients);
//   const rawCost = calculateRawCost(ingredients);

//   return calculateROI(rawCost, orders);
// }

const rawData = [
  ['Bakso Spesial', 20, 6, 130_000],
  ['Mie Ayam Combo', 100, 3, 20_000],
  ['Mie Ayam Spesial', 500, 5, 40_000],
];

const orderHistories = [
  {
    menuItem: 'Bakso Spesial',
    price: 20_000,
    amount: 260,
  },
  {
    menuItem: 'Bakso Spesial',
    price: 20_000,
    amount: 12,
  },
  {
    menuItem: 'Mie Ayam Combo',
    price: 18_000,
    amount: 20,
  },
  {
    menuItem: 'Mie Ayam Spesial',
    price: 12_000,
    amount: 6,
  },
  {
    menuItem: 'Mie Ayam Spesial',
    price: 12_000,
    amount: 5,
  },
];

console.log(incomeStatement());
// Invalid data

console.log(incomeStatement([], []));
// Data is empty

console.log(incomeStatement(rawData, orderHistories));
/*
[
  {
    menu: 'Bakso Spesial',
    stock: 28,
    investment: 780000,
    sales: 5440000,
    profit: 4660000,
    roi: '5.97%'
  },
  {
    menu: 'Mie Ayam Combo',        
    stock: 10,
    investment: 60000,
    sales: 360000,
    profit: 300000,
    roi: '5.00%'
  },
  {
    menu: 'Mia Ayam Spesial',      
    stock: 4,
    investment: 200000,
    sales: 72000,
    profit: -128000,
    roi: '-0.64%'
  }
]
*/

// KODE DI BAWAH INI JANGAN DI UBAH!
module.exports = {
  generateIngredients,
  calculateRawCost,
  calculateROI,
  incomeStatement,
};
