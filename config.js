const valores = [100, 150, 150, -50];

exports.solucao = (valor, ciclos) => valor != 0 || ciclos == 1000;

exports.aptidao = function(populacao) {
  
  const resultado = populacao.map((cromossomo) => {
    cromossomo.genes.reduce((total, gene, index) => {
      total + gene * valores[index];
    });
  });
  
  return diferenca(resultado);
};

function diferenca(array) {

  let menor = 0;
  let maior = 0;
  let diferenca = 0;
  for (i in array) {

    if (array[i] > maior) maior = array[i];
    if (array[i] < menor) menor = array[i];

    if (i == array.length - 1) {
      diferenca = maior - menor;
    }
  }
  return diferenca;
}
