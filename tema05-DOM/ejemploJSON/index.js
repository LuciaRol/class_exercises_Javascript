var modeloDatos = {
    "notas": []
};

window.onload = () => {

    // definir eventos
    document.getElementById("boton").addEventListener("click", nuevaNota);

    // leer de local storage
    if (window.localStorage.getItem("notas")) {
        console.log("EXISTE");
        modeloDatos = JSON.parse(window.localStorage.getItem("notas"));
        muestraNotas(modeloDatos.notas);

    } else {
        console.log("NO EXISTE");
    }

    function nuevaNota() {
        var textoNota = document.getElementById("input").value;
        document.getElementById("input").value = "";

        // crea objeto nota
        var fecha = new Date().toLocaleString();
        var objetoNota = {
            "titulo": textoNota,
            "fecha": fecha
        };

        modeloDatos.notas.push(objetoNota);

        // actualiza local storage
        window.localStorage.setItem("notas", JSON.stringify(modeloDatos));

        // actualiza la vista
        muestraNotas(modeloDatos.notas);

        console.log(textoNota);
    }

    // vista
    function muestraNotas(arrayNotas) {
        var ul = document.getElementById("ul");
        ul.innerHTML = "";
        for (var nota of arrayNotas) {
            var li = document.createElement("li");
            li.innerHTML = nota.titulo + " - " + nota.fecha;
            ul.appendChild(li);
        }
    }
};
