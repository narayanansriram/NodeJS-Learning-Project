//serving an image
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/movealong.jpg')
    //write header for the response to let client know what kind of data is
    //expected
    res.writeHead(200,{'Content-type':'img'});//HTTP 200 means OK
    readStream.pipe(res);
}).listen(3000);