/*
 * OPERAÇÕES ESSENCIAIS EM JAVASCRIPT
 * Este arquivo demonstra as principais operações que você precisa conhecer
 */

// 1. Operadores Aritméticos Básicos
const num1 = 10;
const num2 = 5;

console.log('Operações Básicas:');
console.log(`Adição: ${num1 + num2}`);      // 15
console.log(`Subtração: ${num1 - num2}`);    // 5
console.log(`Multiplicação: ${num1 * num2}`); // 50
console.log(`Divisão: ${num1 / num2}`);      // 2
console.log(`Resto: ${num1 % num2}`);        // 0
console.log(`Potência: ${num1 ** num2}`);    // 100000

// 2. Incremento e Decremento
let contador = 1;
console.log('\nIncremento e Decremento:');
console.log(contador++);    // Mostra 1, depois incrementa
console.log(++contador);    // Incrementa, depois mostra 3
console.log(contador--);    // Mostra 3, depois decrementa
console.log(--contador);    // Decrementa, depois mostra 1

// 3. Operadores de Atribuição
let numero = 10;
console.log('\nOperadores de Atribuição:');
numero += 5;   // numero = numero + 5
console.log(numero);  // 15
numero -= 3;   // numero = numero - 3
console.log(numero);  // 12
numero *= 2;   // numero = numero * 2
console.log(numero);  // 24
numero /= 4;   // numero = numero / 4
console.log(numero);  // 6

// 4. Operadores de Comparação
console.log('\nOperadores de Comparação:');
console.log(10 > 5);        // true
console.log(10 >= 10);      // true
console.log(10 < 5);        // false
console.log(10 <= 10);      // true
console.log(10 == '10');    // true (compara valor)
console.log(10 === '10');   // false (compara valor e tipo)
console.log(10 != '10');    // false
console.log(10 !== '10');   // true

// 5. Operadores Lógicos
console.log('\nOperadores Lógicos:');
console.log(true && true);   // true
console.log(true && false);  // false
console.log(true || false);  // true
console.log(false || false); // false
console.log(!true);          // false

// 6. Operador Ternário
const idade = 20;
const podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';
console.log('\nOperador Ternário:');
console.log(podeBeber);      // Pode beber

// 7. Conversão de Tipos
console.log('\nConversão de Tipos:');
console.log(Number('123'));  // Converte string para número
console.log(String(123));    // Converte número para string
console.log(Boolean(1));     // Converte para booleano