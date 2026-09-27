/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");
const fs = require("fs");
const reconstructedFilename = "reconstructed.js";

const runTest = (val1, val2) => {
  let solution = fs.readFileSync("./2.js", "utf-8");

  solution = solution.replace(
    /(let|var|const) angka1 .*/,
    `$1 angka1 = ${val1}`
  );
  solution = solution.replace(
    /(let|var|const) angka2 .*/,
    `$1 angka2 = ${val2}`
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
describe("bandingkan kata", () => {
  it("should return true when angka2 > angka1 and return false when angka1 > angka2 (50)", () => {
    const result1 = runTest(3, 5);
    const result2 = runTest(1, 10);
    const result3 = runTest(2, 8);
    const result4 = runTest(6, 7);
    const result5 = runTest(10, 111);
    const result6 = runTest(5, 3);
    const result7 = runTest(20, 9);
    const result8 = runTest(120, 10);
    const result9 = runTest(6, 4);
    const result10 = runTest(2, 1);
    expect(result1).toMatch("true");
    expect(result2).toMatch("true");
    expect(result3).toMatch("true");
    expect(result4).toMatch("true");
    expect(result5).toMatch("true");
    expect(result6).toMatch("false");
    expect(result7).toMatch("false");
    expect(result8).toMatch("false");
    expect(result9).toMatch("false");
    expect(result10).toMatch("false");
  });

  it("should return -1 when angka1 === angka2 (50)", () => {
    const result1 = runTest(5, 5);
    const result2 = runTest(99, 99);
    const result3 = runTest(4, 4);
    const result4 = runTest(11, 11);
    const result5 = runTest(20, 20);
    expect(result1).toMatch("-1");
    expect(result2).toMatch("-1");
    expect(result3).toMatch("-1");
    expect(result4).toMatch("-1");
    expect(result5).toMatch("-1");
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
