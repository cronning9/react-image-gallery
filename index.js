//--IMPORTS
//---------------------
const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 8080 || process.env.PORT;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("hey motherfucker");
});

app.listen(port, () => {
  console.log("listening on %s", port);
})