//Apresenta o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

let resultado = 0
for(let contador = 1; contador < 101; contador++){
    resultado = resultado + contador
}
console.log(resultado)