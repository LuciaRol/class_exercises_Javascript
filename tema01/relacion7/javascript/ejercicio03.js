function countTheArgs(...args) {
    return args.length;
}


console.log(countTheArgs(1, 2, 3));  // Salida: 3
console.log(countTheArgs('a', 'b', 'c', 'd'));  // Salida: 4
console.log(countTheArgs());  // Salida: 0
