// SINTAXIS ANTIGUA. A EVITAR:

function persona(nombre) {

    this.minombre = nombre;
    this.mostrarNombre = function (){
        console.log(this.minombre);
    }
}

lucia = new persona("lucia");
lucia.mostrarNombre();

// El this no es del objeto, sino del metodo asíncrono que llama a ese objeto
setTimeout(lucia.mostrarNombre, 2000);



// SINTAXIS MODERNA -> SE TIENE QUE HACER ASÍ

class persona {

    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarNombre() {
        console.log(this.nombre);
    }
}

lucia = new persona("lucia");
setTimeout(() => lucia.mostrarNombre(), 2000);



