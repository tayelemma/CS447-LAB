let books = [
    {id: 1, title: 'How to become Millioner', isbn: '1W2W3W',publishedDate:'08-08-2015',author: 'Bob Thomas'},
    { id: 2, title: 'Becoming', isbn: '200W8W', publishedDate: '08-08-2015', author: 'Michelle Obama' },
    { id: 3, title: 'The Fault in Our Stars', isbn: '4657BW', publishedDate: '08-08-2015', author: 'John Green' },
    { id: 4, title: 'Big Magic', isbn: 'WO0991', publishedDate: '08-08-2015', author: 'Elizabeth Gilbert' }
];

let counter = 5;
module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }
    static getAll() {
        return books;
    }

    static getById(id) {
        const index = books.findIndex(book => book.id === id);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('Book ID NOT Found');
        }
    }
    save() {
        this.id = counter++;
        books.push(this);
        return this;
    }

    update() {
        const index = books.findIndex(book => book.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('Book NOT Found');
        }
    }

    static deleteById(id) {
        const index = books.findIndex(book => book.id === id);
        if (index < -1) {
             throw new Error('Book ID NOT Found');
        } else {
           let temp = books[index];
           books.splice(index,1);
           return temp;
        }
    }

}