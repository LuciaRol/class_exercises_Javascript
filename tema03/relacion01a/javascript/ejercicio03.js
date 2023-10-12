/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

numbers = [4, 10, 87, 21, 99, 60];


function getBiggestNumber(x){
    x.sort();
    x.reverse();
    return x[0];
}

document.write(getBiggestNumber(numbers))