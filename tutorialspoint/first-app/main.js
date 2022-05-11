// use require to load module (http)
// restore the returned (http instance) to an variable
var http = require("http");

// call http.createServer() method to create a server instance 
// use listen method to bind at port 8081
http.createServer(function (req, res) {
    // send a response header to the request
    // http status: 200 => ok
    // content-type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // send the respone body as 'hello world'
    res.end('Hello world!\n');
}).listen(8081);

// console will print the message
console.log('Server running at http://127.0.0.1:8081/');