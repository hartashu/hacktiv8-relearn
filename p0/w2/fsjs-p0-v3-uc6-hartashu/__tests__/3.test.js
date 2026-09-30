/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require("hacktiv8-restriction");
const sittingArrangement = require("../3");
/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/

/*
========================================================================================================
PASTIKAN SOLUSI YANG DITULIS SESUAI DENGAN SKENARIO DIBAWAH INI
========================================================================================================
*/
describe("sitting arrangement", () => {
  it("should show a list of seating friends (100)", () => {
    const result = sittingArrangement(["A", "B", "C"], 0);
    expect(result).toMatch(/Invalid number/);

    const result2 = sittingArrangement(
      ["Juli", "Nisa", "Desi", "Ulfa", "Puji"],
      2
    );
    expect(result2).toEqual([
      ["Juli", "Nisa"],
      ["Desi", "Ulfa"],
      ["Puji", "Kursi Kosong"],
    ]);

    const result3 = sittingArrangement(["Yosia", "Asrawi", "Andru"], 3);
    expect(result3).toEqual([["Yosia", "Asrawi", "Andru"]]);

    const result4 = sittingArrangement(
      ["Lukman", "Adam", "Dimas", "Hansin", "Orion"],
      4
    );
    expect(result4).toEqual([
      ["Lukman", "Adam", "Dimas", "Hansin"],
      ["Orion", "Kursi Kosong", "Kursi Kosong", "Kursi Kosong"],
    ]);
  });
  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../3.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "pop",
      "unshift",
      "shift",
    ];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
