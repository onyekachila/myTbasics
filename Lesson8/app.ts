export {};

// Working With Modules Part Three (Module Loaders)
// We have different types of module loaders e.g. CommonJS, SystemJS, AMD, UMD, ES2015,

// Module loaders are used to resolve the problem of loading multiple dependent modules from various location before the
// methods are being called.

// They are usually very fast and asynchronous and hence they dont bog down your application loading time. e.g. requirejs, browserifyjs
// webpack

import { IStudentInfo } from "./IStudentInfo";
import Students = require("./Student");

// Working With Interfaces
// Interfaces are contracts within your code as well as contracts with outside of your code project.

enum FootballClubLove {
  "ARSENAL",
  "BARCELONA",
  "REAL MADRID",
  "LIVERPOOL"
}

let student: IStudentInfo = {
  Name: "Kachi",
  State: "Imo",
  Age: 20,
  clubSuppoerted: FootballClubLove.BARCELONA
};

let studentList: IStudentInfo[] = [
  {
    Name: "ayo",
    State: "kogi",
    Age: 25,
    clubSuppoerted: FootballClubLove.BARCELONA
  },
  {
    Name: "lara",
    State: "ogun",
    Age: 55,
    clubSuppoerted: FootballClubLove.ARSENAL
  },
  {
    Name: "ahmed",
    State: "kano",
    Age: 42,
    clubSuppoerted: FootballClubLove.LIVERPOOL
  }
];

function GetStudents(students: IStudentInfo[]) {
  students.forEach(s => {
    console.log(
      `Student name is ${s.Name} and your state is ${s.State} your club is ${
        s.clubSuppoerted
      }`
    );
  });
}

GetStudents(studentList);

let ayo = new Students("Ayoola", "Olayinka");
console.log(ayo.GetFullName());

// We can also make use of alias when exporting our module. samaple code below
// export{StudentInfo as StdInfo};
