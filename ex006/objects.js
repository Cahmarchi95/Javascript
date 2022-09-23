/*const person = {
  name: "john",
  lastName: "peters",
  age: 45,
  education: false,
  married: true,
  sibiliings: ["Anna", "Susan", "Peter"],
  greeting: function () {
    console.log("Hello my name is John");
  },
};

console.log(person.name);
console.log(person.sibiliings[2]);
person.greeting();*/

//DESAFIO
const car = {
  make: "Ferrari",
  model: "sport",
  year: 1990,
  colors: ["red", "black", "blue"],
  hybrid: false,
  drive: function () {
    console.log("This car is ready to go");
  },

  stop() {
    console.log("This car is gonna stop");
  },
};

console.log(car.make);
car.drive();
car.stop();
console.log(car.colors[0]);
