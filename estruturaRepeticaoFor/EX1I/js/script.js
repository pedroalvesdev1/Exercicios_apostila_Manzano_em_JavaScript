//programa que apresente a série de Fibonacci até o décimo quinto termo.
let fibonacci = 0
let sucessor = 1
let antecessor = 0
console.log(sucessor)
for (let contador = 1; contador < 16; contador++) {

    fibonacci = antecessor + sucessor
    antecessor =sucessor
    sucessor =fibonacci
    console.log(fibonacci)
}