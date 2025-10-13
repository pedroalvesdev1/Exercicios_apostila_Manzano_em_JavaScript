let dividendo = parseFloat(prompt("Digite o valor do dividendo: "))
let divisor = parseFloat(prompt("Digite o valor do divisor: "))
let quociente = 0

if (divisor == 0) {
    alert("Erro: não e possivel dividir um numero por 0")
}
else {
    do {
        dividendo = dividendo - divisor
        quociente++

    } while (dividendo >= divisor)
}

let resultado = `O valor do quociente é: ${quociente}`

document.getElementById("exibir").innerHTML = resultado