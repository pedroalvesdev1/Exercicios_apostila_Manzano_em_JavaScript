let numero = parseInt(prompt("Digite um número:"))
let maior = numero
let menor = numero

while (numero >= 0) {
    numero = parseInt(prompt("Digite um número:"))
    if (numero >= 0) {
        if (numero > maior) {
            maior = numero
        }
        if (numero < menor) {
            menor = numero
        }
    }
}
console.log(maior)
console.log(menor)