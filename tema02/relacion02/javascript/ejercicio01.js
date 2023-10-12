// 1. Generar número aleatorio entre 0 y 1

var numeroAleatorio1 = Math.random();

document.getElementById("numRandom1").textContent = numeroAleatorio1;

// 2. Generar número aleatorio entre 100 y 200.

var numeroAleatorio2 = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

document.getElementById("numRandom2").textContent = numeroAleatorio2;


// 3. Generar número aleatorio pidiendo dos valores al usuario. Usa getElementById
// Este no me funciona

function generarNumeroAleatorio() {
    var minimo = parseInt(prompt);
    var maximo = parseInt(prompt);

    if (!isNaN(minimo) && !isNaN(maximo) && minimo < maximo) {
        var numeroAleatorio3 = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        document.getElementById("numRandom3").textContent = numeroAleatorio3;
    } else {
        alert("El mínimo debe ser menor que el máximo y ambos deben ser números.");
    }
}






