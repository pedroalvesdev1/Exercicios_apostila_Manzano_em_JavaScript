// somatório dos valores pares existentes na faixa de 1 até 500.
let contador = 1
let somadora = 0

while(contador < 501){
    if(contador%2 == 0){
        somadora = somadora + contador
    }
    contador++
}
console.log(somadora)