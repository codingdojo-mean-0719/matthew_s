const express = require('express');
const app = express();
app.set('views', __dirname + '/public');
const server = app.listen(1337);
const io = require('socket.io')(server);
app.set('view engine', 'ejs');

var counter = 0
io.on('connection', function (socket) {
  socket.emit('greeting', { msg: 'Sup with it, vanilla face?' });
  socket.on('button_click', function (data) {
    counter += data.counter;
    console.log(counter);
    //Emit Updated Counter    
    socket.emit('updated_counter', { counter: counter });
  });
  socket.on('reset_click', function () {
    counter = 0;
    socket.emit('updated_counter', { counter: counter });
  });
});

app.get('/', function (request, response) {
  response.render('index', { counter: counter });
})

app.listen(8000, function () {
  console.log("listening on port 8000");
})