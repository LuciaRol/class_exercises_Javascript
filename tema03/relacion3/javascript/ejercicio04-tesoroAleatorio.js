/**
 * mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
  ];
 */




filas = 5;
columnas = 5;
mapa = [];
function mapaAleatorio(filas, columnas, mapa){
    
    if(filas < 5){
        filas = 5;
    }

    if(columnas < 5){
        columnas = 5;
    }
        for (let i= 0; i < filas; i++){
            temp = []
                for(let j = 0; j< columnas; j++){
                    numero1 = (Math.floor(Math.random() * filas) + 1).toString();
                    numero2 = (Math.floor(Math.random() * columnas) + 1).toString();
                    temp[j] = numero1.concat(numero2);
                }
            mapa[i] = temp
        }
        return mapa;
    }


    function generarTesoro(filas, columnas, mapa){

        if(filas < 5){
            filas = 5;
        }
    
        if(columnas < 5){
            columnas = 5;
        }

        numero1 = (Math.floor(Math.random() * filas) + 1)
        numero2 = (Math.floor(Math.random() * columnas) + 1);
        mapa[numero1-1][numero2-1] =  numero1.toString().concat(numero2.toString());
        
        return mapa;
    }
    



document.write(generarTesoro(filas, columnas, mapa))

