/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */


number = parseInt(prompt("Introduce un número entro: "));
percentage = parseInt(prompt("Introduce un porcentaje: "));

function getPercenteage(number, percentage){
    resultado = (number*percentage)/100;
    return resultado;
}

document.write(getPercenteage(number, percentage));

