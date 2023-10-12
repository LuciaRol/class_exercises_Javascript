// Función que muestre factoriales en forma de tabla

n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function factorial(n){
    for (i = 0; i < n.lenght; i++){
        resultado = n*factorial(n-1);
        return resultado;
    }
}

/**
 * function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }

        var table = document.querySelector('table');
        
        for (var i = 1; i <= 10; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.textContent = i;
            cell2.textContent = factorial(i);
        }
 */





