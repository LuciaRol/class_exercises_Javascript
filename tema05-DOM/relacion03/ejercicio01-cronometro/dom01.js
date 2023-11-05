window.onload = () => {

    // DECLARACIÓN DE VARIABLES 
    segundos = 0;
    agregarSegundos = document.getElementById("segundos")
    milisegundos = 0;
    agregarMilisegundos = document.getElementById("milisegundos")
    
    btnStart = document.getElementById("btnStart");
    btnStop = document.getElementById("btnStop");
    btnReset = document.getElementById("btnReset");

    intervaloTiempo;

}

btnStart = ("click", () =>{
    vaciarTiempo(tiempo);
    intervaloTiempo = setIntervaloTiempo(comenzarTiempo, 10);
})

btnStop = ("click", () =>{
    vaciarTiempo(tiempo);

})

btnReset = ("click", () =>{
    milisegundos = "";

})


