"use strict";
exports.__esModule = true;
// Working With Interfaces
// Interfaces are contracts within your code as well as contracts with outside of your code project.
var FootballClubLove;
(function (FootballClubLove) {
    FootballClubLove[FootballClubLove["ARSENAL"] = 0] = "ARSENAL";
    FootballClubLove[FootballClubLove["BARCELONA"] = 1] = "BARCELONA";
    FootballClubLove[FootballClubLove["REAL MADRID"] = 2] = "REAL MADRID";
    FootballClubLove[FootballClubLove["LIVERPOOL"] = 3] = "LIVERPOOL";
})(FootballClubLove || (FootballClubLove = {}));
var student = {
    Name: "Kachi",
    State: "Imo",
    Age: 20,
    clubSuppoerted: FootballClubLove.BARCELONA
};
var studentList = [
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
function GetStudents(students) {
    students.forEach(function (s) {
        console.log("Student name is " + s.Name + " and your state is " + s.State + " your club is " + s.clubSuppoerted);
    });
}
GetStudents(studentList);
