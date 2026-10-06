/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");
const fs = require("fs");
const reconstructedFilename = "reconstructed.js";

const runTest = (val1) => {
  let solution = fs.readFileSync("./3.js", "utf-8");

  solution = solution.replace(/(let|var|const) detik .*/, `$1 detik = ${val1}`);

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
describe("conversion of seconds into minutes", () => {
  it("should return conversion of seconds into minutes from second value (100)", () => {
    const result1 = runTest(88);
    const result2 = runTest(44);
    const result3 = runTest(61);
    const result4 = runTest(99);
    const result5 = runTest(143);
    const result6 = runTest(37);
    const result7 = runTest(81);
    const result8 = runTest(203);
    const result9 = runTest(79);
    const result10 = runTest(170);
    expect(result1).toMatch("1:28");
    expect(result2).toMatch("0:44");
    expect(result3).toMatch("1:01");
    expect(result4).toMatch("1:39");
    expect(result5).toMatch("2:23");
    expect(result6).toMatch("0:37");
    expect(result7).toMatch("1:21");
    expect(result8).toMatch("3:23");
    expect(result9).toMatch("1:19");
    expect(result10).toMatch("2:50");
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
