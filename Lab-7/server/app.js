const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bookRouter = require('./routes/book');


const app = express();

app.use(cors());
app.use (express.json());

app.use('/books', bookRouter);

app.use((req,res,next)=>{
    res.status(404).send({error: 'API NOT SUPORTED'});
})


mongoose.connect('mongodb://localhost:27017/bookstore')
    .then(() => {
        app.listen(3000, () => {
            console.log('server is running');
        });
    }).catch(err => console.log(err));

