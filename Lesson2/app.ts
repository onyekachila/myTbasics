export {};

// Working With Anonymous and Lambda Functions

// Anonymous functions are functions which dont have a name. These functions are dynamic and called during runtime.

// Example

let getFullName = function(fName: string, lName: string) {
  console.log(`Your firstname is ${fName} and your last name is ${lName}`);
};

getFullName("Onyekachi", "Stanley");

// Lambda - Lambda functions are a concise mechnism to represent anonymous functions. These functions are also called arrow functions.
// This is also known as the fat arrow.
// Rewriting the function above using arrow function or lambda we say

let getFullNameTwo = (firstName: string, lastName: string) =>
  console.log(
    `Your firstname is ${firstName} and your last name is ${lastName}`
  );

getFullNameTwo("Ayo", "Atere");
