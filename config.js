const valores = [100, 150, 150, -50];

exports.solucaoIdeal = 0;

exports.testeDeAptidao = (melhorSolucao, ciclos) => melhorSolucao != 0 || ciclos == 1000;

exports.definirAptidao = function(populacao) {
  
  const resultado = populacao.map((cromossomo) => {
    cromossomo.aptidao = cromossomo.genes.reduce((total, gene, index) => {
      total += valores[index] * -(gene);
    });
  });
  
};
