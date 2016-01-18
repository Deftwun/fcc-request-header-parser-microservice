function getOS(req){

  var agent = useragent.parse(req.headers['user-agent']);
  return agent.os.toString();
}

function getIP(req){
  return req.ip;
}

module.exports = function(req){
  return {
    "ipaddress":req.ip,
    "language":req.get("Accept-Language"),
    "software":getOS(req)
  };
  /*
  return({
    "ipaddress":getIP(req),
    "language":getLanguage(req),
    "software":getOS(req)
  });
  */
}
