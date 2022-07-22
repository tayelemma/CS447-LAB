const fs = require('fs');
const http = require('http');
const path = require('path');



http.createServer( (req, res) => {
    fs.createReadStream(path.join(__dirname,'coffee.jpg'))
      .pipe(res);
}).listen(3000, ()=> console.log('listening to 3000'));