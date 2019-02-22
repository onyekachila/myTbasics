"use strict";
exports.__esModule = true;
// Working With Anonymous and Lambda Functions
// Anonymous functions are functions which dont have a name. These functions are dynamic and called during runtime.
// Example
var getFullName = function (fName, lName) {
    console.log("Your firstname is " + fName + " and your last name is " + lName);
};
getFullName("Onyekachi", "Stanley");
// Lambda - Lambda functions are a concise mechnism to represent anonymous functions. These functions are also called arrow functions.
// This is also known as the fat arrow.
// Rewriting the function above using arrow function or lambda we say
var getFullNameTwo = function (firstName, lastName) {
    return console.log("Your firstname is " + firstName + " and your last name is " + lastName);
};
getFullNameTwo("Ayo", "Atere");
