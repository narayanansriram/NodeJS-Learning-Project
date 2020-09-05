//Remove directory with multiple files -> first create a.txt and b.txt
// in a folder called example
const fs = require('fs')

fs.readdir('example',(err,files)=>{
    if (err)
    console.log(err)
    else{
        for (let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if (err)
                console.log(err);
                else
                console.log('successfully deleted file');
            })
        }
    }
})