
function vistaSimple(idDiv, arrayLibros){

    document.getElementById(idDiv).innerHTML="";
    ul = document.createElement("ul");
    for (let libro of arrayLibros){
        li = document.createElement("li");
        li.innerHTML = libro.titulo;
        ul.appendChild(li);
    }

    document.getElementById(idDiv).appendChild(ul);

}


function vistaCompleja(idDiv, arrayLibros){
    for (let libro of arrayLibros){
        h1 = document.createElement("h1");
        h1.innerHTML = libro.titulo + " por " +libro.autor;
        document.getElementById(idDiv).appendChild(h1);
    }

}