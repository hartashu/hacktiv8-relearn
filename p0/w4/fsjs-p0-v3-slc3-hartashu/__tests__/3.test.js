const {
  cariPenyakit,
  cariObat,
  cariHargaKonsultasi,
  diagnosaSemuaPasien,
} = require("../3.js");
const Restriction = require("hacktiv8-restriction");

describe("Testing no 3", () => {
  const db_penyakit = {
    flu: {
      ciri: [
        "lemas",
        "sesak nafas",
        "ngilu",
        "tidak enak badan",
        "mual",
        "diare",
        "demam",
        "nyeri otot",
        "batuk kering",
        "gangguan pernafasan akut",
        "cairan di paru-paru",
        "sakit bagian abdominal",
        "tidak nafsu makan",
      ],
      obat: [
        ["kunyit", 10000],
        ["jahe merah", 5000],
        ["jahe kuning", 4000],
      ],
      konsultasi: 1000000,
    },
    antrax: {
      ciri: [
        "Sakit tenggorokan",
        "sulit bernafas",
        "demam",
        "tidak nyaman di dada",
        "nyeri otot",
        "nyeri saat menelan",
        "mual",
        "batuk darah",
        "lemas",
      ],
      obat: [
        ["ciprofloxacin", 45000],
        ["doxycycline", 20000],
        ["penicilin", 35000],
      ],
      konsultasi: 50000,
    },
  };

  test("cariPenyakit function return the expected output (10)", () => {
    let result1 = cariPenyakit(
      {
        nama: "thanos",
        keluhan: ["sulit bernafas", "lemas", "demam", "batuk darah"],
      },
      db_penyakit
    );
    let result2 = cariPenyakit(
      {
        nama: "heri wahyudianto",
        keluhan: ["mata berair", "berkunang kunang"],
      },
      db_penyakit
    );
    let result3 = cariPenyakit(
      {
        nama: "joker",
        keluhan: ["nyeri otot", "lemas", "mual", "batuk kering"],
      },
      db_penyakit
    );

    expect(result1).toEqual("antrax");
    expect(result2).toEqual("ambigu");
    expect(result3).toEqual("flu");
  });

  test("cariObat function return the expected output (10)", () => {
    let result1 = cariObat("flu", db_penyakit);
    let result2 = cariObat("antrax", db_penyakit);
    let result3 = cariObat("ambigu", db_penyakit);

    expect(result1).toEqual(["jahe kuning", 4000]);
    expect(result2).toEqual(["doxycycline", 20000]);
    expect(result3).toEqual("tidak ada obat");
  });

  test("cariHargaKonsultasi function return the expected output (10)", () => {
    let result1 = cariHargaKonsultasi("flu", db_penyakit);
    let result2 = cariHargaKonsultasi("antrax", db_penyakit);
    let result3 = cariHargaKonsultasi("ambigu", db_penyakit);

    expect(result1).toEqual(1000000);
    expect(result2).toEqual(50000);
    expect(result3).toEqual("tidak perlu dokter");
  });

  test("diagnosaSemuaPasien function return the expected output (18)", () => {
    let result1 = diagnosaSemuaPasien(
      [
        {
          nama: "heri wahyudianto",
          keluhan: ["mata berair", "berkunang kunang"],
        },
        {
          nama: "joker",
          keluhan: ["nyeri otot", "lemas", "mual", "batuk kering"],
        },
        {
          nama: "thanos",
          keluhan: ["sulit bernafas", "lemas", "demam", "batuk darah"],
        },
        {
          nama: "bad boy",
          keluhan: ["cairan di paru-paru", "sakit bagian abdominal"],
        },
      ],
      db_penyakit
    );
    let result2 = diagnosaSemuaPasien(
      [
        {
          nama: "andi",
          keluhan: ["batuk kering", "demam", "batuk darah"],
        },
        {
          nama: "budi",
          keluhan: ["tidak nyaman di dada", "lemas", "nyeri saat menelan"],
        },
        {
          nama: "charlie",
          keluhan: ["lemas", "demam"],
        },
        {
          nama: "delta",
          keluhan: ["Sakit tenggorokan", "tidak nyaman di dada", "ngilu"],
        },
        {
          nama: "echo",
          keluhan: ["tidak enak badan", "nyeri otot", "sulit bernafas"],
        },
      ],
      db_penyakit
    );

    expect(result1).toEqual({
      ambigu: [
        {
          nama: "heri wahyudianto",
          obat: "tidak ada obat",
          biaya: "tidak ada biaya",
        },
      ],
      flu: [
        {
          nama: "joker",
          obat: "jahe kuning",
          biaya: 1004000,
        },
        {
          nama: "bad boy",
          obat: "jahe kuning",
          biaya: 1004000,
        },
      ],
      antrax: [
        {
          nama: "thanos",
          obat: "doxycycline",
          biaya: 70000,
        },
      ],
    });
    expect(result2).toEqual({
      ambigu: [
        { nama: "andi", obat: "tidak ada obat", biaya: "tidak ada biaya" },
        {
          nama: "charlie",
          obat: "tidak ada obat",
          biaya: "tidak ada biaya",
        },
        { nama: "echo", obat: "tidak ada obat", biaya: "tidak ada biaya" },
      ],
      antrax: [
        { nama: "budi", obat: "doxycycline", biaya: 70000 },
        { nama: "delta", obat: "doxycycline", biaya: 70000 },
      ],
    });
  });

  test("check restriction (-100)", async () => {
    const checkRestriction = new Restriction("../3.js");
    checkRestriction.rules = ["match", "split", "concat", "search"];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
});
