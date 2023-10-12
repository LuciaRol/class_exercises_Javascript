function generarTabla() {
    var numColumnas = parseInt(prompt("Número de Columnas:"));
    var alturaCelda = parseInt(prompt("Altura de las Celdas (px):"));
    var anchuraCelda = parseInt(prompt("Anchura de las Celdas (px):"));

    var tablaHTML = "<table border='1'><tr>";

    var i = 0;
    while (i < numColumnas) {
        tablaHTML += "<td style='height: " + alturaCelda + "px; width: " + anchuraCelda + "px;'></td>";
        i++;
    }

    tablaHTML += "</tr></table>";

    document.write(tablaHTML);
}

generarTabla();
// no está terminado