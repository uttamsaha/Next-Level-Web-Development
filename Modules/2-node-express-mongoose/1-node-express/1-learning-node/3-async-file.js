const fs = require("fs");

//reading text asynchronously

fs.readFile("./texts/read.txt","utf-8", (err, data)=>{
    if(err){
        throw Error("Error reading text");
    }
    console.log(data);

    //writing text asynchornously

    fs.writeFile("./texts/write2.txt",data,"utf-8", (err)=>{
        if(err){
            throw Error("Error writing data");
        }

    })
})


//heavy data thakle amra sync vabe korbo na async vabe korbo. sync vabe korle nodejs thread blocking thake.

