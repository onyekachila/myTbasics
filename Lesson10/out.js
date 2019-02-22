var StudentCalc;
(function(StudentCalc) {
  function AnualFeeCalc(feeamount, term) {
    return feeamount * term;
  }
  StudentCalc.AnualFeeCalc = AnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
// Working With Namespaces
// Typescript internal modules are now namespaces and external modules are now simply modules.
/// <reference path="./StudentCalc.ts" />
let totalFee = StudentCalc.AnualFeeCalc(1000, 4);
console.log(totalFee);
// when we run the code above in the terminal we get an error saying StudentCalc not defined. Because we are not using a module loader
// hence the need to run the file with the specific command below to combine the two files i.e app.ts and studentCalc.ts into one file
// tsc --target es6 app.ts --outFile out.js
// This will create a file called app.js then we run the out.js file
