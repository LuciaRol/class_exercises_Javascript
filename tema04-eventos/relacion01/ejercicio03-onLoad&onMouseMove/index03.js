window.onload = () =>{
    // MAIN
    console.log("La página se ha cargado con éxito.");

    muestraCoordenadasRaton();
    cambiaColor();


}

function muestraCoordenadasRaton(){
    const capturaRaton = document.getElementById("tabla");

    capturaRaton.addEventListener("onmousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const coordenadas = `Coordenadas del ratón: (x = ${x}, y = ${y}).`;

        console.log(coordenadas);
    }
    );
}

let control = false;
let shift = false;

function cambiaColor(){
    const celda = document.getElementByID("tabla");

    celda.addEventListener("mouseover", (event)=>{
    if(event == "Control"){
        control = true;
        document.body.style.backgroundColor = "purple";
    }
    else if(event == "Shift"){
        shift = true;
        document.body.style.backgroundColor = "gold";
    }
}
    )

}

