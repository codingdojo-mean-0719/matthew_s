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

var animalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'You must supply a type of animal!!'],
    index: true
  },
  name: {
    type: String,
    required: [true, 'You must give it a name!!'],
  }
},
  { timestamps: true }
);

mongoose.model('Animal', animalSchema);
var Animal = mongoose.model('Animal');

app.get('/', function (req, res) {
  Animal.find({})
    .then(results => {
      res.render('index', { animals: results })
    })
    .catch(err => {
      console.log("error fetching data:", err)
    });
});

app.get('/mongooses/new', function (req, res) {
  res.render('new');
});

app.post('/mongooses', function (req, res) {
  console.log("Post Data: ", req.body);
  var animal = new Animal(req.body);
  animal.save(function (err) {
    if (err) {
      console.log('something aint right');
      for (var key in err.errors) {
        req.flash('registration', err.errors[key].message);
      }
      res.redirect("/mongooses/new");
    } else {
      console.log("homie is in the db now!");
      res.redirect("/");
    }

  })
})

app.get('/mongooses/:id', function (req, res) {
  Animal.find({ _id: req.params.id })
    .then(results => {
      res.render('specific', { details: results })
    })
    .catch(err => {
      console.log("error fetching data:", err)
    });
});

app.get('/mongooses/edit/:id', function (req, res) {
  Animal.find({ _id: req.params.id })
    .then(results => {
      res.render('edit', { details: results })
    })
    .catch(err => {
      console.log("error fetching data:", err)
    });
});

app.post('/mongooses/:id', function (req, res) {
  Animal.update({ _id: req.params.id }, { $set: { type: req.body.type, name: req.body.name } }, function (err) {
    res.redirect('/')
  })
});


app.post('/mongooses/destroy/:id', function (req, res) {
  console.log(req.params.id);
  Animal.remove({ _id: req.params.id }, function (err) {
    res.redirect('/')
  })
});