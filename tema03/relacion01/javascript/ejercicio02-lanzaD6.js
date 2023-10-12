
function lanzaDado() {
            // Genera un número aleatorio entre 1 y 6
            let resultado = Math.floor(Math.random() * 6) + 1;
            
            // Muestra el resultado en la página
            document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        }
