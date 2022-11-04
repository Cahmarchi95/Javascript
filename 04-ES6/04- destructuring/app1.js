//NEW STRING METHODS
//startsWith() , endsWith(), includes(), repeat();
/*
const person = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JOHN-DOE";

//startsWith()
//console.log(person.startsWith("Pet"));
//é possivel checar se começa de determinada posição
//console.log(employee.startsWith("EMP",6));

//endsWith()
//é possivel checar se termina de determinada posição
//console.log(manager.endsWith("DOE", 18));
//console.log(manager.endsWith("MAN", 9));

//includes()
//console.log(employee.includes("PETER"));

//repeat()

const multiplyPeople = (person, amount = 5) => person.repeat(amount);

const people = multiplyPeople(person);
console.log(people);
*/

//FOR OF LOOPS

//for of = loops through the values of an iterable object
//string, array, set, map etc - NOT OBJECT
//unlike forEach = we can use break, continue

const fruits = ["apple", "orange", "banana", "peach"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
  // console.log(letter);
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}

//console.log(shortName);

for (const fruit of fruits) {
  if (fruit === "banana") {
    //break;
    continue
  }

  console.log(fruit);
}

