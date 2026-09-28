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
  let solution = fs.readFileSync("./2.js", "utf-8");

  solution = solution.replace(
    /(let|var|const) kata .*/,
    // to handle undefined or null, it should not be quoted
    `$1 kata = ${typeof value === "string" ? `"${value}"` : value}`
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
describe("data type challenge", () => {
  it("should show username with value when input type is string (20)", () => {
    const result1 = runTest("Stefani");
    const result2 = runTest("Foxie");
    expect(result1).toMatch(/username Stefani/i);
    expect(result2).toMatch(/username Foxie/i);
  });

  it("should show age with value when input type is number (20)", () => {
    const result1 = runTest(25);
    const result2 = runTest(37);
    expect(result1).toMatch(/age 25/i);
    expect(result2).toMatch(/age 37/i);
  });

  it("should show message when input type is number with 0 or empty string or undefined or null or NaN (20)", () => {
    const expected = /Invalid data/i;
    const result1 = runTest(0);
    const result2 = runTest("");
    const result3 = runTest(null);
    const result4 = runTest(NaN);
    const result5 = runTest(undefined);
    expect(result1).toMatch(expected);
    expect(result2).toMatch(expected);
    expect(result3).toMatch(expected);
    expect(result4).toMatch(expected);
    expect(result5).toMatch(expected);
  });

  it("should show username with value when input type is string (20)", () => {
    const result1 = runTest("0");
    const result2 = runTest("123");
    expect(result1).toMatch(/username 0/i);
    expect(result2).toMatch(/username 123/i);
  });

  it("should show message when input type is boolean with true value (20)", () => {
    const result1 = runTest(true);
    const result2 = runTest(false);
    expect(result1).toMatch(/thank you for agreeing/i);
    expect(result2).toMatch(/cannot proceed without agreement/i);
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
