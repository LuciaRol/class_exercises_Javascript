window.onload = () => {
    console.log("La página se ha cargado correctamente.")

    contarEnlaces();
    penultimoEnlace();
    enlacesGoogle();
    enlacesTercerParrafo();

}

enlaces = document.querySelectorAll("a");


// CONTAR EL NÚMERO DE ENLACES DE UNA WEB

contarEnlaces = () => {
    console.log("Número de enlaces en la página: " + enlaces.length);
}
 

// MOSTRAR LA DIRECCIÓN A LA QUE LLEVA EL PENÚLTIMO ENLACE
penultimoEnlace = () => {
    // se hace un if para verificar si hay más de un enlace en la web
    if (enlaces.length >= 2) {
        penultimoEnlace = enlaces[enlaces.length - 2];
        console.log("El penúltimo enlace lleva a: " + penultimoEnlace.href);
    } else {
        console.log("Solo existe un enlace en la página.");
    }
}


// MOSTRAR EL NÚMERO DE ENLACES QUE LLEVAN A GOOGLE
enlacesGoogle = ()=> {
    var enlaces_a_google = 0;
for (var i = 0; i < enlaces.length; i++) {
if (enlaces[i].href === "https://www.google.com/") {
    enlaces_a_google++;
}
}
console.log("Número de enlaces que enlazan a Google: " + enlaces_a_google);

}


// CONTAR EL NÚMERO DE ENLACES DEL TERCER PÁRRAFO
enlacesTercerParrafo = () =>{
   
tercerParrafo = document.getElementsByTagName("p")[2];
numeroEnlaces = tercerParrafo.getElementsByTagName("a");

console.log("Número de enlaces en el tercer párrafo: " + numeroEnlaces.length);

}

