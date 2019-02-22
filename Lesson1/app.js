"use strict";
exports.__esModule = true;
console.log("Hello This is Typescript. The superset of Javascript");
console.log("hey are you watching");
console.log("dfdf");
var FootballClubLove;
(function (FootballClubLove) {
    FootballClubLove[FootballClubLove["ARSENAL"] = 0] = "ARSENAL";
    FootballClubLove[FootballClubLove["BARCELONA"] = 1] = "BARCELONA";
    FootballClubLove[FootballClubLove["REAL MADRID"] = 2] = "REAL MADRID";
    FootballClubLove[FootballClubLove["LIVERPOOL"] = 3] = "LIVERPOOL";
})(FootballClubLove || (FootballClubLove = {}));
var student = {
    name: "Kachi",
    state: "Imo",
    sex: "male",
    clubSuppoerted: FootballClubLove.BARCELONA
};
var studentList = [
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
var thirName = studentList[2].name;
console.log(thirName);
studentList.push(student);
// console.log(studentList);
for (var index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    console.log(element);
    console.log("State is " +
        element.state +
        "and your name is " +
        element.name +
        "while your sex is " +
        element.sex);
}
// Working with functions
function getPerson(persons) {
    persons.forEach(function (person) {
        console.log("Name: " + person.Name + ", Age: " + person.Age + ", Phone: " + person.Phone);
    });
}
// Functions can take different types of parameter.
// 1. parameter with types - which means we pass a parameter and specifying the type of that parameter.
// 2. rest parameters - rest parameter allows you to pass multiple parameter to a function but they must be of the same type. find example below
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (num) {
        console.log("The numbers are " + num);
    });
}
// Calling this function we have
GetNumbers(1, 2, 3, 4, 5, 6, 7);
// 3. Default parameters - these are parameters with default values. Meaning if a value is not provided we will use the one proided by default.
// Example below
function GetStatus(status) {
    if (status === void 0) { status = true; }
    if (status == true) {
        console.log("You have been verified");
    }
    else {
        console.log("You are unverified");
    }
}
GetStatus();
// Testing this new concept with the student list created ealier above.
// I mean this studentList
function GetStudents(students) {
    students.forEach(function (s) {
        console.log("Student name is " + s.name + " and your state is " + s.state + " your club is " + s.clubSuppoerted);
    });
}
GetStudents(studentList);
