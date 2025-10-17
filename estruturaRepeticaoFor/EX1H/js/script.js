/*vum programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer */


let base = parseInt(prompt("Digite o número da base: "))
let expoente = parseInt(prompt("Digite o número do expoente: "))
let resultado = 1

for (let contador = 1; contador <= expoente; contador++) {
    resultado = resultado * base
}

document.getElementById('result').innerHTML = `${base}^${expoente} = ${resultado}`