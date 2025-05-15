/*
 * MANIPULAÇÃO DE ARRAYS EM JAVASCRIPT
 * 
 * Este código demonstra as principais operações com arrays,
 * incluindo criação, modificação e métodos importantes.
 */

// 1. Criação básica de array
//               0       1        2          
let alunos = ['Luiz', 'Maria', 'João'];

// 2. Métodos para adicionar elementos
// Push: Adiciona no final do array
alunos.push('Luiza');
alunos.push('Eduardo');

// Unshift: Adiciona no início do array
alunos.unshift('Fábio');

// 3. Métodos para remover elementos
// Pop: Remove do final
const ultimoAluno = alunos.pop();

// Shift: Remove do início
const primeiroAluno = alunos.shift();

// Delete: Remove deixando espaço vazio
delete alunos[1]; // Não recomendado - deixa undefined

// 4. Fatiamento de array
// Slice: Retorna uma parte do array
console.log(alunos.slice(0, -2)); // Remove os dois últimos

// 5. Verificações importantes
console.log(typeof alunos); // Retorna 'object'
console.log(alunos instanceof Array); // Verifica se é array

// 6. Formas alternativas de adicionar elementos
// Usando índice length
alunos[alunos.length] = 'Luiza';  // Adiciona no fim
alunos[alunos.length] = 'Fábio';

// 7. Modificando elementos existentes
alunos[0] = 'Eduardo'; // Altera o primeiro elemento

/*
 * DICAS IMPORTANTES:
 * - Arrays em JavaScript são zero-based (começam do índice 0)
 * - Podem conter diferentes tipos de dados
 * - São dinâmicos (podem crescer ou diminuir)
 * - Métodos como push/pop são mais eficientes que unshift/shift
 * 
 * MÉTODOS MODERNOS (ES6+):
 * - map(): para transformar elementos
 * - filter(): para filtrar elementos
 * - reduce(): para reduzir o array a um valor
 * - includes(): para verificar se elemento existe
 * - find(): para encontrar elementos
 */

// Exemplo de uso moderno
const alunosAprovados = alunos
    .filter(aluno => aluno !== undefined)
    .map(aluno => aluno.toUpperCase());

// Exibição do resultado final
console.log(alunos);

/*
 * EXEMPLOS DE MÉTODOS MODERNOS (ES6+)
 */

// 1. Map: Transformar elementos
const alunosEmMaiusculo = alunos.map(aluno => {
    return aluno ? aluno.toUpperCase() : '';
});

// 2. Filter: Filtrar elementos
const alunosValidos = alunos.filter(aluno => {
    return aluno !== undefined && aluno !== null;
});

// 3. Reduce: Reduzir array a um valor
const nomesConcantenados = alunos.reduce((acumulador, aluno) => {
    if (aluno) return acumulador + ' ' + aluno;
    return acumulador;
}, '');

// 4. Find: Encontrar primeiro elemento que satisfaz condição
const primeiroAlunoComA = alunos.find(aluno => {
    return aluno && aluno.toLowerCase().startsWith('a');
});

// 5. Some: Verifica se pelo menos um elemento satisfaz condição
const temAlunoComM = alunos.some(aluno => {
    return aluno && aluno.toLowerCase().startsWith('m');
});

// 6. Every: Verifica se todos elementos satisfazem condição
const todosTemNome = alunos.every(aluno => {
    return aluno && aluno.length > 0;
});

// 7. Includes: Verifica se elemento existe
const temMaria = alunos.includes('Maria');

// 8. ForEach: Iteração simples
console.log('Lista de Alunos:');
alunos.forEach((aluno, indice) => {
    if (aluno) console.log(`${indice + 1}. ${aluno}`);
});

// 9. Combinando métodos
const alunosProcessados = alunos
    .filter(aluno => aluno) // Remove undefined
    .map(aluno => aluno.toUpperCase()) // Converte para maiúsculo
    .sort(); // Ordena alfabeticamente

console.log('Resultado dos métodos modernos:');
console.log('Maiúsculo:', alunosEmMaiusculo);
console.log('Válidos:', alunosValidos);
console.log('Concatenados:', nomesConcantenados);
console.log('Primeiro com A:', primeiroAlunoComA);
console.log('Tem aluno com M?', temAlunoComM);
console.log('Todos têm nome?', todosTemNome);
console.log('Tem Maria?', temMaria);
console.log('Processados:', alunosProcessados);