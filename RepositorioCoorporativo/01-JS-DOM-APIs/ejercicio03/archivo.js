"use strict";

const { type } = require("os");


function showAlert() {
    let x = document.getElementsByClassName("titulo");
 
    fetch("http://api.icndb.com/jokes/random", {

 
})

.then(response => response.json())

.then(data => (x[0].innerHTML = data.value.joke))

.catch(error  => x[0].style.color = "red");
} 