const {
  convertSymbol,
  splitNumber,
  decrementOdd,
  convertNumber,
  result,
} = require("../index.js");
const Restriction = require("hacktiv8-restriction");

describe("Symbol Translate", () => {
  it("should covert symbols to number (20)", () => {
    const result1 = convertSymbol([
      "!(",
      "#&",
      "@@",
      "@%",
      "!@",
      "!%",
      "&#",
      "#%",
      "@%",
      "#!",
    ]);
    const expected = [19, 37, 22, 25, 12, 15, 73, 35, 25, 31];
    expect(result1).toEqual(expect.arrayContaining(expected));
  });

  it("should decrement odd number by the length of array (20)", () => {
    const result1 = decrementOdd([19, 37, 12, 25, 22, 15, 73, 35, 25, 31]);
    const expected = [9, 27, 12, 15, 22, 5, 63, 25, 15, 21];
    expect(result1).toEqual(expect.arrayContaining(expected));
  });

  it("should split an array into multi dimension array (20)", () => {
    const result = splitNumber([9, 27, 12, 15, 22, 5, 63, 25, 15, 21]);
    const expected = [[9], [12, 15, 22, 5], [25, 15, 21]];
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should conver number to letter (20)", () => {
    const result1 = convertNumber([[9], [12, 15, 22, 5], [25, 15, 21]]);
    const expected = "i love you";
    expect(result1).toBe(expected);
  });

  it("should produce output which match with requirements (20)", () => {
    const result1 = result([
      "!(",
      "#&",
      "!@",
      "@%",
      "@@",
      "!%",
      "&#",
      "#%",
      "@%",
      "#!",
    ]);
    const expected = "i love you";

    const result2 = result([
      "!@",
      "!&",
      "@)",
      "#!",
      "&#",
      "!(",
      "@&",
      "%%",
      "!(",
      "##",
      "#&",
      "@^",
    ]);
    const expected2 = "lets go guyz";

    const result3 = result([
      "!%",
      "@&",
      "$",
      "!&",
      "$#",
      "*",
      "!#",
      "!%",
      "@#",
      "@)",
      "@!",
      "@@",
    ]);
    const expected3 = "code hacktiv";

    expect(result1).toBe(expected);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
  });

  test("check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "search",
      "pop",
      "unshift",
      "shift",
    ];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
