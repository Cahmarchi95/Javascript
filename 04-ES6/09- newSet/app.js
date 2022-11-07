//Set object - stores a collection of unique values of any type

//newSet()
//add(value)
//delete(value)
//clear()
//has (value)

//iterators
//entries(),keys(),values(), foreach()

//ADD
/*
const unique = new Set();

const random = "third";

unique.add("first");
unique.add("second");
unique.add(random);
unique.add("first");
unique.add(4);

//DELETE
//const result = unique.delete("third")
//console.log(result);//true
//console.log(unique);

//const result = unique.delete("five");
//console.log(result); //false
//console.log(unique);

//CLEAR (remover todos os itens)
//const result = unique.clear();


//HAS (verifica se existe um item ou não, retorna true ou false)

const isValue = unique.has(4);
console.log(isValue);
console.log(unique);
*/

//new Set() - accepts iterable objects
//reúne os dados mas pula nomes repetidos

const products = [
  {
    title: "high-back bench",
    company: "ikea",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "ikea",
  },
];

//const companies = products.map((item) => item.company);
//console.log(companies);

//const uniqueCompanies = new Set(companies);

//transformando em array
//const finalCompanies = [...uniqueCompanies];
//console.log(finalCompanies);

//A mesma funcionalidade só que resumida em uma linha

const result = ["all", ...new Set(products.map((item => item.company)))];
console.log(result);