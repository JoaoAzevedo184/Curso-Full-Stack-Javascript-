/*
 * TIPOS DE DADOS PRIMITIVOS EM JAVASCRIPT
 * 
 * JavaScript possui 7 tipos de dados primitivos:
 * 1. String (texto)
 * 2. Number (números)
 * 3. Boolean (verdadeiro/falso)
 * 4. Undefined (indefinido)
 * 5. Null (nulo)
 * 6. Symbol (símbolo)
 * 7. BigInt (números grandes)
 */

// 1. STRING - Representa texto
const stringSimples = 'Texto com aspas simples';
const stringDupla = "Texto com aspas duplas";
const stringTemplate = `Texto com template literal`;

// 2. NUMBER - Representa números (inteiros e decimais)
const inteiro = 10;          // Número inteiro
const decimal = 10.52;       // Número decimal
const negativo = -5;         // Número negativo
const infinity = Infinity;    // Infinito
const notANumber = NaN;      // Not a Number

// 3. BOOLEAN - Representa verdadeiro ou falso
const verdadeiro = true;
const falso = false;

// 4. UNDEFINED - Variável declarada sem valor
let variavelIndefinida;      // undefined
let valorExplicito = undefined;

// 5. NULL - Ausência intencional de valor
const valorNulo = null;

// Exemplos de uso e verificação de tipos
console.log('Tipos de dados:');
console.log(typeof stringSimples);    // 'string'
console.log(typeof inteiro);          // 'number'
console.log(typeof verdadeiro);       // 'boolean'
console.log(typeof variavelIndefinida); // 'undefined'
console.log(typeof valorNulo);        // 'object' (peculiaridade do JS)

// Demonstração de conversão de tipos
const numeroString = '123';
const numeroConvertido = Number(numeroString);  // Converte string para número
const stringNumero = String(123);               // Converte número para string
const booleanString = String(true);             // Converte boolean para string

// Verificação de valores
console.log('Verificações:');
console.log(Number.isInteger(inteiro));         // true
console.log(Number.isFinite(decimal));          // true
console.log(isNaN(notANumber));                 // true

// Operações com diferentes tipos
const soma = 10 + '5';           // Resultado: '105' (concatenação)
const subtracao = 10 - '5';      // Resultado: 5 (conversão automática)
const multiplicacao = 10 * '5';   // Resultado: 50 (conversão automática)