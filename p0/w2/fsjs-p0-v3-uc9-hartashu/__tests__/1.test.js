/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const fs = require("fs");
const path = require("path");
const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");

// make new file
const rewriteFilename = "changeMe.js";
const scopeDivider = "// ==========================================";
const filePath = path.join(__dirname, "/../1.js");

// read student solution
const [solution, prob1, prob2] = fs
  .readFileSync(filePath, "utf-8")
  .split(scopeDivider);

// set test case on new file and return the value with no white space
function changeMe(prob) {
  fs.writeFileSync(rewriteFilename, solution + prob);

  return execSync(`node ${rewriteFilename}`).toString().replace(/\s/g, "");
}
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
describe("Change me", () => {
  afterAll(() => {
    if (fs.existsSync(rewriteFilename)) {
      fs.unlinkSync(rewriteFilename);
    }
  });
  it(`Should log requirement output when parameter fill with test case (100)`, () => {
    const result1 = changeMe(prob1);
    expect(result1).toEqual(
      `1.ChristEvans:{firstName:'Christ',lastName:'Evans',gender:'Male',age:41}2.RobertDowney:{firstName:'Robert',lastName:'Downey',gender:'Male',age:'InvalidBirthYear'}`
    );

    const result2 = changeMe(prob2);
    expect(result2).toEqual("");
  });
  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../1.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
