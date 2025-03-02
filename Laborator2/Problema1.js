class ModelAutomatFinit {
  constructor() {
    this.stari = ["q0", "q1", "q2", "q3"];
    this.alfabet = ["0", "1"];
    this.stareInitiala = "q0";
    this.stariFinale = ["q3"];
    this.tranzitii = {
      q0: { 0: "q1", 1: "q2" },
      q1: { 0: "q3", 1: "q0" },
      q2: { 0: "q1", 1: "q3" },
      q3: { 0: "q3", 1: "q3" },
    };
  }

  processInput(intrare) {
    let stareCurenta = this.stareInitiala;
    for (let simbol of intrare) {
      if (!this.alfabet.includes(simbol)) {
        throw new Error(`simbol invalid: ${simbol}`);
      }
      stareCurenta = this.transitions[stareCurenta][simbol];
    }
    return this.stariFinale.includes(stareCurenta);
  }
}

const modelAutomat = new ModelAutomatFinit();
const teste = ["00", "01", "10", "11", "000", "101"];

teste.forEach((str) => {
  console.log(`Input: ${str} => acceptat: ${modelAutomat.processInput(str)}`);
});
