/*
Operador Ternário
- Forma abreviada de escrever condicionais
- Sintaxe: (condição) ? valorSeVerdadeiro : valorSeFalso
- Útil para atribuições condicionais simples
*/

// Exemplo 1: Verificação de nível de usuário
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(`Nível: ${nivelUsuario}`);

// Exemplo 2: Valor padrão com OR (||)
const corUsuario = ''; // cor não definida
const corPadrao = corUsuario || 'Preta';
console.log(`Cor selecionada: ${corPadrao}`);

// Exemplo 3: Múltiplas condições
const idade = 20;
const temCarteira = true;
const podeDirigir = idade >= 18 ? (temCarteira ? 'Pode dirigir' : 'Tem idade mas não tem carteira') : 'Não pode dirigir';
console.log(`Situação: ${podeDirigir}`);

// Exemplo 4: Operador de Coalescência Nula (??)
const valor = 0; // considerar 0 como valor válido
const valorPadrao = valor ?? 'Valor não definido';
console.log(`Valor: ${valorPadrao}`);

// Exemplo 5: Comparação entre || e ??
console.log('\nComparação entre || e ??:');
console.log('0 || "valor padrão":', 0 || 'valor padrão');        // retorna "valor padrão"
console.log('0 ?? "valor padrão":', 0 ?? 'valor padrão');        // retorna 0
console.log('null || "valor padrão":', null || 'valor padrão');  // retorna "valor padrão"
console.log('null ?? "valor padrão":', null ?? 'valor padrão');  // retorna "valor padrão"

/*
DICAS IMPORTANTES:
1. Use o operador ternário apenas para condições simples
2. || considera falsy values (0, '', false, null, undefined)
3. ?? considera apenas null e undefined
4. Para condições complexas, prefira if/else
5. Evite aninhar muitos operadores ternários
*/

// Exemplo do que evitar (difícil leitura):
const complexo = idade >= 18 
    ? temCarteira 
        ? valor > 0 
            ? 'Tudo ok' 
            : 'Sem valor' 
        : 'Sem carteira' 
    : 'Menor de idade';
