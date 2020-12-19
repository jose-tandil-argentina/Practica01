

function Opcionalegir() {

    let opciones = document.getElementsByClassName("eleccion");
    console.log(opciones);
    for (let i = 0; i < opciones.length; i++) {

      


        if (opciones[i].checked) {
            alert(opciones[i].value);
        }

    }
}
