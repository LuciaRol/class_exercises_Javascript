function lanzarDado() {
    const resultados = [0, 0, 0, 0, 0, 0]; // Inicializar un arreglo para contar las ocurrencias de cada número

    for (let i = 0; i < 6000; i++) {
        // Genera un número aleatorio entre 1 y 6
        const resultado = Math.floor(Math.random() * 6) + 1;
        resultados[resultado - 1]++; // Incrementa el contador correspondiente
    }

    // Muestra el número de ocurrencias de cada valor
    for (let i = 0; i < 6; i++) {
        const numero = i + 1;
        const ocurrencias = resultados[i];
        console.log(`Número ${numero}: ${ocurrencias} ocurrencias`);
    }
}