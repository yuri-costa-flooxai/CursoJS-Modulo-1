// Funcoes

let x = 1
let y = 2

function soma(a, b, operator) {
    return eval(`${a} ${operator} ${b}`);
}

console.log(soma(x, y, "+"));

// funcao anonima
const soma2 = function(a, b) {
    return a + b;
}

// arrow function
const soma3 = (a, b) => {
    return a + b;
}