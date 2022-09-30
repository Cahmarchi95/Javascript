//ARRAYS ITERATORS (foEach, Map, Filter, Finder , Reduce)

/* 1- FOR EACH ****************************************************************************

//(Não retorna um novo array)
//forEach calls the callbackfn function one time for each element in the array.
//Uma outra função (callbackfn) é criada para acessar os elementos da função principal

const people = [
  { name: "Bob", age: 20, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

//people.forEach(showPerson);

//passar a função direto (o resultado é o mesmo e nas duas formas NÃO está invocando a função, só está passando o valor por callback , referência)

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
}) 

//2-MAP************************************************************************************
//retorna um novo array
//usa os valores do array original quando faz um novo array
//não muda o tamanho do array original

const people = [
  { name: "Bob", age: 20, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 30, position: "the boss" },
];

const ages = people.map(function (person) {
  return person.age;
});

console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age +20,
  };
});

console.log(newPeople); 

//3- FILTER********************************************************************************
//retorna um novo array
//é possível alterar o tamanho do novo array
//o return é baseado em uma condição (nada mais é que um filtro nos itens do array e os resultados desse filtro aparecem em um novo array. Se nenhum dos itens bater com a condição que foi colocada, aparecerá um array vazio "[]")

const people = [
  { name: "Bob", age: 20, position: "developer" },
  { name: "Peter", age: 25, position: "designer" },
  { name: "Susy", age: 30, position: "the boss" },
  { name: "Anna", age: 35, position: "the boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return person.position === "developer";
});

console.log(youngPeople);
console.log(developers); 

//4-FIND***********************************************************************************
//retorna um valor apenas (se for string, vai retornar string, se for número, vai retornar um número. No exemplo abaixo retorna um objeto pq o array está composto por objetos).
//ótimo para pegar um único valor
//vai retornar o first match, se não tiver match, aparecerá undefined.

const people = [
  { name: "Bob", age: 20, position: "developer", id: 1 },
  { name: "Peter", age: 25, position: "designer", id: 2 },
  { name: "Susy", age: 30, position: "the boss", id: 3 },
  { name: "Anna", age: 35, position: "the boss", id: 4 },
];

const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person);

const names = ["Taylor" , "Nick", "Joe" , "Kevin"];

console.log(names.find(function(name) {
    return name === "Taylor"
}));*/

//5- REDUCE*******************************************************************
//Reduz para um único valor (pode ser um número, um array ou um objeto
//1 parâmetro ("acc" = "acumulator") - total de todos os cálculos
//2 parâmetro ("curr") - current interation/value
//pode substituir o map e o filter 

const people = [
  { name: "Bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "Peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "Susy", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "Anna", age: 35, position: "the boss", id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`Total ${acc}`);
  console.log(`Current money: ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
