/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const countMe = require("../2");
const Restriction = require("hacktiv8-restriction");
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
describe("Count Me Challenge", () => {
  it("should return requirement output (100)", async () => {
    const result1 = countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]);
    expect(result1).toEqual({
      1: 2,
      3: 1,
      8: 1,
      9: 1,
      10: 2,
      12: 1,
      15: 2,
    });

    const result2 = countMe([
      "Sofyan",
      "Ricky",
      "Sofyan",
      "Semmi",
      "Semmi",
      "Wika",
    ]);
    expect(result2).toEqual({ Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 });

    const result3 = countMe([
      "bmw",
      "nissan",
      "toyota",
      "toyota",
      "bmw",
      "suzuki",
    ]);
    expect(result3).toEqual({ bmw: 2, nissan: 1, toyota: 2, suzuki: 1 });
  });
  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../2.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
