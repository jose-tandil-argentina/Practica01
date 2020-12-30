// este metodo compara los numeros 
function compararNum() {
  let num1 = parseInt(document.getElementsByClassName("num1")[0].value);
  let num2 = parseInt(document.getElementsByClassName("num2")[0].value);



  if (num1 < num2) {
    console.log("el numero 2 es el mayor");
  } else if (num1 == num2) {
    console.log("son los dos iguales");
  } else if (num1 > num2) {
    console.log("el numero 1 es el mayor");
  } else if ((num1 == num1) || (num2 == null)) {
    console.log("uno de los dos no se lleno");
  } else if ((num1 == null) || (num2 == num2)) {
    console.log("uno de los dos no se lleno");
  }
}

