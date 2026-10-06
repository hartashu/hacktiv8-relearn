function findStrongest(arr) {
  if (!Array.isArray(arr) || !arr.length) return '';

  let strongest;
  let highestStatus = -Infinity;

  for (const pokemon of arr) {
    const { attack, hp, defense } = pokemon.status;
    const currentStatus = attack + hp + defense;

    if (currentStatus > highestStatus) {
      highestStatus = currentStatus;
      strongest = pokemon.name;
    }
  }

  return strongest;
}

function gottaGroupEmAll(arr) {
  if (!Array.isArray(arr) || !arr.length) return null;

  const groups = {};

  for (const pokemon of arr) {
    const { name, type } = pokemon;
    groups[type] ??= { list: [] };
    groups[type].list.push(name);
  }

  groups.strongestPokemon = findStrongest(arr);

  return groups;
}

// function findStrongest(arr) {
//   // Your code here
//   let strongestStatus = -Infinity;
//   let strongestPokemon;

//   for (const pokemon of arr) {
//     let status = pokemon.status.attack + pokemon.status.hp + pokemon.status.defense;

//     if (status > strongestStatus) {
//       strongestPokemon = pokemon.name;
//       strongestStatus = status;
//     }
//   }

//   return strongestPokemon;
// }

// function gottaGroupEmAll(arr) {
//   // Your code here
//   const groups = {};

//   for (const pokemon of arr) {
//     if (groups[pokemon.type] === undefined) {
//       groups[pokemon.type] = {
//         list: []
//       };
//     }
//     groups[pokemon.type].list.push(pokemon.name);
//   }

//   groups.strongestPokemon = findStrongest(arr);

//   return groups;
// }

let pokemonList = [
  {
    name: 'Charizard',
    status: { attack: 84, hp: 78, defense: 78 },
    type: 'Flying',
  },
  {
    name: 'Talonflame',
    status: { attack: 81, hp: 78, defense: 71 },
    type: 'Flying',
  },
  {
    name: 'Gengar',
    status: { attack: 65, hp: 60, defense: 60 },
    type: 'Ghost',
  },
  {
    name: 'Grimer',
    status: { attack: 80, hp: 80, defense: 50 },
    type: 'Poison',
  },
  {
    name: 'Arbok',
    status: { attack: 95, hp: 60, defense: 69 },
    type: 'Poison',
  },
];

console.log(gottaGroupEmAll(pokemonList));
/*
{
  Flying: { list: [ 'Charizard', 'Talonflame' ] },
  Ghost: { list: [ 'Gengar' ] },
  Poison: { list: [ 'Grimer', 'Arbok' ] },
  strongestPokemon: 'Charizard'
}
*/

let pokemonList2 = [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying',
  },
  {
    name: 'Gliscor',
    status: { attack: 70, hp: 95, defense: 85 },
    type: 'Flying',
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug',
  },
];

console.log(gottaGroupEmAll(pokemonList2));
/*
{
  Flying: { list: [ 'Beedrill', 'Gliscor' ] },
  Bug: { list: [ 'Caterpie' ] },
  strongestPokemon: 'Gliscor'
}
*/

module.exports = { findStrongest, gottaGroupEmAll };
