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
  let solution = fs.readFileSync("./3.js", "utf-8");

  solution = solution.replace(
    /(let|var|const) kalimat .*/,
    // to handle undefined or null, it should not be quoted
    `$1 kalimat = ${typeof value === "string" ? `"${value}"` : value}`
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
describe("hitung jumlah kata", () => {
  it("should show the number of words of the sentence (100)", () => {
    const result1 = runTest("I have a dream");
    const result2 = runTest("I believe I can code");
    const result3 = runTest("I");
    const result4 = runTest("Lorem ipsum dolor sit amet");
    const result5 = runTest("Sample text");
    const result6 = runTest(" ");
    const result7 = runTest("");
    expect(result1).toMatch(/4/);
    expect(result2).toMatch(/5/);
    expect(result3).toMatch(/1/);
    expect(result4).toMatch(/5/);
    expect(result5).toMatch(/2/);
    expect(result6).toMatch(/0/);
    expect(result7).toMatch(/0/);
  });

  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../3.js");
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
