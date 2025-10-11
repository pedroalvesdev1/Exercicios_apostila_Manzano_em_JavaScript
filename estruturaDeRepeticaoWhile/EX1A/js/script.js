// Tabuada de qualquer número
let contador = 1
let multiplicao

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (numero) => {
    while(contador < 11){
        multiplicao = numero * contador
        console.log(numero + " X " + contador + " = " + multiplicao)
        contador++
    }
    rl.close();
});