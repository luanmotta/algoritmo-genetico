/*
O número de cromossomos precisa ser um log²
A quantidade de genes precisa ser divisível por 2
A quantidade de valores precisa ser igual ao número de genes
*/

const solucaoIdeal = 0;
const limiteDeCiclos = 1000;

exports.configuracao = {
  solucaoIdeal,
  cromossomos: 4,
  genes: 4,
  valores: [10, 20, 40, 80],
}

exports.testeDeAptidao = (melhorSolucao, ciclos) => melhorSolucao != solucaoIdeal || ciclos == limiteDeCiclos;

exports.definirAptidao = (populacao, valores) => {

  populacao.map((cromossomo) => {
    cromossomo.aptidao = 0;
    cromossomo.genes.forEach((gene, index) => {
      let coeficiente = gene ? 1 : -1;
      cromossomo.aptidao += valores[index] * coeficiente;
    });
  });
  
};

exports.isMelhorSolucao = (solucaoAtual, melhorSolucao) => {

  if (Math.abs(melhorSolucao - solucaoAtual) < Math.abs(melhorSolucao)) {
    return true
  }

  return false;
}