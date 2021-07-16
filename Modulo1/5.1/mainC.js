// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
console.log("bob");
let euDoFuturo = document.getElementsByTagName("p")[0];
function one() {
  euDoFuturo.innerText = "Empregado e ganhando e performando BEM";
  euDoFuturo.style.color = "black";
}
one();
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let quadroVerdeEhUmaOrdem = document.getElementsByClassName("main-content")[0];
quadroVerdeEhUmaOrdem.id = "quadraVerde";
let quadroVerdeEhUmaOrdemId = document.getElementById("quadraVerde");
function two() {
  quadroVerdeEhUmaOrdemId.style.backgroundColor = "rgb(76,164,109)";
}
two();
//  Crie uma função que mude a cor do quadrado vermelho para branco.
let corrigeQuadradoVermelho = document.querySelector(".center-content");
function three() {
  corrigeQuadradoVermelho.style.backgroundColor = "white";
}
three();
//  Crie uma função que corrija o texto da tag <h1>.
let corrigirTexto = document.getElementsByTagName("h1")[0];
function four() {
  corrigirTexto.innerText = "Exercício 5.1 - Javascript";
}
four();
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
let paraMinuscula = document.getElementsByTagName("p")[0];
function fifth() {
  paraMinuscula.style.textTransform = "lowercase";
}
fifth();
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
let todasTagsP = document.querySelectorAll("p");
function sixth() {
  for(let i = 0; i < todasTagsP.length; i +=1){
  console.log(todasTagsP[i].innerText);
  }
}
sixth();
