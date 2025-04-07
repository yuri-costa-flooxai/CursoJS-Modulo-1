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

// DOM

window.addEventListener("focus", event => {
    console.log("focus");
});

document.addEventListener("click", event => {
    console.log("click");
});

let agora = new Date();
console.log(agora.toLocaleDateString("pt-BR"));

// Arrays
let carros = ["Fusca", "Civic", "Palio"];
console.log(carros[0].toUpperCase());

carros.forEach((carro, index) => {
    console.log(`${index} - ${carro}`);
});

// OOP
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar() {
        console.log("Carro ligado");
    }
}

let carro1 = new Carro("Fusca", "Fusca", 1975);
console.log(carro1);