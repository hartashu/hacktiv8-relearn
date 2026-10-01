const startUpCompetition = require("../index");
const Restriction = require("hacktiv8-restriction");

describe("startUpCompetition test case", () => {
  it("should return a function (0)", () => {
    expect(startUpCompetition).toBeInstanceOf(Function);
  });

  it(`should return appropriate startup data (95)`, () => {
    let indonesia = [
      "Tikipidia-17-E",
      "Bikilipik-08-E",
      "Bhinniki-07-E",
      "BleBle.cim-15-E",
      "Triviliki-16-T",
      "Tikit.cim-12-T",
      "Hilidic-15-H",
      "Siyirbix-17-A",
      "TikingSiyir.ci-16-A",
    ];

    let singapore = [
      'Shipee-18-E',
      'Lizidi-19-E',
      'HalalTrip-07-T',
      'verylocaltrip.com-12-T',
      'Doctor Anywhere-14-H',
      'Healint-13-H',
      'SINGROW-19-A',
      'Simplyfresh-09-A',
      'eFeedLink-18-A',
    ]
    let malaysia = [
      'Dropee-17-E',
      'BookDoc-18-H',
      'dahmakan-19-A',
    ]

    const result1 = startUpCompetition(indonesia);

    expect(result1).toEqual(
      [
        ['Tikipidia', 17, 'Ecommerce'],
        ['BleBle.cim', 15, 'Ecommerce'],
        ['Triviliki', 16, 'Technology'],
        ['Hilidic', 15, 'Healthcare'],
        ['Siyirbix', 17, 'Agrotech'],
        ['TikingSiyir.ci', 16, 'Agrotech']
      ]
    );

    const result2 = startUpCompetition(singapore);

    expect(result2).toEqual(
      [
        ['Shipee', 18, 'Ecommerce'],
        ['Lizidi', 19, 'Ecommerce'],
        ['Doctor Anywhere', 14, 'Healthcare'],
        ['SINGROW', 19, 'Agrotech'],
        ['eFeedLink', 18, 'Agrotech'],
      ]
    );

    const result3 = startUpCompetition(malaysia);

    expect(result3).toEqual(
      [
        ['Dropee', 17, 'Ecommerce'],
        ['BookDoc', 18, 'Healthcare'],
        ['dahmakan', 19, 'Agrotech'],
      ]
    );
  });

  it(`should handle if parameter is invalid (5)`, () => {
    const result = startUpCompetition();
    expect(result).toEqual("Invalid Data");
  });

  it("check restriction (-20)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = ["match", "split", "concat", "search"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
