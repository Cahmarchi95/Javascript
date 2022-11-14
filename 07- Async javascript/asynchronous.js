//BROWSER!!! funções do browser: Fetch Data, Get Geolocation, setTimeout, setTimer etc
//enquanto a água ferve é possivel cortar a cenoura pois a função fica com o browser ("ferver a água") e o javscript continua lendo o código("cortar a cenoura") Não é preciso esperar a primeira linha de código terminar para executar a próxima.

boilWater(10000);
console.log("chop carrots");
boilWater(5000);
console.log(`chop onion`);
boilWater(5000);

function boilWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done.");
  },time);
}
