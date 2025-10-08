let tempoGasto = parseFloat(prompt("Digite o tempo que gastou na viagem: "))
let velocidadeMedia = parseFloat(prompt("Digite a velocidade média do carro: "))

let distancia = tempoGasto * velocidadeMedia
let litrosGastos = distancia / 12 

alert("====RESUMO VIAGEM=== \nVelocidade média: " 
    + velocidadeMedia + "Kmh" +
"\nTempo de viagem: " + tempoGasto +
"\nDistância percorrida: " + distancia + "Km"+
"\nLitros usados: " + litrosGastos + "l")