
function insertarNombre() {
  
  
    let nombre = document.getElementsByClassName("nombre").value;
  
    if (nombre == "") {
      alert("El nombre no puede estar vacio");
    } else {
      let opcion = "<li> " + nombre + "</li>";
  
      let lista = document.getElementsByClassName("lista-nombres");
      lista.innerHTML += opcion;
  
      alert("Se ha insertado el nombre");
    }
  
  }
  