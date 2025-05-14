# Aula 11 - Strings em JavaScript

## Conteúdo da Aula
Nesta aula, exploramos o trabalho com strings (textos) em JavaScript e suas principais operações.

### Tópicos Abordados

1. Criação de Strings
   - Com aspas simples: `'texto'`
   - Com aspas duplas: `"texto"`
   - Com template literals: `` `texto` ``

2. Métodos de String
   - `.length` - comprimento da string
   - `.indexOf()` - encontrar posição
   - `.lastIndexOf()` - última ocorrência
   - `.slice()` - extrair parte da string
   - `.substring()` - extrair parte da string
   - `.split()` - dividir em array
   - `.toLowerCase()` - converter para minúsculas
   - `.toUpperCase()` - converter para maiúsculas
   - `.trim()` - remover espaços extras

3. Template Literals
   - Interpolação: `` `Olá ${nome}` ``
   - Strings multilinhas
   - Expressões embutidas

## Exercícios Práticos
1. Manipulação básica de strings
2. Uso de template literals
3. Concatenação vs interpolação

## Arquivos da Aula
- `index.js` - Exemplos de manipulação de strings
- `exercicios.js` - Exercícios práticos

## Como Executar
1. Abra o terminal no VS Code
2. Execute o arquivo principal:
```bash
node index.js
```
3. Para os exercícios:
```bash
node exercicios.js
```

## Dicas Importantes
- Strings são imutáveis em JavaScript
- Use template literals para código mais limpo
- Cuidado com comparação de strings (case sensitive)
- Sempre considere encodings ao trabalhar com caracteres especiais