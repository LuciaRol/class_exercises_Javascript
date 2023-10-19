class Juego{

    CASILLA_VACIA = null;

    constructor(x, y){
        this.tablero = this.generarTablero();
        this.valor_introducido = valor_introducido;
        this.x = x;
        this.y = y;
    }
        // Genera la solución
        generarTablero(x, y) {
            const tablero = [];
            let contador = 1;
          
            for (let i = 0; i < x.length; i++) {
              const fila = [];
              for (let j = 0; j < y.length; j++) {
                fila.push(contador++);
              }
              tablero.push(fila);
            }
          
            tablero[4][4] = null;
    
            return tablero;
          }
          

        // Colocar casilla vacía en su inicio   
        
        valor_introducido =  25;
        inicioCasillaVacia(x, y, tablero){
            num_a_string = valor_introducido.toString().split("",2);
            x = num_a_string[0] - 1;
            y = num_a_string[1] - 1;
          
            return tablero[x][y];
        }


        // Desorganiza el tablero
        barajarTablero(tablero){
            tablero_desordenado = tablero.sort(function() {return Math.random()});
            return tablero_desordenado;
            
        }

        statusTablero() {
            console.log(`tablero: ${this.tablero}`);
    
        }

    
}


puzzle = new Juego();
puzzle.statusTablero();


