const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }

    }

    let mand = new Person('guy');
    mand.on('name',()=>{
        console.log('my name is '+mand.name);
    });

    mand.emit('name');

    let vicky = new Person("vicky");
    vicky.on('name',()=>{

        console.log('my name is '+vicky.name);
    })

    vicky.emit('name');