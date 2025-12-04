//recursividad se trata de llmar a la misma funcion dentro de ella lo que puede crear unnbucle si no colocas una salida
function cuentaAtras (numero){
    if (numero<0) { return}
    console.log(numero)
    cuentaAtras(numero - 1)
}
//otro ejemplo (nos permite calcular la multiplicacion del numero por todos sus anteriores)
function factorial(n){
    if(n === 0 || n === 1  ){
        return 1
    }else{
        return n * factorial(n - 1)
    }
}
factorial (5)
