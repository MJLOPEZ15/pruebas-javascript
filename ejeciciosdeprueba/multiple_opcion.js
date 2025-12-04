
    



while(true){

    let elecion = parseInt(prompt('Menu de opciones: 1, Leer datos ; 2, Mostrar datos ; 3, Fin'))
    if(elecion == 1){
        alert('Opción leeer datos')
    }
        
        
    if(elecion == 2){
        alert('Opción Mostrar datos')
    }
    
    if(elecion == 3){
        alert('Fin del programa')
        break
    }
    if(elecion == 0){
        alert('Error')
        
    }

     
    if(elecion > 3){
        alert('Eror')
    }
}