/*const value = 2 > 1;
console.log(typeof value);
const value2 = 1>2;

const num1 = 6;
const num2 = "6";
const value = num1 != num2;
const value2 = num1 !== num2;

console.log(value);
console.log(value2);

const name = "bob";
const age = 24;

if (name !== "bob" && age === 24) {
  console.log("Hello there user!");
} else {
  console.log("wrong values");
} 

//SWITCH

const dice = 2;

switch (dice) {
  case 1:
    console.log("you got one");
    break;
  case 2:
    console.log("you got two");
    break;
  default:
    console.log("Sorry, wrong value. Please, roll the dice again.");
}
*/

//Desafio

const person1 = {
  name: "Jason",
  age: 18,
  status: "resident",
};

const person2 = {
  name: "Maria",
  age: 23,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("18+ or resident");
} else {
  console.log("-18 or tourist");
}
