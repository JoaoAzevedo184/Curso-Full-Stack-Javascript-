/*
 * MÉTODOS DE MANIPULAÇÃO DE STRINGS EM JAVASCRIPT
 * 
 * Este código demonstra os principais métodos para trabalhar com strings,
 * incluindo busca, substituição, extração e transformação de texto.
 */

//               012345678
let umaString = 'Meu valor';

// 1. Métodos de acesso a caracteres
console.log(umaString.charAt(-1));     // Retorna o caractere na posição especificada
console.log(umaString.charCodeAt(4));  // Retorna o código ASCII do caractere

// 2. Concatenação
console.log(umaString.concat(' ', 'ei', ' ', 'sister')); // Concatena strings (pouco usado)

// 3. Métodos de busca
console.log(umaString.indexOf('e', 0));    // Encontra primeira ocorrência
console.log(umaString.lastIndexOf('e'));   // Encontra última ocorrência
console.log(umaString.search(/[a-z]+/g));  // Busca com regex

// 4. Métodos com expressões regulares
console.log(umaString.match(/[A-Za-z]+/g));    // Encontra padrões (retorna array)
console.log(umaString.replace(/e/g, '3'));     // Substitui ocorrências

// 5. Métodos de extração
console.log(umaString.slice(2, 7));        // Extrai parte da string
console.log(umaString.slice(-3, -1));      // Extrai usando índices negativos
console.log(umaString.split(' ', 2));      // Divide a string em array

// 6. Métodos de transformação
console.log(umaString.toUpperCase());      // Converte para maiúsculas
console.log(umaString.toLowerCase());      // Converte para minúsculas

/*
 * NOTAS IMPORTANTES:
 * - Strings são imutáveis em JavaScript
 * - Índices negativos contam do final da string
 * - Métodos com regex são poderosos para manipulações complexas
 * - Sempre verifique o valor retornado pelos métodos
 */