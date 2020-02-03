var http = require('http');
var url = require('url')
var getDate = require('./modules/gather-date');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(getDate.GetDateTime()+"\n");
    var q = url.parse(req.url, true).query;
    var txt = " Father: " + q.father + " Mother: " + q.mother;
    res.write(txt);
    res.end();
    
  }).listen(8080);