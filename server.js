const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Init App
const app = express();

// Init DB
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  {useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models');




// first route
app.use('/api', require('./src/routes')); // o use é como se fosse um coringa. Ele vai receber todos os tipos de requisição.



app.listen(3001);