//Factory functions

/*
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const john = createPerson("john", "anderson");
john.fullName();
const bob = createPerson("bob", "smilga");
bob.fullName();
const taylor = createPerson("taylor", "swift");
taylor.fullName();
*/

//Constructor function
//começa com letra maiúcula blue print.
//precisa da palavra new para se referir ao objeto. Caso o contrário vai se referir a window object
//omite o return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const carol = new Person("carol", "marchi");
carol.fullName();

//todos osbjetos em Javascript podem acessar a propriedade constructor que vai retornar a constructor function que criou esse objeto

//console.log(carol.constructor);

//constructor function vai ser um object
const bob = {};
console.log(bob.constructor);

//constructor function vai ser um array
const list = [];
console.log(list.constructor);

//constructor function vai ser uma função
//* funções e arrays são objetos em Javascript
function hello() {}
console.log(hello.constructor);

//usando o constructor para passar outros valores para a função Person
const joe = new carol.constructor("joe", "jonas");
console.log(joe);
joe.fullName();
