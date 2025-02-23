function generarePalindrom(n, alfabet) {
  let palindromi = [];

  function ePalindrom(s) {
    return s === s.split("").reverse().join("");
  }

  function generate(current) {
    if (current.length === n) {
      if (ePalindrom(current)) {
        palindromi.push(current);
      }
      return;
    }

    for (let char of alfabet) {
      generate(current + char);
    }
  }

  generate("");
  return palindromi;
}

const alfabet = ["0", "1", "2"];

for (let length = 1; length <= 5; length += 2) {
  console.log(`lungime ${length}:`, generarePalindrom(length, alfabet));
}
