// Función para crear potencias de modo recursivo

n = parseInt(prompt("Introduce un número entero: "));

function factorial(n){
    if(n == 1){
        resultado = 1;
        return resultado;
    } else {
        resultado = n*factorial(n-1);
        return resultado;
    }
}

document.getElementById('resultado').innerHTML = factorial(n);


    
