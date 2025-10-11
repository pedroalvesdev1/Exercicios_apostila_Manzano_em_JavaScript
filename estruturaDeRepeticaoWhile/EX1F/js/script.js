let contador = 1
let base = parseInt(prompt("Digite o valor da base:"))
let expoente = parseInt(prompt("Digite o valor do expoente:"))
let potencia = 1

while(contador <= expoente){
    potencia = potencia * base 
    contador++
}

document.getElementById("potencia").innerHTML = "O resultado da potência é: " + potencia