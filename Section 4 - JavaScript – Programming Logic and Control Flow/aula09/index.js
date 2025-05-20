/*
Switch Case em JavaScript
- Alternativa ao if/else para múltiplas condições
- Compara valor com casos específicos
- Executa código baseado no caso correspondente
- Usa break para parar execução
- Possui caso default para valores não correspondentes
*/

// Versão melhorada da função com Switch Case
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      break;
    case 1:
      diaSemanaTexto = 'Segunda-feira';
      break;
    case 2:
      diaSemanaTexto = 'Terça-feira';
      break;
    case 3:
      diaSemanaTexto = 'Quarta-feira';
      break;
    case 4:
      diaSemanaTexto = 'Quinta-feira';
      break;
    case 5:
      diaSemanaTexto = 'Sexta-feira';
      break;
    case 6:
      diaSemanaTexto = 'Sábado';
      break;
    default:
      diaSemanaTexto = 'Dia inválido';
  }

  return diaSemanaTexto;
}

// Versão alternativa usando array (mais concisa)
function getDiaSemanaTextoArray(diaSemana) {
  const diasSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ];
  
  return diasSemana[diaSemana] || 'Dia inválido';
}

// Exemplo de uso com diferentes datas
const data = new Date('1987-04-21 00:00:00');
const hoje = new Date();
const diaSemana = data.getDay();
const diaSemanaHoje = hoje.getDay();

// Testando ambas as funções
console.log('Usando Switch:', getDiaSemanaTexto(diaSemana));
console.log('Usando Array:', getDiaSemanaTextoArray(diaSemana));
console.log('Hoje (Switch):', getDiaSemanaTexto(diaSemanaHoje));
console.log('Hoje (Array):', getDiaSemanaTextoArray(diaSemanaHoje));

// Exemplo de Switch com agrupamento de casos
function getTipoDia(diaSemana) {
  let tipo;

  switch (diaSemana) {
    case 0:
      tipo = 'Final de semana';
      break;
    case 6:
      tipo = 'Final de semana';
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      tipo = 'Dia útil';
      break;
    default:
      tipo = 'Dia inválido';
  }
  return tipo;
}

console.log('Tipo do dia:', getTipoDia(diaSemana));
