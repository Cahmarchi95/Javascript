const url = "./api/people.json";

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     //response object
//     //useful properties and methods
//     // console.log(resp);
//     // convert response into JSON
//     // returns promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data))
      displayItems(data);
    })
    .catch((err) => console.log(err));
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
