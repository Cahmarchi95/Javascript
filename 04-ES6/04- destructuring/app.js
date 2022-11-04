//Destructuring
//faster/easier way to access/unpack values from arrays
//objects into variables

//ARRAY DESTRUCTURING
/*
const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
//console.log(orange, banana, lemon);

// uma forma diferente de acessar os itens que estão dentro do array
// para "pular" um valor do array é só deixar vazio entre as vírgulas
const [j,p,,a,k] = friends;
//console.log(j,p,a,k);

//SWAP VARIABLES

let first = "bob";
let second = "john";

//precisa dessa variável para não perder o valor
//let temp = second; // temp = john
//second = first; // john = bob
//first = temp; // bob = john


//já com o array não precisa de uma terceira variável para guardar o valor

[second, first] = [first, second];
*/
//console.log(first, second);
//resultado: john, bob

//OBJECT DESTRUCTURING

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

//o nome da propriedade tem que ser o mesmo, senão dá erro
// é possível mudar o nome assim first:firsName.console.log(firstName)
//const {first:firstName,last:lastName,city, siblings:{sister:favoriteSibling}} = bob
//console.log(firstName,lastName,city, favoriteSibling);

//FUNCTIONS ARGUMENTS

function printPerson({ first, last, city, siblings:{sister} }) {
  //const { first, last, city } = person;
  console.log(first, last, city,sister);
}

printPerson(bob);
