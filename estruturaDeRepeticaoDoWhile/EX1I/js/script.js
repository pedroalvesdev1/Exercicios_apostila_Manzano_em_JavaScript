let numero = 0
let maior = 1
let menor = 10
do {

    numero = parseInt(prompt("Digite um número:"))

    if (numero >= 0) {

        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    }

} while (numero >= 0)

let resultado = `<hr>O maior número é: ${maior} <hr>O menor número é: ${menor}<hr>`

document.getElementById("exibir").innerHTML = resultado