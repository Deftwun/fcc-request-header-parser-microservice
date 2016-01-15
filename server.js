var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static("client"));

app.listen(port, function () {
  console.log('request-header-response-parser running on port ' + port);
});