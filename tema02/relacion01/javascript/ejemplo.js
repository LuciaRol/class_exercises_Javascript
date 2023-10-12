// Función asíncrona, salta una vez

setTimeOut(miFuncion,1000);

function miFuncion(){
    console.log("a");
}


// Intervalo que va saltando cada dos segundos

setInterval(miFuncion,2000);

function miFuncion(){
    console.log("a");
}