const capturaRaton = document.getElementById("capturaRaton");

capturaRaton.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const coordenadas = `Posición del ratón (${x}, ${y})`;

    document.getElementById("posicion").innerHTML = coordenadas;
}
)




