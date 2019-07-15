const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const server = app.listen(1337);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "Email is already taken"],
  },
  f_name: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  l_name: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    // minlength: [8, "Password must be at least 8 characters"],
    // maxlength: [30, "Password must be less than 30 characters"],
  },
  cpassword: {
    type: String,
    // required: [true, "Please retype your password"],
  },
  dob: {
    type: Date,
    required: [true, "Please enter your birthdate"],
  },
}, { timestamps: true })


mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

const User = mongoose.model('User', UserSchema);

app.get("/", function (req, res) {
  res.render('index');
});

app.post("/register", function (req, res) {
  console.log("POST DATA: " + req.body);
  bcrypt.hash(req.body.password, 10)
    .then(hashed_password => {
      const newUser = new User({
        email: req.body.email,
        f_name: req.body.fname,
        l_name: req.body.lname,
        password: hashed_password,
        dob: req.body.dob,
      })
      // .catch(error => {
      //   console.log('something aint right');
      //   for (var key in err.errors) {
      //     req.flash('registration', err.errors[key].message);
      //   }
      //   res.redirect("/");
      // });
      console.log(newUser);
      newUser.save(function (err) {
        if (err) {
          console.log('something aint right');
          for (var key in err.errors) {
            req.flash('registration', err.errors[key].message);
          }
          res.redirect("/");
        } else {
          console.log("homie is in the db now!");
          res.redirect("/");
        }
      })
    })
})

app.post("/login", function (req, res) {
  User.findOne({ email: req.body.logemail })
    .then(user => {
      console.log(req.body.pw, user.password);
      bcrypt.compare(req.body.pw, user.password, function (err, result) {
        if (result === true) {
          console.log("success!!!!!");
          res.redirect('/dashboard');
        } else {
          console.log("f***!!!" + err);
          res.redirect('/');
        }
      })
    })
    .catch(error => {
      console.log('username/password doesnt exist');
      req.flash('invalid', 'Username/Password is incorrect');
      res.locals.message = req.flash();
    })
});