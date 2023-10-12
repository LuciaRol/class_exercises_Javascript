function squareAndSum(...args) {
    const squaredValues = args.map(arg => Math.pow(arg, 2));
    const sum = squaredValues.reduce((total, currentValue) => total + currentValue, 0);
    return sum;
}

console.log(squareAndSum(1, 2, 3));  // Output: 14 (1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14)
console.log(squareAndSum(4, 5, 6));  // Output: 77 (4^2 + 5^2 + 6^2 = 16 + 25 + 36 = 77)
console.log(squareAndSum(2));  // Output: 4 (2^2 = 4)
console.log(squareAndSum());  // Output: 0 (No arguments)

