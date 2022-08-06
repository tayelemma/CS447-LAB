const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const bookRouter = require('./routes/book');
const Response = require('./models/responseobj');

const app = express();

app.use(cors());
app.use (express.json());


app.use(authRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);


app.use((err,req,res,next)=>{
    res.status(500).json(new Response(true, err.message, null));
})


mongoose.connect('mongodb://localhost:27017/bookstore', () => {
    app.listen(3000, () => console.log('server is running'))
});