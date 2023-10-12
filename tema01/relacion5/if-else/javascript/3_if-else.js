var edad = prompt("Introduce tu edad: ");

if(edad < 6){
    document.write("No sabes leer esto.");
}
else if(edad > 5 && edad < 12){
    document.write("Estás en primaria.");
}
else if(edad > 11 && edad < 17){
    document.write("Estás en la maldita ESO.");
}
else if(edad > 16 && edad < 22){
    document.write("Eres un yogurín!");
}
else{
    document.write("Ánimo con la carrera.");
}

// cambir document.write por alert!