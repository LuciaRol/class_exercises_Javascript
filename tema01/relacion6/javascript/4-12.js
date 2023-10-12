function generarTabla() {
    var numColumnas = parseInt(prompt("Número de Columnas:"));
    var alturaCelda = parseInt(prompt("Altura de las Celdas (px):"));
    var anchuraCelda = parseInt(prompt("Anchura de las Celdas (px):"));
    var color = 'blak';

    var tablaHTML = "<table border='1'><tr>";

    for (var i = 0; i < numColumnas; i++) {
        if(i%200) {
            color='white';
        }else{
            color='black';
        }
        tablaHTML += "<td bg color =" + color +  "style=height: " + alturaCelda + "px; width: " + anchuraCelda + "px;'></td>";
    }

    tablaHTML += "</tr></table>";

    document.write(tablaHTML);
}

generarTabla();
