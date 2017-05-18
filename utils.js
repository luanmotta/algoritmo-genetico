const Cromossomo = require('./Cromossomo.js');

exports.gerarPopulacao = function(quantidadeCromossomos, quantidadeGenes) {
  const populacao = [];
  for (let i = 0; i < quantidadeCromossomos; i++) {
    populacao.push(new Cromossomo(quantidadeGenes));
  }
  return populacao;
}

exports.selecionarPopulacao = function(populacao, solucaoIdeal) {

  const pais = [];

  populacao.forEach((cromossomo) => {
    cromossomo.aptidao = Math.abs(cromossomo.aptidao);
  });

  populacao.sort((a, b) => a.aptidao - b.aptidao);

  while (pais.length < populacao.length / 4) {
    pais.push(populacao.shift());
  }

  const retornaIndexAleatorio = tam => Math.floor(Math.random() * (tam - 1)) - 1;
  let index;
  while (pais.length < populacao.length / 2) {

    do index = retornaIndexAleatorio(populacao.length);
    while (populacao[index] === null);

    pais.push(populacao[index]);
    populacao[index] = null;
  }

  return pais;
}