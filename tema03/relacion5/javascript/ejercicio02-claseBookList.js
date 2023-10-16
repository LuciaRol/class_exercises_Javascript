class Book{
    constructor(title, genre, author, readed_book, read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.readed_book = readed_book;
        this.read_date = new Date(read_date);
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

class Booklist extends Book{
    constructor(){
        super(Book)

        this.n_readed = 0;
        this.n_not_readed = 0;
        this.next_book = new Book;
        this.current_book = new Book;
        this.last_book = new Book;
        this.all_books = new Array();
    }

    add(Book){
        this.all_books = this.all_books.push(Book);
    }

    statusBookList() {
        console.log(`Libros en la lista: ${this.all_books}`);

    }

   
}

libro = new Book("La historia interminable", "Fantasía", "Michael Ende", true, "1999-09-09");

libro.statusBook();

puto = new Booklist();

puto.add(libro);

puto.statusBookList();


