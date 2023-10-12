var localidad = prompt("Dónde vives: ");
var edad = prompt("Introduce tu edad: ");

if(localidad.toUpperCase() == "MADRID" && (edad >17 && edad <31)){
    document.write("Puedes acceder al carnet de empresarios emprendedores.");
}