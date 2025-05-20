/*
Operadores de comparação em JavaScript
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
== igualdade (valor, não verifica tipo) - Não recomendado
!= diferença (valor, não verifica tipo) - Não recomendado
*/

// Exemplos práticos
const num1 = 10; // number
const num2 = '10'; // string
const num3 = 15; // number

// Comparações estritas (recomendadas)
console.log('=== Comparações estritas ===');
console.log(`${num1} === ${num2}: ${num1 === num2}`); // false - tipos diferentes
console.log(`${num1} !== ${num2}: ${num1 !== num2}`); // true - tipos diferentes

// Comparações numéricas
console.log('\n=== Comparações numéricas ===');
console.log(`${num1} > ${num3}: ${num1 > num3}`);   // false
console.log(`${num1} >= ${num1}: ${num1 >= num1}`); // true
console.log(`${num1} < ${num3}: ${num1 < num3}`);   // true
console.log(`${num1} <= ${num3}: ${num1 <= num3}`); // true

// Comparações não estritas (não recomendadas)
console.log('\n=== Comparações não estritas ===');
console.log(`${num1} == ${num2}: ${num1 == num2}`);  // true - converte tipos
console.log(`${num1} != ${num2}: ${num1 != num2}`);  // false - converte tipos

// Casos especiais
console.log('\n=== Casos especiais ===');
console.log(`null == undefined: ${null == undefined}`);  // true
console.log(`null === undefined: ${null === undefined}`); // false
console.log(`NaN === NaN: ${NaN === NaN}`); // false - NaN não é igual a nada

/*
DICAS IMPORTANTES:
1. Sempre use === e !== para comparações (comparação estrita)
2. Evite == e != pois podem causar bugs difíceis de encontrar
3. Comparações retornam sempre um valor booleano (true/false)
4. NaN não é igual a nada, nem a ele mesmo
5. null e undefined são iguais em comparação não estrita (==)
*/
