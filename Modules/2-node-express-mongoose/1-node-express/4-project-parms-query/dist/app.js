"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//middleware + query
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next(); //prottek ta middleware er ses e next function call dite hoi nahole stuck hoie jabe sei middlware e
    //multiple middleware use kora jai. middleware besir vag smy authentication purpose e use hoi
};
//query example
//localhost:7000?email=uttam@gmail.com&phone=01400024412
app.get("/", logger, (req, res) => {
    console.log(req.query); //req.query.email diye email er value access kora jabe ba destructuring korte pari
    res.send("Server is running!");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Successfully sent data"
    });
});
exports.default = app;
