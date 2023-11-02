window.onload = () => {
    console.log ("La página se ha cargado correctamente.")
}



formFicheros = document.getElementById("formFicheros");
botonAdjuntar = document.getElementById("botonAdjuntar");

contadorFicheros = 1;

botonAdjuntar.addEventListener("click", function() {
    contadorFicheros++;

    nuevoFichero = document.createElement("input");
    nuevoFichero.type = "file";
    nuevoFichero.name = "archivo" + contadorFicheros;
    nuevoFichero.id = "archivo" + contadorFicheros;
    formFicheros.insertBefore(nuevoFichero, botonAdjuntar);
    });

  