const 
      { configuracao, definirAptidao, testeDeAptidao, isMelhorSolucao } = require('./config.js'),
      { gerarPopulacao, selecionarPopulacao, cruzarPopulacao, mutarPopulacao } = require('./utils.js');

class Main {
  constructor() {
    console.log("node started");

    const
      quantidadeCromossomos = configuracao.cromossomos,
      quantidadeGenes = configuracao.genes,
      valoresDaSolucao = configuracao.valores,
      solucaoIdeal = configuracao.solucaoIdeal;

    let melhorSolucao = 0;
    let solucaoAtual = 0;
    let ciclos = 0;
    let populacao = gerarPopulacao(quantidadeCromossomos, quantidadeGenes);
    let pais;

    //console.log(populacao);

    //while (!testeDeAptidao(melhorSolucao, ciclos)) {
      ciclos++;
      solucaoAtual = definirAptidao(populacao, valoresDaSolucao);

      if (isMelhorSolucao(solucaoAtual, melhorSolucao)) {
        melhorSolucao = solucaoAtual;
        ciclos = 0;
      }

      console.log(populacao);

      pais = selecionarPopulacao(populacao, solucaoIdeal);


      
      // populacao = cruzarPopulacao(pais);
      // populacao = mutarPopulacao(populacao);

    //}

    console.log(pais);

  }
}

new Main();