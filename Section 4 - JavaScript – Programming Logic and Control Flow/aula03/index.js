/*
Short-circuit (Avaliação de Curto-Circuito)
É um comportamento onde os operadores lógicos (&&, ||) param de avaliar assim que encontram
um resultado definitivo, independente das expressões restantes.
*/

// Valores considerados falsy em JavaScript
console.log('\n=== Valores Falsy ===');
console.log('false:', false);
console.log('0:', 0);
console.log('"":', '');
console.log('null:', null);
console.log('undefined:', undefined);
console.log('NaN:', NaN);

// Short-circuit com &&
console.log('\n=== Short-circuit com && ===');
// Retorna o primeiro valor falsy ou o último valor se todos forem truthy
console.log('true && true && "Último":', true && true && "Último");  // Último
console.log('true && false && "Nunca exibido":', true && false && "Nunca exibido");  // false

// Short-circuit com ||
console.log('\n=== Short-circuit com || ===');
// Retorna o primeiro valor truthy ou o último valor se todos forem falsy
console.log('false || 0 || "Primeiro truthy":', false || 0 || "Primeiro truthy");  // Primeiro truthy
console.log('false || 0 || "":', false || 0 || "");  // ""

// Exemplos práticos

// 1. Definindo valores padrão
const nome = null;
const nomeCompleto = nome || 'Usuário não identificado';
console.log('\nNome:', nomeCompleto);  // Usuário não identificado

// 2. Executando funções condicionalmente
function mostrarMensagem() {
    return 'Mensagem exibida!';
}

const isAutenticado = true;
console.log('\nMensagem:', isAutenticado && mostrarMensagem());  // Mensagem exibida!

// 3. Validação de objetos
const usuario = {
    nome: 'João',
    idade: 25
};

console.log('\nIdade do usuário:', usuario && usuario.idade);  // 25

// 4. Encadeamento de condições
const config = {
    debug: true,
    logLevel: 'info'
};

const debugMode = config && config.debug && config.logLevel === 'info';
console.log('\nDebug mode:', debugMode);  // true

/*
DICAS IMPORTANTES:
1. && retorna o primeiro valor falsy ou o último valor
2. || retorna o primeiro valor truthy ou o último valor
3. Útil para:
   - Definir valores padrão
   - Executar funções condicionalmente
   - Validar existência de objetos e propriedades
   - Simplificar condicionais
4. Cuidado com efeitos colaterais em funções
5. Use com moderação para manter o código legível
*/

// Exemplos do que evitar
// Código muito complexo com short-circuit
const resultado = a && b || c && d || e && f;  // Difícil de entender

// Melhor usar if para clareza
if (a && b) {
    return resultado1;
} else if (c && d) {
    return resultado2;
} else if (e && f) {
    return resultado3;
}