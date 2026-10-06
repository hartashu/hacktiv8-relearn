const { filterReceipt, usersCanCook } = require("../2.js");
const Restriction = require("hacktiv8-restriction");

describe("Soal 2", () => {
  test("Should return a correct output if parameter users is invalid (3)", () => {
    const result1 = usersCanCook();
    const result2 = usersCanCook(undefined);
    expect(result1).toEqual("Invalid Data!");
    expect(result2).toEqual("Invalid Data!");
  });

  test("Correctly return output on filterReceipt function with given requirements (16)", () => {
    const result1 = filterReceipt([ "Chicken Katsu", "Kebab", "Bakso" ]);
    const result2 = filterReceipt([ "Dimsum", "Ayam Geprek", "Kopi" ]);
    const result3 = filterReceipt([ "Mie", "Pangsit" ]);
    expect(result1).toEqual([
      [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
      [ "Kebab", "Daging Sapi", "Tortilla" ],
      [ "Bakso", "Daging Sapi", "Terigu" ]
    ]);
    expect(result2).toEqual([
      [ "Dimsum", "Udang", "Ayam", "Kepiting" ],
      [ "Ayam Geprek", "Ayam", "Sambal", "Bawang" ]
    ]);
    expect(result3).toEqual([]);
  });

  test("Correctly return output with given requirements (11)", () => {
    const result1 = usersCanCook({
      name: 'Fajrin',
      resto: 'Fajrin Food',
      menu: ['Chicken Katsu', 'Kebab', 'Bakso']
    });
    const result2 = usersCanCook({
      name: 'Ihsan',
      resto: 'Ihsan Resto',
      menu: ['Dimsum', 'Ayam Geprek', 'Kopi']
    });
    const result3 = usersCanCook({
      name: 'Rizka',
      resto: 'Rizka Cafe',
      menu: ['Mie', 'Pangsit']
    });
    expect(result1).toEqual([
      [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
      [ "Kebab", "Daging Sapi", "Tortilla" ],
      [ "Bakso", "Daging Sapi", "Terigu" ]
    ]);
    expect(result2).toEqual([
      [ "Dimsum", "Udang", "Ayam", "Kepiting" ],
      [ "Ayam Geprek", "Ayam", "Sambal", "Bawang" ]
    ]);
    expect(result3).toEqual("Menu not found");
  });

  test("check restriction (-6)", async () => {
    const checkRestriction = new Restriction("../2.js");
    checkRestriction.rules = ["match", "split", "concat", "search"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});