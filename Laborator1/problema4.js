function generareSiruri(n) {
  let cuvinte = [];

  for (let ctA = 0; ctA <= n; ctA++) {
    for (let ctB = 0; ctB <= n; ctB++) {
      let cuvant = "a".repeat(ctA) + "b".repeat(ctB);
      cuvinte.push(cuvant);
    }
  }

  return cuvinte;
}

console.log(generareSiruri(4));
