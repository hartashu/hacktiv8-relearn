function getStartUp(arr) {
  if (!Array.isArray(arr) || !arr.length) return [];

  let shortest = arr[0];
  let longest = arr[0];

  for (const company of arr) {
    if (company.length < shortest.length) {
      shortest = company;
    }

    if (company.length > longest.length) {
      longest = company;
    }
  }

  return [shortest, longest];
}

// function getStartUp(arr) {
//   // Write your code here

//   let shortestLength = arr[0].length;
//   let longestLength = arr[0].length;

//   let shortestStartup = arr[0];
//   let longestStartup = arr[0];;

//   for (let i = 1; i < arr.length; i++) {
//     let startup = arr[i];

//     // cek shortest
//     if (startup.length < shortestLength) {
//       shortestLength = startup.length;
//       shortestStartup = startup;
//     }

//     // cek longest
//     if (startup.length >= longestLength) {
//       longestLength = startup.length;
//       longestStartup = startup;
//     }
//   }

//   return [shortestStartup, longestStartup];
// }

//Test Case

console.log(getStartUp(['Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib']));
// [ 'TiniHib', 'Ilidiktir' ]

console.log(
  getStartUp([
    'Lizidi',
    'Iirbnb',
    'TikingSiyir.ci',
    'PriSihit',
    'DiktirSihit',
    'eFishiry',
    'babaAli',
    'eMeat',
  ]),
);
// [ 'eMeat', 'TikingSiyir.ci' ]

console.log(
  getStartUp([
    'Tikipidia',
    'Triviliki',
    'Hilidic',
    'Siyirbix',
    'Shipee',
    'Bhinniki',
    'BleBle.cim',
    'PigiPigi',
    'tomazo',
  ]),
);
// [ 'Shipee', 'BleBle.cim' ]

console.log(
  getStartUp([
    'FoGoods',
    'FoMarts',
    'Lazora',
    'eFruit',
    'FoHealth',
    'FoTravel',
    'HaiDoc',
    'ticket.net',
  ]),
);
// [ 'Lazora', 'ticket.net' ]

module.exports = getStartUp;
