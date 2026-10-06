const fill = require("../index");
const Restriction = require("hacktiv8-restriction");

describe("fill test case", () => {
  it("should return a function (0)", () => {
    expect(fill).toBeInstanceOf(Function);
  });

  it(`Should fill the correct data when argument on parameter data, value, start and end is present (20)`, () => {
    const result1 = fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4);
    const result2 = fill(
      ["Alpha", "Beta", "Charlie", "Delta"],
      "Foxtrot",
      1,
      3
    );
    const result3 = fill(
      ["Alpha", "Beta", "Charlie", "Delta"],
      "Juliett",
      3,
      20
    );

    expect(result1).toBeInstanceOf(Array);
    expect(result2).toBeInstanceOf(Array);
    expect(result3).toBeInstanceOf(Array);

    expect(result1).toEqual(["Alpha", "Beta", "Echo", "Echo"]);
    expect(result2).toEqual(["Alpha", "Foxtrot", "Foxtrot", "Delta"]);
    expect(result3).toEqual(["Alpha", "Beta", "Charlie", "Juliett"]);
  });

  it(`Should fill the correct data when argument on parameter end is empty (20)`, () => {
    const result1 = fill(
      ["Alpha", "Beta", "Charlie", "Delta", "Echo"],
      "Hotel",
      1
    );
    const result2 = fill(
      ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"],
      "India",
      3
    );

    expect(result1).toBeInstanceOf(Array);
    expect(result2).toBeInstanceOf(Array);

    expect(result1).toEqual(["Alpha", "Hotel", "Hotel", "Hotel", "Hotel"]);
    expect(result2).toEqual([
      "Alpha",
      "Beta",
      "Charlie",
      "India",
      "India",
      "India",
    ]);
  });

  it(`Should fill the correct data when argument on parameter start and end is empty (20)`, () => {
    const result1 = fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo");
    const result2 = fill(
      ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"],
      "India"
    );

    expect(result1).toBeInstanceOf(Array);
    expect(result2).toBeInstanceOf(Array);

    expect(result1).toEqual(["Echo", "Echo", "Echo", "Echo"]);
    expect(result2).toEqual([
      "India",
      "India",
      "India",
      "India",
      "India",
      "India",
    ]);
  });

  it(`Should return error message when argument on parameter value, start and end is empty (15)`, () => {
    const result1 = fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]);
    const result2 = fill([
      "Alpha",
      "Beta",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
    ]);

    expect(result1).toEqual("Invalid input");
    expect(result2).toEqual("Invalid input");
  });

  it(`Should return message when all argument is empty (10)`, () => {
    const result1 = fill();

    expect(result1).toEqual("Invalid input");
  });

  test("check restriction (-100)", async () => {
    const checkRestriction = new Restriction("../index.js");
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
