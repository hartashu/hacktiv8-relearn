/*
Untuk soal nomor 2, dilarang menjalankan kode di code editor. Kalian hanya boleh membaca dan menganalisa apa output dari sintaks berikut:

--- CODE

function ganjil(num) {
  return num % 2 === 1
}

let nums = [
  [3, 6, 9],
  [12, 17, 81, 95],
  [4, 18, 102],
  [77]
]

let result = []

for(let i = 0; i < nums.length; i++) {
  for(let j = 0; j < nums[i].length; j++) {
    const num = nums[i][j]

    if(ganjil(num)) {
      result.push(num - 10) // 3 = -7; 9 = -1; 17 = 7; 81 = 71; 95 = 85; 77 = 67;
    } else {
      result.push(num + 5) // 6 = 11; 12 = 17; 4 = 9; 18 = 21; 102 = 107; 
    }
  }
}

console.log(result)

*/

// Jawaban :

// [-7, 11, -1, 17, 7, 71, 85, 9, 23, 107, 67]