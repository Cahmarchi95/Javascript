//FIND
//find - gets specif item
//FindIdex - get's index of the item
//every - all items
//some - at least one item

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "anna" },
];

//const anna = people.filter(person => person.name === "anna");
//console.log(anna);
//console.log(anna[0].name);
//console.log(anna[0].id);
//filter retorna um array
/*
//find retorna somente o objeto específico
const anna = people.find(person => person.name === "anna");
console.log(anna);
console.log(anna.name);


//FIND INDEX
const person = people.findIndex(item => item.id === 3);
console.log(person);
const newPeople = people.slice(0,person);
console.log(newPeople);


//EVERY
//todos os elementos precisam atender a condição */
const grades = ["A", "B", "A", "B", "C"];
const goodGrades = ["A", "B", "A", "B"];

//const allGoodGrades = grades.every((grade) => grade !== "C");
//console.log(allGoodGrades);
//falso pois o grades tem C

//const allGoodGrades1 = goodGrades.every((grade) => grade !== "C");
//console.log(allGoodGrades1);
//verdadeiro pois o goodGrades não tem C

//SOME
//pelo menos um item tem que atender a condição para ser verdadeiro

const oneBadGrade = grades.some((grade) => grade === "C");
console.log(oneBadGrade);

const oneBadGrade1 = goodGrades.some((grade) => grade === "C");
console.log(oneBadGrade1);