//prepend (fica na frente do h1)
//innerText (não precisa criar node text e nem append. O append aparece no final do scirpt)

const heading = document.createElement("h2");
heading.innerText = `i'm a dynamic heading`;
document.body.prepend(heading);

//remove
//remove child

const result = document.querySelector("#result");
//result.remove();

const heading1 = result.querySelector("h2");
result.removeChild(heading1);
console.log(heading1);
