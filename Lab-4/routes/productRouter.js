const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs');

router.get('/product', (req,res,next)=>{
    res.sendFile(path.join(__dirname, '..','views','products.html'))
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.send('Product successfully saved. ');
    
});

module.exports = router;