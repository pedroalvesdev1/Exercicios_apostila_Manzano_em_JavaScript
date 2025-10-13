let contador = 0
let soma = 0
let media = 0
let numero = 0

do {
    numero = parseFloat(prompt("Digite um valor:"))

    if (numero >= 0) {
        soma += numero
        contador++
    }
} while (numero >= 0)

media = soma / (contador)

let resultado = `A média dos números fornrcidos é: ${media}`

document.getElementById("exibicao").innerHTML = resultado