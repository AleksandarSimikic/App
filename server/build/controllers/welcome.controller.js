"use strict";
/* ./controllers/welcome.controller.ts */
Object.defineProperty(exports, "__esModule", { value: true });
// importujemo module koji nam trebaju
var express_1 = require("express");
//Definisemo ruter
var router = express_1.Router();
//get sranje
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Radi.');
});
//jos jedan get, koji ce da prima tekst(koji ce da ga prima u url-u/ vidi server.ts)
router.get('/:text', function (req, res) {
    // izvalcimo tekst iz zahtjeva
    var text = req.params.text;
    //stavljamo tekst u odgovor
    res.send("" + text);
});
//eksportujemo ruter da ga mozemo koristiti u server.ts
exports.WelcomeController = router;
