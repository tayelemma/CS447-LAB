/*
 3.  Using Node Stream API, create a script to unzip a file (after you zip it). 
     (Use zlib.createGunzip() stream)
 */

const fs = require("fs");
const zlib = require('zlib');
const path = require('path');


// fs.createReadStream(path.join(__dirname, 'title.txt'))
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream(path.join(__dirname, 'zipfile.txt.gz')));

// console.log("File transformed to zip file");


fs.createReadStream('./zipfile.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./unzip.txt'));
console.log("File unzip");