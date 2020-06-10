const express = require('express');

const app = express();

app.get('/', (request, response) => {
  // request is the request we make to the server.
  // What can we access in the "request", ( parameters, body, header, user, authentication, ip ...)
  // "response" is a response that is given to a request made on that route.
  // So the flow in a server is basically 'request' and 'response'.
  response.send('Hello!🎭');
})


app.listen(3001);