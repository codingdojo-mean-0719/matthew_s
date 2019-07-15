const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/public');
const server = app.listen(1337);
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
const flash = require('express-flash');
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
var quoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, message: "name is required homie" },
  quote: { type: String, required: true, message: "quote is required dude!" }
},
  { timestamps: true }
);

mongoose.model('Quote', quoteSchema);
var Quote = mongoose.model('Quote');
require('./server/config/routes.js')(app)