/*
  STORE gacha AS NUMBER WITH Math.ceil(Math.random() * 5)

  SWITCH gacha
    CASE 1
      DISPLAY 'coba lagi ya'

    CASE 2
      DISPLAY 'selamat kamu mendapatkan kupon sebanyak 5'

    CASE 3
      DISPLAY 'selamat kamu mendapatkan kupon sebanyak 15'

    CASE 4
      DISPLAY 'selamat kamu mendapatkan kupon sebanyak 50'

    CASE 5
      DISPLAY 'WOW, kamu menang jackpot! Selamat!!'
  END SWITCH

*/

// insert your code here
const gacha = Math.ceil(Math.random() * 5);
let result;

switch (gacha) {
  case 1:
    result = 'coba lagi ya';
    break;

  case 2:
    result = 'selamat kamu mendapatkan kupon sebanyak 5';
    break;

  case 3:
    result = 'selamat kamu mendapatkan kupon sebanyak 15';
    break;

  case 4:
    result = 'selamat kamu mendapatkan kupon sebanyak 50';
    break;

  case 5:
    result = 'WOW, kamu menang jackpot! Selamat!!';
    break;
}

console.log(result);
