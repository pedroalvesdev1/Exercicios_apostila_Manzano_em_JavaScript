//Programa que apresente como resultado o valor do fatorial dos valores ímpares
let fatorial = 0

for (let contador = 1; contador < 11; contador++) {
    if (contador % 2 != 0) {
        fatorial = 1
        for (let contador2 = 1; contador2 <= contador; contador2++) {
            fatorial *= contador2
        }
        console.log(`O fatorial de ${contador} é ${fatorial}`)
    }
}