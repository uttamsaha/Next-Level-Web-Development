const fs = require("fs");
const http = require("http");
//creating a server using raw node.js
const server = http.createServer();


//server listener
server.on('request', (req, res)=>{
    // console.log(req.url, req.method);
    if(req.url === '/read-file' && req.method === 'GET'){
        //steam file reading
        const readableStream = fs.createReadStream('./texts/read.txt');
        readableStream.on("data", (buffer)=>{ //data event name
            res.statusCode = 200;
            res.write(buffer);
        })
        readableStream.on('end', ()=> { //jokhon stream process end hobe tkn response ta end kore dibo ba pathai dibo
            res.statusCode = 200;
            res.end("The stream is over.");
        })

        readableStream.on('error', (error)=> { //jokhon stream process end hobe tkn response ta end kore dibo ba pathai dibo
            res.statusCode = 500;
            res.end("Something went wrong");
            console.log(error);
        })

    }

  

})

server.listen(4000, ()=>{
    console.log(`server is listening on port 5000`)
})

//server on kore...
//localhost:5000/read-file e path e gele data read korbe stream vabe aste aste asbe load hobe r dekhabe
