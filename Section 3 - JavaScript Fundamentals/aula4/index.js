/*
 * VARIÁVEIS EM JAVASCRIPT
 * 
 * Variáveis são contêineres para armazenar dados (valores).
 * Em JavaScript moderno, usamos 'let' para declarar variáveis.
 */

// REGRAS PARA CRIAÇÃO DE VARIÁVEIS:

// 1. Não use palavras reservadas
// Exemplo do que NÃO fazer:
// let if;
// let const;
// let function;

// 2. Variáveis precisam ter nomes significativos
let nomeCliente = 'Luiz';       // Bom: nome descreve o conteúdo
let n = 'Luiz';                 // Ruim: nome não é descritivo

// 3. Não pode começar com número
// let 1nome;  // Errado
let nome1;     // Correto

// 4. Não pode conter espaços ou traços
// let nome-Cliente;  // Errado
// let nome Cliente;  // Errado
let nomeCompleto;     // Correto

// 5. Utilizamos camelCase
let nomeCompletoDoCliente;    // Padrão camelCase

// 6. Case-sensitive (letras maiúsculas e minúsculas fazem diferença)
let nome = 'João';
let Nome = 'Maria';           // São variáveis diferentes

// 7. Não podemos redeclarar variáveis com let
let cliente = 'João';
// let cliente = 'Maria';     // Isso dará erro

// 8. NÃO UTILIZE VAR, UTILIZE LET
// var idade = 25;           // Antiga forma (não recomendada)
let idade = 25;              // Forma moderna e recomendada

// Exemplo de modificação de variável
nomeCliente = 'Otávio';      // Podemos modificar o valor

// Exibindo o valor da variável
console.log(nomeCliente);

// TIPOS DE DADOS QUE PODEM SER ARMAZENADOS:
let texto = 'String';        // String (texto)
let numero = 10;             // Number (número)
let booleano = true;         // Boolean (verdadeiro/falso)
let nulo = null;             // Null (nulo)
let indefinido = undefined;   // Undefined (indefinido)
let objeto = {};             // Object (objeto)
let array = [];              // Array (lista)
