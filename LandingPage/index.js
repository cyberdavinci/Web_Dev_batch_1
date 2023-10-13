// string
var hisName = "name here";
let myName = "Ebrima";
// float/decimal
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

  displayDetail: (placeholder) => {
    console.log(placeholder);
  },
  displayMore: function () {},
};
person.displayDetail("Hi therew");
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

if (x === 10) {
  // pi
}

// try substraction,multiplication and division on your own
// using dot notation to get the values of object person
// console.log(person.about);
// using scare notation to get the values of object person
// console.log(person["name"]);
// using index/scare notation to get the values of datas array
// console.log(data[2]);

// console.log(statement);
// console.log(statement2);

// ###########################
//  Conditional Statements
//############################
let is_cloudy = "";

let myAge = 65;

// if (is_cloudy === true) {
//   console.log("It will rain");
// } else if (is_cloudy === false) {
//   console.log("It will not rain");
// } else {
//   console.log("Let's go the beach!");
// }

// if (myAge < 20) {
//   console.log("I am a teen");
// } else if (myAge > 19 || myAge < 45) {
//   console.log(" I am an Adult");
// } else {
//   console.log("I am old");
// }
// let counter = 10;

// while (counter >= 1) {
//   console.log(counter);
//   counter = counter - 1;
// counter+=1
// counter --
// }
// for (let i = 0; i <= 10; i += 2) {
//   console.log(`current number is ${i}`);
// }

function doAction() {
  // for (; counter <= 10; counter += 2) {
  //   console.log(`current number is ${counter}`);
  // }
  // signIn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   console.log("I have been clicked!");
  //   // alert("Button Clicked!");
  // });
  console.log("Hi there");
}
// doAction();
// DOM ---> Document Object Model
console.log(document);

document.getElementById("join-class-btn").addEventListener("click", () => {
  alert("join class form active");
});

function doSomething(value) {
  console.log(value);
}
let loginForm = document.getElementById("form");
let signIn = document.getElementById("singIn");
let signIn2 = document.getElementById("singInBtn");
let closeForm = document.getElementById("closeForm");
// let signIn2 = document.getElementsByClassName("singInBtn");
signIn2.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.add("active");
  // console.log(loginForm);
});
closeForm.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.remove("active");
  // console.log(loginForm);
});
// const logName = doSomething("Ebrima");
// const logArrayOfElements = doSomething([12, "bhejhr"]);
