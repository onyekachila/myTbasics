"use strict";
exports.__esModule = true;
var Students = /** @class */ (function () {
    function Students(fName, lName) {
        this._fname = fName;
        this._lname = lName;
    }
    // function keyword should not be used within the class.
    Students.prototype.GetFullName = function () {
        return this._fname + "..." + this._lname;
    };
    return Students;
}());
exports.Students = Students;
