/*
 * PROMPT, ALERT E CONFIRM EM JAVASCRIPT
 * 
 * prompt(): Exibe uma caixa de diálogo que solicita entrada do usuário
 * alert(): Exibe uma mensagem em uma caixa de diálogo
 * confirm(): Exibe uma caixa de diálogo com botões OK e Cancelar
 */

// 1. Exemplo básico de prompt
// O prompt retorna uma string com o valor digitado pelo usuário
let nome = prompt('Qual é o seu nome?');
console.log('Nome digitado:', nome);

// 2. Prompt com valor padrão (segundo parâmetro)
// O valor '18' aparecerá pré-preenchido na caixa de diálogo
let idade = prompt('Digite sua idade:', '18');
console.log('Idade:', idade);

// 3. Convertendo entrada para número
// Como prompt sempre retorna string, precisamos converter para número
let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número');

// Conversão explícita de string para número usando Number()
num1 = Number(num1);
num2 = Number(num2);

// 4. Validação básica
// Verifica se o usuário clicou em "Cancelar" (retorna null)
if (num1 === null || num2 === null) {
    alert('Operação cancelada!');
} else {
    // 5. Usando os valores convertidos em uma operação matemática
    const soma = num1 + num2;
    alert(`O resultado da sua conta foi: ${soma}`);
}

// 6. Exemplo com tratamento completo usando função recursiva
function pedirNumero(mensagem) {
    let valor = prompt(mensagem);
    
    // Verifica se o usuário cancelou a operação
    if (valor === null) return null;
    
    // Tenta converter o valor para número
    valor = Number(valor);
    
    // Verifica se é um número válido
    // isNaN retorna true se o valor não for um número
    if (isNaN(valor)) {
        alert('Por favor, digite um número válido!');
        // Chama a função novamente se o valor for inválido (recursão)
        return pedirNumero(mensagem);
    }
    
    return valor;
}

// Usando a função com tratamento de erros
const numero1 = pedirNumero('Digite o primeiro número:');
const numero2 = pedirNumero('Digite o segundo número:');

// Verifica se ambos os números foram fornecidos corretamente
if (numero1 !== null && numero2 !== null) {
    alert(`A soma é: ${numero1 + numero2}`);
} else {
    alert('Operação cancelada pelo usuário.');
}
