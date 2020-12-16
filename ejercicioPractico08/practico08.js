


function agregarNombre() {
    
    


    let nombre = document.getElementsByClassName("nombre")[0];

    if (nombre == "") {
        alert("el nombre no se puede ingresar vacio");
    } else {


        let cantOpciones = "<li>" + nombre + "</li>";

        let listaDeNombres = document.getElementsByClassName("un_listado_de_nombre")[0];
       
        listaDeNombres.innerHTML += listaDeNombres;
       
        alert("nombre ingresado");
    }

}
