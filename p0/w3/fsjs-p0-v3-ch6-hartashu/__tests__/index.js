const {
  mergeOrder,
  calculateTotalSales,
  calculateTotalVote,
  makanSkuy,
} = require("../index.js");
const Restriction = require("hacktiv8-restriction");

describe("Makan Skuy", () => {
  let data1 = [
    {
      restaurant: "MekDun",
      orders: [
        ["Burger", 200],
        ["Kentang", 130],
        ["CocaCola", 400],
        ["IceCream", 186],
      ],
      reviewers: 140,
    },
    {
      restaurant: "Lawmore",
      orders: [
        ["Ayam", 126],
        ["CocaCola", 206],
        ["Burger", 368],
        ["IceCream", 80],
      ],
      reviewers: 260,
    },
    {
      restaurant: "Burger Queen",
      orders: [
        ["Ayam", 85],
        ["CocaCola", 150],
        ["Burger", 450],
        ["Kentang", 20],
      ],
      reviewers: 80,
    },
    {
      restaurant: "Pendys",
      orders: [
        ["Ayam", 380],
        ["CocaCola", 246],
        ["Burger", 166],
        ["Kentang", 190],
      ],
      reviewers: 292,
    },
    {
      restaurant: "Karl Sr",
      orders: [
        ["Ayam", 65],
        ["CocaCola", 510],
        ["Burger", 699],
        ["Kentang", 274],
      ],
      reviewers: 412,
    },
  ];

  let data2 = [
    {
      restaurant: "MekDun",
      orders: [
        ["Burger", 200],
        ["Kentang", 130],
        ["CocaCola", 400],
        ["IceCream", 186],
      ],
      reviewers: 140,
    },
    {
      restaurant: "Lawmore",
      orders: [
        ["Ayam", 326],
        ["CocaCola", 306],
        ["Burger", 468],
        ["IceCream", 280],
      ],
      reviewers: 460,
    },
    {
      restaurant: "Burger Queen",
      orders: [
        ["Ayam", 85],
        ["CocaCola", 150],
        ["Burger", 450],
        ["Kentang", 20],
      ],
      reviewers: 80,
    },
    {
      restaurant: "Pendys",
      orders: [
        ["Ayam", 580],
        ["CocaCola", 246],
        ["Burger", 366],
        ["Kentang", 290],
      ],
      reviewers: 432,
    },
    {
      restaurant: "Karl Sr",
      orders: [
        ["Ayam", 65],
        ["CocaCola", 510],
        ["Burger", 699],
        ["Kentang", 274],
      ],
      reviewers: 412,
    },
  ];

  let data3 = [
    {
      restaurant: "MekDun",
      orders: [
        ["Burger", 200],
        ["Kentang", 13],
        ["CocaCola", 40],
        ["IceCream", 186],
      ],
      reviewers: 140,
    },
    {
      restaurant: "Lawmore",
      orders: [
        ["Ayam", 326],
        ["CocaCola", 306],
        ["Burger", 68],
        ["IceCream", 280],
      ],
      reviewers: 84,
    },
    {
      restaurant: "Burger Queen",
      orders: [
        ["Ayam", 80],
        ["CocaCola", 10],
        ["Burger", 450],
        ["Kentang", 20],
      ],
      reviewers: 80,
    },
    {
      restaurant: "Pendys",
      orders: [
        ["Ayam", 58],
        ["CocaCola", 26],
        ["Burger", 36],
        ["Kentang", 20],
      ],
      reviewers: 20,
    },
    {
      restaurant: "Karl Sr",
      orders: [
        ["Ayam", 65],
        ["CocaCola", 51],
        ["Burger", 69],
        ["Kentang", 74],
      ],
      reviewers: 120,
    },
  ];

  test("Should be able to handle if parameter orders is falsy (5)", () => {
    const result1 = makanSkuy();
    const result2 = makanSkuy(undefined);
    const result3 = makanSkuy(null);
    expect(result1).toEqual("Invalid Data!");
    expect(result2).toEqual("Invalid Data!");
    expect(result3).toEqual("Invalid Data!");
  });

  test("Should be able to handle if length parameter orders is 0 (5)", () => {
    const result = makanSkuy([]);
    expect(result).toEqual("Tidak ada order, order dulu ngab!");
  });

  test("Correctly return output on mergeOrder function with given requirements (15)", () => {
    const result1 = mergeOrder(data1);
    const result2 = mergeOrder(data2);
    const result3 = mergeOrder(data3);

    const expected1 = [
      ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
      ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
      ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
      ["Ayam", 380, "CocaCola", 246, "Burger", 166, "Kentang", 190],
      ["Ayam", 65, "CocaCola", 510, "Burger", 699, "Kentang", 274],
    ];

    const expected2 = [
      ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
      ["Ayam", 326, "CocaCola", 306, "Burger", 468, "IceCream", 280],
      ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
      ["Ayam", 580, "CocaCola", 246, "Burger", 366, "Kentang", 290],
      ["Ayam", 65, "CocaCola", 510, "Burger", 699, "Kentang", 274],
    ];

    const expected3 = [
      ["Burger", 200, "Kentang", 13, "CocaCola", 40, "IceCream", 186],
      ["Ayam", 326, "CocaCola", 306, "Burger", 68, "IceCream", 280],
      ["Ayam", 80, "CocaCola", 10, "Burger", 450, "Kentang", 20],
      ["Ayam", 58, "CocaCola", 26, "Burger", 36, "Kentang", 20],
      ["Ayam", 65, "CocaCola", 51, "Burger", 69, "Kentang", 74],
    ];

    expect(result1).toEqual(expect.arrayContaining(expected1));
    expect(result2).toEqual(expect.arrayContaining(expected2));
    expect(result3).toEqual(expect.arrayContaining(expected3));
  });

  test("Correctly return output on calculateTotalSales function with given requirements (20)", () => {
    const result1 = calculateTotalSales(mergeOrder(data1));
    const result2 = calculateTotalSales(mergeOrder(data2));
    const result3 = calculateTotalSales(mergeOrder(data3));

    const expected1 = [8488000, 13024000, 13765000, 12522000, 22424000];
    const expected2 = [8488000, 20224000, 13765000, 21022000, 22424000];
    const expected3 = [5851000, 10224000, 12700000, 2088000, 3261000];

    expect(result1).toEqual(expect.arrayContaining(expected1));
    expect(result2).toEqual(expect.arrayContaining(expected2));
    expect(result3).toEqual(expect.arrayContaining(expected3));
  });

  test("Correctly return output on calculateTotalVote function with given requirements (15)", () => {
    const result1 = calculateTotalVote(data1);
    const result2 = calculateTotalVote(data2);
    const result3 = calculateTotalVote(data3);

    const expected1 = [35, 65, 20, 73, 103];
    const expected2 = [35, 115, 20, 108, 103];
    const expected3 = [35, 21, 20, 5, 30];

    expect(result1).toEqual(expect.arrayContaining(expected1));
    expect(result2).toEqual(expect.arrayContaining(expected2));
    expect(result3).toEqual(expect.arrayContaining(expected3));
  });

  test("Correctly return output on main function makanSkuy with given requirements (25)", () => {
    const result1 = makanSkuy(data1);
    const result2 = makanSkuy(data2);
    const result3 = makanSkuy(data3);

    const expected1 = {
      OneStar: ["MekDun", "Burger Queen"],
      TwoStars: ["Lawmore", "Pendys"],
      ThreeStars: ["Karl Sr"],
    };
    const expected2 = {
      OneStar: ["MekDun", "Burger Queen"],
      ThreeStars: ["Lawmore", "Pendys", "Karl Sr"],
    };
    const expected3 = {
      OneStar: ["MekDun", "Lawmore", "Burger Queen", "Pendys", "Karl Sr"],
    };

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
  });

  test("check restriction (-100)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = ["match", "split", "concat", "search"];
    checkRestriction.popRules = ["keys"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
