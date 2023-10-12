var anchoCelda = parseInt(prompt("Introduce el ancho de la celda (en píxeles):"));
var tableroHTML = "<table border='1' cellpadding='0' cellspacing='0'>";

for (let i = 0; i < 8; i++) {
    tableroHTML += "<tr>";

    for (let j = 0; j < 8; j++) {
        let colorCelda = (i + j) % 2 === 0 ? "white" : "black";
        tableroHTML += "<td style='width: " + anchoCelda + "px; height: " + anchoCelda + "px; background-color: " + colorCelda + ";'></td>";
    }

    tableroHTML += "</tr>";
}

tableroHTML += "</table>";

document.write(tableroHTML);
