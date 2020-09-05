const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Hello world from NodeJS');
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }
})

//port to listen
server.listen('3000');