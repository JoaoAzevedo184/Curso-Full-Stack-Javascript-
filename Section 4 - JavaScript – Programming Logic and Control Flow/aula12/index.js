// Operadores Rest (...) e Spread (...) e Desestruturação
// Rest: combina elementos em um array
// Spread: espalha elementos de um array

// 1. Exemplo com arrays multidimensionais
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros; // Desestruturação
console.log(lista3[2]); // 9

// 2. Operador Rest com arrays
const [primeiro, ...resto] = [1, 2, 3, 4, 5];
console.log(primeiro); // 1
console.log(resto);    // [2, 3, 4, 5]

// 3. Operador Spread com arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]

// 4. Desestruturação com objetos
const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        rua: 'Av Principal',
        numero: 123
    }
};

// Desestruturação simples
const { nome, idade } = pessoa;
console.log(nome, idade); // João 30

// Desestruturação com nested objects
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero); // Av Principal 123

// 5. Rest com objetos
const { nome: nome2, ...restoProps } = pessoa;
console.log(nome2);      // João
console.log(restoProps); // { idade: 30, endereco: { ... } }

// 6. Spread com objetos
const pessoaAtualizada = {
    ...pessoa,
    idade: 31,
    profissao: 'Desenvolvedor'
};
console.log(pessoaAtualizada);

// 7. Exemplo prático com funções
function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(soma(1, 2, 3, 4)); // 10

// 8. Combinando arrays com spread
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado); // [1, 2, 3, 4, 5, 6]

/*
DICAS IMPORTANTES:
1. Rest (...) deve ser o último parâmetro
2. Spread (...) pode ser usado em qualquer posição
3. Rest agrupa elementos em um array
4. Spread espalha elementos de um array/objeto
5. Útil para criar cópias de arrays/objetos
*/