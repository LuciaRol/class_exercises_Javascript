function obtengoPosicion(coordenadas){

    let lat = coordenadas.coords.latitude;
    let lon = coordenadas.coords.longitude;

    // setView(latitud, longitud, zoom)
    var map = L.map('map').setView([lat, lon], 13);
    // var map = L.map('map').setView(coordenadas.coords.latitude, coordenadas.coords.longitude);

    // Esto es la atribución, sin ella no funciona el código en Leaflet
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marcador
    /**
    L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
     */

    // Área definida
    var circle = L.circle([lat, lon], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtengoPosicion);
}
else
    console.log("Geolocalizacion no soportada.");
