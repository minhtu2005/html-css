let Book = {
    init: function(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    },
    displayInfo: function() {
        console.log("Tiêu đề:", this.title);
        console.log("Tác giả:", this.author);
        console.log("Năm xuất bản:", this.publishedYear);
    }
};
let Library = {
    books: [],
    addBook: function(book) {
        this.books.push(book);
    },
    displayLibrary: function() {
        console.log("Danh sách sách trong thư viện:");
        for (let i = 0; i < this.books.length; i++) {
            console.log("Thông tin sách " + (i + 1) + ":");
            this.books[i].displayInfo();
            console.log("----------------------------------");
        }
    }
};
let book1 = Object.create(Book);
book1.init("Harry Potter", "J.K. Rowling", 1997);

let book2 = Object.create(Book);
book2.init("To Kill a Mockingbird", "Harper Lee", 1960);

let book3 = Object.create(Book);
book3.init("1984", "George Orwell", 1949);
Library.addBook(book1);
Library.addBook(book2);
Library.addBook(book3);
Library.displayLibrary();