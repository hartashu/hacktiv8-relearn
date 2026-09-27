const { execSync } = require("child_process");
const fs = require("fs");

const reconstructedFilename = "reconstructed.js";

const stringPart1 = (
  word,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  word2,
  word3,
  word4
) => {
  let solution = fs.readFileSync("./1.js", "utf-8");

  solution = solution.replace(
    /(let|var) word .*/,
    `$1 word = ${typeof word === "string" ? `"${word}"` : word}`
  );
  solution = solution.replace(
    /(let|var) second .*/,
    `$1 second = ${typeof second === "string" ? `"${second}"` : second}`
  );
  solution = solution.replace(
    /(let|var) third .*/,
    `$1 third = ${typeof third === "string" ? `"${third}"` : third}`
  );
  solution = solution.replace(
    /(let|var) fourth .*/,
    `$1 fourth = ${typeof fourth === "string" ? `"${fourth}"` : fourth}`
  );
  solution = solution.replace(
    /(let|var) fifth .*/,
    `$1 fifth = ${typeof fifth === "string" ? `"${fifth}"` : fifth}`
  );
  solution = solution.replace(
    /(let|var) sixth .*/,
    `$1 sixth = ${typeof sixth === "string" ? `"${sixth}"` : sixth}`
  );
  solution = solution.replace(
    /(let|var) seventh .*/,
    `$1 seventh = ${typeof seventh === "string" ? `"${seventh}"` : seventh}`
  );
  solution = solution.replace(
    /(let|var) word2 .*/,
    `$1 word2 = ${typeof word2 === "string" ? `"${word2}"` : word2}`
  );
  solution = solution.replace(
    /(let|var) word3 .*/,
    `$1 word3 = ${typeof word3 === "string" ? `"${word3}"` : word3}`
  );
  solution = solution.replace(
    /(let|var) word4 .*/,
    `$1 word4 = ${typeof word4 === "string" ? `"${word4}"` : word4}`
  );

  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
};

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename);
  }
});

describe("String", () => {
  describe("Check print results part 1", () => {
    it("should print 7 words concatenated together, then print 5 words- one per line, then again with substring, and lastly again with length of each word shown too", () => {
      const result = stringPart1(
        "JavaScript",
        "is",
        "awesome",
        "and",
        "I",
        "love",
        "it!",
        "wow JavaScript is so cool",
        "wow JavaScript is so cool",
        "wow JavaScript is so cool"
      );
      const expectedResult = `JavaScript is awesome and I love it!
First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4`;
      expect(result).toMatch(expectedResult);
    });
    it("should print 7 words concatenated together, then print 5 words- one per line, then again with substring, and lastly again with length of each word shown too", () => {
      const result = stringPart1(
        "1234567890",
        "12",
        "1234561",
        "789",
        "0",
        "1234",
        "456",
        "789 1234567890 12 34 5678",
        "789 1234567890 12 34 5678",
        "789 1234567890 12 34 5678"
      );
      const expectedResult = `1234567890 12 1234561 789 0 1234 456
First Word: 789
Second Word: 1234567890
Third Word: 12
Fourth Word: 34
Fifth Word: 5678
First Word: 789
Second Word: 1234567890
Third Word: 12
Fourth Word: 34
Fifth Word: 5678
First Word: 789, with length: 3
Second Word: 1234567890, with length: 10
Third Word: 12, with length: 2
Fourth Word: 34, with length: 2
Fifth Word: 5678, with length: 4`;
      expect(result).toMatch(expectedResult);
    });
  });
});
