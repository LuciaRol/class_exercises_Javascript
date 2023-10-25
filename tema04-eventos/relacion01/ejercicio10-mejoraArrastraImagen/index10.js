window.onload = () =>{
    console.log("La página se ha cargado con éxito.");

    arrastra();
}

let moverImagen = false;
function arrastra(){
    const imagenes = document.querySelectorAll("imagen");
    imagenSeleccionada = null;
    offsetLeft = 0;
    offsetTop = 0;

    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", (event) => {
            moverImagen = !moverImagen;
            imagenSeleccionada = event.target;
            offsetLeft = event.clientX -event.target.offsetLeft;
            offsetTop = event.clientY -event.target.offsetTop;
        })
    })
    
        document.addEventListener("mousemove", (event) =>{
            if(moverImagen){
                imagenSeleccionada.target.style.left = event.clientX - offsetLeft + "px";
                imagenSeleccionada.target.style.top = event.clientY - offsetTop + "px";
            }
            
            console.log(event.screenX + event.screenY);

        }  
        )      
}


// se hace parecido pero con el event.target

