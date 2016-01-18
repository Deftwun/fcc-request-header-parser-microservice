var useragent = require("express-useragent");
var acceptLanguage = require("accept-language");
  
module.exports = function(req,res,next){
  var agent = useragent.parse(req.headers['user-agent']);

  req.whoami = {
    "ipaddress":req.ip,
    "language":acceptLanguage.get(req.get("Accept-Language")),
    "software":agent.os.toString()
  };
  next();
}
