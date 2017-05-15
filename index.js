const 
      config = require('./config.js'),
      { gerarPopulacao } = require('./utils.js');

class Main {
  constructor() {
    console.log("node started");

    const
      quantidadeCromossomos = process.argv[2],
      quantidadeGenes = process.argv[3],
      populacao = gerarPopulacao(quantidadeCromossomos, quantidadeGenes);

    console.log(populacao);

    let melhorSolucao = 0;
    let solucaoAtual = 0;
    let ciclos = 0;

    while (!config.solucao(melhorSolucao, ciclos)) {
      ciclos++;
      solucaoAtual = config.aptidao(populacao);
      if (Math.abs(melhorSolucao - solucaoAtual) < melhorSolucao) {
        melhorSolucao = solucaoAtual;
        ciclos = 0;
      }
      // TODO: seleção
      // TODO: crossover
      // TODO: mutação

    }
  }
}

new Main();