const Restriction = require("hacktiv8-restriction");
const ladder = require("../1");

describe("interesting ladder array", () => {
  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../1.js");
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

  test("should show the character ladder of the array (100)", () => {
    const result = ladder("hacktiv8");
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([
      ["h", "a", "c", "k", "t", "i", "v", "8"],
      ["h", "a", "c", "k", "t", "i", "v"],
      ["h", "a", "c", "k", "t", "i"],
      ["h", "a", "c", "k", "t"],
      ["h", "a", "c", "k"],
      ["h", "a", "c"],
      ["h", "a"],
      ["h"],
    ]);

    const result2 = ladder("indonesia");
    expect(Array.isArray(result2)).toBe(true);
    expect(result2).toEqual([
      ["i", "n", "d", "o", "n", "e", "s", "i", "a"],
      ["i", "n", "d", "o", "n", "e", "s", "i"],
      ["i", "n", "d", "o", "n", "e", "s"],
      ["i", "n", "d", "o", "n", "e"],
      ["i", "n", "d", "o", "n"],
      ["i", "n", "d", "o"],
      ["i", "n", "d"],
      ["i", "n"],
      ["i"],
    ]);

    const result3 = ladder("covid-19");
    expect(Array.isArray(result3)).toBe(true);
    expect(result3).toEqual([
      ["c", "o", "v", "i", "d", "-", "1", "9"],
      ["c", "o", "v", "i", "d", "-", "1"],
      ["c", "o", "v", "i", "d", "-"],
      ["c", "o", "v", "i", "d"],
      ["c", "o", "v", "i"],
      ["c", "o", "v"],
      ["c", "o"],
      ["c"],
    ]);

    const result4 = ladder("pandemic");
    expect(Array.isArray(result4)).toBe(true);
    expect(result4).toEqual([
      ["p", "a", "n", "d", "e", "m", "i", "c"],
      ["p", "a", "n", "d", "e", "m", "i"],
      ["p", "a", "n", "d", "e", "m"],
      ["p", "a", "n", "d", "e"],
      ["p", "a", "n", "d"],
      ["p", "a", "n"],
      ["p", "a"],
      ["p"],
    ]);
  });
});
