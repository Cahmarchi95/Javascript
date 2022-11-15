//callbacks, promises, async/await
//must have async
//await waits till promise is settled
//error handling - try/catch
// por default, o async já vai retornar uma promise da função. Por isso, é possivel usar o .then depois de invocar a função
//Sintaxe sempre usar async antes da função e await dentro da função:

// async function someFunction(){
//     await
// }

// const otherFunction = async() =>{
//     await
// }

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
    try{
 const first = await addColor(1000, heading1, "red");
  await addColor(1000, heading2, "green");
  await addColor(1000, heading3, "blue");
  console.log(first);
    }catch(error){
        console.log(error);
    }
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
