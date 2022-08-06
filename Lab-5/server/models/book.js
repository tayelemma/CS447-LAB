const {getDB} = require('../utils/database');
const {ObjectId} = require('mongodb');

// let books = [
//     {id: 1, title: 'How to become Millioner', isbn: '1W2W3W',publishedDate:'08-08-2015',author: 'Bob Thomas'},
//     { id: 2, title: 'Becoming', isbn: '200W8W', publishedDate: '08-08-2015', author: 'Michelle Obama' },
//     { id: 3, title: 'The Fault in Our Stars', isbn: '4657BW', publishedDate: '08-08-2015', author: 'John Green' },
//     { id: 4, title: 'Big Magic', isbn: 'WO0991', publishedDate: '08-08-2015', author: 'Elizabeth Gilbert' }
// ];

// let counter = 5;
module.exports = class Book {

    constructor(id, title, isbn, publishedDate, author) {
        this._id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }
    static getAll() {
        return getDB().collection('books').find().toArray();
    }

    static getById(id) {
        return getDB().collection('books').findOne({_id: new ObjectId(id)});
    }
    save() {
        return getDB().collection('books').insertOne(this);
    }

    update() {
        const self = Object.assign({},this);
        delete self._id;
        
        return getDB().collection('books')
             .updateOne({_id: new ObjectId(this._id)},{$set:self});
    }

    static deleteById(id) {
       return getDB().collection('books').deleteOne({_id: new ObjectId(id)});
    }

}