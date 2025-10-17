//Apresentar os quadrados dos números inteiros de 15 a 200.

let potencia = 0

for (let contador = 15; contador < 201; contador++) {
    potencia = contador * contador
    console.log(`O resultado do quadrado de ${contador} é ${potencia}`)
}