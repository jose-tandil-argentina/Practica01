


function agregarNombre() {
    
    


    let nombre = document.getElementsByClassName("nombre");

    if (nombre == "") {
        alert("el nombre no se puede ingresar vacio");
    } else {


        let cantOpciones = "<li>" + nombre + "</li>";

        let listaDeNombres = document.getElementsByClassName("un_listado_de_nombre");
        listaDeNombres.innerHTML += listaDeNombres;
        alert("nombre ingresado");
    }

}
