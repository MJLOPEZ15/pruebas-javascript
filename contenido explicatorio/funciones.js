
// la function es un bloque de codigo que hace una tarea especific CADA VES QUE SE LE LLAMA EJEMPLO:
function saludar(){
    console.log('Hola, Marino')
}

// ahora cada ves que coloque saludar() respondera 'Hola, Marino'
// otro ejemplo si queremos que nos devuelva algo y no solo aparesca en la consola seria
function suma(){
    return 1+1
}
// ahora cada ves que sitemos suma() nos devolvera 2


function suma(a,b){
   return a + b
}
function primo(a){
    let esPrimo = true;

    return esPrimo;
}

esPrimo(5)

// tambien hay algunos valores muy utiles como 'math.random()' que nos da un numero aleatorio entre el cero y el uno
Math.random()
//tambien esta el 'math.floor(cualquier numero con decimal)' lo redondea asia abajo
Math.floor(3.56)
