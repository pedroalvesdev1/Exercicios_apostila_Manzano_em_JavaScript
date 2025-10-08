let valorPrestacao = parseFloat(prompt("Digite o valor da prestação:"))
let valorTaxa = parseFloat(prompt("Digite o valor da taxa:"))
let tempoAtraso = parseInt(prompt("Digite quantos meses em atraso:"))

let prestacao = valorPrestacao + ((valorPrestacao * (valorTaxa /100)) * tempoAtraso)

alert("Você deve pagar R$" + prestacao)