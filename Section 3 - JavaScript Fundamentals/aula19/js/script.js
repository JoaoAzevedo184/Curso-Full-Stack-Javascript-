function meuEscopo () {
  // Seleção de elementos DOM
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  // Array para armazenar dados
  const pessoas = [];

  // Função que manipula o evento de submit
  function recebeEventoForm (evento) {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    // Captura os campos do formulário
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    // Adiciona os dados ao array
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    // Exibe no console
    console.log(pessoas);

    // Atualiza o HTML com os dados
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  // Adiciona o event listener
  form.addEventListener('submit', recebeEventoForm);
}

// Executa a função principal
meuEscopo();
