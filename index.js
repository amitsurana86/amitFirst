var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 3000 + Math.floor(Math.random() * 10);
console.log(port);
server.listen(port);

console.log("Server running at http://localhost:%d", port);
