// Arrays
// Exercício 1
// Obtenha o valor "Serviços" do array menu :
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];
console.log(menuServices);

// Exercício 2
// Procure o índice do valor "Portfólio" do array menu :
let indexOfPortfolio = menu[2];
console.log(indexOfPortfolio);

// Exercício 3
// Adicione o valor "Contato" no final do array menu :
menu.push("Contato");
console.log(menu);

// For
// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (seletor = 0; seletor < groceryList.length; seletor++) {
  console.log("");
  console.log(groceryList[seletor]);
}
