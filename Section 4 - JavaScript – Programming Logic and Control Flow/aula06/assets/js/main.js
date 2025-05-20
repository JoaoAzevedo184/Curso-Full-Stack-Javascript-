/*
Calculadora de IMC
- Captura dados do formulário HTML
- Calcula o IMC
- Mostra o resultado com classificação
- Validação de dados
- Tratamento de erros
*/

// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o comportamento padrão do formulário
  
  // Captura os inputs do formulário
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  // Converte os valores para número
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Validação dos dados
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  // Calcula o IMC e obtém a classificação
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  // Monta a mensagem de resultado
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

// Função que retorna a classificação do IMC
function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  // Retorna a classificação baseada no IMC
  if (imc >= 39.9) return nivel[5];    // Obesidade grau 3
  if (imc >= 34.9) return nivel[4];    // Obesidade grau 2
  if (imc >= 29.9) return nivel[3];    // Obesidade grau 1
  if (imc >= 24.9) return nivel[2];    // Sobrepeso
  if (imc >= 18.5) return nivel[1];    // Peso normal
  if (imc < 18.5) return nivel[0];     // Abaixo do peso
}

// Função que calcula o IMC
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);  // Retorna com 2 casas decimais
}

// Função que cria um elemento parágrafo
function criaP () {
  const p = document.createElement('p');
  return p;
}

// Função que mostra o resultado na tela
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';  // Limpa o resultado anterior

  const p = criaP();

  // Adiciona classe CSS baseada na validação
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
