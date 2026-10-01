function moneyManager(history) {
    //code here

    if (!history) return 'Data tidak valid';
    if (!history.length) return 'Data kosong';

    return 'Data valid';
}

console.log(moneyManager())
//Data tidak valid

console.log(moneyManager([]))
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]))
//Data valid

