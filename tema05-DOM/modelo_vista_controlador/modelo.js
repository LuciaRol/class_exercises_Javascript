class libro{
    
    constuctor(titulo, autor, año){
        this. tit = titulo;
        this.autor = autor;
        this.año = año
    }
}


class listaLectura{
    constuctor(){
        this.listaLibros = [];
    }

    addLibro(libro){
        this.listaLibros.push(libro);
    }
}