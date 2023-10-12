// Solicitar al usuario el número de columnas, número de filas, altura y anchura de las celdas
var numColumnas = parseInt(prompt("Introduce el número de columnas:"));
var numFilas = parseInt(prompt("Introduce el número de filas:"));
var alturaCelda = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
var anchuraCelda = parseInt(prompt("Introduce la anchura de las celdas (en píxeles):"));

// Crear la tabla HTML
var tablaHTML = "<table border='1'>";

// Bucle para las filas
for (var i = 0; i < numFilas; i++) {
    tablaHTML += "<tr>";

    // Bucle para las columnas
    for (var j = 0; j < numColumnas; j++) {
        tablaHTML += "<td style='height: " + alturaCelda + "px; width: " + anchuraCelda + "px;'></td>";
    }

    tablaHTML += "</tr>";
}

tablaHTML += "</table>";

// Mostrar la tabla en la página web
document.write(tablaHTML);
