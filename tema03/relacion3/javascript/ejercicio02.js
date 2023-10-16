nombres = ["Gilito", "Juanito", "Daisy", "Jaimito", "Jorgito", "Donald"];

var nombresConJ = nombres.filter(
    nombre => nombre.toUpperCase().startsWith("J"));

var inicialesNombre = nombresConJ.map(
    nombre => nombre.toUpperCase().split(" "))
    .map(inicial =>[0].join(""));
    
var resultado = inicialesNombre.sort();


