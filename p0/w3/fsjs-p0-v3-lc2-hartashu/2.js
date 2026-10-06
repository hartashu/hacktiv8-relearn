function filterReceipt(ingredients) {
  let receipts = [
    ['Dimsum', 'Udang', 'Ayam', 'Kepiting'],
    ['Ayam Geprek', 'Ayam', 'Sambal', 'Bawang'],
    ['Chicken Katsu', 'Ayam', 'Tepung Roti', 'Terigu'],
    ['Kebab', 'Daging Sapi', 'Tortilla'],
    ['Bakso', 'Daging Sapi', 'Terigu'],
  ];
  // write your code here

  const filteredReceipt = [];

  for (const ingredient of ingredients) {
    for (const receipt of receipts) {
      const name = receipt[0];
      if (ingredient === name) {
        filteredReceipt.push(receipt);
        break;
      }
    }
  }

  return filteredReceipt;
}

function usersCanCook(users) {
  if (!users || !Array.isArray(users.menu)) return 'Invalid Data!';

  const filteredReceipt = filterReceipt(users.menu);
  return filteredReceipt.length ? filteredReceipt : 'Menu not found';
}

// function filterReceipt(ingredients) {
//   let receipts = [
//     ["Dimsum", "Udang", "Ayam", "Kepiting"],
//     ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
//     ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
//     ["Kebab", "Daging Sapi", "Tortilla"],
//     ["Bakso", "Daging Sapi", "Terigu"],
//   ];
//   // write your code here

//   let result = [];

//   for (let i = 0; i < ingredients.length; i++) {
//     for (let j = 0; j < receipts.length; j++) {
//       if (ingredients[i] === receipts[j][0]) {
//         result.push(receipts[j]);
//       }
//     }
//   }

//   return result;

// }

// console.log(filterReceipt([ "Chicken Katsu", "Kebab", "Bakso" ]));
// console.log(filterReceipt([ "Mie", "Pangsit" ]));

// function usersCanCook(users) {
//   // write your code here

//   if (!users) return 'Invalid Data!';

//   const receipt = filterReceipt(users.menu);

//   if (receipt.length === 0) return 'Menu not found';

//   return receipt;
// }

// TEST CASES

let users1 = {
  name: 'Fajrin',
  resto: 'Fajrin Food',
  menu: ['Chicken Katsu', 'Kebab', 'Bakso'],
};
console.log(usersCanCook(users1));
/*
[
  [ 'Chicken Katsu', 'Ayam', 'Tepung Roti', 'Terigu' ],
  [ 'Kebab', 'Daging Sapi', 'Tortilla' ],
  [ 'Bakso', 'Daging Sapi', 'Terigu' ]
]
*/

let users2 = {
  name: 'Ihsan',
  resto: 'Ihsan Resto',
  menu: ['Dimsum', 'Ayam Geprek', 'Kopi'],
};
console.log(usersCanCook(users2));
/*
[
  [ 'Dimsum', 'Udang', 'Ayam', 'Kepiting' ],
  [ 'Ayam Geprek', 'Ayam', 'Sambal', 'Bawang' ]
]
*/

let users3 = {
  name: 'Rizka',
  resto: 'Rizka Cafe',
  menu: ['Mie', 'Pangsit'],
};
console.log(usersCanCook(users3));
// "Menu not found"

console.log(usersCanCook());
// "Invalid Data!"

module.exports = {
  filterReceipt,
  usersCanCook,
};
