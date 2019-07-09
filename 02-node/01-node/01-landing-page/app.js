var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url);
  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  } else if (request.url === '/ninjas') {
    fs.readFile('ninjas.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/dojos/new") {
    fs.readFile('dojos.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else {
    fs.readFile('error.html', 'utf8', function (errors, contents) {
      response.writeHead(404, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  }
});
server.listen(6789);

console.log("Running in localhost at port 6789");