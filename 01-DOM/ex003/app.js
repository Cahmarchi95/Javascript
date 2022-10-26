//childNodes- retorna todos childNodes incluindo o espaço em branco que é tratado como um texto
//"navegar" por uma lista sem acessar os métodos

//children (esse não conta os espaços em branco)
//firstChildren
//lastChildren
//(tanto no lastChildren e no firstChildren vai aparecer #text que é igual ao espaço em branco)

/*const resultado = document.querySelector("#resultado");
const allChildren = resultado.childNodes;

const children = resultado.children;
console.log(children);
console.log(resultado.firstChild);
console.log(resultado.lastChild);

//parentElement (o elemento "pai" o que é antecessor do elemento que foi selecionado)

const heading = document.querySelector("h2");
console.log(heading.parentElement);
//o pai do pai
console.log(heading.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color = "red";

//previousSibling
//nextSibling
//(precisa colocar 2x pra não selecionar o espaço em branco)
// white text

const first = document.querySelector(".first");
const second = (first.nextSibling.nextSibling.style.color = "green");
console.log(second);

const last = document.querySelector("#last");
const third = (last.previousSibling.previousSibling.style.color = "orange");
console.log(last);*/

//previousElementSibling
//nextElementSibling
// não precisa colocar 2x pq ele não conta o espaço em branco

const first = document.querySelector(".first");
const second = (first.nextElementSibling.style.color = "yellow");

const last = document.querySelector("#last");
const trird = (last.previousElementSibling.style.color = "blue");
