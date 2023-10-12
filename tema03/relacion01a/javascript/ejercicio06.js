/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */




function getRockPaperScissor(){
    let opciones = ["Piedra", "Papel", "Tijera"];
    numero = Math.floor(Math.random() * opciones.length);
    return opciones[numero];    
}

document.write(getRockPaperScissor());