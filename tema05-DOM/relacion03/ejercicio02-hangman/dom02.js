//const
const container = document.getElementById("btnAlfabeto");
var respuestaPantalla = document.getElementById("container2");
var respuesta = "";
var pista = "";
var vidas = 10;
var palabraPantalla = [];
var comprobarGanador = "";
const contenedor_pista = document.getElementById("pista");
const btnPista = document.getElementById("pista");
const btnReiniciar = document.getElementById("reiniciar");
const vidasPantalla = document.getElementById("vidas");


//generate alphabet button
function generarBotones() {
  var btnHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letra) =>
        `<button
         class = "btnAlfabeto" 
         id="${letra}"
         >
        ${letra}
        </button>`
    )
    .join("");

  return btnHTML;
}

function hacerClick(event) {
  const esBtn = event.target.nodeName === "BUTTON";
  if (esBtn) {
    //console.dir(event.target.id);
    //console.log(isButton);
    const btnId = document.getElementById(event.target.id);
    btnId.classList.add("selected");
  }
  return;
}

//palabra array
const pregunta = [
  "The Chosen Category Is Acuatic Animals",
  "The Chosen Category Is Minerals"
];

const categorias = [
  [
    "lobster",
    "axolotl",
    "dolphin",
    "jellyfish",
    "seal",
    "squid",
    "whale-shark"
  ],
  ["plagioclase", "gold", "pumice", "diamond", "corundum"],
  ["talc","celestine", "cinnabar", "serpentine", "galene"]
];

const pista = [
  [
    "Those from Maine are famous",
    "An amphibian",
    "A mammal ",
    "Soft and transparent",
    "A mammal",
    "Has many legs",
    "The biggest fish"
  ],
  [
    "Type of feldspar",
    "Precious metal",
    "From volcanoes",
    "The hardest",
    "The second hardest",
    "Used for babies",
    "Montevive is a deposit",
    "Source of mercury",
    "Green metamorphic rock",
    "Source of plumber"

  ],
];

//set pregunta,respuesta and pistas

function setRespuesta() {
  const ordenCategorias = Math.floor(Math.random() * categorias.length);
  const categoriaEscogida = categorias[ordenCategorias];
  const ordenPalabra = Math.floor(Math.random() * categoriaEscogida.length);
  const palabraSeleccionada = categoriaEscogida[ordenPalabra];

  const nombresCategorias = document.getElementById("nombreCategoria");
  nombresCategorias.innerHTML = pregunta[ordenCategorias];

  //console.log(categoriaEscogida);
  //console.log(palabraSeleccionada);
  respuesta = palabraSeleccionada;
  pista = pista[ordenCategorias][ordenPalabra];
  respuestaDisplay.innerHTML = respuesta_en_pantalla(palabraSeleccionada);
}

function respuesta_en_pantalla(palabra) {
  var palabraArray = palabra.split("");
  //console.log(palabraArray);
  for (var i = 0; i < respuesta.length; i++) {
    if (palabraArray[i] !== "-") {
      palabraDisplay.push("_");
    } else {
      palabraDisplay.push("-");
    }
  }
  return palabraPantalla.join(" ");
}

function mostrarPistas() {
  containerPistas.innerHTML = `Clue - ${pistas}`;
}

btnPista.addEventListener("click", mostrarPistas);
//setting initial condition
function init() {
  respuesta = "";
  pista = "";
  vidas = 10;
  palabraDisplay = [];
  comprobarGanador = "";
  context.clearRect(0, 0, 400, 400);
  canvas();
  containerPistas.innerHTML = `Clue -`;
  vidasPantalla.innerHTML = `You have ${vidas} lives!`;
  setRespuesta();
  container.innerHTML = generarBtn();
  container.addEventListener("click", hacerClick);
  console.log(respuesta);
  //console.log(pistas);
}

window.onload = init();

//reset 
buttonReset.addEventListener("click", init);

//adivinar click
function adivinar(event) {
  const adivinarpalabra = event.target.id;
  const respuestaArray = respuesta.split("");
  var contador = 0;
  if (respuesta === comprobarGanador) {
    vidasPantalla.innerHTML = `YOU WIN!`;
    return;
  } else {
    if (life > 0) {
      for (var j = 0; j < respuesta.length; j++) {
        if (adivinarpalabra === respuestaArray[j]) {
          palabraDisplay[j] = adivinarPalabra;
          console.log(adivinarPalabra);
          respuestaDisplay.innerHTML = palabraDisplay.join(" ");
          comprobarGanador = palabraDisplay.join("");
          //console.log(winningCheck)
          contador += 1;
        }
      }
      if (contador === 0) {
        vida -= 1;
        contador = 0;
        animate();
      } else {
        contador = 0;
      }
      if (vida > 1) {
        vidasPantalla.innerHTML = `You have ${vida} lives!`;
      } else if (vida === 1) {
        vidasPantalla.innerHTML = `You have ${vida} life!`;
      } else {
        vidasPantalla.innerHTML = `GAME OVER!`;
      }
    } else {
      return;
    }
    console.log(palabraDisplay);

    if (respuesta === comprobarGanador) {
      vidasPantalla.innerHTML = `YOU ARE THE WINNER!`;
      return;
    }
  }
}

container.addEventListener("click", adivinar);

