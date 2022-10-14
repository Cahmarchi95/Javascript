/* traversing the dom ("acessando o pai do pai")

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    //no toggle a classe não precisa de . antes
    question.classList.toggle("show-text");
  });
});*/

//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //selecionar um botão de cada vez
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);
    //fechar uma questão quando abrir outra
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
