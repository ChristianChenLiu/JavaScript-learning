//Console
console.log("Hello World!");

//Variable basic
let name = "Christian";
console.log(name);

//Dynamic variables
let interestRate = 3;
interestRate = "it is 3";
console.log(interestRate);

//Object
let person = { name: "Chris", age: 21 };

person.name = "Chen";

console.log(person);
console.log(person.name);
console.log(person["age"]);

//Array is an object
let someColours = ["red", "blue"];

//Array is dynamic and can have multiple types
someColours[2] = 2;
someColours[3] = "green";

console.log(someColours);
console.log(someColours.length);

//Basic functions
function greet() {
  console.log("Hello");
}

greet();
