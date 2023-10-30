windows.onload = () =>{
    console.log("La página se ha cargado correctamente.")

    crearCookie();
    leerCookie();
    borrarCookie();
    
}


// CREAR COOKIE
function crearCookie(identificador, valor, fechaExpiracion) {
    const cookie = `${identificador}=${valor};`;
    
    if (fechaExpiracion) {
        // expires contiene la fecha y hora en la que se considerará la respuesta caducada.
        cookie += `expires=${fechaExpiracion.toString()};`;
    }
    
    document.cookie = cookie;
}

// LEER COOKIE
function leerCookie(identificador) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        // trim() elimina los espacios en blanco en ambos extremos del string
        const cookie = cookies[i].trim();
        // split() divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en subcadenas.
        const partesCookies = cookie.split('=');
        if (partesCookies[0] === identificador) {
            return partesCookies[1];
        }
    }
    return null;
}

// BORRAR COOKIE
function borrarCookie(identificador) {
    document.cookie = `${identificador}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}
