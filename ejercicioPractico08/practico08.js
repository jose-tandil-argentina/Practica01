
function insertarNombre(evt) {
  evt.preventDefault();

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
