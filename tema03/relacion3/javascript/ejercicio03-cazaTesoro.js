// Caza del tesoro

//Hacer una función para poner el tesoro en una matriz

// https://github.com/eriFelaP/JdalbeyProgrammingPracticeProblems

function colocarTesoro(mapaTesoro){
    filaActual = 0; 
    columnaActual = 0;

    let celdasVisitadas = conjunto();
    
    while(true){
        celdasVisitadas.add('${filaActual}, ${columnaActual}');
    }
}

























/**
 * function findTreasure(treasureMap) {
    // Initialize the current position
    let currentRow = 0;
    let currentCol = 0;

    // Keep track of visited cells
    let visited = new Set();

    while (true) {
        // Mark the current cell as visited
        visited.add(`${currentRow},${currentCol}`);

        // Output the current cell
        console.log(`Visiting cell (${currentRow + 1},${currentCol + 1})`);

        // Check if the current cell contains the treasure
        if (treasureMap[currentRow][currentCol] === (currentRow + 1) * 10 + (currentCol + 1)) {
            console.log(`Treasure found at cell (${currentRow + 1},${currentCol + 1})`);
            break;
        }

        // Get the next clue
        let nextClue = treasureMap[currentRow][currentCol];

        // Calculate the row and column from the next clue
        let nextRow = Math.floor(nextClue / 10) - 1;
        let nextCol = (nextClue % 10) - 1;

        // Update the current position
        currentRow = nextRow;
        currentCol = nextCol;

        // Check if we have visited this cell before
        if (visited.has(`${currentRow},${currentCol}`)) {
            console.log("Stuck in a loop, cannot find the treasure!");
            break;
        }
    }
}

// Define the treasure map as a 2D array
let treasureMap = [
    [11, 34, 42, 21, 41],
    [24, 43, 14, 31, 22],
    [32, 23, 44, 13, 33],
    [15, 12, 25, 35, 45],
    [54, 53, 52, 51, 55]
];

// Call the function with the treasure map
findTreasure(treasureMap);

 */
