
        const imagenes = [
            "imagen1.jpg",
            "imagen2.jpg",
            "imagen3.jpg"
        ];

        // Función para generar un número aleatorio entre 0 y 2 (índices del array)
        function generarNumeroAleatorio() {
            return Math.floor(Math.random() * 3);
        }

        // Obtener un número aleatorio y establecer la imagen correspondiente
        const numeroAleatorio = generarNumeroAleatorio();
        const imagenAleatoria = document.getElementById("imagenAleatoria");
        imagenAleatoria.src = imagenes[numeroAleatorio];
