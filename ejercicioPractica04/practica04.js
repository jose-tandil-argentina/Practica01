
// la funtion elegirOpcion al seleccionar una de las dos tira un alerta por pantalla 
// informando cual de las dos opciones quedo elegidas
function Opcionalegir() {

    let opciones = document.getElementsByClassName("eleccion");


    for (let i = 0; i < opciones.length; i++) {


        if (opciones[i].checked) {
            alert(opciones[i].value);
        }

    }
}
