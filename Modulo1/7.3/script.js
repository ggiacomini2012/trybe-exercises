const assert = require('assert');

function sum(a, b) {
    console.log('error bep bop')
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

console.log(sum(1, 3));
console.log(sum('a', 3));