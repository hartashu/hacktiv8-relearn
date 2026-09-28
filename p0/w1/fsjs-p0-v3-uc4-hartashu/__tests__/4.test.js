/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");
const fs = require("fs");
const checkRestriction = require("hacktiv8-restriction");
const solutionPath = "../4.js";

const reconstructedFilename = "reconstructed.js";

const ubahHuruf = (kata) => {
  let solution = fs.readFileSync("./4.js", "utf-8");

  solution = solution.replace(
    /(let|var) kata .*/,
    // to handle undefined or null, it should not be quoted
    `$1 kata = ${typeof kata === "string" ? `"${kata}"` : kata}`
  );

  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
};

const solution = (kata) => {
  let hasil = "";
  for (let i = 0; i < kata.length; i++) {
    let huruf = kata[i].toLowerCase();
    if (
      huruf === "a" ||
      huruf === "i" ||
      huruf === "u" ||
      huruf === "e" ||
      huruf === "o"
    ) {
      hasil += "$";
    } else {
      hasil += kata[i];
    }
  }
  return hasil;
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
describe('Ubah huruf vocal menjadi "$"', () => {
  it("Check for uppercase words (25)", () => {
    const word = "HAHA";
    const word2 = "AIUEO";
    expect(ubahHuruf(word2)).toMatch(solution(word2));
    expect(ubahHuruf(word)).toMatch(solution(word));
  });
  it("Check for lowercase words (25)", () => {
    const word = "hohoh";
    const word2 = "aiueo";
    expect(ubahHuruf(word2)).toMatch(solution(word2));
    expect(ubahHuruf(word)).toMatch(solution(word));
  });
  it("Check for mixedCase words (50)", () => {
    const word = "AbracadabraSIMsalaBIM";
    const word2 = "aWhiteGreyFoxFoundShelter";
    const word3 = "aAiIuUeEoO";
    expect(ubahHuruf(word3)).toMatch(solution(word3));
    expect(ubahHuruf(word2)).toMatch(solution(word2));
    expect(ubahHuruf(word)).toMatch(solution(word));
  });
  it("should check restriction rules (-30)", async () => {
    const checkRestriction = new Restriction("../4.js");
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
