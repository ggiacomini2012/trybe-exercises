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

let huy = "lineOne";
huy += `
lineTwo`;

console.log(huy);

console.log(`linha1
linha2
lineThree`);

function turnObjectToText(object) {
  for (let index = 0; index < Object.keys(student1).length; index += 1) {
    const hability = Object.keys(object)[index];
    const level = Object.values(object)[index];
    const text = `${hability}, Nível: ${level}.`;
    console.log(text);
  }
}

turnObjectToText(student1);
