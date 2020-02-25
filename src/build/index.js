"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var server = express_1.default();
var PORT = process.env.PORT || 3001;
server.get('/', function (req, res) {
    res.json({ message: 'haha' });
});
var serverMessage = 'Sever is running on port ' + PORT;
server.listen(PORT, function () { return console.log(serverMessage); });
