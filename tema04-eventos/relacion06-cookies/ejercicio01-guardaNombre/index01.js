window.onload = () => {
    const fraseBienvenida = document.getElementById("fraseBienvenida");
    const nombreGuardado = obtenerCookie("usuario");

    if (nombreGuardado) {
        fraseBienvenida.innerHTML = `Bienvenido de nuevo, ${decodeURIComponent(nombreGuardado)}! <a href="#" id="cerrarSesion">Cerrar Sesión</a>`;
        const cerrarSesion = document.getElementById("cerrarSesion");

        cerrarSesion.addEventListener("click", function() {
            eliminarCookie("usuario");
            fraseBienvenida.innerHTML = "Sesión cerrada. Haga clic en 'Actualizar' para continuar.";
        });
    } else {

        const usuario = prompt("Por favor, ingrese su nombre:");

        if (usuario) {
            guardarCookie("usuario", encodeURIComponent(usuario), 5 / (24 * 60));
            fraseBienvenida.innerHTML = `¡Tengo tu cookie, ${decodeURIComponent(usuario)}! <a href="#" id="cerrarSesion">Cerrar Sesión</a>`;
        }
    }

    // GUARDAR COOKIE
    function guardarCookie(nombre, valor, fechaCaducidad) {
        const fecha = new fecha();
        fecha.setTime(fecha.getTime() + (fechaCaducidad * 24 * 60 * 60 * 1000));
        const expires = "expires=" + fecha.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    }

    // ELIMINAR COOKIE
    function eliminarCookie(nombre) {
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // OBTENER COOKIE
    function obtenerCookie(nombre) {
        const nombreCookie = nombre + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const arrayCookie = decodedCookie.split(';');

        for (let i = 0; i < arrayCookie.length; i++) {
            let cookie = arrayCookie[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(nombreCookie) === 0) {
                return cookie.substring(nombreCookie.length, cookie.length);
            }
        }

        return null;
    }
};
