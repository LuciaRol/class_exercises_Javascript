window.onload = () =>{
    // MAIN
    console.log("La página se ha cargado con éxito.");

    muestraCoordenadasRaton();
    //cambiaColor();


}

function muestraCoordenadasRaton(){
    const capturaRaton = document.getElementById("tabla");

    capturaRaton.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const coordenadas = `Coordenadas del ratón: (x = ${x}, y = ${y}).`;

        console.log(coordenadas);
    }   
    );
}

/**
let control = false;
let shift = false;

function cambiaColor(){
    const celda = document.getElementByID("tabla");

    celda.addEventListener("keydown", (event)=>{
    if(event == "ctrlKey"){
        control = true;
        event.target.style.backgroundColor = "red";
    }
    else if(event == "shiftKey"){
        shift = true;
        event.target.style.backgroundColor = "blue";
    }
}
    )

}
 */

