/**
1። Download the start-up project lesson05-server and lesson05-client projects or you create everything from scrtach.
2። Run "npm install" under lesson05-server to get express package installed.
3። Implement the features below inside lesson05-server REST applicaiton
    i.  CRUD(create, read, update, delete) books: make sure you use the proper URLs and HTTP Methods
    ii. A book has properties: id, title, ISBN, publishedDate, author
    iii. make proper changes in js files to implement the step 1 features
    iV. Use Postman to test your REST APIs
4። Implement the features below inside lesson05-client project. This project acts as SPA which make calls to lesson05-server APIs. You must have strong knowledge on JavaScript DOM APIs to complete the tasks. I highly recommand you to do this part if you have time.
    i. Modify index.html, carousel.css to match your design
    ii. Write JS code in main.js to implement the feature:
        a. List all books in index.html when open index.html in browser
        b. Click "Submit" button to add a new book with properties: title, ISBN, publishedDate, author (id is auto generated)
        c. Click "Update" button to Edit a book and save to server side
        d. Click "Delete" button to remove a book from server side
 */
const express = require('express');

const cors = require('cors');

const bookRouter = require('./routes/book');
const {mongoConnect} = require('./utils/database');

const app = express();

app.use(cors());

app.use (express.json());

app.use('/books', bookRouter);

app.use((req,res,next)=>{
    res.status(404).send({error: 'API NOT SUPORTED'});
})

mongoConnect(()=>{
    app.listen(3000, () => console.log('Listening 3000'));
})

