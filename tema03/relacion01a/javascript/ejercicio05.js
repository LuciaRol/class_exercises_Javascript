/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} lista_colores - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

lista_colores = ["cyan", "amarillo", "magenta", "blanco", "negro"];
length = parseInt(prompt("Introduce un numero: "));

function getRandomColorSequence(colores, length){
    arrayFinal = [];
    
    for (let i = 0; i < length; i++){
        numAleatorio = Math.floor(Math.random() * colores.length);
        let color = colores[numAleatorio];
        arrayFinal.push(color);
    }
    //numAleatorio = Math.floor(Math.random() * colores.length);
    //.push(colores[numAleatorio]);
    return arrayFinal;
}

document.write(getRandomColorSequence(lista_colores, length));