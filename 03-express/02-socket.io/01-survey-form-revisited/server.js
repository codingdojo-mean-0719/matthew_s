const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
app.set('views', __dirname + '/public');
const server = app.listen(1337);
const io = require('socket.io')(server);
app.use(session({
  secret: "codingdojoROCKS",
  resave: false,
  saveUninitlaized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

io.sockets.on('connection', function (socket) {
  socket.emit('greeting', { msg: 'Lets get ready to rock some sock(et)s!' });
  socket.on('posting_form', function (data) {
    console.log(data);
    //Emit Updated Message
    socket.emit('updated_message', { name: data.name, location: data.location, language: data.language, comments: data.comments });
    //Lucky Number 
    socket.emit('random_number', { num: Math.floor(Math.random() * 1000) });
  });
});

app.get('/', function (request, response) {
  response.render('index');
})

