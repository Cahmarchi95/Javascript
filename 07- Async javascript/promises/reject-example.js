//callbacks, promises, async/await
//PROMISES - Pending, Resolved(fulfilled), Rejected
//then catch - pass another callback
//carregar uma imagem aleatória ao clicar no botão, pegar os dados por promises api

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";
btn.addEventListener("click", () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image from the source: ${url}`));
    });
    img.src = url;
  });
}
