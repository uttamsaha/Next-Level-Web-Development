const EventEmitter = require("events");

const myEmitter = new EventEmitter(); //EventEmmiter is a class
//Listener

myEmitter.on('birthday', ()=>{ //birthday event er name 
    console.log("Happy birthday to you");
})

//ekta event er opor multiple listener add korte pari
myEmitter.on("birthday",(gift)=>{
    console.log(`I will send a git ${gift}`)
})
myEmitter.emit("birthday", "watch"); //birthday emit er name.  ekhae birthday event ta emit kora hoise se jonno birthday event ta call hocce ba emit hocce
//watch ekta parameter ekhane

//nodejs event driven architecture e kaj kore. 