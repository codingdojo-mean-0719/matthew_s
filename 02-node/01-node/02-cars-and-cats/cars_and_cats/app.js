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
  } else if (request.url === '/cars') {
    fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cats") {
    fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else if (request.url === "/cars/new") {
    fs.readFile('./views/newcars.html', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else if (request.url === "/stylesheet/style.css") {
    fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else if (request.url === "/images/car1.jpg") {
    fs.readFile('./images/car1.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else if (request.url === "/images/car2.jpg") {
    fs.readFile('./images/car2.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else if (request.url === "/images/cat1.jpg") {
    fs.readFile('./images/cat1.jpg', function (errors, contents) {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    })
  } else if (request.url === "/images/cat2.jpg") {
    fs.readFile('./images/cat2.jpg', function (errors, contents) {
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
server.listen(7077);

console.log("Running in localhost at port 6789");