//ejemplo
//los arrays son los datos que  colocamos entre [] estos se usan para agrupar datos en ellos para luego poder llamarlos, ademas de crear diferentes agrupaciones

const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // [10, 2, 30, 4, 5]
// puedo colocar el nombre del array junto a .length para saber cuantos elemetos tiene guardado
numbers.length
5
 
// tammbien podemos cortar la cantidad de objetos dentros ejemplo
numbers.length = 2
2
console.log(numbers) // [10, 2]
// tambien podemos agregar elementos al final ejemplo
numbers.push(6)

console.log(numbers) // [10, 2, 6]
// tambien podemos quitar algunos datos
numbers.shift()
console.log(numbers) // [2, 6]
// tambien podemos agregar un dato al principio
numbers.unshift(8)
console.log(numbers) // [8, 2, 6]

// tambien peudes conectar array con .conact() 

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]
// o tambien puede usar el ...

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numbers, ...numbers2]

console.log(allNumbers) // [1, 2, 3, 4, 5]

