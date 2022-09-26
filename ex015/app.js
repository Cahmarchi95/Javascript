//Callback functions
//Passar uma função como argumento e executá-la dentro de outra função.
//Função greet é a função principal e dentro dela vão ser passadas outras funções (morning e afternoon) mas não invocadas. Quando isso ocorre, são chamadas de callback functions.

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.toLowerCase()}`;
}

function greet(name, cb) {
  const myName = "Carol";
  console.log(`${cb(name)} my name is ${myName}`);
}

greet("Bob", morning);
greet("José", afternoon);
