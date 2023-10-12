var posicionInicio = null;

function obtengoPosicion(coordenadas) {
    let latitud, longitud = coordenadas.coords;
    console.log (`Latitud: ${latitud}, Longitud: ${longitud}`);
    
    if (posicionInicio) {
        var distancia = calcularDistancia(posicionInicio, {latitud, longitud});
        console.log (`Distancia recorrida: ${distancia.toFixed(2)} meters`);
    }
    
    posicionInicio = {latitud, longitud};
}

function calcularDistancia(inicioPos, finalPos) {
    let radioTierra = 6371000; 
    let lat1 = pasaARadianes(inicioPos.latitude);
    let lat2 = pasaARadianes(finalPos.latitude);
    let deltaLat = pasaARadianes(finalPos.latitude - inicioPos.latitude);
    let deltaLon = pasaARadianes(finalPos.longitude - inicioPos.longitude);

    let a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distancia = radioTierra * c;

    return distancia;
}

function pasaARadianes(grados) {
    return grados * (Math.PI / 180);
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(obtengoPosicion);
} else {
    console.log("Geolocalización no soportada.");
}
