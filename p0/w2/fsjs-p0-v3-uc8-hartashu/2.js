function splitting(str) {
  // if (!str) return [];

  const splitted = [];
  let hero = '';

  for (const char of str) {
    if (char === ',') {
      splitted.push(hero);
      hero = '';
      continue;
    }

    hero += char;
  }

  if (hero) {
    splitted.push(hero);
  }

  return splitted;
}

function meleeRangedGrouping(str) {
  if (!str) return [];

  const ranged = [];
  const melee = [];

  const splitted = splitting(str);

  for (const hero of splitted) {
    let name = '';

    for (let i = 0; i < hero.length; i++) {
      const char = hero[i];

      if (char === '-') {
        const nextChar = hero[i + 1];
        if (nextChar === 'R') {
          ranged.push(name);
        } else if (nextChar === 'M') {
          melee.push(name);
        }

        break;
      }

      name += char;
    }
  }

  return [ranged, melee];
}

// function splitting(str) {
// 	// you can only write your code here!

// 	// if (!str) return [];

// 	const result = [];
// 	let tempStr = '';

// 	for (let i = 0; i < str.length + 1; i++) {
// 		if (str[i] === ',' || str[i] === undefined) {
// 			result.push(tempStr);
// 			tempStr = '';
// 		} else {
// 			tempStr += str[i];
// 		}
// 	}

// 	return result;
// }

// function meleeRangedGrouping(str) {
// 	// you can only write your code here!

// 	if (!str.length) return [];

// 	const afterSplit = splitting(str);

// 	const result = [];
// 	const ranged = [];
// 	const melee = [];
// 	let tempStr = '';

// 	for (let i = 0; i < afterSplit.length; i++) {
// 		for (let j = 0; j < afterSplit[i].length; j++) {
// 			if (afterSplit[i][j] === '-') {
// 				if (afterSplit[i][j + 1] === 'R') {
// 					ranged.push(tempStr);
// 				} else if (afterSplit[i][j + 1] === 'M') {
// 					melee.push(tempStr);
// 				}
// 				tempStr = '';
// 				break;
// 			} else {
// 				tempStr += afterSplit[i][j];
// 			}
// 		}
// 	}

// 	result.push(ranged, melee);

// 	return result;
// }

// TEST CASE

let input1 = 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged';
let input2 = 'Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged';
console.log(meleeRangedGrouping(input1)); // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeRangedGrouping(input2)); // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeRangedGrouping('')); // []

//do not change the code below
module.exports = { splitting, meleeRangedGrouping };
