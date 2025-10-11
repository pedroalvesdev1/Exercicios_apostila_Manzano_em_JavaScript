//apresenta os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus
let grausCelsius = 10

while (grausCelsius < 101) {

    let fahrenheit = (9 * grausCelsius + 160) / 5
    console.log("A temperatura " + grausCelsius + "°C em Fahrenheit é " + fahrenheit + "°F")
    grausCelsius += 10
}