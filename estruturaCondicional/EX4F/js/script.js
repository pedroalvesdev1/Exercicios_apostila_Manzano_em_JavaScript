let valorA = parseInt(prompt("Digite o 1° valor:"))
let valorB = parseInt(prompt("Digite o 2° valor:"))
let valorC = parseInt(prompt("Digite o 3° valor:"))
let inicio
let meio
let fim

if (valorA < valorB && valorB < valorC) {
    inicio = valorA
    meio = valorB
    fim = valorC
} else if (valorB < valorC && valorC < valorA) {
    inicio = valorB
    meio = valorC
    fim = valorA
} else if (valorC < valorA && valorA < valorB) {
    inicio = valorC
    meio = valorA
    fim = valorB
}
alert("Ordem crescente:" + inicio + " , " + meio + " , " + fim)