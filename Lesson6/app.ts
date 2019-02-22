export {};

// Working With Modules

// Modules are exceuted within their own scope not in global scope. This means that variables, functions, classes, etc
// declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms.
// Conversely to consume a variable, function, classes, interface and so on exported from a different module, it has to be imported
// using one of the import forms.

// sample syntax to export a module
// export { StudentInfo };

// sample syntax to import a module
// import {StudentInfo} from './StudentInfo';

import { IStudentInfo } from "./IStudentInfo";
import { Students } from "./Student";

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
