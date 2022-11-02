//IIFE Immediately-Invoked Function Expression
//as variáveis dentro do escopo da função não podem ser acessadas
//as variáveis também podem ter o mesmo nome pq estão no escopo local

const num1 = 30;
const num2 = 50;

function add() {
  console.log(`the result is: ${num1 + num2}`);
}

add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is: ${num3 + num4}`);
})();

//pass arguments
(function (num3, num4) {
  console.log(`the result is: ${num3 + num4}`);
})(700, 300);

//return/assing to a variable
const result = (function (num3, num4) {
  console.log(`the result is: ${num3 + num4}`);
  return num3 + num4;
})(1000, 500);

console.log(result);
