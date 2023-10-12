/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

x = parseInt(prompt("Introduce un numero: "));
min = parseInt(prompt("Introduce un minimo: "));
max = parseInt(prompt("Introduce un maximo: "));

function inRange(x, min, max){
   if(x >= min && x <= max){
    return true;
   } else {
    return false;
   }
}

alert(inRange(x,min,max));