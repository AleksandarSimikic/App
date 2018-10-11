"use strict";
/* ./server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importujemo sve iz ekspresa
var express_1 = __importDefault(require("express"));
//importujemo WelcomeController ruter koji smo eksportovali u welcome.controller.ts zbog rutiranja
var controllers_1 = require("./controllers");
//nova ekspres aplikacija
var app = express_1.default();
//port koji ce server da koristi
var port = +(process.env.PORT || 5000);
// koristimo ruter koji smo eksportovali iz welcome.controller.ts
app.use('/', controllers_1.WelcomeController);
//slusanje porta
app.listen(port, function () {
    console.log("Slusam na portu:" + port + "/");
});
