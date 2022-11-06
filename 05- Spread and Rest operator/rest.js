//REST OPERATOR...
// gathers/collects the items
//uso: destructuring objects e gather parameters em uma função
/*
//arrays
const fruit = ["apple", "orange", "lemon", "banana", "pera"];
//o "resto" do que sobrou do array
const [first,second, ...fruits] = fruit;
console.log(first, fruits);

//objects */
//o "resto" do que sobrou do objeto
//cuidado com a posição do ...rest senão dá erro pois a ordem importa
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
//console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

// coletando parâmetros de uma função

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
