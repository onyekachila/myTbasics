export {};

console.log("Hello This is Typescript. The superset of Javascript");
console.log("hey are you watching");
console.log("dfdf");

enum FootballClubLove {
  "ARSENAL",
  "BARCELONA",
  "REAL MADRID",
  "LIVERPOOL"
}

let student = {
  name: "Kachi",
  state: "Imo",
  sex: "male",
  clubSuppoerted: FootballClubLove.BARCELONA
};

let studentList = [
  {
    name: "ayo",
    state: "kogi",
    sex: "male",
    clubSuppoerted: FootballClubLove.BARCELONA
  },
  {
    name: "lara",
    state: "ogun",
    sex: "female",
    clubSuppoerted: FootballClubLove.ARSENAL
  },
  {
    name: "ahmed",
    state: "kano",
    sex: "male",
    clubSuppoerted: FootballClubLove.LIVERPOOL
  }
];

let thirName = studentList[2].name;
console.log(thirName);

studentList.push(student);
// console.log(studentList);

for (var index = 0; index < studentList.length; index++) {
  var element = studentList[index];
  console.log(element);

  console.log(
    "State is " +
      element.state +
      "and your name is " +
      element.name +
      "while your sex is " +
      element.sex
  );
}

// Working with functions

function getPerson(persons: any[]) {
  persons.forEach(person => {
    console.log(
      `Name: ${person.Name}, Age: ${person.Age}, Phone: ${person.Phone}`
    );
  });
}

// Functions can take different types of parameter.
// 1. parameter with types - which means we pass a parameter and specifying the type of that parameter.
// 2. rest parameters - rest parameter allows you to pass multiple parameter to a function but they must be of the same type. find example below

function GetNumbers(...nums: number[]) {
  nums.forEach(num => {
    console.log(`The numbers are ${num}`);
  });
}

// Calling this function we have
GetNumbers(1, 2, 3, 4, 5, 6, 7);

// 3. Default parameters - these are parameters with default values. Meaning if a value is not provided we will use the one proided by default.
// Example below

function GetStatus(status: boolean = true) {
  if (status == true) {
    console.log("You have been verified");
  } else {
    console.log("You are unverified");
  }
}

GetStatus();

// Testing this new concept with the student list created ealier above.

// I mean this studentList

function GetStudents(students: any[]) {
  students.forEach(s => {
    console.log(
      `Student name is ${s.name} and your state is ${s.state} your club is ${
        s.clubSuppoerted
      }`
    );
  });
}

GetStudents(studentList);
