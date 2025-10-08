let nome = prompt("Digite seu nome:")
let sexo = prompt("Informe seu sexo [M]Masculino [F]Feminino:")


if (sexo.toLowerCase() == "m") {
    alert("Ilmo Sr." + nome)
} else if (sexo.toLowerCase() == "f") {
    alert("Ilma Sra." + nome)
}
else {
    alert("Sexo invalido")
}