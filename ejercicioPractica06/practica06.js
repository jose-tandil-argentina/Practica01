
let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);

function ElmayorEs() {
    if (num1 && num2) {
        if (num1 >= num2) {
            if (num1 == num2) {
                if(num1 != num2){
                    alert("numero invalido");
                }
                alert("Los numeros son iguales");
            } else {
                alert("El num1 es mayor");
            }
        } else {
            alert("El num2 es mayor");
        }
    } else {
        alert("Uno de los numeros no se relleno");
    }

}
