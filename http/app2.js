const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/index.html')
    //write header for the response to let client know what kind of data is
    //expected
    res.writeHead(200,{'Content-type':'text/html'});//HTTP 200 means OK
    readStream.pipe(res);
}).listen(3000);