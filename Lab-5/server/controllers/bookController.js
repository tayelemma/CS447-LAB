const Book = require('../models/book');

// checked
exports.getAll = async (req, res, next) => {
    res.json(await Book.getAll());
}

exports.getById = async (req, res, next) => {
    res.json(await Book.getById(req.params.id));
}

exports.save = async (req, res, next) => {
    const bookSaved = new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    const result = await bookSaved.save();
    bookSaved._id = result.insertedId;
    res.json(bookSaved);
}

exports.update = async (req, res, next) => {
    const bookUpdate = new Book(req.params.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author);
    await bookUpdate.update();
    res.json(bookUpdate);
}

exports.deleteById = async (req, res, next) => {
    await Book.deleteById(req.params.id);
    res.json({_id: req.params.id});;
}