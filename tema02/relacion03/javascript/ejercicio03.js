function localizarSubcadena(cadena, subcadena) {
    var posiciones = [];
    var inicio = 0;
    
    // Se puede hacer con un for  que vaya iterando la cadena separada.
    // Para cada una de las posiciones se usa el métod startWith
    while ((inicio = cadena.indexOf(subcadena, inicio)) !== -1) {
      posiciones.push(inicio);
      inicio += subcadena.length;
    }
    
    return posiciones;
  }
  
  function buscarSubcadena() {
    var cadena = document.getElementById("cadenaInput").value;
    var subcadena = document.getElementById("subcadenaInput").value;
    
    var posiciones = localizarSubcadena(cadena, subcadena);
    var resultadoElement = document.getElementById("resultado");
    
    if (posiciones.length === 0) {
      resultadoElement.textContent = "La subcadena no se encontró en la cadena.";
    } else {
      resultadoElement.textContent = "Apariciones de la subcadena en la cadena: " + posiciones.join(", ");
    }
  }
  