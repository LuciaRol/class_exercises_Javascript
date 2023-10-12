function addOnlyNums(...args) {
  return args
      .filter(arg => typeof arg === 'number' && !isNaN(arg))
      .reduce((total, currentValue) => total + currentValue, 0);
}


console.log(addOnlyNums(1, 2, 3, '4', '5', 'hello'));  // Output: 6 (1 + 2 + 3)
console.log(addOnlyNums(10, '20', 30, '40', 'world'));  // Output: 70 (10 + 30 + 30)
console.log(addOnlyNums('foo', 'bar', 'baz'));  // Output: 0 (No numeric values)

 