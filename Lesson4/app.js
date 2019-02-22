"use strict";
exports.__esModule = true;
// Working With Classes
// A class is a blue print of a program.
// class declaration
var Students = /** @class */ (function() {
  function Students(fName, lName) {
    this._fname = fName;
    this._lname = lName;
  }
  // function keyword should not be used within the class.
  Students.prototype.GetFullName = function() {
    return this._fname + "..." + this._lname;
  };
  return Students;
})();
var ayo = new Students("Ayoola", "Olayinka");
console.log(ayo.GetFullName());

// the code above can rewritten like this. check the code below
var StudentTwo = /** @class */ (function() {
  function StudentTwo(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  StudentTwo.prototype.GetName = function() {
    return this.firstName + " " + this.lastName;
  };
  return StudentTwo;
})();
var kachi = new StudentTwo("Kachi", "Stanley");
console.log(kachi.GetName());
