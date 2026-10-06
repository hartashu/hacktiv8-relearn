// 1. Buatlah sebuah variabel dengan nama "groups"
let groups;

// 2. Isi variable tersebut dengan array yang memiliki 3 array :
// - ['jennie', 'lisa', 'jisoo', 'rose']
// - ['winter', 'karina', 'giselle', 'ningning']
// - ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']
groups = [
  ['jennie', 'lisa', 'jisoo', 'rose'],
  ['winter', 'karina', 'giselle', 'ningning'],
  ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']
];

// 3. Cetak element array pertama (['jennie', 'lisa', 'jisoo', 'rose'])
console.log(groups[0]);

// 4. Cetak element array ketiga (['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong'])
console.log(groups[2]);

// 5. Ganti element ketiga dari array menjadi:
// - ['irene', 'joy', 'wendy', 'yeri', 'seulgi']
groups[2] = ['irene', 'joy', 'wendy', 'yeri', 'seulgi'];

// 6. Cetak ("wendy")
console.log(groups[2][2]);

// 7. Gunakan property length untuk mencetak jumlah element di array index kedua
console.log(groups[2].length);

// 8. Gunakan loop for untuk mencetak nilai groups di console secara berurutan
// output:

/*

['jennie', 'lisa', 'jisoo', 'rose']
['winter', 'karina', 'giselle', 'ningning']
['irene', 'joy', 'wendy', 'yeri', 'seulgi']

*/

for (let i = 0; i < groups.length; i++) {
  console.log(groups[i]);
}

// 8. Gunakan loop for untuk mencetak nama member di console secara berurutan

/*

'jennie'
'lisa'
'jisoo'
'rose'
'winter'
'karina'
'giselle'
'ningning'
'irene'
'joy'
'wendy'
'yeri'
'seulgi'

*/

for (let i = 0; i < groups.length; i++) {
  let row = groups[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
