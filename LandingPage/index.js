// string
var hisName = "name here";
let myName = "Ebrima";
// float/decima
const pi = 3.142;
// number/ int
let age = 34;
// Arrays
let data = ["ebrima", 3.142, 34, ["solo", 232, true]];
// objects
const person = {
  name: "Ebrima",
  age: 10,
  address: "Tipper Garage",
  about: "A tech dude",
  scores: [12, 54, 54, 654],
  contact: {
    phone: 12344343,
    email: "email@gmail.com",
  },
  isMarried: false,
};
// Booleans
// true and false

// ##################
//  Operators
//#################

// String contcatenations
let statement =
  "My name is " + person.name + " and i am " + person.age + " years old ";
//better way using string literals/backticks ` `
let statement2 = `My name is ${person.name} and i am ${person.age} years old`;
// Addition

let x = 10;
let y = 4;
let sum = x + y;

// try substraction,multiplication and division on your own
// using dot notation to get the values of object person
console.log(person.about);
// using scare notation to get the values of object person
console.log(person["name"]);
// using index/scare notation to get the values of datas array
console.log(data[2]);

console.log(statement);
console.log(statement2);
