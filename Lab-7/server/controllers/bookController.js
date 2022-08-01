const { ObjectId} = require('mongodb');
const Book = require('../models/book');

exports.getAll = async (req, res, next) => {
    res.json(await Book.find());
}

exports.getById = async (req, res, next) => {
    res.json(await Book.findById(req.params.id));
}

exports.save = async (req, res, next) => {
    try{
        const bookSaved = await new Book(req.body).save();
        res.json(bookSaved);
    }catch(err){
        next(err.message);
    }
}

exports.update = async (req, res, next) => {
    const bookUpdate = await Book.updateOne({_id: new ObjectId(req.params.id)}, req.body);
    res.json(bookUpdate);
}

exports.deleteById = async (req, res, next) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({_id: req.params.id});;
}