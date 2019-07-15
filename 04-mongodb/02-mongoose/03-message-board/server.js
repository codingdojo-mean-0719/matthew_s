const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const server = app.listen(1337);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;


const CommentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "must have a user"]
  },
  comment: {
    type: String,
    required: [true, "comment must be populated"]
  },
}, { timestamps: true })
const MessageSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "must have a user"]
  },
  message: {
    type: String,
    required: [true, "message must be populated"]
  },
  comments: [CommentSchema]
},
  { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

app.get("/", function (req, res) {
  Message.find({})
    .then(results => {
      res.render('index', { posts: results })
    })
    .catch(err => {
      console.log("error fetching data:", err)
    });
});

app.post("/post", function (req, res) {
  console.log("POST DATA: " + req.body);
  const message = new Message(req.body);
  message.save(function (err) {
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

app.post("/comment/:id", function (req, res) {
  console.log("Comment Data: " + req.body);
  const comment = new Comment(req.body);
  Message.findOneAndUpdate({ _id: req.params.id }, {
    $push: { comments: comment }
  }, function (err, data) {
    res.redirect('/')
  })
});
