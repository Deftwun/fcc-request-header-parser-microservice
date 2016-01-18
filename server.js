var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

//var whoami = require("./whoami.js");

var useragent = require("express-useragent");
app.use(useragent.express());

app.get("/",function(req,res){
  console.log(req.useragent);
});


app.listen(port, function () {
  console.log('request-header-response-parser running on port ' + port);
});