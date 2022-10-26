//CSS (você pode adicionar as propriedades do estilo uma por uma, mas o mais recomendado e ter uma classe com o estilo separado e adicionar a classe no elemento. Fazer um por um é pra casos onde você quer uma porpiedade específica no estilo)

const random = document.querySelector(".random");

//add propriedades do estilo uma por uma

//random.style.backgroundColor = "blue";
//random.style.color = "white";
//random.style.fontSize = "3rem";
//random.style.textTransform = "capitalize";

//adicionando a classe "title" com todas as propriedades de estilo desejadas através do "classList"
random.classList.add("title");
