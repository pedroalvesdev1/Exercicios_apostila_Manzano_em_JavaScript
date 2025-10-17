/*Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500. */

let somadora = 0

for(let contador=0;contador < 501; contador++){
    if(contador%2 == 0){
        somadora = somadora + contador
    }
}

console.log(`A soma dos pares na faixa de 1 até 500 é ${somadora}`)