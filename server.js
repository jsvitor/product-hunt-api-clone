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


const Product = mongoose.model('Product');


// first route
app.get('/', (request, response) => {
  // request is the request we make to the server.
  // What can we access in the "request", ( parameters, body, header, user, authentication, ip ...)
  // "response" is a response that is given to a request made on that route.
  // So the flow in a server is basically 'request' and 'response'.
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: "http://github.com/facebook/react-native"
  });

  response.send('Hello!🎭');
})


app.listen(3001);