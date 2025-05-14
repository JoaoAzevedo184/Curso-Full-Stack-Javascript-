/*
 * CONSTANTES EM JAVASCRIPT (const)
 * 
 * Constantes são similares às variáveis, mas:
 * 1. Não podem ter seu valor alterado após a inicialização
 * 2. Precisam ser inicializadas com um valor
 * 3. São mais performáticas que variáveis
 * 4. Use const sempre que não precisar modificar o valor
 */

// REGRAS PARA CONSTANTES:

// 1. Declaração e inicialização obrigatória
const nome = 'João';         // Correto
// const idade;              // Erro: constante precisa ser inicializada

// 2. Não pode modificar o valor
const peso = 80;
// peso = 82;               // Erro: não pode modificar uma constante

// 3. Com objetos e arrays, pode modificar propriedades
const pessoa = {
    nome: 'João',
    idade: 30
};
pessoa.idade = 31;           // Permitido: modifica propriedade
// pessoa = {};             // Erro: não pode reatribuir a constante

// 4. Exemplo prático com cálculos
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;

// 5. Tipos de dados em constantes
const texto = 'Texto';               // String
const numero = 10;                   // Number
const decimal = 10.5;                // Number (float)
const ativo = true;                  // Boolean
const lista = [1, 2, 3];            // Array
const objeto = {x: 1, y: 2};        // Object

// 6. Boas práticas
const DIAS_SEMANA = 7;              // Constantes "realmente" constantes em MAIÚSCULAS
const PI = 3.14159;                 // Valores que nunca mudam

// Exibindo resultados
console.log(resultado);              // 50
console.log(resultaDuplicado);       // 100

// 7. Verificando o tipo da constante
console.log(typeof primeiroNumero);  // 'number'
console.log(typeof texto);           // 'string'
