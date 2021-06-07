// Senna do Oliva

let senna = [];

for (contadorSenna = 0; contadorSenna < 6; contadorSenna += 1) {
  senna[contadorSenna] = Math.ceil(Math.random() * 60);
  for (filtro = contadorSenna; filtro > 0; filtro -= 1) {
    while (senna[contadorSenna] == senna[filtro - 1]) {
      console.log(
        "O filtro barrou o número " +
          senna[contadorSenna] +
          " na casa (" +
          (contadorSenna + 1) +
          ") pois ele já avisa sido sorteado!"
      );

      senna[contadorSenna] = Math.ceil(Math.random() * 60);
    }
  }
}

console.log(senna);
let olivaGame = [56, 51, 4, 10, 14, 11];
console.log(olivaGame);
let sorte = 0;

for (x = 0; x < senna.length - 1; x++) {
  let verificaAcerto = olivaGame[x] == senna[0 || 1 || 2 || 3 || 4 || 5 || 6];
  if (verificaAcerto) {
    sorte++;
    console.log("Número: " + olivaGame[x] + " foi o sorteado!");
  }
}

if (sorte == 0) {
  console.log("Nenhum número foi sorteado!");
}

if (sorte > 0) {
  console.log("Você acertou " + sorte + " númeos!");
}

let teste = [];
for (x = 0; x < 6; x += 1) {
  teste.push("bob");
}

console.log(teste);
