const myLibrary = [];

function Book(title, author, genre, pages, bookId, read) {
  // Book constructor
  this.bookId = bookId
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

Book.prototype.isRead = function() {
    if (this.read === "yes"){
        this.read = "no";
        return "Read: no";
    }
    else {
        this.read = "yes";
        return "Read: yes";
    }
}

function addBookToLibrary(title,author,genre,pages,read) {
  // take params, create a book then store it in the array
  const bookId = crypto.randomUUID();
//   const bookId = "book1";
//   console.log(bookId);
  let book = {}; 
  book[bookId] = new Book(title, author, genre, pages, bookId, read);
//   console.log(book[bookId]);
  myLibrary.push(book[bookId]);
}

// console.log(myLibrary);
addBookToLibrary("Hobbit","JRR","Fantasy", 300, "yes");
// console.log(myLibrary);
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812, "no");
addBookToLibrary("Hobbit","JRR","Fantasy", 300, "yes");
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812, "yes");
addBookToLibrary("Hobbit","JRR","Fantasy", 300, "yes");
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812, "yes");
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812, "yes");
addBookToLibrary("Hobbit","JRR","Fantasy", 300, "yes");
addBookToLibrary("The Witcher","Andrzej Sapkowski","Fantasy", 812, "yes");
addBookToLibrary("Hobbit","JRR","Fantasy", 300, "yes");
addBookToLibrary("Hobbit","JRR","Fantasy", 300, "yes");

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
    let read = book.read;

    const grid = document.querySelector("#libGrid");
    let newBook = document.createElement("div");
    newBook.setAttribute("class", "card");
    newBook.setAttribute("data-id", bookId);
    newBook.innerHTML = `<h1 class="cardTitle">${title}</h1><h3>${author}</h3><h3>${genre}</h3><h3>${pages} pages</h3><h3 class="readAtb">Read: ${read}</h3><button class="delBook">Delete Book</button><button class="readStat">Toggle Read</button>`
    grid.appendChild(newBook);


    // console.log(bookId + title + author + genre);
    // console.log("-----------------------------");

}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitButton = document.getElementById("submitBook");
const grid = document.querySelector("#libGrid");
const form = document.getElementById("newBookForm");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
//   const form = document.getElementById("newBookForm");
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
//   const form = document.getElementById("newBookForm");
  form.reset();
  dialog.close();
});


// submitButton.addEventListener("click", () => {
form.addEventListener("submit", (event) => {
    const newTitle = document.getElementById("addTitle").value;
    const newAuthor = document.getElementById("addAuthor").value;
    const newGenre = document.getElementById("addGenre").value;
    const newPages = document.getElementById("addPages").value;
    // const newRead = document.getElementById("addRead").value;
    const newRead = form.elements["addRead"].value;
    

    if (newTitle === "" || newAuthor=== "" || newGenre === "" || newPages === "" || newPages   <= 0)
    {
        form.reset();
        return;
    }

    addBookToLibrary(newTitle, newAuthor, newGenre, newPages, newRead);
    // console.log(myLibrary);
    let arrLen = myLibrary.length;

    
    let newBook = document.createElement("div");
    newBook.setAttribute("class", "card");
    newBook.setAttribute("data-id", myLibrary[arrLen - 1].bookId);
    newBook.innerHTML = `<h1 class="cardTitle">${myLibrary[arrLen - 1].title}</h1><h3>${myLibrary[arrLen - 1].author}</h3><h3>${myLibrary[arrLen - 1].genre}</h3><h3>${myLibrary[arrLen - 1].pages} pages</h3><h3 class="readAtb">Read: ${myLibrary[arrLen - 1].read}</h3><button class="delBook">Delete Book</button><button class="readStat">Toggle Read</button>`
    grid.appendChild(newBook);
    form.reset();
    dialog.close();
    event.preventDefault();
    
});



grid.addEventListener("click", e => {
    let btnID = e.target.parentNode.getAttribute("data-id");
    let index = myLibrary.findIndex(Book => Book.bookId === btnID);
    if(e.target.className === 'delBook'){
        // console.log(JSON.stringify(myLibrary));  
        // console.log(btnID);
        // console.log(JSON.stringify(myLibrary));
        // myLibrary = myLibrary.filter(book => book.bookId !==btnID);
        if (index > -1) {
            myLibrary.splice(index, 1);
            // console.log(JSON.stringify(myLibrary));
            e.target.parentNode.remove();   
        }
    }
    else if(e.target.className === 'readStat'){
        // console.log(myLibrary);
        e.target.parentNode.querySelector(".readAtb").innerHTML = myLibrary[index].isRead();
        // console.log(myLibrary);
    }
})