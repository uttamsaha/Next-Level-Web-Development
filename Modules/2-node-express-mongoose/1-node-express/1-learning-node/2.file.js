const fs = require("fs"); //import file system

//reading a file text

const readText = fs.readFileSync("./texts/read.txt", "utf-8"); //syncronous vabe rad kore //utf-8 use korai buffer theke string e ene dibe
console.log(readText);


//writing a text
const writtenText = fs.writeFileSync("./texts/write.txt", readText + "This is my written text"); //write.txt e name e new file open hobe ebong ki likhbo seta cole dite hobe
