
let suma
let respuesta = parseInt(prompt('escribe un numero'))
let resultado = respuesta


while(1< respuesta){
    respuesta = respuesta - 1
    resultado = resultado * respuesta
}
    console.log ('la suma es ' + resultado)


function factorial(n){
 if(n==0 || n == 1){
    return 1
 }else{
    return n * factorial(n-1)
 }
}    