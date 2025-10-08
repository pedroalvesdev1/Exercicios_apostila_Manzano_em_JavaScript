let num1 = parseInt(prompt("Digite o 1° valor:"))
let num2 = parseInt(prompt("Digite o 2° valor:"))
let diferenca = 0

if (num1 > num2) {
    diferenca = num1 - num2
}
else {
    diferenca = num2 - num1
}

alert("A dirença entre o maoir pelo menor é de " + diferenca)