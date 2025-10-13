let contador = 1
let fatorial = 0
let apoio = 0
let resultado = ""

do {
    if (contador % 2 != 0) {
        fatorial = 1
        apoio = 1

        do {
            fatorial *= apoio
            apoio++
        } while (apoio <= contador)
        resultado += `<p>O fatorial de ${contador} = ${fatorial}</p>`
    }
    contador++
} while (contador < 11)

document.getElementById("exibir").innerHTML = resultado
