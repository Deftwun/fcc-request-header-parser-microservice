var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.get("/",function(req,res){
  console.log('User-Agent: ' + req.headers['user-agent']);
});

app.listen(port, function () {
  console.log('request-header-response-parser running on port ' + port);
});