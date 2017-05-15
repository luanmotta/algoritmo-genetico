const Cromossomo = require('./Cromossomo.js');

exports.gerarPopulacao = function(quantidadeCromossomos, quantidadeGenes) {
  const populacao = [];
  for (let i = 0; i < quantidadeCromossomos; i++) {
    populacao.push(new Cromossomo(quantidadeGenes));
  }
  return populacao;
}