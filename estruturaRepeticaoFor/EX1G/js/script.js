//Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15.

let baseFixa = 3
let resultado = 1
let expoente = 0

for (let contador = 0; contador < 16; contador++) {
    if (expoente == 0) {
        console.log(`3^${contador} = ${resultado}` )
    }
    else { 
        resultado = resultado * 3
        console.log(`3^${contador} = ${resultado}` )
    }
    expoente++
}
