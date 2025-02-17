const A = ['a', 'b', 'c'];
const B = ['x', 'y', 'z'];
const C = ['1', '2', '3'];

function concatenare(s1, s2) {
    return s1 + s2;
}

function inversare(s) {
    return s.split('').reverse().join('');
}

function substituire(s, a, b) {
    return s.split(a).join(b);
}

function lungime(s) {
    return s.length;
}

let s1 = "ana are mere";
let s2 = "ana are pere";
console.log("concatenare:", concatenare(s1, s2));

let s3 = "ana are mere";
console.log("inversare:", inversare(s3));

let s4 = "ana are mere";
console.log("substituire:", substituire(s4, 'a', 'x'));

let s5 = "ana are mere";
console.log("lungime:", lungime(s5));
