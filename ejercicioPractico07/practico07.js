



function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min; 
}

function generarNumeros() {

    let elementos = document.getElementsByClassName("elementos")[0];

    let canTopciones = "";
    for (let i = 0; i < 10; i++) {
        canTopciones += "<option>" + getRandomInt(1, 100) + "</option>";
    }

    elementos.innerHTML = canTopciones;

}

