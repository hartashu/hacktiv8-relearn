const educations = [
  {
    name: 'Hacktiving',
    type: 'Bootcamp',
    students: [
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
    ],
  },
  {
    name: 'ruanggulag',
    type: 'School',
    students: [
      {
        name: 'C',
        age: 1,
        isMarried: false,
      },
      {
        name: 'D',
        age: 2,
        isMarried: true,
      },
    ],
  },
  {
    name: 'Purwodhoko',
    type: 'Bootcamp',
    students: [
      {
        name: 'E',
        age: 1,
        isMarried: false,
      },
      {
        name: 'F',
        age: 2,
        isMarried: true,
      },
    ],
  },
];

// Silahkan olah data di atas menjadi Instances
// - Buat dulu class nya
// - Gunakan built in function .map()
// - Gunakan konsep Inheritance OOP (parent class: Education)

/*
Output:

[
  Bootcamp { name: string, type: string, students: [ [Profile], [Profile] ]},
  School { name: string, type: string, students: [ [Profile], [Profile] ]},
  Bootcamp { name: string, type: string, students: [ [Profile], [Profile] ]},
]

Gambaran instance Profile:

Profile { name: string, age: number, isMarried: boolean }
*/

// class Education {
//   constructor(name, type, students = []) {
//     this.name = name;
//     this.type = type;
//     this.students = students;
//   }
// }

// class Profile {
//   constructor(name, age, isMarried) {
//     this.name = name;
//     this.age = age;
//     this.isMarried = isMarried;
//   }
// }

// class Bootcamp extends Education {
//   constructor(name) {
//     super(name, 'Bootcamp');
//   }
// }

// class School extends Education {
//   constructor(name) {
//     super(name, 'School');
//   }
// }

// class EducationFactory {
//   static createEducation(education) {
//     const { name, type } = education;

//     if (type === 'Bootcamp') return new Bootcamp(name);
//     else if (type === 'School') return new School(name);
//   }
// }

// class ProfileFactory {
//   static createProfile(name, age, isMarried) {
//     return new Profile(name, age, isMarried);
//   }
// }

// const result = educations.map(education => {
//   const tempEducation = EducationFactory.createEducation(education);
//   const students = education.students.map(profile => ProfileFactory.createProfile(profile.name, profile.age, profile.isMarried));
//   tempEducation.students = students;

//   return tempEducation;
// });

// console.log(result);

// result.forEach(education => console.log(education.students));

class Education {
  constructor({ name, type, students = [] }) {
    this.name = name;
    this.type = type;
    this.students = students;
  }
}

class Bootcamp extends Education {
  constructor({ name, students }) {
    super({ name, type: 'Bootcamp', students });
  }
}

class School extends Education {
  constructor({ name, students }) {
    super({ name, type: 'School', students });
  }
}

class Profile {
  constructor({ name, age, isMarried }) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

class EducationFactory {
  static educationMap = {
    Bootcamp,
    School,
  };

  static createEducation({ name, type, students: rawStudents = [] }) {
    const students = rawStudents.map((student) => new Profile(student));
    const educationType = EducationFactory.educationMap[type];

    return new educationType({ name, students });
  }
}

const result = educations.map((education) =>
  EducationFactory.createEducation(education),
);

console.log(result);
