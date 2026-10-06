[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19303261&assignment_repo_type=AssignmentRepo)
### RESTRICTION

- Dilarang menggunakan built-in function

### HINTS

- Gunakan built-in function `.push()`
- Nama function haruslah `startUpCompetition` dan **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Objectives

- Mampu melakukan manipulasi pada sebuah Array dengan built-in function
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Start-Up Competition adalah sebuah lomba start-up international yang di adakan tiap tahun.
Salah satu syarat kompetisi adalah startup yang diikutsertakan harus minimal berperingkat Unicorn, yaitu bila valuasi startup tersebut bernilai 14 Trilyun ke atas. Panitia diharuskan mengelompokkan dan melakukan filter terhadap data-data startup dari tiap negara. Filter dilakukan berdasarkan nilai valuasi startup.

Diberikan sebuah function `startUpCompetition` yang dapat menerima 1 parameter yaitu `startUpList` dengan tipe data Array of String.

Buatlah program di dalam function `startUpCompetition` sehingga dapat memfilter startup yang berperingkat Unicorn dan mengelompokkannya ke dalam bidang masing-masing.

Pastikan kode kamu bisa menjalankan semua test case yang diberikan!

NOTES:

- Jika parameter input nya selain _array_ atau berisi _array kosong_, maka output akan mengeluarkan `Invalid Data`.
- Data startupnya berupa string degan format `<namaStartUp>-<valuasi>-<kodeBidangStartUp>` (setiap data dipisahkan dengan karakter strip ('-'))
- Contoh:
  - "Tikipidia-17-E"
  - Nama StartUp: Tikipidia
  - Valuasi: 17
  - Bidang: E (E-commerce)
- Filter dilakukan berdasarkan nilai valuasi.

input berupa array of string

```js
[
    '<namaStartUp>-<valuasi>-<kodeBidangStartUp>',
    '<namaStartUp>-<valuasi>-<kodeBidangStartUp>',
    ...
]
```

contoh input:

```js
["Tikipidia-17-E", "Bikilipik-08-E", "Bhinniki-07-E", "BleBle.cim-15-E"];
```

output berupa array multidimensi

```js
[
  [ '<namaStartUp>', '<valuasi>', '<bidangStartUp>' ],
  [ '<namaStartUp>', '<valuasi>', '<bidangStartUp>' ],
  ...
]
```

contoh output:

```js
[
  ["Tikipidia", 17, "Ecommerce"],
  ["BleBle.cim", 15, "Ecommerce"],
];
```

penjelasan:

- Nilai valuasi minimum adalah 14 T
- Startup Tikipidia `lolos` syarat karena valuasi nya bernilai `17` T
- Startup Bikilipik `tidak lolos` syarat karena valuasi nya bernilai `8` T
- Startup Bhinniki `tidak lolos` syarat karena valuasi nya bernilai `7` T
- Startup BleBle.cim `lolos` syarat karena valuasi nya bernilai `15` T
- Bidang StartUp:
  - E: Ecommerce
  - T: Technology
  - H: Healthcare
  - A: Agrotech

```js
function startUpCompetition(startUpList) {
  // Write your code here
}

// TEST CASE 1
console.log(startUpCompetition());
// Invalid Data


// TEST CASE 2
console.log(startUpCompetition([]));
// Invalid Data


// TEST CASE 3
const indonesia = [
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
console.log(startUpCompetition(indonesia));
/*
[
  [ 'Tikipidia', 17, 'Ecommerce' ],
  [ 'BleBle.cim', 15, 'Ecommerce' ],
  [ 'Triviliki', 16, 'Technology' ],
  [ 'Hilidic', 15, 'Healthcare' ],
  [ 'Siyirbix', 17, 'Agrotech' ],
  [ 'TikingSiyir.ci', 16, 'Agrotech' ]
]
*/


// TEST CASE 4
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
console.log(startUpCompetition(singapore))
/*
[
  [ 'Shipee', 18, 'Ecommerce' ],
  [ 'Lizidi', 19, 'Ecommerce' ],
  [ 'Doctor Anywhere', 14, 'Healthcare' ],
  [ 'SINGROW', 19, 'Agrotech' ],
  [ 'eFeedLink', 18, 'Agrotech' ],
]
*/


// TEST CASE 5
let malaysia = [
  'Dropee-17-E',
  'BookDoc-18-H',
  'dahmakan-19-A',
]
console.log(startUpCompetition(malaysia))
/*
[
  [ 'Dropee', 17, 'Ecommerce' ],
  [ 'BookDoc', 18, 'Healthcare' ],
  [ 'dahmakan', 19, 'Agrotech' ],
]
*/
```
