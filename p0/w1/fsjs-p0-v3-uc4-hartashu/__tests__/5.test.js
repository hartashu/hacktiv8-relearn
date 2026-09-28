/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");
const fs = require("fs");
const reconstructedFilename = "reconstructed.js";

const runTest = (value) => {
  let solution = fs.readFileSync("./5.js", "utf-8");

  solution = solution.replace(
    /(let|var|const) (angka[; =]|angka\b).*/,
    `$1 angka = ${value}`
  );

  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
};

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename);
  }
});
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
describe("palindrome angka", () => {
  it("should return the palindrome number of the number after (100)", () => {
    const result1 = runTest(10);
    const result2 = runTest(175);
    const result3 = runTest(210);
    const result4 = runTest(153);
    const result5 = runTest(90);
    const result6 = runTest(27);
    expect(result1).toMatch(/11/);
    expect(result2).toMatch(/181/);
    expect(result3).toMatch(/212/);
    expect(result4).toMatch(/161/);
    expect(result5).toMatch(/99/);
    expect(result6).toMatch(/33/);
  });

  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../5.js");
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
