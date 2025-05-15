const numero = Number(prompt('Digite um número:')); // Converte entrada para número
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

// Exibe o número digitado
numeroTitulo.innerHTML = numero;

// Limpa o conteúdo anterior
texto.innerHTML = '';

// Adiciona informações sobre o número
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
