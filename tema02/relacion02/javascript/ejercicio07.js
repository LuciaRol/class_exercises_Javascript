<script>
function generarTablaSeno() {
    const tablaSeno = document.getElementById("tablaSeno");

    // Limpiar la tabla antes de agregar nuevos datos
    tablaSeno.innerHTML = "";

    for (let i = 0; i <= 360; i += 10) {
        const numeroAscendente = i;
        const valorSeno = Math.sin((i * Math.PI) / 180);

        // Crear una nueva fila y celdas para la tabla
        const fila = document.createElement("tr");
        const celdaNumero = document.createElement("td");
        const celdaSeno = document.createElement("td");

        // Establecer el contenido de las celdas
        celdaNumero.textContent = numeroAscendente;
        celdaSeno.textContent = valorSeno.toFixed(4);

        // Agregar las celdas a la fila
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaSeno);

        // Agregar la fila a la tabla
        tablaSeno.appendChild(fila);
    }
}

generarTablaSeno();
</script>