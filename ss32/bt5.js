let books = [
    { author: "Author 1", name: "Book 1" },
    { author: "Author 2", name: "Book 2" },
    { author: "Author 3", name: "Book 3" },
    { author: "Author 4", name: "Book 4" }
];
let authorToSearch = prompt("Nhập tên tác giả để tìm kiếm sách:");
let found = false;
for (let i = 0; i < books.length; i++) {
    if (books[i].author === authorToSearch) {
        console.log("Tên sách:", books[i].name);
        console.log("Tác giả:", books[i].author);
        found = true;
    }
}
if (!found) {
    console.log("Không tìm thấy sách của tác giả:", authorToSearch);
}