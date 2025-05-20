/*
Formatação de Data em JavaScript
- Manipulação de objetos Date
- Formatação personalizada
- Funções auxiliares
- Diferentes formatos de data
*/

// Função para adicionar zero à esquerda
function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

// Função principal de formatação
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// Funções adicionais úteis
function formataSomenteData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function formataSomenteHora(data) {
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  return `${hora}:${min}`;
}

function getNomeMes(data) {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return meses[data.getMonth()];
}

function getDiaSemana(data) {
  const diasSemana = [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
  ];
  return diasSemana[data.getDay()];
}

// Exemplos de uso
const data = new Date();
console.log('Data e hora completa:', formataData(data));
console.log('Apenas data:', formataSomenteData(data));
console.log('Apenas hora:', formataSomenteHora(data));
console.log('Nome do mês:', getNomeMes(data));
console.log('Dia da semana:', getDiaSemana(data));

// Exemplo de manipulação de datas
function adicionaDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() + dias);
  return novaData;
}

// Teste de manipulação
const dataFutura = adicionaDias(data, 7);
console.log('\nData atual:', formataData(data));
console.log('Data + 7 dias:', formataData(dataFutura));

/*
DICAS IMPORTANTES:
1. Sempre use zeroAEsquerda para valores menores que 10
2. Lembre-se que getMonth() retorna 0-11 (por isso +1)
3. getDay() retorna 0-6 (domingo-sábado)
4. Data pode ser criada de várias formas:
   - new Date()
   - new Date(ano, mes, dia)
   - new Date(ano, mes, dia, hora, minuto, segundo)
   - new Date('2023-12-31')
*/