/*
 * NaN - Not a Number em JavaScript
 * 
 * NaN é um valor especial que representa um resultado não numérico
 * ou uma operação matemática inválida.
 */

// 1. Situações que geram NaN
const exemplo1 = 10 * 'olá';        // NaN - multiplicação inválida
const exemplo2 = Number('texto');    // NaN - conversão inválida
const exemplo3 = Math.sqrt(-1);      // NaN - raiz quadrada de número negativo

// 2. Conversões numéricas
const numeroValido = Number('123');      // 123 - conversão válida
const numeroInvalido = Number('abc');    // NaN - conversão inválida

// 3. Funções de parsing
const inteiro = parseInt('10.5');        // 10 - converte para inteiro
const decimal = parseFloat('10.5');      // 10.5 - mantém decimais
const invalido = parseInt('abc');        // NaN - parsing inválido

// 4. Verificando NaN
console.log('Verificações de NaN:');
console.log(isNaN(exemplo1));            // true
console.log(Number.isNaN(exemplo2));     // true - método mais moderno

// 5. Operações com NaN
const soma = NaN + 10;                   // NaN
const multiplicacao = NaN * 5;           // NaN
const divisao = 10 / 0;                  // Infinity (não é NaN)

// 6. Casos práticos
const calculo = {
    valor1: 10,
    valor2: Number('abc'),
    resultado: function() {
        return this.valor1 + this.valor2; // NaN
    }
};

// Exibindo resultados
console.log('Resultados:');
console.log('Exemplo 1:', exemplo1);
console.log('Parsing inteiro:', inteiro);
console.log('Parsing decimal:', decimal);
console.log('Cálculo com NaN:', calculo.resultado());

// 7. Como evitar NaN
function calcularSeguro(valor) {
    const numero = Number(valor);
    if (isNaN(numero)) {
        return 'Valor inválido';
    }
    return numero * 0.1; // 10% do valor
}

console.log(calcularSeguro('100'));      // 10
console.log(calcularSeguro('abc'));      // "Valor inválido"