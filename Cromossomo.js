class Cromossomo {

  constructor(quantidadeGenes) {
    this.genes = this.geraGenes(quantidadeGenes);
  }

  geraGenes(quantidadeGenes) {
    const genes = [];
    for (let i = 0; i < quantidadeGenes; i++) {
      genes.push(Math.random() > 0.5 ? 1 : 0);
    }
    return genes;
  }
}

module.exports = Cromossomo;
