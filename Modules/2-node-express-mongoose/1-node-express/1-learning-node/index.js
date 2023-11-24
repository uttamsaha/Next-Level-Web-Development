///--->Nodejs local module
// const myModule = require("./local-module-1")
//myModule na likhe distructuring korte pari.

const {a, add} = require("./local-module-1")
const {a:a2, add:add2} = require("./local-module-2"); //destructuring e name alias use korchi karon n veriable name r functionn name same 2 ta file a
console.log(add(2,3))
console.log(add2(2,3,4));
// console.log(myModule.add(2,3));




///Nodejs builtin module
const path = require("path");
console.log(path.dirname("/home/uttamsaha/Music/Next Level Development/Modules/node-express-mongoose/learning-node/local-module-2.js"))
console.log(path.parse("/home/uttamsaha/Music/Next Level Development/Modules/node-express-mongoose/learning-node/local-module-2.js"));

console.log(path.join("/home/uttamsaha/Music/Next Level Development/Modules/node-express-mongoose/learning-node/","local-module-1.js")) // local-module-1.js k join kore dibe path string er sathe

