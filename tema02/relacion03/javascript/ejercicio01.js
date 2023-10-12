 // Función para invertir una cadena
 function invierteCadena(cad_arg) {
    // El método reverse es de un array - string
    return cad_arg.split('').reverse().join('');
}

// Función para mostrar la cadena invertida en la página HTML
function mostrarCadenaInvertida() {
    var inputCadena = document.getElementById("inputCadena").value;
    var resultado = invierteCadena(inputCadena);
    document.getElementById("resultado").textContent = "Cadena invertida: " + resultado;
}
