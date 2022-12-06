//JSON = Javascript Object Notation

const xhr = new XMLHttpRequest();
console.log(xhr);
const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      //JSON.parse = transforma a string em objeto
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        sate: xhr.readyState,
      });
    }
  };
  xhr.send();
}
