function Book(title, author, genre, availability=true) {
    this.title = title
    this.author = author;
    this.genre = genre;
    this.availability = availability;    

    this.borrowBook = function() {
        if (this.availability) {
            this.availability = false;
        }else{
            console.log(`The book titled ${this.title} is not available right now`);
        }
    }

    this.returnBook = function() {
        this.availability = true;
        console.log('The book has been returned');        
    }

    this.displayInfo = function() {
        console.log( {
            title: this.title,
            author: this.author,
            genre: this.genre,
            availability: this.availability,
        } );
    }
}

function Library() {
    this.books = [];

    this.addBook = function(title, author, genre) {
        this.books.push(new Book(title, author, genre));
    }

    this.searchBook = function(title) {
        let bookFound = this.books.filter(b => b.title === title);
        if (bookFound) {
            bookFound.forEach(b => b.displayInfo())
        } else {
            console.log("Book not found");
        }
    }
}

// Create an instance of Librabry Class
const library = new Library();

// Add books to Library Class
library.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction / Classic");
library.addBook("1984", "George Orwell", "Dystopian / Science Fiction");
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction / Classic");
library.addBook("The Catcher in the Rye", "J.D. Salinger", "Fiction / Coming-of-Age");
library.addBook("Pride and Prejudice", "Jane Austen", "Romance / Classic");
library.addBook("The Hobbit", "J.R.R. Tolkien", "Fantasy");
library.addBook("The Alchemist", "Paulo Coelho", "Fiction / Philosophy");
library.addBook("Brave New World", "Aldous Huxley", "Dystopian / Science Fiction");
library.addBook("The Road", "Cormac McCarthy", "Post-Apocalyptic Fiction");
library.addBook("Becoming", "Michelle Obama", "Memoir / Biography");

// Seach and display book
library.searchBook('1984');
library.searchBook('To Kill a Mockingbird');