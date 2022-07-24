const fs = require('fs');
const http = require('http'); 
const path = require('path');
const server = http.createServer(); 

server.on('request', (req, res)=>{
   if(req.url ==='/' && req.method ==='GET'){
    fs.createReadStream(path.join(__dirname,"index.html"))
        .pipe(res);
   }else if(req.url==='/message' && req.method === 'POST'){

    const body = [];

    req.on('data',(chunk)=>{
        body.push(chunk);
    });

    req.on('end',()=>{
        const str = Buffer.concat(body).toString();
        fs.writeFile('users.txt', str, (err)=>{
            if(!err){
               
                res.end(`<html>
                            <body> 
                                save succesfuly
                               <br>
                               <a href="/"><button> home page</button> </a>
                            </body>
                        </html>`);
            }else{
                res.end('Try again');
            }
        })
    })
   }else{
    res.end('Others');
   }

}).listen(3000, ()=>console.log("listning 3000"));











