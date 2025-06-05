const myLibrary = [];

function Book(title, author, genre, bookId) {
  // Book constructor
  this.bookId = bookId
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary(title,author,genre) {
  // take params, create a book then store it in the array
  const bookId = crypto.randomUUID();
//   const bookId = "book1";
//   console.log(bookId);
  let book = {}; 
  book[bookId] = new Book(title, author, genre, bookId);
//   console.log(book[bookId]);
  myLibrary.push(book[bookId]);
}

// console.log(myLibrary);
addBookToLibrary("Hobbit","JRR","Fantasy");
// console.log(myLibrary);
addBookToLibrary("The Witcher","Someone","Fantasy");
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
    // console.log(bookId + title + author + genre);
    // console.log("-----------------------------");
    
}