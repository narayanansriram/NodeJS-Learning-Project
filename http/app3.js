//serving JSONs
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/generated.json')
    //write header for the response to let client know what kind of data is
    //expected
    res.writeHead(200,{'Content-type':'application/json'});//HTTP 200 means OK
    readStream.pipe(res);
}).listen(3000);