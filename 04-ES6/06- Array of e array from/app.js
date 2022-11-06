//Array.from and Array.of - NOT ON THE PROTOTYPE
//Array.from
//Array.of

//ARRAY OF
const example = ["one", "two", "three"];
//console.log(example);
//console.log(example.map);
//console.log(example.from);
//console.log(example.of);

//of creates a new Array instance from a variable number of arguments.

const friends = Array.of("john", 6, true);
//console.log(friends);

//ARRAY FROM
//from - returns Array Object from any object with a length property or an iterable object
//from turns array-like/ish into array - string, nodeList,Set

const udemy = "udemy";
//console.log(Array.from(udemy));

//palavra chave "arguments"
//fazendo uma função para somar os valores

function countTotal() {
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  //console.log(total);
}
countTotal(67, 89, 54, 100);

//ARRAY FROM - DOM ELEMENTS (NODELIST)

const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

//juntar os elementos em um novo array e inserir no html

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");

//result.innerHTML = newText;

// a mesma coisa só que passando o array from direto

const text = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");

second.innerHTML = text;
