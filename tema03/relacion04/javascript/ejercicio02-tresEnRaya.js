class TresEnRaya{

    constructor(x, y){
        this.tablero = this.generarTablero();
        this.valor_introducido = valor_introducido;
        this.x = x;
        this.y = y;
    }
        // Genera la solución
        generarTablero() {
            const tablero = [];
            const x = 3;
            const y = 3;
            let contador = 1;
            
            for (let i = 0; i < x.length; i++) {
              const fila = [];
              for (let j = 0; j < y.length; j++) {
                fila.push(contador++);
              }
              tablero.push(fila);
            }
            return tablero;
          }
}


class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        
    }

    ponerFicha(){
        coordenadasFicha = coordenadasIntroducidas.split("",2);
        
        x = coordenadasIntroducidas[0] - 1;
        y = coordenadasIntroducidas[1] - 1;


    }

}

coordenadasIntroducidas = parseInt(prompt("Introduce las coordenadas de la casilla donde quieres dejar la ficha: " + coordenadasFicha));