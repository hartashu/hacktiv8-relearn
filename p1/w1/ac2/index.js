// const fs = require('fs').promises

// class Profile {
//     constructor(name, age, isMarried) {
//         this.name = name;
//         this.age = age;
//         this.isMarried = isMarried;
//     }
// }

// class ProfileFactory {
//     static createProfile(name, age, isMarried) {
//         return new Profile(name, age, isMarried);
//     }
// }

// async function main() {
//     // ** 1. Mengambil data json (data.json) ke dalam Javascript

//     const dataInString = await fs.readFile('./data.json', 'utf-8');// simpan dalam variable

//     // ** 2. Parsing data hasil json di atas menggunakan JSON.parse

//     const data = JSON.parse(dataInString) // simpan dalam variable

//     // ** 3. Setelah ini, kalian pasti sudah mendapatkan array of object
//     // ** Buatlah menjadi array of Instances

//     const result = data.map(datum => ProfileFactory.createProfile(datum.name, datum.age, datum.isMarried));

//     console.log(result);
// }

// main()

const fs = require('fs').promises;
const path = require('path');

class Profile {
  constructor({ name, age, isMarried }) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

async function main() {
  try {
    const filePath = path.join(__dirname, 'data.json');

    const dataStr = await fs.readFile(filePath, 'utf-8');
    const dataJson = JSON.parse(dataStr);
    const result = dataJson.map((person) => new Profile(person));

    console.log(result);
  } catch (error) {
    console.log('ERROR:', error.message);
  }
}

main();

/*
output:
    [
        Profile { name: string, age: number, isMarried: boolean },
        Profile { name: string, age: number, isMarried: boolean }
    ]
*/
