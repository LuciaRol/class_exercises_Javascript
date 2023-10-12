var contador = 0;
setTimeout(mifunc,1000);

function mifunc(){
    document.getElementById("etiqueta").innerHTML = contador;
    contador++;
    setTimeout(mifunc,1000);
}

// document.getElementById("idTag").innerHTML = " "