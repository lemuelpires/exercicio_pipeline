/*function multiplicacao(a, b) {
  return a * b;
}

module.exports = multiplicacao;*/
function multiplicar() {
  // Obter os valores dos números de entrada
  var a = document.getElementById('a').value;
  var a = document.getElementById('a').value;

  // Verificar se ambos os campos foram preenchidos
  if (a === '' || b === '') {
      alert('Por favor, insira ambos os números.');
      return;
  }

  // Calcular a multiplicação
  var resultado = parseInt(a) * parseInt(b);

  // Exibir o resultado
  document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}