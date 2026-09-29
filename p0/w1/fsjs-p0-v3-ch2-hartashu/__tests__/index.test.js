const { execSync } = require("child_process");
const fs = require("fs");

const reconstructedFilename = "reconstructed.js";

const numberRepeater = (word) => {
  let solution = fs.readFileSync("./index.js", "utf-8");

  solution = solution.replace(
    /(let|var) word .*/,
    // to handle undefined or null, it should not be quoted
    `$1 word = ${typeof word === "string" ? `"${word}"` : word}`
  );
  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
};

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename);
  }
});

describe("numberRepeater", () => {
  it("Should be able to solve the problem correctly (100)", () => {
    const expected1 = "hackttivvvvvvvvv";
    const expected2 = "I Loove Coooooding";
    const expected3 = "phaaaaase preeeeparatttion";
    const expected4 = "Jaaaaavaaaaascriipt";
    const expected5 = "Tidak ada kata yang bisa di proses";

    const result1 = numberRepeater("hackt1iv8");
    const result2 = numberRepeater("I Lo1ve Co4ding");
    const result3 = numberRepeater("pha4se pre3parat2ion");
    const result4 = numberRepeater("Ja4va4scri1pt");
    const result5 = numberRepeater("");

    expect(result1).toMatch(expected1);
    expect(result2).toMatch(expected2);
    expect(result3).toMatch(expected3);
    expect(result4).toMatch(expected4);
    expect(result5).toMatch(expected5);
  });
});
