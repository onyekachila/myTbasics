export {};

// Working With Interfaces
// Interfaces are contracts within your code as well as contracts with outside of your code project.

enum FootballClubLove {
  "ARSENAL",
  "BARCELONA",
  "REAL MADRID",
  "LIVERPOOL"
}

// Interface Declaration

interface StudentInfo {
  Name: string;
  State: string;
  Age: Number;
  clubSuppoerted: FootballClubLove;
}

let student: StudentInfo = {
  Name: "Kachi",
  State: "Imo",
  Age: 20,
  clubSuppoerted: FootballClubLove.BARCELONA
};

let studentList: StudentInfo[] = [
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

function GetStudents(students: StudentInfo[]) {
  students.forEach(s => {
    console.log(
      `Student name is ${s.Name} and your state is ${s.State} your club is ${
        s.clubSuppoerted
      }`
    );
  });
}

GetStudents(studentList);
