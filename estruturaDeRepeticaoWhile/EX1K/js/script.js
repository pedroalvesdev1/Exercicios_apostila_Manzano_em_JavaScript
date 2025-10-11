let resposta = "S"
let areaTotal = 0

while (resposta.toUpperCase() == "S") {
    nomeComodo = prompt("Digite o nome do comôdo: ")
    base = parseFloat(prompt("Digite o valor da base: "))
    altura = parseFloat(prompt("Digite o valor da altura: "))

    let area = base * altura
    areaTotal += area
    console.log("Área do " + nomeComodo + ": " + area + " m²")
    resposta = prompt("Você deseja calcular outra área? [S]SIM [N]NÃO")
}

document.getElementById("areaTotal").innerHTML = "A área total da residencia é: " + areaTotal + "m²"