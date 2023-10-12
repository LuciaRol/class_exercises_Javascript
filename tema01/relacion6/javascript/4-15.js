// Número a adivinar (jugador 1 introduce este número)
var num_adivinar = parseInt(prompt("Jugador 1: Introduce un número para que el Jugador 2 lo adivine:"));

var intentos = 0;
var num;

while (true) {
    num = parseInt(prompt("Jugador 2: Adivina el número:"));
    intentos++;

    if (num === num_adivinar) {
        alert("¡Correcto! Has adivinado el número en " + intentos + " intentos.");
        break;
    } else if (num < num_adivinar) {
        alert("El número es mayor.");
    } else {
        alert("El número es menor.");
    }
}

