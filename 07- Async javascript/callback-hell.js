//Make Soup
//boil water 10 min
//chop carrots
//add carrots boil for 5 min
//chop onion
//add onion boil for 5 min

//callbacks, promises, async/await
//para o passo a passo da sopa é preciso uma callback function dentro da outra para que seja possível ferver a água, ao mesmo tempo cortar a cenoura e depois deixar ela fervendo por 5 min. Enquanto a cenoura ferve, cortar a cebola e colocar para ferver depois que a cenoura estiver pronta.

boilWater()
console.log(`chop carrot`);

function boilWater() {
  console.log("boiling water...");
  setTimeout(() => {
    console.log("water done.");
    console.log("add carrots.");
    setTimeout(() => {
      console.log("carrots done.");
      console.log("add onion.");
      setTimeout(()=>{
        console.log("onion done.");
      },5000)
    }, 5000);
    console.log(`chop onion`);
  }, 10000);
}
