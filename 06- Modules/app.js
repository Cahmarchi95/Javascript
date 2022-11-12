//global name space / hard to navigate

//named export
// pode ter vários
import { random, people } from "./utilis/data.js";

//default import (o nome do import pode ser qualquer um contanto que a pasta seja a mesma)
// default só pode fazer uma vez
import showPeople from "./utilis/showPeople.js"

import get from "./utilis/getElement.js"


const container = get(".container");
//const container1 = get(".container1"); erro
const btn = get(".btn");



btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});

