function analizarCadena(cadena) {
    if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    } else {
      return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
  }
  

  var resultadoElement = document.getElementById("resultado");
  
  var cadena = prompt();
  resultadoElement.textContent = analizarCadena(cadena);
  

 