"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//Error handling using trycatch block
//kono error hole seta server k crash kore na borong error e giye error dekhabe trycatch block user korai
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        res.send("Server is running!");
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "failed to get data",
        });
    }
}));
//global error handling
app.get("/test", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        res.send(something);
    }
    catch (error) {
        next(error);
    }
}));
//kono route exist na korle sekhane msg dekhabo route not found eta ekdom niche korte hoi
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "No route found"
    });
});
//global error handler --> sob error k common jaigai niye ashar jonno
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong"
        });
    }
});
exports.default = app;
