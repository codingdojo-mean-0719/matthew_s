const express = require('express');
const app = express();
const session = require('express-session');
app.set('views', __dirname + '/public');
const server = app.listen(1337);
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));
app.use(session({
  secret: "whatsuphomie!?!",
  resave: false,
  saveUnitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');


class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class Message {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }
}

// list of chatroom members
const users = {};
var chat = [];


io.on('connection', function (socket) {
  //Display previous messages
  socket.emit('loadChat', chat);
  //Register new user and push to objects group
  socket.on('addUser', function (data) {
    //Create New User Object with Name passed in from data
    const user = new User(data, socket.id);
    users[socket.id] = user;
    console.log(users);
    //Push to Chat Array
    chat.push(user.name + " has entered the chat");
    console.log(chat);
    //Emit to client that user has joined the chat
    io.sockets.emit('joinedUser', chat);
  });
  socket.on('sendChat', function (data) {
    //Retrieve User of the chat identifying by socket ID
    const user = users[socket.id]
    //Create message object with user and socket ID attached, data is the message typed
    const message = new Message(user, data);
    //Send message to chat array
    chat.push(message.user.name + ": " + message.content);
    //Emit new chat to front end
    io.sockets.emit('updatedChat', chat);
  })
  socket.on('disconnect', function () {
    const user = users[socket.id]
    chat.push(user.name + " has left the building");
    io.sockets.emit('userLeft', chat);
    console.log("disconnected");
  })
});



app.get('/', function (request, response) {
  response.render('index');
});