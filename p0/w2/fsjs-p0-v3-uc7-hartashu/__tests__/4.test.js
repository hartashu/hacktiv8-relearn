const targetTerdekat = require("../4");

describe("Target Terdekat", () => {
  it(`should return requirment output when parameter fill with test case (100)`, () => {
    const result1 = targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"]);
    expect(result1).toBe(3);
    expect(typeof result1).toBe("number");

    const result2 = targetTerdekat(["o", " ", " ", " ", "x", "x", "x"]);
    expect(result2).toBe(4);
    expect(typeof result2).toBe("number");

    const result3 = targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "]);
    expect(result3).toBe(1);
    expect(typeof result3).toBe("number");

    const result4 = targetTerdekat([" ", " ", "o", " "]);
    expect(result4).toBe(0);
    expect(typeof result4).toBe("number");

    const result5 = targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"]);
    expect(result5).toBe(2);
    expect(typeof result5).toBe("number");

    const result6 = targetTerdekat(["o", " ", " ", " ", " ", "x", " ", "x"]);
    expect(result6).toBe(5);
    expect(typeof result6).toBe("number");

    const result7 = targetTerdekat(["x", " ", " ", " ", "x", " ", "o", "x"]);
    expect(result7).toBe(1);

    const result8 = targetTerdekat(["x", " ", " ", "o", "x", " ", " ", "x"]);
    expect(result8).toBe(1);
  });
});
