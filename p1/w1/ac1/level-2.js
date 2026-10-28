const profiles = [
  {
    name: 'A',
    role: 'Student',
    age: 100,
  },
  {
    name: 'B',
    role: 'Instructor',
    age: -5,
  },
  {
    name: 'C',
    role: 'Student',
    age: 1_000,
  },
];

// Silahkan olah data di atas menjadi Instances
// - Buat dulu class nya
// - Gunakan built in function .map()
// - Gunakan konsep Inheritance OOP (parent class: Profile)

/*
Output:

[
    Student { name: string, role: string },
    Instructor { name: string, role: string },
    Student { name: string, role: string },
]
*/

// class Profile {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }
// }

// class Student extends Profile {
//     constructor(name) {
//         super(name, 'Student');
//     }
// }

// class Instructor extends Profile {
//     constructor(name) {
//         super(name, 'Instructor');
//     }
// }

// class ProfileFactory {
//     static createProfile(profile) {
//         const { name, role, age } = profile;

//         if (role === 'Student') return new Student(name);
//         else if (role === 'Instructor') return new Instructor(name);
//     }
// }

// const result = profiles.map(profile => ProfileFactory.createProfile(profile));

// console.log(result);

class Profile {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

class Student extends Profile {}

class Instructor extends Profile {}

class ProfileFactory {
  static createProfile({ name, role }) {
    if (role === 'Student') {
      return new Student(name, role);
    } else if (role === 'Instructor') {
      return new Instructor(name, role);
    }
  }
}

const result = profiles.map((profile) => ProfileFactory.createProfile(profile));

console.log(result);
