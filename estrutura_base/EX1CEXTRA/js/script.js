let votoCandidatoA = parseInt(prompt("Digite o número de votos candidato A: "))
let votoCandidatoB = parseInt(prompt("Digite o número de votos candidato B: "))
let votoCandidatoC = parseInt(prompt("Digite o número de votos candidato C: "))

let votosNulos = parseInt(prompt("Digite o número de votos nulos: "))
let votosEmBranco = parseInt(prompt("Digite o número de votos em branco: "))

let totalVotos = votoCandidatoA + votoCandidatoB + votoCandidatoC + votosEmBranco + votosNulos

let percentualCandidatoA = (votoCandidatoA / totalVotos) * 100 
let percentualCandidatoB = (votoCandidatoB / totalVotos) * 100
let percentualCandidatoC = (votoCandidatoC / totalVotos) * 100

let percentualVotosNulos = (votosNulos / totalVotos) * 100
let percentualVotosEmBranco = (votosEmBranco / totalVotos) * 100

alert("====RESULTADO DAS ELEIÇÕES====" + 
    "\nQuantidade votos candidato A: " + percentualCandidatoA.toFixed(2) + "%" +
    "\nQuantidade votos candidato B: " + percentualCandidatoB.toFixed(2) + "%" + 
    "\nQuantidade votos candidato C: " + percentualCandidatoC.toFixed(2) + "%" + 
    "\nQuantidade votos nulos: " + percentualVotosNulos.toFixed(2) + "%" +
    "\nQuantidade votos em branco: " + percentualVotosEmBranco.toFixed(2) + "%"
)