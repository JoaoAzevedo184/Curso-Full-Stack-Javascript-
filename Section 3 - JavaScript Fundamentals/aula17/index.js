/*
 * OBJETOS EM JAVASCRIPT
 * Demonstração de criação e manipulação de objetos
 */

// 1. Criação básica de objeto com propriedades e métodos
const pessoa1 = {
    // Propriedades
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    // Métodos
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    },

    // Método com retorno de dados completos
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

// 2. Factory Function (Função que cria objetos)
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        
        fala() {
            console.log(`${this.nome} tem ${this.idade} anos.`);
        }
    };
}

// 3. Manipulação dinâmica de propriedades
pessoa1.email = 'luiz@email.com'; // Adiciona nova propriedade
delete pessoa1.email; // Remove propriedade

/*
 * PONTOS IMPORTANTES SOBRE OBJETOS:
 * 
 * 1. This:
 *    - Referencia o próprio objeto
 *    - Permite acesso às propriedades internas
 * 
 * 2. Métodos:
 *    - São funções dentro do objeto
 *    - Podem manipular dados do objeto
 * 
 * 3. Propriedades:
 *    - Armazenam dados do objeto
 *    - Podem ser modificadas dinamicamente
 * 
 * 4. Sintaxe moderna:
 *    - Shorthand para propriedades
 *    - Métodos podem ser declarados diretamente
 */

// Exemplos de uso
console.log(pessoa1.getNomeCompleto()); // Luiz Miranda
pessoa1.fala(); // A minha idade atual é 25.
pessoa1.incrementaIdade();
pessoa1.fala(); // A minha idade atual é 26.

// Criando nova pessoa com factory
const pessoa2 = criarPessoa('Maria', 'Silva', 30);
pessoa2.fala(); // Maria tem 30 anos.