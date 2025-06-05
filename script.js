const myLibrary = [];

function Book(title, author, genre, pages, bookId) {
  // Book constructor
  this.bookId = bookId
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
}

function addBookToLibrary(title,author,genre,pages) {
  // take params, create a book then store it in the array
  const bookId = crypto.randomUUID();
//   const bookId = "book1";
//   console.log(bookId);
  let book = {}; 
  book[bookId] = new Book(title, author, genre, pages, bookId);
//   console.log(book[bookId]);
  myLibrary.push(book[bookId]);
}

// console.log(myLibrary);
addBookToLibrary("Hobbit","JRR","Fantasy", 300);
// console.log(myLibrary);
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812);
addBookToLibrary("Hobbit","JRR","Fantasy", 300);
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812);
addBookToLibrary("Hobbit","JRR","Fantasy", 300);
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812);
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812);
addBookToLibrary("Hobbit","JRR","Fantasy", 300);
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812);
addBookToLibrary("Hobbit","JRR","Fantasy", 300);
addBookToLibrary("Hobbit","JRR","Fantasy", 300);

// console.log(myLibrary);
// console.log("-----------------------------");
// console.log(myLibrary[0]);
// console.log(myLibrary[1]);
// console.log("-----------------------------");
for (let book of myLibrary) {
    let bookId = book.bookId;
    let title = book.title;
    let author = book.author;
    let genre = book.genre;
    let pages = book.pages;

    const grid = document.querySelector("#libGrid");
    let newBook = document.createElement("div");
    newBook.setAttribute("class", "card");
    newBook.setAttribute("data-id", bookId);
    newBook.innerHTML = `<h1 class="cardTitle">${title}</h1><h3>${author}</h3><h3>${genre}</h3><h3>${pages} pages</h3>`
    grid.appendChild(newBook);


    // console.log(bookId + title + author + genre);
    // console.log("-----------------------------");

}