function concat(s1, s2) {
  return s1.concat(s2);
}

function repeat(s, n) {
  return s.repeat(n);
}

function reverse(s) {
  return s.split("").reverse().join("");
}

function extract(s, i, j) {
  return s.substring(i, j + 1);
}

function replace(s, sub, new_sub) {
  return s.replace(sub, new_sub);
}

function operatii(cuv) {
  console.log("concatenare", concat(cuv, "manevra"));
  console.log("repetare:", repeat(cuv, 3));
  console.log("inversare:", reverse(cuv));
  console.log("extractie:", extract(cuv, 1, 4));
  console.log("inlocuire", replace(cuv, "are", "glont"));
}

operatii("ana are mere");
