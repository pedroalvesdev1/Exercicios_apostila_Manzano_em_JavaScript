let SM = parseFloat(prompt("Digite o valor do salário mensal do trabalhador: "))
let PR = parseFloat(prompt("Digite o valor do percentual de reajuste: "))

let NS = SM + (SM * PR/100)

alert("O novo salário é R$" + NS)