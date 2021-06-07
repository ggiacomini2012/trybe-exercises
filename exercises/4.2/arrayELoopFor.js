
let resultado = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//percorrer um array:
for (let index = 0; index < numbers.length; index +=1){
    //imprimir todos numeros;
    console.log(numbers[index]);
    let somando = numbers[index];
    //agregando todos números na variável resultado:
    resultado += somando;
}
//imprimir a soma de todos valores da array:
console.log(resultado);

//calaculando e imprimindo a soma aritimética do array:
let somaAritimetica = resultado / numbers.length;

console.log(somaAritimetica);

//imprime se a somaAritimetica é maior ou menor que 20: 
if (somaAritimetica > 20) {
    console.log('valor maior que 20')
}
if (somaAritimetica < 20) {
    console.log('valor menor que 20')
}

let maior = 0;
//imprimir o maior número da array:
for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index] > maior){
        maior = numbers[index]
    }   
}

console.log(maior);

let arrayVerificadora = [];
//verifica os elementos impares da array;
for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index]  % 2 !== 0){
        arrayVerificadora.push(numbers[index]);
    }   
}

console.log(arrayVerificadora);

//imprime mensagem caso nenhum elemento seja impar:
if (arrayVerificadora < 1) {
    console.log("nenhum valor ímpar encontrado");
}

let menor = 999;
//imprimir o menor número da array:
for (let index = 0; index < numbers.length; index +=1){
        if (menor > numbers[index ]){
            menor = numbers[index];
        } 
}

console.log(menor);

let novoArray = [];

let elementosDoNovoArray = 1;

//criando uma array do 1 ao 25 e imprimindo o a divisão de cada elemento por 2.
for (let index = 0; index < 25; index +=1){
    novoArray.push(elementosDoNovoArray);
    let resultadoDaDivisaoPorDois = novoArray[index] /2;
    console.log(resultadoDaDivisaoPorDois);
    elementosDoNovoArray += 1;
}

console.log(novoArray);
