console.log("Hello World!");

// isso e um comentario

// variaveis 

// let e o modo moderno de declarar variaveis, block scoped
let olaMundo = "Ola Mundo!";
console.log(olaMundo);

// var e o modo antigo de declarar variaveis, function scoped
var olaMundo2 = "Ola Mundo 2!";

// const e o modo moderno de declarar variaveis, block scoped, mas imutavel
const olaMundo3 = "Ola Mundo 3!";
// console.log(olaMundo3);

// operadores

let a = 10;
let b = 5;

console.log(a == b); // igualdade - sem checagem de tipo
console.log(a === b); // igualdade - com checagem de tipo
console.log(a != b); // desigualdade - sem checagem de tipo
console.log(a !== b); // desigualdade - com checagem de tipo

console.log(a > b); // maior que
console.log(a < b); // menor que
console.log(a >= b); // maior ou igual a
console.log(a <= b); // menor ou igual a

console.log(a + b); // soma
console.log(a - b); // subtracao
console.log(a * b); // multiplicacao
console.log(a / b); // divisao
console.log(a % b); // resto da divisao
console.log(a ** b); // potencia

// condicionais
let cor = "verde";

if (cor == "verde") {
    console.log("siga");
} else if (cor == "amarelo") {
    console.log("atencao");
} else {
    console.log("pare");
}
// switch
switch (cor) {
    case "verde":
        console.log("siga");
        break;
    case "amarelo":
        console.log("atencao");
        break;
    default:
        console.log("pare");
}
// laços de repeticao

// for
let n = 5;

for (let i = 0; i < 10; i++) {
    console.log(`${i} X ${n} = ${i * n}`);
}

// enquanto condicao == true
while (n > 0) {
    console.log(n);
    n--;
}

