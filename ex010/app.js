//Template Literals
//backpackticks ``
//interpolations &{} inserir expresssões (valores)

/*const name = "José";
const age = 25;

const sentence = `Hey his name is ${name} and he has ${age} years old. And quick math ${
  3 + 2
}`;

console.log(sentence);*/

//DESAFIO STRINGS

/*function fullName(firstName, lastName) {
  const result = `${firstName} ${lastName}`;
  return result.toUpperCase();
}

console.log(fullName("Bob", "Marley"));*/

//Transformar a função em objeto, assim os parâmetros vão seguir uma ordem. No resultado sempre aparecerá primeiro o "firstName e depois o lastName", independente se o "lastName" vai ser digitado primeiro, ele aparecerá sempre depois do "firstName" seguindo a ordem.

function fullName({ firstName, lastName }) {
  const result = `${firstName} ${lastName}`;
  return result.toUpperCase();
}

console.log(fullName({ lastName: "Petherson", firstName: "Caroline" }));
