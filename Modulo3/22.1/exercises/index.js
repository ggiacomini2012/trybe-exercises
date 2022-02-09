const readline = require("readline-sync");
const imc = require("./imc");
const fs = require("fs");

function main() {
  const nome = readline.question("Qual é o seu nome? ");
  const peso = readline.questionFloat("Qual é o seu peso? ");
  const altura = readline.questionFloat("Qual é sua altura? ");
  const resultado = imc(peso, altura);

  console.log(`O IMC de ${nome} é: ${resultado}`);
  resultado < 18.5 && console.log("Abaixo do peso (magreza)");
  resultado > 18.5 && resultado < 24.9 && console.log("Peso normal");
  resultado > 25.0 && resultado < 29.9 && console.log("Acima do peso(sobrepeso)");
  resultado > 30.0 && resultado < 34.9 && console.log("Obesidade grau I ");
  resultado > 35.0 && resultado < 39.9 && console.log("Obesidade grau II");
  resultado > 40 && console.log("Obesidade graus III e IV");
  fs.appendFileSync("imc.txt", `O IMC de ${nome} é: ${resultado}\n`);
}

main();
