function aniadirTexto() {
/* no toma el getElement*/
  let texto = document.getElementsByClassName("texto")
  let mostrar = document.getElementsByClassName("mostrar_texto")

  mostrar.innerHTML += texto.value;

}
