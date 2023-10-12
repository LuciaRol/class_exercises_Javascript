// La geolocalización solo funciona en https

function obtengoPosicion(coordenadas){
    console.log(coordenadas);
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtengoPosicion);
}
else
    console.log("Geolocalizacion no soportada.");


// watchPosition sirve para lo mismo, pero se lanza en el móvil.
    /**
    function obtengoPosicion(coordenadas){
        console.log(coordenadas);
    }
    
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(obtengoPosicion);
    }
    else
        console.log("Geolocalizacion no soportada");
     * 
     */
    

