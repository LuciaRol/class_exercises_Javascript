window.onload = () =>{
    console.log ("La página se ha cargado correctamente.");

    /* bola = document.getElementById("bola");
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");

    window.requestAnimationFrame(movimientoBola);
}


// MUEVE LA BOLA
movimientoBola = () =>{
    cx = parseInt(bola.getAttribute("cx"))   
    cy = parseInt(bola.getAttribute("cy")) 

    player1_x = parseInt(player1.getAttribute("x")) 
    player1_y = parseInt(player1.getAttribute("y"))
    
    player2_x = parseInt(player2.getAttribute("x")) 
    player2_y = parseInt(player2.getAttribute("y"))

    if(cx-radio <=0 || cx+radio >= 500){
        velx*=-1;
    }

    if(cy-radio <=0 || cy+radio >= 500){
        vely*=-1;
    }

    if(reboteConJugador()){
        velx*=-1;
    } */




        const bola = document.getElementById("bola");
        const player1 = document.getElementById("player1");
        const player2 = document.getElementById("player2");
        const svg = document.querySelector("svg");
    
        let x = 50; 
        let y = 50; 
        let dx = 1; 
        let dy = 1; 
        const player1Speed = 5; 
        const player2Speed = 5; 
    
        function moveBola() {
            x += dx;
            y += dy;
        
            // Limitar los bordes del contenedor SVG
            if (x < 20 || x > 380) {
                dx *= -1;
            }
        
            if (y < 20 || y > 980) {
                dy *= -1;
            }
        
            checkCollision();
        
            bola.setAttribute("cx", x);
            bola.setAttribute("cy", y);
        
            requestAnimationFrame(moveBola);
        }
        
    
        function movePlayer1(event) {
            const key = event.key;
    
            if (key === "w" && parseInt(player1.getAttribute("y")) > 20) {
                player1.setAttribute("y", parseInt(player1.getAttribute("y")) - player1Speed);
            } else if (key === "s" && parseInt(player1.getAttribute("y")) < 950) {
                player1.setAttribute("y", parseInt(player1.getAttribute("y")) + player1Speed);
            }
        }

        function movePlayer2(event) {
            const key = event.key;
    
            if (key === "p" && parseInt(player2.getAttribute("y")) > 20) {
                player2.setAttribute("y", parseInt(player2.getAttribute("y")) - player2Speed);
            } else if (key === "l" && parseInt(player2.getAttribute("y")) < 950) {
                player2.setAttribute("y", parseInt(player2.getAttribute("y")) + player2Speed);
            }
        }


        function checkCollision() {
            // colisión con jugador 1
            if (x < 60 && y >= parseInt(player1.getAttribute("y")) && y <= parseInt(player1.getAttribute("y")) + 100) {
                dx *= -1;
            }
        
            // colisión con jugador 2
            if (x > 340 && y >= parseInt(player2.getAttribute("y")) && y <= parseInt(player2.getAttribute("y") + 100)) {
                dx *= -1;
            }
        }
        

    
        moveBola();
    
        document.addEventListener("keydown", movePlayer1);
        document.addEventListener("keydown", movePlayer2);

    

    

}










   



