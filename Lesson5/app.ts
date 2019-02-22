export {};

// Working With Generics
// Generics refers to the creation of component that can work over a variety of types rather than a single one.
// Further more, it allows users to consume these components and use their own types.

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
  clubsupported: FootballClubLove;
}

// Generic List
let studentList: Array<StudentInfo> = [
  {
    Name: "ayo",
    State: "kogi",
    Age: 25,
    clubsupported: FootballClubLove.BARCELONA
  },
  {
    Name: "lara",
    State: "ogun",
    Age: 55,
    clubsupported: FootballClubLove.ARSENAL
  },
  {
    Name: "ahmed",
    State: "kano",
    Age: 42,
    clubsupported: FootballClubLove.LIVERPOOL
  }
];

function GetStudentsGenerics(students: Array<StudentInfo>) {
  students.forEach(s => {
    console.log(
      `Student name is ${s.Name} and your state is ${s.State} your club is ${
        s.clubsupported
      }`
    );
  });
}

GetStudentsGenerics(studentList);
