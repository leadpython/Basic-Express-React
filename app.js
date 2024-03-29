var express = require('express');
var path = require("path");
var app = express();

app.use('/static', express.static(path.join(__dirname, 'client')))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});