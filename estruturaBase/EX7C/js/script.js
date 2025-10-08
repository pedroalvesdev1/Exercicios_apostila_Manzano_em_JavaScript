let raio = parseFloat(prompt("Digite o valor do raio: "))
let altura = parseFloat(prompt("Digite o valor da altura: "))

let volume = (3.1415 * (raio ** 2)) * altura

alert("O valor do volume é " + volume.toFixed(2) + "cm³")