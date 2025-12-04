
// esto es una fuction expression

const sum = function (a, b) {
  return a + b
}

// esto es una declaracion de funcion

function sum(a, b) {
  return a + b
}

// hosting es cuando  escrubes lo que quieres saber y luego la funcion que piensas utilizar para decubrir lo que quieres ejemplo

sum(1, 2)

function sum(a, b) {
    return a + b
}


// la funcion flecha
function sumar(a, b) {
    return a + b
}
// ahora lo comvertimos
const sumarFlecha = (a, b) =>{
    return a + b
}

// ahora  lo simplicamos aun mas esto es solo cuando el return es algo simple y las brochetas

const sumarFlecha = (a, b) => a + b