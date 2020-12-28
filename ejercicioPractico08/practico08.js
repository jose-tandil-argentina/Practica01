
// el metodo lista todo los nombre ingresados por el usuario al no ingresar el nombre de usuario tira un mensaje de  alerta 

function insertarNombre(evt) {
 // que es lo que hace evt.preventDefault();

  let nombre = document.getElementsByClassName("nombre")[0].value;



  if (nombre == "") {
    alert("El nombre no puede estar vacio");
  } else {
    let opciones = "<li> " + nombre + "</li>";

    let lista = document.getElementsByClassName("lista-nombres")[0];

    lista.innerHTML += opciones;

    alert("Nombre insertado");
  }

}
