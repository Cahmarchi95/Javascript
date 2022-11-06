//Spread Operator ...
//Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them
//spread operator = arguments função

//BASICS
/*
const udemy = "udemy";
const letters = [...udemy];
//console.log(letters);

//construir um novo array copiando os valores de outros arrays
// usando "..."
const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
//resultado
//const friends = ["john", "peter", "bob", "susan", "anna", "arnold"];
//console.log(friends);

//reference (não dá certo porque acaba alterando os valores do array original, por isso tem que ser cópia)
//const newFriends = friends;

//dessa forma o novo array não modifica os valores do antigo
const newFriends = [...friends];
newFriends[0] = "karina";
console.log(newFriends);
console.log(friends);

//SPREAD OPERATOR - OBJECTS

const person = {name:"john", job:"developer"}
const newPerson = {...person, city:"chicago", name:"peter"}
console.log(newPerson);
console.log(person);


//SPREAD OPERATOR - DOM ELEMENTS

const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join(" ");

result.innerHTML = text;
*/

//SPREAD OPERATOR - FUNCTIONS ARGUMENTS

const numbers = [23,45,66,88,2345];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

const john = ["john" , "sanders"];

const sayHello = (name,lastName) => {
  console.log(`Hello ${name} ${lastName}`);
}

sayHello(...john)