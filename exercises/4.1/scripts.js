console.clear();

const name = "Gui";
const idade = 33;
const birthCity = "Santa Maria - RS";
let birthYear = 1987;
console.log(name, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear);

const a = 1;
let b = 2;
let c = 3;
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

if (a > b) {
  console.log("a é maior que b");
} else {
  console.log("a é menor que b");
}

if (a > b && a > c) {
  console.log("a é o maior");
} else if (b > a && b > c) {
  console.log("b é o maior");
} else if (c > a && c > b) {
  console.log("c é o maior");
}

if (a == 0) {
  console.log("zero");
} else if (a < 0) {
  console.log("negative");
} else if (a > 0) {
  console.log("positive");
}

let anguloA = 40;
let anguloB = 60;
let anguloC = 60;

if (anguloA == null || anguloB == null || anguloC == null) {
  let resposta = "erro";
  console.log(resposta);
} else if (anguloA == 60 && anguloB == 60 && anguloC == 60) {
  let resposta = true;
  console.log(resposta);
} else {
  let resposta = false;
  console.log(resposta);
}

let pecaDeXadrez = "Bispo";

switch (pecaDeXadrez.toLowerCase()) {
  case "bispo":
    console.log("diagonal");
    break;
  default:
    console.log("erro!");
}

let nota = 1010;

if (typeof nota == "number") {
  if (nota >= 90 && nota <= 100) {
    console.log("A");
  }
  if (nota >= 80 && nota < 90) {
    console.log("B");
  }
  if (nota >= 70 && nota < 80) {
    console.log("C");
  }
  if (nota >= 60 && nota < 70) {
    console.log("D");
  }
  if (nota >= 50 && nota < 60) {
    console.log("E");
  }
  if (nota < 50 && nota > 0) {
    console.log("F");
  }
  if (nota < 0 || nota > 100) {
    console.log(
      "Verifique a nota pois o valor estar abaixo ou acima dos limites possíveis"
    );
  }
} else {
  console.log("Digite um número para a nota!");
}

if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
