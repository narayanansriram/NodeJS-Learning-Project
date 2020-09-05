//Folder creation and Folder/File creation
const fs = require('fs')
fs.mkdir('tutorial',(err)=>{
    if(err)
    console.log(err);
    else{
        fs.writeFile('./tutorial/example.txt','123',(err)=>{
            if (err)
            console.log(err)
            else
            console.log('successfully created file')
        })
    }
})

/*
    fs.rmdir('tutorial',(err)=>{
        if (err)
        console.log(err)
        else{
            console.log('successfully deleted the folder');
        }
    })
     */
