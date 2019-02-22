export {};

// Working With Classes

// A class is a blue print of a program.

// class declaration

class Students {
  private _fname: string;
  private _lname: string;

  constructor(fName: string, lName: string) {
    this._fname = fName;
    this._lname = lName;
  }

  // function keyword should not be used within the class.
  GetFullName(): string {
    return this._fname + "..." + this._lname;
  }
}

let ayo = new Students("Ayoola", "Olayinka");
console.log(ayo.GetFullName());

// the code above can rewritten like this. check the code below

class StudentTwo {
  constructor(private firstName, private lastName) {}

  GetName(): string {
    return this.firstName + " " + this.lastName;
  }
}

let kachi = new StudentTwo("Kachi", "Stanley");
console.log(kachi.GetName());
