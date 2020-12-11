function Opciones() {

    let opciones = document.getElementsByName("eleccion");
    console.log(opciones);
    for (let i = 0; i < opciones.length; i++) {
        alert(opciones[i].value);
    }

}
