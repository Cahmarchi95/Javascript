//Desafio Map
//adicionando a propriedade role com o valor "student" no array

console.log(students);

const updateStudents = students.map(function (student) {
  //console.log(student);
  student.role = "student";
  return student;
});

//Desafio Filter
//"Filtrando" as notas maiores ou iguais a 80

const highScores = students.filter(function (high) {
  return high.score >= 80;
});

console.log(highScores);

//Desafio Find
// Mostrando um resultado pelo id

const specificId = students.find(function (specific) {
  return specific.id === 4;
});

console.log(specificId);

//Desafio Reduce
//somar as notas, dividir pela leght do array para mostrar a media de notas da sala

//const averageScore =
//  students.reduce(function (scoreTotal, student) {
//    console.log(`Total ${scoreTotal}`);
//
//    return scoreTotal + student.score;
//  }, 0) / students.length;
//
//console.log(averageScore);

const averageScore =
  students.reduce(function (scoreTotal, student) {
    scoreTotal += student.score;
    console.log(`Total score: ${scoreTotal}`);
    return scoreTotal;
  }, 0) / students.length;

console.log(averageScore);

// Ainda com reduce, vai fazer uma "pesquisa" contando quantas vezes tem cada matéria

const survey = students.reduce(function (survey, student) {
  const favSub = student.favoriteSubject;
  if (survey[favSub]) {
    survey[favSub] = survey[favSub] + 1;
  } else {
    survey[favSub] = 1;
  }
  return survey;
}, {});

console.log(survey);
