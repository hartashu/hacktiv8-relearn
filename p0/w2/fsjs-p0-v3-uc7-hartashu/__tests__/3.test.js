const Restriction = require("hacktiv8-restriction");
const { attack, damageCalculation } = require("../3");

describe("Damage Calculation", () => {
  it("should correctly returning value from damageCalculation function (50)", () => {
    const input1 = [9, 25];
    const input2 = [10, 4];
    const input3 = [5, 20];
    const input4 = [10, 50];

    expect(damageCalculation(...input1)).toBe(207);
    expect(damageCalculation(...input2)).toBe(20);
    expect(damageCalculation(...input3)).toBe(90);
    expect(damageCalculation(...input4)).toBe(480);
  });

  it("should correctly returning value from damageCalculation function (50)", () => {
    expect(attack(25)).toBe(23);
    expect(attack(4)).toBe(2);
    expect(attack(20)).toBe(18);
    expect(attack(50)).toBe(48);
  });

  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../3.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "push",
      "pop",
      "shift",
      "unshift",
    ];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
