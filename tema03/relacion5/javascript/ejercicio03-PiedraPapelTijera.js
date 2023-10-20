const opcion = ["piedra", "papel", "tijera"];

class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
        this.opcion = undefined;
    }

    escogerOpcion(opcion){
        this.opcion = opcion;
    }

    getOpcion(){
        return this.opcion;
    }
}

class JugadorVirtual extends Jugador{
    constructor(){
        super("PC");
    }

    opcionAleatoria(){

        numeroAlatorio = Math.floor(Math.random()*3);
        this.opcion = opcion[numeroAleatorio];
    }
}

class Juego{
    constructor(){

        humano = new Jugador("Nerdodivergente");
        ordenador = new JugadorVirtual()

        this.jugadores[humano, ordenador];
    }

    sacarOpcion(){
        humano = this.jugadores[0];
        ordenador = this.jugadores[1];

        humano.escogerOpcion(prompt("Elige piedra, papel o tijera: " + opcion).toUpperCase);
        ordenador.opcionAleatoria();
    }

    opcionJugador = Jugador.getOpcion();
    opcionOrdenador = JugadorVirtual.getOpcion();

}

