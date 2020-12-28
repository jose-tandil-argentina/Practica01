function registarEdad(){
    
    let edad = document.getElementsByClassName("numero")[0].value;

    if(edad<12){
        alert("es un niño");
    }else if((edad < 12) && (edad < 19)){
        alert("es un adolecente");
    }else if((edad <= 20) && (edad < 30)){
        alert("es un adulto joven");
    }else if((edad<=20) && (edad<30)){
        alert("es un adulto");
    }
}