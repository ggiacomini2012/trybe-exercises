// console.clear();

const arrayEstados = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' },
  ]

  for (index = 0; index < arrayEstados.length; index += 1) {
      const estados = document.getElementById('estado');
      const estadosOptions = document.createElement('option');
      const estadoAtualValue = Object.getOwnPropertyNames(arrayEstados[index]).toString()
      const estadoAtualInnerText = Object.values(arrayEstados[index]).toString();
      estadosOptions.value = estadoAtualValue;
      estadosOptions.innerText = estadoAtualInnerText;
      estados.appendChild(estadosOptions);
  }

function $class (className) {
  return document.getElementsByClassName(className.toString());
}

function $id (id) {
  return document.getElementById(id);
}

window.getComputedStyle

let selected;
window.onmouseover = e => {
  selected = (e.target); 
  // console.log(selected);
  // console.log(window.getComputedStyle(selected).width);
  if (selected.classList.contains('selected')) {
    selected.classList.remove('selected');
  } else {
    selected.classList.add('selected');
  }
} 

window.onmouseout = e => {
  selected = (e.target);  
  // console.log(selected);
  if (selected.classList.contains('selected')) {
    selected.classList.remove('selected');
  } else {
    selected.classList.add('selected');
  }
} 

function bob (r) {
  for(let a = 0; a < r.length; a += 1 ){
    // console.log(`bob é ${r[a]}`);
  }
}

const guy = [0,1,2,3,4,5,6,7];

bob(guy);

const answerPhone = (answer) =>
  new Promise(function (resolve, reject) {
    setTimeout(
      answer ? resolve('Oi!') : reject(new Error('Infelizmente não podemos atender...')), 3000,
    );
  });

  let bobg;// ?
answerPhone(true).then((e) => {
  bobg = e;
  console.log(bobg)// ?
})

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
