/*
Buatlah program yang digunakan untuk mengasilkan output seperti di bawah ini
dimana program akan mencetak baris # sejumlah karakter yang ada di variabel str
dimana setiap barisnya akan dicetak sejumlah angka yang terdapat di string

contoh input:
var stringAngka = '263';

output: 
##
######
###

Penjelasan:
- Karakter pertama dari StringAngka adalah 2 sehingga menghasilkan ##
- Karakter kedua dari StringAngka adalah 6 sehingga menghasilkan ######
- Karakter ketiga dari StringAngka adalah 2 sehingga menghasilkan ###

contoh 2
var stringAngka = '23567123';
output:
##
###
#####
######
#######
#
##
###

*/

// tulis code di bawah sini

const stringAngka = '23567123';

for (const char of stringAngka) {
  let row = '';
  for (let i = 0; i < Number(char); i++) {
    row += '#';
  }
  console.log(row);
}

// let stringAngka = '23567123';

// for (let i = 0; i < stringAngka.length; i++) {
//   let singleNum = stringAngka[i];
//   let resultInRow = '';

//   for (let j = 0; j < singleNum; j++) {
//     resultInRow += '#';
//   }

//   console.log(resultInRow);
// }
