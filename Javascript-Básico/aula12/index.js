/*
 * NÚMEROS EM JAVASCRIPT E O PADRÃO IEEE 754-2008
 * 
 * Este código demonstra:
 * 1. Precisão de números decimais em JavaScript
 * 2. Métodos para manipulação de números
 * 3. Conversões e verificações numéricas
 */

// Exemplo de imprecisão com números decimais
let num1 = 0.7; // number
let num2 = 0.1; // number

// Problema de precisão com ponto flutuante
console.log(num1 + num2);                // 0.7999999999999999

// Solução 1: Multiplicação e divisão para evitar imprecisão
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

// Solução 2: Usando toFixed e convertendo de volta para número
num1 = Number(num1.toFixed(2));

// Métodos úteis para números
console.log(num1.toFixed(2));            // Formata com 2 casas decimais
console.log(Number.isInteger(num1));      // Verifica se é inteiro

// Outros métodos importantes (comentados para referência)
// console.log(num1.toString() + num2);   // Converte para string
// num1 = num1.toString();                // Converte permanentemente para string
// console.log(num1.toString(2));         // Representa em binário
// console.log(Number.isInteger(num1));   // Verifica se é inteiro
// console.log(Number.isNaN(temp));       // Verifica se é NaN
// let temp = num1 + '5';                 // Concatenação com string