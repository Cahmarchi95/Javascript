//TERNARY OPERATOR*************************************************************************
//condition ? (runs if true) : (runs if false)

const value = 1 > 0;

value ? console.log("This is true") : console.log("This is false");

//GLOBAL SCOPE****************************************************************************
//exemplo de como pode acontecer de alterar um valor sem querer pq a variável está no escopo global.

/*let name = "Peter";

function calculate() {
  //some other code
  console.log(name);
  name = "orange";
  function inner() {
    name = "Inner name value";
    console.log(`This is from inner function ${name}`);
  }
  inner();
}
calculate();
if (true) {
  //some other code
  console.log(name);
  name = "Catavento";
}

console.log(`Hey my name is ${name} and I'm awesome`);*/

//LOCAL SCOPE*************************************************************************
//Declarando a variável (usar as palavras chave antes do nome: let ou const senão automaticamente o Javascript cria a variável com escopo global) com o mesmo nome só que dentro da função e do if, não altera o valor da variável global.

let name = "Peter";

function calculate() {
  const name = "Parker";
  const age = 20;
}

//console.log(age);
//vai dar um erro ao tentar acessar a variável age com o console.log pois ela foi declarada dentro da função (local scope), portanto não pode ser acessada fora da função.

calculate();

if (true) {
  const name = "Parker";
}

console.log(`Hey my name is ${name} and I'm awesome`);

//VARIABLE LOOKUP**************************************************************************
//o Javascript procura primeiro a variável local scope, senão tiver, ele procura pela global scope

const globalNumber = 5;

function add(number1, number2) {
  const globalNumber = 10;
  const result = number1 + number2 + globalNumber;
  return result;
}

console.log(add(3, 4));
