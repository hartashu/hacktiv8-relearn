// Dapatkan total pengeluaran
// kerjakan 2.js dengan bantuan jawaban dari program 1.js

function moneyManager(history) {
    // code here

    if (!history) return 'Data tidak valid';
    if (!history.length) return 'Data kosong';

    let result = 0;

    for (let money of history) {
        result += money;
    }

    return `Total pengeluaran hari ini adalah ${result} rupiah`;
}

console.log(moneyManager())
//Data tidak valid

console.log(moneyManager([]))
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]))
//Total pengeluaran hari ini adalah 15000 rupiah