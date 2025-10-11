//programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70
let contador = 50
let soma = 0
let divisor = 0

while (contador < 71) {
    if (contador % 2 == 0) {
        soma = soma + contador
        divisor++
    }
    contador++
}
let media = soma / divisor

console.log("A soma dos valores pares situados entre 50 à 70: " + soma)
console.log("A média dos valores pares situados entre 50 à 70: " + media)