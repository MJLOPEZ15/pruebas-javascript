

let respuesta = parseInt(prompt('escriba un numero'))

let numero = respuesta

let suma = respuesta


do {
    if (suma % 2 > 0 && respuesta == 0) {
        alert('la suma es ' + suma + ' impar.')

        break
    }
    if (suma % 2 == 0 && respuesta == 0) {
        alert('la suma es ' + suma + ' es par.')
        numero = 0
        suma = 0
    }
    respuesta = parseInt(prompt('escriba un numero'))
    numero = numero + respuesta
    suma = numero
} while (respuesta >= 0)
