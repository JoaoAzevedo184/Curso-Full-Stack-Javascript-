/*
Exercícios com Estruturas Condicionais
- Demonstração de diferentes tipos de verificações
- Exemplos práticos de uso
- Boas práticas de programação
*/

// Exemplo 1: Verificação simples
const numero = 10;

if (numero <= 10) {
    console.log('O número é menor ou igual a 10.');
}

// Exemplo 2: Verificação com múltiplas condições
if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

// Exemplo 3: Verificação de números
const numeroTeste = 15;

if (numeroTeste % 2 === 0) {
    console.log('Número par');
} else {
    console.log('Número ímpar');
}

// Exemplo 4: Sistema de classificação
const pontuacao = 75;

if (pontuacao >= 90) {
    console.log('Excelente');
} else if (pontuacao >= 70) {
    console.log('Bom');
} else if (pontuacao >= 50) {
    console.log('Regular');
} else {
    console.log('Insuficiente');
}

// Exemplo 5: Verificação com múltiplas variáveis
const idade = 18;
const temCarteira = true;
const temCarro = false;

if (idade >= 18 && temCarteira) {
    if (temCarro) {
        console.log('Pode dirigir seu próprio carro');
    } else {
        console.log('Pode dirigir, mas não tem carro');
    }
} else {
    console.log('Não pode dirigir');
}

/*
DICAS IMPORTANTES:
1. Sempre use chaves {} para blocos de código
2. Mantenha suas condições simples e legíveis
3. Evite condições aninhadas demais
4. Use operadores lógicos (&&, ||) para combinar condições
5. Considere usar switch case para muitas condições iguais
*/

// Exemplo 6: Validações mais complexas
const usuario = {
    nome: 'João',
    idade: 25,
    premium: true,
    pontos: 100
};

// Verificação de objeto com múltiplas propriedades
if (usuario.idade >= 18 && usuario.premium && usuario.pontos > 50) {
    console.log('Usuário VIP');
} else if (usuario.idade >= 18 && usuario.pontos > 30) {
    console.log('Usuário Regular');
} else {
    console.log('Usuário Básico');
}

console.log('...Aqui vai o resto do código.');
