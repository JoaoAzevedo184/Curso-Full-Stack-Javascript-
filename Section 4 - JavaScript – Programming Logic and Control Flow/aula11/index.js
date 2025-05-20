const verdadeira = true;

/*
Escopos em JavaScript:
1. let - escopo de bloco
2. var - escopo de função
3. const - escopo de bloco (não pode ser redeclarada ou reatribuída)
*/

// 1. Demonstração de escopo com let
let nome = 'João';  // Escopo global

{
    let nome = 'Pedro';  // Escopo de bloco
    console.log('Dentro do bloco:', nome);  // Pedro
}

console.log('Fora do bloco:', nome);  // João

// 2. Demonstração de escopo com var
var idade = 20;  // Escopo global

function exemploVar() {
    var idade = 30;  // Escopo de função
    console.log('Dentro da função:', idade);  // 30
    
    if (true) {
        var idade = 40;  // Mesmo escopo da função
        console.log('Dentro do if:', idade);  // 40
    }
    
    console.log('Depois do if:', idade);  // 40
}

exemploVar();
console.log('Global:', idade);  // 20

// 3. Demonstração de const
const PI = 3.14;
const usuario = {
    nome: 'João',
    idade: 25
};

// Permitido: modificar propriedades do objeto
usuario.idade = 26;

// Não permitido: reatribuir a constante
// usuario = {}; // Erro!

// 4. Exemplo prático de escopo em loops
for (let i = 0; i < 3; i++) {
    console.log('let no loop:', i);
}
// console.log(i); // Erro: i não está definido

for (var j = 0; j < 3; j++) {
    console.log('var no loop:', j);
}
console.log('j após loop:', j); // j está disponível

/*
DICAS IMPORTANTES:
1. Sempre prefira let e const sobre var
2. Use const para valores que não serão reatribuídos
3. let permite reatribuição, mas respeita escopo de bloco
4. var pode causar problemas por não respeitar escopo de bloco
5. Cuidado com o hoisting de var
*/

// Exemplo de hoisting
console.log(varHoisting); // undefined
var varHoisting = 'teste';

// console.log(letHoisting); // Erro!
let letHoisting = 'teste';
