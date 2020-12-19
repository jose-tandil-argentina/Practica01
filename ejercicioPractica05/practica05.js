function aniadirTexto() {

  let texto = document.getElementsByClassName("texto")[0];
  let mostrar = document.getElementsByClassName("mostrar_texto")[0];

  mostrar.innerHTML += texto.value;

}
