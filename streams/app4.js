//Pipe chaining

const fs = require('fs')
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./example2.txt','utf8');
const writeStream = fs.createWriteStream('example.txt.gz');
readStream.pipe(gzip).pipe(writeStream); //Takes readStream and compresses it to writeStream