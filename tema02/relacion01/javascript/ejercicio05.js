// Función para actualizar el reloj
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    const reloj = `${horas}:${minutos}:${segundos}`;
    document.write("La hora es " + reloj + " horas.<br>");

    // Vuelve a llamar a la función después de un segundo
    setTimeout(actualizarReloj, 1000);
}

// Inicia el reloj
actualizarReloj();
