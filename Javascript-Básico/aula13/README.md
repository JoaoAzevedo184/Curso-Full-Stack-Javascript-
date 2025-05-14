# Aula 13 - Métodos de Diálogo em JavaScript

Esta aula demonstra o uso dos métodos de diálogo em JavaScript (`prompt()`, `alert()` e `confirm()`) para interação com o usuário.

## Conteúdo

- **index.html**: Arquivo HTML básico que carrega o script JavaScript
- **js/script.js**: Código JavaScript com exemplos de uso dos métodos de diálogo

## Métodos Abordados

### 1. prompt()
- Solicita entrada do usuário
- Retorna uma string ou null
- Pode ter um valor padrão como segundo parâmetro
- Exemplo: `prompt("Digite seu nome:", "João")`

### 2. alert()
- Exibe uma mensagem para o usuário
- Possui apenas um botão "OK"
- Não retorna valor
- Exemplo: `alert("Mensagem de aviso")`

### 3. confirm()
- Solicita confirmação do usuário
- Possui botões "OK" e "Cancelar"
- Retorna boolean (true/false)
- Exemplo: `confirm("Deseja continuar?")`

## Conceitos Abordados

1. Uso básico dos métodos de diálogo
2. Prompt com valor padrão
3. Conversão de tipos (string para número)
4. Validação de entrada do usuário
5. Tratamento de cancelamento
6. Função auxiliar para entrada de números
7. Recursão em validações

## Como Executar

1. Abra o arquivo `index.html` em um navegador
2. Interaja com os diálogos que aparecem na tela
3. Observe os resultados no console do navegador

## Funcionalidades Demonstradas

- Captura de entrada do usuário
- Exibição de mensagens de alerta
- Solicitação de confirmação
- Conversão de tipos de dados
- Validação de entrada
- Tratamento de erros
- Recursão em função de validação

## Observações Importantes

- O `prompt()` sempre retorna uma string
- Quando cancelado, `prompt()` retorna `null`
- `confirm()` retorna `true` para OK e `false` para Cancelar
- `alert()` é útil para mensagens informativas
- É necessário converter strings para números em cálculos
- Todos os métodos são bloqueantes (param a execução do código)

## Boas Práticas

1. Sempre valide entradas do usuário
2. Trate casos de cancelamento
3. Forneça mensagens claras e objetivas
4. Use conversão explícita de tipos
5. Implemente tratamento de erros adequado