/*function multiplicacao(a, b) {
  return a * b;
}
module.exports = multiplicacao;*/
function multiplicacao(a, b) {
  return a * b;
}

// Verifica se está no ambiente de teste (Node.js com Jest)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = multiplicacao;
}
