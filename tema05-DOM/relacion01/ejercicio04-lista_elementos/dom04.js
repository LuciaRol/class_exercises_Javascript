window.onload = () => {
    console.log("La página se ha cargado correctamente");

    const boton = document.getElementsByTagName("boton")[0];
    const lista = document.getElementById("lista");
    const input = document.getElementById("elemento");

    boton.getElementsByTagName("button")[0].addEventListener("click", () => {
        console.log("Añadir");
        input = document.getElementById("elemento");
        texto = input.value;
        nuevoLI = document.createElement("li");
        nuevoLI.innerHTML = texto;
        lista.appendChild("click", nuevoLI);
    });
};

