
// con while
let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i], i ) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}

// con for
let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
let respuesta = parseInt(prompt('escribe un numero entero'))
const total= [0]
for(let base = 0; base <= respuesta; base++){
  total.push(base)
  if(base = respuesta){
    console.log(total)
  }
}
let respuesta= parseInt(prompt('escriba un numero'))
const lista =[]
for (let base = 0; base < respuesta; base ++){
  if(base % 3 == 2 ){
    lista.push(base)
  }
}
console.log(lista)

let letra= prompt('escriba una letra')
let numero= parseInt(prompt('un numero'))
let cadena= ""
for(let base = 1; base<=numero;base++){
  cadena = cadena + letra
}console.log(cadena)


let limite = parseInt(prompt('escriba un numero'))
let base = 5
let unidad= 0
let decena= 0
for(let i = 0 ; i <limite; i ++){
  unidad++
  if(unidad == 5){
    unidad = 0
    decena = decena +1
  }
  console.log(decena + '+' + unidad)
}console.log(decena + '+' + unidad)

let letra = *
let cantidad = parseInt(prompt(escriba un numero))
for(let i =0; i<= cantidad;i++){
  console.log(letra)
}

let respuesta = parseInt(prompt('escribe un numero'))
let suma=0
for(let i = 1; i<= respuesta;i++){
   suma = suma + i;
}console.log(suma)

let suma = 0
for(let i =0;i<4;i++){
  const n = parseInt(prompt('escribe un numero'))
  suma = suma + n

}
console.log('la media es '+ suma/4 )
//dado un [] de numeros devuelveme otro areglo con los numeros pares del primer areglo.
//[1,2,3,4,5,6] => [2,4,6]
//[4,1,9,2,3,2] => [4,2,2]
function obtenerPares(nums){
  const result=[]
  for(let i = 0;i<nums.length;i++){
    if(nums[i]%2==0){
      result.push(nums[i])
    } 
  
  }
  return result
} 
