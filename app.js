let numeroSecreto;
let numeroIntentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
  numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroGenerado = numeroSecreto;
console.log(numeroGenerado);
console.log(numerosSorteados);
//si ya sorteamos todos los numeros
if (numerosSorteados.length == numeroMaximo) {
asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
} 
// si el numero generado esta en la lista
else if (numerosSorteados.includes(numeroGenerado)) {
  return generarNumeroSecreto()
} else {
  numerosSorteados.push(numeroGenerado);
  return numeroGenerado;
}

}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Felicidades, haz acertado! acertaste en ${numeroIntentos} ${(numeroIntentos === 1 ? "vez" : "veces")} .`);
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else if (numeroUsuario < numeroSecreto) {
    asignarTextoElemento("p", "El numero secreto es mayor.");
  } else if (numeroUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El numero secreto es menor.");
  }
  numeroIntentos++;
  limpiarCaja();
  return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}
function condicionesIniciales() {
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo} por favor.`);
numeroSecreto = generarNumeroSecreto();
numeroIntentos = 1;

}

function reiniciarJuego() {
//limpiar caja
limpiarCaja();
//mensaje de indicar numero
//generar numero aleatorio
//inicializar el numero de intentos
condicionesIniciales();
//inhabilitar boton nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled", "True")

}

numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto)

condicionesIniciales();
