const profiles = [
  {
    name: 'A',
    age: 1,
    isMarried: false,
  },
  {
    name: 'B',
    age: 2,
    isMarried: true,
  },
  {
    name: 'C',
    age: 3,
    isMarried: false,
  },
];

// Silahkan olah data di atas menjadi Instances
// - Buat dulu class nya
// - Gunakan built in function .map()

/*
Output:

[
    Profile { name: string, age: number, isMarried: boolean },
    Profile { name: string, age: number, isMarried: boolean },
    Profile { name: string, age: number, isMarried: boolean },
]
*/

// class Profile {
//     constructor(name, age, isMarried) {
//         this.name = name;
//         this.age = age;
//         this.isMarried = isMarried;
//     }
// }

// const result = profiles.map(profile => new Profile(profile.name, profile.age, profile.isMarried));

// console.log(result);

class Profile {
  constructor({ name, age, isMarried }) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

const result = profiles.map((person) => new Profile(person));

console.log(result);
