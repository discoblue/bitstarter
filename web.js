var express = require('express');
var fs = require('fs');
var htmlfile="index.html";  //added based on screenshot in Assign4
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync('index.html').toString();    
//    response.send(html);  //added based on screenshot in Assign4  
  response.send('Hello World 3.1!');
// var buffer = new Buffer(256);  //remove based on screenshot in Assign 4

// buffer = fs.readFileSync('index.html');    //remove based on screenshot in Assign 4          
// response.send(buffer.toString());  //need to do something with burffers to get it to read indx.html  //remove based on screenshot in Assign 4          

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
