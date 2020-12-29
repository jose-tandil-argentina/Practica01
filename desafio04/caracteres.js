



function ingresarCaracter(){
    let texto = document.getElementsByClassName("texto")[0].value;
    let caracter = document.getElementsByClassName("caracter")[0].value;
    

    let contador =0;

    for(let i=0;i<texto.length;i++){
        if(caracter==caracter.texto[i]){
           contador+=1;
           if(contador>10){
               console.log("el caracter aparece mas de 10 veces");
           }
        }
    }
}