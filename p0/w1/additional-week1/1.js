/**
 * Tuliskan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, Sebuah kebun binatang ingin mengganti harga tiketnya. Saat ini, kebun binatang tersebut memiliki HARGA DASAR
 * Rp 10.000. Harga tiket masuk akan disesuaikan dengan umur dari pengunjung tersebut. Kamu diminta untuk membuat program yang akan menghitung
 * harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA dan TAHUN KELAHIRAN.
 *
 * -Umur < 2 tahun: gratis
 * -Umur 2-10:  Harga dasar
 * -Umur 11-18:  Harga dasar dikalikan 1.5
 * -Umur 19 keatas: Harga dasar dikalikan 2
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

/*

Pseudocode
---------
STORE name AS STRING WITH ANY VALUE
STORE bornYear AS NUMBER WITH ANY VALUE

STORE currentYear AS NUMBER WITH 2025
STORE age WITH currentYear MINUS bornYear
STORE price AS NUMBER WITH 10_000

IF age MORE THAN 120 OR bornYear LESS THAN 1900
  DISPLAY "Invalid age"
ELSE
  IF age LESS THAN 2
    SET price WITH "Free"
  ELSE IF age MORE THAN EQUAL 2 AND age LESS THAN EQUAL 10
    SET price WITH price
  ELSE IF age MORE THAN EQUAL 11 AND age LESS THAN EQUAL 18
    SET price WITH price TIMES 1.5
  ELSE IF age MORE THAN EQUAL 19
    SET price WITH PRICE TIMES 2
  END IF

  DISPLAY `${name}: ${price}`
END IF

*/

let name = 'Harta';
let bornYear = 2019;
let currentYear = 2020;
let age = currentYear - bornYear;
let basePrice = 10000;

if (age < 0 || age > 120 || bornYear < 1900) {
  console.log('Invalid Age');
} else {
  let price = 0;

  if (age < 2) {
    price = 0;
  } else if (age <= 10) {
    price = basePrice;
  } else if (age <= 18) {
    price = basePrice * 1.5;
  } else {
    price = basePrice * 2;
  }

  const displayPrice = price === 0 ? 'Gratis' : price;

  console.log(`Nama: ${name}, Harga Tiket: ${displayPrice}`);
}

// let name = 'Harta';
// let bornYear = 1991;
// let currentYear = 2025;
// let age = currentYear - bornYear;
// let price = 10_000;

// if (age > 120 || bornYear < 1900) {
//   console.log('Invalid age');
// } else {
//   if (age < 2) {
//     price = 'Free';
//   } else if (age >= 2 && age <= 10) {
//     price = price;
//   } else if (age >= 11 && age <= 18) {
//     price *= 1.5;
//   } else if (age >= 19) {
//     price *= 2;
//   }
//   console.log(`${name}: ${price}`);
// }
