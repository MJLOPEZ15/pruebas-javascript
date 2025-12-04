
function repetirAccion(veces, accion) {
  for (let i = 0; i < veces; i++) {
    accion(i)
  }
}

// Diferentes acciones
repetirAccion(3, function(numero) {
  console.log('Iteración número: ' + numero)
})

repetirAccion(5, function(numero) {
  console.log('⭐'.repeat(numero + 1))
})