/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Pelo menos uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO -> Inverte o valor booleano
*/

// Exemplos com AND (&&)
console.log('\n=== Exemplos com AND (&&) ===');
const idade = 25;
const temCarteira = true;
const podeDirigir = idade >= 18 && temCarteira;
console.log(`Pode dirigir? ${podeDirigir}`); // true

// Exemplos com OR (||)
console.log('\n=== Exemplos com OR (||) ===');
const temDinheiro = false;
const temCartaoCredito = true;
const podeComprar = temDinheiro || temCartaoCredito;
console.log(`Pode comprar? ${podeComprar}`); // true

// Exemplos com NOT (!)
console.log('\n=== Exemplos com NOT (!) ===');
const estaLogado = true;
const naoEstaLogado = !estaLogado;
console.log(`Não está logado? ${naoEstaLogado}`); // false

// Exemplo prático - Sistema de login
console.log('\n=== Sistema de Login ===');
const usuario = 'admin';
const senha = '123456';
const adminCorreto = usuario === 'admin';
const senhaCorreta = senha === '123456';
const loginValido = adminCorreto && senhaCorreta;
console.log(`Login válido? ${loginValido}`);

// Avaliação de curto-circuito
console.log('\n=== Avaliação de Curto-Circuito ===');
console.log('true && "Texto":', true && 'Texto'); // retorna 'Texto'
console.log('false && "Texto":', false && 'Texto'); // retorna false
console.log('true || "Texto":', true || 'Texto'); // retorna true
console.log('false || "Texto":', false || 'Texto'); // retorna 'Texto'

/*
DICAS IMPORTANTES:
1. && (AND) - Retorna o primeiro valor falso encontrado ou o último valor se todos forem verdadeiros
2. || (OR) - Retorna o primeiro valor verdadeiro encontrado ou o último valor se todos forem falsos
3. ! (NOT) - Pode ser usado duas vezes (!!) para converter um valor para booleano
4. Valores considerados falsy: false, 0, '', "", ``, null, undefined, NaN
5. Valores considerados truthy: todos os outros
*/

// Exemplos de valores falsy
console.log('\n=== Valores Falsy ===');
console.log('Boolean(false):', Boolean(false));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log('Boolean(null):', Boolean(null));
console.log('Boolean(undefined):', Boolean(undefined));
console.log('Boolean(NaN):', Boolean(NaN));

// Exemplos de valores truthy
console.log('\n=== Valores Truthy ===');
console.log('Boolean(1):', Boolean(1));
console.log('Boolean(" "):', Boolean(" "));
console.log('Boolean([]):', Boolean([]));
console.log('Boolean({}):', Boolean({}));
console.log('Boolean(function(){}):', Boolean(function(){}));