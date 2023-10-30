// variables

//const
// cant reassign

const num = 10;
console.log('🚀 ~ file: index.js:7 ~ num:', num);

// let
// you can change the value
let age = 1;
console.log('🚀 ~ file: index.js:12 ~ age:', age);
age = 13;
console.log('🚀 ~ file: index.js:13 ~ age:', age);

// conditionals

// == vs ===
// "2" == 2 ===> T
// "2" === 2 ===> F

// logical operators
/**
 * OR ||
 * AND &&
 * NOT !
 *
 * T && T ===> T
 * T && F ===> F
 * F && T ===> F
 * F && F ===> F
 * T || T ===> T
 * T || F ===> T
 * F || T ===> T
 * F || F ===> F
 *
 * !T ===> F
 * !F ===> T
 * 
 * Falsy values
 * 0
 * ""
 * false
 * undefined
 * null
 */
if (age > 5 && age < 14) {
  console.log('WHAT IS THIS?');
} else if (age >= 14 && age < 95) {
  console.log('WHAAT');
}

let str = '';
if (!str) {
  console.log('NOTHING!!!!');
}

// if (str === '') {
//   console.log('NOTHING!!!!');
// }
