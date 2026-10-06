function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}

// function attack(damage) {
//   // Code disini

//   return damage - 2;
// }

// function damageCalculation(numberOfAttacks, damagePerAttack) {
//   // Code disini

//   let totalDamage = 0;

//   for (let i = 0; i < numberOfAttacks; i++) {
//     totalDamage += attack(damagePerAttack);
//   }

//   return totalDamage;
// }

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90

module.exports = {
  damageCalculation,
  attack,
};
