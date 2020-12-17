
function insertarNombre() {
  
  
    let nombre = document.getElementsByClassName("nombre")[0];
  
    if (nombre == "") {
      alert("El nombre no puede estar vacio");
    } else {


      let opcion = "<li> " + nombre + "</li>";
  
      let lista = document.getElementsByClassName("lista-nombres")[0];
      
      lista.innerHTML += opcion;
  
      alert("Se ha insertado el nombre");
    }
  
  }
  