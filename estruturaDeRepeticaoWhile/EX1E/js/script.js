//os das potências de 3, variando do expoente 0 até o expoente 15
let contador = 1
let expoente = 3
let potencia = 1

console.log("3  ^ 0 ="+potencia)
while(contador < 16){
    potencia *= expoente
    console.log(`3  ^ ${contador} = `+potencia)
    contador++
}