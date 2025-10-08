let nota1 = parseFloat(prompt("Digite o valor da 1° nota:"))
let nota2 = parseFloat(prompt("Digite o valor da 2° nota:"))
let nota3 = parseFloat(prompt("Digite o valor da 3° nota:"))
let nota4 = parseFloat(prompt("Digite o valor da 4° nota:"))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    alert("O aluno foi aprovado com a média de " + media)
} else if (media < 7) {
    let notaExame = parseFloat(prompt("Digite a nota do exame:"))
    media = (media + notaExame) / 2
    if (media >= 5) {
        alert("O aluno foi aprovado pelo exame com a média de " + media)
    }
    else {
        alert("O aluno foi reprovado com a média de " + media)
    }
}