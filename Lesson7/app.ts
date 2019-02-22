export {};

// Working With Modules Part Two

// Default export are marked with keyword default. And there can only be one default module per module.
// Default export are imported using a different import form.
// Taking a look at the student.ts file, we will use default export from there. then we come back to app.ts to import it

import { IStudentInfo } from "./IStudentInfo";
import Students from "./Student";

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
