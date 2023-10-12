/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

length = parseInt(prompt("Introduce un numero: "));
function getRockPaperScissorRandomSequence(length){
    opciones = ["Piedra", "Papel", "Tijera"];
    secuencia = [];
    for (let i = 0; i < length; i++){
        numero = Math.floor(Math.random() * opciones.length);
        secuencia.push(opciones[numero]);
    }
    return secuencia;  
}

document.write(getRockPaperScissorRandomSequence(length));