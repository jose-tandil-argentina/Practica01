
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function calularArea() {

    let base = document.getElementsByClassName("num1")[0].value;
    let altura = document.getElementsByClassName("num2")[0].value;

    let canTopciones = "";
    for (let i = 0; i < 10; i++) {
        canTopciones += "<opcion>" + getRandomInt(1, 100) + "</option>";
    }

    base.innerHTML = canTopciones;
    altura.innerHTML = canTopciones;
    
    alert((base * altura)/2);

}
