[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19376889&assignment_repo_type=AssignmentRepo)
# Makan Skuy

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

### HINTS

- Nama function **tidak boleh diganti dengan nama function lainnya**. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

---

## Directions

Start-up **Makan Skuy** adalah start-up yang bergerak di bidang makanan dan minuman, ingin membuat fitur untuk mengkategorikan beberapa restoren berdasarkan kriteria tertentu.

Bantulah Start-Up **Makan Skuy** untuk menyelesaikan project diatas, dengan ketentuan sebagai berikut:

### Release 1 - `mergeOrder`

- Function `mergeOrder` merupakan fungsi untuk menggabungkan data order dari setiap restoran
- Function `mergeOrder` memiliki 1 parameter input yaitu:
  - `data` berupa _array of object_ yang berisi **data restoran**.
  - key **`orders`** pada setiap object merupakan sebuah `array` yang memiliki array dengan format **`[ namaMenu, jumlahPemesanan ]`**
- Function `mergeOrder` memiliki output berupa _array of array_ yang berisi **order setiap restoran yang telah digabungkan**.
- Contoh:

  ```js
  function mergeOrder(data) {
    // write your code here
  }

  console.log(
    mergeOrder([
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
    ])
  );

  /*
  [
   [
     'Burger',   200,
     'Kentang',  130,
     'CocaCola', 400,
     'IceCream', 186
   ],
   [
     'Ayam',     126,
     'CocaCola', 206,
     'Burger',   368,
     'IceCream', 80
   ],
   [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
  ]
  */
  ```

### Release 2 - `calculateTotalSales`

- Function `calculateTotalSales` merupakan fungsi untuk menghitung total penjualan dari setiap restoran. Total penjualan diperoleh dengan menggunakan data pada variabel `price list` untuk mendapatkan setiap harga pesanan
- Function `calculateTotalSales` memiliki 1 parameter input yaitu:
  - `data` berupa _array of array_ yang berisi **order dari setiap restoran**.
- Function `calculateTotalSales` memiliki output berupa _array of number_ yang merupakan **total penjualan dari setiap restoran**.
- Contoh:

  ```js
  function calculateTotalSales(data) {
    let priceList = [
      { name: "Burger", price: 25000 },
      { name: "Kentang", price: 1000 },
      { name: "Ayam", price: 17000 },
      { name: "CocaCola", price: 7000 },
      { name: "IceCream", price: 3000 },
    ];
    // Your code here
  }

  console.log(
    calculateTotalSales([
      ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
      ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
      ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
    ])
  );
  // [ 8488000, 13024000, 13765000 ]
  ```

### Release 3 - `calculateTotalVote`

- Function `calculateTotalVote` merupakan fungsi untuk menghitung total vote yang diperoleh oleh setiap restoran. Total vote diperoleh dengan menghitung total poin berdasarkan review yang diperoleh setiap restoran.
  ```
  - Setiap reviewer akan memberikan 25 point
  - Setiap 100 point akan mendapatkan 1 vote
  ```
- Function `calculateTotalVote` memiliki 1 parameter input yaitu:
  - `data` berupa _array of object_ yang berisi **data restoran**.
- Function `calculateTotalVote` memiliki output berupa _array of number_ yang merupakan **data total vote setiap restoran**.

- Contoh:

```js
function calculateTotalVote(data) {
  // Your code here
}

console.log(
  calculateTotalVote([
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
  ])
);
// [ 35, 65, 20 ]
```

### Release 4 - `makanSkuy`

- Function `makanSkuy` merupakan merupakan main function yang akan memanggil fungsi-fungsi lain di dalam nya dan berfungsi untuk mengkategorikan setiap restoran berdasarkan kriteria berikut.
  ```
  - ThreeStars = restoran yang memiliki total sales diatas 20.000.000 dan total vote diatas 100
  - TwoStars = restoran yang memiliki total sales pada rentang 10.000.000 - 20.000.000 dan total vote pada rentang 50 - 100
  - OneStar = restoran yang tidak termasuk pada kedua kategori di atas
  ```
- Function `makanSkuy` memiliki 1 parameter input yaitu:
  - `data` berupa _array of object_ yang berisi **data restoran**.
- Function `makanSkuy` memiliki output berupa _object_ yang merupakan **data restoran yang sudah dikelompokkan berdasarkan kategorinya**.

- Jika parameter `data` **invalid** atau **falsy**, maka outputnya adalah `"Invalid Data!"`
- Jika parameter `data` adalah **array kosong**, maka outputnya adalah `"Tidak ada order, order dulu ngab!"`
- Contoh:

```js
function makanSkuy(data) {
  // Your code here
}

console.log(makanSkuy()); // Invalid Data!
console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

console.log(
  makanSkuy([
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
      restaurant : "Karl Sr",
      orders: [
        ["Ayam", 65],
        ["CocaCola", 510],
        ["Burger", 699],
        ["Kentang", 274],
      ],
      reviewers: 412
    },
  ])
);
/*
{
  OneStar: [ 'MekDun' ],
  TwoStars: [ 'Lawmore' ],
  ThreeStars: [ 'Karl Sr' ]
}
*/
```

Ikuti Release-Release diatas sehingga dapat membuat program ini berjalan dengan sesuai yang diinginkan!
