/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require("hacktiv8-restriction");
const vocalSeeker = require("../2");
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
describe("vocal seeker", () => {
  it("should display the number of vowels and their characters (100)", () => {
    const result = vocalSeeker([
      ["*", "*", "*", 10],
      ["*", "*", -5, -10, "*", 100],
      ["a", "A", "o", "b"],
    ]);
    expect(typeof result).toBe("string");
    expect(result).toMatch(/vokal ditemukan 3 dan kumpulan vokal adalah aAo/);

    const result2 = vocalSeeker([
      ["M", "i", 10, "D"],
      ["*", 3, -11, "p", 20, 10],
      ["o", "M", "*", -19, 20, "E"],
      ["L", "*", -5, -10, "*", "o", 2, 4, 5],
    ]);
    expect(typeof result2).toBe("string");
    expect(result2).toMatch(/vokal ditemukan 4 dan kumpulan vokal adalah ioEo/);

    const result3 = vocalSeeker([
      [11, "*", "o"],
      ["G", "U", "*", 9],
      ["*", -12, "*", "*", 10, "i"],
      [2, "A", "*", "*", 5],
      ["*", 90, 40, "u", "*"],
    ]);
    expect(typeof result3).toBe("string");
    expect(result3).toMatch(
      /vokal ditemukan 5 dan kumpulan vokal adalah oUiAu/
    );
  });
  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../2.js");
    checkRestriction.rules = [
      "match",
      "split",
      "concat",
      "pop",
      "push",
      "unshift",
      "shift",
    ];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
