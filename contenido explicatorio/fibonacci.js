
// funcion que suma los numeros de forma recursiva
let b = 1
let a = 0
let fibonacci = parseInt(prompt('numero fibonacci'))
let contador = 1
while (true) {
    if (contador == fibonacci) {
        respuesta = (a > b ? a : b)
        console.log('la suma final fue ' + respuesta)
        break
    }

    if (contador < fibonacci) {
        a = a + b


        contador = contador + 1
    }
    if (contador < fibonacci) {

        b = a + b

        contador = contador + 1
    }
}


function fibonacci(n) {

    let b = 1
    let a = 0
    let fibonacci = n
    let contador = 1
    while (true) {
        if (contador == fibonacci) {
            respuesta = (a > b ? a : b)
            
            
            break
        }

        if (contador < fibonacci) {
            a = a + b


            contador = contador + 1
        }
        if (contador < fibonacci) {

            b = a + b

            contador = contador + 1
        }
    }
    
    return respuesta

}

console.log('la suma final fue ' + respuesta)


// ejemplo function console.log ('la suma final fue ' + fibonacci(8))
// la suma final fue 21