//apresenta a série de Fibonacci até o décimo quinto termo
let contador = 1
let fibonnacci = 1
let primeiraSequencia = 0
let segundaSequencia = 1

console.log(fibonnacci)
while(contador < 16){
    fibonnacci = primeiraSequencia + segundaSequencia
    primeiraSequencia = segundaSequencia
    segundaSequencia = fibonnacci
    console.log(fibonnacci)
    contador++
}