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
  let solution = fs.readFileSync("./1.js", "utf-8");

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
describe("palindrome", () => {
  it("should display true when the sentence is palindrome (50)", () => {
    const result = runTest("katak");
    const result2 = runTest("kasur rusak");
    const result3 = runTest("malam");
    const result4 = runTest("radar");
    const result5 = runTest("kayak");
    expect(result).toMatch(/true/);
    expect(result2).toMatch(/true/);
    expect(result3).toMatch(/true/);
    expect(result4).toMatch(/true/);
    expect(result5).toMatch(/true/);
  });

  it("should show false when the sentence is not a palindrome (50)", () => {
    const result = runTest("makan");
    const result2 = runTest("bukan palindrome");
    const result3 = runTest("belajar perulangan");
    const result4 = runTest("tepat");
    const result5 = runTest("data");
    expect(result).toMatch(/false/);
    expect(result2).toMatch(/false/);
    expect(result3).toMatch(/false/);
    expect(result4).toMatch(/false/);
    expect(result5).toMatch(/false/);
  });

  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../1.js");
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
