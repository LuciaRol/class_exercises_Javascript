windows.onload = () => {
    console.log("La página se ha cargado correctamente.")

}

function hayCookie(){
    document.cookie = nombreUsuario;
    if(document.cookie = ""){
        nombre = prompt("Introduce tu nombre: ");
    }
}


