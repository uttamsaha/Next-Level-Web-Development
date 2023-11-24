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
// app.get("/:userId", (req: Request, res: Response) => { // ekhane userId hocce params params k recv korte :/userId diye rcv kortsi
//   console.log(req.params); //req.params.userId diye value ta k access korte pari
//   res.send("Server is running!");
// });
app.get("/:userId/:subId", (req, res) => {
    console.log(req.params); //req.params.userId diye value ta k access korte pari
    res.send("Server is running!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Successfully sent data"
    });
});
exports.default = app;
