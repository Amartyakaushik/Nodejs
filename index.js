const a = require('./add');

let p=a.add(2,3);
console.log(p);


const factorial= require('./factorial');
let f=factorial.fact(5);
console.log(f);


const q= require('lodash');
const numbers= [ 1, 2, 3, 4];
const doubledNumbers = q.map(numbers, n => n*2);

console.log('Original numbers: ', numbers);
console.log('Doubled numbers: ',doubledNumbers);
