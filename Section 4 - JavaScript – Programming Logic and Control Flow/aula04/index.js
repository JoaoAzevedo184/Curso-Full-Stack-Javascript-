/*
Estruturas Condicionais em JavaScript
if - executa um bloco de código se a condição for verdadeira
else if - verifica outra condição se a anterior for falsa
else - executa quando nenhuma condição anterior for verdadeira
*/

// Exemplo 1: Verificação de horário
console.log('=== Sistema de Saudação ===');
const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Hora inválida');
}

// Exemplo 2: Verificação de idade
console.log('\n=== Sistema de Verificação de Idade ===');
const idade = 16;
const acompanhadoPais = true;

if (idade >= 18) {
    console.log('Pode entrar na festa');
} else if (idade >= 16 && acompanhadoPais) {
    console.log('Pode entrar com os pais');
} else {
    console.log('Não pode entrar');
}

// Exemplo 3: Sistema de notas
console.log('\n=== Sistema de Notas ===');
const nota = 85;

if (nota >= 90) {
    console.log('A - Excelente');
} else if (nota >= 80) {
    console.log('B - Muito bom');
} else if (nota >= 70) {
    console.log('C - Bom');
} else if (nota >= 60) {
    console.log('D - Regular');
} else {
    console.log('F - Reprovado');
}

// Exemplo 4: If sem else
const temCarteira = true;
if (temCarteira) {
    console.log('\nPode dirigir');
}

// Exemplo 5: If com uma linha (sem chaves)
if (idade >= 18) console.log('\nMaior de idade');

/*
DICAS IMPORTANTES:
1. Use === para comparações (é mais seguro que ==)
2. Organize as condições do mais específico para o mais geral
3. Evite aninhar muitos if/else (máximo 3 níveis)
4. Use chaves {} mesmo para blocos de uma linha (legibilidade)
5. Considere usar switch case para muitas condições
*/

// Exemplo 6: Condições aninhadas (evitar mais que isso)
const usuario = {
    nome: 'João',
    idade: 25,
    premium: true
};

if (usuario) {
    if (usuario.idade >= 18) {
        if (usuario.premium) {
            console.log('\nUsuário premium adulto');
        }
    }
}

// Melhor forma (mais legível)
if (usuario && usuario.idade >= 18 && usuario.premium) {
    console.log('\nUsuário premium adulto');
}