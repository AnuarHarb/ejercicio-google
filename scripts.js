// Selecionar los botones del HTML
const botonSuerte = document.querySelector("#boton-de-suerte");
const botonBuscar = document.querySelector("#boton-de-buscar");
const input = document.querySelector("#input");

// Escuhar los eventos
botonBuscar.addEventListener("click", buscarEnGoogle);
botonSuerte.addEventListener("click", buscarEnGoogle);
// Funcion para buscar en google

function buscarEnGoogle() {
  const palabraABuscar = input.value;
  const url = "https://www.google.com/search?q=" + palabraABuscar;
  window.open(url);
}
