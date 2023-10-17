
// Creación de la clase Libro. Se pasan por parámetros en su constructor: título, género y autor.
class Book{
    constructor(title, genre, author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.readed_book = undefined;
        this.read_date = null;
    }

    // Función para marcar un libro como leído
    readedBookMarker(readed_book){
        if(read_date != null){
            return readed_book = true;
        }
    }

    finishedDate(){

    }

    statusBook() {
        console.log(
            `Datos del libro : 
            Título: ${this.title}, 
            Género: ${this.genre}, 
            Autor: ${this.author}, 
            Libro leído: ${this.readed_book}, 
            Fecha de lectura: ${this.read_date}`);

    }
}

// Creación de la clase Booklist. No se pasan parámetros en el constructor.
class Booklist{
    constructor(){
        
        this.n_readed = 0;
        this.n_not_readed = 0;
        this.next_book = 0;
        this.current_book = 0;
        this.last_book = 0;
        this.all_books = new Array();
    }

    add(Book){
        this.all_books.push(Book);
    }

    finishCurrentBook(){
        this.read_date = new Date(Date.now());
        if(readed_date != null){
            this.readed_book = true;
            this.last_book = last_book++;
            this.current_book = next_book[0];
            this.next_book = next_book--;
        }
        
        

    }

    statusBookList() {
        console.log(`Libros en la lista: ${this.all_books}`);

    }

   
}

libro = new Book("La historia interminable", "Fantasía", "Michael Ende", true, "1999-09-09");

libro.statusBook();

listaLibros = new Booklist();

listaLibros.add(libro);

listaLibros.statusBookList();


