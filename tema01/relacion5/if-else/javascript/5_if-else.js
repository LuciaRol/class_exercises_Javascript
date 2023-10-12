// Definir las notas de los exámenes y trabajos
var notaExamen1 = prompt("Introduce la nota de un examen: ");
var notaExamen2 = prompt("Introduce la nota de otro examen: ");
var notaTrabajo1 = prompt("Introduce la nota de un trabajo: ");
var notaTrabajo2 = prompt("Introduce la nota de otro trabajo: ");

// Calcular la media de notas teniendo en cuenta los porcentajes
var porcentajeExamenes = 0.75;
var porcentajeTrabajos = 0.25;

var promedioExamenes = (notaExamen1 + notaExamen2) / 2;
var promedioTrabajos = (notaTrabajo1 + notaTrabajo2) / 2;

var notaFinal = (promedioExamenes * porcentajeExamenes) + (promedioTrabajos * porcentajeTrabajos);

// Comprobar si la nota final es superior a 5 y todas las notas son mayores o iguales a 4.5
if (notaFinal >= 5 && notaExamen1 >= 4.5 && notaExamen2 >= 4.5 && notaTrabajo1 >= 4.5 && notaTrabajo2 >= 4.5) {
    console.log("¡Felicidades! Has aprobado la asignatura.");
} else {
    console.log("Lo siento, no has aprobado la asignatura.");
}
