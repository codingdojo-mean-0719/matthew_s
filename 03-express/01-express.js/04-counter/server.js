var express = require("express");
var session = require('express-session');
var app = express();
app.use(express.static(__dirname + "/static"));
app.use(session({
  secret: "codingdojoROCKS",
  resave: false,
  saveUninitlaized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  if (request.session.counter === undefined) {
    request.session.counter = 1;
  } else {
    request.session.counter += 1;
  }
  response.render('index', { counter: request.session.counter });
})

app.get("/two", function (request, response) {
  request.session.counter += 1;
  response.redirect('/');
})
app.get("/reset", function (request, response) {
  request.session.counter = 0;
  response.redirect('/');
})

app.listen(8000, function () {
  console.log("listening on port 8000");
})