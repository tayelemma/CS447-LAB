const { ObjectId} = require('mongodb');
const Book = require('../models/book');
const Response = require('../models/responseobj');

exports.getAll = async (req, res, next) => {
    const books = await Book.find();
    res.status(200).json(new Response(false,null, books));
}

exports.getById = async (req, res, next) => {
    const books = await Book.find(req.params.id);
    res.status(200).json(new Response(false, null, books));
}

exports.save = async (req, res, next) => {
    try{
        const bookSaved = await new Book(req.body).save();
        res.status(200).json(new Response(false, null, bookSaved));
    }catch(err){
        next(err.message);
    }
}

exports.update = async (req, res, next) => {
    const bookUpdate = await Book.updateOne({_id: new ObjectId(req.params.id)}, req.body);
    res.status(200).json(new Response(false,null, bookUpdate));
}

exports.deleteById = async (req, res, next) => {
    const result = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(new Response(false,null, result));
    // res.json({_id: req.params.id});;
}