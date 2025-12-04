let respuesta , contador = 0 ;
do {
 
    respuesta = parseInt(prompt('escriba numeros pares'))
    contador = contador + 1
} while (respuesta % 2 == 0)
    contador = contador - 1

console.log('los pares son ' + contador)