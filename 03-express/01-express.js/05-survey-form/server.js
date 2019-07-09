var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + "/static"));
app.use(session({
  secret: "codingdojoROCKS",
  resave: false,
  saveUninitlaized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {

  response.render('index');
})

app.post("/result", function (request, response) {
  var details = request.body;
  console.log(details);
  response.render('results', { details: details });
})



app.listen(8000, function () {
  console.log("listening on port 8000");
})