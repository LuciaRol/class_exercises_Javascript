// Create a 5x5 array for the treasure map
mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
  ];
  

  
valor_introducido =  parseInt(prompt("Introduce las coordenadas de inicio: "));

// cambiar el parametro pasado a mapa
function posicionTesoro(valor_introducido){
  num_a_string = valor_introducido.toString().split("",2);
  posicion_x_original = num_a_string[0] - 1
  posicion_y_original = num_a_string[1] - 1
  return mapa[posicion_x_original][posicion_y_original]
}


//while(valor_introducido != posicionTesoro(valor_introducido)){
//  valor_introducido = posicionTesoro(valor_introducido);
// con el for tenemos el límite de saltos

limite_saltos = parseInt(prompt("Introduce el número de saltos: "));
for(let i=0; i< limite_saltos; i++){
    if(valor_introducido == posicionTesoro(valor_introducido)){
      document.write("Has encontrado el tesoro en la posicion " + valor_introducido  + ".<br>");
      i = limite_saltos;
    }else{
      document.write("Jódete, el tesoro no está en la posicion " + valor_introducido + ", ahora vamos a probar la posición " + posicionTesoro(valor_introducido) + ".<br>");
      valor_introducido = posicionTesoro(valor_introducido);
    
    }
}


//}

// document.write(posicionTesoro(valor_introducido));





