let name = "Jose";
let nombreUsuario = "Joseph";
let edadUsuario = 21;
function sumar(a, b){
    return a + b;
}
sumar(1, 3);
const MAYORIA_DE_EDAD = 18

console.log("midu")
alert("¿te esta gustando esto?") //esto es para solo opcion de si o no
prompt("que es lo que te gusta?") //esto es para escribir una respuesta
//15000. => 1.5*10**4 ->1.5e+4
//0.0015 => 1.5*10**-3 -> 1.5e-3
// existen 9 tipos de datos  y dos grandes grupos
//  Primitivos
// number = numeros
// string = cadena = texto
// volcanos = boolean = verdad y falso
// nule = null = no valor
// undifined = nodefinido = no existe
// symbol = simbolo = valor unico que se usa para diferenciar
// bigint = exde numero que se permite  
//  
// Numero : + = +    - = -   * = multiplicacion.  / = divisor.  % = restante de una division.  ** = elevado al "" . e+4 = 10x10x10x10 . e-4 = -10 x -10 x -10 x -10 /
//string = cadena de texto 
// 'text' = text
//  "text" = text 
//  `hola mundo` = permiten que pueden escrimibir mas de una linea
//  "hola" + "mundo" = holamundo
//  "hola" + "" + "mundo" = hola mundo
//  "hola " + "mundo" = hola mundo
// booleanos 
// sirve para la comparacion  y determinar el verdadero y falso
// < o > = mayor menor
// 4>=6 falso    el >= mayor igual
// 4 == "4"  equivalente
// 4 === "4" false  exactamente igual
// !  se usa para la negacion
//  != no es igual 
//  !(5==4) true   el ! niega el lo que se propone entre los parentecis (5==4) por lo que dice ! es verdadero 
// true && true   true.    si ambos son verdadero entoces la respuesta es verdadera
// true && flase         si uno de los dos es false entonces el resultado sera falso
//  false && false.       si ambos son falsos el resultado sera falso
// || si almenos uno es verdadero ejemplo
//  true || false   resulta en true porque almenos uno de los dos es verdadero
//  true || true    resulta en true 
// false || false. reuslta  en false poque no hay ninguno verdadero
//  el ! tambien se puede usar para cambiar el resultado un ejemplo
//  !true resuta en fasle
//  !false resulta en true//
/* fdsfdsf */
function obtenerDivisionCompleta(a, b){
    return {cociente: parseInt(a/b), restante: a%b}
}

// cuando ponemos el valor de un let nombre = 0   es u numero su valor puede ser dicatdo como 0 aunque este esa equivalente a null no son,o mismo
// cuando ponemos null se da a entender que no hay nada 
// y undefined se da a entender que no tiene valor
// por lo que si bien null puede ser equivalente a undefined no es lo mismo
// mientras que en uno no tiene tiene valor null que significa nada
// el unidefined es que no tiene valor ninguno// 

// el "if" es un condicionador un ejemplo
let edad = 20
if (edad >=18 ) {
    // aqui se escribe lo que quieres que pase si se cumple la consicion inpuesta
   console.log('Es mayor de edad')}
    else {
        // aqui se pone si la condicion impuesta no se cumple

        console.log('Es menor de edad')
    }

// el if es en escalera por lo que si es cumple el primero las siguientes condiciones no es ejecutan

// el while es como el ' if ' pero este se repite asta que la condicion a la que esta ligada deje de cumplirse 
// por lo que hay que tener en cuenta de no colocar como condicion el true y el false
// porque el true ara que se creear un bucle infinito que terminaria por trabar la paagina o programa
// y el falze simple mente no se ejecuta
// el break puede ser una posible solucion a este problema pero es recomendable 
// ejemplo el break sirve para cortar el bucle si se pasa al siguente ifo comando fuera del bucle
// el continue sirve para cortar una interaccion del bucle i pasar a la siguiente interaccion del bucle por lo que se peude usar para inponer una conddicion mas/
//.  let respuesta
// do {
//*
// respuesta = confirm('¿Te gusta JavaScript?')
  //  } while (respuesta)  
  // el todo lo que esta dentro de "do" se ejecutara almenos una ves
  // //

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log('¡Despegue 🚀!')
  } else {
    console.log('Faltan ' + i + ' segundos')
  }
}
// el for se usa para bucles mas simples y que sean con numeros
// EL WHILE ES MAS PARA BUCLES COMPLEJOS Y PUEDE ABARCAR NO SOLO NUMEROS

// el for tambien se puede usar con multiple 

switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}

// switch evalúa una expresión, comparado el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado.
// ejemplo
const dia = 'lunes'

switch (dia) {
  case 'lunes':
    console.log('¡Hoy es lunes! 😢')
    break

  default:
    console.log('No es lunes, YAY! 🚀')
    break
}

// aveces es es normar poder hcaer lo mismo con switch que con if

const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log('¡Hoy es domingo! 😴')
    break
  case 1:
    console.log('¡Nooo, es lunes! 😢')
    break
  case 2:
    console.log('¡Hoy es martes! 🥵')
    break
  case 3:
    console.log('¡Hoy es miércoles! 🤓')
    break
  default:
    console.log('Se acerca el fin de! 🚀')
    break
}


const dia = new Date().getDay()

if (dia === 0) {
  console.log('¡Hoy es domingo! 😴')
} else if (dia === 1) {
  console.log('¡Nooo, es lunes! 😢')
} else if (dia === 2) {
  console.log('¡Hoy es martes! 🥵')
} else if (dia === 3) {
  console.log('¡Hoy es miércoles! 🤓')
} else {
  console.log('Se acerca el fin de! 🚀')
}

//es segun sea mas comodo
// Igual que console es un objeto. También Date lo es. Un objeto en JavaScript no es muy diferente a un objeto en la vida real. Tiene propiedades y funciones que podemos usar. En este caso, getDay() es una función que nos devuelve el día de la semana.

const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log('¡Hoy es fin de semana! 🥳')
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('¡Nooo, a trabajar! 😢')
    break
  case 5:
    console.log('¡Hoy es viernes! 🤓')
    break
}


// es importante usar el break porque si no no funcionanara y se activaran todos los que se cumplan despues del que eran el indicado. de hay la importancia el break
// esto es switch(true). esto hace que evalue si es corecto los casos propuestos
let edad = 25

switch (true) {
  case edad >= 18 && edad < 25:
    console.log('Eres mayor de edad y eres joven')
    break
  case edad >= 25 && edad < 40:
    console.log('Eres mayor de edad y estás en plena madurez')
    break
  case edad >= 40:
    console.log('Eres mayor de edad y estás en la mejor edad')
    break
  default:
    console.log('Eres menor de edad')
}
// fuction saludar(){
//. console.log('Hola Miguel')
//}

function getRandomNumber () {
    const random = Math.random()
    const multipled = random * 10
    const rounded = Math.floor(multipled)
    const result = rounded + 1
    return result
    
}

function sumar() {
    retrun 1+1
}

let dia = 1
while(dia){
    case dia >= 7
    
}