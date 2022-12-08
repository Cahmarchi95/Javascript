const url = "https://dog.ceo/api/breeds/image/random";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchDogPicture();
});

const fetchDogPicture = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("there was an error");
    }
    const data = await response.json();
    result.innerHTML = ` <img src="${data.message}">`;
  } catch (error) {
    result.textContent =
      "Sorry, something went wrong. Please, try again later.";
  }
};

fetchDogPicture();
