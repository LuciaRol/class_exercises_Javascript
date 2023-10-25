window.onload = () =>{
    // MAIN
    console.log("La página se ha cargado con éxito.");

    moverRaton();
    //cambiaColor();


}

function moverRaton(){
    const capturaRaton = document.getElementById("tabla");

    capturaRaton.addEventListener("mousemove", (event) => {
        if(event.ctrlKey)
            event.target.style.backgroundColor = "red";
        else if(event.shiftKey)
            event.target.style.backgroundColor = "blue";
        else if(event.altKey)
            event.style.backgoundColor =
    }

    );
}