var express = require('express');
const app = express();


//stavljamo sada na kojem portu ce raditi server
app.listen(5000, () => console.log("Server slusa na portu 5000"));

app.get('/backend', (req,res)=>{
    res.send({express: "SRANJE"});
});