Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.
Si le doy el número 5 pues deberá contar 0,1,2,3,4,5





let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1

  if (respuesta === numero)
    break
}

let respuesta = prompt('¿Escribe un numero?')
while (respuesta > 0) {
    let numero = 0
    console.log(numero)
    numero = numero + 1
    
    if (respuesta === numero)
    break
}

let cuentaAtras = 0
let respuesta = prompt('escribe un numero')

while (cuentaAtras >= 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras + 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === respuesta) {
    break // <---- salimos del bucle
  }
}
let cuentaAtras = 0
let respuesta = prompt('escribe un numero')

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras + 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras == respuesta) {
    break // <---- salimos del bucle
  }
}

//mañana temprano
let cuentaAtras = 0
let respuesta = parseInt(prompt('escribe un numero'))

while (cuentaAtras <= respuesta) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras + 1

    
    
}








//repetirdor molesto
while (true ) {
    let respuesta = prompt('¿desea continuar con el programa?'),
     anulador = respuesta == 'n' || 'N'
     
    if (respuesta != 'n' & 'N')

    continue
    
    if (anulador == true) {
        break
    }
}  


 while(true)
  let numeroComparacion = prompt('escriba un numero para saber si es primo')
  
  


Let numero, resto, divisor = 2, esPrimo = " Si";
numero = parseInt(prompt("Teclear un numero entero"));
while ((divisor <= numero) && (numero % divisor != 0)){
   divisor++;
}
if(divisor < numero){
   esPrimo=" NO ";
}
console.log("El numero "+ numero + esPrimo+" es primo");

while(true){
  let contraseña = prompt('porfavor escraba la contraeña');
  contraseña == 'loco'
  
}if(controseña != 'loco'){
    break
}
console.log('La contraseña es ')