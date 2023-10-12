// Función para mostrar el contador
function mostrarContador(segundos) {
    if (segundos > 0) {
        console.log(segundos + ' segundos restantes');
        setTimeout(function() {
            mostrarContador(segundos - 1);
        }, 1000); // Esperar 1 segundo
    } else {
        console.log('¡Tiempo terminado!');
    }
}

// Iniciar el contador con 60 segundos
mostrarContador(60);
