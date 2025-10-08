let num1 = parseInt(prompt("Digite o 1° valor:"))
let num2 = parseInt(prompt("Digite o 2° valor:"))
let num3 = parseInt(prompt("Digite o 3° valor:"))
let num4 = parseInt(prompt("Digite o 4° valor:"))
let num5 = parseInt(prompt("Digite o 5° valor:"))
let maior 
let menor 

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    maior = num1
} else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    maior = num2
} else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    maior = num3
} else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    maior = num4
} else if(num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    maior = num5
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    menor = num1
} else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    menor = num2
} else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
    menor = num3
} else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
    menor = num4
} else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
    menor = num5
}

alert("Maior número: " + maior + " , " + "Menor número: " + menor)