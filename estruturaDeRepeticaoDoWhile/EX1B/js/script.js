let contador = 1
let resultado = ""
do {
    if (contador % 2 == 0) {
        console.log(contador)
        resultado += `<p>O número par: ${contador}</p> <hr>`
    }
    contador++
} while (contador < 501)

document.getElementById("demo").innerHTML = resultado