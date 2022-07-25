const express = require('express');
const app = express();
const path = require('path');


app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: true }));


app.use('/login', (req, res, next) => {
    if (req.body.username === 'too@miu.edu' &&  req.body.password === '****') {
        res.redirect('/products');
    }
    else {
        res.redirect('/users');
    }
});


app.use('/products', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'products.html'));
})

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'users.html'));
});

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));