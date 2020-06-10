const express = require('express');
const mongoose = require('mongoose');

// Init App
const app = express();

// Init DB
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  {useNewUrlParser: true, useUnifiedTopology: true}
);


// first route
app.get('/', (request, response) => {
  // request is the request we make to the server.
  // What can we access in the "request", ( parameters, body, header, user, authentication, ip ...)
  // "response" is a response that is given to a request made on that route.
  // So the flow in a server is basically 'request' and 'response'.
  response.send('Hello!🎭');
})


app.listen(3001);