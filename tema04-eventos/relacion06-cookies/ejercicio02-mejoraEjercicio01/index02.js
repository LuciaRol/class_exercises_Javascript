window.onload = () => {
    const fraseBienvenida = document.getElementById("fraseBienvenida");
    const nombreGuardado = obtenerCookie("usuario");
    const colorFondo = document.getElementById("colorFondo");
    const cambiaColorFondo = document.getElementById("changecolorFondo");
    const tamanoLetra = document.getElementById("tamanoLetra");
    const tamanoLetraNumero = document.getElementById("tamanoLetraNumero");

    const colorFondoGuardado = obtenerCookie("colorFondo");
    const tamanoLetraGuardada = obtenerCookie("tamanoLetra");

    // CAMBIAR TAMAÑO DE LETRA
    function cambiaTamanoLetra() {
        const nuevoTamano = tamanoLetra.valor + "px";
        document.body.style.tamanoLetra = nuevoTamano;
        tamanoLetraNumero.textContent = nuevoTamano;

        guardarCookie("tamanoLetra", nuevoTamano, 365);
    }

    tamanoLetra.addEventListener("input", cambiaTamanoLetra);

    if (nombreGuardado) {

        fraseBienvenida.innerHTML = `Bienvenido de nuevo, ${decodeURIComponent(nombreGuardado)}! <a href="#" id="cerrarSesion">Cerrar Sesión</a>`;
        const cerrarSesion = document.getElementById("cerrarSesion");

        cerrarSesion.addEventListener("click", function() {
            eliminarCookie("usuario");
            eliminarCookie("colorFondo");
            eliminarCookie("tamanoLetra");
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

    // BORRAR COOKIE
    function eliminarCookie(nombre) {
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }

    // OBTENER VALOR DE UNA COOKIE
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


    cambiaColorFondo.addEventListener("click", function() {
        const colorFondoNuevo = colorFondo.valor;
        document.body.style.backgroundColor = colorFondoNuevo;

        guardarCookie("colorFondo", colorFondoNuevo, 365); 
    });

  
    if (colorFondoGuardado) {
        document.body.style.backgroundColor = colorFondoGuardado;
    }
    if (tamanoLetraGuardada) {
        document.body.style.tamanoLetra = tamanoLetraGuardada;
        tamanoLetra.valor = parseInt(tamanoLetraGuardada);
        tamanoLetraNumero.textContent = tamanoLetraGuardada;
    }
};
