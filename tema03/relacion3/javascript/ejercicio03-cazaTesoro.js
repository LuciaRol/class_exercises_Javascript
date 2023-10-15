// Create a 5x5 array for the treasure map
mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
  ];
  

  
valor_introducido =  11;

// cambiar el parametro pasado a mapa
function posicionInicial(mapa, valor_introducido){
    num_a_string = valor_introducido.toString().split("",2);
    posicion_x_original = num_a_string[0] - 1
    posicion_y_original = num_a_string[1] - 1
    return mapa[posicion_x_original][posicion_y_original]
}


//while(valor_introducido != posicionTesoro(valor_introducido)){
//  valor_introducido = posicionTesoro(valor_introducido);
// con el for tenemos el límite de saltos

limite_saltos = 10;
function solucionJuego(limite_saltos, mapa, valor_introducido){
    for(let i=0; i< limite_saltos; i++){
        // for (valor of array)
        // console.log (""+valor)
        if(valor_introducido == posicionInicial(mapa, valor_introducido)){
            return "puto tesoro" + valor_introducido;
        i = limite_saltos;
        }else{
        valor_introducido = posicionInicial(mapa, valor_introducido);
        }
        
    }
    if(valor_introducido != posicionInicial(mapa, valor_introducido)){
        return "no esta el tesoro";
    }
    
}

document.write(solucionJuego(limite_saltos, mapa, valor_introducido));


//}

// document.write(posicionTesoro(valor_introducido));





