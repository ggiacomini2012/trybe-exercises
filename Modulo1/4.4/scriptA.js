let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);

  info.recorrente = 'Sim';

  console.log(info);

for (let bob in info ){
    console.log(bob);
}

for (let bob in info ){
    console.log(info[bob]);
}

console.log(info.origem);


let infoDois = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let propriedade in info) {
    if (info[propriedade] === info.recorrente) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[propriedade] + ' e ' + infoDois[propriedade]);
    }
  }
