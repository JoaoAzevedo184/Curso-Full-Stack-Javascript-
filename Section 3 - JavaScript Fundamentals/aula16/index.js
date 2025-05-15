/*
 * FUNÇÕES EM JAVASCRIPT
 * Um guia completo sobre declaração e uso de funções
 */

// 1. Declaração básica de função
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

// 2. Function Expression
const soma = function(x, y) {
    return x + y;
};

// 3. Arrow Function
const multiplicar = (x, y) => x * y;

// 4. Função com Parâmetros Padrão
function configuraUsuario(nome = 'Usuário', idade = 0) {
    return { nome, idade };
}

// 5. Rest Parameters
function somarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

// 6. Funções de Callback
const processarArray = [1, 2, 3].map(numero => numero * 2);

// 7. Funções Construtoras
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    
    this.apresentar = function() {
        return `Olá, sou ${this.nome}`;
    };
}

// 8. Closures
function criarContador() {
    let contador = 0;
    return function() {
        return ++contador;
    };
}

/*
 * PONTOS IMPORTANTES:
 * 
 * 1. Escopo:
 *    - Variáveis dentro da função só são acessíveis dentro dela
 *    - Funções têm acesso a variáveis externas
 * 
 * 2. Hoisting:
 *    - Declarações de função são elevadas
 *    - Function expressions não são elevadas
 * 
 * 3. This:
 *    - Em funções regulares: depende do contexto de chamada
 *    - Em arrow functions: mantém o this do contexto de criação
 * 
 * 4. Arguments:
 *    - Objeto especial disponível em funções regulares
 *    - Não disponível em arrow functions
 * 
 * 5. Return:
 *    - Toda função retorna undefined por padrão
 *    - Return explícito encerra a execução da função
 */

// Exemplos de uso
console.log(saudacao('Maria')); // Bom dia, Maria!
console.log(soma(5, 3)); // 8
console.log(multiplicar(4, 2)); // 8
console.log(configuraUsuario('João', 25)); // { nome: 'João', idade: 25 }
console.log(somarTodos(1, 2, 3, 4)); // 10

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2

const pessoa = new Pessoa('Ana', 30);
console.log(pessoa.apresentar()); // Olá, sou Ana