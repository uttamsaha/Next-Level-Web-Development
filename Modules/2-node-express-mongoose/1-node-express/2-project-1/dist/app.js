"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json()); // express.json() use korai  client side theke json data k object e show korbe data //json data parse korbe
//parser use na korle data output ei dekhabe na
app.use(express_1.default.text()); // client side theke text data send korle parse korte parbe eta use na korle text data asbe na
app.get("/", (req, res) => {
    //client theke req ase r amra res pahtai // Request r Response holo builtin type
    res.send("Server is running!");
});
app.post("/", (req, res) => {
    //request response type
    console.log(req.body);
    // res.send("Got data");
    res.json({
        msg: "Successfully sent data"
    });
});
exports.default = app;
