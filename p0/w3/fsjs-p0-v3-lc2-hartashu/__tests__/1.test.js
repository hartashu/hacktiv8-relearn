const getStartUp = require("../1.js");
const Restriction = require("hacktiv8-restriction");

describe("Soal 1", () => {
  const result1 = getStartUp([
    "Bikilipik",
    "Tikit.cim",
    "Ilidiktir",
    "TiniHib",
  ]);

  const result2 = getStartUp([
    "Lizidi",
    "Iirbnb",
    "TikingSiyir.ci",
    "PriSihit",
    "DiktirSihit",
    "eFishiry",
    "babaAli",
    "eMeat",
  ]);

  const result3 = getStartUp([
    "Tikipidia",
    "Triviliki",
    "Hilidic",
    "Siyirbix",
    "Shipee",
    "Bhinniki",
    "BleBle.cim",
    "PigiPigi",
    "tomazo",
  ]);

  const result4 = getStartUp([
    "FoGoods",
    "FoMarts",
    "Lazora",
    "eFruit",
    "FoHealth",
    "FoTravel",
    "HaiDoc",
    "ticket.net",
  ]);

  test("Correctly return output corresponds to the test case (22)", () => {
    expect(result1).toEqual(['TiniHib', 'Ilidiktir']);
    expect(result2).toEqual(['eMeat', 'TikingSiyir.ci']);
    expect(result3).toEqual(['Shipee', 'BleBle.cim']);
    expect(result4).toEqual(['Lazora', 'ticket.net']);
  });

  test("should check restriction rules (-20)", async () => {
    const checkRestriction = new Restriction("../1.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
