//callbacks, promises, async/await
// mudar a cor dos headings depois do tempo determinado ao clicar no botão
//para seguir a ordem do heading1:vermelho, heading2:verde, heading3:azul é preciso colocar um setTimeout dentro do outro.

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
  
  
});
