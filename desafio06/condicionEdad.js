function registarEdad(){
    
    let edad = document.getElementsByClassName("numero")[0].value;

    if(edad<12){
        console.log("es un niño");
    }else if((edad < 12) && (edad < 19)){
        console.log("es un adolecente");
    }else if((edad <= 20) && (edad < 30)){
        console.log("es un adulto joven");
    }else if(edad>30){
        console.log("es un adulto");
    }
}