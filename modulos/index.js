const matriz = require('./util/matriz')
const calc = require('./util/calculadora')

let B = [
    [5, 6],
    [7, 8],
    [9, 10]
];

matriz.transporMatriz(B);
console.log('2 + 3 = ' + calc.somar(2, 3))