function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = combineTwoArrays(array1, array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
