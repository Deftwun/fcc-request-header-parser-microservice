var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(require("./whoami.js"));

app.get("/",function(req,res){
  res.end(JSON.stringify(req.whoami));
});

app.listen(port, function () {
  console.log('request-header-response-parser running on port ' + port);
});