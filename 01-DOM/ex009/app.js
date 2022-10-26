//EVENTOS EM JAVASCRIPT (interações com o usuário. ex: com um clique, muda o estilo de um heading do site)
//selecionar elemento
//addEventListener()
//qual evento, o que fazer

//Mudando o estilo do h2 com o clique no botão

//const btn = document.querySelector(".btn");
//const heading = document.querySelector("h2");
//btn.addEventListener("click", function () {
//heading.classList.add("red");
//});

//fazendo sem a função ser anônima. Não invocar a função senão o evento já vai aconter assim que carregar a página e não quando o usuário clicar no botão

//checar utilizando a função se determinado elemento possue tal classe. Se for verdadeiro, ou seja, se a classe red existir o comando é para removê-la, caso contrário, a classe red será adicionada.

/*function changeColors() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}
btn.addEventListener("click", changeColors);*/

//MOUSE EVENTS

//click - fires after full action occurs (aciona quando mousedown e o mouseup funcionam juntos)
//mousedown - button is pressed (aciona primeiro)
//mouseup - button is released (aciona depois)
//mouseenter - moved onto an element (funciona como o "hover" a ação ocorre quando o mouse passa sobre o elemento)
//mouseleave - moved out of an element (a ação ocorre quando o mouse "sai" do elemento)

const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");

btn.addEventListener("mousedown", function () {
  console.log("down");
});

btn.addEventListener("mouseup", function () {
  console.log("up");
});

btn.addEventListener("click", function () {
  console.log("you clicked me");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
