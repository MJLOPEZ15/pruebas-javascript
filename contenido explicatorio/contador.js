
// ✅ Closure - datos protegidos
function crearContador() {
  let contador = 0 // Variable privada
  
  return {
    incrementar: function() {
      contador++
      return contador
    },
    decrementar: function() {
      contador--
      return contador
    },
    obtenerValor: function() {
      return contador
    }
  }
}

const miContador = crearContador()

console.log(miContador.incrementar()) // 1
console.log(miContador.incrementar()) // 2
console.log(miContador.decrementar()) // 1

// No podemos acceder directamente a 'contador'
// miContador.contador = 1000 // No funciona