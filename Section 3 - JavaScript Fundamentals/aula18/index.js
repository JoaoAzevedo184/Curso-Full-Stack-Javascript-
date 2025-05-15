/*
 * TIPOS DE DADOS EM JAVASCRIPT
 * Uma explicação sobre valores primitivos e referência
 */

// 1. TIPOS PRIMITIVOS (Imutáveis)
let exemplo1 = 'texto';     // String
let exemplo2 = 10;         // Number
let exemplo3 = true;       // Boolean
let exemplo4 = undefined;  // Undefined
let exemplo5 = null;       // Null
let exemplo6 = 10n;        // BigInt
let exemplo7 = Symbol();   // Symbol

// Exemplo de imutabilidade
let nome = 'João';
nome[0] = 'P';  // Não altera o valor
console.log(nome);  // Continua 'João'

// 2. TIPOS DE REFERÊNCIA (Mutáveis)
// Exemplo com objeto
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;  // b recebe a referência de a

b.nome = 'João';  // Altera tanto 'a' quanto 'b'
console.log(a);   // { nome: 'João', sobrenome: 'Otávio' }
console.log(b);   // { nome: 'João', sobrenome: 'Otávio' }

// 3. COMO COPIAR VALORES

// Para primitivos - cópia simples
let x = 10;
let y = x;  // y recebe uma cópia do valor
y = 20;     // não afeta x
console.log(x, y);  // 10, 20

// Para objetos - cópia real (spread)
const objetoOriginal = {
    a: 1,
    b: 2
};
const objetoCopiado = { ...objetoOriginal };  // Spread operator
objetoCopiado.a = 5;  // Não afeta objetoOriginal

/*
 * PONTOS IMPORTANTES:
 * 
 * 1. Primitivos:
 *    - São imutáveis
 *    - São copiados por valor
 *    - Ocupam espaço fixo na memória
 * 
 * 2. Referência:
 *    - São mutáveis
 *    - São copiados por referência
 *    - Podem ter tamanho dinâmico
 * 
 * 3. Comparações:
 *    - Primitivos: comparação de valor
 *    - Referência: comparação de referência na memória
 */

// Exemplo de comparação
console.log('abc' === 'abc');     // true (primitivo)
console.log({} === {});           // false (referência)