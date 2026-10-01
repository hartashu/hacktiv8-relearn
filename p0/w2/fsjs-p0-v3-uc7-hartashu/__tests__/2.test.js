const mengelompokkanAngka = require("../2");

describe("Mengelompokkan Angka", () => {
  test("should return requirement output with paremeter test case (100)", () => {
    const result1 = mengelompokkanAngka([2, 4, 6]);

    expect(Array.isArray(result1)).toBe(true);
    expect(result1).toEqual([[2, 4], [], [6]]);

    const result2 = mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(Array.isArray(result2)).toBe(true);
    expect(result2).toEqual([
      [2, 4, 8],
      [1, 5, 7],
      [3, 6, 9],
    ]);

    const result3 = mengelompokkanAngka([100, 151, 122, 99, 111]);

    expect(Array.isArray(result3)).toBe(true);
    expect(result3).toEqual([[100, 122], [151], [99, 111]]);

    const result4 = mengelompokkanAngka([]);

    expect(Array.isArray(result4)).toBe(true);
    expect(result4).toEqual([[], [], []]);

    const result5 = mengelompokkanAngka([7, 7, 10, 15, 33, 20]);

    expect(Array.isArray(result5)).toBe(true);
    expect(result5).toEqual([
      [10, 20],
      [7, 7],
      [15, 33],
    ]);
  });
});
