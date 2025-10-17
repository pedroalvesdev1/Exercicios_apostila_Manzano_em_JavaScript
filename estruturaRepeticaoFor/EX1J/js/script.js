
let fahrenheit = 0

for(let celsius = 10; celsius < 101;celsius+=10){
    fahrenheit = ((9 * celsius) + 160) / 5   
    console.log(`${celsius}°C = ${fahrenheit}°F`)
}