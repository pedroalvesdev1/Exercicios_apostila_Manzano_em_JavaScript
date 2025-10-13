let nomeComodo = ""
let largura = 0
let comprimento = 0
let resposta = ""
let area = 0
let areaTotal = 0
let respostaLogica = true

do {
    nomeComodo = prompt("Digite o nome do Comôdo:")
    largura = parseFloat(prompt("Digite a largura da área: "))
    comprimento = parseFloat(prompt("Digite o comprimento"))
    area = largura * comprimento
    areaTotal += area

    alert(`${nomeComodo} tem ${area}m²`)

    resposta = prompt("Deseja calcular outro comôdo? [S]Sim  [N]Não").toUpperCase()

    if (resposta == "S" || resposta == "SIM") {
        respostaLogica = true
    }
    else {
        respostaLogica = false
    }
} while (respostaLogica == true)

let exibir = `Total acumulado da área residencial: ${areaTotal}m²`

document.getElementById("exibir").innerHTML = exibir