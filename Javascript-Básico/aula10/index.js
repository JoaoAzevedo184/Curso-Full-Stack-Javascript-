/*
 * TROCA DE VALORES ENTRE VARIÁVEIS EM JAVASCRIPT
 * 
 * Objetivo: Demonstrar diferentes formas de trocar valores entre variáveis
 * Neste exemplo, queremos que:
 * - varA receba o valor de B
 * - varB receba o valor de C
 * - varC receba o valor de A
 */

// Valores iniciais
let varA = 'A'; // Será trocado para 'B'
let varB = 'B'; // Será trocado para 'C'
let varC = 'C'; // Será trocado para 'A'

// Método moderno usando desestruturação de array
[varA, varB, varC] = [varB, varC, varA];

// Exibe o resultado da troca
console.log(varA, varB, varC); // Resultado esperado: B C A

/* 
 * EXPLICAÇÃO:
 * 
 * 1. Método Antigo (usando variável temporária):
 * let temp = varA;
 * varA = varB;
 * varB = varC;
 * varC = temp;
 * 
 * 2. Método Moderno (usando desestruturação):
 * [varA, varB, varC] = [varB, varC, varA]
 * 
 * A desestruturação permite fazer a troca em uma única linha,
 * sem necessidade de variável temporária.
 */