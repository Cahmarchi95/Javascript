//Array propriedades e métodos

let names = ["john", "bobo", "barry", "olga", "ben"];

//lenght (comprimento, tamanho)

console.log(names.length);
console.log(names[names.length - 1]);

//concat (combinar dois arrays)

const lastNames = ["pepper", "onion", "bananas"];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverso (inverter a ordem)
console.log(allNames.reverse());

//unshift (add no começo do array)
allNames.unshift("Nick");
allNames.unshift("Joe");
console.log(allNames);

//shift (remover no começo do array. Não precisa passar o que remover)
allNames.shift();
allNames.shift();
console.log(allNames);

//push (add no fim do array)
allNames.push("Joe");
console.log(allNames);

//pop (remover no fim do array. Não precisa passar o que remover)
allNames.pop();
console.log(allNames);

//splice mutates original array = os itens somem do array original. O 1°valor: o index do item que você quer pegar e depois a quantidade de itens)

const specifNames = allNames.splice(1, 4);
console.log(specifNames);
