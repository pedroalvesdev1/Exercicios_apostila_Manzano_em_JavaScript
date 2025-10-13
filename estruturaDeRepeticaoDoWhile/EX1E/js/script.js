let contador = 1
let fatorial = 1
let numeroFatorial = 1
let valor
let somatoria = 0

do {
    valor = parseInt(prompt("Digite o " + contador + "° valor:"))
    do {
        fatorial *= numeroFatorial
        numeroFatorial++
    } while (numeroFatorial < valor)
    somatoria += fatorial
    contador = contador + 1
} while (contador < 16)

let resultado = `O somatorio dos fatoriais é ${somatoria}`

document.getElementById("exibicao").innerHTML = resultado