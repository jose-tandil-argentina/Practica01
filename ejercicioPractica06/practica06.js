
function compararNum(){
  /* no toma el getElement*/
  let num1 = parseInt(document.getElementsByClassName("num1").value)[0];
  let num2 = parseInt(document.getElementsByClassName("num2").value)[0];

  if (num1 && num2) {
    if (num1 >= num2) {
      if (num1 == num2) {
        alert("Los numeros son iguales")
      } else {
        alert("El num1 es mayor")
      }
    } else {
      alert("El num2 es mayor")
    }
  } else {
    alert("Uno de los numeros no se relleno")
  }
}
