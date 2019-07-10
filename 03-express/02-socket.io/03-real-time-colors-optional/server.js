const express = require('express');
const app = express();
app.set('views', __dirname + '/public');
const server = app.listen(1337);
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
var color = "";

io.on('connection', function (socket) {
  socket.emit('greeting', { msg: 'Sup with it, vanilla face?' });
  socket.emit('bgColor', { color: color });
  socket.on('greenPush', function (data) {
    color = "green";
    console.log(color);
    socket.emit('changeGreen', { color: "green" });
  });
  socket.on('bluePush', function (data) {
    color = "blue";
    console.log(color);
    socket.emit('changeBlue', { color: "blue" });
  });
  socket.on('pinkPush', function (data) {
    color = "pink";
    console.log(color);
    socket.emit('changePink', { color: "pink" });
  });
});

app.get('/', function (request, response) {
  response.render('index');
});

