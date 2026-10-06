const { findStrongest, gottaGroupEmAll } = require("../2.js");
const Restriction = require("hacktiv8-restriction");

describe("Testing no 2", () => {
  let pokemonList = [
    {
      name: "Charizard",
      status: { attack: 84, hp: 78, defense: 78 },
      type: "Flying",
    },
    {
      name: "Talonflame",
      status: { attack: 81, hp: 78, defense: 71 },
      type: "Flying",
    },
    {
      name: "Gengar",
      status: { attack: 65, hp: 60, defense: 60 },
      type: "Ghost",
    },
    {
      name: "Grimer",
      status: { attack: 80, hp: 80, defense: 50 },
      type: "Poison",
    },
    {
      name: "Arbok",
      status: { attack: 95, hp: 60, defense: 69 },
      type: "Poison",
    },
  ];

  let pokemonList2 = [
    {
      name: "Beedrill",
      status: { attack: 72, hp: 73, defense: 75 },
      type: "Flying",
    },
    {
      name: "Gliscor",
      status: { attack: 70, hp: 95, defense: 85 },
      type: "Flying",
    },
    {
      name: "Caterpie",
      status: { attack: 30, hp: 45, defense: 55 },
      type: "Bug",
    },
  ];

  test("findStrongest function return the expected output (10)", () => {
    let result1 = findStrongest(pokemonList);
    let result2 = findStrongest(pokemonList2);

    expect(result1).toEqual("Charizard");
    expect(result2).toEqual("Gliscor");
  });

  test("gottaGroupEmAll function return the expected output (15)", () => {
    let result1 = gottaGroupEmAll(pokemonList);
    let result2 = gottaGroupEmAll(pokemonList2);

    expect(result1).toEqual({
      Flying: { list: ["Charizard", "Talonflame"] },
      Ghost: { list: ["Gengar"] },
      Poison: { list: ["Grimer", "Arbok"] },
      strongestPokemon: "Charizard",
    });
    expect(result2).toEqual({
      Flying: { list: ["Beedrill", "Gliscor"] },
      Bug: { list: ["Caterpie"] },
      strongestPokemon: "Gliscor",
    });
  });

  test("check restriction (-100)", async () => {
    const checkRestriction = new Restriction("../2.js");
    checkRestriction.rules = ["match", "split", "concat", "search"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
