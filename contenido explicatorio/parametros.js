
// los parametros son a y b entre los parentecis

function restar(a,b){
    return a - b
}

// los argumentos son los que los remplazan
restar(5,3)

// ejemplo de microondas
function cocinarMicroondas(plato, tiempo, potencia){
    if(plato === 'pollo' && tiempo === 1 && potencia === 5){
        return 'pollococinado'
    }
    if(plato === 'huevo' && tiempo === 2 && potencia === 3){
        return'huevococinado'
    }
    return'X Plato no soportado'
}

// ejemplo de caculadora

// primero creamos las funciones de las operaciones
function sumar(a,b){
    return a + b
}
function restar(a,b){
    return a - b
}
function multiplicar(a,b){
    return a * b
}
function dividir(a,b){
    return a / b
}
function resto(a,b){
    return a % b
}

function calcular(numero1, numero2, operacion){
    const resultado = operacion(numero1,numero2)
    console.log('El resultado es: ' + resultado)
    return resultado
}

// formas de incluir funciones no dictadas anteriormente
calcular(10, 2, function(a, b) {
  return a / b
})
// El resultado es: 5

// O usando funciones flecha (las veremos más adelante)
calcular(4, 3, (a, b) => a ** b) // El resultado es: 64 (4 elevado a 3)


