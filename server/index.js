"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.get('*', function (req, res, next) {
    res.send("\n    <h1>Path: " + req.path + "</h1>\n  ");
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Listening from port " + PORT);
});
