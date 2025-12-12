
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