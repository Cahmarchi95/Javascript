//nested objects (objetos dentro de objetos)
// para acessar é só colocar o nome e a propriedade com "." - ex:console.log(person.job)
//Também dá para acessar as propriedades com os colchetes - ex:console.log(person["job"]) e mudar o valor do objeto através da variável
//se tentar acessar algo que não existe, vai aparecer undefined
//se tentar acessar uma propriedade que existe mas com um nome errado vai dar erro
//passar uma variável como valor de uma propriedade do objeto (e se o nome da variavel for o mesmo da propriedade, basta só colocar o nome. ex: name)

const age = 60;
let random = "random-value";
random = "age";

const person = {
  name: "john",
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      adress: "123 main street",
    },
  },
  "random-value": "random",
};

//console.log(person.job.company.name);
//console.log(person["name"]);
//console.log(person);
console.log(person[random]);
