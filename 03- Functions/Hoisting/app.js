//hoisted = "içadas"
//funciona apenas para functions and var(aparece undefined)
//As variáveis podem ser inicializadas e usadas antes de serem declaradas.
// permite que você use uma função antes de declara-la em seu código.
//Porém, é mais seguro acessar somente depois de declarar a variável ou a função para evitar bugs

display();
console.log(random);
//console.log(fisrtName);
//console.log(fisrtName);

const fisrtName = "john";
let lastName = "jordan";
var random = "random";

function display(){
    console.log("hello world");
}