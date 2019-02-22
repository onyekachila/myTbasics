"use strict";
exports.__esModule = true;
// Working With Generics
// Generics refers to the creation of component that can work over a variety of types rather than a single one.
// Further more, it allows users to consume these components and use their own types.
var FootballClubLove;
(function (FootballClubLove) {
    FootballClubLove[FootballClubLove["ARSENAL"] = 0] = "ARSENAL";
    FootballClubLove[FootballClubLove["BARCELONA"] = 1] = "BARCELONA";
    FootballClubLove[FootballClubLove["REAL MADRID"] = 2] = "REAL MADRID";
    FootballClubLove[FootballClubLove["LIVERPOOL"] = 3] = "LIVERPOOL";
})(FootballClubLove || (FootballClubLove = {}));
// Generic List
var studentList = [
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
function GetStudentsGenerics(students) {
    students.forEach(function (s) {
        console.log("Student name is " + s.Name + " and your state is " + s.State + " your club is " + s.clubsupported);
    });
}
GetStudentsGenerics(studentList);
