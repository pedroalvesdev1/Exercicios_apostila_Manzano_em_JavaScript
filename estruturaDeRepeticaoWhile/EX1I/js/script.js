let soma = 0
let numero = 0
let contador = 1

while(contador < 11){
    numero = parseInt(prompt("Digite o valor da " + contador + "° nota:"))
    soma = soma +numero
    contador++
}

let media = soma / 10

document.getElementById("soma").innerHTML = "O resultado da soma dos valores é: " + soma
document.getElementById("media").innerHTML = "O resultado da média dos valores é: " + media.toFixed(2)