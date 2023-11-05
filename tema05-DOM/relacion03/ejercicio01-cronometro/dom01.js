window.onload = () => {

    console.log("La página se ha cargado correctamente.")

    // DECLARACIÓN DE VARIABLES 
    segundos = 0;
    agregarSegundos = document.getElementById("segundos")
    milisegundos = 0;
    agregarMilisegundos = document.getElementById("milisegundos")
    
    btnStart = document.getElementById("btnStart");
    btnStop = document.getElementById("btnStop");
    btnReset = document.getElementById("btnReset");

    intervaloTiempo;


// CALCULA EL TIEMPO TRANSCURRIDO

function calcula_tiempo_transcurrido(){
    milisegundos++;
    if(milisegundos <= 9){
        agregarMilisegundos.innerHTML = "0" + milisegundos;
    }
    if (milisegundos > 9){
        agregarMilisegundos.innerHTML = "0" + milisegundos;
    }

    if(milisegundos > 99){
        segundos++;
        agregarSegundos.innerHTML = "0" + segundos;
        segundos = 0;
        agregarMilisegundos.innerHTML = "0" + 0;
    }
    if (segundos < 9){
        agregarSegundos.innerHTML = segundos;
    }
}


btnStart = ("click", () =>{
    intervaloTiempo = setIntervaloTiempo(calcula_tiempo_transcurrido);
})

btnStop = ("click", () =>{
    vaciarTiempo(intervaloTiempo);

})

btnReset = ("click", () =>{
    vaciarTiempo(intervaloTiempo);
    milisegundos = "00";
    segundos = "00";
    agregarSegundos.innerHTML = segundos;
    agregarMilisegundos.innerHTML = milisegundos;

})


}


