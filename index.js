var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/hola', function(req, res) {
  res.send('hello world');
});

app.get('/login', function(req, res) {
    res.send('user');
});

app.listen(3000, () => {
    console.log("Servidor prendido")
})