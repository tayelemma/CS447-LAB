const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    fs.readFile(path.join(__dirname,'sunset.jpg'), function (err, data) {
        if (err) {
            throw new err;
        } else {
            res.end(data);
        }
    })
}).listen('3000', () => console.log('listening to 3000'));

