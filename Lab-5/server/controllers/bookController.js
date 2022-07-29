const Book = require('../models/book');

// checked
exports.getAll = (req, res, next) => {
    res.json(Book.getAll());
}

exports.getById = (req, res, next) => {
    res.json(Book.getById(req.params.id));
}

exports.save = (req, res, next) => {
    const bookSaved = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).save();
    res.json(bookSaved);
}

exports.update = (req, res, next) => {
    const bookUpdate = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, book.author).update();
    res.json(bookUpdate);
}

exports.deleteById = (req, res, next) => {
    let deletedBook = Book.deleteById(req.params.id);
    res.json(deletedBook);;
}