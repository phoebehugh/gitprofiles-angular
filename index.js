var http = require("http");
var fs = require("fs");

fs.readFile('./index.html', function(err, html) {
  if (err) {
    throw err;
  }

  http.createServer(function(request,response) {
    response.writeHeader(200, {"content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(8080);
});

console.log("Server running at 8080");