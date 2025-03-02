const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const regexPatterns = {
  clientInfo: /^client: ([A-Za-z ]+), CUI: (RO[0-9]+)$/,
  product: /^produs: ([A-Za-z0-9 ]+), cantitate: ([0-9]+), pret: ([0-9]+\.[0-9]{2}), TVA: ([0-9]+)%$/,
  total: /^total: ([0-9]+\.[0-9]{2})$/,
};

rl.question("Introduceti calea catre fisier:  ", (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Eroare la citire:", err.message);
      rl.close();
      return;
    }

    const lines = data.split("\n");
    let errors = [];
    let hasClientInfo = false;
    let hasTotal = false;

    lines.forEach((line, index) => {
      if (regexPatterns.clientInfo.test(line)) {
        hasClientInfo = true;
      } else if (regexPatterns.product.test(line)) {
      } else if (regexPatterns.total.test(line)) {
        hasTotal = true;
      } else {
        errors.push(`Linia ${index + 1} nu respecta formatul: ${line}`);
      }
    });

    if (!hasClientInfo) {
      errors.push("Lipsesc informatii despre client.");
    }
    if (!hasTotal) {
      errors.push("Lipsesc informatii despre total.");
    }

    if (errors.length > 0) {
      console.log("Erori:");
      errors.forEach((error) => console.log(error));
    } else {
      console.log("Fisierul respecta formatul.");
    }
    rl.close();
  });
});
