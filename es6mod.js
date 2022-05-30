import sum, { add } from './modules/add.js';

console.log(add(1, 2, 3));

console.log('sum ===', sum);

// susikuriam faila divide.js
// exportuojam funkcija divide gauna 2 argumentus
// grazina tu argumentu dalyba
// jei antras argumentas 0 grazina texta 'dalinti is 0 negalima'
// panaudojam funkcija es6mod.js faile

import { divide } from './divide.js';
console.log(divide(20, 2));
