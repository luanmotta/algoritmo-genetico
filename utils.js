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
    populacao.push(null);
  }

  const retornaIndexAleatorio = tam => Math.floor(Math.random() * (tam));
  let index;
  while (pais.length < populacao.length / 2) {

    do {
      index = retornaIndexAleatorio(populacao.length);
    } while (populacao[index] === null);

    pais.push(populacao[index]);
    populacao[index] = null;
  }
  return pais;
}

exports.cruzarPopulacao = function(pais) {

  const novaPopulacao = [];
  const ultimoGeneDaPrimeiraDivisao = pais[0].genes.length / 2;
  const ultimoGeneDaSegundaDivisao = (pais[0].genes.length);

  for (let i = 0; i < pais.length; i++) {
    genesDoPai1 = pais.slice(0, pais[0].genes.length / 2);
    genesDoPai2 = pais.slice((pais[0].genes.length / 2) + 1, pais[0].genes.length);
  }

  return novaPopulacao;
}