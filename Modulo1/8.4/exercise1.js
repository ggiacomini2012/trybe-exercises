estudantes.map((e) => ({nome: e.nome, materia: e.materias.reduce((e, a) => ((e.nota > a.nota)? e.name: a.name))}))

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acumulador, atual) => acumulador.concat(atual))
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);