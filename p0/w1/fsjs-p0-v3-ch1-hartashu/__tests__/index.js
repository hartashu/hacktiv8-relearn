const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");
const fs = require("fs");

const reconstructedFilename = "reconstructed.js";

const duniaPantasi = (nama, umur, tinggi, uang) => {
  let solution = fs.readFileSync("./index.js", "utf-8");

  solution = solution.replace(
    /(let|var) nama .*/,
    // to handle undefined or null, it should not be quoted
    `$1 nama = ${typeof nama === "string" ? `"${nama}"` : nama}`
  );

  solution = solution.replace(
    /(let|var) umur .*/,
    // to handle undefined or null, it should not be quoted
    `$1 umur = ${typeof umur === "string" ? `"${umur}"` : umur}`
  );

  solution = solution.replace(
    /(let|var) tinggi .*/,
    // to handle undefined or null, it should not be quoted
    `$1 tinggi = ${typeof tinggi === "string" ? `"${tinggi}"` : tinggi}`
  );

  solution = solution.replace(
    /(let|var) uang .*/,
    // to handle undefined or null, it should not be quoted
    `$1 uang = ${typeof uang === "string" ? `"${uang}"` : uang}`
  );

  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
};

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename);
  }
});

describe("Dunia Pantasi", () => {
  it("should be able to handle if age is less than 18 (15)", () => {
    const result1 = duniaPantasi("Fajrin", 17, 180, 10000);
    const result2 = duniaPantasi("Ihsan", 15, 165, 30000);
    expect(result1).toMatch(
      /Maaf Fajrin, kamu tidak dapat memasuki kawasan ini!/i
    );
    expect(result2).toMatch(
      /Maaf Ihsan, kamu tidak dapat memasuki kawasan ini!/i
    );
  });

  it("should be able to handle every conditions (70)", () => {
    const result1 = duniaPantasi("Fajrin", 20, 180, 100000);
    const result2 = duniaPantasi("Ihsan", 18, 166, 30000);
    const result3 = duniaPantasi("Fajrin", 20, 165, 100000);
    const result4 = duniaPantasi("Ihsan", 18, 150, 30000);
    expect(result1).toMatch(
      /Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!/i
    );
    expect(result2).toMatch(
      /Kamu kurang uang sebanyak 20000 untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!/i
    );
    expect(result3).toMatch(
      /Tinggi kamu kurang 1cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!/i
    );
    expect(result4).toMatch(
      /Tinggi kamu kurang 16cm dan kamu kurang uang sebanyak 20000 untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!/i
    );
  });

  it("should check restriction rules (-17)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = ["match", "split", "concat", "pop"];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
