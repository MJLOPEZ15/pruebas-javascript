let max = 0


let respuesta = parseInt(prompt('escriba numeros enteros'))
let min = respuesta
while(respuesta >0 ){

     max = (respuesta > max ? respuesta:max)
     min = (respuesta < min ? respuesta : min)
    respuesta = parseInt(prompt('escriba numeros enteros'))
}console.log( 'el numero maximo es ' + max +' el numero minimo es ' + min)