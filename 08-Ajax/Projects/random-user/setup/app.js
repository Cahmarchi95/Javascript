import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  //get user from api
  const person = await getUser(); console.log(person);
  //display user
};

//para carregar um novo usuário assim que a página for aberta ou atualizada
window.addEventListener("DOMContentLoaded", showUser);

//para carregar um novo usuário assim que clicar no botão random user
btn.addEventListener("click", showUser);
