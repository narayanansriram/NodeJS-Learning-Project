const readline = require('readline');
const { rawListeners } = require('process');

const rl = readline.createInterface({input:process.stdin,
output : process.stdout});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`, (userInput)=>{
    if (userInput.trim()==answer){
    rl.close();
    }
    else{
        rl.setPrompt('Incorrect Response: Please try again\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==answer)
                rl.close();
            else{
                rl.setPrompt(`Your answer of ${ userInput } is incorrect, try again.`)
                rl.prompt();
            }
        });
    }
});


//Listening for close event from rl.question
rl.on('close',()=>{
    console.log('Correct!!!!');
})