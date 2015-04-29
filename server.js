var express = require('express');
var app = express();
var http = require("http").Server(app);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(8080, function() {
  console.log("Server running at 8080");
});


