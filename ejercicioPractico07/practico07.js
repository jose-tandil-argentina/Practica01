
// este metodo Math.floor devuelve el mayor entero menor o igual a un número dado.
// el metodo Math.random devuelve un número pseudoaleatorio de punto flotante en el rango de 0 a menos de 1 (incluido 0, pero no 1) con una distribución aproximadamente uniforme sobre ese rango, que luego puede escalar a su deseado rango

/*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
*/

function generarNumeros() {

    //let elementos = document.getElementsByClassName("elementos")[0];
/*
    let canTopciones = "";

    for (let i = 0; i <=10; i++) {
        canTopciones += canTopciones ;
    }
    elementos.innerHTML = canTopciones;
*/

    let  elementos = document.getElementsByClassName("elementos")[0].value;
    let letra = "hola";

    for(let i=0;i<10;i++){
        letra  = letra+"hola";
    }
    letra.innerHTML=elementos;
}


// hacer un metodo con numeros  fijos no aleatorios del 1 al 10 