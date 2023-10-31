Window.onload = () =>{
    document.getElementsByTagName("button")[0].addEventListener("click", () =>{
        console.log("Cambiame");
        input = document.getElementById("opcion");
        texto = input.value;
        nuevoLI = document.createElement("li");
        nuevoLI.inner = texto;
        nuevoLI.addEventListener("click", borrarLI)
    })
}