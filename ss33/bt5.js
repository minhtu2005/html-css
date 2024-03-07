let Book = {
    init: function(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true; 
    },
    borrow: function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("Sách " + this.title + " đã được mượn.");
        } else {
            console.log("Sách " + this.title + " hiện không có sẵn.");
        }
    },
    returnBook: function() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("Sách " + this.title + " đã được trả.");
        } else {
            console.log("Sách " + this.title + " đã có sẵn.");
        }
    }
};
let Library = {
    books: [], 
    addBook: function(book) {
        this.books.push(book);
    },
    isBookAvailable: function(title) {
        let foundBook = this.books.find(book => book.title === title);
        if (foundBook) {
            if (foundBook.isAvailable) {
                console.log("Sách " + title + " có sẵn để mượn.");
            } else {
                console.log("Sách " + title + " hiện không có sẵn.");
            }
        } else {
            console.log("Không tìm thấy sách có tiêu đề '" + title + "' trong thư viện.");
        }
    }
};
let book1 = Object.create(Book);
book1.init("Harry Potter", "J.K. Rowling", 1997);
let book2 = Object.create(Book);
book2.init("To Kill a Mockingbird", "Harper Lee", 1960)
let book3 = Object.create(Book);
book3.init("1984", "George Orwell", 1949);
Library.addBook(book1);
Library.addBook(book2);
Library.addBook(book3);
Library.isBookAvailable("Harry Potter");
book1.borrow();
Library.isBookAvailable("Harry Potter");
book1.returnBook();
Library.isBookAvailable("Harry Potter");