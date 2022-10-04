//nodeValue (nesse é preciso colocar o índice do item do qual se quer descobrir o valor ou usar o first child já que nesse caso o item é o primeiro valor)
//textContent
//os dois retornam o valor do texto, ou seja o que está escrito.

const item = document.getElementById("special");
const value = console.log(item.childNodes[0].nodeValue);
//ou
//const value = item.firstChild.nodeValue;

const textValue = item.textContent;
console.log(textValue);

//getAttribute() um método que pega o valor que está em determinado atributo

//setAttribute()

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
console.log(classValue);

//saber o endereço do link
const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

//mudar o texto e a classe de um link usando set
const last = link.nextElementSibling;
//add uma classe ao elemento selecionado
link.setAttribute("class", "first");
//mudando o conteúdo da variável
last.textContent = "I also have a first class";
console.log(last);

const links = document.querySelectorAll(".first");
console.log(links);
