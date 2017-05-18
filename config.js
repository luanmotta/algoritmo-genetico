exports.configuracao = {
  cromossomos: 4,
  genes: 4,
  valores: [10, 20, 40, 80],
  solucaoIdeal: 0,
}

exports.testeDeAptidao = (melhorSolucao, ciclos) => melhorSolucao != 0 || ciclos == 1000;

exports.definirAptidao = function(populacao, valores) {

  populacao.map((cromossomo) => {
    cromossomo.aptidao = 0;
    cromossomo.genes.forEach((gene, index) => {
      let coeficiente = gene ? 1 : -1;
      cromossomo.aptidao += valores[index] * coeficiente;
    });
  });
  
};
