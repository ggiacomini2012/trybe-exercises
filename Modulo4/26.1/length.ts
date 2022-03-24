
import express from 'express';

const app = express();

const bob = {
  mm: 0.001,
  cm: 0.01,
  dm: 0.1,
  m: 1,
  dam: 10,
  hm: 100,
  km: 1000
}

const convert = (valor: number, medida: keyof typeof bob, converterPara: keyof typeof bob): number => {
  const pegaMedida = Math.pow(10, Object.keys(bob).indexOf(medida));
  const pegaConversor = Math.pow(10, Object.keys(bob).indexOf(converterPara));
  const result = pegaMedida / pegaConversor;
  return result;
}

app.listen(3000, () => {
  console.log(convert(1, 'km', 'm'));
})
