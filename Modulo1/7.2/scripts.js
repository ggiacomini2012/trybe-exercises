console.clear();

function bob(fu, fuf, fufu) {
  fu = {
    fuf: fufu,
  };
  console.log(fu);
  return fu;
}

let tuy;
let lab;

bob(tuy, lab, 2);

const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', 
  };

let huy = "lineOne";
huy += `
lineTwo`;

console.log(huy);

console.log(`linha1
linha2
lineThree`);

function turnObjectToText(object) {
  for (index in Object.keys(object)) {
    const hability = Object.keys(object)[index];
    const level = Object.values(object)[index];
    const text = `${hability}, Nível: ${level}.`;
    console.log(text);
  }
}

console.log('student1')
turnObjectToText(student1);

console.log('student2')
turnObjectToText(student2);
