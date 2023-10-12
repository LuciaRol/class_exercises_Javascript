// Número máximo para las tablas de multiplicar
var maximo = 10;

// Bucle externo para las tablas
for (var i = 1; i <= maximo; i++) {
    document.write("<h2>Tabla del " + i + "</h2>");

    // Bucle interno para multiplicar
    for (var j = 1; j <= maximo; j++) {
        var resultado = i * j;
        document.write(i + " x " + j + " = " + resultado + "<br>");
    }

    // Separador entre tablas
    document.write("<hr>");
}
