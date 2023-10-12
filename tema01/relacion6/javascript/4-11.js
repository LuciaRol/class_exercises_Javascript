function generarTabla() {
    var numColumnas = parseInt(prompt("Número de Columnas:"));
    var alturaCelda = parseInt(prompt("Altura de las Celdas (px):"));
    var anchuraCelda = parseInt(prompt("Anchura de las Celdas (px):"));

    var tablaHTML = "<table border='1'><tr>";

    for (var i = 0; i < numColumnas; i++) {
        tablaHTML += "<td style='height: " + alturaCelda + "px; width: " + anchuraCelda + "px;'></td>";
    }

    tablaHTML += "</tr></table>";

    document.write(tablaHTML);
}

generarTabla();



