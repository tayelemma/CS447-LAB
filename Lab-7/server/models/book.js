const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: String,
    isbn: String,
    publishedDate: Date,
    author: String
},{
    versionKey: false
});
const Model = mongoose.model('Book', bookSchema);
module.exports = Model;