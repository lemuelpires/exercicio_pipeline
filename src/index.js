// index.js
function multiplicacao(a, b) {
  // Verificar se ambos os campos foram preenchidos
  if (a === '' || b === '') {
    alert('Por favor, insira ambos os números.');
    return;
  }

  // Calcular a multiplicação
  var resultado = parseInt(a) * parseInt(b);

  // Exibir o resultado
  document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
  return resultado;
}
