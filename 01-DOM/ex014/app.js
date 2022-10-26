//DOMContentLoaded
//dispara assim que o dom carrega, sem esperar outras coisas carregarem
//pra quando no html o script estiver no head o código continuar funcionando. Apesar de que o script é pra ficar sempre no body

/*window.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector("h1");
  console.log(heading);
  heading.style.color = "red";
});

//EVENTS LOAD
//diferente do DOMContentLoaded, ele dispara só quando a página toda está carregada, incluindo os estilos e as imagens.

window.addEventListener("load", function () {
  console.log("I will run second");
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded I will run first");
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});

//SCROLL EVENT - no elemento ou no documento

// scroll y: retorna num de pixels que foi "scrolado" no eixo vertical

// scroll X: retorna num de pixels que foi "scrolado" no eixo horizontal

window.addEventListener("scroll", function () {
  console.log(window.scrollX + "px");
  console.log(window.scrollY + "px");
});

*/

//WIDTH, HEIGHT, GETBOUNDINGCLIENTRECT

console.log("width: " + window.innerWidth);
console.log("height: " + window.innerHeight);

//GetBoundingClientRect
//fornece o width, height e a posição na viewport

const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});

//EVENTS: RESIZE
//Esse evento ocorre quando a janela do documento é redimensionada

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
