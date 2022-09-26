//Reference vs Value

const number = 1;
let number2 = number;
number2 = 7;

console.log(`The first value is ${number}`);
console.log(`The second value is ${number2}`);

let person = { name: "Joseph" };
let person2 = { ...person };
person2.name = "Nick";

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);

//Null and Undefined

let value = 20 + null; // 20+0 = 20 (o null é visto como zero)
console.log(value);

let value2 = 20 + undefined;
console.log(value2); // NaN = not a number (o undefined não é visto como um número)

//Truthy or False

// "", '', ``, 0, -0, NaN, false, null, undefined (todos esses valores vão resultar em falso)

const text = "a";

if (text) {
  console.log("Hey the value is Truthy");
} else {
  console.log("Hey the value is Falsy");
}
