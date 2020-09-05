//demonstrate append

const fs = require('fs');

fs.appendFile('example2.txt','Some data is being appended',(err)=>{
    if (err)
    console.log(err)
    else
    console.log('\n successfully appended data to file')
})