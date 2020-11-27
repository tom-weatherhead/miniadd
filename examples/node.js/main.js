// miniadd/examples/node.js/main.js

'use strict';

const miniadd = require('../..');
// const miniadd = require('../../commonjs/main.js');

console.log('miniadd is:', typeof miniadd, miniadd);

const a = 2;
const b = 3;
const sum = miniadd.add(a, b);

console.log(`${a} plus ${b} is ${sum}.`);
