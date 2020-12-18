
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function calularArea() {

    let base = document.getElementsByClassName("num1")[0];
    let altura = document.getElementsByClassName("num2")[0];

    let canTopciones = "";
    for (let i = 0; i < 10; i++) {
        canTopciones += "<opcion>" + getRandomInt(1, 100) + "</option>";
    }

    base.innerHTML = canTopciones;
    altura.innerHTML = canTopciones;

}


/*
function calularArea(){
    let base = document.getElementsByClassName("num1")[0];
    let altura = document.getElementsByClassName("num2")[0];

    return (base*altura)/2;

}

/*
function calularArea(){
    let base = document.getElementsByClassName("num1")[0];
    let altura = document.getElementsByClassName("num2")[0];

    let base = calcularArreaTriangulo
}


function calcularArreaTriangulo(base , altura){
    return (base*altura)/2;
}

*/