function aniadirTexto() {
/* no toma el getElement*/
  let texto = document. getelementsbyclassname("texto")
  let mostrar = document. getelementsbyclassname("mostrar_texto")

  mostrar.innerHTML += texto.value;

}
