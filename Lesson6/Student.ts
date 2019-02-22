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

export { Students };
