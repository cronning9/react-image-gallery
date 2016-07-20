'use strict';

//--IMPORTS
//---------------------
const express = require('express');
const morgan =  require('morgan');
const path =    require('path');

const app =     express();

const PORT =    process.env.PORT || 8080;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log("listening on %s", PORT);
})