let numero = parseInt(prompt("Digite um número:"))
let multiplicacao = 0
let resultado = ""
for(let contador = 1;contador < 11;contador++){
    multiplicacao = numero * contador
    resultado += `<p>${numero} X ${contador} = ${multiplicacao}</p>`
    document.getElementById("exibir").innerHTML = resultado
}