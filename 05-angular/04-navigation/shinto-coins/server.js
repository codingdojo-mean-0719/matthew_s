const express = require('express');
const app = express();
const server = app.listen(8000);
const path = require('path');
app.use(express.static(__dirname + '/dist/shinto-coins'))
app.use(require('./server/routes/catch.routes'))

