//One can view the console logs in the console tab via inspecting the index.html website

//Console
console.log("Hello World!");

//Variable basic
let personName = "Christian";
console.log(personName);

//Dynamic variables
let interestRate = 3;
interestRate = "it is 3";
console.log(interestRate);

//Object
let person = { personName: "Chris", age: 21 };

person.personName = "Chen";

console.log(person);
console.log(person.personName);
console.log(person["age"]);

//Array is an object
let someColours = ["red", "blue"];

//Array is dynamic and can have multiple types
someColours[2] = 2;
someColours[3] = "green";

console.log(someColours);
console.log(someColours.length);

//Basic functions
function greet(personName) {
  //Interestingly it uses the argument instead of global variable and no errors or warnings
  console.log("Hello " + personName);
}

greet("Yo");
