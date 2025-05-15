/*
 * OBJETO MATH EM JAVASCRIPT
 * 
 * Este código demonstra as principais operações matemáticas 
 * usando o objeto Math do JavaScript
 */

// 1. Operações básicas com Math
let num1 = 9.54578;

// Arredondamento
let numFloor = Math.floor(num1);    // Arredonda para baixo: 9
let numCeil = Math.ceil(num1);      // Arredonda para cima: 10
let numRound = Math.round(num1);    // Arredonda para o mais próximo: 10

// 2. Encontrando valores máximos e mínimos
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));    // 1500
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));    // -50

// 3. Gerando números aleatórios
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Número entre 5 e 10

// 4. Outras operações úteis
console.log(Math.PI);               // Valor de PI
console.log(Math.pow(2, 3));        // Potência: 2³ = 8
console.log(Math.sqrt(16));         // Raiz quadrada: 4

// 5. Verificando infinito
console.log(!!(100 / 0));          // true (é infinito)