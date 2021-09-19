// Solution of the 4th problem.

const Book = class {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    get Title() {
        return this.title;
    }

    get Auther() {
        return this.author;
    }

    toString() {
        return "\"" + this.title + "\" - " + this.author;
    }

    isTheSameBook(book) {
        return this.title == book.title && this.author == book.author;
    }
}

const LibraryBookBase = class extends Book {
    constructor(title, author, bookId) {
        super(title, author);
        this.bookId = bookId;
    }

    get bookID() {
        return this.bookId;
    }

    toString() {
        return super.toString() + ", ID - " + this.bookId;
    }
}


const LibraryBook = class extends LibraryBookBase {
    constructor(title, author, bookId, quantity) {
        super(title, author, bookId);
        this.quantity = quantity; 
    }

    get Quantity() {
        return this.quantity;
    }

    set Quantity(newQ) {
        this.quantity = newQ;
    }

    toString() {
        return super.toString() + ", Q = " + this.quantity;
    }

    increaseQuantityBy(amount) {
        this.quantity += amount;
        return this.quantity;
    }

    decreaseQuantityBy(amount) {
        if(amount <= this.quantity) {
            this.quantity -= amount;
        }
        return this.quantity;
    }
    
}

const ReaderBook = class extends Book {
    constructor(title, author, bookId, expirationData, isReturned) {
        super(title, author);
        this.bookId = bookId;
        this.expirationData = expirationData;
        this.isReturned = isReturned;
    }

    get bookID() {
        return this.bookId;
    }

    get expData() {
        return this.expirationData;
    }

    set expData(newExData) {
        this.expirationData = newExData;
    }

    get returned() {
        return this.isReturned;
    }

    set returned(newR) {
        this.isReturned = newR;
    }

    toString() {
        return super.toString() + ", ID - " + this.bookId + ", Ex. date - " +
        this.expirationData + ", Is returned - " + this.isReturned;
    }
}

const Reader = class {
    constructor(firstName, lastName, readerId, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.readerId = readerId;
        this.books = books;
    }

    get fName() {
        return this.fName;
    }

    get lName() {
        return this.lName;
    }

    get rId() {
        return this.readerId;
    }

    get Books() {
        return this.books;
    }

    set Books(newBooksList) {
        this.books = newBooksList;
    }

    toString() {
        return this.firstName + " " + this.lastName + ", ID - " + this.readerId +
        ", the list of books - " + this.books;
    }

    borrowBook(book, library) {
        if(library.doHaveBook(book)) {
            lendBook(book, this.rId);
        }
    }
}

const Library = class {
    constructor(books, readers) {
        this.books = books;
        this.readers = readers;
    }

    get Books() {
        return this.books;
    }

    set Books(newBooksList) {
        this.books = newBooksList;
    }

    get Readers() {
        return this.readers;
    }

    set Readers(newReadersList) {
        this.readers = newReadersList;
    }

    doHaveBook(requestedBook) {
        for(let b in this.books) {
            if(b.isTheSameBook(requestedBook)) {
                return b;
            }
        }
        return null;
    }

    addBook(newBook) {
        let lb = new LibraryBook(newBook.title, newBook.author, newBook.bookId, 0);

        let found = false;
        for(let b in this.books) {
            if(b.isTheSameBook(lb)) {
                b.quantity++;
                found = true;
                break;
            }
        }

        if(!found)
        {
            lb.quantity++;
            this.books.push(lb);
        }
    }

    addBooks(newBooks) {
        newBooks.forEach(b => this.addBook(b))
    }

    checkReaderId(readerId) {
        for(let r in this.readers) {
            if(r.rId === readerId)
                return r;
        }

        return null;
    }

    lendBook(book, readerId) {
        let rd = this.checkReaderId(readerId);
        if(rd == null) {
            return;
        }

        let bk = this.doHaveBook(book);
        if(bk == null) {
            return;
        }

        bk.decreaseQuantityBy(1)
        let rb = new ReaderBook(bk.Title, bk.Auther, bk.bookID, 'one month', false);
        rd.Books.push(rb);
    }
}
