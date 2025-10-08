let varA = parseInt(prompt("Digite o 1° número:"))
let varB = parseInt(prompt("Digite o 2° número:"))

alert("Os valores digitado foram: " + varA + " , " + varB)

let gaveta = varA
varA = varB
varB = gaveta

alert("Com os valores trocados ficou: " + varA + " , " + varB)