//Javascript executa uma linha de código por vez. Só vai para o próximo quando acaba o anterior, não importa quanto tempo demore.
//isso se chama "single threaded, synchronous language"

console.log(`i'm first`);
console.log(`i'm second`);
console.log(`i'm third`);

console.log(`i'm first`);
boilingWater()
console.log(`i'm third`);


function boilingWater() {
  console.log("boiling...");
  for (let i = 0; i < 10000; i++) {
    console.log("still not done...");
  }
  console.log("done.");
}
