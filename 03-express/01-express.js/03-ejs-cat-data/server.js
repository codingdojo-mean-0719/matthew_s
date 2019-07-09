var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.send("<h1>Hello Express</h1>");
})
app.get("/cats", function (request, response) {
  response.render('cats');
})
app.get("/cats/muffins", function (request, response) {
  var cat_details = [
    { name: "Muffins", age: 4, sleepingspots: ["under the bed", "in the sun"], },
  ];
  response.render('details', { details: cat_details });
})
app.get("/cats/bicycle", function (request, response) {
  var cat_details = [
    { name: "Bicycle", age: 2, sleepingspots: ["on the couch", "in the sun"], },
  ];
  response.render('details', { details: cat_details });
})
app.get("/cats/pinata", function (request, response) {
  var cat_details = [
    { name: "Pinata", age: 3, sleepingspots: ["on his owner", "on the deck"], },
  ];
  response.render('details', { details: cat_details });
})
app.listen(8000, function () {
  console.log("listening on port 8000");
})