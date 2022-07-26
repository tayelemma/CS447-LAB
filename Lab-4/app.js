/**
 * Create a npm project and install Express.js (Nodemon if you want)
   Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
   For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.
   Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
   Customize your 404 page
   Provide your own error handling
 */

const express = require('express');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const path = require('path');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use(userRouter);
app.use(productRouter);

app.use((req,res,next)=>{
    res.status(404).send(path.join(__dirname,'views','404.html'));
});


app.listen(3000, ()=> console.log('3000'));