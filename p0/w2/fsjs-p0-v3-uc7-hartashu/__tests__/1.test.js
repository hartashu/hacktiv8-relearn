const tentukanDeretGeometri = require("../1");

describe("Deret Geometri", () => {
  test("should return requirement output parameter fill with test case (100)", () => {
    const result1 = tentukanDeretGeometri([1, 3, 9, 27, 81]);
    expect(result1).toBe(true);

    const result2 = tentukanDeretGeometri([2, 4, 8, 16, 32]);
    expect(result2).toBe(true);

    const result3 = tentukanDeretGeometri([2, 4, 6, 8]);
    expect(result3).toBe(false);

    const result4 = tentukanDeretGeometri([2, 6, 18, 54]);
    expect(result4).toBe(true);

    const result5 = tentukanDeretGeometri([1, 2, 3, 4, 7, 9]);
    expect(result5).toBe(false);

    const result6 = tentukanDeretGeometri([1, 4, 6, 9, 12, 10]);
    expect(result6).toBe(false);
  });
});
