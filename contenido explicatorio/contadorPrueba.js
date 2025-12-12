
function crearContador() {
    let cuenta = 0;

    return function () {
        cuenta++;
        return cuenta;
    }
}

const obtenerCuenta = crearContador()

obtenerCuenta() //1
obtenerCuenta() //2
