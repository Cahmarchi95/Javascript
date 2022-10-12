//setTimeout - roda a função uma vez depois de um tempo específico
/*
- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0 
- returns unique identifier
- clearTimeout to cancel
- on window object


function sayHello() {
  console.log("Hello Carol");
}
//sayHello();
//setTimeout(sayHello, 1000);
//tem que passar a função como referência, se invocar não vai funcionar

//uma forma alternativa, passando a função direto como referência (ES6 arrow function)

//setTimeout(function () {
//console.log("Hello Carol");
//}, 2000);

//pass arguments

function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

//setTimeout(showScore, 3000, "Carol", "89");

const firstId = setTimeout(showScore, 3000, "Carol", "89");
const secondId = setTimeout(showScore, 3000, "Bob", "74");

console.log(firstId);
console.log(secondId);

clearTimeout(firstId);


//setInterval - roda a função repetidamente, em intervalos específicos
- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0 
- returns unique identifier
- clearTimeout to cancel */

function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

//setInterval(showScore, 2000);
//setInterval(showScore, 2000, "Joe", 19);

const firstId = setInterval(showScore, 1000, "Joe", "89");
const secondId = setInterval(showScore, 4000, "Taylor", "13");

clearTimeout(firstId);