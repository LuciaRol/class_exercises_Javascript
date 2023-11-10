var miListaLibros;

window.onload = () => {
    console.log("La página se ha cargado correctamente.");

    // Iniciamos la app

    // Creo los datos
    miListaLibros = new listaLectura();


    // Defino eventos
    document.getElementById("btnAlta").addEventListener("click", altaLibro);

    // creo la vista
    // miVista = new vista();

}

function altaLibro(){

    tit = document.getElementById("inputTit").values;
    aut = document.getElementById("inputAut").values;
    agn = document.getElementById("inputAño").values;

    let nuevoLibro = new libro(tit, aut, agn);
    miListaLibros.addLibro(nuevoLibro);

    actualizarVista();

}


function actualizarVista(){
    //vistaSimple("misLibros", miListaLibros.listaLibros);
    vistaCompleja("misLibros", miListaLibros.listaLibros);
}