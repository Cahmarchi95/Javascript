//Date object
// Propriedades podem ser usadas invocando a função new Date

//Saber a data de hj por exemplo

//const date = new Date();
//console.log(date);

//Acessar o mês. Index 0 então Janeiro não é 1 é index 0.
//Mostrar no console o nome do mês

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const data = new Date();
const mes = data.getMonth();
console.log(meses[mes]);

//Acessar o dia da semana. Assim como o mês, vai dar o número do index.Para acessar o nome, é preciso passar o array com o nome dos dias e por esse index, vai retornar no console o nome do dia da semana.

const dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const dia = data.getDay();
console.log(dias[dia]);

//Número do dia
console.log(data.getDate());

//Saber o ano
console.log(data.getFullYear());

//Escrevendo todos os valores juntos em uma sentença

const dataCompleta = ` ${dias[dia]}, ${data.getDate()} de ${
  meses[mes]
} de ${data.getFullYear()}`;

console.log(dataCompleta);
