let contador = 1
let graos = 1
let acumuladora = 0

do {
    graos = graos * 2
    acumuladora = graos 
    contador++
} while (contador < 65)
let exibicao = `O número de grãos é: ${acumuladora}`

document.getElementById("graosExibir").innerHTML = exibicao