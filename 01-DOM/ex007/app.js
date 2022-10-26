//innerHTML (mostra a estrutura html e o texto)
//textContent (só mostra o texto)

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(list.innerHTML);
console.log(div.textContent);

//criando uma segunda ul e adicionando os elementos da primeira ul

const ul = document.createElement("ul");

//em vez de add os itens com textnode e appendChild, é só colar a estrutura html com os itens desejados usando a propriedade innerHtml e usar o appendChild para inserir de forma dinâmica no body

const ramdomVar = "random value";

ul.innerHTML = `<li class="item">${ramdomVar}</li>
      <li>list item</li>
      <li>list item</li>
      <li>list item</li>`;

document.body.appendChild(ul);
