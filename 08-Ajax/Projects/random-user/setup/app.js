import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";


const btn = get(".btn");

const showUser = async () => {
  //get user from api
  const person = await getUser();
  displayUser(person);
  //display user
};

//para carregar um novo usuário assim que a página for aberta ou atualizada
window.addEventListener("DOMContentLoaded", showUser);

//para carregar um novo usuário assim que clicar no botão random user
btn.addEventListener("click", showUser);
