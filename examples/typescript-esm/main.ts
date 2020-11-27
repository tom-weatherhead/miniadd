// miniadd/examples/typescipt-esm/main.ts

'use strict';

import { add } from '../..';

console.log('add is:', typeof add, add);

const a = 2;
const b = 3;
const sum = add(a, b);

console.log(`${a} plus ${b} is ${sum}.`);
