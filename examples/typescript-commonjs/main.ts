// miniadd/examples/typescipt-commonjs/main.ts

'use strict';

import * as engine from '../..';

console.log('add is:', typeof engine.add, engine.add);

const a = 2;
const b = 3;
const sum = engine.add(a, b);

console.log(`${a} plus ${b} is ${sum}.`);
