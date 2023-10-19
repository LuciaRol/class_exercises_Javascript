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
        opciones = ["Piedra", "Papel", "Tijera"];
        numeroAlatorio = Math.floor(Math.random()*3);
        this.opcion = opcion[numeroAleatorio];
    }
}

class Juego{
    constructor(){
        this.jugadores[new Jugador("Nerdodivergente"), new JugadorVirtual()];
    }
}

