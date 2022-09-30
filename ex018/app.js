//Math object
// é uma propriedade do Javascript em que é possível acessar vários métodos relacionados a matemática quando as variáveis são números. Precisa colocar a palavra "Math".

//MÉTODOS

//Floor "arredonda" o num p/ baixo
//const number = 5.8973862964;
//const result = Math.floor (number);

//console.log(result);

//Em vez da variável o número também pode ser passado diretamente

//const resultado = Math.floor(7.6732675627567);
//console.log(resultado);

//Ceil "arredonda" o num p/ cima

//const number = 5.473862964;
//const result = Math.ceil (number);
//console.log(result);

//Raiz quadrada
//const number = 81;
//const result = Math.sqrt (number);
//console.log(result);

//PI
//const result = Math.PI;

// Min (retorna sempre o valor mínimo do conjunto)
//const result = Math.min(4,5,6,7);
//console.log(result);

// Max (retorna sempre o valor máximo do conjunto)
//const result = Math.max(4,5,6,7);
//console.log(result);

// Random (retorna sempre um valor aleatório 0. algum número mas nunca 1. Precisa multiplicar por 10 se quiser aumentar os valores. E incluindo a propriedade floor, tira as casas decimais, deixando os números inteiros)
//Para os números irem de 1 a 10 precisa adicionar + 1 a propriedade floor ou mudar para a propriedade Ceil.

const result = Math.floor(Math.random() * 10 + 1);
console.log(result);

const result1 = Math.ceil(Math.random() * 10);
console.log(result1);
