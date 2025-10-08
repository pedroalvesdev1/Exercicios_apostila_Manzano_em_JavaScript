let valorA = parseFloat(prompt("Digite o valor de A:"))
let valorB = parseFloat(prompt("Digite o valor de B:"))
let valorC = parseFloat(prompt("Digite o valor de C:"))

let delta = (valorB ** 2) - 4 * valorA * valorC

if (valorA == 0) {
    alert("O valor de A não pode ser 0(zero)")
}
else {
    if (delta > 0) {
        let xDeltaMaior = ((-valorB) + Math.sqrt(delta)) / (2 * valorA)
        let xDeltaMenor = ((-valorB) - Math.sqrt(delta)) / (2 * valorA)
        alert("Primeira raiz: " + xDeltaMaior + "\nSegunda raiz: " + xDeltaMenor)
    }
    else {
        if (delta == 0) {
            let xDeltaMaior = ((-valorB) + Math.sqrt(delta)) / (2 * valorA)
            alert("Raiz única " + xDeltaMaior)
        }
        else{
            alert("Não existe raizes reais")
        }
    }
}