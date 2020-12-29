function calcularNumeros(){
    let Numero1 = document.getElementsByClassName("num1")[0].value;
    let Numero2 = document.getElementsByClassName("num2")[0].value;


    

    for(let i=1;i<Numero2.length;i++){
        Numero1 = Numero1*Numero1;
    }
    
    console.log(Numero1);
}

//Dados dos números, calcula el primer número elevado a la potencia del segundo. 
//¡Presta atención a los exponentes negativos!
