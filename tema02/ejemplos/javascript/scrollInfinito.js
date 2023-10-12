window.addEventListener('scroll',scrollInfinito);

function scrollInfinito(){

    let altoScroll = document.documentElement.scrollHeight;
    let posicionScroll = document.documentElement.scrollTop;
    let alturaVentana = document.documentElement.clientHeight;

    if((posicionScroll+alturaVentana)>(altoScroll-10))
        document.getElementById("etiqueta").innerHTML += "Salta scroll<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
}