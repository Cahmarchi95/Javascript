let text = "Peter Jordans";

let result = text.length;
//Propriedades
//console.log(result);
//console.log(text.length);

//Métodos

//Todas as letras minúsculas e maiúsculas
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());

//Index 0 (a primeira letra e a que está no num 11)
console.log(text.charAt(0));
console.log(text.charAt(11));

//Passar a letra e descobrir que posição está no index (se a letra aparecer várias vezes, vai mostrar o índice da primeira vez que aparece)
console.log(text.indexOf("t"));

// Para saber a última letra sem precisar contar (comprimento = length - 1 "-1 pra sempre ser a última letra sem precisar contar")
console.log(text.charAt(text.length - 1));

//tira o espaço antes do texto
console.log(text.trim());

// Verifica se a string começa com determinada letra ou palavra específica
console.log(text.startsWith("Peter"));

//Verifica se determinada letra ou palavra está presente na string
console.log(text.includes("Jord"));

//Forma outra palavra com "pedaços" da string de acordo com o índice que é passado. Se for negativo vai começar do final para o começo
console.log(text.slice(7));
