var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 3!');
var buffer = new Buffer(256);

buffer = fs.readFileSync('index.html');
response.send(buffer.toString());  //need to do something with burffers to get it to read indx.html

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
