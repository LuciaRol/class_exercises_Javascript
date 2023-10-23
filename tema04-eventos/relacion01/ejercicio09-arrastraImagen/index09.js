window.onload = () =>{
    // MAIN
    console.log("La página se ha cargado con éxito.");


    arrastra();
}


let moverImagen = false;
function arrastra(){
    const imagen = document.getElementById("imagen");

    imagen.addEventListener("click", (event) =>{
        moverImagen = !moverImagen;

    })

    
        document.addEventListener("mousemove", (event) =>{
            if(moverImagen){
                imagen.style.left = event.clientX - 20 + "px";
                imagen.style.top = event.clientY - 20 + "px";
            }
            
            console.log(event.screenX);
        }  
        
        )
        
        
        
}

