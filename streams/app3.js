//Pipes

const fs = require('fs')

const readStream = fs.createReadStream('./example2.txt','utf8');
const writeStream = fs.createWriteStream('example.txt');
readStream.pipe(writeStream); 