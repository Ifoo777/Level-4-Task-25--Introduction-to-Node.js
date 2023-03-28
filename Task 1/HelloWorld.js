const http = require('http');
// Web server that returns a web page that says “Hey! I can use Node!”.
http.createServer(function(request, response) {
    response.write('Hey! I can use Node!');
    response.end();
}).listen(3000);