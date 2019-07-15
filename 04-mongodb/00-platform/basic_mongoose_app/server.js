const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/public');
const server = app.listen(1337);
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function (request, response) {
  let users = User.find({}, function(err, users){

  })
  response.render('index', {user: users});
});

app.post('/users', function (req, res) {
  console.log("Post Data", req.body);
  var user = new User({ name: req.body.name, age: req.body.age });
  user.save(function (err) {
    if (err) {
      console.log('something aint right');
    } else {
      console.log("homie is in the db now!");
    }
    res.redirect("/");
  })
});