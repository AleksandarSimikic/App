const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//server is running on port 
app.listen(port, () => console.log(`Listening on port ${port}`));

// get rout
app.get('/express_backend', (req, res) => {
  res.send({ express: 'MESSAGE' });
});
