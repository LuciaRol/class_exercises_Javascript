const capturaRaton = document.getElementById("capturaRaton");

capturaRaton.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const coordenadas = `Coordenadas del ratón: (x = ${x}, y = ${y}).`;

    document.getElementById("posicion").innerHTML = coordenadas;
}
)




