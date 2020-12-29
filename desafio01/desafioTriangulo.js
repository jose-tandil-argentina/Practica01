
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function calularArea() {

    let base = document.getElementsByClassName("num1")[0].value;
    let altura = document.getElementsByClassName("num2")[0].value;
    
    console.log((base * altura)/2);

}
